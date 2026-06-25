import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050a14]">
      <Outlet />
    </div>
  )
}

export default Layout
