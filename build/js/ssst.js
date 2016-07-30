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
}(jQuery, this));
