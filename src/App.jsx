import { useRef, useState } from 'react';
import useInputOnChange from './hooks/useInputOnChange';
import usePosts from './hooks/usePosts';
import usePostsSearch from './hooks/usePostsSearch';

import ForumMain from './components/ForumMain';

import { PostsContext } from './context/PostsContext';

function App() {
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
			{' '}
			<ForumMain />
		</PostsContext.Provider>
	);
}

export default App;
