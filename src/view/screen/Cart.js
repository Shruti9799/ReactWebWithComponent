import PrimarySubText from "../components/PrimarySubText";
import PrimaryText from "../components/PrimaryText";
import { String } from "../util/string";
 function cart(){
   
   
   
   return(

      <>
        <PrimaryText 
         title={String.heading1}
        />
        <div style={{display:"inline-flex",}}>
        <PrimarySubText 
          title={String.keys}
        />

        <PrimarySubText 
          title={String.keys2}
        />
      
        <PrimarySubText
          title={String.keys3}
        />
        </div>



      </>







   )






}

 export default cart;  