import React from 'react'

const Controller = (props) => {
  const start = props.start
  const stop = props.stop
  const isPlaying = props.isPlaying
  // console.log(isPlaying)

  const buttonStyle = {
    width: '250px',
    height: '80px',
    margin: '5px'
  }

  return(
    <div style={{textAlign: 'center'}}>
      <button style={buttonStyle} className={`btn btn-${isPlaying ? '' : 'outline-'}success`} onClick={start}>Start</button>
      <button style={buttonStyle} className={`btn btn-${isPlaying ? 'outline-' : ''}danger`} onClick={stop}>Stop</button>
    </div>
  )
}

export default Controller
