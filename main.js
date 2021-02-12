
console.log("console.log -> server running from main.js");

const getApi = () => {

    let result = fetch('http://grp3.360medics.com:8080/')
    console.log("call ? ->", result);
}
getApi();