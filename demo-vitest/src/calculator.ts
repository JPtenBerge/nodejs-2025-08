export class Calculator {
  magicService: MagicService;

  result = 0;

  add(x: number) {
    this.result += x + this.magicService.getMagicNumber();
  }

  divide(x: number) {
    if (x === 0) {
      //   throw "flauwekul";
      throw new Error("flauwekul");
    }

    this.result /= x;
  }
}

export class MagicService {
  getMagicNumber() {
    return 42;
  }
}
