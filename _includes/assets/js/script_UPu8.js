var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery(function( $ ) {


	if(rllArgs.script === 'venobox') {

	$.each($('a[rel*="'+rllArgs.selector+'"]'), function() {
		var match = $(this).attr('rel').match(new RegExp(rllArgs.selector+'\\[(gallery\\-(?:[\\da-z]{1,4}))\\]', 'ig'));

		if(match !== null) {
			$(this).attr('data-gall', match[0]);
		}
	});
	$('a[rel*="'+rllArgs.selector+'"]').venobox();
		}  else if(rllArgs.script === 'nivo_lightbox') {
			$.each($('a[rel*="'+rllArgs.selector+'"]'), function() {
				var match = $(this).attr('rel').match(new RegExp(rllArgs.selector+'\\[(gallery\\-(?:[\\da-z]{1,4}))\\]', 'ig'));

				if(match !== null) {
					$(this).attr('data-lightbox-gallery', match[0]);
				}
			});

			$('a[rel*="'+rllArgs.selector+'"]').nivoLightbox();
		} 

});
}

/*
     FILE ARCHIVED ON 18:50:57 May 28, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:22:11 Sep 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 2.723
  load_resource: 164.83
  PetaboxLoader3.resolve: 137.22
  PetaboxLoader3.datanode: 26.774
*/