//T4: Uso avanzado de JavaScript en una aplicacion web / Ús avançat de JavaScript en una aplicació web
//U4: Gestión de la asincronicidad / Gestió de l'asincronicitat
/** 
  -- CASTELLANO -- 
  EJERCICIO 4.4.2 ENUNCIADO: 
  En este ejercicio se nos pide realizar exactamente lo mismo que en el ejercicio 4.2.2 pero utilizando promesas. Es decir:
  Realizar una llamada fetch a a la API de GitHub para obtener información del usuario "octocat" usando el método GET y el uso de bloques then() en JavaScript 
  desde una función a la que denominaremos [fetchOctocatUsingThen]:
  Este código realizará una llamada fetch al API de GitHub para buscar información relacionada con el usuario "octocat" la siguiente URL:
   https://api.github.com/users/octocat
  La función fetchOctocatUsingThen() deberá hacer una llamada fetch a la URL especificada con fetch(url). Luego, recogeremos la respuesta de la llamada fetch utilizando un bloque then(),
  y convertirá la respuesta a formato JSON utilizando el método response.json().
  Finalmente, mediante otro bloque then esta función [fetchOctocatUsingThen]  debe devolver los datos recibidos con la respuesta.

  -- CATALÀ -- 
  EXERCICI 4.4.2 ENUNCIAT:
  En aquest exercici se'ns demana fer exactament el mateix que a l'exercici 4.2.2 però utilitzant promeses. És a dir:
  Realitzar una trucada fetch a l'API de GitHub per obtenir informació de l'usuari "octocat" usant el mètode GET i l'ús de blocs then() en JavaScript
  des d'una funció que anomenarem [fetchOctocatUsingThen]:
  Aquest codi farà una trucada fetch a l'API de GitHub per cercar informació relacionada amb l'usuari "octocat" la següent URL:
   https://api.github.com/users/octocat
  La funció fetchOctocatUsingThen() haurà de fer una trucada fetch a la URL especificada amb fetch(url). Després recollirem la resposta de l'anomenada fetch utilitzant un bloc then(),
  i convertirà la resposta a format JSON utilitzant el mètode response.json().
  Finalment, mitjançant un altre bloc then aquesta funció [fetchOctocatUsingThen] ha de tornar les dades rebudes amb la resposta.
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {  
  return fetchOctocatUsingThen();
}
export function codeString() {  
  return fetchOctocatUsingThen.toString();
}