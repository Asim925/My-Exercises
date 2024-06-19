document
  .getElementById("wish-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const wish = document.getElementById("wish").value;
    const wishList = document.getElementById("wish-list");

    const newWish = document.createElement("li");
    newWish.textContent = `💌 ${wish} - ${name}`;
    wishList.appendChild(newWish);

    document.getElementById("wish-form").reset();
    alert("Thank you for your wish, " + name + "!");
  });
