
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Auth from './page/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route index element={<Home/>}/>
      <Route path="auth" element={<Auth/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
