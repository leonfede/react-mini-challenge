import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header className='Header'>
      <div className='Header__brand'>
        <img
          className='Header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg'
          alt='React logo'
        />
        <h1 className='Header__title u-hide-on-mb'>Awesome App</h1>
      </div>
      <nav>
        <NavLink to='/' className='Header__nav-link'>
          Personas
        </NavLink>
        <NavLink to='/form' className='Header__nav-link'>
          Formulario
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
