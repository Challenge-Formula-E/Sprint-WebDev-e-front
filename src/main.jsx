import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Races from './pages/Races.jsx'
import Home from './pages/Home.jsx'
import Coins from './pages/Coins.jsx'
import About from './pages/About.jsx'
import News from './pages/News.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/coins',
        element: <Coins />
      },
      {
        path: '/races',
        element: <Races />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/news',
        element: <News />,
      },
    ],
  },
  {
    /* ADICIONA LOGIN E CADASTRO AQ PRA N TER HEADER E FOOTER */  
  },
  {
    path: '*',
    element: <h1>Página não encontrada</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
