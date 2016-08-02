(function($, global){
    
    var ssst = function () {
        this.init();
    };
    
    $.extend(ssst.prototype, {
        
        /**
         * constructor
         *
         * @return {void}
         */
        'init' : function () {
            
            // lazy load images
            $('img').unveil();
    
            $('.e').html(String.fromCharCode(83, 72, 65, 72, 66, 65, 90, 64, 83, 83, 83, 84, 46, 67, 79).toLowerCase());
        },
        
        /**
         * set location
         *
         * @param  {string} url
         *
         * @return {void}
         */
        'setLocation' : function (url) {
            window.location.href = url;
        }
    });
    
    global.ssst = new ssst();
}(jQuery, window));
