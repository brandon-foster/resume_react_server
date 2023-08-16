import notesSquare from '../../img/notes-square.png';
import puzzlesolverSquare from '../../img/puzzle-solver-square.png';
import orange from '../../img/orange.png';
import pink from '../../img/pink.png';
import green from '../../img/green.png';
import { tags } from './tags';

function createTileData({ url, imgSrc, h4, line1, line2, repoUrl, uiUrl, serviceUrl, coreUrl, tags, doDisplay }) {
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
    tags: tags || [],
    doDisplay: doDisplay,
  };
}
const orangeTileData = createTileData({
  url: 'http://notes.localhost:4480/notes',
  imgSrc: orange,
  h4: 'Orange',
  line1: 'A place for notes.',
  line2: 'Pure PHP, plus a Markdown library. MySQL. Dockerized.',
  repoUrl: 'https://joyldp.com/gogs/brandon/notes',
  tags: [tags.php, tags.composer, tags.apacheHttpd, tags.mysql],
  doDisplay: true,
});
const pinkTileData = createTileData({
  url: '/puzzlesolver-frontend/',
  imgSrc: pink,
  h4: 'Pink',
  line1: 'Java 15-puzzle solver.',
  line2: 'Pure JavaScript ES6, HTML, and CSS front end.',
  uiUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-frontend',
  serviceUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-api-spring-boot',
  coreUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md',
  tags: [tags.java, tags.utility, tags.python],
  doDisplay: true,
});
const greenTileData = createTileData({
  url: '#',
  imgSrc: green,
  h4: 'Green',
  line1: 'Hangman',
  line2: 'JavaScript/ES6. Spring Boot for Persistence.',
  repoUrl: '#',
  tags: [tags.node, tags.react, tags.javascript, tags.mysql],
  doDisplay: true,
});
const notesTileData = createTileData({
  url: 'http://notes.localhost:4480/notes',
  imgSrc: notesSquare,
  h4: 'Notes',
  line1: 'A place for notes.',
  line2: 'Pure PHP, plus a Markdown library. MySQL. Dockerized.',
  repoUrl: 'https://joyldp.com/gogs/brandon/notes',
  tags: [tags.node, tags.react, tags.javascript],
  doDisplay: true,
});
const puzzleSolverTileData = createTileData({
  url: '/puzzlesolver/',
  imgSrc: puzzlesolverSquare,
  h4: 'Puzzle Solver',
  line1: 'Java 15-puzzle solver.',
  line2: 'Pure JavaScript ES6, HTML, and CSS front end.',
  uiUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-frontend',
  serviceUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-api-spring-boot',
  coreUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md',
  tags: [tags.java, tags.springBoot, tags.javascript],
  doDisplay: true,
});
const hangmanTileData = createTileData({
  url: '#',
  imgSrc: notesSquare,
  h4: 'Hangman',
  line1: 'Hangman',
  line2: 'JavaScript/ES6. Spring Boot for Persistence.',
  repoUrl: '#',
  tags: [tags.java, tags.react, tags.javascript],
  doDisplay: true,
});

export { orangeTileData, pinkTileData, greenTileData, notesTileData, puzzleSolverTileData, hangmanTileData };
