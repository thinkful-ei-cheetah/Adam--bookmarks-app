'use strict';

const api = (function(){
    const BASE_URL = "https://thinkful-list-api.herokuapp.com/adam";

    function getItems(){
        return fetch(`${BASE_URL}/items/`);
    }
    function deleteItem(id){
        return fetch(`${BASE_URL}/items/${id}`, {
            method:'DELETE',
        });
    }
    function createItem (name){
        const newItem =  {
            name,
        };
        const stringObj = JSON.stringify(newItem);

        return fetch(`${BASE_URL}/items/`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: stringObj
        });
    }


    
    return {
        getItems,
        deleteItem,
        createItem
    };

}());