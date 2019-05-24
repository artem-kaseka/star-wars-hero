import React from 'react';
import PropTypes from 'prop-types';

import './HeroInformation.css';

const HeroInformation = ({ hero }) => {
	const fields = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

	return (
		<ul className="hero-information">
			{
				fields.map(field => (
					<li key={field}>
						<span>{`${field.replace('_', ' ')}: `}</span>
						{hero[field]}
					</li>
				))
			}

		</ul>
	);
};

HeroInformation.propTypes = {
	hero: PropTypes.objectOf(PropTypes.oneOf([PropTypes.string, PropTypes.number])).isRequired,
};


export default HeroInformation;
