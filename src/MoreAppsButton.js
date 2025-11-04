import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ICS2Logo from './assets/images/cabie-ics2-logo.png';
import ENSLogo from './assets/images/CABIE-ENS.png';
import logo360Pay from './assets/images/360pay-grey-logo.png';

const MoreAppsButton = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (event) => {
    console.log('Clicked More Apps', event.currentTarget);
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleMenuItemClick = (option) => {
    handleClose();
    // Add logic for clicking on each app option here
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={openMenu ? 'apps-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
      >
        <AppsIcon sx={{ color: '#00395d', height: '40px', width: '40px' }} />
      </IconButton>
      <Menu
        id="apps-menu"
        anchorEl={openMenu}
        open={!!openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'apps-button',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #eee' }}>
          <img
            src={logo360Pay}
            alt="CABIE 360Pay Logo"
            style={{
              height: '35px',
              width: 'auto',
              marginTop: 22,
              marginBottom: 22,
              marginLeft: 10,
            }}
          />
        </div>
        <MenuItem onClick={() => handleMenuItemClick('test1')}>
          <img
            src={ICS2Logo}
            alt="CABIE ICS2 Logo"
            style={{
              height: '35px',
              width: 'auto',
              marginTop: 22,
              marginBottom: 22,
            }}
          />
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('test2')}>
          <img
            src={ENSLogo}
            alt="CABIE ENS Logo"
            style={{
              height: '47px',
              width: 'auto',
              marginTop: 22,
              marginBottom: 22,
            }}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreAppsButton;
