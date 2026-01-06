//T4: Uso avanzado de JavaScript en una aplicacion web / Ús avançat de JavaScript en una aplicació web
//U2: Peticiones con la API Fetch / Peticions amb l'API Fetch
/** 
  -- CASTELLANO -- 
  EJERCICIO 4.2.2 ENUNCIADO: 
  Realizar una llamada fetch a a la API de GitHub para obtener información del usuario "octocat" usando el método GET y la sintaxis async/await en JavaScript 
  desde una función a la que denominaremos [fetchOctocat]:
  Este código realizará una llamada fetch al API de GitHub para buscar información relacionada con el usuario "octocat" la siguiente URL:
   https://api.github.com/users/octocat
  La función fetchOctocat() deberá utilizar la palabra clave async para indicar que es una función asincrónica, 
  Esta función debe hacer una llamada fetch a la URL especificada con fetch(url). Luego, esperará la respuesta de la llamada fetch utilizando la palabra clave await,
  y convertirá la respuesta a formato JSON utilizando el método response.json().
  Finalmente, esta función [fetchOctocat] debe devolver los datos recibidos con la respuesta.

  -- CATALÀ -- 
  EXERCICI 4.2.2 ENUNCIAT:
  Realitzar una trucada fetch a l'API de GitHub per obtenir informació de l'usuari "octocat" usant el mètode GET i la sintaxi async/await en JavaScript
  des d'una funció que anomenarem [fetchOctocat]:
  Aquest codi farà una trucada fetch a l'API de GitHub per cercar informació relacionada amb l'usuari "octocat" la següent URL:
   https://api.github.com/users/octocat
  La funció fetchOctocat() ha d'utilitzar la paraula clau async per indicar que és una funció asincrònica,
  Aquesta funció ha de fer una trucada fetch a la URL especificada amb fetch(url). Després, esperarà la resposta de la trucada fetch utilitzant la paraula clau await,
  i convertirà la resposta a format JSON utilitzant el mètode response.json().
  Finalment, aquesta funció [fetchOctocat] ha de tornar les dades rebudes amb la resposta.
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:

async function fetchOctocat() {

    const url = "https://api.github.com/users/octocat";

    const response = await fetch(url);

    const data = await response.json();

    return data;
}
/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export async function tests() {  
  return await fetchOctocat();
}
export function codeString() {  
  return fetchOctocat.toString();
}