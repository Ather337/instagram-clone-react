import "./post.css"
import { PostHeader } from "";
export const Post = (prop) => {
    return (
        <div className="post">
            <div className="postHeader">
                <PostHeader />
            </div>
            <div className="content">
                Content
            </div>
            <div className="actionBar">
                Like
            </div>
            <div className="commentSection">
                Comments
            </div>
        </div>
    )
}