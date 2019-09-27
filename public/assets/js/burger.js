
console.log("I'm loaded!");
document.querySelectorAll(".eat-burger").forEach(element => {
  console.log("grrr");
  
  element.addEventListener("click", function (event) {

    event.preventDefault();
    console.log("Event Happened!");

    element.setAttribute("data-status", "true");
    const newDevouredState = {
      id: element.data("id"),
      devoured: true
    }

    axios.post('/api/burgers', JSON.parse(newDevouredState))
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});