import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function FakeNav() {
    return (
        <div className="card card-image" id="jumbopic">
            <div className="text-center rgba-stylish-strong py-5 px-4" id="transOverlay">
                <div className="py-5">
                    <h3 className="mb-4 pb-2 px-md-5 mx-md-5">Always learning and improving, on a mission to build something to be proud of!</h3>
                    <Link to="/">
                    <button type="submit" className="btn btn-outline-success"> About </button>
                    </Link>
                    <Link to="/Gallery">
                    <button type="submit" className="btn btn-outline-success"> Gallery </button>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default FakeNav;