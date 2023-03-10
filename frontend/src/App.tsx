import * as React from 'react'
import * as Icons from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './page/Error'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Icons.Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Treningskamp
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      ),
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}
