import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { uri } from "../../../../../axiosClient/apiAxiosClient";

function ShowListFriend(props) {
  const roomList = useSelector((state) => state.roomList);
  const [memberInRoom, setMemberInRoom] = useState([]);
  const token = JSON.parse(window.localStorage.getItem("token"));
  const showListMember = async (e) => {
    e.preventDefault();
    const room = e.target.innerText;
    const url = uri + `/dashboard/getmemberinroom?roomname=${room}`;
      const headers = {
        authorization: token,
      };
      const response = await axios.get(url, {
        headers: headers,
      });
      console.log(response.data.members);
    };
  
  console.log(memberInRoom);
  return (
    <ul className="list-items list-room">
      {roomList.map((value, pos) => (
        <li className="item room selected" key={pos}>
          <a
            className="item--name -bottom-1room--name fw overflow"
            href={value}
            onClick={showListMember}
          >
            {value}
            <ul className="list-member"></ul>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ShowListFriend;
