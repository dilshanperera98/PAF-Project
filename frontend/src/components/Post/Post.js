import React from 'react'
import './Post.css'
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function Post() {
  return (
    <div className='Post'>
        <br/>
        <div className="PostContainer">
            <div className="postTop">
                
               <img src="/images/propic.jpg" alt="" className="postImg" />
               <span className="postUserName">Yasiru Bellanavithana</span>
               <span className="postTime">5min ago</span>
            </div>
            <br/>
            <div className="postCenter">
                <div className="postCaption">
                    We are together forever..............
                </div>
                <br/>
                <img src="/images/pic.jpg" alt="" className="postedImg" />
            </div>

            <br/>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpOffAltIcon className="reactPic" />
                    <span className="likeCount">Thisal Pulasinghe and 1.5K others</span>
                </div>
                <div className="postBottomRight">
                    <CommentIcon className='commentIcon'/>
                    <span className="commentCount">1K comments</span>
                </div>
            </div>
            <br/>
        </div>
    </div>
  )
}
