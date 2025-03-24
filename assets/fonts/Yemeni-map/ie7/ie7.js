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
		el.innerHTML = '<span style="font-family: \'Yemeni-map-\'">' + entity + '</span>' + html;
	}
	var icons = {
		'yemeni-map-Abyan': '&#xe900;',
		'yemeni-map-Ad-Dali': '&#xe901;',
		'yemeni-map-Aden': '&#xe902;',
		'yemeni-map-Al-Bayda': '&#xe903;',
		'yemeni-map-Al-Hudaydah': '&#xe904;',
		'yemeni-map-Al-Jawf': '&#xe905;',
		'yemeni-map-Al-Mahrah': '&#xe906;',
		'yemeni-map-Al-Mahwit': '&#xe907;',
		'yemeni-map-Amran': '&#xe908;',
		'yemeni-map-Capital-Municipality': '&#xe909;',
		'yemeni-map-Dhamar': '&#xe90a;',
		'yemeni-map-Hadhramaut': '&#xe90b;',
		'yemeni-map-Hajjah': '&#xe90c;',
		'yemeni-map-Ibb': '&#xe90d;',
		'yemeni-map-Lahij': '&#xe90e;',
		'yemeni-map-Marib': '&#xe90f;',
		'yemeni-map-Raymah': '&#xe910;',
		'yemeni-map-Saada': '&#xe911;',
		'yemeni-map-Sanaa': '&#xe912;',
		'yemeni-map-Shabwah': '&#xe913;',
		'yemeni-map-Socotra': '&#xe914;',
		'yemeni-map-Taizz': '&#xe915;',
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
		c = c.match(/yemeni-map-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
