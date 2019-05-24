import React, { Component } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import HeroInformation from './components/HeroInformation/HeroInformation';
import HeroFilmography from './components/HeroFilmography/HeroFilmography';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			hero: [],
			heroId: 1,
			url: 'https://swapi.co/api/people/',
			films: [],
		};
	}


	componentDidMount() {
		const { url, heroId } = this.state;
		this.getData(url, heroId);
	}

	getData = async (url, heroId) => {
		const res = await fetch(`${url}${heroId}`);
		const data = await res.json();
		this.setState({
			hero: data,
		});
		if (data.films) {
			const filmsUrl = await Promise.all(data.films.map(film => fetch(film)
				.then(resp => resp.json())));
			this.setState({
				films: filmsUrl,
			});
		}
	}


	prev = (heroId, url) => {
		if (heroId >= 2) {
			this.setState({
				heroId: heroId - 1,
			}, () => this.getData(url, heroId - 1));
		}
	}

	next = (heroId, url) => {
		this.setState({
			heroId: heroId + 1,
		}, () => this.getData(url, heroId + 1));
	}


	render() {
		const {
			hero, heroId, url, films,
		} = this.state;
		return (
			<div className="app">
				<h3 className="app__title">Star Wars Heroes</h3>
				<div className="app__wrapper">
					<Hero
						heroId={heroId}
						url={url}
						getData={this.getData}
						prev={this.prev}
						next={this.next}
					/>
					<HeroInformation
						hero={hero}
					/>
					<HeroFilmography
						films={films}
					/>

				</div>
			</div>
		);
	}
}
