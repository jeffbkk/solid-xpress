
$(document).ready(function() {

	  var toggle = $('#toggle'),
	      wrapper = $('#wrapper, footer'),
        header = $('header[role="banner"]'),
        h = header.height(),
        // subToggleMain = $('#main-menu').children('li').next('li:nth-child(1)').children('a:nth-child(1)');
        subToggleMain = $('#main-menu > li:nth-child(2) > a:nth-child(1)'),
        subToggleSide = $('#side-menu > li:nth-child(2) > a:nth-child(1)'),
        subNavMain = $('#sub-menu-main'),
        h = subNavMain.height(),
        subNavSide = $('#sub-menu-side');
        subToggleMain.attr('data-icon', '\uE75C');      
        
        console.log(h);

        
        console.log(h);

        toggle.bind('click', function(event) {
          if (wrapper.hasClass('open-nav')) { 
             
               if (subNavMain.hasClass('open')) {
                  subNavMain.removeClass('open');}
           };
               wrapper.toggleClass('open-nav');
                 return false;
        });
         

        subToggleMain.bind('click', function(event) {
              subNavMain.toggleClass('open');
              return false;
        });

        subToggleSide.bind('click', function(event) {
              subNavSide.toggleClass('open');
              return false;
        });

});