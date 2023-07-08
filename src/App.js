
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Auth from './page/Auth';
import { UserContext } from './Components/Context/UserContext';
function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
        </Routes>

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
