$(document).ready(function() {
  
  $('#addItem').click(addNewItem);
  $("#newItem").keyup(function(event){
    if(event.keyCode == 13){
      $("#addItem").click();
    }
  });
  
  function addNewItem() {
    var itemText = $('#newItem').val();
    $('#itemList').append("<li><form><input name='listItem' type='checkbox'><span>" + itemText + "</span></form></li>");
  }
  
  $(":checkbox").change(function() {
    $(this).siblings().toggleClass('checked');
  });
  
});

