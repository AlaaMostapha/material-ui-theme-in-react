import React from "react";
import CreateCarousel from "../../components/carousel/CreateCarousel";
import Data from "../data/Data";
function Show(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "carousel":
      return <CreateCarousel {...rest} />;
    case "data":
      return <Data {...rest} />;
    default:
      return null;
  }
}

export default Show;
