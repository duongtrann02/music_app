var searchIcon = document.querySelector(".lib-search-icon")
var searchBar = document.querySelector(".lib-search-bar")
console.log('file script')


searchIcon.onclick = function () {
    searchBar.classList.toggle("close-lib-search-bar")
}

var loginButton = document.querySelector(".login-btn")
var loginScreen = document.querySelector(".login-screen")
var signupButton = document.querySelector('.sign-up');
var signupScreen = document.querySelector(".Register-screen")
var uploadButton = document.querySelector('.upload-btn');
var uploadScreen = document.querySelector('.upload-screen');
let listSong = document.querySelector('.item-song');


function handleBtnLoginSc() {
    if (loginButton.onclick) {
        console.log('login btn clicked')
        loginScreen.setAttribute("style", "visibility: visible;");
        signupScreen.setAttribute("style", "visibility: hidden;");
        uploadScreen.setAttribute("style", "visibility: hidden;");
    }
}

function handleBtnUploadSc() {
    if(uploadButton.onclick){
        console.log('upload btn clicked')
        uploadScreen.setAttribute("style", "visibility: visible;");
        loginScreen.setAttribute("style", "visibility: hidden;");
        signupScreen.setAttribute("style", "visibility: hidden;");
    }
}
function handleBtnSignupSc() {
    if(signupButton.onclick){
        console.log('signup btn clicked')
        signupScreen.setAttribute("style", "visibility: visible;");
        loginScreen.setAttribute("style", "visibility: hidden;");
        uploadScreen.setAttribute("style", "visibility: hidden;");
    }
}
var closeButton = document.querySelector(".cancel-btn")
function closeScreen() {
    if (closeButton.onclick) {
        loginScreen.setAttribute("style", "visibility: hidden;");
        signupScreen.setAttribute("style", "visibility: hidden;");
        uploadScreen.setAttribute("style", "visibility: hidden;");
    }
}

const music = new Audio('./src/audio/Simp Gái 808.mp3');
let songs = [
    {
        id: '1',
        songName: `Tình đã xa mờ`,
        artist: `Nguyên.`,
        poster: "./src/song-poster/Tình đã xa mờ.jpg",
        url: './src/audio/Tình đã xa mờ.mp3'
    },
    {
        id: '2',
        songName: `Em khiến anh muốn trở thành người Hà Nội`,
        artist: `Negav`,
        poster: "./src/song-poster/Em khiến anh muốn trở thành người Hà Nội.jpg",
        url: './src/audio/Em khiến anh muốn trở thành người Hà Nội.mp3'
    },
    {
        id: '3',
        songName: `Simp Gái 808`,
        artist: `Low G`,
        poster: "./src/song-poster/Simp Gái 808.jpg",
        url: './src/audio/Simp Gái 808.mp3'
    }
    ,
    {
        id: '4',
        songName: `M.`,
        artist: `16 Typh`,
        poster: "./src/song-poster/M..jpg",
        url: './src/audio/M..mp3'
    },
    {
        id: '5',
        songName: `Anh là ai`,
        artist: `DT tập rap, Huỳnh Công Hiếu`,
        poster: "./src/song-poster/Anh là ai.jpg",
        url: './src/audio/Anh là ai.mp3'
    }
    ,
    {
        id: '6',
        songName: `Em nhiệt tình như lửa Anh lạnh lùng như băng`,
        artist: `Đào Tử`,
        poster: "./src/song-poster/Em nhiệt tình như lửa Anh lạnh lùng như băng.jpg",
        url: './src/audio/Em nhiệt tình như lửa Anh lạnh lùng như băng.mp3'
    }
    ,
    {
        id: '7',
        songName: `Anh ghét mình vì còn nhớ em của Vinh Khuất nhưng buồn hơn`,
        artist: `hqhuy`,
        poster: "./src/song-poster/Anh ghét mình vì còn nhớ em của Vinh Khuất nhưng buồn hơn.jpg",
        url: './src/audio/Anh ghét mình vì còn nhớ em của Vinh Khuất nhưng buồn hơn.mp3'
    }
    ,
    {
        id: '8',
        songName: `Tiếp đất`,
        artist: `Low G`,
        poster: "./src/song-poster/Tiếp đất.jpg",
        url: './src/audio/Tiếp đất.mp3'
    }
]

