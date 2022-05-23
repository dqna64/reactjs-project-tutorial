import { Outlet } from 'react-router-dom'
import 'styles/App.css'
import logo from 'assets/logo512.png'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
          <img src={logo} alt="logo" />
            Food Places</div>
          <ul>
            <li>
            <Link to={'/all'}>{"All Places"}</Link>
            </li>
            <li>
            <Link to={'/add'}>{"Add Place"}</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
