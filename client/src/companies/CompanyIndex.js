

import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import CompanyTable from "./CompanyTable";

const CompanyIndex = () => {
    const [publishersState, setPublishers] = useState([]);
    const [developersState, setDevelopers] = useState([]);

    useEffect(() => {
        apiGet("/api/publishers").then((data) => setPublishers(data));

        apiGet("/api/developers").then((data) => setDevelopers(data));
    }, []);

    return (
        <div>
            <h1>Seznam firem</h1>
            <hr />

            <div className="row">
                <div className="col">
                    <CompanyTable items={publishersState} label="Počet vydavatelů:" />
                </div>
                <div className="col">
                    <CompanyTable items={developersState} label="Počet výrobců:" />
                </div>
            </div>
        </div>
    );
};

export default CompanyIndex;