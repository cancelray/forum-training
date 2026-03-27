import { useRef, useState } from 'react';
import usePostsSearch from '../hooks/usePostsSearch';

import Header from './Header/Header';
import PostForm from './PostForm/PostForm';
import PostArea from './Posts/PostArea';

import { PostsContext } from '../context/PostsContext';
import useInputOnChange from '../hooks/useInputOnChange';
import usePosts from '../hooks/usePosts';

const ForumMain = () => {
	const [error, setError] = useState({ target: null, error: '' });

	const postRefs = useRef({});

	const {
		posts,
		addPost,
		postAuthor,
		setPostAuthor,
		postContent,
		setPostContent,
	} = usePosts(postRefs);

	const { searchInPosts, setSearchInPosts, searchFunc } = usePostsSearch(
		posts,
		postRefs,
	);

	const { onChange } = useInputOnChange(
		setPostAuthor,
		setPostContent,
		setSearchInPosts,
		setError,
	);

	return (
		<PostsContext.Provider
			value={{
				posts,
				addPost,
				postAuthor,
				postContent,
				searchInPosts,
				postRefs,
				error,
				onChange,
				searchFunc,
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
