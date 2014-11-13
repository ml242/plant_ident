
	$(".no").click(function() {
		var noClasses = $(this).attr('class').split(" ");
		
		var noNum = noClasses[1].split('-')[1];

		var notYetCurrentClass = ".notyetposed-" + noNum;

		noNum = parseInt(noNum);

		var minusOne = noNum - 1;
		minusOne = minusOne.toString();

		var notYetMinusOneClass = ".notyetposed-" + minusOne;

		$(notYetCurrentClass).show("slow", function() {
			// animation complete
			$(notYetCurrentClass).css("visibility", "visible");
			// change look of previous question
			$(notYetMinusOneClass).addClass("answered");
			$(notYetMinusOneClass).slideUp(600);
		});
	});