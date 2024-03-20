function PrimarySocialMedia(props){
    return(
           <>
           <li style={{listStyleType:"none",display:"inline-flex"}}>
             <a href={props.links} >
             <img src={props.icons} style={{height:35,width:35,position:"relative",left:100,cursor:"pointer",paddingLeft:40,marginTop:8}} />
             </a>
             </li>
           
           </>


    )

}
export default PrimarySocialMedia