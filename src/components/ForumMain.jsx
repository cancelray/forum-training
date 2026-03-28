import Header from './Header/Header';
import PostForm from './PostForm/PostForm';
import PostArea from './Posts/PostArea';

const ForumMain = () => {
	return (
		<>
			<Header />
			<div className='forum-main'>
				<PostArea />
				<PostForm />
			</div>
		</>
	);
};

export default ForumMain;
