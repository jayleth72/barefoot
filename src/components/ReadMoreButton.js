import React from "react"

const ReadMoreButton = props => {
  let { showReadMore } = props
  if (!showReadMore) {
    return (
          	<button type="button" className="btn-primary">
            	read more
			</button>
	)
  } else {
    return null
  }
}

export default ReadMoreButton