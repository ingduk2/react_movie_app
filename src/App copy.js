import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  //console.log(props.fav);
  return <div>
    <h1>I love {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}></img>

  </div>;
}

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UWSVhd7ruaKRcwspRSnKrAHaEK%26pid%3DApi&f=1",
    rating : 5
},
{
  id : 2,
  name : "samgupsal",
  image : "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ffile.namu.moe%2Ffile%2F58fc0c4a323fef2482b19533e67def3f358763bd3bc18414d0ae202817a5fa1b&f=1&nofb=1",
  rating : 4.8
},
{
  id : 3, 
  name : "bibimbap",
  image : "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1",
  rating : 4.7
}];

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>ASDF</h1>
      {foodILike.map(dish => 
        <Food key={dish.id} 
          name={dish.name} 
            picture={dish.image} 
              rating={dish.rating}/>)}
    </div>

  );
}

export default App;
