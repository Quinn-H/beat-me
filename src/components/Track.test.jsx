/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Track from './Track'

test('Track renders correctly', () => {
  const name = "Kick"
  const steps = []
  const track = {name, steps}
  const tree = renderer.create(
    <Track track={track} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
