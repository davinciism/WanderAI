import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './trips/index.jsx'
import Navbar from './components/custom/Navbar.jsx'
import ViewTrip from './trips/ViewTrip.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/create-trip',
    element: <CreateTrip/>
  },
  {
    path: '/view-trip',
    element: <ViewTrip/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID }>
      <Navbar/>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
