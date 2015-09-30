$('document').ready(function(){

      $('#addtolist').click(function(e) {
        e.preventDefault();
        console.log('f')

          $('#todolist').append('<li>' + $("#entry").val() + '</li>' );

          $('#entry').val(''); /* clears the entry feild after input has been submitted*/

           var count = $('#todolist li').length;
          $('#taskcount').html(count);

      });

      $('#cleartasks').click(function(){

          $('#todolist').html('');
          $('#taskcount').html('0');
      });

      /*Psuedo Code
     I need to take the input (id of entry) saved from the form into a list and keep it there. Adding each input value underneath the
     last one. To do this i need to add li tags into my fucntion before and after the $('$entry').val()

     I am also using the .length fuction to return the array of the todolist's li's

     then on click of each inputted value and "show" the options "edit" and "remove"



       */
});
