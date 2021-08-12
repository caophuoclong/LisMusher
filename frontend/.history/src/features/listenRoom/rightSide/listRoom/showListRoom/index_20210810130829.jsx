import axios from 'axios';
import React, { useState } from 'react';
import {useSelector} from "react-redux";
import { uri } from '../../../../../axiosClient/apiAxiosClient';

function ShowListFriend(props) {
    const roomList = useSelector(state => state.roomList);
    const [memberInRoom, setMemberInRoom] = useState([]);
    const token = JSON.parse(window.localStorage.getItem("token"));
    roomList.forEach( async (room) => {
        const url = uri + `/dashboard/getmemberinroom?roomname=${room}`;
        const headers = {
            authorization: token,
        }
    
        const response = await axios.get(url,{
            headers: headers
        })
        setMemberInRoom(response.members);
    })
    const showListMember = (e)=>{
        e.preventDefault();
    }
    return (
        <ul className="list-items list-room">
            {roomList.map((value,pos)=>
                <li className="item room" key={pos} >
                    <a  className="item--name -bottom-1room--name fw overflow" href={value} onClick={showListMember} >{value}</a>
                </li>
            )}
          </ul>
    );
}

export default ShowListFriend;