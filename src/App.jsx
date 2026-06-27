import { useEffect } from 'react'
import GeneratorsPage, { GeneratorsHead } from './GeneratorsPage.jsx'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'AI Website Generators - Build Any Site in Seconds | Strikingly'
  }, [])

  return (
    <>
      <GeneratorsHead />
      <GeneratorsPage />
    </>
  )
}

export default App
