const characters = [
    'images/boo.png',
    'images/boo.png',
    'images/bowser.png',
    'images/bowser.png', 
    'images/donkey-kong.png',
    'images/donkey-kong.png',
    'images/luigi.png',
    'images/luigi.png',
    'images/peach.png', 
    'images/peach.png',
    'images/waluigi.png',
    'images/waluigi.png',
    'images/yoshi.png',
    'images/yoshi.png',
    'images/mario.png',
    'images/mario.png'
];
var shuffle_characters = characters.sort(() => (Math.random() > 0.5) ? 1 : -1);

for (var i = 0; i < characters.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';

    // new
    let img = document.createElement('img');
    img.src = shuffle_characters[i]
    box.appendChild(img);

    box.onclick = function () {
        this.classList.add('boxOpen');
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length >= 2) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML ===
                    document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length == characters.length) {
                        alert('CONGRATULATIONS!!🎉🎉🎉🎉🎉');
                        // confetti_effect();
                    }
                } 
                else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}