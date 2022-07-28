import React from 'react'
import {Name, Dp, Comment} from "../profile"
import LikeButton from '../common/likeButton'
const CommentCard = (props) => {
  const comment=props.comment
  const updateLikes=(like) => {
    if(like){
        comment.like_count=comment.like_count+1
    }else{
        comment.like_count=comment.like_count-1
    }
    // props.saveUpdates(comment)
    return comment.like_count

}
  return (

    <div className="comment px-4 py-2 dark:bg-slate-800 dark:border border-b border-slate-500 dark:border-slate-500 bg-slate-200">
        <Comment>{comment.comment}</Comment>
        <div className="flex justify-between items-center">

<div className='flex space-x-4 items-center'>
        <Dp className="w-5 h-5"></Dp>
        <Name className="text-sm opacity-80">{comment.by}</Name>
      </div>
      <div className='actions flex items-center space-x-4'>
        <p id="time" className='font-thin text-sm opacity-80'>{new Date(comment.timestamp).toDateString()}</p>
        <LikeButton updateLikes={updateLikes} likes={comment.like_count} />
      </div>
    </div>
    </div>
  )
}

export default CommentCard