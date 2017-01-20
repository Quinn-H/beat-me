import React from 'react'

import Controller from '../components/Controller'
import Grid from '../components/Grid'
import Header from '../components/Header'

function createThread (name, sound, numSteps) {
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

function toggleStep (state, threadIndex, stepIndex) {
  const newState = Object.assign({}, state)
  const isSet = newState.threads[threadIndex].steps[stepIndex].isSet
  newState.threads[threadIndex].steps[stepIndex].isSet = !isSet
  return newState
}

const App = React.createClass({

  getInitialState () {
    // const stepTime = 1000 * 60 / bpm
    const bpm = 100
    const numSteps = 8
    const currentStep = 0
    const intervalId = null

    const threads = [
      createThread('Perc126-01', 'Perc126-01.wav', numSteps),
      createThread('PercFX126-01', 'PercFX126-01.wav', numSteps)
    ]

    return {
      bpm,
      currentStep,
      intervalId,
      numSteps,
      threads
    }
  },

  render () {
    const threads = this.state.threads.map((thread, threadIndex) => {
      return {
        index: threadIndex,
        name: thread.name,
        steps: thread.steps.map((step, stepIndex) => {
          return {
            index: stepIndex,
            isCurrent: step.isCurrent,
            isSet: step.isSet,
            onClick () {
              this.setState(toggleStep(this.state, threadIndex, stepIndex))
            }
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
        <Grid threads={threads} />
        <Controller isPlaying={isPlaying} start={start} stop={stop}/>
      </div>
    )
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

function start () {
  document.getElementById('stop-start').innerHTML = "Stop"
  intervalId = setInterval(beat, stepTime)
}

function stop () {
  document.getElementById('stop-start').innerHTML = "Start"
  clearInterval(intervalId)
  intervalId = null
}

export default App
