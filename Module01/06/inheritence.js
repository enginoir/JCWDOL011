class BangunDatar {
    luas;
    keliling;
    constructor() {
        this.luas;
        this.keliling;
    }
}
class Lingkaran extends BangunDatar {
    radian;
    constructor(radian) {
        super();
        this.radian = radian;
    }
    computeLuas() {
        this.luas = Math.PI * this.radian * this.radian;
    }
    computeKeliling() {
        this.keliling = 2 * Math.PI * this.radian;
    }
    set setRadian(radian) {
        this.radian = radian;
    }
    get getRadian() {
        return this.radian;
    }
}

class Persegi {}

let lingkaran1 = new Lingkaran(10);
lingkaran1.computeKeliling();
lingkaran1.computeLuas();

/*
lingkaran1.setRadian = 10;
*/
console.log(lingkaran1);
