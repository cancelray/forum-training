import { forwardRef } from 'react';

import styles from './Post.module.css';

const Post = forwardRef((props, ref) => {
	const { postAuthor, postDate, postContent, nicknameClick } = props;

	return (
		<div
			className={styles.post}
			ref={ref}
		>
			<div className={styles.head}>
				<p
					onClick={nicknameClick}
					className={styles.author}
				>
					{postAuthor}
				</p>
				<div className={styles.date}>{postDate}</div>
			</div>
			<div className={styles.conten}>{postContent}</div>
		</div>
	);
});

export default Post;
