var form =document.getElementById('addForm');
var iteamList =document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit',addIteam);
// Delete event
iteamList.addEventListener('click',removeIteam);
//Filter Event
filter.addEventListener('keyup',filterItems);
    //Add Iteam
function addIteam(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;

    // Create new li Element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // Add text Node With input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    var deleteBtn = document.createElement('button');

    //create button class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    iteamList.appendChild(li);
}
// Remove Iteam
function removeIteam(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            iteamList.removeChild(li);
        }
    }
}

// Filter Iteams
function filterItems(e){
// convert text to lowercase
var text=e.target.value.toLowerCase();
//Get li
var items = iteamList.getElementsByTagName('li');
//convert to an array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent; 
    if(itemName.toLowerCase().indexOf(text)!= -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';

     }
    
});
}


