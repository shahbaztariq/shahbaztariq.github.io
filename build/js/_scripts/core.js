(function($, global){
    
    var ssst = global.ssst = {};
    
    ssst.setLocation = function(location) {
        window.location.href = location;
    };
    
    // all post images should be contained
    $(".post-image").imgLiquid();
}(jQuery, this));
