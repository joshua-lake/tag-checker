import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
