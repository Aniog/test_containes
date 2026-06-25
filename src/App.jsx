import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import ProductsWeSource from './pages/ProductsWeSource'
import Services from './pages/Services'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'products-we-source', element: <ProductsWeSource /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
