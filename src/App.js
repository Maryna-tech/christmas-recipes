import './App.css';
import { useEffect, useState } from 'react';
import video from './festive.mp4';

import ChristmasRecipesComponents from './ChristmasRecipesComponents.js';

// 'https://api.edamam.com/api/recipes/v2?type=public&q=pork&app_id=b31af253&app_key=4ce1f29371af362cf56f84ecef18f008' 

function App(){
const MY_ID = 'b31af253';
const MY_KEY = '4ce1f29371af362cf56f84ecef18f008';

const [mySearch, setMySearch]= useState(" ");
const [myRecipes, setMyRecipes]= useState([]);
const [wordSubmitted, setWordSubmitted]= useState("Yuzu-Cured Pork Belly");

useEffect(()=> {
  const getRecipe = async()=>{
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  
    const data = await response.json();
//  console.log(data.hits)
    setMyRecipes(data.hits)
  }
  
  getRecipe()
  }, [wordSubmitted])

const myRecipeSearch=(e)=>{
  setMySearch(e.target.value)
}

const finalSearch=(e)=>{
  e.preventDefault()
  setWordSubmitted(mySearch)
}

return(
  <div className="App">
      
      <div className="App-header">
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>CHRISTMAS RECIPES</h1>
        <p>We all want some roast turkey! And pigs in blankets, brownie mince pies, chocolate log... the list goes on.<br/>
          Search for classic dishes with a seasonal twist & delicious treats, cook and get into the festive spirit with friends and family.</p>
      </div>
      
      <div className="App-main">
        <form onSubmit={finalSearch}>
          <input className="input-search" onChange={myRecipeSearch} value={mySearch}/>
          <button>Search</button>
        </form>
      </div>
      
        {myRecipes.map((element,index)=>(
          <ChristmasRecipesComponents key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
            type={element.recipe.mealType}/>
          ))}
          
      <div className="App-footer">
        <p className="footer-social">Follow on social <br/>
          <a href="https://www.facebook.com/marina.garaeva" target="blank"><img src="facebook_icon.png" width="30px" height="30px" alt="icon"/></a>
          <a href="https://www.linkedin.com/" target="blank"><img src="linkedin_icon.png" width="30px" height="30px" alt="icon"/></a>
          <a href="https://www.x.com/mgaraeva41" target="blank"><img src="x_icon.png" width="30px" height="30px" alt="icon"/></a>
          <a href="https://www.instagram.com/mgaraeva41" target="blank"><img src="instagram_icon.png" width="30px" height="30px" alt="icon"/></a>
        </p>
        <p className='footer'>Copyright © Maryna Garaieva 2024</p>
      </div> 
  </div>
  );
}

export default App;
