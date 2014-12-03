$(document).ready(function() {
	$(".SAC").click(function(){
		if ($(".BOOGIE").is(":visible")){
			$(".sac-words").css("display", "none");
			$(".BOOGIE").slideUp();
		}
		else{
			$(".sac-words").css("display", "inline-block");
			$(".BOOGIE").slideDown();
		}
	});
	$(".MIN").click(function(){
		if ($(".ricky").is(":visible")){
			$(".min-words").css("display", "none");
			$(".ricky").slideUp();
		}
		else{
			$(".min-words").css("display", "inline-block");
			$(".ricky").slideDown();
		}
	});
	$(".DET").click(function(){
		if ($(".drummond").is(":visible")){
			$(".det-words").css("display", "none");
			$(".drummond").slideUp();
		}
		else{
			$(".det-words").css("display", "inline-block");
			$(".drummond").slideDown();
		}
	});
});