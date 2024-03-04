// EXAMPLE 1 - Get the Status Code of an Axios HTTP Error

import axios from 'axios';

async function makeRequest() {
  try {
    const res = await axios.get(
      'https://example.com/does-not-exist',
    );
    const data = res.data;
    console.log(data);
  } catch (err) {
    if (err.response) {
      // ✅ log status code here
      console.log(err.response.status);
      console.log(err.message);
      console.log(err.response.headers); // 👉️ {... response headers here}
      console.log(err.response.data); // 👉️ {... response data here}
    }
  }
}

makeRequest();

// ------------------------------------------------------------------

// // EXAMPLE 2 - Same example but using Promise.then()

// import axios from 'axios';

// function makeRequest() {
//   axios
//     .get('https://example.com/some-path')
//     .then(res => {
//       const data = res.data;
//       console.log(data);
//     })
//     .catch(err => {
//       if (err.response) {
//         console.log(err.response.status);
//         console.log(err.response.statusText);
//         console.log(err.message);
//         console.log(err.response.headers); // 👉️ {... response headers here}
//         console.log(err.response.data); // 👉️ {... response data here}
//       }
//     });
// }

// makeRequest();

// ------------------------------------------------------------------

// // EXAMPLE 3 - A complete example of handling errors in `axios`

// import axios from 'axios';

// async function makeRequest() {
//   try {
//     const res = await axios.get(
//       'https://example.com/does-not-exist',
//     );
//     const data = res.data;
//     console.log(data);
//   } catch (err) {
//     if (err.response) {
//       // 👇️ log status code here
//       console.log(err.response.status);
//       console.log(err.response.statusText);
//       console.log(err.message);
//       console.log(err.response.headers); // 👉️ {... response headers here}
//       console.log(err.response.data); // 👉️ {... response data here}
//     } else if (error.request) {
//       // 👇️ Request was made, but no response was received
//       console.log(error.request);
//     } else {
//       // 👇️ An error was thrown when setting up the request
//       console.log(error.message);
//     }
//   }
// }

// makeRequest();
