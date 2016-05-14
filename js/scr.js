var menuText = "";

$(
  function(){
    $("body").addClass("js");

    $(".menu_main").prepend("<a href='#' class='link_nav'>"+ menuText +"</a>");

    $(".menu_main li:has(ul)").addClass("menu_parent");
    
    $(".link_nav").click(
      function(){
       
        $(".menu_main > ul").toggleClass("menu_expanded");
        $(this).toggleClass("menu_parent_exp");
        $(".col_p95").toggleClass("col_p80");
        $(".col_p5").toggleClass("col_p20");
        // $(this).toggleClass("menu_parent_exp");
        return false;
      }
    )
    $(".menu_parent").click(
      function(){
        $(this).find(">ul").toggleClass("menu_expanded");
        $(this).toggleClass("menu_parent_exp");
        return false;
      }
    )    
  }
)

$(document).ready(function() {
  $('#myslider').lightSlider({
    adaptiveHeight:true,
    item:5,
    slideMargin:0,
    loop:true
  });
});