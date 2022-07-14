// learnt from: https://www.digitalocean.com/community/tutorials/how-to-use-modules-in-typescript

export class StringArray {

    stringArrayFunction() {
    
    // this is array
    var cars: string[];
    cars = ['Proton', 'Perodua', 'Honda'];

    var index: number = 2;
    var value: string = cars[index];

    console.log('Value from array: ' + value);
    
    var getLength = function (b: string[]){
        return b.length;
    }

    var count = getLength(cars);
    console.log('Number of item from array: ' + count);
  }
}