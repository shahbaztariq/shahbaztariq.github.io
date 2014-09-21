(function($, global){
    
    var ssst = global.ssst = {};
    
    ssst.setLocation = function(location) {
        window.location.href = location;
    };
}(jQuery, this));

(function($){
    // cache
    var images  = $(".post-image");
    var $window = $(window);
    
    /**
     * check
     *
     * @return {void}
     */
    var _check = function () {
        var inView = [];
        
        images.each(function(){
            var $image = $(this);
            
            // if this already has an image
            // we dont need to process it
            // again
            if ( _hasImage($image) ) {
                return;
            }
            
            // if this is not in view then
            // we do not need to continue
            if ( ! _isInView($image) ) {
                return;
            }
            
            // add image
            inView.push($image);
        });
        
        // apply function to each element
        $.map(inView, _onAppear);
    };
    
    /**
     * is in view
     *
     * @param  {jQuery}  $image
     *
     * @return {bool}
     */
    var _isInView = function ($image) {
        var height  = $window.height();
        var percent = height * 0.5;
        var viewTop = $window.scrollTop();
        var viewBot = viewTop + $window.height();
        var elemTop = $image.offset().top;
        var elemBot = elemTop + $image.height();
        
        if ( ( ( elemBot - percent ) <= viewBot ) && ( ( elemTop + percent ) >= viewTop ) ) {
            return true;
        }
        
        return false;
    };
    
    /**
     * has image
     *
     * @param  {jQuery}  $image
     *
     * @return {bool}
     */
    var _hasImage = function ($image) {
        return !! $image.data('has_image');
    };
    
    /**
     * on image appear
     *
     * @param  {jQuery} $image
     *
     * @return {void}
     */
    var _onAppear = function ($image) {
        // get source
        var source = _getImageSource($image);
        
        // get image title
        var title  = _getImageTitle($image);
        
        // init image
        var img = $(document.createElement('img'));
        
        // set title
        img.attr('title', title);
        
        // set load function
        img.load(function(){ _onLoad(img) });
        
        // set image source
        img.attr('src', source);
        
        // append
        $image.append(img);
        
        // liquify
        $image.imgLiquid();
        
        // hide initially
        $image.hide();
        
        // fade in
        $image.fadeIn();
        
        // set has image
        $image.data('has_image', true);
    };
    
    /**
     * on img load
     *
     * @param  {jQuery} img
     *
     * @return {void}
     */
    var _onLoad = function (img) {
        
    };
    
    /**
     * get image source
     *
     * @param  {jQuery} $image
     *
     * @return {string}
     */
    var _getImageSource = function ($image) {
        return $image.data('source');
    };
    
    /**
     * get image title
     *
     * @param  {jQuery} $image
     *
     * @return {string}
     */
    var _getImageTitle = function ($image) {
        return $image.data('title');
    }
    
    // initial _check
    _check();
    
    // on scroll, on resize
    $window.on('scroll resize', function(){
        _check();
    });;
    
}(jQuery));
