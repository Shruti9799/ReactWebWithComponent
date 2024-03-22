function Priceratecomponent(props){
    return(

          <>
          {props.product.map(value=>(
            <p style={{marginTop:40}}><del>{value.oldrate}</del><br /><span style={{backgroundColor:"pink",position:"relative",top:20,padding:10}}>{value.rate}</span></p>
             ))
          }
          
          
          
          
          
          
          
          
          </>

    )

}
export default Priceratecomponent;