import { useState } from 'react'
import AISitePage from './components/AISitePage'
import UserInfoForm from './components/UserInfoForm'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleBackToSite = () => {
    setShowForm(false)
  }

  return (
    <div className="min-h-screen">
      {showForm ? (
        <UserInfoForm onBack={handleBackToSite} />
      ) : (
        <AISitePage onShowForm={handleShowForm} />
      )}
    </div>
  )
}

export default App
