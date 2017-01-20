import React from 'react'

const Step = (props) => {
  const step = props.step
  const isSet = step.isSet
  const isCurrent = step.isCurrent
  const onClick = step.onClick
  const buttonType = isCurrent ? 'warning' : 'primary'
  const className = `btn ${isSet ? 'btn-' : 'btn-outline-'}${buttonType}`
  return (
    <td>
      <button
        type="button"
        className={className}
        onClick={onClick}>
      </button>
    </td>
  )
}

export default Step
