import React from "react";
import { Link } from "react-router-dom";

const GameTable = ({label, items}) => { // vybalení proměnných (kratší zápis props)
    return (
        <div>
            <p>
                {label} {items.length}
            </p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Název</th>
                        <th colSpan={3}>Akce</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <div className="btn-group">
                                <Link to={"/games/show/" + item._id} className="btn btn-sm btn-info">
                                    Zobrazit
                                </Link>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GameTable;