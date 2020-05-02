import React from "react";
import Pdf from "../../assets/Pdf/bootcampresume.pdf";
import "./style.css";

function SideBar() {
    return (
            <div className="col-sm-2" id="profile">
                <div className="row">
                    <div id="profPic">
                    </div>
                </div>
                <div className="row">
                    <h3 className="profInfo" id="name">Bobby Oldani</h3>
                </div>
                <div className="row">
                   <a href="tel:425-753-1007"><p className="profInfo" id="phone">(425)-753-1007</p></a> 
                </div>
                <div className="row">
                    <a href="https://github.com/BobbyOldani"><button type="button" id="gitHub" className="btn btn-outline-success profInfo">GitHub <i className="fab fa-github-square"></i></button></a>
                </div>
                <div className="row">
                    <a href="https://www.linkedin.com/in/robert-oldani-747735158/"><button type="button" id="linkedIn" className="btn btn-outline-success profInfo">LinkedIn <i className="fab fa-linkedin"></i></button></a>
                </div>
                <div className="row">
                   <a href= {Pdf} ><button type="button" id="resume" className="btn btn-outline-success profInfo">Resume <i className="fas fa-scroll"></i></button></a> 
                </div>
                <div className="row">
                    <a href="mailto:bobbyoldani2@gmail.com"><button type="button" id="resume" className="btn btn-outline-success profInfo">Email <i className="fas fa-envelope"></i></button></a>
                </div>
                <div className="row">
                    <button type="button" id="quoteBtn" className="btn btn-outline-success profInfo">Motivational Quote!</button>
                </div>
                <div className="row">
                    <div id="quote"></div>
                </div>
                <div className="row">
                    <div id="author"></div>
                </div>
            </div>
    );
}


export default SideBar;