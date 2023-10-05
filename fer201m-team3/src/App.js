import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

// Lấy dư liệu từ api về ở đây nè

function App() {
  return (
    <div>
      {/* Header ở đây nè */}
    <Header/>
    {/* Nguyen Van Rin */}

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
