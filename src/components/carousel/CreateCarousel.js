import React from "react";
import { Paper } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import "./Carousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  // { width: 1450, itemsToShow: 5 },
  // { width: 1750, itemsToShow: 6 },
];
function Item(props) {
  return (
    <Paper>
      {props.item.Image && <img src={props.item.Image} alt={props.item.name} />}
    </Paper>
  );
}
function CreateCarousel(props) {
  const { items } = props;
  return (
    <Carousel itemsToShow={3} pagination={false} breakPoints={breakPoints}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CreateCarousel;
