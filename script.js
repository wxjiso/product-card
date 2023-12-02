class Product {
    imgLink;
    productName;
    productPrice;

    constructor(link,name,price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;
        const container = document.createElement("div");
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

new Product ("link","name",100);