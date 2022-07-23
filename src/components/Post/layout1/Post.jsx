import "./post.css"
import {MdLocalOffer} from "react-icons/md"
import {BsHeart,BsHeartFill} from "react-icons/bs"
import {FaShareSquare, FaRegEye} from "react-icons/fa"

import {Link} from "react-router-dom"
export const Post = (prop) => {
    return (
        <div className="post">
            <div className="header p-3 flex items-center  justify-between border-b bg-slate-50 dark:border-0 dark:bg-slate-700 ">
                <div className="flex-row space-x-4 flex">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-full w-10 h-10"
                    alt="Avatar"
                />
                <div className="flex flex-col">
                    <Link className=" dark:text-slate-100 font-bold" to={"/"}>Athar Ghuftar</Link>
                    <Link className=" leading-3 text-sm" to={"/"}>Toronto, Ontario</Link>
                </div>
                </div>
                <MdLocalOffer className="text-primary-color text-xl" />
            </div>
            <div className="content flex items-center justify-center dark:bg-slate-600 bg-slate-50 ">
            <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className=""
                    alt="Given"
                />
            </div>
            <div className="flex items-center justify-evenly text-2xl dark:bg-slate-500 dark:border-0 bg-slate-100 border-t p-3">
                <div className="like dark:text-slate-100"><BsHeart /></div>
                <div className="share dark:text-slate-100"><FaShareSquare /></div>
                <div className="view-by dark:text-slate-100"><FaRegEye/></div>
            </div>
            <div className="commentSection">Comments</div>
        </div>

    )
}