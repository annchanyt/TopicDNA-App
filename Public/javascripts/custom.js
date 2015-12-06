
$(document).ready(function() {

	$(".document-collapse").show();
	$(".document-collapse .tweet").each(function(i,buttonElement){
       $(this).find(".row > .col-sm-5").height($(this).find(".row > .col-sm-7").height());
    });
    $(".document-collapse").css('display','');

    $(".content-main .body-contents > .row.document h3 + a").parent().click(function(){
    	$(this).find("a[data-toggle]").trigger("click");
    });
});