 
function fun1() {
    let fun2pro = new Promise(function (resolve, reject) {
        setTimeout(function(){
            let dataID= {'id': '123'}
                //let data = {}
            resolve(dataID);
                //reject('First API is not working');
        },3000);
    });
    return fun2pro;
}

function fun2(dataIDfun1){
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            let dataName = {'first_Name': 'Jayshree', 'last_Name': 'Bawankar'}
                //let  data = {}
            resolve({...dataIDfun1, ...dataName});
                //reject('Second API is not working');
        },4000);
    });
}

function fun3(dataIDNamefun2) {
    let fun4pro = new Promise(function (resolve, reject) {
        setTimeout(function(){
            let dataEmail = {'email':'jayshreebawankar27@gmail.com'}
                //let data = {}
            resolve({...dataIDNamefun2, ...dataEmail});
                //reject('Third API is not working');
        // },2000);/*  */
    });
    return fun4pro;
}

function fun4(dataIDNameEmailfun3) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            //console.log(typeof data_fun3.id);
            if(typeof dataIDNameEmailfun3.id != 'undefined') {
                let DataNumber = {'phone': '9172753699'}
                let Data = {...dataIDNameEmailfun3, ...DataNumber}
                resolve(Data);
            } else {
                reject('There is some error, kindly check all your code...');            }
        },1000);
    });
} 

async function action(){
   try{
    let fun1data = await fun1();
    console.log(fun1data);
    let fun2data = await fun2(fun1data);
    console.log(fun2data);
    console.log('Data of Function1 : ',fun2data);
   }
   catch(error){
       console.log(error);
   }
}

action();


fun1().then(function(data1){
    //console.log(data);
    fun2(data1).then(function(data2){
        //console.log(data2); 
        fun3(data2).then(function(data3){
            //console.log(data3); 
            fun4(data3).then(function(data4){
                console.log(data4); 
            }).catch(function(error){
                console.log(error); 
            }).finally(function(){
                console.log('This is a finally block');
            });
        });
    });        
});


