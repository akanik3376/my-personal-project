import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-slate-900 overflow-x-hidden">
      <App />
    </div>
  </React.StrictMode>,
)
