'use strict';

const store = (function(){


    function addBookmark(item) {
        return this.items.push(item);
    }
    function removeItem(id){
        let index = this.items.findIndex(item => item.id !==id);
        this.splice(index, 1);
    }
   
    function setbookmarkName(name){
        this.bookmarkName = name;
    }
    function setBookmarkDescription (desc){
        this.description = desc;
    }
    
    
    return{
        items: [],
        expanded: false,
        bookmarkName: '',
        description: '',

        addBookmark,
        removeItem,
        setbookmarkName,
        setBookmarkDescription,
    };

}());