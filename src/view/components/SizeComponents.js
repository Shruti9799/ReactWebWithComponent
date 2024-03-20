import { Container,Row,Col } from "react-bootstrap";


function SizeComponents(props){
     console.log(props)
      return(
         <>
              <Container>
                  <Row>
                     <Col>
                      {props.product.map(value=>(
                       <div style={{position:"relative",left:50,display:"inline-flex",}}>
                       <div style={{height:30,width:60,borderRadius:5,border:"1px solid black",paddingLeft:20,}}>
                           <p>{value}</p>
                       </div>
                       </div>
                       ))
                   } 
                     
                      </Col>
                  </Row>
              </Container>
         </>
            )
}
export default SizeComponents;