import React from "react";
import Button from "@mui/material/Button";
import ItemCard from "../components/ItemCard";
import theme from "../theme";

export default function HomePage() {
  return (
    <div>
      <section>
        <div className="container-hero">
          <h1>
            <span>verde</span>Vogue
          </h1>
          <h3>Conscious | Classy & Cultivated</h3>
          <p>A curated selection of classy, conscious products.</p>

          <ItemCard />
          {/* <Button variant="text">Text</Button> */}
          <Button variant="contained">Contained</Button>
          {/* <Button variant="outlined">Outlined</Button>   */}

          {/* <button className='button-primary'>MAKE IT YOURS</button> */}
        </div>
      </section>
    </div>
  );
}
