import './App.css';
import { useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Introduction from './components/Introduction/Introduction';
import Professional from './components/Professional/Professional';
import Personal from './components/Personal/Personal';
import Contact from './components/Contact/Contact';

function App() {
  const scrollRef = useRef(null);

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

  return (
    <div className='website'>
      <div className="scroll-container" ref={scrollRef}>
        <section><Introduction /></section>
        <section><Professional /></section>
        <section><Personal /></section>
        <section><Contact /></section>
      </div>
    </div>
  );
}

export default App;
