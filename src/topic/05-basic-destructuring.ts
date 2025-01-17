
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 180,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

const song = 'New Song'

const {
    song: anotherSong, 
    songDuration: duration,
    details,
} = audioPlayer;

const {author: singer} = details

console.log(song)
console.log('Song:',anotherSong);
console.log(`Duration: ${duration}`)
console.log(`Author: ${singer}`)

const [, , trunks = 'Not Found']: string[] = ['Goku','Vegeta'];



console.log('Personaje 3:',trunks || 'Personaje no encontrado');





export {};