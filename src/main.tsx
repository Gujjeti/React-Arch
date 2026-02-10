import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/style.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About.tsx';
import Products from './pages/Products.tsx'
import Layout from './layout/Layout.tsx'
import Contact from './pages/Contact.tsx'
import { Provider } from 'react-redux'
import {store} from './store.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <Provider store={store}>
     <Routes>
      <Route  element={<Layout/>} >
       <Route index  path='/' element={<App/>}  />
      <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>}  />
          <Route path='/contact' element={<Contact/>}  />
      </Route>
    </Routes>
   </Provider>
   </BrowserRouter>
  </StrictMode>,
)
