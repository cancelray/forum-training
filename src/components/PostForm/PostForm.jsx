import { useContext } from 'react';

import { PostsContext } from '../../context/PostsContext';
import Button from '../Button';

const PostForm = () => {
	const {
		setPosts,
		postAuthor,
		setPostAuthor,
		postContent,
		setPostContent,
		setNewId,
	} = useContext(PostsContext);

	const addPost = (event) => {
		event.preventDefault();

		const currentDate = new Date().toLocaleString();

		if (postAuthor.trim().length > 0 && postContent.trim().length > 0) {
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
		} else if (postAuthor.trim().length === 0) {
			alert('Need enter name');
		} else if (postContent.trim().length === 0) {
			alert('Need enter message');
		}
	};

	return (
		<form
			className='post-form'
			onSubmit={addPost}
		>
			<input
				type='text'
				className='author-input'
				placeholder='Your name'
				value={postAuthor}
				onChange={(event) => {
					setPostAuthor(event.target.value);
				}}
			/>
			<textarea
				className='post-input'
				placeholder='Write a message...'
				value={postContent}
				onChange={(event) => {
					setPostContent(event.target.value);
				}}
			/>
			<Button type='submit'>Post</Button>
		</form>
	);
};

export default PostForm;
