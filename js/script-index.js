$(document).ready( function(){

/*
* ETAPA 1: Esconder flecha en index y menu en recipe
*/
$().ready(function() {
  $('.js-back').hide();
  
});

/*
* ETAPA 2: completar
la función ​renderHighlightedRecipes ​ .
*/
 $(function() {
       
        $('p').text('NUEVAS RECETAS');
      });

/*
* ETAPA 3:  Agregar p (NUEVAS RECETAS) en class News
*/


$("#unDiv").html(valorDiv + "<b> ... Nuevo</b>");
console.log('Nuevas recetas ', index);



	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);




/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

});
