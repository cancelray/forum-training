const Button = (props) => {
	const { type, onClick, children } = props;

	return (
		<button
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
