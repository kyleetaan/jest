function analyze(arr){
    let average = ave(arr);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;

    return {
        average,
        min,
        max,
        length
      }
}

function ave(arr){
    return (arr.reduce((prev, curr) => prev + curr, 0)) / arr.length
}



export default analyze