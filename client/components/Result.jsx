import React from 'react'

function Result (props) {
  const { checkerResult } = props

  return (
    <div className='result'>
      {checkerResult}
    </div>
  )
}

export default Result
