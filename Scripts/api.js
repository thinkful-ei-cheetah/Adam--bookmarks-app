'use strict';

const api = (function(){
    const BASE_URL = "https://thinkful-list-api.herokuapp.com/adam";

    function getBookmark(){
        return fetch(`${BASE_URL}/items/`);
    }
    function deleteBookmark(id){
        return fetch(`${BASE_URL}/items/${id}`, {
            method:'DELETE',
        });
    }
    function createBookmark (name){
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
    function updateBookmark(id,updateData){
        const stringObj = JSON.stringify(updateData);
        return fetch(`${BASE_URL}/items/${id}`,{
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: stringObj
        });
    }


    return {
        getBookmark,
        deleteBookmark,
        createBookmark,
        updateBookmark
    };

}());