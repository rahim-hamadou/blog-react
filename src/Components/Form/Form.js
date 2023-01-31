import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function AddArticle() {
	// declaration state (objet)
	const [article, setArticle] = useState({
		title: "",
		body: "",
	});

	// envoie des données vers le store
	const dispatch = useDispatch();

	// gestion du form par fn
	const handleForm = (e) => {
		// bloque le reload
		e.preventDefault();
		// send to store

		// si on useRef pour le form avant le dispatch
		const newArticle = {
			title: inputsRef.current[0],
			body: inputsRef.current[1],
		};

		dispatch({
			type: "ADDARTICLE",
			// si on useState pour le form
			payload: article,
			// si on useRef pour le form
			// payload: newArticle,
		});
		setArticle({
			title: "",
			body: "",
		});

		// si on useRef pour le form, on reset les inputs
		// e.target.reset();
	};
	// gestion des inputs par fn
	const handleInputs = (e) => {
		// si la cible a une class qui contient
		if (e.target.classList.contains("inp-title")) {
			// on cree un obj, a partir du state
			const newObjState = { ...article, title: e.target.value };
			// on remplace la prop  title de l'object article par le nouveau
			setArticle(newObjState);
		}
		// si la cible a une class qui contient
		else if (e.target.classList.contains("inp-body")) {
			// on remplace la prop  body de l'object article
			const newObjState = { ...article, body: e.target.value };
			setArticle(newObjState);
		}
	};

	const showState = () => {
		console.log("article", article);
		// console.log("ref", newArticle);
	};

	// use STATE FOR FORM

	// use REF FOR FORM
	const inputsRef = useRef([]);

	const addRefs = (el) => {
		// si l'el n'existe et n'est aps dans le tab de ref
		if (el && !inputsRef.current.includes(el)) {
			// on add el au tab de ref
			inputsRef.current.push(el);
		}
	};

	// use REF FOR FORM
	return (
		<>
			<h1 className="title-form">Ecrire un Article</h1>
			<form onSubmit={handleForm} className="container-form">
				<label htmlFor="title">Titre</label>
				<input
					ref={addRefs}
					className="inp-title"
					onChange={handleInputs}
					value={article.title}
					type="text"
					id="text"
					placeholder="Entrez un Titre"
					required
				/>
				<label htmlFor="article">Votre article</label>
				<textarea
					ref={addRefs}
					className="inp-body"
					onChange={handleInputs}
					value={article.body}
					type="text"
					id="text"
					placeholder="Votre Article"
					required
				/>

				<button onClick={showState} className="btn-form">
					Poster l'article
				</button>
			</form>
		</>
	);
}
