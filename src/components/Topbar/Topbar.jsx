import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>My Logo</span>
        </div>
        <div className='topRight'>
          <div className='tobarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='tobarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='tobarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://data.whicdn.com/images/322027365/original.jpg?t=1541703413'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
