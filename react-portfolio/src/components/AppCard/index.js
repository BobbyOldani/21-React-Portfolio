import React from "react";
import data from "../../utils/data";



console.log(data);


function AppCard() {

    return (
        <div>
        <div className="accordion md-accordion accordion-1" id="accordionEx23" role="tablist">
        {data.map((project, index) => (
        
            <div className="card" key={project.id}>
            <a className="collapsed font-weight-bold white-text" data-toggle="collapse" href={project.hashcollapse} aria-expanded="false" aria-controls={project.collapse}>
                <div className="card-header blue lighten-3 z-depth-1" role="tab" id={project.heading}>
                    <h2 className="app-header">{project.title}</h2>
                </div>
            </a>
            <div id={project.collapse} className="collapse" role="tabpanel" aria-labelledby={project.heading} data-parent="#accordionEx23">
                <div className="card-body">
                    <div className="row my-4">
                        <div className="col-md-8">
                            <h4 className="font-weight-bold mb-3 black-text">Utilized Technologies:</h4>
                            <p>{project.technology}</p>
                            <div className="appBtnGroup">
                                <a href={project.github}> <button type="button" id="github4" className="btn btn-success btn-lg">Git Hub <i className="fab fa-github-square"></i></button></a>
                                <a href={project.deployment}> <button type="button" id="deployment4" className="btn btn-success btn-lg">Deployment</button></a>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 pt-2">
                            <div className="view z-depth-1">
                            <img src={project.image} alt="ProjectImage" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            
            
            

    )) }
    </div>
        </div>
    
    );
}

export default AppCard;