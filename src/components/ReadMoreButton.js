import React, { useState } from "react"

const ReadMoreButton = props => {
  let { showReadMore } = props
  console.log(showReadMore) 
  if (showReadMore) {
	 
    return (
          	<button type="button" className="btn-primary">
            	read more
			</button>
	)
  } else {
	console.log("fuck off")  
    return null
  }
}

export default ReadMoreButton