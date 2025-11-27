import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import MainRouting from './routes/MainRouting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRouting />
  </StrictMode>,
)
