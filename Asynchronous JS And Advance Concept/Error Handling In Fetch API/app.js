// I did not mention this in the lecture but error handling with fetch is a bit different than with something like Axios or jQuery. If there is an http error, it will not fire off .catch automatically. You have to check the response and throw an error yourself. Here is an example....

// fetch("https://devcamper.io/api/v1/bootcamps/34343")
//   .then(res => res.json())
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.error);
//     }
//     return res;
//   })
//   .catch(err => console.log(err));

// I would suggest creating a separate function for error handling

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}

fetch("https://devcamper.io/api/v1/bootcamps/34343")
  .then(res => res.json())
  .then(handleErrors)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
