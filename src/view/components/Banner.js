import Carousel from 'react-bootstrap/Carousel';
function BannerComponent(props){
    return(
        <Carousel>
        {props.banner.map(value=>(
        <Carousel.Item>
        <img src={value.image} style={{hieigh:500,width:"100%"}}/>       
       
        </Carousel.Item>
        ))
        }
        </Carousel> 

    )
}

export default BannerComponent;