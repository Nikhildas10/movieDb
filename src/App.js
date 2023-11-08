import { Route, Routes } from 'react-router-dom';
import './App.css';
import View from './components.js/View';
import Home from './pages/Home';
import Header from './components.js/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/view/:id/:link" element={<View></View>}></Route>
      </Routes>
    </div>
  );
}

export default App;
