const axios = require("axios");
console.log("dddddddddddddddddddddddddddddd ")

axios.get("https://raw.githubusercontent.com/weijinsun/code/master/qx/rewrite_ad.list" )
    .then(data=>{
        console.log(data)
    })

