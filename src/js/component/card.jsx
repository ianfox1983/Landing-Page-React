import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { nav } from "react-dom";

export const Cards = props => {
	return (
		<Card className="bg-dark text-white">
			<Card.Img
				src="https://www.pcgamesn.com/wp-content/uploads/2021/03/how-long-to-beat-xbox-game-pass-900x506.jpg"
				alt="Card image"
			/>
			<Card.ImgOverlay>
				<Card.Title>Juega Gratis</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural
					lead-in to additional content. This content is a little bit
					longer.
				</Card.Text>
				<Card.Text>Last updated 3 mins ago</Card.Text>
				<Button variant="dark">Ver todas las ofertas</Button>{" "}
			</Card.ImgOverlay>
		</Card>
	);
};
/*
export function Nav(){
let menu = [
    { label: "Home" },
    { label: "Videos" },
    { label: "Images" },
    { label: "VideoGames" },
];
    return menu;
}




<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>





*/
