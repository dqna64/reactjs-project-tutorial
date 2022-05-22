import { Outlet } from 'react-router-dom';
import 'styles/App.css';

const App = () => {
  return (
    <div className="App">
      <nav>
        <img src="assets/logo512.png" alt="logo" />
        <div>Food Places</div>
      </nav>
<Outlet/>
    </div>
  )
}

export default App