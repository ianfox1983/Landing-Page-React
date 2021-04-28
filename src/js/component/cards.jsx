import React from "react";
import Button from "react-bootstrap/Button";
import Cards from "react-bootstrap/Cards";

export const cards = () => {
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
