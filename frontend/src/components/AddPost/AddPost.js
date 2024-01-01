import React from 'react'
import "./AddPost.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/propic.jpg" alt="" className="addPostPic" />
                <input placeholder='whats in your mind' type="text" className="addPostInput" />
            </div>

            <hr className='postHr'/>

            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                        <AddPhotoAlternateIcon htmlColor='orange' className='addPhoto' />
                        <span className="addPostOptionText">Add Photo</span>
                    </div>

                    <div className="addPostOption">
                        <AddLocationAltIcon htmlColor='tomato' className='addLocation' />
                        <span className="addPostOptionText">Add Location</span>
                    </div>                
                </div>

                <button className="PostButton">
                    Post
                </button>
            </div>
        </div>

    </div>
  )
}
