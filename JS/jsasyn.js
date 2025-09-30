// function register() {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Register end");
//         callback();
//     }, 2000);
// }}

// function sendEmail(callback) {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Email sent end");
//         callback();
//     }, 1000)
// }}

// function login(callback) {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Login end");
//         callback();
//     }, 2000);
// }}

// function getUserData(callback) {
//   return new Promise((resolve) => { 
//     setTimeout(() => {
//         console.log("Got user data end");
//         callback();
//     }, 3000);
// }
// }

// function displayUserData(callback) {
//     setTimeout(() => {
//         console.log("User data displayed end");
//         callback();
//     }, 4000);
// }

// // Chain the callbacks to ensure sequential execution
// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getUserData(() => {
//                 displayUserData(() => {
//                     console.log("All tasks done");
//                 });
//             });
//         });
//     });
// });
function register() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 2000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Email sent end");
            resolve(); // Don't pass misleading values
        }, 1000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end");
            reject("Login failed"); // Pass a meaningful error
        }, 2000);
    });
}

function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got user data end");
            resolve();
        }, 3000);
    });
}

function displayUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data displayed end");
            resolve();
        }, 4000);
    });
}

// Sequential execution with proper error handling
// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .then(() => {
//         console.log("All tasks done");
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     })
//     .finally(()=>{
//         console.log("Cleanup if needed")
//     });

// Using async/await for cleaner syntax
    async function f1(){
        try{
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    }
    catch(err){
        console.log("Error:", err);
    }}
    f1();
    console.log("All tasks done");