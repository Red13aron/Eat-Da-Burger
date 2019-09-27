document.querySelectorAll(".eat-burger").forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        element.setAttribute("data-status", "true");
        console.log("Event Happened!");
        const newDevouredState = {
            id : element.data("id"),
            devoured : true
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