
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {action,originals,comedy,horror,romance,documentaries} from './url'

function App() {
  return (
    <div className="App">
     
      

     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedy} title='Comedies' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>

  );
}

export default App;
