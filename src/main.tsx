import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Contato from './contato/Contato'
import Footer from './componentes/footer/Footer'

import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
      <Header/>
      <Main/>
      <Footer/>
    </> ,
  },
  {
    path: "/inicio",
    element: <div>Início</div>,
  },
  {
    path: "/portfolio",
    element: <div>Página de Portfólio</div>,
  },
  {
    path: "/avaliacoes",
    element: <div>Página de avaliações</div>,
  },
  {
    path: "/contato",
      element: <>
        <Header/>
        <Contato/>
        <Footer/>
    </> ,
  },
  {
    path: "/sabermais",
    element: <div>Página de mais informações</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)