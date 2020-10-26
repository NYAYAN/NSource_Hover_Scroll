var NSourceSlider = function (properties) {
    this.options = {
        itemSelector: '.nshSConItem',
        vListSelector: '.nshSvList',
        vItemSelector: '.nshSvItem'
    };
    if (properties['wrapperSelector'] === undefined) {
        this.options.wrapperSelector = '.nshSCon'
    } else {
        this.options.wrapperSelector = properties['wrapperSelector'];
    }
    this.init();
}

NSourceSlider.prototype.init = function () {
    var self = this;
    var sliders = document.querySelectorAll(self.options.wrapperSelector);
    if (sliders.length == 0) {
        return;
    }

    sliders.forEach(function (slider) {
        var sliderImages = slider.querySelectorAll(self.options.itemSelector);
        if (sliderImages.length === 0) {
            return;
        }
        var generatedElem = self.generateVirtualSlide(sliderImages.length);
        slider.appendChild(generatedElem);
        var sliderItems = slider.querySelectorAll(self.options.vItemSelector);
        sliderImages[0].style['display'] = 'block';
        sliderItems.forEach(function (slide) {
            slide.addEventListener('mouseenter', function (event) {
                sliderImages.forEach(function (slideImage) {
                    slideImage.style['display'] = 'none';
                })
                var index = [].indexOf.call(sliderItems, this);
                sliderImages[index].style['display'] = 'block';
            });

            slide.addEventListener('mouseout', function (e) {
                sliderImages.forEach(function (slideImage) {
                    slideImage.style['display'] = 'none';
                })
                sliderImages[0].style['display'] = 'block';
            });
        })

    });
    this.options.sliders = sliders;
}

NSourceSlider.prototype.generateVirtualSlide = function (count) {
    var self = this;
    var ul = document.createElement('ul');
    ul.classList.add('nshSvList');
    for (var i = 0; i < count; i++) {
        var li = document.createElement('li');
        li.classList.add('nshSvItem');
        if (i === 0) {
            li.classList.add('active');
        }
        ul.appendChild(li);
    }
    return ul;
}