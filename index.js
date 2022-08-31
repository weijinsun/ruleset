const axios = require("axios");
const github = require('@actions/github');
const core = require('@actions/core');



axios.get("https://raw.githubusercontent.com/weijinsun/code/master/qx/rewrite_ad.list" )
    .then(data=>{

        console.log(data)
    })

