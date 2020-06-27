// ****************** AJAX CONECTION ******************

// Async function
const downloadUsers = (quantity) =>
  new Promise((resolve, reject) => {
    // Api
    const api = `https://randomuser.me/api/?results=${quantity}&nat=us`;

    // Create request
    const xhr = new XMLHttpRequest();

    // Conection
    xhr.open("GET", api, true); // Params: method - url - async/sync

    // Accion on event
    xhr.onload = () => {
      if (xhr.status === 200) {
        return resolve(JSON.parse(xhr.responseText).results);
      }

      return reject(Error(xhr.statusText));
    };

    // Response
    xhr.send();
  });

// Test
downloadUsers(20)
  .then((results) => console.log(results))
  .catch((error) => console.error(`Hubo un error: ${error}`));
