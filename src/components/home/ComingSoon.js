import React from "react"
import styled from "styled-components"

const ComingSoon = ({comingSoonText}) => {
  
  return (
    <div>
      <h4>
        <span className="title">{comingSoonText}</span>
      </h4>
    </div>
  
  )
}

export default styled(ComingSoon)`
text-transform: uppercase;
font-size: 1.3rem;
margin-bottom: 2rem;
h4{
    text-align: center;
    letter-spacing: 5px;
    color:var(--primaryColor);
}

.title{
    color: var(--mainBlack)
}

span {
    display: block;
}

@media (min-width: 576px) {
    span {
        display: inline-block;
        margin: 0 0.35rem
    }
}
`