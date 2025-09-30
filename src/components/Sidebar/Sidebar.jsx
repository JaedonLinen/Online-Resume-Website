import './Sidebar.css'
import { MdHomeFilled } from "react-icons/md";

function Sidebar() {
  return (
    <nav className='sidebar'>
      <div className="nav-container">
        <ul className='nav-section'>
            <li><MdHomeFilled size={20}/></li>
            <li><p>Introduction</p></li>
            <li><p>Education</p></li>
            <li><p>Experience</p></li>
            <li><p>Initiatives</p></li>
            <li><p>Contact</p></li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar