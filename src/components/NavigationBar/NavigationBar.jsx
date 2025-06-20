import {useState} from "react";
import { useNavigate } from 'react-router-dom';

import { CiSquareMore } from "react-icons/ci";
import { PiBookBookmarkFill } from "react-icons/pi";
import './NavigationBar.css'

const NavigationBar = ({title, link1, link2}) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }
  const handleLogout = () => {
    navigate('/');
  }
  const handleStats = () => {
    navigate('/stats');
  }

  return(
    <div className="NavigationBarWrapper">
      <div className="NavigationBarContainer">
        <div className="Icon"><PiBookBookmarkFill /></div>
        <div className="Title">{title}</div>
        <div className="Icon">
          <button className="DropDownButton" onClick={toggleDropdown}><CiSquareMore /></button>
        </div>
      </div>
      {dropdown ? <div className="DropdownMenu">
        <button className="NavigateButton" onClick={handleStats}>Stats</button>
        <button className="NavigateButton" onClick={handleLogout}>Logout</button>
      </div> : <></>}
    </div>
  )
}

export default NavigationBar;
