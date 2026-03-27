import { useEffect, useState } from 'react';

const usePostsSearch = (posts, postRefs) => {
	const [searchInPosts, setSearchInPosts] = useState('');
	const [prevSearch, setPrevSearch] = useState('');
	const [searchPostsArr, setSearchPostsArr] = useState([]);
	const [searchIndex, setSearchIndex] = useState(-1);

	const searchFunc = (event) => {
		event.preventDefault();

		if (!searchInPosts) {
			setSearchPostsArr([]);
			setSearchIndex(0);
			alert('Nothing to search');
			return;
		}

		const targetPosts = posts.filter(({ postContent }) =>
			postContent.toLowerCase().includes(searchInPosts.toLowerCase()),
		);

		if (targetPosts.length === 0) {
			setSearchPostsArr([]);
			setSearchIndex(0);
			alert('No search result');
			return;
		}

		if (prevSearch !== searchInPosts) {
			setPrevSearch(searchInPosts);
			setSearchPostsArr(targetPosts);
			setSearchIndex(0);
			return;
		}

		searchIndex === searchPostsArr.length - 1
			? setSearchIndex(0)
			: setSearchIndex(searchIndex + 1);
	};

	useEffect(() => {
		if (searchPostsArr.length > 0) {
			const targetPostId = searchPostsArr[searchIndex].id;
			postRefs.current[targetPostId].scrollIntoView({
				behavior: 'smooth',
			});
		}
	}, [searchPostsArr, searchIndex]);

	return {
		searchFunc,
		searchInPosts,
		setSearchInPosts,
		searchPostsArr,
		setSearchPostsArr,
		prevSearch,
		setPrevSearch,
		searchIndex,
		setSearchIndex,
		postRefs,
	};
};

export default usePostsSearch;
