import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import './GroupList.css'
import { elastic as Menu } from 'react-burger-menu'

export default function GroupList() {

  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('email');
    axios.post('/api/get-group', { userId }).then(response => {
      const list = [];
      Object.entries(response.data).map((item, index) => {
        list.push(item[0]);
      })
      setGroupList(list);
    }).catch(error => console.log(error.message));
  }, [])

  return (
    <div id='outer-container'>
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
        <div id='page-wrap'>
          {groupList.map((item, index) => {
              return (
                <div key={index}>{item}</div>
              )
          })}
        </div>
      </Menu>
    </div>
  );
};