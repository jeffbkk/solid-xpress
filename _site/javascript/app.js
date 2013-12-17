
$(document).ready(function() {

	  var toggle = $('#toggle'),
        nav = $('nav'),
	      wrapper = $('#wrapper, footer'),
        header = $('header[role="banner"]'),
        subToggleMain = $('#main-menu > li:nth-child(2) > a:nth-child(1)'),
        subNavMain = $('#sub-menu-main');
        subToggleMain.attr('data-icon', '\uE75C');      
        
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


        var h = $(window).height();

        var test = $('section.test');
        
        // 943px 
        
        // scroll = 200px;

        // 660px
        
        $(window).scroll(function(){
           offset = $(test).offset().top;
           console.log($(window).scrollTop());
           console.log(offset);


        });


        

});