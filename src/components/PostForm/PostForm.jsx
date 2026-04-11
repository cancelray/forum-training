import { useContext } from 'react';

import { PostsContext } from '../../context/PostsContext';
import Button from '../UI/Button/Button';

import styles from './PostForm.module.css';

const PostForm = () => {
	const {
		addPost,
		postAuthor,
		postContent,
		error,
		onChange,
		inputTextareaRef,
	} = useContext(PostsContext);

	return (
		<form
			className={styles.postForm}
			onSubmit={addPost}
		>
			<div className={styles.field}>
				<input
					id='author-input'
					type='text'
					className={`
						${styles.authorInput} 
						${error.target === 'author-input' ? styles.notValid : ''}`}
					placeholder='Your name'
					value={postAuthor}
					onChange={onChange}
				/>
				{error.target === 'author-input' && (
					<span className='error'>{error.error}</span>
				)}
			</div>

			<div className={styles.field}>
				<textarea
					id='post-input'
					className={`
						${styles.postInput} 
						${error.target === 'post-input' ? styles.notValid : ''}`}
					placeholder='Write a message...'
					ref={inputTextareaRef}
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
