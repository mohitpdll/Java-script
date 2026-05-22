function print(string){
    console.log(string)
}

print('Start')
print('Printing something')
print('Finish')



//Async code

function print(string){
    setTimeout( () => {
        console.log(string)
    },Math.floor(Math.random() * 100))
}

print('Start')
print('Printing something')
print('Finish')




//Callback

function print(string,callback){
    setTimeout( () =>{
        console.log(string)
        callback()
    },Math.floor(Math.random() * 100))
}

print('Start' , () => {
    print('Printing Something' , () => {
        print('Finish', () => {}) 
    })
})
 


//Resolve

function print(string){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        },Math.floor(Math.random() * 100))
    })
}

print('Start')
    .then(() => print('Printing Message'))
    .then(() => print('Finish'))



//ASYNC AND AWAIT

function print(string){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log(string)
            resolve()
        },Math.floor(Math.random() * 100))
    })
}

async function printAll(){
    await print('Start')
    await print('Printing Something')
    await print('Finish')
}

printAll()