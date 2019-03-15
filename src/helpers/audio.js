const audios = {
    yeah: new Audio(require('../assets/yeah.wav')),
    victory: new Audio(require('../assets/victory.wav'))
}

export const playAudio = (audio, volume) => {
    if (audios[audio]){
        audios[audio].volume = volume;
        audios[audio].play();
    }
}