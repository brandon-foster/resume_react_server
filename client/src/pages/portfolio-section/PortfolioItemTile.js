export const PortfolioItemTile = ({ tileProps, isActive, tagStateMachine }) => {
  const { url, imgSrc, h4, line1, line2, repoUrl, uiUrl, serviceUrl, coreUrl, tags } = tileProps;
  function provideActiveTags() {
    const arr = [];
    for (let [key, value] of Object.entries(tagStateMachine)) {
      if (value.active === true) {
        arr.push(value);
      }
    }
    return arr;
  }
  function containsAnActiveTag() {
    const activeTags = provideActiveTags();
    let containsAnActiveTag = false;
    for (const activeTag of activeTags) {
      for (const tag of tags) {
        if (tag.name === activeTag.name) {
          containsAnActiveTag = true;
        }
      }
    }
    return containsAnActiveTag;
  }
  return (
    <div className={`col ${!containsAnActiveTag() && 'd-none'}`}>
      <div className="card shadow-sm bg-secondary text-white">
        <a href={url} target="_blank">
          <img src={imgSrc} className="bd-placeholder-img card-img-top" width="225" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
        </a>
        <div className="card-body">
          <h4 className="card-text">{h4}</h4>
          <h5 className="card-text">{tags.map((t, i) => <span className='mx-1' key={`tag${i}`}>{t.name}</span>)}</h5>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <small className="text-light">{line1}</small>
            <small className="text-light">{line2}</small>
          </div>
          {
            repoUrl &&
            <a href={repoUrl} target="_blank" className="btn btn-sm btn-outline-light mt-3">repo&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </a>}
          {
            uiUrl &&
            <a href={uiUrl} target="_blank" className="btn btn-sm btn-outline-light mt-3">ui&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </a>
          }
          {
            serviceUrl &&
            <a href={serviceUrl} target="_blank" className="btn btn-sm btn-outline-light mt-3">service&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </a>
          }
          {
            coreUrl &&
            <a href="https://joyldp.com/gogs/brandon/puzzlesolver-lib/src/master/README.md" target="_blank" className="btn btn-sm btn-outline-light mt-3">core&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </a>
          }
        </div>
      </div>
    </div>
  );
};
