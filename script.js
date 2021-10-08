let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [{
		name: "Behzad leito",
		path: "song/song1.mp3",
		img: "img/img1.jpg",
		singer: "Alaki"
	},
	{
		name: "Behzad leito",
		path: "song/song2.mp3",
		img: "img/img2.jpg",
		singer: "Mamacita"
	},
	{
		name: "Behzad leito",
		path: "song/song3.mp3",
		img: "img/img3.jpg",
		singer: "Miam Bala Saret"
	},
	{
		name: "Behzad leito",
		path: "song/song4.mp3",
		img: "img/img4.jpg",
		singer: "Too In Shahr"
	},
	{
		name: "Behzad leito",
		path: "song/song5.mp3",
		img: "img/img5.jpg",
		singer: "Naab"
	},
	{
		name: "leito(jj,sijal)",
		path: "song/song6.mp3",
		img: "img/img6.jpg",
		singer: "Tehran Zoola"
	},
	{
		name: "leito(jj,sijal)",
		path: "song/song7.mp3",
		img: "img/img7.jpg",
		singer: "Betecoon"
	},
	{
		name: "khalse(Ardavan)",
		path: "song/song8.mp3",
		img: "img/img8.jpg",
		singer: "Ghalb Banfsh"
	},
	{
		name: "Ali sowlo",
		path: "song/song9.mp3",
		img: "img/img6.jpg",
		singer: "Bede bre"
	},
	{
		name: "Alirza jj",
		path: "song/song10.mp3",
		img: "img/img10.jpg",
		singer: "Khaak"
	},
	{
		name: "Shayeh",
		path: "song/song11.mp3",
		img: "img/img11.jpg",
		singer: "Injaneb"
	},
	{
		name: "HamidSefat",
		path: "song/song12.mp3",
		img: "img/img12.jpg",
		singer: "Ajayeb Shahr"
	},
	{
		name: "ShamaeiZadeh",
		path: "song/song13.mp3",
		img: "img/img13.jpg",
		singer: "Golbarg"
	},
	{
		name: "SerjTankian",
		path: "song/song14.mp3",
		img: "img/img14.jpg",
		singer: "Deafening Silence"
	},
	{
		name: "AmirKhalvat",
		path: "song/song15.mp3",
		img: "img/img15.jpg",
		singer: "ArbabShahr"
	},
	{
		name: "Fadaei",
		path: "song/song16.mp3",
		img: "img/img16.jpg",
		singer: "az-karah-ta-langrood"
	},
	{
		name: "Mellen",
		path: "song/song17.mp3",
		img: "img/img17.jpg",
		singer: "Profitt-In-the-end"
	},
	{
		name: "Yas",
		path: "song/song18.mp3",
		img: "img/img18.jpg",
		singer: "Agah"
	},
	{
		name: "Yas",
		path: "song/song19.mp3",
		img: "img/img19.jpg",
		singer: "Lal"
	},
	{
		name: "Yas",
		path: "song/song20.mp3",
		img: "img/img20.jpg",
		singer: "Sarkoob"
	},
	{
		name: "kaos_itibar",
		path: "song/song21.mp3",
		img: "img/img21.jpg",
		singer: "Song"
	},
	{
		name: "Epiqure",
		path: "song/song22.mp3",
		img: "img/img22.jpg",
		singer: "BabaKaram"
	},
	{
		name: "Epiqure",
		path: "song/song23.mp3",
		img: "img/img23.jpg",
		singer: "Bia Vasat"
	},
	{
		name: "Hans Zimer",
		path: "song/song24.mp3",
		img: "img/img24.jpg",
		singer: "S.T.A.Y"
	},
	{
		name: "Arash",
		path: "song/song25.mp3",
		img: "img/img25.jpg",
		singer: "Lavandia"
	},
];


// All functions


// function load the track
function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML = All_song[index_no].singer;
	track.load();

	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


// reset song slider
function reset_slider() {
	slider.value = 0;
}

// play song
function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song() {
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();

	} else {
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}


function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}


	// function will run when the song is over
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		if (autoplay == 1) {
			index_no += 1;
			load_track(index_no);
			playsong();
		}
	}
}