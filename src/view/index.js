import HomeScreen from "./screen/HomeScreen";
import Context from "./context";
import {addtocart} from './data'
import {addtobuy} from './data'
import Signin from "./screen/Signin";

export default function App(){
   
    return(
        <Context.Provider value={[addtocart,addtobuy]}>
        <div>
<Signin/>
        </div>
        </Context.Provider>
    )
}