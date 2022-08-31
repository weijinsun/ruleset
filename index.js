const axios = require("axios");
const github = require('@actions/github');
const core = require('@actions/core');

const fs = require('fs')

axios.get("https://raw.githubusercontent.com/weijinsun/code/master/qx/rewrite_ad.list" )
    .then(data=>{
        console.log(data)
    })

fs.writeFile('/home/runner/work/_actions/weijinsun/forclash/main/test.txt', "dddddddddddddd", {flag: 'a'}, (err) => {
    if (err) {
        console.error(err)
    }
})

