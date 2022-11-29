const offset = 0
const limit = 10
const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const form = new FormData();

const options = {
  method: 'GET',
  headers: {'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'}
};

options.body = form;

fetch(url, options)
  .then(response => {console.log()})
  .then(response => console.log(response))
  .catch(err => console.error(err));
  