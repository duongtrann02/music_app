var searchIcon = document.querySelector(".lib-search-icon")
var searchBar = document.querySelector(".lib-search-bar")
let listSong = document.querySelector('.recently-played-song');

searchIcon.onclick = function () {
    searchBar.classList.toggle("close-lib-search-bar")
}


var loginButton = document.querySelector(".login-btn")
var loginScreen = document.querySelector(".login-screen")
var headerScreen = document.querySelector(".header")
function handleBtnLogin() {
    if (loginButton.onclick) {
        loginScreen.setAttribute("style", "visibility: visible;");
    }
}

var closeButton = document.querySelector(".cancel-btn")
function closeLoginScreen() {
    if (closeButton.onclick) {
        loginScreen.setAttribute("style", "visibility: hidden;");
    }
}


var uploadButton = document.querySelector(".upload")
var uploadScreen = document.querySelector(".upload-screen")
var headerScreen = document.querySelector(".header")
function handleBtnLogin() {
    if (uploadButton.onclick) {
        uploadScreen.setAttribute("style", "visibility: visible;");
    }
}

var closeButton2 = document.querySelector('.closeUploadScreen')
function closeLoginScreen() {
    if (closeButton2.onclick) {
        uploadScreen.setAttribute("style", "visibility: hidden;");
    }
}



const music = new Audio('./src/audio/Em khiến anh muốn trở thành người Hà Nội.mp3');
let playing = false
const songs = [
    {
        id: '1',
        songName: `Tình đã xa mờ`,
        artist: `Nguyên.`,
        poster: "./src/song-poster/Tình đã xa mờ.png"
    },
    {
        id: '2',
        songName: `Em khiến anh muốn trở thành người Hà Nội`,
        artist: `Negav`,
        poster: "./src/song-poster/Em khiến anh muốn trở thành người Hà Nội.jpg"
    }
]
Array.from(document.getElementsByClassName('song-items')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByClassName('song-name')[0].innerHTML = songs[i].songName;
    element.getElementsByClassName('artist')[0].innerHTML = songs[i].artist;

})

function render() {
    let ListSongs = songs.map((value, index) => {
        return (
            `
            <li class="song-items">
                <div class="img-play">
                    <div class="img-part">
                        <img src="${value.poster}" alt="">
                        <i class="fa-solid playListPlay fa-circle-play" onclick = "PlaySong('${value.songName}')"></i>
                    </div>
                    <div class="title song-name">${value.songName}</div>
                    <div class="title artist">${value.artist}</div>
                </div>
            </li>
            `
        )
    })

    listSong.innerHTML += ListSongs.join("")
}

render()
let masterPlay = document.getElementById('master-play');

masterPlay.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  } else {
    music.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
  }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

let index = 0

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        console.log(75, index);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // music.src = `./src/audio/Em khiến anh muốn trở thành người Hà Nội.mp3`;
        // music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index
        })

        song_title.forEach(ele =>{
            let {songName} = ele
            song_title.innerHTML = songName
        })
    })
})

let playingSongName = document.querySelector('.song-name');
let playingSongArtist = document.querySelector('.artist');



function PlaySong(songName) {
    console.log(songName)
    music.src = `./src/audio/${songName}.mp3`;
    music.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
}



let currentStart = document.getElementById('current-start')
let songLength = document.getElementById('song-length')

// music.addEventListener('timeipdate', () => {
//     let music_curr = music.currentTime;
//     let music_dur = music.duration;

//     let min = Math.floor(music_dur / 60)
//     let sec = Math.floor(music_dur % 60)



//     songLength.innerText = `${min}:${sec}`

// })