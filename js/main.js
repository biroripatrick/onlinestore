const API = "http://fakestoreapi.com/products/";
const API_CATEGORIES = "http://fakestoreapi.com/products/categories";

/**
 *
 <div class="card product-item">
                    <img src="img/img4.jpg" alt="Product image">
                    <h4>20000 RWF</h4>
                    <p>WD 2TB Elements Portable External Hard Drive USB 3.0</p>
                    <span>-34%</span>
                </div> 
 *
 */

async function getData() {
    let data = await (await fetch(API)).json();

    return await data;
}

window.addEventListener('load', function () {
    document.getElementById("loader").classList.remove("hideorshow");
})
async function getcategories() {
    let data = await (await fetch(API_CATEGORIES)).json();

    return await data;
}
getcategories().then(function (categories) {
    categories.forEach(function (category) {

        const categoryItem = document.createElement("li");
        categoryItem.classList.add(...["list-group-item", "item-category"])
        categoryItem.innerHTML = category;
        document.getElementById("category-container").appendChild(categoryItem);



    })
})

getData().then((products) => {
    document.getElementById("loader").classList.add("hideorshow");
    products.forEach(function (product) {
        const productItem = document.createElement("div");
        productItem.classList.add(...["card", "product-item"])
        const productImg = document.createElement("img");
        productImg.src = product.image;

        const productTitle = document.createElement("p");
        productTitle.innerHTML = product.title;
        const productPrice = document.createElement("h4");
        productPrice.innerHTML = product.price;
        productPrice.innerHTML = "$" + product.price;

        const productDiscount = document.createElement("span");
        productDiscount.innerHTML = product.rating.rate;

        productItem.appendChild(productImg)
        productItem.appendChild(productPrice)
        productItem.appendChild(productTitle)
        productItem.appendChild(productDiscount)
        document.getElementById("products-container").appendChild(productItem)





        productItem.addEventListener("click", function () {
            location.href = "details.html";
            let productDetails = ` <div class="col-6 image-container">
            <img src="${product.image}" alt="App logo">
        </div>
        <div class="col-6">
            <div class="product-details-container">
                <h4>${product.title}</h4>
                <h2>${product.price}</h2>
                <p>${product.category}</p>
                <p>${product.description}</p>
                <div class="row">
                    <div class="col-6">
                        <button class="btn-buy">
                            <i class="far fa-money-bill"></i> Buy Now</button>
                    </div>
                    <div class="col-6">
                        <button class="btn-chart">
                            <i class="fas fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>`;

        documen.getElementById("details-container").innerHTML=productdetails
        })
    })

}).catch((error) = {

})