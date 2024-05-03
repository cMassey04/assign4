import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import AssignmentOne from "./pages/AssignmentOne";
import TicTacToe from "./pages/TicTacToe";
import BasicForm from "./pages/BasicForm";
import TimeTracking from "./pages/TimeTracking";
import VotingApp from "./pages/VotingApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AssignmentOne" element={<AssignmentOne />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/basicForm" element={<BasicForm />} />
        <Route path="/timetracking" element={<TimeTracking />} />
        <Route path="/votingapp" element={<VotingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
