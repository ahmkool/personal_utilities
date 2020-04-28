import removeAt from "./removeAt";

describe("Testing removeAt immutable function", () => {
    it("Works on a normal array", () => {
        expect(removeAt(2, [1, 2, 3, 4])).toStrictEqual([1, 2, 4]);
    })

    it("Works on beginning of array", () => {
        expect(removeAt(0, [1, 2, 3, 4])).toStrictEqual([2, 3, 4]);
    })

    it("Works at the end of array", () => {
        expect(removeAt(3, [1, 2, 3, 4])).toStrictEqual([1, 2, 3]);
    })
})
