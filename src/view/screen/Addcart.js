
import {useContext, useState} from 'react'
import Context from '../context';



export default function Addcart(){

    let [addtocart] = useContext(Context)
    

    function AddData(){
        console.log("****************");
        addtocart.push("datatatattttt")
    let adddata= []
    adddata.push({"id":1,"name":"user"})
    addtocart.push(adddata)    
    }
    
    console.log(addtocart);
    return(
        <div style={{backgroundColor:'red',width:"100%",height:200}}>
           <button onClick={AddData}>Add</button>
        </div>
    )
}