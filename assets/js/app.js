//Variables
 const itemList = document.getElementById('item-list');


//Event Listeners.
eventListeners();

function eventListeners(){
    //Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //use delegation to remove item from list
    itemList.addEventListener('click', removeItem);
}



//Functions

function newTweet(e){
    //prevent default
    e.preventDefault();
    
    //read text area value
    const item = document.querySelector('#item').value;

    // create a remove button
    const removeBtn  = document.createElement('a');

    removeBtn.classList = 'remove-item';
    removeBtn.textContent = 'X';

     

    //create li element to display submitted items
    const li =  document.createElement('li');
    li.textContent = item; 

    

    //add remove button for every item displayed
    li.appendChild(removeBtn);

    //add item to display 
    itemList.appendChild(li);

    addItemToLocalStorage(item);

}

//remove item function
function removeItem(e){
    if(e.target.classList.contains('remove-item')){
        e.target.parentElement.remove();
    }
}


//function to add item to local storage
function addItemToLocalStorage(item){
    let items = getItemsFromStorage();
    

    //add the items to the arrat
    items.push(item);

    //convert items array to a string 
    localStorage.setItem('items', JSON.stringify(items));
    
}

//function to add items to local storage
function getItemsFromStorage(){
    let items;
    const itemsList = localStorage.getItem('items')

    //get the items. If null, return no items stored
    if(itemsList=== null){
        items = []
    }else{
        items = JSON.parse(itemsList);
    }
    //items from storage
    return items;
}
