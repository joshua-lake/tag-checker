import React, { useState } from 'react'

import Input from './Input'
import Result from './Result'

const App = () => {
  const [checkerResult, setCheckerResult] = useState('')

  return (
    <div className='body'>
      <div className='checker-style'>
        <div className='title'>Tag Checker</div>
        <div className='component-width'>
          <Input setCheckerResult={setCheckerResult}/>
          <Result checkerResult={checkerResult} />
        </div>
      </div>
    </div>
  )
}

export default App
