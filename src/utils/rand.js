function randFloat(min, max) {
    return Math.random() * (max - min) + min
}

function randInt(min, max) {
    return Math.floor(randFloat(min, max))
}

export {randFloat, randInt}