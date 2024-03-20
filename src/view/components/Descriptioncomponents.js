import { Container,Row,Col } from "react-bootstrap";





function Descriptioncomponents (props){

  return(
                
    <>
    <Container>
       <Row>
          <Col>
          <div style={{fontSize:20,color:"magenta",fontFamily:"serif",position:"relative",left:50}}>
          {props.product.map(value=>(
             <p>{value}</p>
          ))
          }
          </div>
          </Col>
       </Row>
    </Container>








    </>
  )
}
export default Descriptioncomponents;