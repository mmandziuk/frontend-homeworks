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

async function getProduct() {
  const response = await fetch(
    "https://69c38cd1b780a9ba03e71f52.mockapi.io/api/products/products"
  );
  const data = await response.json();
  return data;
}

getProduct().then((res) => {
  renderProducts(res);

  search.addEventListener("input", (event) => {
    inputValue = event.target.value;
    renderProducts(res);
  });

  price.addEventListener("change", (event) => {
    selectPrice = +event.target.value.slice(-2);
    renderProducts(res);
  });

  sort.addEventListener("change", (event) => {
    sortProducts = event.target.value;
    console.log(sortProducts);
    renderProducts(res);
  });

  btns.addEventListener("click", (e) => {
    const allButtons = btns.querySelectorAll(".btn-tabs");
    allButtons.forEach((button) => {
      button.classList.remove("active-tabs");
    });

    currentCategory = e.target.dataset.category;
    e.target.classList.add("active-tabs");

    renderProducts(res);
  });
});

const createProductCart = (product) => {
  const saleRibbon = product.originalPrice
    ? `<div class="product_ribbon_sale">SALE</div>`
    : "";

  const originalPrice = product.originalPrice
    ? `<span><s>$${product.originalPrice}.00</s></span>`
    : "";

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

const renderProducts = (products) => {
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
