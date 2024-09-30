import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Races from './pages/Races.jsx';
import Home from './pages/Home.jsx';
import Coins from './pages/Coins.jsx';
import About from './pages/About.jsx';
import News from './pages/News.jsx';
import Login from './pages/Login.jsx';
import { ProtectedRoute } from './componentes/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: 'Sprint-WebDev-e-front/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProtectedRoute><Home /></ProtectedRoute>
      },
      {
        path: 'coins',
        element: <ProtectedRoute><Coins /></ProtectedRoute>
      },
      {
        path: 'races',
        element: <ProtectedRoute><Races /></ProtectedRoute>,
      },
      {
        path: 'about',
        element: <ProtectedRoute><About /></ProtectedRoute>,
      },
      {
        path: 'news',
        element: <ProtectedRoute><News />,</ProtectedRoute>

      },

    ],
  },
  {
    path: 'Sprint-WebDev-e-front/login',
    element: <Login />
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
