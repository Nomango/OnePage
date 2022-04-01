import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/reset.css'
// import './assets/css/fonts.css'
import './assets/css/hanla.css'
import App from './App'
import Resume from './Resume'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

document.title = Resume.nick_name + "'s One Page"
if (import.meta.env.DEV) {
  document.title += ' (DEV)'
}
