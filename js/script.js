$(document).ready(function(){
    $('.projects-thumbnail').hover(function(){
    $(this).find('.project-thumbnail-overlay').slideToggle();
    $(this).find('.project-category').slideToggle();
    })
})