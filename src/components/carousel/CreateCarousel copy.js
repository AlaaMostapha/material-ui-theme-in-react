import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
 let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
               Image: "https://source.unsplash.com/featured/?washingmachine"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
             Image: "https://source.unsplash.com/featured/?washingmachine"
        }
    ]
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.Image} alt={props.item.name}/>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

function CreateCarousel(props) {
    return (
         <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CreateCarousel
