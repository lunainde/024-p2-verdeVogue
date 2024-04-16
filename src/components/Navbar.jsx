//Navbar.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navbar({ setCategoryFilter }) {
  //pass filter
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCategoryFilter(newValue); //Update the filter
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="all" label="all" sx={{ textTransform: "none" }} />
        <Tab
          value="accessories"
          label="accessories"
          sx={{ textTransform: "none" }}
        />
        <Tab value="body" label="body" sx={{ textTransform: "none" }} />
        <Tab value="home" label="home" sx={{ textTransform: "none" }} />
        <Tab value="look" label="look" sx={{ textTransform: "none" }} />
        <Tab value="pets" label="pets" sx={{ textTransform: "none" }} />
      </Tabs>
    </Box>
  );
}
