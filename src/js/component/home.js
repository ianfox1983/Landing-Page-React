import React, { Fragment } from "react";

import { Cards } from "./card.jsx";
import { Navbar } from "./navbar.jsx";

export const Home = () => {
	return (
		<Fragment>
			<Navbar
				label="Home"
				label="Videos"
				label="Images"
				label="VideoGames"
			/>
			<Cards />
		</Fragment>
	);
};
