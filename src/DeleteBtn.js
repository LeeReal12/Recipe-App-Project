import React, { useState } from "react";

function DeleteBtn({recipes, setRecipes, index}) {
    function HandleDelete(index){
        let newRecipes = [...recipes]
          newRecipes.splice(index, 1);
          setRecipes(newRecipes);
      }
      return (<button name="delete" onClick={()=> HandleDelete(index)}>Delete</button>)
}

export default DeleteBtn;