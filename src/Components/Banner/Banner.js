import React, { useState } from 'react';
import DynamicPosts from "../DynamicPosts/DynamicPosts";
import './Banner.css';
// import Arrow from '../../assets/Arrow';
// import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

function Banner() {
  let [category, setCategory] = useState();
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
          <select className='categoryBtn'
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null" className='CategoryHead'>ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Mobile Phones">Mobile Phone</option>
              <option value="For Sale:Houses & Apartments">For Sale:Houses & Apartments</option>
              <option value="Scooters">Scooters</option>
              <option value="Commercial & Other Vehicles">Commercial & Other Vehicles</option>
              <option value="For Rent:Houses & Apartments">For Rent:Houses & Apartments</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cars")}>Cars</span>
            <span onClick={()=>setCategory("Motorcycle")}>Motorcy...</span>
            <span onClick={()=>setCategory("Mobile Phones")}>Mobile Ph...</span>
            <span onClick={()=>setCategory("For Sale:Houses & Apartments")}>For Sale:Houses & Apart...</span>
            <span onClick={()=>setCategory("Scooters")}>Scoot...</span>
            <span onClick={()=>setCategory("Commercial & Other Vehicles")}>Commercial & Other Ve...</span>
            <span onClick={()=>setCategory("For Rent:Houses & Apartments")}>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
      { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
