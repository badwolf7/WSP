(function($) {
    $.fn.starRating = function(options) {

        // Defaults and options
        var defaults = {
                            onimage: 'assets/images/staron.png',
                            offimage: 'assets/images/staroff.png'
        };
        var opts = $.extend({}, defaults, options);
        this.each(function() {
            $('input[type=radio]',this).hide(); //hide the radio buttons themselves
            $('label span',this).hide(); //hide the regular text labels
            $('label',this).append('<img src="'+opts.offimage+'">'); //create image elements 
            
            var changeHandler = function()
            {
                stars = parseInt($(this).val());
                elementName = $(this).attr('name');
                $('input[name='+elementName+']').each(function(){
                    if(parseInt($(this).val()) <= stars)
                    {
                        $('img',$(this).parent()).attr('src',opts.onimage);
                    }
                    else
                    {
                        $('img',$(this).parent()).attr('src',opts.offimage);
                    }
                });
            }
            $('input[type=radio]',this).bind('change',changeHandler);
            $('input[type=radio]:checked',this).trigger('change');
        })
   }
})(jQuery);