/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

test('Header renders correctly', () => {
  const stop = function () {}
  const start = function () {}
  const isPlaying = false
  const tree = renderer.create(
    <Header />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
