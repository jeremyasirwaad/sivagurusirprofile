import React from "react";
import App from "../../App";
import "./Landing.css";
import photo from "../../photo.png";
import Typewriter from "typewriter-effect";

export const Landing = () => {
	return (
		<div className="landingpage">
			<div className="land1">
				<div className="innerland1">
					<h2>Hi I am Sivaguru</h2>
					<Typewriter
						options={{
							strings: [
								"Hi I am A passionate fullstack developer",
								"HOD at Government Polytechnic College, Coimbatore",
								"Persian Cat Lover !"
							],
							autoStart: true,
							loop: true
						}}
					/>

					<button>About Me</button>
				</div>
			</div>
			<div className="land2">
				<div className="land2inner">
					<img src={photo} alt="" />
				</div>
			</div>
		</div>
	);
};
