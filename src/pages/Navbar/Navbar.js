import React from "react";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<div className="navbar">
			<h3 className="logo">Sivaguru's Portfolio</h3>
			<div className="nav-elements">
				<span>About</span>
				<span>Skills</span>
				<span>My Projects</span>
			</div>
		</div>
	);
};
