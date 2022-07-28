import React from 'react'

const PostImage = (props) => {
    const showImages = props.images.map((image,i) =>  <img src={image} key={i} className="" alt="Given" />)
    return (
       <div className="resposive flex flex-wrap justify-center">
        {showImages}
       </div>
    )
}

export default PostImage