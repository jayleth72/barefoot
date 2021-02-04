import React from "react"

const ReadMoreButton = props => {
  let { showReadMore } = props
  console.log(showReadMore)
  {showReadMore ? console.log("butt") : consol.log("anus")}
  if (showReadMore) {
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