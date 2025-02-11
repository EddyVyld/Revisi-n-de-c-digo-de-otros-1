const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name'); // En el HTML aparecen atributos de clase los cuales llevan (.)
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.JSON // Se estaba imprimiendo data, pero no se habia declarado, ademas de que faltaba ponerse con JSON para que no esten los archivos en crudo.
  console.log(data);
  $n.textContent = '${data.name}'; // 
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);