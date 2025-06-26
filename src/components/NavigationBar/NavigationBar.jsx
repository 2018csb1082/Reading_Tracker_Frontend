import {useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';

import { CiSquareMore } from "react-icons/ci";
import { PiBookBookmarkFill } from "react-icons/pi";
import './NavigationBar.css'

const NavigationBar = ({title, link1, link2}) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const hoverRef = useRef(false);

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!hoverRef.current) {
        setDropdown(false);
      }
    }, 200);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }
  const handleLogout = () => {
    navigate(link2);
  }
  const handleStats = () => {
    navigate(link1);
  }

  return(
    <div className="NavigationBarWrapper">
      <div className="NavigationBarContainer">
        <div className="Icon"><PiBookBookmarkFill /></div>
        <div className="Title">{title}</div>
        <div className="Icon">
          <button 
            className="DropDownButton" 
            onClick={toggleDropdown}
            onMouseEnter={() => { hoverRef.current = true; }}
            onMouseLeave={() => {
              hoverRef.current = false;
              handleMouseLeave();
            }}
          >
              <CiSquareMore />
          </button>
        </div>
      </div>
      {dropdown ? <div 
        className="DropdownMenu"
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => {
          hoverRef.current = false;
          handleMouseLeave();
        }}
      >
        <button className="NavigateButton" onClick={handleStats}>Stats</button>
        <button className="NavigateButton" onClick={handleLogout}>Logout</button>
      </div> : <></>}
    </div>
  )
}

export default NavigationBar;
