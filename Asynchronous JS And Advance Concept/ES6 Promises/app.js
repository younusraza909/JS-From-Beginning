const posts = [
  { title: "Post One", body: "This is post One" },
  { title: "Post Two", body: "This is post Two" }
];

function cratePost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

cratePost({ title: "Post Three", body: "This is post Three" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
