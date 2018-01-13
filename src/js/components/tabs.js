import {isResp1169} from "./global.js"
function tabs(){
	let $tabs = $(".js-tabs"),
	$tabsNavLink = $tabs.find(".js-tabs-nav-link"),
	$tabsContent = $tabs.find(".js-tabs-content"),
	$tabsTab = $tabs.find(".js-tabs-item");

	$tabsNavLink.on('click', function(e){
		e.preventDefault();

		let $this = $(this);

		if($this.hasClass('is-active')) return;

		let target = $this.attr('data-target');
		let $targetItem = $tabsContent.find(".js-tabs-item[data-content="+ target + "]");

		$tabsNavLink.removeClass('is-active')
		$this.addClass('is-active');

		// if(!isResp1169()){
		// 	$tabsTab.not($targetItem).fadeOut(150);
		// 	$targetItem.fadeIn(150);
		// }else{
		// 	$tabsTab.removeClass('is-open');
		// 	$targetItem.addClass('is-open');
		// }
			$tabsTab.removeClass('is-open');
			$targetItem.addClass('is-open');


	})
};
module.exports = tabs;