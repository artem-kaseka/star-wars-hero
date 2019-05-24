import React from 'react';
import PropTypes from 'prop-types';

import './Btn.css';

const Btn = props => {
	const { title, handleClick } = props;
	return (
		<button
			className="btn"
			type="button"
			onClick={handleClick}
		>
			{title}
		</button>
	);
};

Btn.propTypes = {
	title: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default Btn;
