import Header from '../Header/Header';
import PostForm from '../PostForm/PostForm';
import PostArea from '../Posts/PostArea/PostArea';

import styles from './ForumMain.module.css';

const ForumMain = () => {
	return (
		<>
			<Header />
			<div className={styles.forumMain}>
				<PostArea />
				<PostForm />
			</div>
		</>
	);
};

export default ForumMain;
