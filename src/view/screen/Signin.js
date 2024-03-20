import { useState } from "react"
import PrimaryButton from "../components/PrimaryButton"

import PrimaryText from "../components/PrimaryText"
import {links} from "../assets/links"
import { icons } from "../assets/icon"
import { String } from "../util/string"
import Primaryinput from "../components/Primaryinput"
import PrimarySocialMedia from "../components/PrimarySocialMedia"
import PrimarySubText from "../components/PrimarySubText"


function Signin(){
    const[name ,setName] = useState('')
    const [mobile,setMobile]=useState('')
    const[email ,setEmail] = useState('') 
    const[password ,setPassword] = useState('') 
    const[visible ,setVisible] = useState(false) 
    const[passwordtype ,setPasswordType] = useState("password") 
    const  onChangeName=(value)=>{
        setName(value)
    }
    const onChangeMobile=(value)=>{
        setMobile(value)
    }
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
    const onClicklogin=()=>{
        console.log(name);
        console.log(mobile);
        console.log(email);
        console.log(password);
        setEmail("")
        setMobile("")
        setName("")
        setPassword("")
    }
    const onClickSignin=()=>{
        console.log(name);
        console.log(email);
        console.log(password);
        setName("")
        setEmail("")
        setPassword("")
    }
          
        




   

    return(
      <>
        <div style={{width:"100%",height:600,backgroundImage:"url('https://wallpapercave.com/wp/YHlk56g.jpg')",backgroundRepeat:"no-repeat"}}>
            <div style={{width:"35%",alignSelf:'center',position:'relative',left:"32%",position:"relative",top:35}}>

                <PrimaryText
                title={String.heading}
                />
                
                <Primaryinput 
                title={String.username} 
                placeholder={String.usernameplacehoder}
                onChange={onChangeName}
                value={name}
                titlevisible={true}
                required={true}
                icons={icons.username}
                type={"text"}
               
                />
                <Primaryinput 
                title={String.mobile}
                placeholder={String.mobileplaceholder}
                onChange={onChangeMobile}
                value={mobile}
                titlevisible={true}
                required={true}
                icons={icons.mobile}
                type={"numbers"}
                
                
                
                />
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

               
                <PrimaryButton
                title={String.login}
                onClick={onClicklogin}
                icons={icons.google}
                googleIconVisible={false}
                />
                
                
                {/*
                <PrimaryLinksText
                 title={String.frogotpassword}

                  />
                */}
                  
                
                <PrimaryButton
                title={String.Signin}
                onClick={onClickSignin}
                icons={icons.google}
                googleIconVisible={true}
                />

                <div style={{position:"relative",left:70}}>
                <PrimarySubText 
                 title={String.account}
                />
                </div>

                <PrimarySocialMedia 
                icons={icons.facebook}
                links={links.facebook}
                />

                <PrimarySocialMedia 
                icons={icons.twitter}
                links={links.twitter}
                />

                <PrimarySocialMedia 
                icons={icons.instagram}
                links={links.instagram}
                />
               
                

                
                
                
                
            </div>
        </div>

         
         




      </>

    )
}
export default Signin;