$httpClient.get("https://api.my-ip.io/ip", function (error, response, data) {
    $done({
        title: "test",
        content: data,
        backgroundColor: "#663399",
        icon: "network",
    })
})
