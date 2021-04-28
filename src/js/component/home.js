import React, { Fragment } from "react";

import { Cards } from "./cards.jsx";
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

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
