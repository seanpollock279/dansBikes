import React from 'react';
import '../Header/header.scss';

import Home from '../../Assets/Icons/home.png';
import Menu from '../../Assets/Icons/menu.png';
import Notification from '../../Assets/Icons/notification.png';

export default function Header() {
    return (
        <div className="header">
            <img className="icon" src={Menu} />
            <img className="icon" src={Home} />
            <img className="icon" src={Notification} />
        </div>
    )
}
