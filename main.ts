// Q no 28
let Personage :number = 35;

if(Personage <2){
    console.log("Person is a baby");
}else if(Personage <10){
    console.log("Person is a child");
}else if(Personage < 13 ){
    console.log("Person is a kid");
}else if(Personage < 25 ){
    console.log("Person is teenager");
}else if(Personage < 40 ){
    console.log("Person is young");
}else{
    console.log("Person is an adult");   
}

// Q no 29
let favourite_fruits : string [] = ["Apple","strawberry", "Mango"];
 if (favourite_fruits.includes("Apple")){
    console.log("you really like Apples !");
 }

 if(favourite_fruits.includes("strawberry")){
    console.log("you really like strawberrys!");
 }

 if(favourite_fruits.includes("Mango")){
    console.log("you really like Mangos!");
 }

 if(favourite_fruits.includes("papaya")){
    console.log("you really like papayas !");
 } else{
    console.log("papayas are not in your favourite_fruits list");
 }

 if(favourite_fruits.includes("Oranges")){
    console.log("you really like Oranges !");
 }else{
    console.log("Oranges are not in your favourite_fruit list ");
 }

//  Q no 30
let usernames : string[] = ["Admin","Wakeel","Raheel","Jawwad","Fahad"]
for(let username of usernames){
    if(username === "Admin"){
        console.log("Hello Admin , would you like to see my status report");
    }else{
        console.log(`Hello ,${username} thanks you for loggin in again`);
    }
}