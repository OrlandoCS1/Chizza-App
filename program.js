
function returnJSONObject(keys, ...values){
    //console.log(keys, values)

    if(keys.length === keys.length) {
        
        let arr = [];
        keys.forEach((k, index) => {
            let obj = {};
            obj.key = k;
            obj.value = values[index]
            arr.push(obj);
        });
        return arr;

        
    } else {
        console.log("The lenght of both arrays is different")
    }
}

const keys = [1,2,3];
const values = ["iphone", "ipad", "iMac"];

console.log(returnJSONObject(keys, "iphone", "ipad", "iMac"))

function arrObjectDecode(){
    let array = returnJSONObject(keys, "iphone", "ipad", "iMac");

    array.forEach(obj => {
        console.log(`This is key: ${obj.key} value: ${obj.value}`);
    });
}

arrObjectDecode();

