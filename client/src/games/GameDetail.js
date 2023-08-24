import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiGet } from "../utils/api";
import Genre from "./Genre";
import Platform from "./Platform";

const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        apiGet("/api/games/" + id)
        .then((data) => {
            setGame({
                name: data.name,
                platform: data.platform,
                publisher: data.publisher,
                developer: data.developer,
                genres: data.genres,
                isAvailable: data.isAvailable,
                pegi: data.pegi,
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    const genres = game.genres?.map((item) => Genre[item]);    
    const platform = game.platform?.map((item) => Platform[item]);
    

    return (
        <div>
            <h1>Detail hry</h1>
            <hr />
            <h3>
                {game.name}
            </h3>
            <p>{genres?.join(" / ")}</p>
            <p>{platform?.join(" / ")}</p>
            <p>
                <strong>Vydavatel: </strong>
                {game.publisher?.name}
                <br />
                <strong>Výrobce: </strong>
                {game.developer?.name}
                <br />
                <strong>Dostupný: </strong>
                {game.isAvailable ? "ANO" : "NE"}
                <br />
                <em>Pegi: {game.pegi}</em>
            </p>
        </div>
    );
};

export default GameDetail;