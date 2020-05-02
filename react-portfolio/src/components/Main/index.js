import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../../pages/About";
import Gallery from "../../pages/Gallery";
import FakeNav from "../../components/FakeNav";

function Main() {
    return (
    <Router>
    <FakeNav />
    <Route exact path="/" component={About} />
    <Route exact path="/Gallery" component={Gallery} />
    </Router>
    )
}

export default Main;