$(document).ready(function () {
    $('.vItem').mouseover(function (e) {
        var _t = $(this);
        var imgList = _t.closest('.hSCon').find('.imageList');
        imgList.find('li').hide();
        imgList.find('li:eq(' + _t.index() + ')').show();
    });
})