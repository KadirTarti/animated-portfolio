import React from 'react'
import './navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
    <Sidebar/>
    <div className="wrapper">
        <motion.span
        initial={{opacity:0 , scale: 0.5}} animate={{opacity:1 , scale: 1.5}} transition= {{duration: 1}}>
        AKT
        </motion.span>
        <div className="social">
            <a href=""><img src="./github.png" alt="" /></a>
            <a href=""><img src="./linkedin.png" alt="" /></a>
            <a href=""><img src="./xing.png" alt="" /></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar