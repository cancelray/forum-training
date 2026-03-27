import { useContext } from 'react';

import { PostsContext } from '../../context/PostsContext';

import Button from '../UI/Button';

const SearchForm = () => {
	const { error, onChange, searchInPosts, searchFunc } =
		useContext(PostsContext);

	return (
		<form
			className='search-box'
			onSubmit={searchFunc}
		>
			<div className='search-field'>
				<input
					id='search-input'
					type='search'
					className={`search-input ${error.target === 'search-input' ? 'not-valid' : ''}`}
					placeholder='Search'
					value={searchInPosts}
					onChange={onChange}
				/>
				{error.target === 'search-input' && (
					<span className='error'>{error.error}</span>
				)}
			</div>

			<Button
				type='submit'
				isDisabled={searchInPosts.trim().length === 0}
			>
				Search
			</Button>
		</form>
	);
};

export default SearchForm;
