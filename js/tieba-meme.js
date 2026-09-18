// Loon 请求阶段直接返回空列表，不向服务器发送推荐表情请求。
console.log('贴吧推荐表情-2026.09.18: 本地返回空列表');

$done({
    response: {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store'
        },
        body: JSON.stringify({
            error_code: 0,
            data: {
                meme_list: [],
                is_show_ai_meme: 0,
                edit_ai_meme_schema: ''
            },
            ctime: '0',
            server_time: 0,
            time: Math.floor(Date.now() / 1000)
        })
    }
});
