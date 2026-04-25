import ProductCard from "./components/ProductCard/ProductCard";
import products from "./components/data/products";
function App() {
  return (
    <>
      <header className="header container">
        <a href="#" aria-label="Go to Home" className="logo">
          Coffee
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Story</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Space</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <button className="button button--primary" aria-label="Open cart">
                Cart (2)
              </button>
            </li>
            <li>
              <button
                className="button button--secondary"
                aria-label="Login in to"
              >
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* <header class="header-mobile-main container">
        <div class="header-mobile">
          <a class="header-mobile-logo" href="#">
            IMAJI <span>Coffee.</span>
          </a>
          <div class="header-mobile-btns">
            <button class="btn-card">
              <img src="img/shopping-basket.svg" alt="Shopping basket" />

              <span class="counter">1</span>
            </button>
            <button class="btn-menu-mobile">
              <img src="img/menu-right.png" alt="Menu" />
            </button>
          </div>
          <!-- <div class="mobile-menu">
        <nav>
          <ul class="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Story</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Space</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <button class="button button--secondary" aria-label="Login in to">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div> -->
        </div>
      </header> */}

      <main>
        <section className="container hero">
          <h1>Our Menu</h1>
          <p className="hero-description">
            IMAJI Coffee provides a variety of high quality coffee and drinks
            and flavors <br />
            that are suitable for you to support and cheer up your day. We also
            provide <br />
            coffee to accompany you at home along with the equipment.
          </p>

          <form action="#">
            <div className="form-wrapper">
              <div className="form-wrapper-search">
                <div className="form-wrapper-controls">
                  <label htmlFor="search">Search</label>
                  <button className="clear-search">Clear</button>
                </div>
                <div className="input-wrapper">
                  <input
                    aria-label="Search product"
                    type="text"
                    id="search"
                    placeholder="Enter keyword"
                  />
                </div>
              </div>
            </div>

            <div className="form-wrapper">
              <div className="form-wrapper-select">
                <div className="form-wrapper-controls">
                  <label htmlFor="price">Price</label>
                  <button className="clear-select">Clear</button>
                </div>
                <div className="select-wrapper">
                  <select aria-label="Select product by price" id="price">
                    <option value="Under $10">Under $10</option>
                    <option value="Under $20">Under $20</option>
                    <option value="Under $30">Under $30</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-wrapper">
              <div className="form-wrapper-select">
                <div className="form-wrapper-controls">
                  <label aria-label="Filter product" htmlFor="sort">
                    Sort by
                  </label>
                  <button className="clear-select">Clear</button>
                </div>
                <div className="select-wrapper">
                  <select id="sort">
                    <option value="Best selling">Best selling</option>
                    <option value="Newest">Newest</option>
                    <option value="Сheapest">Сheapest</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section>
          <div className="tabs">
            <div className="divider"></div>
            <div className="tabs-container">
              <button
                className="btn-tabs"
                id="coffe-tab"
                aria-label="Open a coffe and baverage tab"
              >
                COFFEE AND BAVERAGE
              </button>
              <button
                className="active-tabs btn-tabs"
                id="food-tab"
                aria-label="Open a food and snack tab"
              >
                FOOD AND SNACK
              </button>
              <button
                className="btn-tabs"
                id="coffe-at-home-tab"
                aria-label="Open a imaji coffe at home tab"
              >
                IMAJI COFFEE AT HOME
              </button>
            </div>
            <div className="divider"></div>
          </div>

          <ul className="grid container-products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                availability={product.availability}
                price={product.price}
                imgURL={product.imgURL}
              />
            ))}
          </ul>
          <button className="product_btn button--secondary">Load More</button>
        </section>
      </main>
      <footer>
        <div className="footer-main container">
          <div className="footer-content">
            <h2>Our Location</h2>
            <p>Jl. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p>
            <p>Customer Service +6282-2876-6862</p>
            <p>We Are Open from Sun - Mon 10 AM - 22 PM</p>
          </div>
          <div className="divider-footer"></div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">
                  <img src="img/links/spotify.svg" alt="spotify" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/links/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/links/tiktok.svg" alt="tiktok" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/links/youtube.svg" alt="youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/links/twitter.svg" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/links/telegram.svg" alt="telegram" />
                </a>
              </li>
            </ul>
            <div className="footer-app-links">
              <p>Delivery Order</p>
              <div className="footer-app-links-btns">
                <button className="footer-app-links-btn">
                  <img src="img/links/logo app store.png" alt="App Store" />
                </button>
                <button>
                  <img src="img/links/logo google play.svg" alt="Google Play" />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-additional-info">
            <p>© 2023 IMAJI COFFEE, All rights reserved</p>
            <p>
              Terms and Conditions<span>|</span>Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
