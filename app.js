const http = new EasyHTTP;

// Get Post
/* http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err)); */

  // User Data
  const data = {
    name: 'Borja Perez',
    username: 'bperez',
    email: 'bperez@gmail.com'
  }

/*   //Create Post
  http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */
  // Update Put
/* http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err)); */
// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));