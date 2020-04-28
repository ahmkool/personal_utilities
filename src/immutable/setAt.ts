function setAt<T>(index: number, array: T[], newVal: T) {
    return array.map((val, i) => i === index ? newVal : val);
};

export default setAt;
