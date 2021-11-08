import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
Nav, 
NavLogo, 
NavbarContainer,
MobileIcon, 
NavItem, 
NavMenu, 
NavLinks,
NavBtn,
NavBtnLink
} from "./NavbarElements"


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
      if(window.scrollY >= 80){
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
      <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    dolla
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={true} 
                                  offset={-80}
                                  activeClass="active"
                         >  About </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='discover' 
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={true} 
                                  offset={-80}
                                  activeClass="active">
                            Discover
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='services'
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={true} 
                                  offset={-80}
                                  activeClass="active"
                        >
                            Services
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='signup' 
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={true} 
                                  offset={-80}
                                  activeClass="active"
                        >
                            Sign Up
                        </NavLinks>
                     </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Login</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar