//T4: Uso avanzado de JavaScript en una aplicacion web / Ús avançat de JavaScript en una aplicació web
//U2: Peticiones con la API Fetch / Peticions amb l'API Fetch
/** 
  -- CASTELLANO -- 
  EJERCICIO 4.2.1 ENUNCIADO: 
  Realizar una llamada fetch a la página de Wikipedia usando el método GET y la sintaxis async/await en JavaScript desde una función a la que denominaremos [JSData]:
  Este código realizará una llamada fetch al API de Wikipedia para buscar información relacionada con JavaScript a la siguiente URL:
   https://en.wikipedia.org/w/api.php?action=opensearch&search=JavaScript&format=json&origin=*
  NOTA: La URL proporcionada utiliza el parámetro "origin=*" para evitar problemas de CORS.
  La función JSData() deberá utilizar la palabra clave async para indicar que es una función asincrónica, 
  Esta función debe hacer una llamada fetch a la URL especificada con fetch(url). Luego, esperará la respuesta de la llamada fetch utilizando la palabra clave await,
  y convertirá la respuesta a formato JSON utilizando el método response.json().
  Finalmente, esta función [JSData]  debe devolver los datos recibidos con la respuesta.

Ten en cuenta que, aunque la página de Wikipedia no tiene restricciones de CORS, otros sitios web pueden tener restricciones de seguridad y CORS que impidan que realices llamadas fetch desde tu código.
  	
  -- CATALÀ -- 
  EXERCICI 4.2.1 ENUNCIAT:
  Realitzar una trucada fetch a la pàgina de Wikipedia utilitzant el mètode GET i la sintaxi async/await en JavaScript des d'una funció que anomenarem [JSData]:
  Aquest codi realitzarà una trucada fetch a l'API de Viquipèdia per cercar informació relacionada amb JavaScript a la següent URL:
   https://en.wikipedia.org/w/api.php?action=opensearch&search=JavaScript&format=json&origin=*
  NOTA: La URL proporcionada utilitza el paràmetre "origin=*" per evitar problemes de CORS.
  La funció JSData() ha d'utilitzar la paraula clau async per indicar que és una funció asincrònica,
  Aquesta funció ha de fer una trucada fetch a la URL especificada amb fetch(url). Després, esperarà la resposta de la trucada fetch utilitzant la paraula clau await,
  i convertirà la resposta a format JSON utilitzant el mètode response.json(). 
  Finalment, aquesta funció [JSData] ha de retornar les dades rebudes amb la resposta.
*/

//Escribe aquí tu solución / escriviu aquí la vostra solució:
/**
 * Función JSData: Realiza una petición asíncrona a la API de Wikipedia
 * Corregida para que coincidan los nombres de las variables.
 */
async function JSData() {
    // URL de Wikipedia para buscar 'JavaScript'
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=JavaScript&format=json&origin=*";

    // 1. Hacemos la llamada (Guardamos el resultado en 'response')
    const response = await fetch(url);

    // 2. Convertimos a JSON (Usamos 'response', el mismo nombre de arriba)
    const datos = await response.json();

    // 3. Devolvemos los datos
    return datos;
}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export async function tests() {  
  return await JSData();
}
export function codeString() {  
  return JSData.toString();
}