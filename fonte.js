fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(products => {
  let str = '';
  products.forEach(product => {
    str += `<div class="card col-md-4" style="width: 18rem;">
              <img src="${product.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">Preço: ${product.price}</p>  
                <p class="card-text">Categoria: ${product.category}</p>  
                <a href="detalhes.html?id=${product.id}" class="btn btn-primary">Mais detalhes</a>
              </div>
            </div>`;
  });
  document.getElementById('tela').innerHTML = str;
});