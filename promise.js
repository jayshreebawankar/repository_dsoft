
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        setTimeout(function(){
            let data = {'name': 'Amit', 'email': 'amit@gmail.com', 'age': 34};
            resolve(data);
        },2000);
    } else {
        reject("There is no data");
    }
});

console.log(countValue);

countValue.then(function(res){
    console.log(res);
}).catch(function(error){
    console.log(error);
});