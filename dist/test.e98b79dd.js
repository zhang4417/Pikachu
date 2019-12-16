// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
//import string from './css.js'
var string = "*{box-sizing: border-box;padding: 0;margin: 0;}\nul,ol{list-style:none;}\nskin*::before,skin*::after{box-sizing:border-box}\n\n.skin{\n    position:relative;\n    background:#ffe600;\n    min-height:50vh;\n}\n\n.nose{\n    background:black;\n    width:20px;\n    height:10px;\n    position:absolute;\n    top:85px;\n    left:50%;\n    margin-left:-10px;\n    border-radius:20px/10px;\n    z-index:9\n}\n.nose .nose-tip{\n    border:10px solid ;\n    border-color:black transparent transparent;\n    position:absolute;\n    width:0;\n    height:0;\n    top:5px;\n}\n@keyframes wave {\n    0% { -webkit-transform:rotate(0deg); }\n    33% { -webkit-transform:rotate(-15deg); }\n    66% { -webkit-transform:rotate(15deg); }\n    100% { -webkit-transform:rotate(0deg); }\n}\n.nose:hover{\n    transform-origin:50% 100%;\n    animation: wave 300ms infinite linear;\n}\n.eye{\n    position:absolute;\n    border:3px solid black;\n    width:50px;\n    height:50px;\n    top:70px;\n    left:50%;\n    margin-left:-25px;\n    border-radius:50%;\n    background:#2e2e2e;\n}\n.eye::before{\n    content:\"\";\n    display:block;\n    width:20px;\n    height:20px;\n    border:3px solid black;\n    border-radius:50%;\n    background:#ffffff;\n    margin-left:3px;\n}\n.eye.left{\n    transform: translateX(-100px)\n}\n.eye.right{\n    transform:translateX(+100px)\n}\n.mouth{\n    position:relative;\n    width:180px;\n    height:180px;\n    left:50%;\n    margin-left:-90px;\n    top:130px;\n    overflow:hidden;\n}\n.mouth>.upperLip{\n    border:3px solid black;\n    position:absolute;\n    width:90px;\n    height:60px;\n    left:50%;\n    margin-left:-45px;\n    top:-30px;\n    background:#ffe600;\n    border-radius:0 0 0  80px/30px;\n    border-color:transparent transparent black black;\n    z-index:1;\n}\n.mouth>.upperLip::before{\n    content:\"\";\n    display:block;\n    border:none;\n    width:6px; height:30px;\n    background:#ffe600;\n    position:absolute;\n    left:-3px;\n    top:-3px;\n}\n.mouth>.upperLip.left{\n    transform: translateX(-51px) rotate(-30deg);\n}\n.mouth>.upperLip.right{\n    transform: translateX(51px) rotate(30deg) rotateY(180deg) ;\n}\n\n\n.mouth .downLip{\n    border:3px solid black;\n    position:absolute;\n    width:140px;\n    height:500px;\n    bottom:0;\n    margin-left:20px;\n    border-radius:70px/250px ;\n    background:#9b000a;\n    overflow:hidden;\n\n}\n.mouth .downLip .tongue{\n    position:absolute;\n    width:120px;\n    height:600px;\n    margin-left:10px;\n    top:360px;\n    border-radius:500px/400px;\n    background:#ff485f;\n}\n .face{\n    border: 2px solid black;\n    position:absolute;\n    width:88px;\n    height:88px;\n    left:50%;\n    margin-left:-44px;\n    border-radius:50%;\n    background:#ff0000;\n}\n.face.left{\n    transform:translateX(-150px)\n}\n.face.right{\n    transform:translateX(150px)\n}\n/*\u6478\u6211\u9F3B\u5B50*/\n";
var player = {
  n: 1,
  time: 100,
  interval: undefined,
  init: function init() {
    btnPlay.onclick = player.play, btnPause.onclick = player.pause, btnSlow.onclick = player.slow, btnMedium.onclick = player.medium, btnFast.onclick = player.fast;
  },
  run: function run() {
    player.n += 1;
    console.log(player.n);

    if (player.n > string.length) {
      clearInterval(player.interval);
    }

    topHalf.innerText = string.substring(0, player.n);
    amt.innerHTML = string.substring(0, player.n);
    topHalf.scrollTop = topHalf.scrollHeight;
  },
  play: function play() {
    player.interval = setInterval(player.run, player.time);
  },
  pause: function pause() {
    clearInterval(player.interval);
  },
  slow: function slow() {
    player.time = 300;
    player.pause();
    player.play();
  },
  medium: function medium() {
    player.time = 100;
    player.pause();
    player.play();
  },
  fast: function fast() {
    player.time = 0;
    player.pause();
    player.play();
  }
};
player.play();
player.init();
},{}],"C:/Users/admin/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52888" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/admin/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map