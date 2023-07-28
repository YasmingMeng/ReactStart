import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
       { recipes.map(food => 
        <div key={food.id}>
            <h2>{food.name}</h2>
            <ul> 
              <h3> 原料 </h3>
               {food.ingredients.map(item => 
                        <li key={item}>
                            <p> {item} </p>
                        </li>
                  )
                }
            </ul>
         </div>
    )
         }
    </div>
  );
}


export function foodList({id, name, ingredients}) {
    return (
        <div key={id}>
            <h2>{name}</h2>
            <ul>
                {
                    ingredients.map(ingredient => 
                        <li>
                            {ingredient}
                        </li>)
                }
            </ul>
        </div>
    )
}