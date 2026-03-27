import { useContext } from 'react';

import { PostsContext } from '../../context/PostsContext';
import Button from '../UI/Button';

const PostForm = () => {
	const { addPost, postAuthor, postContent, error, onChange } =
		useContext(PostsContext);

	return (
		<form
			className='post-form'
			onSubmit={addPost}
		>
			<div className='field'>
				{' '}
				<input
					id='author-input'
					type='text'
					className={`author-input ${error.target === 'author-input' ? 'not-valid' : ''}`}
					placeholder='Your name'
					value={postAuthor}
					onChange={onChange}
				/>
				{error.target === 'author-input' && (
					<span className='error'>{error.error}</span>
				)}
			</div>

			<div className='field'>
				{' '}
				<textarea
					id='post-input'
					className={`post-input ${error.target === 'post-input' ? 'not-valid' : ''}`}
					placeholder='Write a message...'
					value={postContent}
					onChange={onChange}
				/>
				{error.target === 'post-input' && (
					<span className='error'>{error.error}</span>
				)}
			</div>

			<Button
				type='submit'
				isDisabled={
					postAuthor.trim().length === 0 || postContent.trim().length === 0
				}
			>
				Post
			</Button>
		</form>
	);
};

export default PostForm;
