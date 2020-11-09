import React from 'react'
import { Redirect, Switch, Route as ReactRouter } from 'react-router-dom'

import Home from 'pages'
import Login from 'pages/login'
import Register from 'pages/register'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
]

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) => {
  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        const render = (props) => {

          if (route.render) {
              return route.render({ ...props, ...extraProps, route: route })
          } else if (route.component) {
              return (
                  <route.component {...props} {...extraProps} route={route} />
              )
          }
        }

        return (
          <ReactRouter
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            guest={route.guest}
            secured={route.secured}
            strict={route.strict}
            render={render}
          />
        )
      })}
    </Switch>
  )
}