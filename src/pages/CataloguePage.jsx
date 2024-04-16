//CataloguePage.jsx
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import theme from "../theme";
import Grid from "@mui/material/Grid";
import ItemCard from "../components/ItemCard";
import data from "../data.json";
import Header from "../components/Header";

export default function CataloguePage() {
  const [categoryFilter, setCategoryFilter] = React.useState("all"); //filter stating point

  return (
    <div>
      <Header setCategoryFilter={setCategoryFilter} />
      <h2 className="page-title">our collection</h2>
      <section>
        <Box sx={{ my: 6, flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data
              .filter(
                (item) =>
                  categoryFilter === "all" ||
                  item.item_category === categoryFilter
              )
              .map((item) => (
                <Grid item xs={2} sm={4} md={4} key={item.item_id}>
                  <ItemCard
                    img={item.item_image_url}
                    name={item.item_name}
                    price={item.item_price}
                    category={item.item_category}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </section>
    </div>
  );
}
