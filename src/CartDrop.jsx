import * as React from 'react';
import './CartDrop.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ClassList = ["class 1", "class 2", "class 3"];

function returnMenuItem(item)
{
    return "<li className='menu-item'> <button onClick={handleMenuOne}> " + item + "</button> </li>";
}
function returnMenu()
{
    var buildSting = "";
    ClassList.forEach(element => {
        buildSting = buildSting + returnMenuItem(element);
    });
    return buildSting;
}

const DropDownMenu = returnMenu();

const CartDrop = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenuOne = () => {
      // go to class page
      setOpen(false);
    };
  
    const handleMenuTwo = () => {
      // go to class page
      setOpen(false);
    };
    return (
        <div className="dropdown">
          <div className="noSelect" onClick={handleOpen}><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ff8000" }}> </FontAwesomeIcon> Class Cart</div>
          {open ? (
            <ul className="menu" dangerouslySetInnerHTML={{__html: DropDownMenu}}>
            </ul>
          ) : null}
        </div>
      );
    };
    
    export default CartDrop;