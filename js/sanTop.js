var qu = document.getElementsByClassName('qu')[0]
var top = document.getElementsByClassName('top')
var min = document.getElementsByClassName('min')
for (var i = 0; i < top.length; i++) {
    top[i].setAttribute('index', i)
    top[i].ontouchstart = function () {
        var index = this.getAttribute('index')
        for (var j = 0; j < top.length; j++) {
            qu.className = 'active'
            for (var d = 0; d < top.length; d++) {
                if (d == index) {
                    top[d].classList.add('actli')
                } else {
                    top[d].classList.remove('actli')
                }
            }
            for (var k = 0; k < min.length; k++) {
                min[k].style.display = 'none'
                min[index].style.display = 'block'
            }
        }

    }
}