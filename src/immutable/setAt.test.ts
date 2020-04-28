import setAt from "./setAt.ts";

const array = [1, 2, 3, 4];

describe("testing setAt immutable function", () => {
    it("Works on a normal array", () => {
        expect(setAt(2, array, 5)).toStrictEqual([1, 2, 5, 4]);
    })

    it("Works on the beginning of an array", () => {
        expect(setAt(0, array, 5)).toStrictEqual([5, 2, 3, 4]);
    })
})
