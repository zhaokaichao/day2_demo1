var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
* @Author: Marte
* @Date:   2020-03-13 15:09:35
* @Last Modified by:   Marte
* @Last Modified time: 2020-03-13 15:49:26
*/
//构造函数
function Xuan(obj) {
    Object.assign(this, {}, obj);
    this.init();
}
//原型函数
Xuan.prototype = {
    constructor: Xuan,
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var that = this;
        this.title.addEventListener('click', function (e) {
            var tar = e.target;
            if (tar.nodeName === 'LI') {
                //取消上一次高亮
                document.querySelector('.title .active') && document.querySelector('.title .active').classList.remove('active');
                //当前项高亮
                tar.classList.add('active');
                //隐藏内容
                document.querySelector('.content .active') && document.querySelector('.content .active').classList.remove('active');
                //当前下标下的内容高亮
                var ind = __spreadArrays(that.title.children).indexOf(tar);
                that.content.children[ind].classList.add('active');
            }
        });
    }
};
