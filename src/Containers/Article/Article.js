import React from "react";
import { useParams, useLocation } from "react-router-dom";

import "./Article.css";

export default function Article() {
	// useParams
	const params = useParams();
	console.log("params", params);
	// useLocation
	const location = useLocation();
	console.log("location", location);
	return (
		<div className="article-content">
			<h2 title={location.state.title}>Votre article : {location.state.title}</h2>
			<p>{location.state.body}</p>

			<p>{params.slug}</p>
			{/* <p>{location}</p> */}
		</div>
	);
}
