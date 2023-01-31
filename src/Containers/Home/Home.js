import React from "react";
import "./Home.css";
import Card from "../../Components/Card/Card.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import fn
import { getArticles } from "../../Redux/articles/articleReducer.js";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Home() {
	const { articles } = useSelector((state) => ({
		...state.articleReducer,
	}));

	const dispatch = useDispatch();

	useEffect(() => {
		// si il n'ya pas d'article dans le tab du state , on refait un appel
		if (articles.length === 0) {
			dispatch(getArticles());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1 className="home-title">Tous les Articles</h1>
			<div className="container-cards">
				{/* card statique */}
				{/* <Card>
					<h2>Hello</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</Card> */}
				{articles.map((item) => {
					return (
						<Card key={uuidv4()}>
							<h2>{item.title}</h2>
							{/* on va vers le lien selectionné */}
							{/* le Link permet de passer des states en cliquant sur le lien precis, ici le title et body depuis items */}
							<Link
								to={`/articles/${item.title.replace(/\s+/g, "-").trim()}`}
								state={{ brut: item, title: item.title, body: item.body }}
							>
								Lire l'article
							</Link>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
