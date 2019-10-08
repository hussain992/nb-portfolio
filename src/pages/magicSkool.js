import React, { Component } from 'react';
import MagicBanner from '../components/magicBanner';
import Header from '../shared/Header'

class magicSkool extends Component {
	render() {
		return (
			<div>
				<Header/>
				<MagicBanner />
			</div>
		)
	}
}
export default magicSkool;
