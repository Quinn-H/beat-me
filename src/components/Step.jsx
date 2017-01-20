import React from 'react'

const Step = (props) => {
  const step = props.step
  const onClick = step.onClick
  return (
    <td>
      <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      </button>
    </td>
  )
}

export default Step
