$(document).ready(function(){
    $('#btnSend').click(function(){

        var errores = '';

        //Validando nombre***********************************
        if($('#names').val() == '' ){
           errores += '<p>Escriba un nombre</p>';
           $('#names').css("border-bottom-color", "#F14B4B")

      }else{
          $('#names').css("border-bottom-color", "#D1D1D1");
      }
      //Validando correo***********************************
      if($('#email').val() == '' ){
         errores += '<p>Ingrese un correo</p>';
         $('#email').css("border-bottom-color", "#F14B4B")

    }
    else{
        $('#email').css("border-bottom-color", "#D1D1D1");
    }
    //Validando mensaje***********************************
    if($('#mensaje').val() == '' ){
       errores += '<p>Escriba un mensaje</p>';
       $('#mensaje').css("border-bottom-color", "#F14B4B")

  }else{
      $('#mensaje').css("border-bottom-color", "#D1D1D1");
  }

    //ENVIANDO MENSAJE***********************************
    if( errores == '' == false){
      var mensajeModal = '<div class= "modal_wrap">'+
                         '<div class="mensaje_modal">'+
                         '<h3>Errores encontrados</h3>'+
                         errores+
                         '<span id="btnClose">Cerrar</span>'+
                          '</div>'+
                          '</div>'

      $('body').append(mensajeModal);

    }

    //CERRANDO MODAL************************
    $('#btnClose').click(function(){
        $('.modal_wrap').remove();
    });



    });
});
