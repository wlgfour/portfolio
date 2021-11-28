import React from "react";
import p5 from 'p5'
import {randFloat, randInt} from '../utils/rand'


class Particle {
    /**
     * simulates a particle moving around
     * @param {*} width 
     * @param {*} height 
     */
    constructor(width, height) {
        this.width = width
        this.height = height

        this.x = randFloat(0, width)
        this.y = randFloat(0, height)
        let s = 0.75;
        this.dx = randFloat(-2 * s, 2 * s)
        this.dy = randFloat(-1 * s, 1 * s)
        this.r = randInt(2, 8)
    }

    move() {
        // move by dx, dy and turn around if moved too far
        if (this.x < 0 || this.x > this.width)
            this.dx *= -1
        if (this.y < 0 || this.y > this.height)
            this.dy *= -1
        this.x += this.dx
        this.y += this.dy
    }
}


const Jumbotron = () => {
    const ref = React.useRef();

    React.useEffect(() => {
        new p5(animate, ref.current)
    })

    const animate = (p) => {
        // get width and height of containing div
        const width = ref.current.clientWidth
        const height = ref.current.clientHeight

        // initiate all of the particles
        let particles = [];
        for (let i=0; i < width / 10; i++) {
            particles.push(new Particle(width, height))
        }
        
        window.addEventListener("resize", () => {
            // get new width and height of canvas and resize it
            const nw = ref.current.clientWidth
            const nh = ref.current.clientHeight
            p.resizeCanvas(nw, nh)

            // set new environment for particles and teleport if they run away
            particles.forEach(particle => {
                particle.width = nw
                if (particle.x > nw)
                    particle.x = randFloat(0, nw)

                particle.height = nh
                if (particle.y > nh)
                    particle.y = randFloat(0, nh)
            })
        });

        // create the canvas and set the framerate
        p.setup = () => {
            p.createCanvas(width, height)
            p.frameRate(30)
        }
    
        // draw loop of p5
        p.draw = () => {
            p.clear()
            particles.forEach((particle, i) => {
                // move the particle and for each unique parit of particles....
                particle.move()
                particles.slice(i + 1).forEach(particle2 => {
                    // draw a line between close particles and style by distance
                    let d = p.dist(particle.x, particle.y, particle2.x, particle2.y);
                    if (d < 100) {
                        p.stroke(`rgba(0, 0, 0, ${(100 - d) / 600})`);
                        p.strokeWeight(3 * (particle.r + particle2.r) / 16)
                        p.line(particle.x, particle.y, particle2.x, particle2.y)
                    }
                })
            })
        }
    }

    return (
        <div className='jumbotron' ref={ref}></div>
    )
}

export default Jumbotron