//T4: Uso avanzado de JavaScript en una aplicacion web / Ús avançat de JavaScript en una aplicació web
//U4: Gestión de la asincronicidad / Gestió de l'asincronicitat
/** 
  -- CASTELLANO -- 
  EJERCICIO 4.4.1 ENUNCIADO: 
  En este ejercicio se nos pide realizar exactamente lo mismo que en el ejercicio 4.2.1 pero utilizando promesas. Es decir:
  Realizar una llamada fetch a la página de Wikipedia usando el método GET y el uso de bloques then() en JavaScript desde una función a la que denominaremos [JSDataUsingThen]:
  Este código realizará una llamada fetch al API de Wikipedia para buscar información relacionada con JavaScript a la siguiente URL:
   https://en.wikipedia.org/w/api.php?action=opensearch&search=JavaScript&format=json&origin=*
  NOTA: La URL proporcionada utiliza el parámetro "origin=*" para evitar problemas de CORS.
  La función JSDataUsingThen() deberá hacer una llamada fetch a la URL especificada con fetch(url). Luego, recogeremos la respuesta de la llamada fetch utilizando un bloque then(),
  y convertirá la respuesta a formato JSON utilizando el método response.json().
  Finalmente, mediante otro bloque then esta función [JSDataUsingThen]  debe devolver los datos recibidos con la respuesta.

Ten en cuenta que, aunque la página de Wikipedia no tiene restricciones de CORS, otros sitios web pueden tener restricciones de seguridad y CORS que impidan que realices llamadas fetch desde tu código.
  	
  -- CATALÀ -- 
  EXERCICI 4.4.1 ENUNCIAT:
  En aquest exercici se'ns demana fer exactament el mateix que a l'exercici 4.2.1 però utilitzant promeses. És a dir:
  Realitzar una trucada fetch a la pàgina de Wikipedia usant el mètode GET i l'ús de blocs then() en JavaScript des d'una funció que anomenarem [JSDataUsingThen]:
  Aquest codi realitzarà una trucada fetch a l'API de Viquipèdia per cercar informació relacionada amb JavaScript a la següent URL:
   https://en.wikipedia.org/w/api.php?action=opensearch&search=JavaScript&format=json&origin=*
  NOTA: L'URL proporcionat utilitza el paràmetre "origin=*" per evitar problemes de CORS.
  La funció JSDataUsingThen() haurà de fer una trucada fetch a la URL especificada amb fetch(url). Després recollirem la resposta de l'anomenada fetch utilitzant un bloc then(),
  i convertirà la resposta a format JSON utilitzant el mètode response.json().
  Finalment, mitjançant un altre bloc then aquesta funció [JSDataUsingThen] ha de tornar les dades rebudes amb la resposta.

Tingues en compte que, encara que la pàgina de Wikipedia no té restriccions de CORS, altres llocs web poden tenir restriccions de seguretat i CORS que impedeixin que facis trucades fetch des del teu codi.
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {  
  return JSDataUsingThen();
}
export function codeString() {  
  return JSDataUsingThen.toString();
}