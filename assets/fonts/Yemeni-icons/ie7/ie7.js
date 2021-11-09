/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Yemeni-icon-\'">' + entity + '</span>' + html;
	}
	var icons = {
		'yemeni-icon-arrow': '&#xe900;',
		'yemeni-icon-down': '&#xe901;',
		'yemeni-icon-audio': '&#xe902;',
		'yemeni-icon-blog': '&#xe903;',
		'yemeni-icon-calendar': '&#xe904;',
		'yemeni-icon-capital_star': '&#xe905;',
		'yemeni-icon-close': '&#xe906;',
		'yemeni-icon-comments': '&#xe907;',
		'yemeni-icon-contact': '&#xe908;',
		'yemeni-icon-email': '&#xe909;',
		'yemeni-icon-external_link': '&#xe90a;',
		'yemeni-icon-download': '&#xe90b;',
		'yemeni-icon-flag': '&#xe90c;',
		'yemeni-icon-global': '&#xe90d;',
		'yemeni-icon-local': '&#xe90e;',
		'yemeni-icon-map': '&#xe90f;',
		'yemeni-icon-message': '&#xe910;',
		'yemeni-icon-password': '&#xe911;',
		'yemeni-icon-play_video': '&#xe912;',
		'yemeni-icon-report': '&#xe913;',
		'yemeni-icon-search': '&#xe914;',
		'yemeni-icon-send': '&#xe915;',
		'yemeni-icon-user': '&#xe916;',
		'yemeni-icon-forum': '&#xe917;',
		'yemeni-icon-video': '&#xe918;',
		'yemeni-icon-views': '&#xe919;',
		'yemeni-icon-f_facebook': '&#xe91a;',
		'yemeni-icon-f_twitter': '&#xe91b;',
		'yemeni-icon-f_instagram': '&#xe91c;',
		'yemeni-icon-f_youtube': '&#xe91d;',
		'yemeni-icon-f_rss': '&#xe91e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/yemeni-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
