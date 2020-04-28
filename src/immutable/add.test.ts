import add from "./add";

describe("Testing add immutable function", () => {
    it("Works on an empty array", () => {
        expect(add([], 1)).toStrictEqual([1]);
    })

    it("Works on a normal array", () => {
        expect(add([ 1, 2, 4 ], 5)).toStrictEqual([ 1, 2, 4, 5]);
    })
})
