import * as React from 'react'
import * as Icons from '@mui/icons-material'
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IndexPage from './page/Index'
import KamperPage from './page/Kamper'
import ErrorPage from './page/Error'
import NewKampPage from './page/NewKamp'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/kamper',
      element: <KamperPage />,
    },
    {
      path: '/kamper/new',
      element: <NewKampPage />,
    },
  ])

  return (
    <>
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
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  )
}
