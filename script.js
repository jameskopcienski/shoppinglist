$(document).ready(function() {
  
  $('#itemList').sortable();
  
  $('#addItem').click(addNewItem);
  $("#newItem").keyup(function(event){
    if(event.keyCode == 13){
      $("#addItem").click();
    }
  });
  
  function addNewItem() {
    var itemText = $('#newItem').val();
    $('#itemList').append("<li><input class='listItem' type='checkbox'><span>" + itemText + "</span></li>");
  }
  
  $('#removeItem').click(removeCheckedItems);
  
  function removeCheckedItems() {
    $('.checked').remove();
  }
  
  $('#itemList').on('change', '.listItem', (function() {
    $(this).parent().toggleClass('checked');
  }));
  
});



/* -- This does not work on newly appended elements --
 * -- Need to use delegated event (.on) instead --
  $('.listItem').change(function() {
    $(this).parent().toggleClass('checked');
  });
*/