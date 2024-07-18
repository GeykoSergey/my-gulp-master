const productsContainer = document.querySelector(".products__container");

getProducts();

async function getProducts() {
  const response = await fetch("../data/db.json");
  // console.log(response);
  const productsArray = await response.json();
  console.log(productsArray);
  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const { inStock, top, novelty, discount } = item;

    /*
    const renderingData = {
      productInStock: "not-available",
      isTop: "none",
      isNovelty: "none",
      isDiscount: "none",
    };

    if (inStock === true) {
      renderingData.productInStock = "in-stock";
    }

    if (top === true) {
      renderingData.isTop = "show";
    }

    if (novelty === true) {
      renderingData.isNovelty = "show";
    }

    if (discount === true) {
      renderingData.isDiscount = "show";
    }
    */

    const renderingData = {
      productInStock: inStock === true ? "in-stock" : "not-available",
      isTop: top === true ? "show" : "none",
      isNovelty: novelty === true ? "show" : "none",
      isDiscount: discount === true ? "show" : "none",
    };

    const productHTML = `					
      <div class="product__wrapper ${renderingData.productInStock}" data-id="${item.id}">   
        <div class="product">
          <div class="product__header">
            <div class="product__promo product-promo">
              <ul class="list-reset product-promo__list">
                <li
                  class="product-promo__item product-promo__item--top-sellers ${renderingData.isTop}"
                  title="Топ продажу"
                >
                  ТОП
                </li>
                <li class="product-promo__item product-promo__item--discount ${renderingData.isNovelty}">
                  -25%
                </li>
                <li class="product-promo__item product-promo__item--novelty ${renderingData.isDiscount}">
                  New
                </li>
              </ul>
            </div>
          </div>
          <a href="#" class="product__link">
            <div class="product__image">
              <img src="../img/wb-products/${item.imgSrc}" alt="" />
            </div>

            <h4 class="product__title">
              Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018
            </h4>
          </a>
          <div class="product__model-color-swatch model-color-swatch">
            <ul class="list-reset model-color-swatch__list">
              <li class="model-color-swatch__item model-color-swatch__item--red">
                &nbsp;
              </li>
              <li
                class="model-color-swatch__item model-color-swatch__item--black"
              >
                &nbsp;
              </li>
              <li
                class="model-color-swatch__item model-color-swatch__item--green"
              >
                &nbsp;
              </li>
            </ul>
          </div>
          <div class="product__actions">
            <div class="product__feedback">
              <div class="rating-mini">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
                <span></span>
              </div>
              <div class="product__reviews">
                <button class="btn-reset icon-lg reviews__btn"></button>
                <div class="reviews__count">27</div>
              </div>
            </div>
            <button class="btn-reset icon-lg compare__btn"></button>
            <button class="btn-reset icon-lg favorite__btn"></button>
          </div>

          <div class="product__footer">
            <div class="product__price">
              <span class="product__price product__price--old">10000 $</span>
              <span class="product__price product__price--new">${item.price} $</span>
              <span class="product__notyfi">Нет в наличии</span>
            </div>

            <button class="btn-reset btn product__btn">
              <img src="../img/e-commerce/icon/shopping_cart.svg" alt="" />
            </button>
          </div>
        </div>
        <p class="product__notyfi-text">Нет в наличии</p>
      </div>
    `;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}
