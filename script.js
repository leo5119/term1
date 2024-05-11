document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('gpt-form');
    var responsePara = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var inputText = document.getElementById('input-text').value;

        // 此处替换为你的ChatGPT API的URL
        var apiUrl = 'https://api.chatgpt.com/extractTerms';

        // 构建请求体，这里假设API需要一个名为'text'的字段
        var data = {
            'text': inputText
        };

        // 使用fetch API发送POST请求到ChatGPT API
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 如果API需要认证，你可能还需要添加以下行：
                // 'Authorization': 'Bearer YOUR_API_TOKEN'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // 解析响应体为JSON
        .then(data => {
            // 假设API返回一个包含提取术语的数组
            var terms = data.terms;
            var termsList = terms.join(', '); // 将术语数组转换为字符串
            responsePara.textContent = "Extracted Terms: " + termsList; // 显示在页面上
        })
        .catch((error) => {
            console.error('Error:', error);
            responsePara.textContent = "An error occurred while fetching the data.";
        });
    });
});
