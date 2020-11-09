import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { routes, renderRoutes } from 'route'
import "index.css"

import AuthProvider from 'providers/authProvider'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          {renderRoutes(routes)}
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App