try{
    // If error occurs in this statement
    console.log(x);

    // the code below the error statement doesn't work
    //a
    //b
    //c
}
catch(err){ // err here is the variable in which the error gets stucked
// Define krta hai error ke sath aap kya krna chahte hain
//  retry logic , fallback mechanism , logging
//  CUSTOM Error
console.log("I am inside catch block")

    throw new Error("pehle declare kro")
// NOTE =>> You can create your Own error using 'throw' keyword

}
finally{
    // will always execute no matter error occurs or not
}