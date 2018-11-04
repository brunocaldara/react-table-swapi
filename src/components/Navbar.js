import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Peoples from './Peoples';
import Planets from './Planets';
import Starships from './Starships';
import Index from './Index';

export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Index</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/peoples">Peoples</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/planets">Planets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/starships">Starships</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/peoples/" component={Peoples} />
                    <Route path="/planets/" component={Planets} />
                    <Route path="/starships/" component={Starships} />
                </div>
            </Router>
        );
    }
}