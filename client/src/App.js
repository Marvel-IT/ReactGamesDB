import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameIndex from "./games/GameIndex";
import CompanyIndex from "./companies/CompanyIndex";
import GameDetail from "./games/GameDetail";
import CompanyDetail from "./companies/CompanyDetail";
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
          <Route path="/games">
            <Route index element={<GameIndex />} />
            <Route path="show/:id" element={<GameDetail />} />
          </Route>
          <Route path="/companies">
            <Route index element={<CompanyIndex />} />
            <Route path="show/:id" element={<CompanyDetail />} />
          </Route>
        </Routes>
      </div>

    </Router>    
  );
}

export default App;
