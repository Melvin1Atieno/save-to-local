//Variables
 const itemList = document.getElementById('item-list');


//Event Listeners.
eventListeners();

function eventListeners(){
    //Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}



//Functions

function newTweet(e){
    //prevent default
    e.preventDefault();
    
    //read text area value
    const item = document.querySelector('#item').value;

    // create a remove button
    const removeBtn = document.createElement('a');

    removeBtn.classList = 'remove-item';
    removeBtn.textContent = 'X';

     

    //create li element to display submitted items
    const li =  document.createElement('li');
    li.textContent = item; 

    

    //add remove button for every item displayed
    li.appendChild(removeBtn);

    //add item to display 
    itemList.appendChild(li);

}