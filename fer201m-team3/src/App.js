import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lấy dư liệu từ api về ở đây nè

function App() {
  return (
    <div>
      {/* Navbar, Header ở đây nè */}



      {/* Đây là chuyển hướng nhé */}
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
