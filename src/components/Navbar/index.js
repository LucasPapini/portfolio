import logoSvg from '../../assets/logo-navbar.svg';
import { BiMenuAltRight } from "react-icons/bi";
import { Link, animateScroll as scroll } from "react-scroll";

import {Nav, NavContent, NavBrand, NavToggler, NavCollapse} from './styles';

export function Navbar() {
  return (
    <Nav className="container-fluid fixed-top">
      <NavContent className="container">
        <NavBrand>
          <Link to="/">
            <img src={logoSvg} alt="Lucas Papini | Developer FullStack"/> 
          </Link>
        </NavBrand>

        <NavToggler>
            <BiMenuAltRight size={50}/>
        </NavToggler>

        <NavCollapse>
          <ul>
            <li>
              <Link to="/" spy={true} smooth={true} offset={0}>Home</Link>
            </li>

            <li>
              <Link to="about" spy={true} smooth={true} offset={0}>About</Link>
            </li>

            <li>
              <Link to="skills" spy={true} smooth={true} offset={0}>Skills</Link>
            </li>

            <li>
              <Link to="service" spy={true} smooth={true} offset={0}>Service</Link>
            </li>

            <li>
              <Link to="portfolio" spy={true} smooth={true} offset={0}>Portfolio</Link>
            </li>

            <li>
              <Link to="contactme" spy={true} smooth={true} offset={0}>Contactme</Link>
            </li>
          </ul>
        </NavCollapse>
      </NavContent>
    </Nav>
  )
}