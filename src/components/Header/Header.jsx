import SearchForm from './SrearchForm/SearchForm';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<a
				href='/'
				className={styles.icon}
			>
				<img
					className={styles.imgIcon}
					src='../../../public/forum.png'
					alt='forum'
				/>
			</a>
			<SearchForm />
		</header>
	);
};

export default Header;
