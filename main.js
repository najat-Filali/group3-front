
console.log("console.log -> server running from main.js");

const getApi = () => {

    let result = fetch('http://localhost:3000/')
    console.log("call ? ->", result);
}
getApi();