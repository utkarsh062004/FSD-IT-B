function register(){
    waitforfiveseconds()
    console.log("Register end");
}
function sendEmail(){
    waitforfiveseconds()
    console.log("Email sent end");
}
function login(){
    waitforfiveseconds()
    console.log("Login end");
}
function getUserData(){
    waitforfiveseconds()
    console.log("Got user data end");
}
function displayUserData(){
    waitforfiveseconds()
    console.log("User data displayed end");
}
function waitforfiveseconds(){
    const start=new Date().getTime();
    while (new Date().getTime() < start + 5000){
}
}
register();
sendEmail();
login();    
getUserData();
displayUserData();
console.log("All tasks done");