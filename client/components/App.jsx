import React, { useState } from 'react'

import Input from './Input'
import Result from './Result'

const App = () => {
  const [checkerResult, setCheckerResult] = useState('')

  return (
    <div>
      <div>Tag Checker</div>
      <Input setCheckerResult={setCheckerResult} />
      <Result checkerResult={checkerResult} />
    </div>
  )
}

export default App
