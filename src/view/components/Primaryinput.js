function Primaryinput(props){
    console.log(props);
    return(
            <>
            <div style={{width:400,padding:10}}>
                <div style={{marginTop:10,marginBottom:10}}> 
                {props.titlevisible?
                    <label  style={{fontSize:20}}>
                        {props.title}
                       {props.required? <span style={{color:'red'}}>*</span>:null}
                </label>
                :null
                }
                </div>
                <div style={{display:"flex",alignItems:'center', border: '2px solid grey',borderRadius:10,padding:10}}>
                    <img src={props.icons} style={{width:30,height:30}}/>
                    <input type={props.type} placeholder={props.placeholder} style={{width:'100%',height:50,border:"0px",outline:"none",marginLeft:10,marginRight:10}} value={props.value} onChange={(d)=>props.onChange(d.target.value)}/>
                   {props. hideIconVisivible? 
                        <img onClick={props.onClickVisible} src={props.visible} style={{width:30,height:30}}/>:null
                        }
                </div>
           </div>
            </>
    )
}

export default Primaryinput