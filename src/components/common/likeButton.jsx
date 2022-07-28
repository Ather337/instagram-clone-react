import React from 'react'
import {BsHeart,BsHeartFill} from "react-icons/bs"
import { useState } from 'react'
const LikeButton = (props) => {
    const [likeCount, setLikesCount] = useState(props.likes)
    const [like, setLike] = useState(0)
    const toggleLike = () => {
        setLike(!like)
        setLikesCount(props.updateLikes(!like))
    }
    return (
        <div onClick={toggleLike} className="like hover:cursor-pointer flex items-center text-primary-color dark:text-slate-100">
            <div className='mb-1 pr-2 text-sm'>
            {likeCount}
            </div>
            {like? <BsHeartFill  /> : <BsHeart/>}
        </div>
    )

}

export default LikeButton