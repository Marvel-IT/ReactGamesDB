import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiGet } from "../utils/api";
import Role from "./Role";

const CompanyDetail = () => {
    const { id } = useParams();
    const [company, setCompany] = useState({});

    useEffect(() => {
        apiGet("/api/companies/" + id)
        .then((data) => {
            setCompany({
                name: data.name,
                founded: data.founded,
                headquarters: data.headquarters,
                perex: data.perex,
                role: data.role,
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    const role = Role.DEVELOPER === company.role ? "Vývojář" : "Vydavatel";

    return (
        <div>
            <h3>Detail firmy</h3>
            <hr />
            <h1>{company.name}</h1>
            <p>
                rok založení {company.founded}
                <br />
                {role} 
            </p>
            <p>
                <em>{company.perex}</em>
            </p>
        </div>
    );
};

export default CompanyDetail;