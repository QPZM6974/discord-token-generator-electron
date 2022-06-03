let genStatus = false;
let requestToken = 0;

function loginFunc() {
    try {
        var input_nickname = document.getElementById('nickname');
        var input_client = document.getElementById('clcode');
        var nickValue = input_nickname.value;
        var clientValue = input_client.value;
        var config = {
            'msg': 'command',
            'cmd': 'login',
            'nickname': nickValue,
            'client': clientValue
        };
        ipcRenderer.send('msg', config);
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: '오류 발생',
            text: e,
        });
    };
};

ipcRendererOn('msg', (event, msg) => {
    if (msg['msg'] == 'fire') {
        Swal.fire({
            icon: msg['icon'],
            title: msg['title'],
            text: msg['text'],
        });
    };
});