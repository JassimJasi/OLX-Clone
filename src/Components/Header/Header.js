import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

function Header() {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv" >
        <div className="brandName" onClick={() => {
          history.push('/')
        }}>
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch" onClick={()=>{
          alert("Coming Soon")
        }}>
          <Search></Search>
          <input type="text" value={'Palakkad,Kerala'} />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction"  onClick={()=>{
          alert("Coming Soon")
        }}>
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user ? <div className="loginPage">

          <img className="chatLogo"
          onClick={()=>{
            alert("Coming Soon...")
          }} 
          src='https://pngfreepic.com/wp-content/uploads/2021/02/chat-18.png' alt='chatbox' ></img>
          <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avater" />
          <div>
          <span>
            <button className='dropBtnLogin' {...buttonProps}>{user.displayName}</button></span>
            <hr/>
          <div className={isOpen ? 'visible' : 'hidden'} role='menu'>
          {user && <span {...itemProps[0]} onClick={() => {
          firebase.auth().signOut();
          history.push('/login')
        }} >Logout</span>}
            
            <br></br>
            <a {...itemProps[1]} >Setting</a>
          </div>
         </div>
        </div> :
          <div className="loginPage">
            <h6 onClick={() => {
              history.push('/login')
            }}>Login</h6>
          </div>}
        {/* <div className="loginPage">

          <span>{user ? ` ${<FontAwesomeIcon icon="fa-solid fa-user" />, user.displayName}` : <h6 onClick={()=>{
            history.push('/login')
          }}>Login</h6>}</span>
          <hr />
        </div> */}
        {/* {user && <span onClick={() => {
          firebase.auth().signOut();
          history.push('/login')
        }} >Logout</span>} */}

        <div className="sellMenu" >
          <SellButton ></SellButton>
          <div className="sellMenuContent" onClick={() => {

            history.push('/create')
          }}>
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
