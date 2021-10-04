import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Error from './Error';
import Home from './Home';
import Rooms from './Rooms';
import logo from "../images/logo.svg"
import Singleroom from './SIngleRoom';
import { FaAlignRight } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";

class Navbar extends Component {
    state = {
        isOpen: false,
        isClick: false
    }
    handleToggle = e => {
        this.setState(
            {
                isOpen: !this.state.isOpen,
                isClick: !this.state.isClick
            })
    }
    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/"><img src={logo} alt="" /></Link>

                            <button type="button" className="nav-btn" onClick={() => this.handleToggle()} style={{ transition: "all 0.3s linear" }}>
                                {
                                    this.state.isClick ? <FaAlignRight className="nav-icon" /> :
                                        <FaAlignLeft className="nav-icon" />
                                }
                            </button>


                        </div>

                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li>
                                <Link to="/" >Home</Link>

                            </li>
                            <li>
                                <Link to="/rooms" >Rooms</Link>
                            </li>
                        </ul>


                    </div>


                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/rooms/:slug/" component={Singleroom} />
                    <Route component={Error} />
                </Switch>
            </>
        );
    }
}

export default Navbar;
