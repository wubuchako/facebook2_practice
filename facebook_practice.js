// Build facebook

var database = [
    {
        username:"andrei",
        password:"supersecret"
    },
    {
        username:"sally",
        password:"123"
    },
    {
        username:"ingred",
        password:"777"
    }
];

var newsFeed = [
    {
        username:"bob",
        timeline:"its fun to do JS"
    },
    {
        username:"sally",
        timeline: "so much fun"
    },
    {
        username: "ted",
        timeline:"much enjoy"
    }
];

// function signIn(username, password) {
//     if(username === database[0].username && 
//         password === database[0].password) {
//             console.log(newsFeed);
//         }else {
//             alert('Sorry wrong username and password');
//         }
// }
//この関数はandreiのみチェックしている。sally,123入力したら、sorryでる。
// すべての人間をチェックするにはどうしたらよいか？

function isUserValid (username, password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username &&
           database[i].password === password){
               return true;
           }
    }
    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)){
        console.log(newsFeed);
        }else {
    alert('sorry wrong username and password');
        }
}

var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what\'s your password?");

signIn(userNamePrompt, passwordPrompt);