$httpClient.get("https://baidu.com", function (error, response, data) {
    $done({
        title: "test",
        content: data,
        backgroundColor: "#663399",
        icon: "network",
    })
})
