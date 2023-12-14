// Write your solution here!
let cats=["Milo","Otis", "Garfield"]
const destructivelyAppendCat=(name)=>{
return cats.push(name)
}
const destructivelyPrependCat=(name)=>{
return cats.unshift(name)
}
const destructivelyRemoveLastCat=()=>{
    return cats.pop()
}
const destructivelyRemoveFirstCat=()=>{
    return cats.shift()
}
const appendCat=(name)=>{
    let newArr= cats.concat(name)
    return newArr
}
const prependCat=(name)=>{
    let newArr=[name,...cats]
    return newArr
}
const removeLastCat=()=>{
    let newArr=[...cats]
    return newArr.slice(0,2)
    
}
console.log(removeLastCat())
const removeFirstCat=()=>{
    let newArr= [...cats]
    return newArr.slice(1,3)
}
console.log(removeFirstCat())