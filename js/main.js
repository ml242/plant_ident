$(function() {
  // Handler for .ready() called.

	// if YES, drop down relevant plant list
	$(".yes-1").click(function() {
		$(".options-spiny-stemmed-plants").show("slow", function() {
			// animation complete
			$(".options-spiny-stemmed-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-0").addClass("answered");
		});
	});

$(".getPic").mouseenter(function() {
	$("#greenHouse").attr("src", $(this).attr("imgtitle"));
	}).mouseleave(function() {
});

	// if NO, display next question
	$(".no-1").click(function() {
		$(".notyetposed-1").show("slow", function() {
			// animation complete
			$(".notyetposed-1").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-0").addClass("answered");
			$(".notyetposed-0").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-2").click(function() {
		$(".options-spiny-stemmed-plants-2").show("slow", function() {
			// animation complete
			$(".options-spiny-stemmed-plants-2").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-1").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-2").click(function() {
		$(".notyetposed-2").show("slow", function() {
			// animation complete
			$(".notyetposed-2").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-1").addClass("answered");
			$(".notyetposed-1").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-3").click(function() {
		$(".options-living-stones").show("slow", function() {
			// animation complete
			$(".options-living-stones").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-2").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-3").click(function() {

		console.log("clicked no-3");

		$(".notyetposed-3").show("slow", function() {
			// animation complete
			$(".notyetposed-3").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-2").addClass("answered");
			$(".notyetposed-2").slideUp(600);

			console.log("noyetposed-3 showed");
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-4").click(function() {
		$(".options-baby-bearing-plants").show("slow", function() {
			// animation complete
			$(".options-baby-bearing-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-3").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-4").click(function() {
		$(".notyetposed-4").show("slow", function() {
			// animation complete
			$(".notyetposed-4").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-3").addClass("answered");
			$(".notyetposed-3").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-5").click(function() {
		$(".options-insect-eaters").show("slow", function() {
			// animation complete
			$(".options-insect-eaters").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-3").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-5").click(function() {
		$(".notyetposed-5").show("slow", function() {
			// animation complete
			$(".notyetposed-5").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-4").addClass("answered");
			$(".notyetposed-4").slideUp(600);
		});
	});

	// if YES, display next question
	$(".yes-6").click(function() {
		$(".options-air-plants").show("slow", function() {
			// animation complete
			$(".notyetposed-6").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-5").addClass("answered");
		});
	});

	// if NO, drop down relevant plant list
	$(".no-6").click(function() {
		$(".notyetposed-6").show("slow", function() {
			// animation complete
			$(".options-air-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-5").addClass("answered");
			$(".notyetposed-5").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-7").click(function() {
		$(".options-climbers-and-trailers").show("slow", function() {
			// animation complete
			$(".options-climbers-and-trailers").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-6").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-7").click(function() {
		$(".notyetposed-7").show("slow", function() {
			// animation complete
			$(".notyetposed-7").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-6").addClass("answered");
			$(".notyetposed-6").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-8").click(function() {
		$(".options-climbers-and-trailers-2").show("slow", function() {
			// animation completecss("visibility") == "hidden")
			$(".options-climbers-and-trailers-2").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-7").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-8").click(function() {
		$(".notyetposed-8").show("slow", function() {
			// animation complete
			$(".notyetposed-8").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-7").addClass("answered");
			$(".notyetposed-7").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-9").click(function() {
		$(".options-palms").show("slow", function() {
			// animation complete
			$(".options-palms").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-8").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-9").click(function() {
		$(".notyetposed-9").show("slow", function() {
			// animation complete
			$(".notyetposed-9").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-8").addClass("answered");
			$(".notyetposed-8").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-10").click(function() {
		$(".options-finger-leaved-plants").show("slow", function() {
			// animation complete
			$(".options-finger-leaved-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-9").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-10").click(function() {
		$(".notyetposed-10").show("slow", function() {
			// animation complete
			$(".notyetposed-10").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-9").addClass("answered");
			$(".notyetposed-9").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-11").click(function() {
		$(".options-herringbone-plants").show("slow", function() {
			// animation complete
			$(".options-herringbone-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-10").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-11").click(function() {
		$(".notyetposed-11").show("slow", function() {
			// animation complete
			$(".notyetposed-11").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-10").addClass("answered");
			$(".notyetposed-10").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-12").click(function() {
		$(".options-lobed-and-star-leaved-plants").show("slow", function() {
			// animation complete
			$(".options-lobed-and-star-leaved-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-11").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-12").click(function() {
		$(".notyetposed-12").show("slow", function() {
			// animation complete
			$(".notyetposed-12").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-11").addClass("answered");
			$(".notyetposed-11").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-13").click(function() {
		$(".options-rosette-plants").show("slow", function() {
			// animation complete
			$(".options-rosette-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-12").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-13").click(function() {
		$(".notyetposed-13").show("slow", function() {
			// animation complete
			$(".notyetposed-13").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-12").addClass("answered");
			$(".notyetposed-12").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-14").click(function() {
		$(".options-bushy-and-upright-succulents").show("slow", function() {
			// animation complete
			$(".options-bushy-and-upright-succulents").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-13").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-14").click(function() {
		$(".notyetposed-15a").show("slow", function() {
			// animation complete
			$(".notyetposed-15a").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-13").addClass("answered");
			$(".notyetposed-13").slideUp(600);
		});
	});

	// if YES, display next question
	$(".yes-15").click(function() {
		$(".notyetposed-15a").show("slow", function() {
			// animation complete
			$(".notyetposed-15a").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-14").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-15").click(function() {
		$(".notyetposed-15b").show("slow", function() {
			// animation complete
			$(".notyetposed-15b").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-14").addClass("answered");
			$(".notyetposed-14").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-16").click(function() {
		$(".options-false-palms").show("slow", function() {
			// animation complete
			$(".options-false-palms").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-15a").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-16").click(function() {
		$(".notyetposed-17").show("slow", function() {
			// animation complete
			$(".notyetposed-17").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-15a").addClass("answered");
			$(".notyetposed-15a").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-17").click(function() {
		$(".options-bonsai").show("slow", function() {
			// animation complete
			$(".options-bonsai").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-17").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-17").click(function() {
		// pop-up... "You're probably looking at a tree, then."
		console.log("You're probably looking at a tree, then.");
	});

	// if YES, display next question
	$(".yes-18").click(function() {
		console.log("Only possible answer...");
		// some alert on hover here...
		$(".notyetposed-19").show("slow", function() {
			// animation complete
			$(".notyetposed-19").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-15b").addClass("answered");
			$(".notyetposed-15b").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-19").click(function() {
		$(".options-grassy-leaved-plants").show("slow", function() {
			// animation complete
			$(".options-grassy-leaved-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-19").addClass("answered");
		});
	});

	// if NO, display next question
	$(".no-19").click(function() {
		$(".notyetposed-20").show("slow", function() {
			// animation complete
			$(".notyetposed-20").css("visibility", "visible");
			// change look of previous question
			$(".notyetposed-19").addClass("answered");
			$(".notyetposed-19").slideUp(600);
		});
	});

	// if YES, drop down relevant plant list
	$(".yes-20").click(function() {
		$(".options-spear-leaved-plants").show("slow", function() {
			// animation complete
			$(".options-spear-leaved-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-20").addClass("answered");
		});
	});

	// if NO, drop down relevant plant list
	$(".no-20").click(function() {
		$(".options-bushy-plants").show("slow", function() {
			// animation complete
			$(".options-bushy-plants").css("visibility", "visible");
			// change look of question that's been answered
			$(".notyetposed-20").addClass("answered");
			$(".notyetposed-20").slideUp(600);
		});
	});

});
