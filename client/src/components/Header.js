import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Navbar   variant="primary" className="d-flex justify-content-center align-items-center fs-4 bg-secondary " >
              
              
                    <NavLink to="/" className="text-decoration-none text-black mx-2 border border-primary-subtle rounded bg-white">Home</NavLink>
                  
                     <NavLink to="/register" className="text-decoration-none text-black mx-2 border border-primary-subtle rounded bg-white">Register</NavLink>
                    
               
            </Navbar>
        </>
    )
}

export default Header