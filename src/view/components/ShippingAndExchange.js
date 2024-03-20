function ShippingAndExchange(props){

    return(
          <>
            <div style={{position:"relative",top:380}}> 
       <hr />
       <img src={props.icon} style={{height:30,width:30}} />
       <select style={{border:0,width:480}}>
          
        <option style={{textAlign:"center"}}>Free Shipping </option>
        </select>
       
      <hr />
      <img src={props.icon} style={{height:30,width:30}} />
      <select style={{border:0,width:480}}>
        
        <option style={{textAlign:"center"}}>Returns & Exchange </option>
        </select>

        <hr />

       </div>
    </>



    )
}
export default ShippingAndExchange;