import { products } from "./products.js";

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
  renderProducts();
});

price.addEventListener("change", (event) => {
  selectPrice = +event.target.value.slice(-2);
  console.log(selectPrice);
  renderProducts();
});

sort.addEventListener("change", (event) => {
  sortProducts = event.target.value;
  console.log(sortProducts);
  renderProducts();
});

btns.addEventListener("click", (e) => {
  const allButtons = btns.querySelectorAll(".btn-tabs");
  allButtons.forEach((button) => {
    button.classList.remove("active-tabs");
  });

  currentCategory = e.target.dataset.category;
  e.target.classList.add("active-tabs");

  renderProducts();
});

const createProductCart = (product) => {
  if (product.originalPrice) {
    return `
    <li>
        <article aria-label="SEAFOOD LUNCH dish">
            <div class="product_ribbon_sale">SALE</div>
            <a href="#"
            ><img
                class="product_image"
                src="${product.image}"
                alt="SEAFOOD LUNCH"
            /></a>
            <h4 class="product_title">${product.name}</h4>
            <p class="product_subtitle">${product.availability}</p>
            <p class="product_price">
            $${product.price}.00 <span><s>$${product.originalPrice}.00</s></span>
            </p>
            <p class="product_discount">Get 20% Off in App</p>
        </article>
    </li>
    `;
  }
  return `
    <li>
        <article aria-label="SEAFOOD LUNCH dish">
            <a href="#"
            ><img
                class="product_image"
                src="${product.image}"
                alt="SEAFOOD LUNCH"
            /></a>
            <h4 class="product_title">${product.name}</h4>
            <p class="product_subtitle">${product.availability}</p>
            <p class="product_price"> $${product.price}.00</p>
            <p class="product_discount">Get 20% Off in App</p>
        </article>
    </li>
    `;
};

const renderProducts = () => {
  const filteredProducts = products.filter((p) => {
    if (inputValue && !selectPrice) {
      return (
        p.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        currentCategory.includes(p.category)
      );
    }

    if (selectPrice && !inputValue) {
      return p.price < selectPrice && currentCategory.includes(p.category);
    }

    if (inputValue && selectPrice) {
      return (
        p.price < selectPrice &&
        p.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        currentCategory.includes(p.category)
      );
    }

    return currentCategory.includes(p.category);
  });

  sortProducts == "Сheapest"
    ? filteredProducts.sort((a, b) => {
        return a.price - b.price;
      })
    : "Most expensive"
    ? filteredProducts.sort((a, b) => {
        return b.price - a.price;
      })
    : filteredProducts.sort((a, b) => {
        return a.id - b.id;
      });

  const date = filteredProducts.map((p) => createProductCart(p)).join("");
  productsContainer.innerHTML = date;
};

renderProducts();
