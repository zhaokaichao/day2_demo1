/*
* @Author: Marte
* @Date:   2020-03-13 15:09:35
* @Last Modified by:   Marte
* @Last Modified time: 2020-03-13 15:49:26
*/
//构造函数
function Xuan(obj: any): void {
    (<any>Object).assign(this, {}, obj);
    this.init();
}

//原型函数
Xuan.prototype = {
    constructor:Xuan,
    init:function():void{ //初始化
        this.bindEvent();
    },
    bindEvent:function():void{ //绑定事件
        var that = this;
        this.title.addEventListener('click',function(e:any):void{
            var tar = e.target;
            if(tar.nodeName==='LI'){
                //取消上一次高亮
                document.querySelector('.title .active')&&document.querySelector('.title .active').classList.remove('active');
                //当前项高亮
                tar.classList.add('active');
                //隐藏内容
                document.querySelector('.content .active')&&document.querySelector('.content .active').classList.remove('active');
                //当前下标下的内容高亮
                var ind = [...that.title.children].indexOf(tar);
                that.content.children[ind].classList.add('active');
            }
        })

    }

}