const axios = require("axios");
const fs = require('fs')

axios.get("https://raw.githubusercontent.com/weijinsun/code/master/qx/rewrite_ad.list" )
    .then(data=>{
        console.log(data)
    })


fs.writeFile('test.txt', "dddddddddddddd", {flag: 'a'}, (err) => {
    if (err) {
        console.error(err)
    }
})

