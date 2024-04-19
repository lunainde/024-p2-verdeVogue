//CataloguePage.jsx
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import theme from "../theme";
import Grid from "@mui/material/Grid";
import ItemCard from "../components/ItemCard";
import data from "../data.json";
import { useState } from "react";
import Sort from '../components/Sort';
import { Typography } from "@mui/material";
import MainTitle from '../components/MainTitle';

export default function CataloguePage({ categoryFilter, setCategoryFilter }) {

  const [sortedData, setSortedData] = useState(data.sort((a, b) => a.item_name.localeCompare(b.item_name))); // Default sort

  const handleSortChange = (sortOption) => {
    const sorted = [...sortedData].sort((a, b) => {
      //sorting
      if (sortOption === 'NAME_ASC') {
        return a.item_name.localeCompare(b.item_name);
      } else if (sortOption === 'NAME_DESC') {
        return b.item_name.localeCompare(a.item_name);
      } else if (sortOption === 'PRICE_ASC') {
        return parseFloat(a.item_price.replace('€', '')) - parseFloat(b.item_price.replace('€', ''));
      } else if (sortOption === 'PRICE_DESC') {
        return parseFloat(b.item_price.replace('€', '')) - parseFloat(a.item_price.replace('€', ''));
      } else if (sortOption === 'BRAND_ASC') {
        return a.item_brand.localeCompare(b.item_brand);
      }
      return 0;
    });
    setSortedData(sorted);
  };

  return (
  <div>
    <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: '1.5rem',  
          sm: '2.5rem',  
          md: '3rem',    
        },
        fontWeight: 700,                   
        fontFamily: '"PT Sans Caption", sans-serif', 
        opacity: 0.1,                      
        textAlign: 'center',    
        mt: 8,                                
        '& span': {
          color: 'primary.main',            
        }}}>

      <span>verde</span>COLLECTION
  </Typography>
    {/* <MainTitle><span>verde</span>COLLECTION</MainTitle> */}
      
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 2 }}>
        <Sort onSortChange={handleSortChange} />
    </Box>

      <section>
        <Box sx={{ my: 6, flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {sortedData
              .filter(
                (item) =>
                  categoryFilter === "all" ||
                  item.item_category === categoryFilter
              )
              .map((item) => (
                <Grid item xs={12} sm={4} md={4} key={item.item_id}>
                  <ItemCard
                    img={item.item_image_url}
                    name={item.item_name}
                    price={item.item_price}
                    category={item.item_category}
                    brand={item.item_brand}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </section>
    </div>
  );
}
