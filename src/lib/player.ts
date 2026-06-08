export function initPlayer(audioElement: HTMLAudioElement) {
    // This logic handles the playback state
    return {
        play: () => audioElement.play(),
        pause: () => audioElement.pause(),
    };
}