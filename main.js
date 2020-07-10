
function myFunction(a,b){

let x= (b*5)+a;
return x
}

// function myFucntion(){
//     if(document.getElementById("size").value+(document.getElementById(age)))
//     document.getElementById("p").innerHTML="yo"
// }
myFunction(180,29)

function rechnen(){
    let person1height = document.getElementById("person1height").value
    let person2height = document.getElementById("person2height").value
    let person3height = document.getElementById("person3height").value


    let person1size = document.getElementById("person1size").value
    let person2size = document.getElementById("person2size").value
    let person3size = document.getElementById("person3size").value
    
    
    console.log (person1height, person1size)

  
    console.log (person2height, person2size)
    console.log (person3height, person3size)
   
if(myFunction(person1height,person1size)>myFunction(person2height,person2size)){
    document.getElementById("gewinnner").innerHTML="spieler1 hat gewonnen "
    
}else{
    document.getElementById("gewinnner").innerHTML="spieler2 hat gewonnen "

}
  
}

