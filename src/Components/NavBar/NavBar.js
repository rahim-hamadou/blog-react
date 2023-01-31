import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [largeur, setLargeur] = useState(window.innerWidth);

	const toogleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setLargeur(window.innerWidth);
		};
		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);
	return (
		<div className="App navbar ">
			{toggleMenu ||
				(largeur > 500 && (
					<div className="nav  ">
						<NavLink
							to="/"
							// on custom la class active si le btn de nav renvoie la {props} isActive
							className={({ isActive }) => {
								return isActive ? "activeLink" : "";
							}}
							// style={(isActive) => {
							// 	return isActive ? { color: "purple" } : { color: "yellow" };
							// }}
						>
							Acceuil
						</NavLink>
						<NavLink
							to="/ecrire"
							className={({ isActive }) => {
								return isActive ? "activeLink" : "";
							}}
						>
							Ecrire
						</NavLink>
						{/* <NavLink
							// chemin avec un params
							to="/Profil/"
							className={({ isActive }) => {
								return isActive ? "activeLink" : "";
							}}
						>
							Profil
						</NavLink> */}
						<NavLink
							to="/Contact"
							className={({ isActive }) => {
								return isActive ? "activeLink" : "";
							}}
						>
							Contact
						</NavLink>
					</div>
				))}

			<button className="btn-nav" onClick={toogleNav}>
				Navigation
			</button>
		</div>
	);
}
