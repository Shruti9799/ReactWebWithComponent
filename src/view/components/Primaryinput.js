function Primaryinput(props){
    console.log(props);
    return(
            <>
            
            <div style={{width:350,padding:5,position:"relative",left:60}}>
                
                <div style={{marginTop:2,marginBottom:10,margin:0,padding:0}}> 
                {props.titlevisible?
                    <label  style={{fontSize:17,fontFamily:"serif"}}>
                        {props.title}
                       {props.required? <span style={{color:'red'}}>*</span>:null}
                </label>
                :null
                }
                </div>
                <div style={{display:"flex",alignItems:'center', border: '1px solid grey',padding:10}}>
                    <img src={props.icons} style={{width:30,height:30}}/>
                    <input type={props.type} placeholder={props.placeholder} style={{width:'100%',height:25,border:"0px",outline:"none",marginLeft:10,marginRight:10,backgroundColor:"white",padding:0}} value={props.value} onChange={(d)=>props.onChange(d.target.value)}/>
                   {props. hideIconVisivible? 
                        <img onClick={props.onClickVisible} src={props.visible} style={{width:30,height:30}}/>:null
                        }
                </div>
           </div>
            </>
    )
}

export default Primaryinput