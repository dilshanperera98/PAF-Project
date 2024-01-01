import React from 'react'
import "./LeftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <br/>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
            <span className="leftPaneMenuText">Messages</span>
          </li>

          <hr/>
          <br/><br/>
          <div>
            <div className="pagesYouLiked">
              <h2>Pages You Liked</h2>
              <br/>
            </div>
            <div className="pageList">
              <li className="pageListItem">
                <img src="images/propic.jpg" alt="" className="pagePic" />
                <span className="PageName"> code with bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="images/propic.jpg" alt="" className="pagePic" />
                <span className="PageName"> code with bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="images/propic.jpg" alt="" className="pagePic" />
                <span className="PageName"> code with bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="images/propic.jpg" alt="" className="pagePic" />
                <span className="PageName"> code with bunchi</span>
              </li>

              <li className="pageListItem">
                <img src="images/propic.jpg" alt="" className="pagePic" />
                <span className="PageName"> code with bunchi</span>
              </li>


    
              <li className="pageListItem">
                <img src="images/propic.jpg" alt="" className="pagePic" />
                <span className="PageName"> code with bunchi</span>
              </li>


            </div>
 
          </div>

          <hr/>
        </div>
      </div>

    </div>
  )
}
