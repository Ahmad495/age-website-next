'use client';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DownloadIcon from '@mui/icons-material/Download';
import { logoURL } from '../../utils/staticData';
import NavbarDropDownMenu from './NavbarDropDownMenu';
import useScroll from '../../hooks/useScroll';

const pages = ['Apache AGE', 'Community', 'Contribution', 'Documentation', , 'Apache AGE GitHub'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedNavItem, setClickedNavItem] = useState('');
  const open = Boolean(anchorEl);
  const scrolling = useScroll();

  const handleClick = (event, page) => {
    setClickedNavItem(page);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        mt: 2,
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            px: { xs: 2, md: 10 },
            backdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: scrolling ? 'rgba(17, 25, 40, 0.35)' : 'rgba(17, 25, 40, 0.2)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.125)',
          }}
        >
          <Box component={'img'} src={logoURL} sx={{ width: { xs: '3em', md: '5em' } }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', lg: 'none' },
              justifyContent: 'end',
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                color='primary'
                aria-controls={open ? 'navbar-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={(event) => handleClick(event, page)}
                sx={{ my: 2, mx: 2, color: 'white', display: 'block', '&:hover': { backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)` } }}
              >
                {page}
              </Button>
            ))}
            <NavbarDropDownMenu open={open} anchorEl={anchorEl} handleClose={handleClose} clickedNavItem={clickedNavItem} />
          </Box>
          <Button
            variant='contained'
            endIcon={<DownloadIcon />}
            sx={{
              display: { xs: 'none', lg: 'flex' },
              backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
            }}
          >
            Download Age
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
