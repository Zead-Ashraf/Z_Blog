// import {React}
import React from 'react';

// import components

import Header from "./Header"
import Body from "./Body" 
import InfoCard from "./InfoCard" 
import RecentBox from "./RecentBox"
import RecentSlider from "./RecentSlider"
import CategoriesBox from "./CategoriesBox"

function ClientApp(props) {
	return (
		<section className="ClientApp">
			<h5>test (ClientApp)</h5>

			<Header />
			<Body />
			<InfoCard />
			<RecentBox />
			<RecentSlider />
			<CategoriesBox />
		</section>
	)
}

export default ClientApp;