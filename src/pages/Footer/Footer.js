import React from "react";
import "./Footer.css";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiOutlineWhatsApp,
	AiFillPhone,
	AiOutlineMail
} from "react-icons/ai";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footerinner">
				<div className="f1">
					<span>Social Media</span>
					<div className="socicons">
						<AiFillFacebook size={27} />
						<AiFillTwitterSquare size={27} />
						<AiOutlineWhatsApp size={27} />
					</div>
				</div>
				<div className="f3">
					<p>About</p>
					<p>Skills</p>
					<p>Projects</p>
				</div>
				<div className="f2">
					<span>Contact</span>
					<div className="socicons">
						<AiFillPhone size={27} />
						<AiOutlineMail size={27} />
					</div>
				</div>
			</div>
		</div>
	);
};
