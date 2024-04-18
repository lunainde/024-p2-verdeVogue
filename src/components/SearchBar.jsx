//components/SeachBar

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import icono from '../assets/icono.svg'; 




const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      elevation={0}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
        
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <Divider/>
      <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
      <MenuItem onClick={handleMenuClose}>Purchases</MenuItem>
      <Divider/>
      <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      elevation={0}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <ShoppingBagOutlinedIcon />
        </IconButton>
        Cart
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        Profile
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          ".MuiSvgIcon-root": { color: "common.black" },
        }}
      >
        <Toolbar>
          {/* Left Section: Home and Search */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="small"
              color="inherit"
              aria-label="home"
              sx={{ color: "common.black", width: '48px' }} >
              <Link to="/" >
                <img src={icono} alt="Home" />
              </Link>
            </IconButton>
          </Box>

          {/* Spacer Element */}
          <Typography
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center',     
              fontFamily: 'PT Sans Caption, sans-serif',
              fontWeight: 'bold',       
              fontSize: '1.5rem',       
              color: 'black',           
              '& span': {
                color: 'green',         
          }}}>
            <span>verde</span>Vogue
          </Typography>

          {/* Right Section: Cart & User */}
          <Box sx={{ display: { xs: "none", md: "flex"  } }}>
            <IconButton
              size="large"
              aria-label="show 2 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="primary">
                <ShoppingBagOutlinedIcon fontSize="medium" />
              </Badge>
            </IconButton>

            <IconButton
              size="small"
              // edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleOutlinedIcon sx={{ width: '40px'}} />
            </IconButton>
          </Box>

          {/* Mobile Icons */}
          <IconButton
            size="small"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
