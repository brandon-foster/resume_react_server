import notesSquare from '../../img/notes-square.png';
import puzzlesolverSquare from '../../img/puzzle-solver-square.png';
import keyboardSquare from '../../img/keyboard-square.png';
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
const notesTileData = createTileData({
  url: '/notes/',
  imgSrc: notesSquare,
  h4: 'Notes',
  line1: 'A place for notes.',
  line2: 'Pure PHP, plus a Markdown library. MySQL. Dockerized.',
  repoUrl: 'https://joyldp.com/gogs/brandon/notes',
  tags: [tags.node, tags.react],
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
  tags: [tags.java],
  doDisplay: true,
});
const keyboardTileData = createTileData({
  url: '/keyboard/',
  imgSrc: keyboardSquare,
  h4: 'Keyboard',
  line1: 'A place to practice typing.',
  line2: 'Track your typing.',
  uiUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-frontend',
  serviceUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-api-spring-boot',
  coreUrl: 'https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md',
  tags: [tags.java, tags.react],
  doDisplay: true,
});

export { notesTileData, puzzleSolverTileData, keyboardTileData };
