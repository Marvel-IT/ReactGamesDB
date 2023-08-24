import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameIndex from "./games/GameIndex";
import CompanyIndex from "./companies/CompanyIndex";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

export function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/games"} className="nav-link">
                Hry
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/companies"} className="nav-link">
                Firmy
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Navigate to={"/games"} />} />
          <Route exact path="/games" element={<GameIndex/>} />
          <Route exact path="/companies" element={<CompanyIndex/>} />
        </Routes>
      </div>

    </Router>    
  );
}

export default App;
