import React, { useState } from 'react';
import './miniCompoCss/Dropdown.css';

const DropDown = ({Title, selected, setSelected, nm}) => {

    const [isActive, setIsActive] = useState(false);
    const options = ['Yes', 'No', 'none'];
    const choose = 'choose One';

    

  return (
    <>  
        <div className="containerdrop">
            <h3 id='dropHead'>{Title}</h3>
            <div className="dropdown">
                <div className="dropdownBtn" onClick={e => 
                setIsActive(!isActive)}>
                    {selected ? selected : choose}
                    <img className='arrowDown' src="/images/arrowDown.svg" alt="#" />
                </div>
                {isActive && (
                        <div className="dropdownContent">
                        {options.map(option => (
                            <div onClick={e => {
                                setSelected(option)
                                setIsActive(false) }  
                            }
                            className="dropdownItem">
                                {option}
                            </div>
                        ))}
                    </div>     
                )}
            </div>
        </div>
    </>
  )
}

export default DropDown;
