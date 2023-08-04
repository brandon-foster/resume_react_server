import notesSquare from '../../img/notes-square.png';
import puzzlesolverSquare from '../../img/puzzle-solver-square.png';
import orange from '../../img/orange.png';
import pink from '../../img/pink.png';
import green from '../../img/green.png';

function createTileData({ url, imgSrc, h4, line1, line2, repoUrl, uiUrl, serviceUrl, coreUrl }) {
  return {
    url: url,
    imgSrc: imgSrc,
    h4: h4,
    line1: line1,
    line2: line2,
    repoUrl: repoUrl,
    uiUrl: uiUrl,
    serviceUrl: serviceUrl,
    coreUrl: coreUrl,
  };
}
const orangeTileData = createTileData({
  url: 'http://notes.localhost:4480/notes',
  imgSrc: orange,
  h4: 'Notes',
  line1: 'A place for notes.',
  line2: 'Pure PHP, plus a Markdown library. MySQL. Dockerized.',
  repoUrl: 'https://joyldp.com/gogs/brandon/notes',
});
const pinkTileData = createTileData({
  url: '/puzzlesolver-frontend/',
  imgSrc: pink,
  h4: 'Puzzle Solver',
  line1: 'Java 15-puzzle solver.',
  line2: 'Pure JavaScript ES6, HTML, and CSS front end.',
  uiUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-frontend',
  serviceUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-api-spring-boot',
  coreUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md',
});
const greenTileData = createTileData({
  url: '#',
  imgSrc: green,
  h4: 'Hangman',
  line1: 'Hangman',
  line2: 'JavaScript/ES6. Spring Boot for Persistence.',
  repoUrl: '#',
});
const notesTileData = createTileData({
  url: 'http://notes.localhost:4480/notes',
  imgSrc: notesSquare,
  h4: 'Notes',
  line1: 'A place for notes.',
  line2: 'Pure PHP, plus a Markdown library. MySQL. Dockerized.',
  repoUrl: 'https://joyldp.com/gogs/brandon/notes',
});
const puzzleSolverTileData = createTileData({
  url: '/puzzlesolver-frontend/',
  imgSrc: puzzlesolverSquare,
  h4: 'Puzzle Solver',
  line1: 'Java 15-puzzle solver.',
  line2: 'Pure JavaScript ES6, HTML, and CSS front end.',
  uiUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-frontend',
  serviceUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-api-spring-boot',
  coreUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md',
});
const hangmanTileData = createTileData({
  url: '#',
  imgSrc: notesSquare,
  h4: 'Hangman',
  line1: 'Hangman',
  line2: 'JavaScript/ES6. Spring Boot for Persistence.',
  repoUrl: '#',
});

export { orangeTileData, pinkTileData, greenTileData, notesTileData, puzzleSolverTileData, hangmanTileData };
