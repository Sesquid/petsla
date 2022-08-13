function callAPI() {
    fetch("http://petsla-api.herokuapp.com/products/")
        .then(function (response) {
            return response.json();;
        })
        .then((data) => renderHTML(data));

}

function start() {
    callAPI(renderHTML);
}

function renderHTML(products) {
    let productList = products.map(function (product) {
        return `
        <div class="col l-3 m-4 c-6">
                    <div class="product-item">
                        <a href="product_${product.id} .html" class="product-item--link">
                            <div class="product-item--img" style="background-image: url(http://petsla-api.herokuapp.com${product.images});">
                            </div>
                        </a>
                        <div class="product-item--info">
                            <a href="product.html" class="product-item-name">${product.product_name}</a>
                            <div class="product-item--price">${product.price}</div>
                            <div class="product-item--func">
                                <div class="product-item--buy">
                                    <i class="bi bi-bag"></i>
                                    Buy Now
                                </div>
                                <div class="product-item--addToCart">
                                    <i class="bi bi-cart3"></i>
                                    <div class="product-item--addText">
                                        Add To Cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    })
    let displayProductElement = document.querySelector('.display-products');
    console.log(displayProductElement);
    displayProductElement.innerHTML = productList.join("");
}




start();