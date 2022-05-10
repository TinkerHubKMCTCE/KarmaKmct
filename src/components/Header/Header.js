import { useState } from "react"
import classes from "./Header.module.css"
import logo from "./Grey-2.png"

import {FiMenu} from "react-icons/fi"

const Header = () => {

    const [scrolled, isScrolled] = useState(false)
    const [mobile, setMobile] =  useState(false)

    window.onscroll = () => {
        isScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <header className={`${!scrolled ? classes.header : classes.scrolledHeader}`}>
            <div className={classes.elements}>

                <div className={classes.logobox}>
                    <img src={logo} alt="/" className={classes.logo} />
                </div>

              <div className={classes.navbox}>
                    <ul className={classes.nav}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Highlights</li>
                        <li>Culturals</li>
                        <li>Contact</li>
                    </ul>
                
                    <button className={classes.btn}>Buy Tickets</button>
                    <div className={classes.hamburger} onClick={() => setMobile(!mobile)}><FiMenu size={20} /></div>
                </div>

                <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
                <button className={classes.btn1}>Buy Tickets</button>
                
                    <ul className={classes.mobileNav}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Highlights</li>
                            <li>Cultural</li>
                            <li>Contact</li>
                        </ul>
                
                   
                </div>
            </div>
        </header>
    )
}

export default Header;