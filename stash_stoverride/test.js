$httpClient.get("https://api.my-ip.io/ip", function (error, response, data) {
    const s="aaaaaaaa"
    $done({
        title: "test",
        content: '<a onclick="alert(${s})">stash toggle</a>',
        backgroundColor: "#663399",
        icon: "network",
    })
})
