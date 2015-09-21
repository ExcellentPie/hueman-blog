var url = 'http://www.baidu.com';
var params = [
'id=934875',
'limit=20'
];
var req = createXhrObject();
req.onerror = function() {
// Error.
};
req.onreadystatechange = function() {
switch(req.readyState) {
    case 0:
               console.info("未初始化。 还没有调用 open 方法");break;
              case 1:
               console.info("open 方法已被调用，但 send 方法还没有被调用");break;
              case 2:
               console.info("send 已被调用。请求已经开始");break;
              case 3:
               console.info("交互中。服务器正在发送响应");break;
			   case 4:
               console.info("完成。响应发送完毕");break;
              default:
               console.info("error");
        }
		console.info("data:"+req.responseText);
};
req.open('POST', url, true);
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.setRequestHeader('Content-Length', params.length);
req.send(params.join('&'));
function createXhrObject() {
	var msxml_progid = [
		'MSXML2.XMLHTTP.6.0',
		'MSXML3.XMLHTTP',
		'Microsoft.XMLHTTP', // Doesn't support readyState 3.
		'MSXML2.XMLHTTP.3.0', // Doesn't support readyState 3.
	];
	var req;
	try {
		req = new XMLHttpRequest(); // Try the standard way first.
	}
	catch(e) {
		for (var i = 0, len = msxml_progid.length; i < len; ++i) {
			try {
				req = new ActiveXObject(msxml_progid[i]);
				break;
			}
			catch(e2) { }
		}
	}
	finally {
		return req;
	}
}