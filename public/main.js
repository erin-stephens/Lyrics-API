// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

/* const renderToDom = (divId, htmlToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToPrint;
}; */

// API Call
const getLyrics = (artist, title) => new Promise((resolve, reject) => {
  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const lyricsOnDom = (artist, title) => {
  getLyrics(artist, title).then((response) => {
    // console.warn(response);
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

const startApp = () => {
  lyricsOnDom('lizzo', 'tempo');
};

startApp();
