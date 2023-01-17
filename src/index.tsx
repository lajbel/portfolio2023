import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
