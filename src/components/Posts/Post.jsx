import { forwardRef } from 'react';

const Post = forwardRef((props, ref) => {
	const { postAuthor, postDate, postContent, nicknameClick } = props;

	return (
		<div
			className='post'
			ref={ref}
		>
			<div className='post-head'>
				<p
					onClick={nicknameClick}
					className='post-author'
				>
					{postAuthor}
				</p>
				<div className='post-date'>{postDate}</div>
			</div>
			<div className='post-content'>{postContent}</div>
		</div>
	);
});

export default Post;
