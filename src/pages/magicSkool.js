import React, { Component } from 'react';
import MagicBanner from '../components/magicskool/magicBanner';
import Header from '../shared/Header'
import ProjectOverview from '../components/magicskool/projextOverview';
import Discovery from '../components/magicskool/discovery';

class magicSkool extends Component {
	render() {
		return (
			<div>
				<Header/>
				<MagicBanner />
				<ProjectOverview />
				<Discovery/>
			</div>
		)
	}
}
export default magicSkool;
