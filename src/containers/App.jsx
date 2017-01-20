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
    const isPlaying = false
    const start = function () {}
    const stop = function () {}
    return (
      <div>
        <Header />
        <Grid threads={tracks} />
        <Controller isPlaying={isPlaying} start={start} stop={stop}/>
      </div>
    )
  },

  start () {
    intervalId = setInterval(beat, stepTime)
  },

  stop () {
    clearInterval(intervalId)
    intervalId = null
  }

})



function beat () {
  console.log('step:', currentStep)
  currentStep++
  if (currentStep >= numSteps)
    currentStep = 0
  for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i]
    if (track.steps[currentStep]) {
      // track.sound.currentTime = 0
      // track.sound.play()
      new Audio(track.sound).play()
    }
  }
}

function clickStopStart () {
  if (isPlaying())
    stop()
  else
    start()
}

function isPlaying () {
  return intervalId !== null
}

export default App
