import { useState } from "react"
import { String } from "../util/string"
import { icons } from "../assets/icon"
import Primaryinput from "../components/Primaryinput"
import PrimarySubText from "../components/PrimarySubText"
import PrimaryButton from "../components/PrimaryButton"
import PrimaryText from "../components/PrimaryText"

function Login(){

  const[email ,setEmail] = useState('') 
  const[password ,setPassword] = useState('') 
  const[visible ,setVisible] = useState(false) 
  const[passwordtype ,setPasswordType] = useState("password") 
  const  onChangeEmail=(value)=>{
    setEmail(value)
}
const  onChangePassword=(value)=>{
    setPassword(value)
}

const onclickVisible=()=>{
    setVisible(!visible)
    if(visible==true){
    setPasswordType("text")
    }
    else{
    setPasswordType("password")

    }
}
const onClickSignIn=()=>{
 
  console.log(email);
  console.log(password);
  
  setEmail("")
  setPassword("")
}



  return(
          <>
         <div style={{width:"100%",height:600,backgroundImage:"url('https://wallpapercave.com/wp/YHlk56g.jpg')",backgroundRepeat:"no-repeat"}}>
            <div style={{width:"35%",alignSelf:'center',position:'relative',left:"32%",position:"relative",top:35}}></div>
          <div style={{position:"relative",top:30}}>
         <PrimaryText 
          title={String.Login}
          
         
         />
         </div>
         <div style={{position:"relative",left:440,top:70}}>
         <Primaryinput 
                title={String.email} 
                placeholder={String.emailplacehoder}
                onChange={onChangeEmail}
                value={email}
                titlevisible={true}
                required={true}
                icons={icons.email}
                type={"email"}
                
                />
                <Primaryinput 
                title={String.password} 
                placeholder={String.passwordeplacehoder}
                onChange={onChangePassword}
                value={password}
                titlevisible={true}
                required={true}
                icons={icons.password}
                visible={ visible?icons.hide:icons.visible}
                hideIconVisivible={true}
                type={passwordtype}
                onClickVisible={onclickVisible}
                />
                <PrimarySubText 
                title={String.frogotpassword}
          
          
                />
                <PrimaryButton 
                title={String.signIn}
                onClick={onClickSignIn} />
                 {/*
                <PrimaryLinksText 
                  title={String.newregister}
                
                />
                 */}
          
          </div>

          </div>

          
          
          




          
          

          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          </>





  )




}
export default Login;