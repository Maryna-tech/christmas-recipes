function ChristmasRecipesComponents({label, image, calories, ingredients, type}){
    return(<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
        <img src={image} alt="meal" width="350px"/>
        </div>
        <div className="container">
            <ul className="container-list">{ingredients.map((ingredient,index)=>(
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
            </div>
        
        <div className="container">
            <p className="calories">{calories.toFixed()} calories</p>
        </div>
        <div className="container">
            <p className="type">{type}</p>
        </div>

        </div>)
}

export default ChristmasRecipesComponents;