const loadPosts = () => {
	const savedPosts = localStorage.getItem('posts');

	if (savedPosts) {
		return JSON.parse(savedPosts);
	}

	return [
		{
			id: 'post-1',
			postAuthor: 'User123',
			postDate: '15.03.2026, 14:20:12',
			postContent: 'Hello! This is the first message on the forum.',
		},
		{
			id: 'post-2',
			postAuthor: 'Nick',
			postDate: '15.03.2026, 14:24:51',
			postContent: 'Hello! Welcome!',
		},
		{
			id: 'post-3',
			postAuthor: 'June',
			postDate: '15.03.2026, 15:01:38',
			postContent: 'Hello! Nice to see you.',
		},
	];
};

export default loadPosts;
