import { image } from "../assets/image"
import { sideimage } from "../assets/sideimages";
import ImageDetailsComponent from "../components/ImageDetailsComponent"

function ImageDetails(){
    return(
        <ImageDetailsComponent 
        image={image.main}
        side={"bottom"}
        sideimage={sideimage.side}
        />


       
       
    )
}

export default ImageDetails;