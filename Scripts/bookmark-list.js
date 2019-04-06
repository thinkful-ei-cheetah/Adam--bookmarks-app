'use strict';
/* global store, api */
const bookmarkList = (function(){

   
    function generateAddbookmark(item){
        const expandedClass = item.expanded ? 'bookmark-item__expanded': "";

        let bookmarkTitle = `<span class="bookmark-item'>${item.name}</span>`;
        let bookmarkRank =`<span class="bookmark-rating">${item.rank}</span>`;
        let bookmarkDesription = `
        <label for="bookmark-description">Description</label>
        <p name="bookmark-description" class="bookmark-desc">${item.description}</p>
        `;
    
       return  `
        <li class="js-bookmark-element" data-item-id="${item.id}">
            ${bookmarkTitle}
            <label for="bookmark-rating">Rating</label>
            ${bookmarkRank}
            <div class="disc-website ${expandedClass}">
                ${bookmarkDesription}
                <button class="website-link">Visit Website</button>
                    <div>
                        <button type="submit" class="js-save-changes">Save Changes</button>
                        <button class="js-cancel" >Cancel</button>
                    </div>
            </div>
            <button class="js-remove">Remove</button>
        </li>`;
    }

    function generateBookmarkAddString(bookmarks){
        const items = bookmarks.map((item) => generateAddbookmark(item));
        return items.join('');
    }
    function render() {
        let items = [...store.items];

        // if(store.expanded) {
        //     items = items.filter(item => !item.expanded);
        // }
        
        const bookmarksString = generateBookmarkAddString(items);
        console.log("Rendered");
        $('.js-bookmark-list').html(bookmarksString);
    }

    function handleAddNewBookmark(){
        $('#js-bookmark-list-form').on('click', '.js-submit-bookmark', event => {
            console.log('hitting button');
            event.preventDefault();
            const newBookmarkName = $('.js-bookmark-title-entry').val();
            const newBookmarkRank = $('js-rank-entry').val();
            const newBookmarkDesc = $('.js-description-entry').val();
            const newBookmarkURL = $('js-url-entry').val();
            api.createBookmark(newBookmarkName,newBookmarkRank, newBookmarkDesc, newBookmarkURL)
                .then(res => res.json())
                .then((items) => {
                    store.addBookmark(items);
                    console.log('test');
                    render();
                });
        });
    }

    function getItemIdFromElement(item){
        return $(item)
        .closest ('.js-item-element')
        .data('item-id');
    }


    function bindEventListeners(){
        handleAddNewBookmark();
    }
    return{
        
        bindEventListeners: bindEventListeners,
    };
}());