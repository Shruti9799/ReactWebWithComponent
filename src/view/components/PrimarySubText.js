function PrimarySubText(props){
    console.log(props);

        return(
                 <>
                 
                 <div style={{marginLeft:67,fontSize:15,marginRight:35,marginTop:20,}} >

                 
                 
                 {props.iconShareVisible?
                 <img src={props.icons} style={{width:20,height:20}}/>:null}
                     
                     {props.checkBoxVisible?
                    
                          <input type="checkbox" />:null}
                     
                 
                          <text>{props.title}</text> 
                 
                 </div>
                 
                 
                 
                 
                 
                 
                 
                 </>










        )







}
export default PrimarySubText