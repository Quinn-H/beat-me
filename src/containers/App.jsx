import React from 'react'

import Controller from '../components/Controller'
import Grid from '../components/Grid'
import Header from '../components/Header'

const NUM_STEPS = 8

function createThread (name, sound) {
  const steps = new Array(NUM_STEPS)
  return {
    name,
    sound,
    steps
  }
}

export default React.createClass({

  getInitialState() {

    const threads = [
      {
        name: 'Perc126-01',
        sound: 'Perc126-01.wav',
        // sound: new Audio('Perc126-01.wav'),
        steps: [true, false, true, false, true, false, true, false]
      },
      {
        name: 'PercFX126-01',
        sound: 'PercFX126-01.wav',
        // sound: new Audio('PercFX126-01.wav'),
        steps: [false, false, false, false, false, false, false, false]
      }
    ]

    return {
      threads
    }
  },

  render () {

    const threads = this.state.threads

    return (
      <div>
        <Header />
        <Grid threads={threads} />
        <Controller />
      </div>
    )
  }
})
