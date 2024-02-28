import { useState } from "react"
import PrimaryButton from "../components/PrimaryButton"
import Primaryinput from "../components/Primaryinput"
import { icons } from "../assets/icon"
import { String } from "../util/string"

function Signin(){
    const[name ,setName] = useState('') 
    const[email ,setEmail] = useState('') 
    const[password ,setPassword] = useState('') 
    const[visible ,setVisible] = useState(false) 
    const[passwordtype ,setPasswordType] = useState("password") 
  const  onChangeName=(value)=>{
        setName(value)
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
        console.log(email);
        console.log(password);
        setEmail("")
        setName("")
        setPassword("")
    }


    return(<>
        <div style={{width:"100%",}}>
            <div style={{width:"40%",alignSelf:'center',position:'relative',left:"30%"}}>
                <Primaryinput 
                title={String.username} 
                placeholder={String.usernameplacehoder}
                onChange={onChangeName}
                value={name}
                titlevisible={true}
                required={false}
                icons={icons.username}
                type={"text"}
               
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
                />
            </div>
        </div>
        </>

    )
}
export default Signin