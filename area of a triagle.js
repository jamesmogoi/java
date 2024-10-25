function heronTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

\
console.log(heronTriangleArea(3, 4, 5));