import React from 'react'

const Controller = (props) => {
  const start = props.start
  const stop = props.stop
  const isPlaying = props.isPlaying
  console.log(isPlaying)
  return(
    <div>
      <button className={`btn btn-${isPlaying ? '' : 'outline-'}success`} onClick={start}>Start</button>
      <button className={`btn btn-${isPlaying ? 'outline-' : ''}danger`} onClick={stop}>Stop</button>
    </div>
  )
}

export default Controller
