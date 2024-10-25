function quadraticEquation(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDiscriminant) / (2 * a);
        const x2 = (-b - sqrtDiscriminant) / (2 * a);
        return { x1, x2 };
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return { x };
    } else {
        return 'Complex roots';
    }
}

const result = quadraticEquation(1, -3, 2);
if (typeof result === 'string') {
    console.log(result);
} else {
    console.log(result); 
}
