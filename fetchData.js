const fetch = require('node-fetch');

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:8980/v2/accounts/H25ZW5XJXS24KKA3ETTCCJY7VV527KQNMGTKW5YK6H5Y2GEV22MWVP7LXM/assets", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
