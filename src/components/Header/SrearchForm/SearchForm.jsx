import { useContext } from 'react';

import { PostsContext } from '../../../context/PostsContext';

import Button from '../../UI/Button/Button';

import styles from './SearchForm.module.css';

const SearchForm = () => {
	const { error, onChange, searchInPosts, searchFunc } =
		useContext(PostsContext);

	return (
		<form
			className={styles.searchBox}
			onSubmit={searchFunc}
		>
			<div className={styles.field}>
				<input
					id='search-input'
					type='search'
					className={`
						${styles.input} 
						${error.target === 'search-input' ? styles.notValid : ''}`}
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
