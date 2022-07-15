export class Shoe {

    // Not using private here since shoe is inherited by boot
    public type: string = '';
    public price: number = 0;
    public isOnSale: boolean = false;

    constructor(type: string, price: number, isOnSale: boolean) {
        this.type = type;
        this.price = price;
        this.isOnSale = isOnSale;
    }

    displayInfoShoe() {
        var infoString = 
        'Type: ' + this.type + 
        ' , Price: $ ' + this.price + 
        ' , On Sale: ' + this.isOnSale;

        return( infoString );
      }
}

export class Boot extends Shoe {

    private hasleather: boolean = false;

    constructor(type: string, price: number, isOnSale: boolean, hasleather: boolean) {
        super(type, price, isOnSale)
        this.hasleather = hasleather;
    }

    displayInfoBoot() {
        var infoString = 
        'Type: ' + this.type + 
        ' , Price: $ ' + this.price + 
        ' , On Sale: ' + this.isOnSale + 
        ' , hasleather : ' + this.hasleather;
        return( infoString );
      }
}