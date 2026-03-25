import { useEffect, useRef, useState } from 'react';

import Header from './Header/Header';
import PostForm from './PostForm/PostForm';
import PostArea from './Posts/PostArea';

import { PostsContext } from '../context/PostsContext';
import loadPosts from './Posts/LoadPosts';

const ForumMain = () => {
	const [posts, setPosts] = useState(loadPosts());
	const [postAuthor, setPostAuthor] = useState('');
	const [postContent, setPostContent] = useState('');
	const [searchInPosts, setSearchInPosts] = useState('');
	const [prevSearch, setPrevSearch] = useState('');
	const [searchPostsArr, setSearchPostsArr] = useState([]);
	const [searchIndex, setSearchIndex] = useState(-1);
	const [newId, setNewId] = useState(null);

	const postRefs = useRef({});

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	useEffect(() => {
		if (newId) {
			postRefs.current[newId].scrollIntoView({
				behavior: 'smooth',
			});
		}
	}, [newId]);

	useEffect(() => {
		if (searchPostsArr.length > 0) {
			const targetPostId = searchPostsArr[searchIndex].id;
			postRefs.current[targetPostId].scrollIntoView({
				behavior: 'smooth',
			});
		}
	}, [searchPostsArr, searchIndex]);

	return (
		<PostsContext.Provider
			value={{
				posts,
				setPosts,
				postAuthor,
				setPostAuthor,
				postContent,
				setPostContent,
				searchInPosts,
				setSearchInPosts,
				postRefs,
				setNewId,
				searchPostsArr,
				setSearchPostsArr,
				prevSearch,
				setPrevSearch,
				searchIndex,
				setSearchIndex,
			}}
		>
			<Header />
			<div className='forum-main'>
				<PostArea />
				<PostForm />
			</div>
		</PostsContext.Provider>
	);
};

export default ForumMain;
