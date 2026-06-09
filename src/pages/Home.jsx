import React from 'react'
export default function Home() { return <div>Home Page</div> }
EOF && cat > src/pages/Services.jsx <<EOF
import React from 'react'
export default function Services() { return <div>Services Page</div> }
EOF && cat > src/pages/HowItWorks.jsx <<EOF
import React from 'react'
export default function HowItWorks() { return <div>How It Works Page</div> }
EOF && cat > src/pages/Products.jsx <<EOF
import React from 'react'
export default function Products() { return <div>Products Page</div> }
EOF && cat > src/pages/CaseStudies.jsx <<EOF
import React from 'react'
export default function CaseStudies() { return <div>Case Studies Page</div> }
EOF && cat > src/pages/Blog.jsx <<EOF
import React from 'react'
export default function Blog() { return <div>Blog Page</div> }
EOF && cat > src/pages/Contact.jsx <<EOF
import React from 'react'
export default function Contact() { return <div>Contact Page</div> }
EOF && cat > src/pages/NotFound.jsx <<EOF
import React from 'react'
export default function NotFound() { return <div>404 Not Found</div> }
EOF && cat > src/App.jsx <<EOF
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import HowItWorks from '@/pages/HowItWorks'
import Products from '@/pages/Products'
import CaseStudies from '@/pages/CaseStudies'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
