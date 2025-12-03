import React from 'react'
import ReactDOM from 'react-dom/client'


// index.css'
import '../styles/index.css'

// components
import ToDo from './components/ToDo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDo/>
  </React.StrictMode>,
)
