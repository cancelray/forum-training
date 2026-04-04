import { useEffect, useRef, useState } from 'react';

import postsAPI from '../api/postsAPI';

const usePosts = (postRefs) => {
	const [posts, setPosts] = useState([]);
	const [postAuthor, setPostAuthor] = useState('');
	const [postContent, setPostContent] = useState('');
	const [newId, setNewId] = useState(null);

	const inputTextareaRef = useRef(null);

	const addPost = (event) => {
		event.preventDefault();

		const currentDate = new Date().toLocaleString();

		const newPost = {
			id: crypto?.randomUUID() ?? Date.now().toString(),
			postAuthor: postAuthor,
			postDate: currentDate,
			postContent: postContent,
		};

		postsAPI.add(newPost).then((addedPost) => {
			setPosts((prevPosts) => [...prevPosts, addedPost]);

			setNewId(addedPost.id);

			setPostAuthor('');
			setPostContent('');
		});
	};

	const nicknameClick = (event) => {
		const targetNickname = event.target.textContent;
		setPostContent((prev) => targetNickname + ', ' + prev);

		inputTextareaRef.current.scrollIntoView({
			behavior: 'smooth',
		});
		inputTextareaRef.current.focus();
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

	useEffect(() => {
		postsAPI.getPosts().then(setPosts);
	}, []);

	return {
		posts,
		addPost,
		postAuthor,
		setPostAuthor,
		postContent,
		setPostContent,
		inputTextareaRef,
		nicknameClick,
	};
};

export default usePosts;
