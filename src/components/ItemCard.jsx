//ItemCard.jsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import data from '../data.json';
import { useState } from "react";

export default function ItemCard({ id, name, price, category, img, brand }) {
  
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  
  return (
    <Card
      elevation={0}
      sx={{
        mt: 2,
        maxWidth: 345,
        border: "1px solid #eeeeee",
      }} >
      <img
        className="item-img"
        src={img}
        alt={`Image of ${name}`}      />
      <CardContent>
        <Typography variant="inherited" color="text.secondary">
          <h3>{name}</h3>
          <div>{category}</div>
          <div>by {brand}</div>
      
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          {isFavorited ? <FavoriteIcon color="primary" /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <h3 className="item-price">{price}</h3>
      </CardActions>
    </Card>
  );
}