console.log(128);


function uploadSubmit() {
    if(!document.getElementById('get-song-name').value){
        alert('Song name is blank!')
        return
    }
    if(!document.getElementById('get-artist-name').value){
        alert('Artist is blank!')
        return
    }
    var String1 = document.getElementById('get-poster').value
    var String1s = String1.slice(String1.length - 4)
    console.log(String1)
    if(String1s != '.jpg'){
        alert('Poster is not valid!')
        console.log(String1s)
        return
    }
    var String2 = document.getElementById('get-song').value
    var String2s = String2.slice(String2.length - 4)
    console.log(String2)
    if(String2s != '.mp3'){
        alert('Song is not valid!')
        console.log(String2s)
        return
    }
    alert('upload Successfully')
}

console.log(158);


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
                        <img class="img" src="${value.poster}" id="${value.id}" alt="">
                        <i class="playListPlay" ></i>
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
let listSong2 = document.querySelector('.item-song-2');
function render2() {
    console.log("render2");
    let ListSongs = songs.map((value, index) => {
        if (value.artist == "Low G") {
            return (
                `
            <li class="song-items">
                <div class="img-play">
                    <div class="img-part">
                        <img class="img" src="${value.poster}" id="${value.id}" alt="">
                        <i class="playListPlay" ></i>
                    </div>
                    <div class="title song-name">${value.songName}</div>
                    <div class="title artist">${value.artist}</div>
                </div>
            </li>
            `
            )
        }
    })
    listSong2.innerHTML += ListSongs.join("")
}
render2();





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

// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('song')).forEach((element) => {
//         element.classList.add('fa-circle-play');
//         element.classList.remove('fa-circle-pause');
//     })
// }

let index = 0;

Array.from(document.getElementsByClassName('img')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id
        console.log(143, index);
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id == index) {
                console.log(songs[i].songName)
                music.src = songs[i].url;
                music.play();
                masterPlay.classList.remove('fa-play')
                masterPlay.classList.add('fa-pause')

                document.getElementById('song-name').innerHTML = songs[i].songName
                document.getElementById('artist').innerHTML = songs[i].artist
                document.getElementById('poster').setAttribute('src', songs[i].poster)

            }
        }
        // makeAllPlays();
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');


    })
})

let playingSongName = document.querySelector('.song-name');
let playingSongArtist = document.querySelector('.artist');



// function PlaySong(songName) {
//     // console.log(songName)
//     // for(var i = 0; i < songs.length; i++){
//     //     if(song)
//     // }
//     music.src = `./src/audio/${songName}.mp3`;
//     music.play();
//     masterPlay.classList.remove('fa-play')
//     masterPlay.classList.add('fa-pause')
// }

