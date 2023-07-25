import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">BroAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar"/>
            </div>  
        </div>
    </div>
  )
}
