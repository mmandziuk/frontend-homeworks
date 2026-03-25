// import { products } from "./products.js";

const btns = document.querySelector(".tabs-container");
const productsContainer = document.querySelector(".container-products");
const search = document.querySelector("#search");
const price = document.querySelector("#price");
const sort = document.querySelector("#sort");

let inputValue;
let selectPrice;
let sortProducts;
let currentCategory = "beverages";

search.addEventListener("input", (event) => {
  inputValue = event.target.value;
  // renderProducts();
});

price.addEventListener("change", (event) => {
  selectPrice = +event.target.value.slice(-2);
  console.log(selectPrice);
  // renderProducts();
});

sort.addEventListener("change", (event) => {
  sortProducts = event.target.value;
  console.log(sortProducts);
  // renderProducts();
});

btns.addEventListener("click", (e) => {
  const allButtons = btns.querySelectorAll(".btn-tabs");
  allButtons.forEach((button) => {
    button.classList.remove("active-tabs");
  });

  currentCategory = e.target.dataset.category;
  e.target.classList.add("active-tabs");

  // renderProducts();
});
/*
const saleRibbon = product.originalPrice
  ? `<div class="product_ribbon_sale">SALE</div>`
  : "";

const originalPrice = product.originalPrice
  ? `<span><s>$${product.originalPrice}.00</s></span>`
  : "";

const createProductCart = (product) => {
    return `
    <li>
        <article aria-label="SEAFOOD LUNCH dish">
        ${saleRibbon}
            <a href="#"
            ><img
                class="product_image"
                src="${product.image}"
                alt="SEAFOOD LUNCH"
            /></a>
            <h4 class="product_title">${product.name}</h4>
            <p class="product_subtitle">${product.availability}</p>
            <p class="product_price">
            <p class="product_price">$${product.price}.00 ${originalPrice}</p>
            </p>
            <p class="product_discount">Get 20% Off in App</p>
        </article>
    </li>
    `;
};

const renderProducts = () => {
  const filteredProducts = products.filter((p) => {
    const matchCategory = currentCategory.includes(p.category);
    const matchName =
      !inputValue || p.name.toLowerCase().includes(inputValue.toLowerCase());
    const matchPrice = !selectPrice || p.price < selectPrice;
    return matchCategory && matchName && matchPrice;
  });

  if (sortProducts === "Cheapest") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortProducts === "Most expensive") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    filteredProducts.sort((a, b) => a.id - b.id);
  }

  const date = filteredProducts.map((p) => createProductCart(p)).join("");
  productsContainer.innerHTML = date;
};
*/
// renderProducts();

async function getProduct() {
  const response = await fetch(
    "https://69c38cd1b780a9ba03e71f52.mockapi.io/api/products/products"
  );

  const data = await response.json();
  console.log(data);
}

getProduct();
