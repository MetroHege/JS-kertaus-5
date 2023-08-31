'use strict';

async function postUser() {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John',
      job: 'Developer',
    }),
  });
  const data = await response.json();
  console.log(data);
}
postUser();
