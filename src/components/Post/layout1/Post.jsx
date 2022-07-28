import "./post.css"
import {MdLocalOffer, MdSend} from "react-icons/md"
import {FaShareSquare, FaRegEye} from "react-icons/fa"
import CommentCard  from "../CommentCard"
import PostImage from "../PostImage"
import {Link} from "react-router-dom"
import LikeButton from "../../common/likeButton"
import { useState } from "react"
export const Post = (props) => {
    var [input, setInput] = useState({
                comment:""
    })
    const post=props.post
    const commentHandler = (e) => {
        setInput({[e.target.name]:e.target.value})
    }
    const saveComment = () => {
            input.id = 123
            input.by ="Athar Ghuftar"
            input.timestamp = "2022-07-28T10:20:30Z"
            input.like_count=0
            post.comments.push(input)
            setInput({"comment":""})
    }
    const updateLikes=(like) => {
        if(like){
            console.log(post)
            post.like_count=post.like_count+1
        }else{
            console.log(post)
            post.like_count=post.like_count-1
        }
        props.saveUpdates(post)
        return post.like_count

    }
    return (
        <div className="post border dark:border-none">
            <div className="header p-3 flex items-center  justify-between border-b bg-slate-50 dark:border-0 dark:bg-slate-700 ">
                <div className="flex-row space-x-4 flex">
                <img
                    src={post.profile_picture || "./avatar.svg"}
                    className="rounded-full text-xs w-10 h-10"
                    alt={post.author||"Avatar"}
                />
                <div className="flex flex-col">
                    <Link className=" dark:text-slate-100 font-bold" to={post.url || "#notRegistered"}>{post.author}</Link>
                    <Link className=" leading-3 text-sm" to={"?search=place&"+post.url}>{post.location}</Link>
                </div>
                </div>
                <MdLocalOffer className="text-primary-color text-xl" />
            </div>
            <div className="content flex items-center justify-center dark:bg-slate-600 bg-slate-50 ">
            <PostImage images={post.content.images} />
            </div>
            <div className="text-field px-4 py-1 bg-slate-50 dark:bg-slate-600 dark:border-0 dark:text-slate-200 font-mono border-t">
                {post.content.text && post.content.text}
            </div>
            <div className="flex items-center justify-evenly text-2xl dark:bg-slate-500 dark:border-0 bg-slate-100 border-t p-3">
                <LikeButton updateLikes={updateLikes} likes={post.like_count} />
                <div className="share text-primary-color dark:text-slate-100"><FaShareSquare /></div>
                <div className="view-by text-primary-color dark:text-slate-100"><FaRegEye/></div>
            </div>
            <div className="commentSection">
                <div className="newComment flex items-center">
                    <textarea onChange={commentHandler} placeholder="Please enter you comment here... " name="comment" value={input.comment} id="" className="w-full dark:bg-slate-700 p-4 outline-none resize-none m-0"></textarea>
                    <div className="logo p-3">
                    <MdSend onClick={saveComment} className="text-primary-color cursor-pointer text-2xl dark:text-slate-200" />
                    </div> 
                </div>
                {post.comments.map((comment) => <CommentCard key={comment.id} comment={comment}/>)}
            </div>
        </div>

    )
}