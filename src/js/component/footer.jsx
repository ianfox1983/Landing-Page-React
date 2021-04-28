import React from "react";
import { Footer } from "./footer.jsx";
import Cards from "react-bootstrap/Cards";

export const footer = () => {
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				This is the footer
			</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Footer</Modal.Title>
				</Modal.Header>
				<Modal.Body>This is the footer and u click here</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
