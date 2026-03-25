import { useContext } from 'react';

import { PostsContext } from '../../context/PostsContext';

import Post from './Post';

const PostArea = () => {
	const { posts, postRefs } = useContext(PostsContext);

	return (
		<div className='post-area'>
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
				/>
			))}
		</div>
	);
};

export default PostArea;
