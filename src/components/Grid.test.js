/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Grid from './Grid'

test('Grid renders correctly', () => {
  const tracks = []
  const tree = renderer.create(
    <Grid tracks={tracks} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
