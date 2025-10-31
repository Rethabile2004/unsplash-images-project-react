import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useGlobalTheme } from './context';
const ThemeToggle = () => {
  const { isDarkTheme,toggleTheme } = useGlobalTheme();
  return (
    <section className='toggle-cont'>
      <button className='theme-toggle' onClick={toggleTheme}>
        {isDarkTheme ? <BsFillMoonFill className='toggle-icon-custom' /> : <BsFillSunFill className='toggle-icon-custom' />}

      </button>
    </section>
  )
}

export default ThemeToggle
