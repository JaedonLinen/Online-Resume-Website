import './App.css';
import { useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './components/Landing/Landing';
import Introduction from './components/Introduction/Introduction';
import Education from './components/Education/Education';
import Personal from './components/Personal/Personal';
import Contact from './components/Contact/Contact';

function App() {
  const scrollRef = useRef(null);
  const sectionRefs = useRef([]); // store refs for each section

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // prevent vertical scroll
        el.scrollLeft += e.deltaY; // scroll horizontally
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // 🔑 Function to scroll to section
  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ 
      behavior: "smooth", 
      inline: "start" 
    });
  };

  return (
    <div className='website'>
      {/* Pass scroll function into Sidebar */}
      <Sidebar onNavigate={scrollToSection} />

      <div className="scroll-container" ref={scrollRef}>
        <section ref={el => sectionRefs.current[0] = el}><Landing /></section>
        <section ref={el => sectionRefs.current[1] = el}><Introduction /></section>
        <section ref={el => sectionRefs.current[2] = el}><Education /></section>
        <section ref={el => sectionRefs.current[4] = el}><Personal /></section>
        <section ref={el => sectionRefs.current[5] = el}><Contact /></section>
      </div>
    </div>
  );
}

export default App;
