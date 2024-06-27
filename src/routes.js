import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'
import Chat from './pages/Chat';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<Erro />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/Chat" element={<Chat/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;