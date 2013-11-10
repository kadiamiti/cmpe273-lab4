$(":button").click(function() { 
    var isbn = this.id; 
  //  $("#alertContainer").delay(1000).fadeOut(800);
   alert('About to report lost on ISBN ' + isbn);
    var bookStatus = "#myStatus"+isbn;
    var buttonId="#"+isbn;
    $.ajax({
            url: '/library/v1/books/'+isbn+"?status=lost", 
            type: 'PUT',
            dataType: 'json',
    success: function() { 
    	
            $('#'+isbn).html("lost");
         //   $(buttonId).prop('lost','disabled',false);
            $("button[id="+isbn+"]").attr('disabled','disabled');
            
         //   $(buttonId).attr("disabled", false);
             
            
            } 
            }); 
    });