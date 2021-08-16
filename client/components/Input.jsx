import React, { useState } from 'react'
import Select from 'react-select'

import { tagChecker, options } from './inputHelper'

function Input (props) {
  const [input, setInput] = useState('')
  // const [testState, setTestState] = useState('')

  const { setCheckerResult } = props

  function handleChange (e) {
    setInput(e.value)
  }

  function handleClick () {
    setCheckerResult(tagChecker(input))
  }

  function handleKeyPress (e) {
    if (e.key === 'Enter') {
      setCheckerResult(tagChecker(e.target.value))
    }
  }

  // console.log('testState', testState)

  return (
    <div>
      <Select options={options} onChange={handleChange}/>
      { input !== 'Custom input'
        ? <button onClick={handleClick}>Check</button>
        : <input onKeyPress={handleKeyPress}></input>
      }
    </div>

  )
}

export default Input
