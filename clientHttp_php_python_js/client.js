fetch("http://localhost:3000/labels")
    .then(response => response.json())
    .then(json => console.log(json));