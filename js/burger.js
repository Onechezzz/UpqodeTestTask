
jQuery(document).ready(function($){
$('.menu-body').hide();
$('.menu-title').click(function(){$(this).next().toggle()});
});
