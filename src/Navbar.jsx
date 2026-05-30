import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="logo">MySite</div>

      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className={`links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar