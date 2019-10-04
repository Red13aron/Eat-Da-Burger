
console.log("I'm loaded!");
document.querySelectorAll(".eat-burger").forEach(element => {
  console.log("grrr");
  
  element.addEventListener("click", function (event) {

    event.preventDefault();
    console.log("Event Happened!");

    element.setAttribute("data-status", "true");
    const newDevouredState = {
      id: element.getAttribute("data-id"),
      devoured: 1
    }

    axios.put('/api/burgers', newDevouredState)
      .then(function (res) {
        console.log(res);
        window.location.reload();
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});