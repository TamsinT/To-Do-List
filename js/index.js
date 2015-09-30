$('document').ready(function(){

      $('#addtolist').click(function(e) {
        e.preventDefault();
        console.log('f')

          $('#todolist').append( $("#entry").val() );
      });
});
