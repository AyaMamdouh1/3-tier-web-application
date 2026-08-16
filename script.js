alert("JavaScript works!");
const productsContainer =
    document.getElementById("products");


function loadProducts(type) {

    fetch(`products.php?type=${type}`)

        .then(response => response.json())

        .then(products => {

            productsContainer.innerHTML = "";


            products.forEach(product => {

                productsContainer.innerHTML += `

                    <div class="col-md-4 mb-3">

                        <div class="card shadow p-3">

                            <div class="card-body">

                                <h5 class="card-title">
                                    ${product.name}
                                </h5>

                                <p class="card-text">
                                    Category:
                                    ${product.type}
                                </p>

                                <p class="card-text">
                                    Price:
                                    ${product.price} EGP
                                </p>

                            </div>

                        </div>

                    </div>

                `;

            });

        })

        .catch(error => {

            console.error("Error:", error);

            productsContainer.innerHTML = `
                <p class="text-danger">
                    Error loading products
                </p>
            `;

        });

}
