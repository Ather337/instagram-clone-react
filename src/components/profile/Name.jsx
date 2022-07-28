import React from 'react'

const Name = (props) => {
  return (
    <h1 className={'font-semibold '+ props.className}>
        { props.children || "Anonymous"}
    </h1>
  )
}

export default Name