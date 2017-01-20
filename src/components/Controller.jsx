import React from 'react'

const Controller = (props) => {
  const controller = props.controller
  const onClick = controller.onClick
  return(
  <td>
    <button type="button" className="btn btn-outline-danger" onClick={onClick}>
    </button>
  </td>
)
}

export default Controller
