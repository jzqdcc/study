/*------探测器------*/

!function(global){
    function DelectorBase(configs){
        if (!this instanceof DelectorBase){
            throw new Error('dont');
        }
        this.configs = configs;
        this.analyze();
    }

    DelectorBase.prototype.detect = function(){
        throw new Error('not');
    };

    DelectorBase.prototype.analyze = function(){
        console.log('analyzing...');
        this.data = '###data###';
    };

    function LinkDetector(links){
        if (!this instanceof LinkDetector){
            throw new Error('dont');
        }
        this.links = links;
        DelectorBase.apply(this,arguments);
    }

    function ContainerDetector(containers){
        if (!this instanceof ContainerDetector){
            throw new Error('dont');
        }
        this.containers = containers;
        DelectorBase.apply(this,arguments);
    }

    inherit(LinkDetector,DelectorBase);
    inherit(ContainerDetector,DelectorBase);

    LinkDetector.prototype.detect = function(){
        console.log(this.data);
        console.log(this.links);
    };

    ContainerDetector.prototype.detect = function(){
        console.log(this.data);
        console.log(this.containers);
    }

    Object.freeze(DelectorBase);
    Object.freeze(DelectorBase.prototype);
    Object.freeze(LinkDetector);
    Object.freeze(LinkDetector.prototype);
    Object.freeze(ContainerDetector);
    Object.freeze(ContainerDetector.prototype);

    Object.defineProperties(global,{
        LinkDetector:{value:LinkDetector},
        ContainerDetector:{value:ContainerDetector},
        DelectorBase:{value:DelectorBase}
    });

    function inherit(subClass,superClass){
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
    }
}(this);

var cd = new ContainerDetector('#a #b #c');
var ld = new LinkDetector('http://www.baidu.com');

cd.detect();
ld.detect();