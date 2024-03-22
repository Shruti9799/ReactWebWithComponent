import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

function Cardimages(props){

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    
        // other logic
      }
    const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)



  const nav = useNavigate()

  const onClickDetails=(p)=>{
    nav('/Details',{state:p})
}


    return(

        <Row>
           
        {props.product.map(value=>(
           <Col lg={3} md={6}>
        <Card style={{ width: '',border:0,borderRadius:0,marginLeft:10 }}>
        <Card.Body>
    <div style={{position:"absolute",color:"white",backgroundColor:"black",top:350,marginLeft:12,padding:5,borderRadius:20,fontSize:13,}}>
   <Card.Text>{value.offer}</Card.Text>
   </div>
  <Card.Img variant="top" src={value.image} onClick={()=>onClickDetails(value)} />
  <div style={{textAlign:"center"}}>
  {props.ratingvisible?
    <><Rating
    onClick={handleRating}
    onPointerEnter={onPointerEnter}
    onPointerLeave={onPointerLeave}
    onPointerMove={onPointerMove}
    /* Available Props */
  />(0)
  </>
  :null
} 
</div>

  
    
    <Card.Title></Card.Title>
    <div style={{fontFamily:"initial",textAlign:"center"}}>
    <Card.Text>
     {value.name}
    </Card.Text>
    </div>
    <div style={{display:"inline-flex",marginTop:15}}>
    <div style={{marginLeft:55,fontSize:15}}>
    <Card.Text><del>{value.oldrate}</del></Card.Text>
    </div>
    <div style={{backgroundColor:"pink",width:100,height:30,padding:3,marginLeft:10,position:"relative",bottom:3,fontFamily:"initial",textAlign:"center"}}>
    <Card.Text>{value.rate}</Card.Text>
    </div>
    </div>
   
  </Card.Body>
  

</Card>
</Col>
))}
        
      </Row>












    )





}
export default Cardimages;