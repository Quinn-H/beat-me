import React from 'react'

import Step from './Step'

const Track = (props) => {
  const track = props.track
  const steps = track.steps.map((step, index) => <Step key={index} step={step} />)
  return (
    <tr className="track">
      <th className="row">{track.name}</th>
      {steps}
    </tr>
  )
}

export default Track
