const products = [];

module.exports = class Product{
    constructor(t){
        this.title = t
    }

    save(){
        //called on this instance
        products.push(this)
    }

    static fetchAll(){ 
        //static keyword allows calling function on class rather than on this instantiated object
        return this.products;
    }
}
