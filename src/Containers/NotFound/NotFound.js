import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function Lost() {
	const navigate = useNavigate();

	return (
		<div className="App App-header">
			<h1>
				Wrong way back to home page
				{/* Wrong way back to <a href="google.com">home</a> */}
			</h1>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				back to home
			</button>
		</div>
	);
}
