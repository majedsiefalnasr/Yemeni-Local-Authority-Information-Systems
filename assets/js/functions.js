//   ____                                    _____        __
//  |  _ \                                  |_   _|      / _|
//  | |_) |_ __ _____      _____  ___ _ __    | |  _ __ | |_ ___
//  |  _ <| '__/ _ \ \ /\ / / __|/ _ \ '__|   | | | '_ \|  _/ _ \
//  | |_) | | | (_) \ V  V /\__ \  __/ |     _| |_| | | | || (_) |
//  |____/|_|  \___/ \_/\_/ |___/\___|_|    |_____|_| |_|_| \___/
//
//
// Browser Info
var browserLang,
	userLang = navigator.language || navigator.userLanguage;

if (userLang.split('-')[0].length) {
	browserLang = userLang.split('-')[0];
}

//   _                     _
//  | |                   (_)
//  | | __ _ _____   _ ___ _ _______  ___
//  | |/ _` |_  / | | / __| |_  / _ \/ __|
//  | | (_| |/ /| |_| \__ \ |/ /  __/\__ \
//  |_|\__,_/___|\__, |___/_/___\___||___/
//                __/ |
//               |___/
// lazysizes
// Configuration
window.lazySizesConfig = window.lazySizesConfig || {};

// use .lazy instead of .lazyload
// window.lazySizesConfig.lazyClass = "lazy";

// use data-original instead of data-src
// lazySizesConfig.srcAttr = "data-original";

//page is optimized for fast onload event
lazySizesConfig.loadMode = 1;

// add simple support for background images:
document.addEventListener('lazybeforeunveil', function (e) {
	var bg = e.target.getAttribute('data-bg');
	if (bg) {
		e.target.style.backgroundImage = 'url(' + bg + ')';
	}
});

//    _____                       _   _        _____                _ _   _          _______
//   / ____|                     | | | |      / ____|              | | | | |        |__   __|
//  | (___  _ __ ___   ___   ___ | |_| |__   | (___   ___ _ __ ___ | | | | |_ ___      | | ___  _ __
//   \___ \| '_ ` _ \ / _ \ / _ \| __| '_ \   \___ \ / __| '__/ _ \| | | | __/ _ \     | |/ _ \| '_ \
//   ____) | | | | | | (_) | (_) | |_| | | |  ____) | (__| | | (_) | | | | || (_) |    | | (_) | |_) |
//  |_____/|_| |_| |_|\___/ \___/ \__|_| |_| |_____/ \___|_|  \___/|_|_|  \__\___/     |_|\___/| .__/
//                                                                                             | |
//                                                                                             |_|
// Smooth Scroll
document.addEventListener('DOMContentLoaded', function (event) {
	var offset = 120;
	var duration = 600;

	if (document.getElementById('backToTop')) {
		// Smooth scroll to top
		window.addEventListener('scroll', function (e) {
			if (this.scrollY > offset) {
				document.getElementById('backToTop').style.opacity = 1;
			} else {
				document.getElementById('backToTop').style.opacity = 0;
			}
		});
	}

	function scrollToTop() {
		if (
			document.body.scrollTop != 0 ||
			document.documentElement.scrollTop != 0
		) {
			window.scrollBy(0, -50);
			duration = setTimeout('scrollToTop()', 10);
		} else clearTimeout(duration);
	}

	// if (document.getElementById('backToTop')) {
	// 	document.getElementById('backToTop').addEventListener('click', scrollToTop);
	// }
});

//             _ _     _      _
//            | (_)   | |    (_)
//   ___ _ __ | |_  __| | ___ _ ___
//  / __| '_ \| | |/ _` |/ _ \ / __|
//  \__ \ |_) | | | (_| |  __/ \__ \
//  |___/ .__/|_|_|\__,_|\___| |___/
//      | |                 _/ |
//      |_|                |__/
// splidejs
document.addEventListener('DOMContentLoaded', function () {
	var splide = new Splide('.big-slider .splide', {
		type: 'loop',
		perPage: 1,
		focus: 'center',
		pauseOnFocus: true,
		autoplay: true,
		interval: 3000,
		direction: 'rtl',
		arrowPath: 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z',
	}).mount();

	splide.on('active', function () {
		console.log(splide.index);
	});
});

// Audio & Video Play controls
window.addEventListener(
	'play',
	function (evt) {
		if (window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) {
			window.$_currentlyPlaying.pause();
		}
		window.$_currentlyPlaying = evt.target;
	},
	true
);

/* News Ticker */
document.addEventListener('DOMContentLoaded', function (event) {
	// Handle Trigger
	const news = document.querySelectorAll('.news-ticker .hitem'),
		container = document.querySelector('.news-ticker .hmove');
	var counter = 0;

	[].forEach.call(news, function (div) {
		counter++;
	});

	container.style.animationDuration = counter * 15 + 's';
});
