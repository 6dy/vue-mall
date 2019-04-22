
/**
 * @desc:去除数组指定的元素，得到改变后的数组
 */
const removeByValue = (arr, val) => {
    let index = arr.indexOf(val);
    arr.splice(index, 1);
    return arr;
};
/**
 * @desc:金额格式化
 */
const formatPrice = (number) => {
    return parseFloat(number).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
};

/**
 * @desc:数组按对象的某个属性进行升序排序，降序则相反
 */
const sortByUp = (arr, propertyName) => {
    return arr.sort((a, b) => {
        if (a.hasOwnProperty(propertyName) && b.hasOwnProperty(propertyName)) {
            if (typeof a[propertyName] === "number" && typeof b[propertyName] === "number") {
                return a[propertyName] - b[propertyName];
            } else {
                return a[propertyName].localeCompare(b[propertyName]);
            }
        }
    })
};
export {removeByValue, formatPrice, sortByUp};

