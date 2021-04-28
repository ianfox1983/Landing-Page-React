import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import{Nav} from "./Nav";

//include images into your bundle


//create your first component
export function Nav(){
let menu = [
    { label: "Home" },
    { label: "Videos" },
    { label: "Images" },
    { label: "VideoGames" },
];
    return menu;
}
export function Home() {
    let navbar = "Estoseria la navbar";
    let titulo = <h1>Hola esta es una prueba </h1>;
    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            <p>
                <img src={rigoImage} />
            </p>
            <a href="#" className="btn btn-success">
                If you see this green button... bootstrap is working
			</a>
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
        </div>
    );
}

