function removeAt<T>(index: number, array: T[]) {
    //TODO error handling
    const firstPart = array.slice(0, index);
    const secondPart = array.slice(index + 1, array.length);
    return [ ...firstPart, ...secondPart ];
};

export default removeAt;
