import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VoterRegistration from "./components/VoterRegistration/VoterRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to Hedera Voting DApp 🗳️</h1>} />
        <Route path="/register" element={<VoterRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
