	// Initialize tooltip component
$(function () {
	 $(".HeartAnimation").click(function(){
    $(this).toggleClass("animate");
  });
$(document).on("click", ".openImageDialog", function () {
    var myImageId = $(this).data('id');
    $(".modal-body #myImage").attr("src", myImageId);
});
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()

});


