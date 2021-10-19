import {Weather} from './pages/Weather/Weather'
import { Header } from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
