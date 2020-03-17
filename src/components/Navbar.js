import React, { Component } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

export default class Navbar extends Component{
	render(){

		return(
			<nav className="nav" id="navBar">
			<div className="nav-content">
				<ul className="nav-items">
					<li className="nav-item">
						<Link
    						activeClass="active"
    						to="about"
    						spy={true}
    						smooth={true}
    						offset={-100}
							>
							About Me
						</Link>
					</li>
					<li className="nav-item">
						<Link
    						activeClass="active"
    						to="projects"
    						spy={true}
    						smooth={true}
    						offset={-100}
							>
							Projects
						</Link>
					</li>
					<li className="nav-item">
						<Link
    						activeClass="active"
    						to="school"
    						spy={true}
    						smooth={true}
    						offset={-100}
							>
							School
						</Link>
					</li>
					<li className="nav-item">
						<Link
    						activeClass="active"
    						to="history"
    						spy={true}
    						smooth={true}
    						offset={-100}
							>
							Work History
						</Link>
					</li>
					<li className="nav-item">
						<Link
    						activeClass="active"
    						to="connect"
    						spy={true}
    						smooth={true}
    						offset={-100}
							>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			</nav>

		);
	}

}