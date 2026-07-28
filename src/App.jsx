import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import HowItWorks from "@/pages/HowItWorks"
import Products from "@/pages/Products"
import CaseStudies from "@/pages/CaseStudies"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "products", element: <Products /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
