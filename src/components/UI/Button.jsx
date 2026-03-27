const Button = (props) => {
	const { type, onClick, isDisabled, children } = props;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};

export default Button;
