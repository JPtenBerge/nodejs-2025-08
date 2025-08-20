

// duck typing
// if it looks like a duck, talks like a duck, it's a good enough duck.


interface A {
    dingetje: string;
}
interface B {
    dingetje: string;
    getalletje: number;
}

let ietsAnders: B = { dingetje: 'hoi', getalletje: 14 };
let iets: A = ietsAnders;


