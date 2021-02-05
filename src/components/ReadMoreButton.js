import React, useState from "react"

const ReadMoreButton = props => {
  let { showReadMore } = useState(props)
   
  if (showReadMore.state) {
	 console.log("cunt") 
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