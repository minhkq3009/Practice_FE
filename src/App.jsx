import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import CalendarPage from './components/CalendarPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CalendarPage />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
