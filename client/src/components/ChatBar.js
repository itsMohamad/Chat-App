import React, {useState, useEffect, Fragment} from 'react'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    return (
        <div className='chat__sidebar'>
            <h2>Open Chat</h2>
            <div>
                <h4 className='chat__header'>ACTIVE USERS</h4>
                <div className='chat__users'>
                    {users.map(user => <Fragment key={user.socketID}><p style={{display: "flex"}}><img
                        style={{marginRight: "8px"}}
                        width="25"
                        height="25"
                        src="https://www.freeiconspng.com/uploads/clipart--person-icon--cliparts-15.png"
                        alt="userImage"/>
                        {user.userName}</p></Fragment>)}
                </div>
            </div>
        </div>
    )
}

export default ChatBar
