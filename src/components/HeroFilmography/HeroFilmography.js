import React from 'react';
import PropTypes from 'prop-types';

import './HeroFilmography.css';

const HeroFilmography = ({ films }) => {
	const items = films.map(item => (
		<li>{item.title}</li>
	));

	return (
		<ul className="hero-filmography">
			{items}
		</ul>
	);
};

HeroFilmography.propTypes = {
	films: PropTypes.array.isRequired,
};

export default HeroFilmography;
