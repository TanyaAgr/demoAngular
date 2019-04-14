angular
    .module('myApp',[])
        .controller('MyCont',MyCont);



function MyCont($scope){

    const sc=this;

    sc.food=['idli','dosa'];
    sc.addItem=addItem;
    sc.remItem=remItem;

    function addItem(x){
        sc.food.push(x);
    }

    function remItem(x){
        sc.food.splice(x,1);
    }
}