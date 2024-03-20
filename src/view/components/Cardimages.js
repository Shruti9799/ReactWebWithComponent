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
        <Card style={{ width: '' }}>
  <Card.Img variant="top" src={value.image} onClick={()=>onClickDetails(value)} />
  <Card.Body>
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
    <Card.Title></Card.Title>
    <Card.Text>
     {value.name}
    </Card.Text>
    <Card.Text>{value.rate}</Card.Text>
    
   
  </Card.Body>
</Card>
</Col>
))}
        
      </Row>












    )





}
export default Cardimages;