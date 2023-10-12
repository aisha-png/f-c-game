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
    'images/toad.png', 
    'images/toad.png', 
    'images/waluigi.png',
    'images/waluigi.png',
    'images/yoshi.png',
    'images/yoshi.png'
];
var shuffle_characters = characters.sort(() => (Math.random() > 0.5) ? 1 : -1);

// function confetti() {
//     var duration = 15 * 1000;
//     var animationEnd = Date.now() + duration;
//     var skew = 1;
  
//     function randomInRange(min, max) {
//       return Math.random() * (max - min) + min;
//     }
  
//     (function frame() {
//       var timeLeft = animationEnd - Date.now();
//       var ticks = Math.max(200, 500 * (timeLeft / duration));
//       skew = Math.max(0.8, skew - 0.001);
  
//       window.confetti({
//         particleCount: 1,
//         startVelocity: 0,
//         ticks: ticks,
//         origin: {
//           x: Math.random(),
//           // since particles fall down, skew start toward the top
//           y: (Math.random() * skew) - 0.2
//         },
//         colors: ['#ffffff'],
//         shapes: ['circle'],
//         gravity: randomInRange(0.4, 0.6),
//         scalar: randomInRange(0.4, 1),
//         drift: randomInRange(-0.4, 0.4)
//       });
  
//       if (timeLeft > 0) {
//         requestAnimationFrame(frame);
//       }
//     })();
//   }

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
                        // confetti();
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}