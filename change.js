const themeColor = '#28b9ff';
const emphasisColor = 'blue';

$('#globalHeader').css('background-color', themeColor);
$('.p-home_menuItem-active').css('background-color', themeColor);
$('.st-Header_postButton').css('background-color', emphasisColor);
$('.p-home_ad').remove();

let path = location.pathname;

if (path === '/') {
	$('.tr-ItemList').css('background-color', themeColor);
}

if (path === '/timeline') {
	$('.tl-ItemList').css('background-color', themeColor);
	$('.tl-ItemList_moreButton').css('background-color', emphasisColor);
}

if (path === '/tag-feed') {
	$('.tf-ItemList').css('background-color', themeColor);
	$('.tf-ItemList_moreButton').css('background-color', emphasisColor);
}


