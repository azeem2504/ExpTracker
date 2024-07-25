import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UnivStyle from './styles/univStyle.jsx'
import { GlobalProvider } from './context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UnivStyle/>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
