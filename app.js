import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // crear nuevo objeto
    const product = new Product(name, price, year);

    // crear ui
    const ui = new UI();

    // validacion de relleno
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Porfavor rellenar todos los campos", "danger");
    }

    // guardar 
    ui.addProduct(product);
    ui.showMessage("El producto ha sido añadido exitosamente", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});