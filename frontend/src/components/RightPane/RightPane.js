import React from 'react'
import "./RightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="addContainer">
          <span className="sponsered">Sponsered</span>
          <img src="./images/add.jpg" alt="" className="addImg" />
          <br/>
          <span className="addText">order foods jdddddddddddjkjd djjjjjjjjjj jdjjjjjjj jdddddddddddjkjd djjjjjjjjjj jdjjjjjjj  jdddddddddddjkjd djjjjjjjjjj jdjjjjjjj  jdddddddddddjkjd djjjjjjjjjj jdjjjjjjj dfjjjjjjjjjj djjjjjjjjjj fjjjjjjjjjjj.................</span>
        </div>

        <br/><br/><br/>
        <h3>Birthday Friends</h3>
        <div className="bdayContainer">
          <img src="./images/bday.png" alt="" className="bdayImg" />
          <span className="bdayText"><b>Thisal</b> and 2 having birthday today!</span>
        </div>

        <br/><br/><br/>
        <div className="frndList">
          <h3>Online Friends</h3>
          <li className='onlineList'>
            <div className="onlineImgContainer">
              <img src="./images/tkp.jpg" alt="" className="onlineImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineName">Thisal Pulasinghe</span>
          </li>

          <li className='onlineList'>
            <div className="onlineImgContainer">
              <img src="./images/tkp.jpg" alt="" className="onlineImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineName">Thisal Pulasinghe</span>
          </li>

          <li className='onlineList'>
            <div className="onlineImgContainer">
              <img src="./images/tkp.jpg" alt="" className="onlineImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineName">Thisal Pulasinghe</span>
          </li>

          <li className='onlineList'>
            <div className="onlineImgContainer">
              <img src="./images/tkp.jpg" alt="" className="onlineImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineName">Thisal Pulasinghe</span>
          </li>
        </div>
      </div>


    </div>
  )
}
