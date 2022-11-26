import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import userImage from "../assets/images.jpg";
const Home = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }
  return (
    <form className='home__container' onSubmit={handleSubmit}>
        <img src={userImage} alt="image"/>
        <h2 className='home__header'>Sign in to Open Chat</h2>
        <label htmlFor="username">Username</label>
        <input type="text"
        minLength={3}
        name="username"
        id='username'
        className='username__input'
        value={userName}
        onChange={e => setUserName(e.target.value)}
        />
        <button className='home__cta'>SIGN IN</button>
    </form>
  )
}

export default Home
