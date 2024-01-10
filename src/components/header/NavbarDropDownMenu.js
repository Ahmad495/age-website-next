'use client';
import React from 'react';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';

const menuContent = [
  {
    navItem: 'Apache AGE',
    menuItems: [
      { value: 'Overview', icon: 'lucide:view' },
      { value: 'Team', icon: 'fluent:people-team-20-filled' },
      { value: 'Release Notes', icon: 'mdi:notes' },
    ],
  },
  {
    navItem: 'Community',
    menuItems: [
      { value: 'Join AGE Community', icon: 'fluent:people-team-20-filled' },
      { value: 'AGE Discord', icon: 'ic:baseline-discord' },
      { value: 'AGE Forum', icon: 'ic:round-forum' },
      { value: 'AGE Project', icon: 'fa-solid:project-diagram' },
      { value: 'AGE Viewer Project', icon: 'fa-solid:project-diagram' },
    ],
  },
  {
    navItem: 'Contribution',
    menuItems: [
      { value: 'Ways To Contribute', icon: 'fluent:merge-24-filled' },
      { value: 'Code Convention', icon: 'ph:code-bold' },
      { value: 'Volunteer Guideline', icon: 'fluent:style-guide-24-filled' },
      { value: 'Committer Requirements', icon: 'pajamas:requirements' },
      { value: 'Release Process', icon: 'fluent-mdl2:processing' },
    ],
  },
  {
    navItem: 'Documentation',
    menuItems: [
      { value: 'Introduction', icon: 'bxs:user-voice' },
      { value: 'Clauses', icon: 'mdi:sql-inner-join' },
      { value: 'Functions', icon: 'material-symbols:functions' },
      { value: 'AGE Beyond Cypher', icon: 'mdi:sql-query' },
      { value: 'Contributing', icon: 'mdi:github' },
    ],
  },
  {
    navItem: 'Apache AGE GitHub',
    menuItems: [
      { value: 'AGE', icon: 'mdi:github' },
      { value: 'AGE Viewer', icon: 'mdi:github' },
    ],
  },
];

export default function NavbarDropDownMenu({ anchorEl, open, handleClose, clickedNavItem }) {
  const menuItemsToDisplay = menuContent.filter((item) => item?.navItem === clickedNavItem);

  return (
    <Menu
      anchorEl={anchorEl}
      id='navbar-menu'
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.3)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.125)',
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
        },
      }}
      transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      {menuItemsToDisplay[0]?.menuItems?.map((item, index) => (
        <MenuItem
          key={index}
          sx={{
            color: 'white',
            '&:hover': {
              backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
            },
          }}
        >
          <ListItemIcon>
            <Icon icon={item?.icon} color='white' />
          </ListItemIcon>
          {item?.value}
        </MenuItem>
      ))}
    </Menu>
  );
}
