import React from 'react';
import Popup from 'reactjs-popup';
import AddGroup from './AddGroup'

export default function AddGroupPopup() {
    return (
        <Popup trigger={<button>Add a group</button>} position="right center">
            <AddGroup />
        </Popup>
    );
}