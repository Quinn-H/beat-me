import React from 'react'

import Controller from '../components/Controller'
import Grid from '../components/Grid'
import Header from '../components/Header'

function createTrack (name, sound, numSteps) {
  const steps = []
  for (let i = 0; i < numSteps; i++)
    steps.push({
      isCurrent: false,
      isSet: false
    })
  return {
    name,
    sound,
    steps
  }
}

function toggleStep (state, trackIndex, stepIndex) {
  const newState = Object.assign({}, state)
  const isSet = newState.tracks[trackIndex].steps[stepIndex].isSet
  newState.tracks[trackIndex].steps[stepIndex].isSet = !isSet
  return newState
}

const App = React.createClass({

  beat () {
    const numSteps = this.state.numSteps
    const currentStep = this.state.currentStep
    const tracks = this.state.tracks

    console.log('step:', currentStep)

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i]
      if (track.steps[currentStep].isSet) {
        // track.sound.currentTime = 0
        // track.sound.play()
        new Audio(track.sound).play()
      }
    }

    const nextStep = currentStep === numSteps - 1 ? 0 : currentStep + 1
    const newState = Object.assign({}, this.state)
    newState.currentStep = nextStep
    this.setState(newState)
  },

  getInitialState () {
    // const stepTime = 1000 * 60 / bpm
    const bpm = 100
    const numSteps = 8
    const currentStep = 0
    const intervalId = null

    const tracks = [
      createTrack('Perc126-01', 'Perc126-01.wav', numSteps),
      createTrack('PercFX126-01', 'PercFX126-01.wav', numSteps)
    ]

    return {
      bpm,
      currentStep,
      intervalId,
      numSteps,
      tracks
    }
  },

  isPlaying () {
    return this.state.intervalId !== null
  },

  render () {
    const tracks = this.state.tracks.map((track, trackIndex) => {
      return {
        index: trackIndex,
        name: track.name,
        steps: track.steps.map((step, stepIndex) => {
          const onClick = () => {
            this.setState(toggleStep(this.state, trackIndex, stepIndex))
          }
          return {
            index: stepIndex,
            isCurrent: step.isCurrent,
            isSet: step.isSet,
            onClick
          }
        })
      }
    })
    const isPlaying = this.isPlaying()
    const start = this.start
    const stop = this.stop
    return (
      <div>
        <Header />
        <Grid threads={tracks} tracks={tracks} />
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <Controller isPlaying={isPlaying} start={start} stop={stop}/>
      </div>
    )
  },

  start () {
    const stepTime = 1000 * 60 / this.state.bpm
    const newState = Object.assign({}, this.state)
    newState.intervalId = setInterval(this.beat, stepTime)
    this.setState(newState)
  },

  stop () {
    clearInterval(this.state.intervalId)
    const newState = Object.assign({}, this.state)
    newState.intervalId = null
    this.setState(newState)
  }

})

function clickStopStart () {
  if (isPlaying())
    stop()
  else
    start()
}

export default App
