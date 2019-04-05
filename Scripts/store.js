'use strict';

const store = (function(){


    function addItem(item) {
        return this.items.push(item);
    }
    function removeItem(id){
        this.items = this.items.filter( item => item.id !==id); 
    }
    function seeRatingAbove(){
        
    }


    return{
        items: [],
        expanded: false,

        addItem,
        removeItem,
        seeRatingAbove

    };

}());