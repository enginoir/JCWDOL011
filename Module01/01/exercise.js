/*
    1. Find Area of Rectangle
*/

var panjang, lebar, luas;
panjang = 10;
lebar = 5;

/* Calculate area of rectangle */
luas = panjang * lebar;
console.log(luas)

/*
    2. Find Perimeter of Rectangle
*/

var panjang, lebar, luas;
panjang = 10;
lebar = 5;
var perimeter = panjang + panjang + lebar + lebar;
/* Calculate Perimeter of rectangle */
luas = panjang * lebar;
console.log(perimeter)

/*
    3. diameter, circumference and area of circle
*/

var r, d, c, a;

// r = radius
// d = diameter
// c = circumference
// a = area

/* Calculation of diameter, circumference, and area */

r = 10;
d = 2 * 10;
c = 2 * 3.14 * 10;
a = 3.14 * (10 * 10);
console.log(r)
console.log(d)
console.log(c)
console.log(a)

/*
    5. find angles of triangle if two angles are given
*/

var p, q, r;

    // p, q, and r is all angles of the triangle

    p = 45;
    q = 85;

    // Compute third angle
    r = 180 - (p + q);
console.log(r)

/*
    6. get difference between dates in days.
*/

let date_1 = new Date('2023-07-20');
let now_date = new Date();

const day = (date_1, now_date) =>
{
    diff = now_date - date_1;
    TotalDays = Math.ceil(diff / (1000 * 3600 * 24));
    return TotalDays;
}
console.log("selisih " + day(now_date, date_1) +" hari")

/*
    7. convert days to years, months and days.
*/

let days = 400;
let year = 365;
let month = 30;

let years = Math.floor(days / year);
let months = Math.floor((days % year) / month);
let days2 = Math.floor((days % year) % months);

console.log(years, months, days2)