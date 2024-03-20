


import 'bootstrap/dist/css/bootstrap.min.css';

import RouterNav from "./router";
import { BrowserRouter } from 'react-router-dom';



export default function App(){
   
    return(
        <BrowserRouter>
        <RouterNav/>
        </BrowserRouter>
       
    )
}