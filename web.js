

eventListener();

//  event listeners
function eventListener() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();

    });

}



// load product items content form JSON file
function loadJSON() {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            let Items = '';
            let {headphones,furniture,mencloth,mobile} = data;
            let items = [headphones,furniture,mencloth,mobile],itemsIDs = ["phoneBlk","homeitems","mensc","mobilec"] 
            console.log(items)
            items.forEach((newItem,index) => {
                Items = '';
                newItem.forEach(product => {
                    Items += `
                   
                    <div class=" p-4 col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
                        <img src="${product.imgSrc}" class="card-img-top img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.category}</p>
                            <p class="card-text "><small class="text-muted ">$${product.price}</small></p>
                        </div>
                    </div>`;
                });
                document.getElementById(itemsIDs[index]).innerHTML = Items;
            })

        })
        .catch(error => {
            console.log(error)
            alert(`User live server or local server`);

            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}













