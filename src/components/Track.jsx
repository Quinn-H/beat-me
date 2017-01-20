import React from 'react'

import Step from './Step'

const Track = (props) => {
  const track = props.track
  // console.log(track.steps[0])
  const steps = track.steps.map((step, index) => {
    return <Step key={index} step={step} />
  })
  return (
    <tr className="track">
      <th className="row">{track.name}</th>
      {steps}
    </tr>
  )
}

export default Track
