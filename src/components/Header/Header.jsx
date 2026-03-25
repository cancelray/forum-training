import SearchForm from './SearchForm';

const Header = () => {
	return (
		<header className='header'>
			<a
				href='/'
				className='icon'
			>
				FORUM
			</a>
			<SearchForm />
		</header>
	);
};

export default Header;
