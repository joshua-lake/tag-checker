import React, { useState } from 'react'
import Select from 'react-select'

import { tagChecker, options } from './inputHelper'

function Input (props) {
  const [input, setInput] = useState('')

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

  return (
    <div className='form'>
      <div className='selector'>
        <Select options={options} onChange={handleChange}/>
      </div>
      { input !== 'Custom input'
        ? <button onClick={handleClick} className='button'>Check</button>
        : <input onKeyPress={handleKeyPress} className='custom-input'></input>
      }
    </div>

  )
}

export default Input
