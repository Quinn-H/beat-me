/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Controller from './Controller'

test('Controller renders correctly', () => {
  const stop = function () {}
  const start = function () {}
  const isPlaying = false
  const tree = renderer.create(
    <Controller start={start} stop={stop} isPlaying={isPlaying} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
