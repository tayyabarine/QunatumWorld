import React from "react";
import "../assets/css/sidebar.css";
import {
  Profile,
  DashboardIcon,
  MenuList,
  Logout,
  BottomImg,
} from "./sidebaritem";
import menuclose from "../assets/images/menuclose.png";
import bottomimg from "../assets/images/bottomimg.jpg";

import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { UpdateMobileMenu } from "../redux/Slices/MobileSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const MobileMenuOpenState = useSelector((state) => state.mobile.OpenMenu);
  const userDetail = useSelector((state) => state.nft.userDetail);

  const closeMobileMenu = (e) => {
    e.preventDefault();
    dispatch(UpdateMobileMenu(false));
  };
  return (
    <>
      <div
        className={`SideBarMain ${
          MobileMenuOpenState ? "mobile_menuSidebar" : ""
        }`}
      >
        <div className="d-block d-md-none mobile_closeIcon">
          <Image
            src={menuclose}
            alt="Image description"
            fluid={true}
            onClick={closeMobileMenu}
          />
        </div>

        <Profile name={userDetail.f_name} />
        <DashboardIcon />
        <MenuList />
        <Logout />
        <BottomImg />
        <center>
        <Image className="imgbottom"
            src={bottomimg}
            alt="Image description"
            fluid={true}
            onClick={closeMobileMenu}
          />
          </center>
      </div>
    </>
  );
};

export default Sidebar;
