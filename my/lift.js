
window.onload = function() {
	var o = {};
	
	(function(o,module) {
	if(module&&Object.prototype.toString.call(module) === "[object String]") {
		alert("给对象"+o+"添加模块"+module);
	}
	
	o["lift"] = function(src,target) {
		console.info(this);
		alert("从"+src+"到"+target);
	}
	
	for(i in o) {
		console.info(i+"--------->"+o[i])
	}
})(window,"lift");


function getPrototypeChain(object) {
    var protoChain = [];
    while (object = object.__proto__||Object.getPrototypeOf(object)) {
        protoChain.push(object);
    }
    protoChain.push(null);
    return protoChain;
}

console.info(Object.prototype.toString.call(console));
console.info(getPrototypeChain(console));
}