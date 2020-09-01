(function () {
    var rotateY = 0,
        rotateX = 0;
        speed = 8;
    
    document.onkeydown = function (e) {
                 if (e.keyCode === 37) rotateY -= speed;
            else if (e.keyCode === 38) rotateX -= speed;
            else if (e.keyCode === 39) rotateY += speed;
            else if (e.keyCode === 40) rotateX += speed;

            document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)'+
            'rotateX(' + rotateX + 'deg)';
    }
})();