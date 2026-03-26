class Products {
  constructor(url) {
    this.url = url;
  }

  async getAll() {
    try {
      const response = await fetch(`${this.url}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }

  async getById(id) {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }

  async create(product) {
    try {
      const response = await fetch(`${this.url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async update(id, productUpdate) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productUpdate),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async delete(id) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}

const products = new Products(
  "https://69c38cd1b780a9ba03e71f52.mockapi.io/api/products/products"
);

products.getAll().then((data) => console.log(data));
