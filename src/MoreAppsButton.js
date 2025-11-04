import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton, Menu, MenuItem } from "@mui/material";
import ICS2Logo from "./assets/images/cabie-ics2-logo.png";
import ENSLogo from "./assets/images/CABIE-ENS.png";
import logo360Pay from "./assets/images/360pay-grey-logo.png";

const BUTTONS = [
  {
    logo: ICS2Logo,
    alt: "CABIE ICS2 Logo",
    style: {
      height: "35px",
      width: "auto",
      marginTop: 22,
      marginBottom: 22,
    },
    onClickURL: "https://ics2.cabie.uk/",
  },
  {
    logo: ENSLogo,
    alt: "CABIE ENS Logo",
    style: {
      height: "47px",
      width: "auto",
      marginTop: 22,
      marginBottom: 22,
    },
    onClickURL: "https://ensgb.cabie.uk/",
  },
];

const MoreAppsButton = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleMenuItemClick = (url) => {
    //open the URL in a new tab
    window.open(url, "_blank");
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={openMenu ? "apps-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
      >
        <AppsIcon sx={{ color: "#00395d", height: "40px", width: "40px" }} />
      </IconButton>
      <Menu
        id="apps-menu"
        anchorEl={openMenu}
        open={!!openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "apps-button",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #eee",
          }}
        >
          <img
            src={logo360Pay}
            alt="CABIE 360Pay Logo"
            style={{
              height: "35px",
              width: "auto",
              marginTop: 22,
              marginBottom: 22,
              marginLeft: 10,
            }}
          />
        </div>
        {BUTTONS.map((button, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(button.onClickURL)}
          >
            <img src={button.logo} alt={button.alt} style={button.style} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MoreAppsButton;
