import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { PhilosophyPage } from './pages/PhilosophyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Layout />}>
          <Route index exact element={<HomePage />}></Route>
          <Route path='/resume' exact element={<ResumePage />}></Route>
          <Route path='/philosophy' exact element={<PhilosophyPage />}></Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