let currentStart = document.getElementById('current-start')
let songLength = document.getElementById('song-length')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60)
    let sec = Math.floor(music_dur % 60)
    if (sec < 10) {
        sec = `0${sec}`
    }
    songLength.innerText = `${min}:${sec}`

    let min1 = Math.floor(music_curr / 60)
    let sec1 = Math.floor(music_curr % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`

    let progressBar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('fa-play')
    masterPlay.classList.remove('fa-pause')
    index += 1;
    if (index > Array.from(document.getElementsByClassName('song-items')).length) {
        index = 1
    }
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == index) {
            console.log(songs[i].songName)
            music.src = `./src/audio/${songs[i].songName}.mp3`;
            music.play();
            masterPlay.classList.remove('fa-play')
            masterPlay.classList.add('fa-pause')
            document.getElementById('song-name').innerHTML = songs[i].songName
            document.getElementById('artist').innerHTML = songs[i].artist
            document.getElementById('poster').setAttribute('src', songs[i].poster)
        }
    }
    // makeAllPlays();
    // document.getElementById(`${index}`).classList.remove('fa-circle-play');
    // document.getElementById(`${index}`).classList.add('fa-circle-pause');
})

let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol-bar');
let vol_dot = document.getElementsByClassName('vol-dot')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high')
        vol_icon.classList.remove('fa-volume-low')
        vol_icon.classList.remove('fa-volume-off')
        vol_icon.classList.add('fa-volume-xmark')
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high')
        vol_icon.classList.remove('fa-volume-low')
        vol_icon.classList.add('fa-volume-off')
        vol_icon.classList.remove('fa-volume-xmark')
    }
    if (vol.value > 20) {
        vol_icon.classList.remove('fa-volume-high')
        vol_icon.classList.add('fa-volume-low')
        vol_icon.classList.remove('fa-volume-off')
        vol_icon.classList.remove('fa-volume-xmark')
    }
    if (vol.value > 60) {
        vol_icon.classList.add('fa-volume-high')
        vol_icon.classList.remove('fa-volume-low')
        vol_icon.classList.remove('fa-volume-off')
        vol_icon.classList.remove('fa-volume-xmark')
    }

    let vol_a = vol.value
    vol_bar.style.width = `${vol_a}%}`;
    vol_dot.style.left = `${vol_a}%}`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('backward-song')
let next = document.getElementById('forward-song')

back.addEventListener('click', () => {
    console.log('previous song')
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song-items')).length
    }
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == index) {
            console.log(songs[i].songName)
            music.src = songs[i].url;
            music.play();
            masterPlay.classList.remove('fa-play')
            masterPlay.classList.add('fa-pause')
            document.getElementById('song-name').innerHTML = songs[i].songName
            document.getElementById('artist').innerHTML = songs[i].artist
            document.getElementById('poster').setAttribute('src', songs[i].poster)
        }
    }
    // makeAllPlays();
    // document.getElementById(`${index}`).classList.remove('fa-circle-play');
    // document.getElementById(`${index}`).classList.add('fa-circle-pause');


})

next.addEventListener('click', () => {
    console.log('next song')
    index += 1;
    if (index > Array.from(document.getElementsByClassName('song-items')).length) {
        index = 1
    }
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == index) {
            console.log(songs[i].songName)
            music.src = songs[i].url;
            music.play();
            masterPlay.classList.remove('fa-play')
            masterPlay.classList.add('fa-pause')
            document.getElementById('song-name').innerHTML = songs[i].songName
            document.getElementById('artist').innerHTML = songs[i].artist
            document.getElementById('poster').setAttribute('src', songs[i].poster)
        }
    }
    // makeAllPlays();
    // document.getElementById(`${index}`).classList.remove('fa-circle-play');
    // document.getElementById(`${index}`).classList.add('fa-circle-pause');
})

var homeBtn = document.getElementById('home-btn')
var searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', () => {
    document.querySelector('.song-part').setAttribute('style', 'visibility: hidden;')
    document.querySelector('.search-part').setAttribute('style', 'visibility: visible;')
    document.getElementById('home-btn').classList.remove('active')
    document.getElementById('search-btn').classList.add('active')
})
homeBtn.addEventListener('click', () => {
    document.querySelector('.song-part').setAttribute('style', 'visibility: visible;')
    document.querySelector('.search-part').setAttribute('style', 'visibility: hidden;')
    document.getElementById('home-btn').classList.add('active')
    document.getElementById('search-btn').classList.remove('active')
})

var prfPicOptBtn = document.querySelector('.prf-pic');
var optionBar = document.querySelector('.option-bar');
let optionBarIsOn = false;

prfPicOptBtn.addEventListener('click', ()=>{
    if(optionBarIsOn == false){
        optionBarIsOn = true
        optionBar.setAttribute("style", "visibility: visible;");
    }else{
        optionBarIsOn = false
        optionBar.setAttribute("style", "visibility: hidden;");
    }
})

// prfPicOptBtn.onclick = function () {
//     if(optionBarIsOn == false){
//         optionBarIsOn = true
//         optionBar.setAttribute("style", "visibility: visible;");
//     }else{
//         optionBarIsOn = false
//         optionBar.setAttribute("style", "visibility: hidden;");
//     }
// }