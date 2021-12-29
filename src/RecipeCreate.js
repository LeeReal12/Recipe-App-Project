import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  const [type, setType] = useState("Text")
  const initialFormState = {   
    name:"",
    cuisine:"",
    url:"",
    ingredients:"",
    preparation:""
  }

  

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes,formData]);
    setFormData({initialFormState});
  }

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                size="9"
                required=""
                value={formData.name}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                size="9"
                required=""
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                size="9"
                
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                size="9"
                required=""
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                size="9"
                required=""
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
