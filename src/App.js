import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Brewerypage from "./pages/Brewery_page";
import Error from './components/error'
import DetailBrewerypage from "./pages/DetailBrewery_page";

 class App extends Component {
     render(){
         return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Brewerypage/>} />
                    <Route path="brewery" element={<DetailBrewerypage />}>
                        <Route path=":id_brewery" element={<DetailBrewerypage />} />
                    </Route>
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
         );
     }
 } 

 export default App