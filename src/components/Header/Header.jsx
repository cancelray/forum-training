import SearchForm from './SearchForm';

const Header = () => {
	return (
		<header className='header'>
			<a
				href='/'
				className='icon'
			>
				<img className='img-icon' src="../../../public/forum.png" alt="forum" />
			</a>
			<SearchForm />
		</header>
	);
};

export default Header;
