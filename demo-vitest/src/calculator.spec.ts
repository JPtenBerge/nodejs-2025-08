import { beforeEach, describe, expect, it, vi } from "vitest";
import { Calculator, MagicService } from "./calculator";

describe("Calculator", () => {
  let sut: Calculator;

  beforeEach(() => {
    let magicServiceMock: MagicService = {
      getMagicNumber: vi.fn().mockReturnValue(200),
    };

    let mockData = [];

    vi.mock("./some-service", () => { // gehoist
      return {
        getAll() {
          return mockData;
        },
      };
    });

    sut = new Calculator();
    sut.magicService = magicServiceMock;
  });

  it("adds numbers", () => {
    // Act
    sut.add(4);
    sut.add(8);
    sut.add(15);

    // Assert
    expect(sut.result).toBe(627);
  });

  describe("dividing numbers", () => {
    beforeEach(() => {
      sut.result = 9;
    });

    it("divides numbers", () => {
      // Act
      sut.divide(3);

      // Assert
      expect(sut.result).toBe(3);
    });

    it("does not divide by zero", () => {
      // Act
      let act = () => sut.divide(0);

      // Assert
      expect(act).toThrow();

      // expect(sut.result).toBe(3);
    });
  });

  //   [[4,8], [15, 16], [23,42]].forEach(pair => {
  //     it('add', () => {
  //         sut.add(pair[0])
  //         sut.add(pair[1])
  //     })
  //   })
});

// Jasmine
// Jest
