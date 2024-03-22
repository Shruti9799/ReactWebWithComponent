import  { useState } from 'react'
import { banner2 } from '../data';
import { image } from "../assets/image"
import BannerComponent from '../components/Banner';
import { icons } from '../assets/icon';

import Priceratecomponent from '../components/Priceratecomponent'
import { String } from "../util/string"
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import PrimaryButton from '../components/PrimaryButton';
import PrimarySubText from '../components/PrimarySubText';
import PrimaryMiddleText from '../components/PrimaryMiddleText';
import ImageDetailsComponent from '../components/ImageDetailsComponent';
import SizeComponents from '../components/SizeComponents';


import { useLocation } from 'react-router-dom';


import Descriptioncomponents from '../components/Descriptioncomponents';
import ShippingAndExchange from '../components/ShippingAndExchange';
import { sideimage } from '../assets/sideimages';


function Details(){
  const loc = useLocation()
  const [product,setProduct] =useState(loc.state)
  console.log(product);

  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
    return(
  
     <>
     
      <hr />
       
        <Container>
           <Row>
            <Col>
               
            <ImageDetailsComponent
              image={image.main}
              side={"bottom"}
              sideimage={sideimage.side}
              
        
        />

            
            </Col>
            <Col>
              <div style={{display:"inline-flex"}}>
             <PrimaryMiddleText 
               title={String.headingdetails}
                />
              <Priceratecomponent
                 product={product.rate}
              />
               
               </div>
               <div style={{position:"relative",left:60}}>
             <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                /* Available Props */
                />(4)
              </div>


        <PrimarySubText 
              title={String.Size}
        />
              
        
        
        <SizeComponents
           product={product.size}
         />
        

        

          
               
               
          <br />
         <PrimaryButton 
                 title={String.addtocart}
                 
              
         />
         <PrimaryButton 
                 title={String.Buy}
         />

          <br />
         <PrimaryMiddleText
              
              title={String.highlights}
         />   
         
         <Descriptioncomponents 
          product={product.Description}
        
        />
   
             
             
        <Row>
        <Col>
              
              
        </Col>
        <Col>
              
              
              
              
              </Col>




              </Row>



              
               <br />
              <PrimaryMiddleText 
                  title={String.head}
              />
       <div style={{height:120,width:"60%",position:"relative",left:65}}>
       <BannerComponent banner={banner2} /> 

        
       </div>
       <ShippingAndExchange 
         icons={icons.shipping}
       />
       
       
       




             
             




            </Col>
           </Row>
        </Container>
             
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      </>













    )




}
export default Details