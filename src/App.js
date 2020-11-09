import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { routes, renderRoutes } from 'route'
import "index.css"

import AuthProvider, { useAuth, isActiveToken } from 'providers/authProvider'

function App() {

  const [, dispatch] = useAuth()

  useEffect(() => {
    isActiveToken(dispatch)
  }, [])

  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}