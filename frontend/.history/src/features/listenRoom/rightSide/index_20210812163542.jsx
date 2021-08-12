import React, { useEffect, useState } from 'react';
import ListRoom from "./listRoom";
import ListFriend from "./listFriend";
import "./social.scss";
import { useDispatch, useSelector } from 'react-redux';
import {addFriend} from "../listFriendSlice"
import {listFriend} from "../friends"
import { uri } from '../../../axiosClient/apiAxiosClient';
import { setRoomCurrent } from '../roomCurrentSlice';
import axios from 'axios';
import { setPlayingCurrent } from '../playingCurrentSlice';

function Index(props) {
    const token = JSON.parse(window.localStorage.getItem("token"));
    const currentRoom = useSelector(state => state.roomCurrent);
    const [memeberInRoom, setMemberInRoom] = useState([]);
    const dispatch = useDispatch();
    const {socket} = props;
    listFriend.forEach(value=>{
        const action = addFriend(value);
        dispatch(action);
    })
    useEffect(()=>{
      socket.connect(); 

    },[])
    const onMemberClick = async (e) => {
        e.preventDefault();
        document.querySelectorAll(".item--name").forEach((value) => {
          value.classList.remove("selected");
        });
        e.target.classList.add("selected");
        const room = e.target.innerText;
        const url = uri + `/dashboard/getmemberinroom?roomname=${room}`;
        const headers = {
          authorization: token,
        };
        const response = await axios.get(url, {
          headers: headers,
        });
        setMemberInRoom(response.data.members);
        const actionSetRoomCurrent = setRoomCurrent(room);
        dispatch(actionSetRoomCurrent); 
        socket.emit("joinroom",currentRoom);
        socket.on("reply",(data)=>{
          const actionSetPlaying = setPlayingCurrent(data.music);
          dispatch(actionSetPlaying);
          
        })
};

    return (
        <div className="rightSide">
            <ListRoom handleShowMemberClick={onMemberClick}/>
            <ListFriend listMember={memeberInRoom}/>
        </div>
    );
}

export default Index;