import React from 'react'

const PageTemplate = (props) => {
  return (
    <div className="flex p-6 items-center min-h-full justify-center">
        {props.children}
    </div>
  )
}

export default PageTemplate