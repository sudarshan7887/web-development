console.log("This is modules!");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// module.exports = average;      //export single function

module.exports = {
    avg : average,
    name : "Sudarshan",
    surName : "Pansare"
}

// module.exports is a object