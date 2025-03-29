document.addEventListener("DOMContentLoaded", function () {
  const cartBtns = document.querySelectorAll(".cart-btn");

  cartBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const product = event.target.closest(".pro");
      const name = product.querySelector("h5").innerText;
      const price = product.querySelector("h4").innerText;
      const image = product.querySelector("img").src;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the item already exists in the cart
      const existingItem = cart.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to Cart!");
    });
  });
});
