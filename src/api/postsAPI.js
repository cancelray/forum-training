const URL = 'http://localhost:3001/posts';
const headers = {
	'Content-Type': 'application/json',
};

const postsAPI = {
	getPosts: () => {
		return fetch(URL).then((promise) => promise.json());
	},

	add: (newPost) => {
		return fetch(URL, {
			method: 'POST',
			headers,
			body: JSON.stringify(newPost),
		}).then((response) => response.json());
	},
};

export default postsAPI;
