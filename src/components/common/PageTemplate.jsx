import React from 'react'

const PageTemplate = (props) => {
  return (
    <div className="flex flex-col space-y-20 p-6 items-center min-h-full justify-center">
        {props.children}
    </div>
  )
}

export default PageTemplate