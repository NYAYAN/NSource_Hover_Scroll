$(document).ready(function () {

    var imaList = $('.imageList');

    $.each(imaList, function (index, item) {
        var itemImageCount = $(item).find('li').length;
        var virtualElem = virtualScrollList(itemImageCount);
        $(item).closest('.hSCon').append(virtualElem);
    });

    $('.vItem').mouseover(function (e) {
        var _t = $(this);
        var imgList = _t.closest('.hSCon').find('.imageList');
        imgList.find('li').hide();
        imgList.find('li:eq(' + _t.index() + ')').show();
    });


    function virtualScrollList(count) {
        var ul = $('<ul class="vList"></ul>');
        for (var i = 0; i < count; i++) {
            ul.append($('<li></li>').addClass('vItem'));
        }
        return ul;
    }
})