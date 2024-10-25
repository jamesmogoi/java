function areaOfTrapezium(a, b, h) {
    return 0.5 * (a + b) * h;
}
let a = parseFloat(prompt("Enter the length of the first parallel side (a): "));
let b = parseFloat(prompt("Enter the length of the second parallel side (b): "));
let h = parseFloat(prompt("Enter the height (h): "));

let area = areaOfTrapezium(a, b, h);
console.log("The area of the trapezium is: " + area);