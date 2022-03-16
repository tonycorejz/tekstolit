
$(".cls").click(function() {
  $(this).toggleClass("activate");
  $(this).parent( ".question-title" ).parent( ".question" ).find(".answers").toggleClass("activate");
});

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".menu").toggleClass("open");
  $("body").toggleClass("locked"); 
});

$(".button_more").click(function() {
  $(this).parent( ".material_buttons" ).parent( ".material" ).find(".material_description").toggleClass("invise");
  $("body").toggleClass("locked");
});

$(".cls_material").click(function() {
  $(this).parent( ".material_description_head" ).parent( ".material_description" ).toggleClass("invise");
  $("body").toggleClass("locked");
});

