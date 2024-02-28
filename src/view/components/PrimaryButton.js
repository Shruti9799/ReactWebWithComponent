function PrimaryButton(props){

    return(
        <>
        <div style={{width:300,padding:10}}>
        <button style={{width:200,height:60,fontSize:30}} onClick={props.onClick}>{props.title}</button>
        </div>
        </>
    )
}
export default PrimaryButton