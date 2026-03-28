import { useEffect, useState } from 'react';

import loadPosts from '../components/Posts/loadPosts';

const usePosts = (postRefs) => {
	const [posts, setPosts] = useState(loadPosts());
	const [postAuthor, setPostAuthor] = useState('');
	const [postContent, setPostContent] = useState('');
	const [newId, setNewId] = useState(null);

	const addPost = (event) => {
		event.preventDefault();

		const currentDate = new Date().toLocaleString();

		const newPost = {
			id: crypto?.randomUUID() ?? Date.now().toString(),
			postAuthor: postAuthor,
			postDate: currentDate,
			postContent: postContent,
		};

		setPosts((prevPosts) => [...prevPosts, newPost]);

		setNewId(newPost.id);

		setPostAuthor('');
		setPostContent('');
	};

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	useEffect(() => {
		if (newId) {
			postRefs.current[newId].scrollIntoView({
				behavior: 'smooth',
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newId]);

	return {
		posts,
		addPost,
		postAuthor,
		setPostAuthor,
		postContent,
		setPostContent,
	};
};

export default usePosts;
