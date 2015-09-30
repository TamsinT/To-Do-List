$('document').ready(function(){

      $('#save').click(function(e) {
        e.preventDefault();
        console.log('f')

          $('#todolist').append( $("#entry").val() );
      });
});
