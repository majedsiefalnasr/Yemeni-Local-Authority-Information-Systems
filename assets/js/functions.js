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
// Big Slider
// document.addEventListener('DOMContentLoaded', function () {
// 	var splide = new Splide('.big-slider .splide', {
// 		type: 'loop',
// 		perPage: 1,
// 		focus: 'center',
// 		pauseOnFocus: true,
// 		autoplay: true,
// 		interval: 30000,
// 		direction: 'rtl',
// 		arrowPath: 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z',
// 	}).mount();

// 	splide.on('active', function () {
// 		let container = document.querySelector('.big-slider .data-container');

// 		$('#').appendTo('#new-div');

// 		console.log(container);
// 		console.log(splide.index);
// 	});
// });

//                     _ _                 __      ___     _              _____  _                               _             _
//      /\            | (_)         ___    \ \    / (_)   | |            |  __ \| |                             | |           | |
//     /  \  _   _  __| |_  ___    ( _ )    \ \  / / _  __| | ___  ___   | |__) | | __ _ _   _    ___ ___  _ __ | |_ _ __ ___ | |___
//    / /\ \| | | |/ _` | |/ _ \   / _ \/\   \ \/ / | |/ _` |/ _ \/ _ \  |  ___/| |/ _` | | | |  / __/ _ \| '_ \| __| '__/ _ \| / __|
//   / ____ \ |_| | (_| | | (_) | | (_>  <    \  /  | | (_| |  __/ (_) | | |    | | (_| | |_| | | (_| (_) | | | | |_| | | (_) | \__ \
//  /_/    \_\__,_|\__,_|_|\___/   \___/\/     \/   |_|\__,_|\___|\___/  |_|    |_|\__,_|\__, |  \___\___/|_| |_|\__|_|  \___/|_|___/
//                                                                                        __/ |
//                                                                                       |___/
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

//   _______    _        _____ _ _     _
//  |__   __|  | |      / ____| (_)   | |
//     | | __ _| |__   | (___ | |_  __| | ___ _ __
//     | |/ _` | '_ \   \___ \| | |/ _` |/ _ \ '__|
//     | | (_| | |_) |  ____) | | | (_| |  __/ |
//     |_|\__,_|_.__/  |_____/|_|_|\__,_|\___|_|
//
//
// Tab Slider
document.addEventListener('DOMContentLoaded', function (event) {
	if (document.querySelector('#news-pills-tab')) {
		var tabs = document.querySelectorAll('[data-bs-toggle="tab"]'),
			tabFirstTrigger = new bootstrap.Tab(tabs[0]);

		[].forEach.call(tabs, function (tab) {
			tab.addEventListener('shown.bs.tab', function (e) {
				var progressbarContainer = e.target.querySelector(
					'[role="progressbar"]'
				);
				progressbarContainer.addEventListener('animationend', function () {
					progressbarContainer.style.width = 0 + '%';

					var nextTarget = e.target.nextElementSibling;
					if (nextTarget) {
						let tabTrigger = new bootstrap.Tab(nextTarget);
						tabTrigger.show();
					} else {
						tabFirstTrigger.show();
					}
				});
			});
		});

		tabFirstTrigger.show();
	}
});

//   _   _                     _______ _      _
//  | \ | |                   |__   __(_)    | |
//  |  \| | _____      _____     | |   _  ___| | _____ _ __
//  | . ` |/ _ \ \ /\ / / __|    | |  | |/ __| |/ / _ \ '__|
//  | |\  |  __/\ V  V /\__ \    | |  | | (__|   <  __/ |
//  |_| \_|\___| \_/\_/ |___/    |_|  |_|\___|_|\_\___|_|
//
//
// News Ticker
document.addEventListener('DOMContentLoaded', function (event) {
	if (document.querySelector('.news-ticker')) {
		// Handle Trigger
		const news = document.querySelectorAll('.news-ticker .hitem'),
			container = document.querySelector('.news-ticker .hmove');
		var counter = 0;

		[].forEach.call(news, function (div) {
			counter++;
		});

		container.style.animationDuration = counter * 15 + 's';
	}
});

/* Forms */
//Change phone number
document.addEventListener('DOMContentLoaded', function (event) {
	if (document.querySelector('input[type="tel"]')) {
		$('input[type="tel"]').intlTelInput({
			utilsScript:
				'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js',
		});
	}
});

// Enable tooltips everywhere
document.addEventListener('DOMContentLoaded', function (event) {
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl, {
			trigger: 'manual',
		});
	});
});

// Hover Tooltip
document.addEventListener('DOMContentLoaded', function () {
	const parent = document.querySelectorAll('#yemen_map > g');

	[].forEach.call(parent, function (div) {
		let child = div.querySelector('g[data-bs-toggle="tooltip"]'),
			tooltip = bootstrap.Tooltip.getInstance(child);

		if (child) {
			div.addEventListener('mouseover', function () {
				$('[data-bs-toggle="tooltip"]').tooltip('hide');
				tooltip.show();
			});

			div.addEventListener('mouseleave', function () {
				let leaveParent = true,
					leaveChild;

				if (leaveParent && leaveChild) {
					div.classList.remove('active');
					tooltip.hide();
				}
			});

			div.addEventListener('click', function () {
				var mapModalContainer = document.getElementById('mapData');
				var mapModal = new bootstrap.Modal(mapModalContainer);

				// Open Modal
				mapModal.show();

				// Pass data to modal
				mapModalContainer.setAttribute('data-city', div.getAttribute('id'));

				mapModalContainer
					.querySelector('.back')
					.addEventListener('click', () => {
						// Hide Modal
						mapModal.hide();
					});
			});
		}
	});
});

//
document.addEventListener('DOMContentLoaded', function (event) {
	if (document.getElementById('nav-tab-profile')) {
		const tabs = document.querySelectorAll(
				'#nav-tab-profile > [data-bs-toggle="tab"]'
			),
			slider = document.querySelector('.nav-tabs-indicator > span');

		slider.style.width = tabs[0].offsetWidth + 'px';
		slider.style.left = tabs[0].offsetLeft + 'px';

		[].forEach.call(tabs, function (div) {
			div.addEventListener('click', function (e) {
				slider.style.width = div.offsetWidth + 'px';
				slider.style.left = div.offsetLeft + 'px';
			});
		});
	}
});
