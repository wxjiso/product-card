class Product {
    imgLink;
    productName;
    productPrice;

    constructor(link,name,price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;
        const container = document.createElement("div");
        container.className = "card";
        container.innerHTML = 
        `
        <img src = "${this.imgLink}">
        <h4>${this.productName}</h4>
        <h5>${this.productPrice}$</h5>
        <button>Купить</button>
        `
        document.body.append(container);
    }

}

new Product ("https://www.oma.by/upload/iblock/7a5/7a5b02cc06895ef075375fe58f70c782.jpg","колесо",100);