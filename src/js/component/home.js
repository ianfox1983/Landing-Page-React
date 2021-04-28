import React, { Fragment } from "react";

import { Cards } from "./card.jsx";
import { Navbar } from "./navbar.jsx";
import { Card } from "react-bootstrap";

export const Home = () => {
	return (
    <Navbar/>
    <Cards />
    );
};
