import { expect } from '@jest/globals'
import { tagChecker } from '../components/inputHelper'

test('checks correctly tagged paragraph returns correct result', () => {
  const testString = '<A><B>testing</B></A>'
  const expected = 'Correctly tagged paragraph'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with unmatched opening tag returns as expected', () => {
  const testString = '<A><B>testing</B>'
  const expected = 'Expected A but found #'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with unmatched closing tag returns as expected', () => {
  const testString = '<A>testing</A></B>'
  const expected = 'Expected # but found B'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with unmatched tags returns as expected', () => {
  const testString = '<A>testing</B>'
  const expected = 'Expected A but found B'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})
