function hola() {
  window.alert('Bienvenido!');
};

$(document).ready(function(){
    $(".registrosemillas").on({
        mouseover: function(){
            $(this).css("background-color", "#7abf68");
        },
        mouseleave: function(){
            $(this).css("background-color", "#6a7d9e");
        },
    });
});

$('#btlogin')
onclick.function() {
  var seedname, usuario
  var seedname = $('.rellenar').val()
  var usuario = $('.rellenar2').val()
  console.log(seedname)
  console.log(usuario)
    if ((seedname === '' || usuario === ''){
      $('.rellenar').css('border-color', 'red')
      $('.rellenar2').css('border-color', 'red')
  } else {
      $('.rellenar').css( 'border-color:', 'green')
      $('.rellenar2').css( 'border-color:', 'green')
  }
}
