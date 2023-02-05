var Total = document.getElementsByClassName("total");
console.log(total);

var plusBtn = document.getElementsByClassName("plus");
console.log(plusBtn);
for (let btn of plusBtn) {
  btn.addEventListener("click", function () {
    const itemName = btn.getAttribute("name");

    const price = document.getElementById(itemName + "_price").innerHTML;

    const quantity = document.getElementById(itemName + "_qty");
    quantity.innerHTML++;

    total.innerHTML = +total.innerHTML + +price;
  });
}

const likeBtn = document.getElementsByClassName("heart");
for (let heart of likeBtn) {
  heart.addEventListener("click", function () {
    const heartColor = heart.getAttribute("fill");
    if (heartColor === "grey") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "grey");
    }
  });
}
