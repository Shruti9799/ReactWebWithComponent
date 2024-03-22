import { useNavigate } from 'react-router-dom';
import { banner, banner2 } from '../data';
import React, { useEffect, useState } from 'react'
import { product } from '../data';
import '../style/style.css'
import Addcart from './Cart'
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import PrimaryText from "../components/PrimaryText"
import PrimarySubText from "../components/PrimarySubText"
import Card from 'react-bootstrap/Card';
import { String } from "../util/string"
import { Rating } from 'react-simple-star-rating'
import BannerComponent from '../components/Banner';
import Cardimages from '../components/Cardimages';
/* 
const info=[require('../img/Do Epic Shit (Hardcover).jpg')
    ,require('../img/It Ends with Us (Paperback).jpg'),
    require('../img/Nomads (Hardback).jpg')] */
export default function HomeScreen(){

  const [productdata,setProductData] =useState('')
  
 
    useEffect(()=>{

      fetch("http://www.localhost:3333/product").then(d=>{
       return d.json()
      }).then(d=>setProductData(d[0].data)).catch(d=>console.log(d))
    },[])


    console.log(productdata);

  // Catch Rating value
  
  // Optinal callback functions
  
    return(
        <>
           <Navbar expand="lg" style={{paddingTop:20,paddingBottom:20}}>
      <Container>
        <Navbar.Brand href="#home"><img src={require('../assets/website/beSOLID_Logo_500_x_200_px.avif')} style={{position:'relative',left:180}} onclick /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse>
          <Nav>
               <div className='contents' style={{position:'relative',left:250,fontSize:15 }}>
            <Nav.Link href="#home" style={{marginLeft:30}} >Build Your Wardrobe</Nav.Link>
            
            <NavDropdown title="All Bottoms">
                
              <NavDropdown.Item href="#action/3.1">Belly Bottom PrimaryButtonants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lycra Pants
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skirt Sets</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Cotton Pants
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="All Tops">
              <NavDropdown.Item href="#action/3.1">Buta Short Kurti</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Skirt Sets
              </NavDropdown.Item>
             </NavDropdown>
            <Nav.Link href="#link">Returns / Exchanges</Nav.Link>
            </div>
           
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      <Container>
          <Navbar.Brand href="#home" className='icons-2'>
            <img
              src={require('../assets/website/icons8-search-100.png')}
              width="25"
              height="25"
              
              alt="React Bootstrap logo"
            />
            <img
              src={require('../assets/website/icons8-customer-100.png')}
              
              style={{marginLeft:10}}
              width="25"
              height="25"
            
              alt="React Bootstrap logo"
              
            />
            <img
              src={require('../assets/website/icons8-cart-100.png')}
              style={{marginLeft:10}}
              width="25"
              height="25"
              
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>



          <BannerComponent
              banner={banner}
          />


           <div style={{marginTop:10}}>
          <PrimaryText 
            title={String.HEADING}
          />
          </div>
          <div style={{textAlign:'center',marginTop:10}}>
          <PrimarySubText 
             title={String.subheading}
          
          />
          </div>
          <div>
            {
              productdata && productdata.map(d=>{
                return(
                  <>
                  <div style={{marginLeft:20,}}>
                  <img src={d.image} style={{width:300,height:300}}/>
                  <br />
                  <p style={{}}>{d.name}</p>
                  <div style={{display:'flex'}}>
                  <p style={{marginLeft:30}}><del>{d.oldrate}</del></p>
                   <div style={{backgroundColor:'pink',width:100,height:30,alignItems:"center",marginLeft:10}}>
                  <p>{d.rate}</p>
                  </div>
                  </div>
                  </div>
                  </>
                )
              })
            }
          </div>
          {/* 
          {product.map(value=>(
           <Cardimages product={product} ratingvisible={true}/>
           ))
          }   */}
         


            {/* <Addcart/> */}
</>
        )
}