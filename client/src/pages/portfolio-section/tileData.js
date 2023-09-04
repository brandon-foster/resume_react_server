import notesSquare from '../../img/notes-square.png';
import puzzlesolverSquare from '../../img/puzzle-solver-square.png';
import keyboardSquare from '../../img/keyboard-square.png';
import urlAppImg from '../../img/url-app-img.png';
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
  repoUrl: 'https://bitbucket.org/brandon-foster/note_app/src/master/',
  tags: [tags.node, tags.react],
  doDisplay: true,
});
const puzzleSolverTileData = createTileData({
  url: '/puzzlesolver/',
  imgSrc: puzzlesolverSquare,
  h4: 'Puzzle Solver',
  line1: 'Java 15-puzzle solver.',
  line2: 'Pure JavaScript ES6, HTML, and CSS front end.',
  uiUrl: 'https://bitbucket.org/brandon-foster/puzzlesolver-frontend/src/main/',
  serviceUrl: 'https://bitbucket.org/brandon-foster/puzzlesolver-api-spring-boot/src/master/',
  coreUrl: 'https://bitbucket.org/brandon-foster/puzzlesolver/src/master/',
  tags: [tags.java],
  doDisplay: true,
});
const keyboardTileData = createTileData({
  url: '/keyboard/',
  imgSrc: keyboardSquare,
  h4: 'Keyboard',
  line1: 'A place to type.',
  line2: 'Stay and relax.',
  uiUrl: 'https://bitbucket.org/brandon-foster/keyboard_ui/src/master/',
  tags: [tags.java, tags.react],
  doDisplay: true,
});
const urlAppTileData = createTileData({
  url: '/su/',
  imgSrc: urlAppImg,
  h4: 'Short URL',
  line1: 'Generate a short code for any URL.',
  line2: 'Shorten long URLs.',
  serviceUrl: 'https://bitbucket.org/brandon-foster/url_service/src/master/',
  uiUrl: 'https://bitbucket.org/brandon-foster/url_ui/src/master/',
  tags: [tags.java, tags.react],
  doDisplay: true,
});

export { notesTileData, puzzleSolverTileData, keyboardTileData, urlAppTileData };
