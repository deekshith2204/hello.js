Fetch("https://en.wikipedia.org/api/rest_v1/page/summary/XML")
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data.extract;
  })
  .catch(err => {
    document.getElementById("output").innerText = "Error loading data";
    console.error(err);
  });

console.log("Try programiz.pro");