/*------探测器------*/                              //类式继承

!function(global){
    function DelectorBase(configs){                 //创建父类函数
        if (!this instanceof DelectorBase){
            throw new Error('dont');
        }
        this.configs = configs;                     //创建父类函数属性
        this.analyze();
    }

    DelectorBase.prototype.detect = function(){     //创建父类函数方法
        throw new Error('not');
    };

    DelectorBase.prototype.analyze = function(){    //创建父类函数方法
        console.log('analyzing...');
        this.data = '###data###';
    };

    function LinkDetector(links){                   //创建子类函数
        if (!this instanceof LinkDetector){
            throw new Error('dont');
        }
        this.links = links;                         //创建子类函数属性
        DelectorBase.apply(this,arguments);         //继承父类函数属性
    }

    function ContainerDetector(containers){         //创建子类函数
        if (!this instanceof ContainerDetector){
            throw new Error('dont');
        }
        this.containers = containers;               //创建子类函数属性
        DelectorBase.apply(this,arguments);         //继承父类函数属性
    }

    inherit(LinkDetector,DelectorBase);             //继承父类函数方法
    inherit(ContainerDetector,DelectorBase);        //继承父类函数方法

    LinkDetector.prototype.detect = function(){     //更改子类函数方法
        console.log(this.data);
        console.log(this.links);
    };

    ContainerDetector.prototype.detect = function(){//更改子类函数方法
        console.log(this.data);
        console.log(this.containers);
    };

    Object.freeze(DelectorBase);
    Object.freeze(DelectorBase.prototype);
    Object.freeze(LinkDetector);
    Object.freeze(LinkDetector.prototype);
    Object.freeze(ContainerDetector);
    Object.freeze(ContainerDetector.prototype);

    Object.defineProperties(global,{                //把函数设置为全局变量
        LinkDetector:{value:LinkDetector},
        ContainerDetector:{value:ContainerDetector},
        DelectorBase:{value:DelectorBase}
    });

    function inherit(subClass,superClass){          //继承的函数
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
    }
}(this);

var cd = new ContainerDetector('#a #b #c');
var ld = new LinkDetector('http://www.baidu.com');

cd.detect();
ld.detect();