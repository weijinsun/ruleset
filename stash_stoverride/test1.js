$httpClient.get("https://api.my-ip.io/ip", function (error, response, data) {
    $done({
        title: "test",
        content: '<a onclick="alert(123)">stash toggle</a>',
        backgroundColor: "#663399",
        icon: "network",
    })
})
