import { Routes,Route } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import Login from "../screen/Login";
import Signin from "../screen/Signin";
import Details from "../screen/Details";
import cart from "../screen/Cart";


import ImageDetails from "../screen/ImageDetails";





function RouterNav (){

     return(

 <Routes>
     <Route path="/" Component={HomeScreen}/>
     <Route path="/Login" Component={Login} />
     <Route path="/Cart" Component={cart} />
     <Route path="/Details" Component={Details} />
     <Route path="/Signin" Component={Signin}/>
     <Route path="/imagedetails" Component={ImageDetails}/>
     
 </Routes>
     )




}
export default RouterNav;