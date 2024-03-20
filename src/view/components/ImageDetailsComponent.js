import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";



const top={
   top:0
}
const bottom={
    bottom:0
 }
 const left={
    left:0,
    display:"block",
    top:0
 }
 
 const right={
    right:0,
    top:0,
    display:"block",
 }
function ImageDetailsComponent(props){
 
 const[state,setState] = useState('')
 useEffect(()=>{
        if(props.side ==="top"){
            setState(top)
        }
        else if(props.side ==="left"){
            setState(left)
        }
        else if(props.side ==="right"){
            setState(right)
        }
        else{
            setState(bottom)    
        }
 })
    return(
        <Container>
            <Row>
                <Col>
                <div style={{position:'relative'}}>
                <div style={{width:"100%",height:850,textAlign:'center'}}>
                    <div style={{width:"60%",left:"20%", height:700,backgroundColor:'pink'}}>
                        <img src={props.image} style={{height:700,width:550}}/>
                    </div>
                </div>
                <div style={(state)?state:null} className="detailimage">
                    <div style={{width:100,height:100,}}>
                    
                        <img src={props.sideimage} style={{width:"90%",height:"100%",marginLeft:10}}/>
    
                        
                    </div>
                    <div style={{width:100,height:100,}}>
                        <img src={props.sideimage} style={{width:"90%",height:"100%",marginLeft:10}}/>
                    </div>
                    <div style={{width:100,height:100,}}>
                        <img src={props.sideimage} style={{width:"90%",height:"100%",marginLeft:10}}/>
                    </div>
                    <div style={{width:100,height:100,}}>
                        <img src={props.sideimage} style={{width:"90%",height:"100%",marginLeft:10}}/>
                    </div>
                    <div style={{width:100,height:100,}}>
                        <img src={props.sideimage} style={{width:"90%",height:"100%",marginLeft:10}}/>
                    </div>
                    
                   
                </div>
                </div>
                </Col>  
            </Row>
        </Container>
    )
}
export default ImageDetailsComponent;