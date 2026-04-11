import { useContext } from 'react';

import { PostsContext } from '../../../context/PostsContext';

import Post from '../Post/Post';

import styles from './PostArea.module.css';

const PostArea = () => {
	const { posts, postRefs, nicknameClick } = useContext(PostsContext);

	return (
		<div className={styles.postArea}>
			{posts?.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					ref={(el) => {
						if (el) {
							postRefs.current[post.id] = el;
						}
					}}
					postAuthor={post.postAuthor}
					postDate={post.postDate}
					postContent={post.postContent}
					nicknameClick={nicknameClick}
				/>
			))}
		</div>
	);
};

export default PostArea;
