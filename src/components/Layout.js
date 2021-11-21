import React from 'react'
import Navbar from './Navbar'
import "../styles/main.scss"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <main>{ children }</main>
        </>
    )
}

export default Layout