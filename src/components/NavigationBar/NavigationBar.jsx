import {useState} from "react";

import { CiSquareMore } from "react-icons/ci";
import { PiBookBookmarkFill } from "react-icons/pi";
import './NavigationBar.css'

const NavigationBar = ({title, link1, link2}) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }
  return(
    <div className="NavigationBarWrapper">
      <div className="NavigationBarContainer">
        <div className="Icon"><PiBookBookmarkFill /></div>
        <div className="Title">{title}</div>
        <div className="Icon" onClick={toggleDropdown}><CiSquareMore /></div>
      </div>
      {dropdown ? <div className="DropdownMenu">Droop</div> : <></>}
    </div>
  )
}

export default NavigationBar;
