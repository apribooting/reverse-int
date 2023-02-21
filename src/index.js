module.exports = function reverse (n) {
    let m = String(n);
    if (m[0] === "-") {
        a = m.substring(1);
        var splitArray = a.split("");
        var reverseArray = splitArray.reverse("");
        var end = reverseArray.join("");
        return end;  
    }
    else {
    
        var splitArray = m.split("");
        var reverseArray = splitArray.reverse("");
        var end = reverseArray.join("");
        return end; 
    }
}
