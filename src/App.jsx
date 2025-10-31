import { useState } from 'react'
import ThemeToggle from '../src/ThemeToggle'
import Gallary from '../src/Gallary'
import SearchForm from '../src/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <ThemeToggle/>
      <SearchForm/>
      <Gallary/>
    </main>
  )
}

export default App
