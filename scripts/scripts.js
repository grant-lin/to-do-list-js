console.log("loaded");

$('#to-do-form').submit( function () {
  event.preventDefault();
  var toDoInput = $('#todo-input-id');
  var toDoItem = toDoInput.val();
  // the following is just for performance
  console.log('submitting ' + toDoItem);
  toDoInput.val('');
  // using append to write html code, but this is not too nice
  // because it's kind of like "hard coding" and crossing streams vvvv
  // $('#to-do-list').append('<li><label for="checkbox-id"> <input type="checkbox" name="checkbox" id="checkbox-id" value="value"><span>'+ toDoItem +'</span></label></li>');

  // better approach?— clone element, find the span element inside it
  // then change the text to toDoItem
  var clonedItem = $('#template').clone().removeAttr('id');
  clonedItem.find('span').text(toDoItem);

  // append the clone element to the end of the list and change
  // display to normal. we also don't want the same id.
  clonedItem.appendTo('#to-do-list');

});

$('#clear-btn-id').click(function() {
    var allChekedItems = $('#to-do-list :checked');
    allChekedItems.each( function() {

    //find current label, which is the span inside parent 
    //of input AKA label tag. log "deleting ______"
    var currentLabelSpan =  $(this).parent().find('span');
    console.log('deleting ' + currentLabelSpan.text());

    //find the cloeset li element (CLOSEST means the PARENT that is the closest)
    $(this).closest('li').remove();
    });
  });

//for each checked item in to-do list


//for all checked item, remove them