import './Sidebar.css'
import { MdHomeFilled } from "react-icons/md";

function Sidebar({ onNavigate }) {
  return (
    <nav className='sidebar'>
      <div className="nav-container">
        <ul className='nav-section'>
            <li onClick={() => onNavigate(0)}><MdHomeFilled size={20}/></li>
            <li onClick={() => onNavigate(1)}><p>Introduction</p></li>
            <li onClick={() => onNavigate(2)}><p>Experience</p></li>
            <li onClick={() => onNavigate(3)}><p>Education</p></li>
            <li onClick={() => onNavigate(4)}><p>Initiatives</p></li>
            <li onClick={() => onNavigate(5)}><p>Contact</p></li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar