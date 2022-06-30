export class Product {
    id : number;
    name:string
    model: string;
    price: string;
    imageURL: string;

    constructor(id = 0, name = '', model = '', price = '', imageURL = ''){
        this.id = id
        this.name = name
        this.model = model
        this.price = price
        this.imageURL = imageURL
    }
}

