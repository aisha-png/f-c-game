const emojis = ["👾","👾","🤠","🤠","😈","😈","🤡","🤡","🤖","🤖","👺","👺","💅","💅","💀","💀"];
var shuffle_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for (var i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffle_emojis[i];
    document.querySelector('.game').appendChild(box);
}