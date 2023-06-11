
// Extrair o ID do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fazer uma requisição GET à API para obter os detalhes do produto específico
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    const productDetails = document.getElementById('product-details');

    const productName = document.createElement('h2');
    productName.textContent = product.title;
    productDetails.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `Preço: $${product.price}`;
    productDetails.appendChild(productPrice);

    const productDescription = document.createElement('p');
    productDescription.textContent = `Descrição: ${product.description}`;
    productDetails.appendChild(productDescription);

    const productCategory = document.createElement('p');
    productCategory.textContent = `Categoria: ${product.category}`;
    productDetails.appendChild(productCategory);

    const productImage = document.createElement('img');
productImage.src = product.image;
productImage.style.marginTop = '15px';
productImage.style.position = 'relative';
productImage.style.left = '50%';
productImage.style.transform = 'translateX(-50%)';
productImage.style.maxWidth = '500px';
productDetails.appendChild(productImage);

    productDetails.classList.add('centered-container');
  });
