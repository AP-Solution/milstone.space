import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { SingleGoodPage } from './components/SingleGoodPage/SingleGoodPage';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Support } from './components/Support/Support';
import { Store } from './components/Store/Store';
import { Dobrodiya } from './components/Dobrodiya/Dobrodiya';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:goodId" element={<SingleGoodPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dobrodiya" element={<Dobrodiya />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
