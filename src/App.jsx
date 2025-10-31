import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Gallary from './Gallary'
import SearchForm from './SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <ThemeToggle/>
      <Gallary/>
      <SearchForm/>
    </main>
  )
}

export default App
