import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
import Button from '../Button';

const SearchForm = () => {
	const {
		posts,
		searchInPosts,
		setSearchInPosts,
		searchPostsArr,
		setSearchPostsArr,
		prevSearch,
		setPrevSearch,
		searchIndex,
		setSearchIndex,
	} = useContext(PostsContext);

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

	return (
		<form
			className='search-box'
			onSubmit={searchFunc}
		>
			<input
				type='search'
				className='search-input'
				placeholder='Search'
				value={searchInPosts}
				onChange={(event) => {
					setSearchInPosts(event.target.value);
				}}
			/>

			<Button type='submit'>Search</Button>
		</form>
	);
};

export default SearchForm;
