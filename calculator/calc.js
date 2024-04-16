let add = document.getElementById("add")
add.addEventListener("click",function(){
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    let sum = Number(value1) + Number(value2)
    console.log(sum)
    let res = document.getElementById("result")
    res.textContent=`the added value id ${sum}`
    let mydiv2= document.getElementById("mydiv2")
    mydiv2.style.display="block"
    

})

let sub = document.getElementById("sub")
sub.addEventListener("click",function(){
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    let minus = Number(value1) - Number(value2)
    let res = document.getElementById("result")
    res.textContent=`the minused value is ${minus}`
    let mydiv2= document.getElementById("mydiv2")
    mydiv2.style.display="block"

})

let division = document.getElementById("division")
division.addEventListener("click",function(){
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    let div = Number(value1) / Number(value2)
    let res = document.getElementById("result")
    res.textContent=`the divided value is ${div}`
    let mydiv2= document.getElementById("mydiv2")
    mydiv2.style.display="block"
})

let reset= document.getElementById("resetbutton")
reset.addEventListener("click",function(){
    window.location.reload()
})