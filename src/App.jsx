import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './data/DataContext';
import { AccessibilityProvider } from './data/AccessibilityContext';
import HoverScreenReader from './components/HoverScreenReader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './pages/Projects';
import ProfessionalSummary from './pages/ProfessionalSummary';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Journey from './pages/Journey';
import Hobbies from './pages/Hobbies';
import Notes from './pages/Notes';
import Contact from './pages/Contact';

function App() {
  return (
    <AccessibilityProvider>
      <DataProvider>
        <BrowserRouter>
          <div className="app min-h-screen bg-surface-50 text-text-primary transition-colors duration-700">
            <HoverScreenReader />
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/summary" element={<ProfessionalSummary />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
    </AccessibilityProvider>
  );
}

export default App;
