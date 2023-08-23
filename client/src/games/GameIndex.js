import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

const GameIndex = (props) => {
    const [gameState, setGames] = useState([]);

    useEffect(() => {
        apiGet("/api/games").then((data) => setGames(data));
    }, []);

    //     fetch("http://localhost:5000/api/games")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setGames(data);
    //         })
    //         .catch((error) => {
    //             console.log("Error", error);
    //         });
    // }, []);

    return (
        <div>
            <h1>Hry</h1>
            <ul>
                {gameState.map((game) => (
                    <li key={game._id}>{game.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GameIndex;