const useInputOnChange = (
	setPostAuthor,
	setPostContent,
	setSearchInPosts,
	setError,
) => {
	const onChange = (event) => {
		const { value, id } = event.target;

		const trimInput = value.trim();
		const isEmptyInput = value.length > 0 && trimInput.length === 0;

		switch (id) {
			case 'author-input':
				setPostAuthor(value);
				break;
			case 'post-input':
				setPostContent(value);
				break;
			case 'search-input':
				setSearchInPosts(value);
				break;
		}

		setError(
			isEmptyInput
				? { target: id, error: 'Cannot be empty' }
				: { target: null, error: '' },
		);
	};

	return { onChange };
};

export default useInputOnChange;
