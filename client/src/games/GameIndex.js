import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import GameTable from "./GameTable";

const GameIndex = () => {
    const [gamesState, setGames] = useState([]);

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
            <h1>Seznam her</h1>
            <hr />
            <GameTable items={gamesState} label="Počet her:" />
        </div>
    );
};

export default GameIndex;