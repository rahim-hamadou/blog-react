const INITIAL_STATE = {
	articles: [],
};

function articleReducer(state = INITIAL_STATE, action) {
	//eslint-disable-next-line default-case
	switch (action.type) {
		case "LOADARTICLES": {
			return {
				// recup & load articles[] with data
				...state,
				articles: action.payload,
			};
		}
		case "ADDARTICLE": {
			// new tab a partir de articles []
			const newArr = [...state.articles];
			// add to start (unshift) new element action.payload
			newArr.unshift(action.payload);
			// recup & remplace articles[] by new Tab
			return {
				...state,
				articles: newArr,
			};
		}
	}
	return state;
}

export default articleReducer;

// recup des data sur l'API afin de charger le state articles  []
export const getArticles = () => (dispatch) => {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) =>
			// on send les data au state redux
			dispatch({
				type: "LOADARTICLES",
				payload: data,
			}),
		);
};
