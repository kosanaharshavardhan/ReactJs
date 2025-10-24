import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Theme from './contexts/Theme.jsx'
import './index.css'
import Secondcontext from './contexts/Secondcontext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Secondcontext>
    <Theme>
    <App />
  </Theme>
  </Secondcontext>
)
