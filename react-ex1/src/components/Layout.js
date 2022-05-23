import 'styles/Layout.css'
import logo from 'assets/logo512.png'
import { Link } from 'react-router-dom'

const Layout = (props) => {
  return (
    <div>
      <header>
        <nav>
          <Link to={'/'}>
            <div>
              <img src={logo} alt="logo" />
              Food Places
            </div>
          </Link>
          <ul>
            <li>
              <Link to={'/'}>{'All Places'}</Link>
            </li>
            <li>
              <Link to={'/favorites'}>{'Favourites'}</Link>
            </li>
            <li>
              <Link to={'/frequent'}>{'Frequent'}</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
