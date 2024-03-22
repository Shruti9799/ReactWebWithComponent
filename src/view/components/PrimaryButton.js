function PrimaryButton(props){
   


  
    return(
  <>  
     <div style={{width:340,position:"relative",left:65,display:"flex",alignItems:"center",marginTop:10,} }>
     
        <button  style={{ width:450,justifyContent:"center",border:"1px solid grey", height:45,fontSize:17,fontFamily:"serif",cursor:"pointer",outline:"none",backgroundColor:"white"}} onClick={props.onClick}>
        
          <ul style={{listStyleType:"none" ,display:'flex',justifyContent:"center",position:"relative",right:20,top:5}}>
             <li>{props.googleIconVisible?
               <img src={props.icons} style={{height:20,width:20,paddingLeft:3}} />:null }
            </li>
            <li> <span>{props.title}</span>
            </li>
          </ul>
         </button>
        
     </div>
      
  </>
    )
}
export default PrimaryButton