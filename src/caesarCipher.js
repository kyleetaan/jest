function cipher(str, key, cipher){
    let arr = alphaToNum(str);
    let result = "";

    if(cipher){
        for(let x in arr){
            if(typeof(arr[x]) === 'number'){
                let encrypt = (arr[x] + key) % 26;
                result = result.concat(valueToKey(encrypt));
            } else {
                result = result.concat(arr[x])
            }
            
        }
    } else {
        for(let x in arr){
            if(typeof(arr[x]) === 'number'){
                let check = (arr[x] - key) >= 0 ? (arr[x] - key) : (arr[x] - key) + 26;
                let decrypt = check % 26;
                result = result.concat(valueToKey(decrypt));
            } else {
                result = result.concat(arr[x])
            }
            
        }
    }

    return result
}

const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
}

function alphaToNum(str){
    let arr = str.split('');
    for(let i = 0; i < str.length; i++){
        if(alphabet.hasOwnProperty(arr[i])){
            arr[i] = alphabet[arr[i]]
        }
    }

    return arr;
}

function valueToKey(val){ //stackoverflow
    for (var key in alphabet) {
        if(alphabet[key] == val){
            return key;
        }
    }
 return false;
}


export default cipher