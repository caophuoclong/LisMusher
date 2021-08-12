import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import CreateAndJoinRoom from './createNjoinRoom';
import { uri } from '../../../axiosClient/apiAxiosClient';
import axios from 'axios';



Room.propTypes = {
    
};

function Room(props) {
    const handleCreateRoom = (e)=>{
        const roomName = document.getElementById("join-room").value;
        const url = uri + "/dashboard/createroom";
        const token = JSON.parse(window.localStorage.getItem("token"));
        const headers = {
            authorization: token,
        }
        const response = axios.post(url,{roomName},{
            headers: headers,
        })
        document.getElementById("join-room").value = '';
        alert(response);
    }
    const handleJoinRoom = ()=>{

    }
    return (
        <div className="icon room-container">
            <FontAwesomeIcon className="icon" icon={faHotjar} size="2x"/>
            <CreateAndJoinRoom createRoom={handleCreateRoom}/>
        </div>
    );
}

export default Room;