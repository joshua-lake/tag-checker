import { expect } from '@jest/globals'
import { tagChecker } from '../components/inputHelper'

test('checks correctly tagged paragraph passes', () => {
  const testString = '<A><B>testing</B></A>'
  const expected = 'Correctly tagged paragraph'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with unmatched opening tag fails', () => {
  const testString = '<A><B>testing</B>'
  const expected = 'Expected A but found #'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with unmatched closing tag fails', () => {
  const testString = '<A>testing</A></B>'
  const expected = 'Expected # but found B'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with unmatched tags fails', () => {
  const testString = '<A>testing</B>'
  const expected = 'Expected A but found B'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks partial closing tag fails', () => {
  const testString = '<A>testing</A'
  const expected = 'Expected A but found #'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks partial opening tag fails', () => {
  const testString = '<Atesting</A>'
  const expected = 'Expected # but found A'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with partial opening and partial closing considered a string', () => {
  const testString = '<Atesting</A'
  const expected = 'Correctly tagged paragraph'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with lower case in tags passes', () => {
  const testString = '<A>testing<b></A>'
  const expected = 'Correctly tagged paragraph'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with special character opening tag passes', () => {
  const testString = '<A>testing<*></A>'
  const expected = 'Correctly tagged paragraph'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})

test('checks paragraph with special character closing tag passes', () => {
  const testString = '<A>testing</*></A>'
  const expected = 'Correctly tagged paragraph'
  const actual = tagChecker(testString)
  expect(actual).toBe(expected)
})
