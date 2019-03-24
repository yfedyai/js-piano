
const playMusic = (elem) => {
    elem.onended = () => elem.parentNode.classList.remove('play');
    elem.play();
};

const stopMusic = (elem) => {
    elem.pause();
};


const playStop = (elem) => {
    elem.classList.toggle('play');
    elem.classList.contains('play')
        ? playMusic(elem.firstElementChild)
        : stopMusic(elem.firstElementChild);
}



let pianoKey = document.querySelectorAll('.piano-button');

pianoKey.forEach(item => {
    console.log(item.firstElementChild);
    item.addEventListener('click', () => {
        playStop(item);
    })   
});




document.addEventListener('keydown', (key) => {
    let buttonDown = key.keyCode;
    let playElement = document.querySelector(`div[data-key="${buttonDown}"]`);
    console.log('playElement: ', playElement);
    playStop(playElement)
   
})