import './App.css';
import { useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Introduction from './components/Introduction/Introduction';

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
      <Sidebar />
      <div className="scroll-container" ref={scrollRef}>
        <section><Introduction /></section>
        <section><Introduction /></section>
        <section><Introduction /></section>
      </div>
    </div>
  );
}

export default App;
