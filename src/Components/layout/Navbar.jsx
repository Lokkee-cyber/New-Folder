import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import React from '../../assets/react.PNG';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Shop', path: '/shop' },
    { text: 'Academy', path: '/academy' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          component={Link} 
          to={item.path} 
          key={item.text}
          selected={location.pathname === item.path}
          onClick={handleDrawerToggle}
        >
          <ListItemText 
            primary={item.text} 
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'inherit',
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 100%)',
        color: '#152ac4ff',
        borderRadius: 3,
        px: 0,
        py: 0.5,
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 4 }, minHeight: 70 }}>
        {/* Brand with icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          
          <Box
            component="img"
            src={React}
            alt="React Logo"
            sx={{
              width: { xs: 130, md: 200 },
              height: { xs: 60, md: 80 },
            }}
          />
          
      </Box>


        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', position: 'relative' }}>
            {menuItems.map((item) => (
              <Box key={item.text} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ?  '#29aa56ff' : '#141452ff',
                    fontWeight: location.pathname === item.path ? 'bold' : 'bold',
                    background: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#141452ff',
                      backgroundColor: '#e0e0eeff',
                    },
                    '&:after': {
                      display: 'block',
                      position: 'absolute',
                      left: 16,
                      right: 16,
                      bottom: 4,
                      height: 2,
                      borderRadius: 1,
                      transition: 'background 0.3s',
                      bg: '#d3dcd6ff',
                      content: '""',
                      background: location.pathname === item.path ? '#59bf7dff' : 'transparent',
                    },
                    '&:hover:after': {
                      background: 'rgba(49, 51, 53, 0.08)',
                    },
                  }}
                >
                  {item.text}
                </Button>               
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;