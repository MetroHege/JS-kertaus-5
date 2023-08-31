'use strict';

async function postUser() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  try {
    const postResponse = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Aarnio',
        job: 'Poliisi',
      }),
    });
    const postData = await postResponse.json();
    console.log(postData);
  } catch (error) {
    console.log(error);
  }

  try {
    const putResponse = await fetch('https://reqres.in/api/unknown/23', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Ranta-aho',
        job: 'Liikemies',
      }),
    });
    const putData = await putResponse.json();
    console.log(putData);
  } catch (error) {
    console.log(error);
  }

  try {
    const deleteResponse = await fetch('https://reqres.in/api/unknown/23', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    const deleteData = await deleteResponse.json();
    console.log(deleteData);
  } catch (error) {
    console.log(error);
  }
}
postUser();
