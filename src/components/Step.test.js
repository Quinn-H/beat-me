/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Step from './Step'

test('Step renders correctly', () => {
  const onClick = function () {}
  const isSet = false
  const isCurrent = false
  const step = {onClick, isSet, isCurrent}
  const tree = renderer.create(
    <Step step={step} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
