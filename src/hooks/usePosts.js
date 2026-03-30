import { useEffect, useRef, useState } from 'react';

import loadPosts from '../components/Posts/loadPosts';

const usePosts = (postRefs) => {
	const [posts, setPosts] = useState(loadPosts());
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

		setPosts((prevPosts) => [...prevPosts, newPost]);

		setNewId(newPost.id);

		setPostAuthor('');
		setPostContent('');
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
