(function () {
	"use strict";

	const fadeLoads = document.querySelectorAll(".fadeLoad");

	const fadeIn = function fadeIn(eleIndex) {
		let ele = fadeLoads[eleIndex];

		if (!ele) return;

		ele.className += " loaded";

		setTimeout(function () {
			return fadeIn(eleIndex + 1);
		}, 100);
	};

	fadeIn(0);
})();