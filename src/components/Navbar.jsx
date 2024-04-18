//Navbar.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function Navbar({ setCategoryFilter }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("null");
  // toggle
  const [menuOpen, setMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCategoryFilter(newValue); //Update the filter
    navigate('/catalogue');   //Navigate to catalogue
    if (isMobile) setMenuOpen(false);  // Closes menu on selection
  };
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>

    {isMobile ? (
      <Box sx={{ p: 1 }}>
        <Typography onClick={handleToggle} sx={{ cursor: 'pointer', textAlign: 'center' }}>
            collection
        </Typography>
        {menuOpen && (
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'  }}>
        
              <Tabs sx={{ 
                '.MuiTabs-flexContainer': {flexDirection: 'column' },
                [theme.breakpoints.down('sm')]: {
                '.MuiTabs-indicator': { display: 'none'},
                '.Mui-selected': { borderBottom: '2px solid green'}}}}
              value={value} 
              onChange={handleChange} 
              orientation="vertical" 
              centered>
                <Tab value="all" label="all" sx={{ textTransform: "none" }} />
                <Tab value="accessories" label="accessories" sx={{ textTransform: "none"}}
                />
                <Tab value="body" label="body" sx={{ textTransform: "none" }} />
                <Tab value="home" label="home" sx={{ textTransform: "none" }} />
                <Tab value="look" label="look" sx={{ textTransform: "none" }} />
                <Tab value="pets" label="pets" sx={{ textTransform: "none" }} />
              </Tabs>
          </Box>
          )}
        </Box>
      ) : (

      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="all" label="all" sx={{ textTransform: "none" }} />
        <Tab
          value="accessories"
          label="accessories"
          sx={{ textTransform: "none", color: 'common.black'}}
        />
        <Tab value="body" label="body" sx={{ textTransform: "none" }} />
        <Tab value="home" label="home" sx={{ textTransform: "none" }} />
        <Tab value="look" label="look" sx={{ textTransform: "none" }} />
        <Tab value="pets" label="pets" sx={{ textTransform: "none" }} />
      </Tabs>
      )}
    </Box>
  );
}
