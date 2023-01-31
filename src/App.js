import NavBar from "./Components/NavBar/NavBar.js";
import { Routes, Route } from "react-router-dom";

// provoque un bug de render a cause de BrowserRouter
// import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
// page
import NotFound from "./Containers/NotFound/NotFound.js";
import Home from "./Containers/Home/Home.js";
import Article from "./Containers/Article/Article.js";
import AddArticle from "./Containers/AddArticle/AddArticle.js";
import Contact from "./Containers/Contact/Contact.js";
// import Profil from "./Containers/Profil/Profil.js";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/Ecrire" element={<AddArticle />}></Route>
				{/* <Route path="/Profil" element={<Profil />}></Route> */}
				<Route path="/Contact" element={<Contact />}></Route>
				{/* chemin dynamique evc :id */}
				<Route path="/articles/:slug" element={<Article />}></Route>
				{/* chemin unknow */}
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	);
}

export default App;
