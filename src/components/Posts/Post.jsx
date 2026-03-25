import { forwardRef } from 'react';

const Post = forwardRef((props, ref) => {
	const { postAuthor, postDate, postContent } = props;

	return (
		<div
			className='post'
			ref={ref}
		>
			<div className='post-head'>
				<a
					href='#'
					className='post-author'
				>
					{postAuthor}
				</a>
				<div className='post-date'>{postDate}</div>
			</div>
			<div className='post-content'>{postContent}</div>
		</div>
	);
});

export default Post;
