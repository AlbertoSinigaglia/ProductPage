var postfix = "";
$(document).ready(function() {
  $('#base_choose').on('click', function(){
    $('.cable-choose button.button-focus').removeClass('button-focus');
    $(this).addClass('button-focus');
    postfix = "";
    $('.color-choose input:checked').click();
    $('#type_choosen').val("base");
  });
  $('#bin_choose').on('click', function(){
    $('.cable-choose button.button-focus').removeClass('button-focus');
    $(this).addClass('button-focus');
    postfix = "_cestino";
    $('.color-choose input:checked').click();
    $('#type_choosen').val("bin");
  });
  $('#bin_bowl_choose').on('click', function(){
    $('.cable-choose button.button-focus').removeClass('button-focus');
    $(this).addClass('button-focus');
    postfix = "_vaschetta_cestino";
    $('.color-choose input:checked').click();
    $('#type_choosen').val("bin_bowl");
  });

  $('.color-choose input').on('click', function() {
    $('span.span-active').removeClass('span-active');
    console.log($(this).parent().find('label > span'));
    $(this).parent().find('label > span').addClass('span-active');
    var headphonesColor = $(this).attr('data-image');
    $('.active').fadeOut(500).removeClass('active');
    $('.left-column img[data-image = ' + headphonesColor + postfix + ']').fadeIn(250).addClass('active');
    $(this).addClass('active');
  });
  document.getElementById("image-for-phone").innerHTML = document.getElementsByClassName("left-column")[0].innerHTML;;
});