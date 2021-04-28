import React, { Fragment } from "react";

import { Cards } from "./cards.jsx";
import { MyNavbar } from "./MyNavbar.jsx";
import { Footer } from "./footer.jsx";

export const Home = () => {
	return (
		<Fragment>
			<MyNavbar />
			<Cards />
			<Footer />
		</Fragment>
	);
};
