function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const searchResults = products.filter(product => product.title.toLowerCase().includes(searchTerm));

            displayResults(searchResults);
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
}

function displayResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'Nenhum resultado encontrado.';
        searchResultsDiv.appendChild(noResultsMessage);
    } else {
        results.forEach(product => {

            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            image.style.marginTop = '15px';
            image.style.position = 'relative';
            image.style.left = '50%';
            image.style.transform = 'translateX(-50%)';
            image.style.maxWidth = '300px';
            productDiv.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = product.title;
            productDiv.appendChild(title);

            const price = document.createElement('p');
            price.textContent = 'Preço: $' + product.price;
            productDiv.appendChild(price);

            const category = document.createElement('p');
            category.textContent = 'Categoria: $' + product.category;
            productDiv.appendChild(category);

            const moreDetailsLink = document.createElement('a');
            moreDetailsLink.textContent = 'Mais detalhes';
            moreDetailsLink.href = `detalhes.html?id=${product.id}`;
            productDiv.appendChild(moreDetailsLink);
            searchResultsDiv.appendChild(productDiv);

            productDiv.classList.add('centered-container');
        });
    }
}
