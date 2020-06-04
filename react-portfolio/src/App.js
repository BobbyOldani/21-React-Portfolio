import React from 'react';
import Wrapper from "./components/Wrapper";
import SideBar from "./components/SideBar"; 
import Main from "./components/Main";
import './App.css';



function App() {
  return (
    <div>
    <Wrapper>
    <div className="row">
    <SideBar>
    </SideBar>
    <div className="col-sm-10" id="appGallery">
    <Main>
    </Main>
    </div>
    </div>
    </Wrapper>
    </div>
  );
}

export default App;
