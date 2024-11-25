"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
     {
          name: "home"
     },
     {
          name: "about"
     },
     {
          name: "journey"
     },
     {
          name: "work"
     },
     {
          name: "contact"
     },
]
const Nav = ({ containerStyles, listStyles, LinkStyles, spy }) => {
     return (
          <nav className={containerStyles}>
               <ul className={listStyles}>
                    {links.map((link, index) => {
                         return (
                              <ScrollLink
                                   spy={spy}
                                   key={index}
                                   activeClass="active"
                                   to={link.name}
                                   smooth
                                   className={LinkStyles}
                              >
                                   {link.name}
                              </ScrollLink>
                         );
                    })}
               </ul>
          </nav>
     )
}

export default Nav