import React from 'react';
import PropTypes from 'prop-types';

import './Hero.css';

import Btn from '../Btn/Btn';

const Hero = props => {
	const { url, heroId, prev, next } = props;

	return (
		<div className="hero">
			<img className="hero__img" src={`https://starwars-visualguide.com/assets/img/characters/${heroId}.jpg`} alt="hero img" />
			<div className="hero__buttons">
				<Btn title="Prev" handleClick={() => prev(heroId, url)} />
				<Btn title="Next" handleClick={() => next(heroId, url)} />
			</div>
		</div>
	);
};

Hero.propTypes = {
	url: PropTypes.string.isRequired,
	heroId: PropTypes.number.isRequired,
	prev: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,	
}
export default Hero;
