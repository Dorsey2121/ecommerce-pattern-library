(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {};

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const correctHrefPaths = function (html) {
    const hrefSearch = /href\s*=\s*"\.\.\/\.\.\//g;
    const srcSearch = /src\s*=\s*"\.\.\/\.\.\//g;
    const urlSearch = /url\((["']*)\.\.\/\.\.\//g;

    return html
      .replace(hrefSearch, 'href="../')
      .replace(srcSearch, 'src="../')
      .replace(urlSearch, 'url($1../')
    ;
  };

  const buildAccurateSelectorFromElem = function (elem) {
    let theSelector = elem.tagName.toLowerCase();

    if (elem.id) theSelector += `#${elem.id}`;
    if (elem.getAttribute('role')) theSelector += `[role="${elem.getAttribute('role')}"]`;
    if (elem.classList.length > 0) theSelector += `.${[].join.call(elem.classList, '.')}`;

    theSelector += ':first-of-type';

    return theSelector;
  };

  /**
   * This is an ugly mess: Blink does not properly render SVGs when using DOMParser alone.
   * But, I need DOMParser to determine the correct element to extract.
   *
   * I only want to get the first element within the `<body>` tag of the loaded document.
   * This dumps the whole, messy, HTML document into a temporary `<div>`,
   * then uses the DOMParser version, of the same element, to create an accurate selector,
   * then finds that single element in the temporary `<div>` using the selector and returns it.
   */
  const htmlStringToElem = function (html) {
    let theSelector = '';
    const tmpDoc = document.createElement('div');
    const finalTmpDoc = document.createElement('div');
    const doc = (new DOMParser()).parseFromString(html, 'text/html');

    tmpDoc.innerHTML = html;
    theSelector = buildAccurateSelectorFromElem(doc.body.firstElementChild);
    finalTmpDoc.appendChild(tmpDoc.querySelector(theSelector));

    return finalTmpDoc;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(correctHrefPaths(patternDetails.html));
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    let allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot location pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls
 * @version 1523539208320
 */
const patternManifest_1523539208320 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 4,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 4,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 4,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,4,25,0,0;m,4,38,1,1;l,4,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.067
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.125
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.125
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.125
      }
    ],
    "typografierUrl": "0,100,1.3,1.067,0;38,110,1.4,1.125,1;60,120,1.5,1.125,1;90,130,1.5,1.125,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#231f20",
            "hex": "#231f20",
            "rgba": "rgba(35, 31, 32, 1)"
          },
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#333232",
            "hex": "#333232",
            "rgba": "rgba(51, 50, 50, 1)"
          },
          {
            "name": "--color-primary-dark",
            "namePretty": "Primary dark",
            "raw": "#000",
            "hex": "#000",
            "rgba": "rgba(0, 0, 0, 1)"
          }
        ],
        "secondary": [
          {
            "name": "--color-secondary",
            "namePretty": "Secondary",
            "raw": "#d6d7d7",
            "hex": "#d6d7d7",
            "rgba": "rgba(214, 215, 215, 1)"
          },
          {
            "name": "--color-secondary-dark",
            "namePretty": "Secondary dark",
            "raw": "#bababa",
            "hex": "#bababa",
            "rgba": "rgba(186, 186, 186, 1)"
          },
          {
            "name": "--color-secondary-light",
            "namePretty": "Secondary light",
            "raw": "#fafafa",
            "hex": "#fafafa",
            "rgba": "rgba(250, 250, 250, 1)"
          }
        ],
        "neutral": [],
        "accent": []
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Pt Serif",
          "raw": "\"PT serif\", serif",
          "weights": {
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "secondary": {
          "name": "--font-secondary",
          "namePretty": "Pt Sans",
          "raw": "\"PT Sans\", sans-serif",
          "weights": {
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "accent": []
      },
      "coloursRaw": {
        "--color-primary": "#231f20",
        "--color-primary-light": "#333232",
        "--color-primary-dark": "#000",
        "--color-secondary": "#d6d7d7",
        "--color-secondary-dark": "#bababa",
        "--color-secondary-light": "#fafafa"
      },
      "fontsRaw": {
        "--font-primary": "\"PT serif\", serif",
        "--font-secondary": "\"PT Sans\", sans-serif"
      }
    },
    "readme": {
      "attributes": {
        "name": "Prosports Training",
        "fonturl": "https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i|Merriweather:300,300i,400,400i,700,700i,900,900i",
        "fontUrl": "https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i|Merriweather:300,300i,400,400i,700,700i,900,900i",
        "backgroundColour": "#fff",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      },
      "bodyRaw": "Prosports Training is a hockey training facility that specializes in training younger athletes.\n",
      "bodyBasic": "Prosports Training is a hockey training facility that specializes in training younger athletes."
    },
    "icons": [
      "twitter",
      "programs",
      "personnel",
      "instagram",
      "facility",
      "facebook",
      "clothing",
      "cart"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/common/grid.css",
      "typografier": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/common/type.css",
      "modulifier": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/common/modules.css",
      "theme": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/images/logo.svg",
      "size64": false,
      "size32": false,
      "size16": false,
      "sizeLargeLocal": "logo.svg"
    },
    "patterns": [
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners",
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/buttons",
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards",
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/footer",
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms",
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/header",
      "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/video"
    ],
    "pages": [
      {
        "name": "checkout.html",
        "namePretty": "Checkout",
        "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/pages/checkout.html"
      },
      {
        "name": "clothing.html",
        "namePretty": "Clothing",
        "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/pages/clothing.html"
      },
      {
        "name": "home.html",
        "namePretty": "Home",
        "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/pages/home.html"
      },
      {
        "name": "product-details.html",
        "namePretty": "Product details",
        "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/pages/product-details.html"
      }
    ]
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners",
      "html": [
        {
          "name": "call-to-action-banners",
          "namePretty": "Call to action banners",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/call-to-action-banners.html",
          "localPath": "patterns/banners/call-to-action-banners.html",
          "readme": {}
        },
        {
          "name": "checkout-banner",
          "namePretty": "Checkout banner",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/checkout-banner.html",
          "localPath": "patterns/banners/checkout-banner.html",
          "readme": {}
        },
        {
          "name": "details-page-banner",
          "namePretty": "Details page banner",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/details-page-banner.html",
          "localPath": "patterns/banners/details-page-banner.html",
          "readme": {}
        },
        {
          "name": "intro-banner",
          "namePretty": "Intro banner",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/intro-banner.html",
          "localPath": "patterns/banners/intro-banner.html",
          "readme": {}
        },
        {
          "name": "no-btn-banner",
          "namePretty": "No btn banner",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/no-btn-banner.html",
          "localPath": "patterns/banners/no-btn-banner.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/README.md",
          "localPath": "patterns/banners/README.md"
        }
      ],
      "css": [
        {
          "name": "banners",
          "namePretty": "Banners",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/banners/banners.css",
          "localPath": "patterns/banners/banners.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/buttons",
      "html": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/buttons/buttons.html",
          "localPath": "patterns/buttons/buttons.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards",
      "html": [
        {
          "name": "checkout-card",
          "namePretty": "Checkout card",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards/checkout-card.html",
          "localPath": "patterns/cards/checkout-card.html",
          "readme": {}
        },
        {
          "name": "icon-card",
          "namePretty": "Icon card",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards/icon-card.html",
          "localPath": "patterns/cards/icon-card.html",
          "readme": {}
        },
        {
          "name": "preview-card",
          "namePretty": "Preview card",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards/preview-card.html",
          "localPath": "patterns/cards/preview-card.html",
          "readme": {}
        },
        {
          "name": "product-card",
          "namePretty": "Product card",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards/product-card.html",
          "localPath": "patterns/cards/product-card.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "footer",
      "namePretty": "Footer",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/footer",
      "html": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/footer/footer.html",
          "localPath": "patterns/footer/footer.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/footer/README.md",
          "localPath": "patterns/footer/README.md"
        }
      ],
      "css": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/footer/footer.css",
          "localPath": "patterns/footer/footer.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms",
      "html": [
        {
          "name": "checkbox",
          "namePretty": "Checkbox",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/checkbox.html",
          "localPath": "patterns/forms/checkbox.html",
          "readme": {}
        },
        {
          "name": "numbers",
          "namePretty": "Numbers",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/numbers.html",
          "localPath": "patterns/forms/numbers.html",
          "readme": {}
        },
        {
          "name": "password",
          "namePretty": "Password",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/password.html",
          "localPath": "patterns/forms/password.html"
        },
        {
          "name": "radio-check",
          "namePretty": "Radio check",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/radio-check.html",
          "localPath": "patterns/forms/radio-check.html"
        },
        {
          "name": "select",
          "namePretty": "Select",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/select.html",
          "localPath": "patterns/forms/select.html",
          "readme": {}
        },
        {
          "name": "text-area",
          "namePretty": "Text area",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/text-area.html",
          "localPath": "patterns/forms/text-area.html",
          "readme": {}
        },
        {
          "name": "text",
          "namePretty": "Text",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/text.html",
          "localPath": "patterns/forms/text.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/README.md",
          "localPath": "patterns/forms/README.md"
        }
      ],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        }
      ]
    },
    {
      "name": "header",
      "namePretty": "Header",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/header",
      "html": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/header/header.html",
          "localPath": "patterns/header/header.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/header/README.md",
          "localPath": "patterns/header/README.md"
        }
      ],
      "css": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/header/header.css",
          "localPath": "patterns/header/header.css"
        }
      ]
    },
    {
      "name": "video",
      "namePretty": "Video",
      "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/video",
      "html": [
        {
          "name": "amanda",
          "namePretty": "Amanda",
          "path": "/Users/thegermandutchman/Desktop/Semester 4/Web Dev 4/ecommerce-pattern-library-pauls/patterns/video/amanda.html",
          "localPath": "patterns/video/amanda.html"
        }
      ],
      "md": [],
      "css": []
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1523539208320);
}());