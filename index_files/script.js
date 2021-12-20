window["sntchChat"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2018 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.7.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

Async.prototype.invokeLater = AsyncInvokeLater;
Async.prototype.invoke = AsyncInvoke;
Async.prototype.settlePromises = AsyncSettlePromises;


function _drainQueue(queue) {
    while (queue.length() > 0) {
        _drainQueueStep(queue);
    }
}

function _drainQueueStep(queue) {
    var fn = queue.shift();
    if (typeof fn !== "function") {
        fn._settlePromises();
    } else {
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
}

Async.prototype._drainQueues = function () {
    _drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    _drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) { var getCompiled, makeGetter, makeMethodCaller; }

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) { var maybeCaller; }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context,
    enableAsyncHooks, disableAsyncHooks) {
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var es5 = _dereq_("./es5");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        ( true ||
                         false));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

var deferUnhandledRejectionCheck;
(function() {
    var promises = [];

    function unhandledRejectionCheck() {
        for (var i = 0; i < promises.length; ++i) {
            promises[i]._notifyUnhandledRejection();
        }
        unhandledRejectionClear();
    }

    function unhandledRejectionClear() {
        promises.length = 0;
    }

    if (typeof document === "object" && document.createElement) {
        deferUnhandledRejectionCheck = (function() {
            var iframeSetTimeout;

            function checkIframe() {
                if (document.body) {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    if (iframe.contentWindow &&
                        iframe.contentWindow.setTimeout) {
                        iframeSetTimeout = iframe.contentWindow.setTimeout;
                    }
                    document.body.removeChild(iframe);
                }
            }
            checkIframe();
            return function(promise) {
                promises.push(promise);
                if (iframeSetTimeout) {
                    iframeSetTimeout(unhandledRejectionCheck, 1);
                } else {
                    checkIframe();
                }
            };
        })();
    } else {
        deferUnhandledRejectionCheck = function(promise) {
            promises.push(promise);
            setTimeout(unhandledRejectionCheck, 1);
        };
    }

    es5.defineProperty(Promise, "_unhandledRejectionCheck", {
        value: unhandledRejectionCheck
    });
    es5.defineProperty(Promise, "_unhandledRejectionClear", {
        value: unhandledRejectionClear
    });
})();

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    deferUnhandledRejectionCheck(this);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var context = Promise._getContext();
    possiblyUnhandledRejection = util.contextBind(context, fn);
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var context = Promise._getContext();
    unhandledRejectionHandled = util.contextBind(context, fn);
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        var Promise_dereferenceTrace = Promise.prototype._dereferenceTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Promise.prototype._dereferenceTrace = Promise_dereferenceTrace;
            Context.deactivateLongStackTraces();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Promise.prototype._dereferenceTrace = longStackTracesDereferenceTrace;
        Context.activateLongStackTraces();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};


var legacyHandlers = {
    unhandledrejection: {
        before: function() {
            var ret = util.global.onunhandledrejection;
            util.global.onunhandledrejection = null;
            return ret;
        },
        after: function(fn) {
            util.global.onunhandledrejection = fn;
        }
    },
    rejectionhandled: {
        before: function() {
            var ret = util.global.onrejectionhandled;
            util.global.onrejectionhandled = null;
            return ret;
        },
        after: function(fn) {
            util.global.onrejectionhandled = fn;
        }
    }
};

var fireDomEvent = (function() {
    var dispatch = function(legacy, e) {
        if (legacy) {
            var fn;
            try {
                fn = legacy.before();
                return !util.global.dispatchEvent(e);
            } finally {
                legacy.after(fn);
            }
        } else {
            return !util.global.dispatchEvent(e);
        }
    };
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var eventData = {
                    detail: event,
                    cancelable: true
                };
                var domEvent = new CustomEvent(name, eventData);
                es5.defineProperty(
                    domEvent, "promise", {value: event.promise});
                es5.defineProperty(
                    domEvent, "reason", {value: event.reason});

                return dispatch(legacyHandlers[name], domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var domEvent = new Event(name, {
                    cancelable: true
                });
                domEvent.detail = event;
                es5.defineProperty(domEvent, "promise", {value: event.promise});
                es5.defineProperty(domEvent, "reason", {value: event.reason});
                return dispatch(legacyHandlers[name], domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                name = name.toLowerCase();
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name, false, true,
                    event);
                return dispatch(legacyHandlers[name], domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    if ("asyncHooks" in opts && util.nodeSupportsAsyncResource) {
        var prev = config.asyncHooks;
        var cur = !!opts.asyncHooks;
        if (prev !== cur) {
            config.asyncHooks = cur;
            if (cur) {
                enableAsyncHooks();
            } else {
                disableAsyncHooks();
            }
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._dereferenceTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function longStackTracesDereferenceTrace() {
    this._trace = undefined;
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = (firstLineError.stack || "").split("\n");
    var lastStackLines = (lastLineError.stack || "").split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false,
    asyncHooks: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    asyncHooks: function() {
        return config.asyncHooks;
    },
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./es5":13,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) { var i, promiseSetters, thenCallbacks, holderClasses, generateHolderClass, promiseSetter, thenCallback; }

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) { var context, bitField, maybePromise, i, callbacks, holder, HolderClass, ret; }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var context = Promise._getContext();
    this._callback = util.contextBind(context, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
    if (util.isArray(promises)) {
        for (var i = 0; i < promises.length; ++i) {
            var maybePromise = promises[i];
            if (maybePromise instanceof Promise) {
                maybePromise.suppressUnhandledRejections();
            }
        }
    }
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");
util.setReflectHandler(reflectHandler);

var getDomain = function() {
    var domain = process.domain;
    if (domain === undefined) {
        return null;
    }
    return domain;
};
var getContextDefault = function() {
    return null;
};
var getContextDomain = function() {
    return {
        domain: getDomain(),
        async: null
    };
};
var AsyncResource = util.isNode && util.nodeSupportsAsyncResource ?
    _dereq_("async_hooks").AsyncResource : null;
var getContextAsyncHooks = function() {
    return {
        domain: getDomain(),
        async: new AsyncResource("Bluebird::Promise")
    };
};
var getContext = util.isNode ? getContextDomain : getContextDefault;
util.notEnumerableProp(Promise, "_getContext", getContext);
var enableAsyncHooks = function() {
    getContext = getContextAsyncHooks;
    util.notEnumerableProp(Promise, "_getContext", getContextAsyncHooks);
};
var disableAsyncHooks = function() {
    getContext = getContextDomain;
    util.notEnumerableProp(Promise, "_getContext", getContextDomain);
};

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;

var debug = _dereq_("./debuggability")(Promise, Context,
    enableAsyncHooks, disableAsyncHooks);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        if (typeof fn !== "function") {
            throw new TypeError("The last argument to .catch() " +
                "must be a function, got " + util.toString(fn));
        }
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var context = getContext();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: util.contextBind(context, handler),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise,
                receiver, context);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    var bitField = this._bitField;
    this._bitField = bitField |
        (((bitField & 536870912) >> 2) ^
        134217728);
};

Promise.prototype._setNoAsyncGuarantee = function() {
    this._bitField = (this._bitField | 536870912) &
        (~134217728);
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    context
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 = util.contextBind(context, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 = util.contextBind(context, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                util.contextBind(context, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                util.contextBind(context, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);


    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(maybePromise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
        this._dereferenceTrace();
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    es5.defineProperty(Promise.prototype, Symbol.toStringTag, {
        get: function () {
            return "Object";
        }
    });
}

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async);
Promise.Promise = Promise;
Promise.version = "3.7.1";
_dereq_('./call_get.js')(Promise);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./any.js')(Promise);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./filter.js')(Promise, INTERNAL);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36,"async_hooks":undefined}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
        values.suppressUnhandledRejections();
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) { var parameterCount, parameterDeclaration, argumentSequence, switchCaseArgumentOrder; }

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var context = Promise._getContext();
    this._fn = util.contextBind(context, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined &&
        this._eachValues !== null &&
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    for (var j = i; j < length; ++j) {
        var maybePromise = values[j];
        if (maybePromise instanceof Promise) {
            maybePromise.suppressUnhandledRejections();
        }
    }

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };

            value = value._then(gotAccum, undefined, undefined, ctx, undefined);

            if ((i & 127) === 0) {
                value._setNoAsyncGuarantee();
            }
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova)) &&
          ("classList" in document.documentElement)) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.allSettled = function (promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var receiver = new FakeConstructor();
    function ic() {
        return typeof receiver.foo;
    }
    ic();
    ic();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if (classString(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

var reflectHandler;
function contextBind(ctx, cb) {
    if (ctx === null ||
        typeof cb !== "function" ||
        cb === reflectHandler) {
        return cb;
    }

    if (ctx.domain !== null) {
        cb = ctx.domain.bind(cb);
    }

    var async = ctx.async;
    if (async !== null) {
        var old = cb;
        cb = function() {
            var args = (new Array(2)).concat([].slice.call(arguments));;
            args[0] = old;
            args[1] = this;
            return async.runInAsyncScope.apply(async, args);
        };
    }
    return cb;
}

var ret = {
    setReflectHandler: function(fn) {
        reflectHandler = fn;
    },
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    contextBind: contextBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version;
    if (process.versions && process.versions.node) {
        version = process.versions.node.split(".").map(Number);
    } else if (process.version) {
        version = process.version.split(".").map(Number);
    }
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();
ret.nodeSupportsAsyncResource = ret.isNode && (function() {
    var supportsAsync = false;
    try {
        var res = _dereq_("async_hooks").AsyncResource;
        supportsAsync = typeof res.prototype.runInAsyncScope === "function";
    } catch (e) {
        supportsAsync = false;
    }
    return supportsAsync;
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13,"async_hooks":undefined}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(0), __webpack_require__(4).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = JSON.parse("{\"api\":{\"facebook\":{\"key\":\"394353490931600\",\"secret\":\"5b895dd3641708f25e5a9e3acb0e78e8\"},\"google\":{\"api_key\":\"3919523b41bd80185b8ed09e1a51ae3a9089aef6\",\"key\":\"165090821505-42htfk83d17nn6lp6gove18qnm298l5b.apps.googleusercontent.com\",\"secret\":\"l_VB-_8nyvIMMWNhP0DBBbD9\"},\"slack\":{\"key\":\"109332786919.119537886914\",\"secret\":\"355edea8111fd8382c6fce7f66d4f8ea\",\"version\":\"/v2\"},\"email\":{\"host\":\"bot.snatchbot.me\"}},\"languages\":[{\"code\":\"en\",\"name\":\"English\"},{\"code\":\"zh\",\"name\":\"中文\"},{\"code\":\"fr\",\"name\":\"Français\"},{\"code\":\"de\",\"name\":\"Deutsch\"},{\"code\":\"it\",\"name\":\"Italiano\"},{\"code\":\"ja\",\"name\":\"日本語\"},{\"code\":\"pt\",\"name\":\"Português\"},{\"code\":\"ru\",\"name\":\"Русский\"},{\"code\":\"es\",\"name\":\"Español\"}],\"channels\":{\"1\":\"Fb\",\"2\":\"Slack\",\"4\":\"API\",\"5\":\"Email\",\"6\":\"Skype\",\"7\":\"WebChat\",\"8\":\"SMS\",\"9\":\"Line\",\"10\":\"Viber\",\"11\":\"Telegram\",\"12\":\"AfricaTalking\",\"13\":\"WhatsApp\",\"15\":\"Zendesk\"},\"channelsData\":[{\"id\":1,\"name\":\"fb\",\"fullname\":\"Facebook\",\"category\":\"rcs\",\"order\":2},{\"id\":2,\"name\":\"slack\",\"fullname\":\"Slack\",\"category\":\"rcs\",\"order\":8},{\"id\":4,\"name\":\"api\",\"fullname\":\"API\",\"category\":\"api\",\"order\":13},{\"id\":5,\"name\":\"email\",\"fullname\":\"Email\",\"category\":\"sms\",\"order\":11},{\"id\":6,\"name\":\"skype\",\"fullname\":\"Skype\",\"category\":\"rcs\",\"order\":7},{\"id\":7,\"name\":\"webchat\",\"fullname\":\"Webchat\",\"link\":\"https://webbot.me\",\"category\":\"rcs\",\"order\":1},{\"id\":8,\"name\":\"sms\",\"fullname\":\"Twilio\",\"category\":\"sms\",\"order\":9},{\"id\":9,\"name\":\"line\",\"fullname\":\"Line\",\"category\":\"rcs\",\"order\":6},{\"id\":10,\"name\":\"viber\",\"fullname\":\"Viber\",\"category\":\"rcs\",\"order\":5},{\"id\":11,\"name\":\"telegram\",\"fullname\":\"Telegram\",\"category\":\"rcs\",\"order\":4},{\"id\":12,\"name\":\"at\",\"fullname\":\"Africa's Talking\",\"category\":\"sms\",\"order\":10},{\"id\":13,\"name\":\"whatsapp\",\"fullname\":\"WhatsApp\",\"category\":\"rcs\",\"order\":3},{\"id\":15,\"name\":\"zendesk\",\"fullname\":\"Zendesk\",\"category\":\"rcs\",\"order\":12}],\"extractedTypes\":{\"10\":\"Email\",\"11\":\"Url\",\"12\":\"Phone\",\"13\":\"Date\",\"14\":\"Number\",\"15\":\"Address\",\"16\":\"Duration\",\"20\":\"Extracted Data\",\"21\":\"Variables\",\"22\":\"Attributes\",\"23\":\"Prior Response\"},\"moduleTypes\":{\"sentiment\":\"Sentiment\",\"botstate\":\"Bot Statement\",\"translate\":\"Translation\",\"awaitresp\":\"Live Agent\",\"emailextract\":\"Collect Email\",\"urlextract\":\"Collect URL\",\"phoneextract\":\"Collect Phone Number\",\"dateextract\":\"Collect Date\",\"numextract\":\"Collect Number\",\"addrextract\":\"Collect Address\",\"durextract\":\"Collect Duration\",\"jsonapi\":\"JSON API\",\"search\":\"Search interaction\",\"extapi\":\"Extended API\",\"plugin\":\"Plugin\",\"N/A\":\"N/A\"},\"nlpTypes\":[{\"title\":\"Entity\",\"value\":\"entity\",\"description\":\"An Entity collects important words from the inputs of the user’s chatting with your bot and describe information relevant to the intent, and sometimes they are essential to it. In the sample Book me a ticket to Paris, Paris is an entity of type location.\"},{\"title\":\"Intent\",\"value\":\"intent\",\"description\":\"An intent represents a task or action the user wants to perform. It is a purpose or goal expressed in a user's input, such as booking a flight, paying a bill, or finding a news article.\"}],\"nlpEntityTrainingTypes\":[{\"title\":\"List\",\"value\":\"list\",\"description\":\"A LIST entity is a simple type of model and Is best for Bot with a small number of samples. It represents a fixed set of related words in your system. Each list entity may have one or more forms. They aren't machine learned, and are best used for a known set of variations on ways to represent the same concept. List entities don't have to be labeled in samples or trained by the system. A list entity is an explicitly specified list of values\"},{\"title\":\"Conditional Random Field\",\"value\":\"stanford_crf\",\"description\":\"CRF can be used for Bot with a large number of samples in intents or very large entities. It is a more sophisticated type that takes the context into account, in which the words are highlighted and a large amount of data is required for a normal training.\"}],\"nlpIntentTrainingTypes\":[{\"title\":\"Bernoulli Naive Bayes model\",\"value\":\"stanford_cdc\",\"description\":\"Bernoulli Naive Bayes model takes into consideration the context of each word in order to classify words into groups. It works effectively when a large number of samples is uploaded for model training.\"},{\"title\":\"BERT (Intent)\",\"value\":\"intent_bert\",\"description\":\"Intent Bidirectional Encoder Representations from Transformers model is a bidirectional model with a transformer architecture, designed to solve problem determining intent. Model's work if based on the latest advances in neural networks, which allow you to pre-train language models on large data packages. Available for English and Russian models.\"}],\"nlpTrainingType\":[{\"title\":\"List\",\"value\":\"list\",\"description\":\"A LIST entity is a simple type of model and Is best for Bot with a small number of samples. It represents a fixed set of related words in your system. Each list entity may have one or more forms. They aren't machine learned, and are best used for a known set of variations on ways to represent the same concept. List entities don't have to be labeled in samples or trained by the system. A list entity is an explicitly specified list of values\"},{\"title\":\"Conditional Random Field\",\"value\":\"stanford_crf\",\"description\":\"CRF can be used for Bot with a large number of samples in intents or very large entities. It is a more sophisticated type that takes the context into account, in which the words are highlighted and a large amount of data is required for a normal training.\"}],\"persistentChannels\":{\"1\":\"Fb\",\"2\":\"Skype\",\"3\":\"Line\",\"4\":\"WebChat\",\"5\":\"Viber\",\"6\":\"Telegram\"},\"conditionTypes\":{\"1\":\"Response to this interaction\",\"2\":\"Extracted data from this interaction\",\"3\":\"Custom variable\",\"4\":\"Attribute\"},\"containTypes\":{\"1\":\"contains (whole word)\",\"2\":\"contains (any part)\",\"3\":\"contains all of\",\"4\":\"doesn't contain any of\",\"5\":\"exactly matches\",\"9\":\"begins with\",\"11\":\"ends with\",\"12\":\"does not begin with\",\"13\":\"does not end with\",\"14\":\"greater than\",\"15\":\"less than\",\"16\":\"equals or greater than\",\"17\":\"equals or less than\"},\"containTypesGlobal\":{\"1\":\"contains (whole word)\",\"2\":\"contains (any part)\",\"3\":\"contains all of\",\"4\":\"doesn't contain any of\",\"5\":\"exactly matches\",\"9\":\"begins with\",\"11\":\"ends with\",\"12\":\"does not begin with\",\"13\":\"does not end with\"},\"connectionCardType\":{\"Standard\":false,\"NLP\":true},\"connectionCardNLPType\":{\"entity\":\"Entity\",\"intent\":\"Intent\"},\"utcs\":[{\"id\":-12,\"value\":\"UTC -12\"},{\"id\":-11,\"value\":\"UTC -11\"},{\"id\":-10,\"value\":\"UTC -10\"},{\"id\":-9,\"value\":\"UTC -9\"},{\"id\":-8,\"value\":\"UTC -8\"},{\"id\":-7,\"value\":\"UTC -7\"},{\"id\":-6,\"value\":\"UTC -6\"},{\"id\":-5,\"value\":\"UTC -5\"},{\"id\":-4,\"value\":\"UTC -4\"},{\"id\":-3,\"value\":\"UTC -3\"},{\"id\":-2,\"value\":\"UTC -2\"},{\"id\":-1,\"value\":\"UTC -1\"},{\"id\":0,\"value\":\"UTC\"},{\"id\":1,\"value\":\"UTC +1\"},{\"id\":2,\"value\":\"UTC +2\"},{\"id\":3,\"value\":\"UTC +3\"},{\"id\":4,\"value\":\"UTC +4\"},{\"id\":5,\"value\":\"UTC +5\"},{\"id\":6,\"value\":\"UTC +6\"},{\"id\":7,\"value\":\"UTC +7\"},{\"id\":8,\"value\":\"UTC +8\"},{\"id\":9,\"value\":\"UTC +9\"},{\"id\":10,\"value\":\"UTC +10\"},{\"id\":11,\"value\":\"UTC +11\"},{\"id\":12,\"value\":\"UTC +12\"}],\"repeats\":[{\"id\":0,\"value\":\"Once\"},{\"id\":6,\"value\":\"Every Hour\"},{\"id\":1,\"value\":\"Every Day\"},{\"id\":2,\"value\":\"Weekends\"},{\"id\":3,\"value\":\"Every Month\"},{\"id\":4,\"value\":\"Workdays\"},{\"id\":5,\"value\":\"Custom...\"}],\"days\":[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],\"repeatDays\":[[],[0,1,2,3,4,5,6],[0,6],[7],[1,2,3,4,5],[]],\"ws\":\"wss://account.snatchbot.me/bot/ws\",\"directions\":[\"Received messages\",\"Sent messages\"],\"colors\":[\"#FF6633\",\"#FFB399\",\"#FF33FF\",\"#FFFF99\",\"#00B3E6\",\"#E6B333\",\"#3366E6\",\"#999966\",\"#99FF99\",\"#B34D4D\",\"#80B300\",\"#809900\",\"#E6B3B3\",\"#6680B3\",\"#66991A\",\"#FF99E6\",\"#CCFF1A\",\"#FF1A66\",\"#E6331A\",\"#33FFCC\",\"#66994D\",\"#B366CC\",\"#4D8000\",\"#B33300\",\"#CC80CC\",\"#66664D\",\"#991AFF\",\"#E666FF\",\"#4DB3FF\",\"#1AB399\",\"#E666B3\",\"#33991A\",\"#CC9999\",\"#B3B31A\",\"#00E680\",\"#4D8066\",\"#809980\",\"#E6FF80\",\"#1AFF33\",\"#999933\",\"#FF3380\",\"#CCCC00\",\"#66E64D\",\"#4D80CC\",\"#9900B3\",\"#E64D66\",\"#4DB380\",\"#FF4D4D\",\"#99E6E6\",\"#6666FF\"],\"persistentMenuPermissions\":[{\"chanelID\":1,\"maxLength\":15,\"maxDeep\":1,\"lengthOnLvl\":5},{\"chanelID\":2,\"maxLength\":6,\"maxDeep\":1},{\"chanelID\":3,\"maxLength\":6,\"maxDeep\":1},{\"chanelID\":4,\"maxLength\":6,\"maxDeep\":3,\"lengthOnLvl\":5},{\"chanelID\":5,\"maxLength\":12,\"maxDeep\":1},{\"chanelID\":6,\"maxLength\":5,\"maxDeep\":1},{\"chanelID\":11,\"maxLength\":5,\"maxDeep\":1}],\"fbTagsOld\":[{\"tag\":\"\",\"name\":\"broadcast.tag\",\"description\":\"broadcast.desc\"},{\"tag\":\"NON_PROMOTIONAL_SUBSCRIPTION\",\"name\":\"broadcast.tagNonPromotionalSubscription\",\"description\":\"broadcast.descNonPromotionalSubscription\"},{\"tag\":\"BUSINESS_PRODUCTIVITY\",\"name\":\"broadcast.tagBusinessProductivity\",\"description\":\"broadcast.descBusinessProductivity\"},{\"tag\":\"COMMUNITY_ALERT\",\"name\":\"broadcast.tagCommunityAlert\",\"description\":\"broadcast.descCommunityAlert\"},{\"tag\":\"CONFIRMED_EVENT_REMINDER\",\"name\":\"broadcast.tagConfirmedEventReminder\",\"description\":\"broadcast.descConfirmedEventReminder\"},{\"tag\":\"APPLICATION_UPDATE\",\"name\":\"broadcast.tagApplicationUpdate\",\"description\":\"broadcast.descApplicationUpdate\"},{\"tag\":\"PAIRING_UPDATE\",\"name\":\"broadcast.tagPairingUpdate\",\"description\":\"broadcast.descPairingUpdate\"},{\"tag\":\"PERSONAL_FINANCE_UPDATE\",\"name\":\"broadcast.tagPersonalFinanceUpdate\",\"description\":\"broadcast.descPersonalFinanceUpdate\"},{\"tag\":\"PAYMENT_UPDATE\",\"name\":\"broadcast.tagPaymentUpdate\",\"description\":\"broadcast.descPaymentUpdate\"},{\"tag\":\"ACCOUNT_UPDATE\",\"name\":\"broadcast.tagAccountUpdate\",\"description\":\"broadcast.descAccountUpdate\"},{\"tag\":\"TICKET_UPDATE\",\"name\":\"broadcast.tagTicketUpdate\",\"description\":\"broadcast.descTicketUpdate\"},{\"tag\":\"FEATURE_FUNCTIONALITY_UPDATE\",\"name\":\"broadcast.tagFeatureFunctionalityUpdate\",\"description\":\"broadcast.descFeatureFunctionalityUpdate\"},{\"tag\":\"TRANSPORTATION_UPDATE\",\"name\":\"broadcast.tagTransportationUpdate\",\"description\":\"broadcast.descTransportationUpdate\"},{\"tag\":\"GAME_EVENT\",\"name\":\"broadcast.tagGameEvent\",\"description\":\"broadcast.descGameEvent\"},{\"tag\":\"APPOINTMENT_UPDATE\",\"name\":\"broadcast.tagAppointmentUpdate\",\"description\":\"broadcast.descAppointmentUpdate\"},{\"tag\":\"ISSUE_RESOLUTION\",\"name\":\"broadcast.tagIssueResolution\",\"description\":\"broadcast.descIssueResolution\"},{\"tag\":\"RESERVATION_UPDATE\",\"name\":\"broadcast.tagReservationUpdate\",\"description\":\"broadcast.descReservationUpdate\"},{\"tag\":\"SHIPPING_UPDATE\",\"name\":\"broadcast.tagShippingUpdate\",\"description\":\"broadcast.descShippingUpdate\"}],\"fbTags\":[{\"tag\":\"NON_PROMOTIONAL_SUBSCRIPTION\",\"name\":\"broadcast.tagNonPromotionalSubscription\",\"description\":\"broadcast.descNonPromotionalSubscription\"},{\"tag\":\"CONFIRMED_EVENT_UPDATE\",\"name\":\"broadcast.tagConfirmedEventUpdate\",\"description\":\"broadcast.descConfirmedEventUpdate\"},{\"tag\":\"POST_PURCHASE_UPDATE\",\"name\":\"broadcast.tagPostPurchaseUpdate\",\"description\":\"broadcast.descPostPurchaseUpdate\"},{\"tag\":\"ACCOUNT_UPDATE\",\"name\":\"broadcast.tagAccountUpdate\",\"description\":\"broadcast.descAccountUpdate\"},{\"tag\":\"BUSINESS_PRODUCTIVITY\",\"name\":\"broadcast.tagBusinessProductivity\",\"description\":\"broadcast.descBusinessProductivity\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"COMMUNITY_ALERT\",\"name\":\"broadcast.tagCommunityAlert\",\"description\":\"broadcast.descCommunityAlert\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"CONFIRMED_EVENT_REMINDER\",\"name\":\"broadcast.tagConfirmedEventReminder\",\"description\":\"broadcast.descConfirmedEventReminder\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"APPLICATION_UPDATE\",\"name\":\"broadcast.tagApplicationUpdate\",\"description\":\"broadcast.descApplicationUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"PAIRING_UPDATE\",\"name\":\"broadcast.tagPairingUpdate\",\"description\":\"broadcast.descPairingUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"PERSONAL_FINANCE_UPDATE\",\"name\":\"broadcast.tagPersonalFinanceUpdate\",\"description\":\"broadcast.descPersonalFinanceUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"PAYMENT_UPDATE\",\"name\":\"broadcast.tagPaymentUpdate\",\"description\":\"broadcast.descPaymentUpdate\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"TICKET_UPDATE\",\"name\":\"broadcast.tagTicketUpdate\",\"description\":\"broadcast.descTicketUpdate\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"FEATURE_FUNCTIONALITY_UPDATE\",\"name\":\"broadcast.tagFeatureFunctionalityUpdate\",\"description\":\"broadcast.descFeatureFunctionalityUpdate\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"TRANSPORTATION_UPDATE\",\"name\":\"broadcast.tagTransportationUpdate\",\"description\":\"broadcast.descTransportationUpdate\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"GAME_EVENT\",\"name\":\"broadcast.tagGameEvent\",\"description\":\"broadcast.descGameEvent\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"APPOINTMENT_UPDATE\",\"name\":\"broadcast.tagAppointmentUpdate\",\"description\":\"broadcast.descAppointmentUpdate\",\"newTag\":\"CONFIRMED_EVENT_UPDATE\"},{\"tag\":\"ISSUE_RESOLUTION\",\"name\":\"broadcast.tagIssueResolution\",\"description\":\"broadcast.descIssueResolution\",\"newTag\":\"ACCOUNT_UPDATE\"},{\"tag\":\"RESERVATION_UPDATE\",\"name\":\"broadcast.tagReservationUpdate\",\"description\":\"broadcast.descReservationUpdate\",\"newTag\":\"POST_PURCHASE_UPDATE\"},{\"tag\":\"SHIPPING_UPDATE\",\"name\":\"broadcast.tagShippingUpdate\",\"description\":\"broadcast.descShippingUpdate\",\"newTag\":\"POST_PURCHASE_UPDATE\"}],\"reports\":[{\"type\":1,\"name\":\"Users/Messages overview\",\"key\":\"advancedCharts.usersMessages\"},{\"type\":2,\"name\":\"Audience (Webchat channel)\",\"key\":\"advancedCharts.audienceWebchat\"},{\"type\":3,\"name\":\"Exit interactions\",\"key\":\"advancedCharts.exitInteractions\"},{\"type\":4,\"name\":\"Average lifetime of bots\",\"key\":\"advancedCharts.averageLifetime\"},{\"type\":5,\"name\":\"Extracted data\",\"key\":\"advancedCharts.extractedData\"},{\"type\":6,\"name\":\"Popular interactions\",\"key\":\"advancedCharts.popularInteractions\"},{\"type\":7,\"name\":\"Bot activity\",\"key\":\"advancedCharts.botActivity\"}],\"time\":[{\"type\":1,\"name\":\"Today\"},{\"type\":2,\"name\":\"Yesterday\"},{\"type\":3,\"name\":\"Last 7 days\"},{\"type\":4,\"name\":\"Last 28 days\"},{\"type\":5,\"name\":\"Last 90 days\"},{\"type\":6,\"name\":\"Last 6 months\"},{\"type\":7,\"name\":\"This year\"},{\"type\":8,\"name\":\"Last year\"},{\"type\":9,\"name\":\"Custom\"}],\"extractedCategories\":[\"Email\",\"Url\",\"Phone\",\"Date\",\"Number\",\"Address\",\"Duration\",\"Extracted data\",\"Variables\",\"Attributes\",\"Prior Response\"],\"defaultTTSautoModel\":\"en-IN-Wavenet-D\",\"attributes\":[\"first_name\",\"last_name\",\"profile_pic\",\"locale\",\"timezone\",\"gender\",\"timestamp\",\"user_id\",\"channel\"],\"paddle\":{\"live\":{\"vendorID\":108335,\"productID\":584859,\"productOneOffID\":583022},\"sandbox\":{\"vendorID\":581,\"productID\":1319,\"productOneOffID\":1457}},\"timezoneList\":{\"Africa/Abidjan\":\"(GMT+00:00)Africa/Abidjan\",\"Africa/Accra\":\"(GMT+00:00)Africa/Accra\",\"Africa/Addis_Ababa\":\"(GMT+03:00)Africa/Addis_Ababa\",\"Africa/Algiers\":\"(GMT+01:00)Africa/Algiers\",\"Africa/Asmara\":\"(GMT+03:00)Africa/Asmara\",\"Africa/Asmera\":\"(GMT+03:00)Africa/Asmera\",\"Africa/Bamako\":\"(GMT+00:00)Africa/Bamako\",\"Africa/Bangui\":\"(GMT+01:00)Africa/Bangui\",\"Africa/Banjul\":\"(GMT+00:00)Africa/Banjul\",\"Africa/Bissau\":\"(GMT+00:00)Africa/Bissau\",\"Africa/Blantyre\":\"(GMT+02:00)Africa/Blantyre\",\"Africa/Brazzaville\":\"(GMT+01:00)Africa/Brazzaville\",\"Africa/Bujumbura\":\"(GMT+02:00)Africa/Bujumbura\",\"Africa/Cairo\":\"(GMT+02:00)Africa/Cairo\",\"Africa/Casablanca\":\"(GMT+00:00)Africa/Casablanca\",\"Africa/Ceuta\":\"(GMT+02:00)Africa/Ceuta\",\"Africa/Conakry\":\"(GMT+00:00)Africa/Conakry\",\"Africa/Dakar\":\"(GMT+00:00)Africa/Dakar\",\"Africa/Dar_es_Salaam\":\"(GMT+03:00)Africa/Dar_es_Salaam\",\"Africa/Djibouti\":\"(GMT+03:00)Africa/Djibouti\",\"Africa/Douala\":\"(GMT+01:00)Africa/Douala\",\"Africa/El_Aaiun\":\"(GMT+00:00)Africa/El_Aaiun\",\"Africa/Freetown\":\"(GMT+00:00)Africa/Freetown\",\"Africa/Gaborone\":\"(GMT+02:00)Africa/Gaborone\",\"Africa/Harare\":\"(GMT+02:00)Africa/Harare\",\"Africa/Johannesburg\":\"(GMT+02:00)Africa/Johannesburg\",\"Africa/Juba\":\"(GMT+03:00)Africa/Juba\",\"Africa/Kampala\":\"(GMT+03:00)Africa/Kampala\",\"Africa/Khartoum\":\"(GMT+02:00)Africa/Khartoum\",\"Africa/Kigali\":\"(GMT+02:00)Africa/Kigali\",\"Africa/Kinshasa\":\"(GMT+01:00)Africa/Kinshasa\",\"Africa/Lagos\":\"(GMT+01:00)Africa/Lagos\",\"Africa/Libreville\":\"(GMT+01:00)Africa/Libreville\",\"Africa/Lome\":\"(GMT+00:00)Africa/Lome\",\"Africa/Luanda\":\"(GMT+01:00)Africa/Luanda\",\"Africa/Lubumbashi\":\"(GMT+02:00)Africa/Lubumbashi\",\"Africa/Lusaka\":\"(GMT+02:00)Africa/Lusaka\",\"Africa/Malabo\":\"(GMT+01:00)Africa/Malabo\",\"Africa/Maputo\":\"(GMT+02:00)Africa/Maputo\",\"Africa/Maseru\":\"(GMT+02:00)Africa/Maseru\",\"Africa/Mbabane\":\"(GMT+02:00)Africa/Mbabane\",\"Africa/Mogadishu\":\"(GMT+03:00)Africa/Mogadishu\",\"Africa/Monrovia\":\"(GMT+00:00)Africa/Monrovia\",\"Africa/Nairobi\":\"(GMT+03:00)Africa/Nairobi\",\"Africa/Ndjamena\":\"(GMT+01:00)Africa/Ndjamena\",\"Africa/Niamey\":\"(GMT+01:00)Africa/Niamey\",\"Africa/Nouakchott\":\"(GMT+00:00)Africa/Nouakchott\",\"Africa/Ouagadougou\":\"(GMT+00:00)Africa/Ouagadougou\",\"Africa/Porto-Novo\":\"(GMT+01:00)Africa/Porto-Novo\",\"Africa/Sao_Tome\":\"(GMT+00:00)Africa/Sao_Tome\",\"Africa/Timbuktu\":\"(GMT+00:00)Africa/Timbuktu\",\"Africa/Tripoli\":\"(GMT+02:00)Africa/Tripoli\",\"Africa/Tunis\":\"(GMT+01:00)Africa/Tunis\",\"Africa/Windhoek\":\"(GMT+02:00)Africa/Windhoek\",\"America/Adak\":\"(GMT-09:00)America/Adak\",\"America/Anchorage\":\"(GMT-08:00)America/Anchorage\",\"America/Anguilla\":\"(GMT-04:00)America/Anguilla\",\"America/Antigua\":\"(GMT-04:00)America/Antigua\",\"America/Araguaina\":\"(GMT-03:00)America/Araguaina\",\"America/Argentina/Buenos_Aires\":\"(GMT-03:00)America/Argentina/Buenos_Aires\",\"America/Argentina/Catamarca\":\"(GMT-03:00)America/Argentina/Catamarca\",\"America/Argentina/ComodRivadavia\":\"(GMT-03:00)America/Argentina/ComodRivadavia\",\"America/Argentina/Cordoba\":\"(GMT-03:00)America/Argentina/Cordoba\",\"America/Argentina/Jujuy\":\"(GMT-03:00)America/Argentina/Jujuy\",\"America/Argentina/La_Rioja\":\"(GMT-03:00)America/Argentina/La_Rioja\",\"America/Argentina/Mendoza\":\"(GMT-03:00)America/Argentina/Mendoza\",\"America/Argentina/Rio_Gallegos\":\"(GMT-03:00)America/Argentina/Rio_Gallegos\",\"America/Argentina/Salta\":\"(GMT-03:00)America/Argentina/Salta\",\"America/Argentina/San_Juan\":\"(GMT-03:00)America/Argentina/San_Juan\",\"America/Argentina/San_Luis\":\"(GMT-03:00)America/Argentina/San_Luis\",\"America/Argentina/Tucuman\":\"(GMT-03:00)America/Argentina/Tucuman\",\"America/Argentina/Ushuaia\":\"(GMT-03:00)America/Argentina/Ushuaia\",\"America/Aruba\":\"(GMT-04:00)America/Aruba\",\"America/Asuncion\":\"(GMT-04:00)America/Asuncion\",\"America/Atikokan\":\"(GMT-05:00)America/Atikokan\",\"America/Atka\":\"(GMT-09:00)America/Atka\",\"America/Bahia\":\"(GMT-03:00)America/Bahia\",\"America/Bahia_Banderas\":\"(GMT-05:00)America/Bahia_Banderas\",\"America/Barbados\":\"(GMT-04:00)America/Barbados\",\"America/Belem\":\"(GMT-03:00)America/Belem\",\"America/Belize\":\"(GMT-06:00)America/Belize\",\"America/Blanc-Sablon\":\"(GMT-04:00)America/Blanc-Sablon\",\"America/Boa_Vista\":\"(GMT-04:00)America/Boa_Vista\",\"America/Bogota\":\"(GMT-05:00)America/Bogota\",\"America/Boise\":\"(GMT-06:00)America/Boise\",\"America/Buenos_Aires\":\"(GMT-03:00)America/Buenos_Aires\",\"America/Cambridge_Bay\":\"(GMT-06:00)America/Cambridge_Bay\",\"America/Campo_Grande\":\"(GMT-04:00)America/Campo_Grande\",\"America/Cancun\":\"(GMT-05:00)America/Cancun\",\"America/Caracas\":\"(GMT-04:00)America/Caracas\",\"America/Catamarca\":\"(GMT-03:00)America/Catamarca\",\"America/Cayenne\":\"(GMT-03:00)America/Cayenne\",\"America/Cayman\":\"(GMT-05:00)America/Cayman\",\"America/Chicago\":\"(GMT-05:00)America/Chicago\",\"America/Chihuahua\":\"(GMT-06:00)America/Chihuahua\",\"America/Coral_Harbour\":\"(GMT-05:00)America/Coral_Harbour\",\"America/Cordoba\":\"(GMT-03:00)America/Cordoba\",\"America/Costa_Rica\":\"(GMT-06:00)America/Costa_Rica\",\"America/Creston\":\"(GMT-07:00)America/Creston\",\"America/Cuiaba\":\"(GMT-04:00)America/Cuiaba\",\"America/Curacao\":\"(GMT-04:00)America/Curacao\",\"America/Danmarkshavn\":\"(GMT+00:00)America/Danmarkshavn\",\"America/Dawson\":\"(GMT-07:00)America/Dawson\",\"America/Dawson_Creek\":\"(GMT-07:00)America/Dawson_Creek\",\"America/Denver\":\"(GMT-06:00)America/Denver\",\"America/Detroit\":\"(GMT-04:00)America/Detroit\",\"America/Dominica\":\"(GMT-04:00)America/Dominica\",\"America/Edmonton\":\"(GMT-06:00)America/Edmonton\",\"America/Eirunepe\":\"(GMT-05:00)America/Eirunepe\",\"America/El_Salvador\":\"(GMT-06:00)America/El_Salvador\",\"America/Ensenada\":\"(GMT-07:00)America/Ensenada\",\"America/Fort_Nelson\":\"(GMT-07:00)America/Fort_Nelson\",\"America/Fort_Wayne\":\"(GMT-04:00)America/Fort_Wayne\",\"America/Fortaleza\":\"(GMT-03:00)America/Fortaleza\",\"America/Glace_Bay\":\"(GMT-03:00)America/Glace_Bay\",\"America/Godthab\":\"(GMT-02:00)America/Godthab\",\"America/Goose_Bay\":\"(GMT-03:00)America/Goose_Bay\",\"America/Grand_Turk\":\"(GMT-04:00)America/Grand_Turk\",\"America/Grenada\":\"(GMT-04:00)America/Grenada\",\"America/Guadeloupe\":\"(GMT-04:00)America/Guadeloupe\",\"America/Guatemala\":\"(GMT-06:00)America/Guatemala\",\"America/Guayaquil\":\"(GMT-05:00)America/Guayaquil\",\"America/Guyana\":\"(GMT-04:00)America/Guyana\",\"America/Halifax\":\"(GMT-03:00)America/Halifax\",\"America/Havana\":\"(GMT-04:00)America/Havana\",\"America/Hermosillo\":\"(GMT-07:00)America/Hermosillo\",\"America/Indiana/Indianapolis\":\"(GMT-04:00)America/Indiana/Indianapolis\",\"America/Indiana/Knox\":\"(GMT-05:00)America/Indiana/Knox\",\"America/Indiana/Marengo\":\"(GMT-04:00)America/Indiana/Marengo\",\"America/Indiana/Petersburg\":\"(GMT-04:00)America/Indiana/Petersburg\",\"America/Indiana/Tell_City\":\"(GMT-05:00)America/Indiana/Tell_City\",\"America/Indiana/Vevay\":\"(GMT-04:00)America/Indiana/Vevay\",\"America/Indiana/Vincennes\":\"(GMT-04:00)America/Indiana/Vincennes\",\"America/Indiana/Winamac\":\"(GMT-04:00)America/Indiana/Winamac\",\"America/Indianapolis\":\"(GMT-04:00)America/Indianapolis\",\"America/Inuvik\":\"(GMT-06:00)America/Inuvik\",\"America/Iqaluit\":\"(GMT-04:00)America/Iqaluit\",\"America/Jamaica\":\"(GMT-05:00)America/Jamaica\",\"America/Jujuy\":\"(GMT-03:00)America/Jujuy\",\"America/Juneau\":\"(GMT-08:00)America/Juneau\",\"America/Kentucky/Louisville\":\"(GMT-04:00)America/Kentucky/Louisville\",\"America/Kentucky/Monticello\":\"(GMT-04:00)America/Kentucky/Monticello\",\"America/Knox_IN\":\"(GMT-05:00)America/Knox_IN\",\"America/Kralendijk\":\"(GMT-04:00)America/Kralendijk\",\"America/La_Paz\":\"(GMT-04:00)America/La_Paz\",\"America/Lima\":\"(GMT-05:00)America/Lima\",\"America/Los_Angeles\":\"(GMT-07:00)America/Los_Angeles\",\"America/Louisville\":\"(GMT-04:00)America/Louisville\",\"America/Lower_Princes\":\"(GMT-04:00)America/Lower_Princes\",\"America/Maceio\":\"(GMT-03:00)America/Maceio\",\"America/Managua\":\"(GMT-06:00)America/Managua\",\"America/Manaus\":\"(GMT-04:00)America/Manaus\",\"America/Marigot\":\"(GMT-04:00)America/Marigot\",\"America/Martinique\":\"(GMT-04:00)America/Martinique\",\"America/Matamoros\":\"(GMT-05:00)America/Matamoros\",\"America/Mazatlan\":\"(GMT-06:00)America/Mazatlan\",\"America/Mendoza\":\"(GMT-03:00)America/Mendoza\",\"America/Menominee\":\"(GMT-05:00)America/Menominee\",\"America/Merida\":\"(GMT-05:00)America/Merida\",\"America/Metlakatla\":\"(GMT-08:00)America/Metlakatla\",\"America/Mexico_City\":\"(GMT-05:00)America/Mexico_City\",\"America/Miquelon\":\"(GMT-02:00)America/Miquelon\",\"America/Moncton\":\"(GMT-03:00)America/Moncton\",\"America/Monterrey\":\"(GMT-05:00)America/Monterrey\",\"America/Montevideo\":\"(GMT-03:00)America/Montevideo\",\"America/Montreal\":\"(GMT-04:00)America/Montreal\",\"America/Montserrat\":\"(GMT-04:00)America/Montserrat\",\"America/Nassau\":\"(GMT-04:00)America/Nassau\",\"America/New_York\":\"(GMT-04:00)America/New_York\",\"America/Nipigon\":\"(GMT-04:00)America/Nipigon\",\"America/Nome\":\"(GMT-08:00)America/Nome\",\"America/Noronha\":\"(GMT-02:00)America/Noronha\",\"America/North_Dakota/Beulah\":\"(GMT-05:00)America/North_Dakota/Beulah\",\"America/North_Dakota/Center\":\"(GMT-05:00)America/North_Dakota/Center\",\"America/North_Dakota/New_Salem\":\"(GMT-05:00)America/North_Dakota/New_Salem\",\"America/Ojinaga\":\"(GMT-06:00)America/Ojinaga\",\"America/Panama\":\"(GMT-05:00)America/Panama\",\"America/Pangnirtung\":\"(GMT-04:00)America/Pangnirtung\",\"America/Paramaribo\":\"(GMT-03:00)America/Paramaribo\",\"America/Phoenix\":\"(GMT-07:00)America/Phoenix\",\"America/Port-au-Prince\":\"(GMT-04:00)America/Port-au-Prince\",\"America/Port_of_Spain\":\"(GMT-04:00)America/Port_of_Spain\",\"America/Porto_Acre\":\"(GMT-05:00)America/Porto_Acre\",\"America/Porto_Velho\":\"(GMT-04:00)America/Porto_Velho\",\"America/Puerto_Rico\":\"(GMT-04:00)America/Puerto_Rico\",\"America/Punta_Arenas\":\"(GMT-03:00)America/Punta_Arenas\",\"America/Rainy_River\":\"(GMT-05:00)America/Rainy_River\",\"America/Rankin_Inlet\":\"(GMT-05:00)America/Rankin_Inlet\",\"America/Recife\":\"(GMT-03:00)America/Recife\",\"America/Regina\":\"(GMT-06:00)America/Regina\",\"America/Resolute\":\"(GMT-05:00)America/Resolute\",\"America/Rio_Branco\":\"(GMT-05:00)America/Rio_Branco\",\"America/Rosario\":\"(GMT-03:00)America/Rosario\",\"America/Santa_Isabel\":\"(GMT-07:00)America/Santa_Isabel\",\"America/Santarem\":\"(GMT-03:00)America/Santarem\",\"America/Santiago\":\"(GMT-04:00)America/Santiago\",\"America/Santo_Domingo\":\"(GMT-04:00)America/Santo_Domingo\",\"America/Sao_Paulo\":\"(GMT-03:00)America/Sao_Paulo\",\"America/Scoresbysund\":\"(GMT+00:00)America/Scoresbysund\",\"America/Shiprock\":\"(GMT-06:00)America/Shiprock\",\"America/Sitka\":\"(GMT-08:00)America/Sitka\",\"America/St_Barthelemy\":\"(GMT-04:00)America/St_Barthelemy\",\"America/St_Johns\":\"(GMT-02:30)America/St_Johns\",\"America/St_Kitts\":\"(GMT-04:00)America/St_Kitts\",\"America/St_Lucia\":\"(GMT-04:00)America/St_Lucia\",\"America/St_Thomas\":\"(GMT-04:00)America/St_Thomas\",\"America/St_Vincent\":\"(GMT-04:00)America/St_Vincent\",\"America/Swift_Current\":\"(GMT-06:00)America/Swift_Current\",\"America/Tegucigalpa\":\"(GMT-06:00)America/Tegucigalpa\",\"America/Thule\":\"(GMT-03:00)America/Thule\",\"America/Thunder_Bay\":\"(GMT-04:00)America/Thunder_Bay\",\"America/Tijuana\":\"(GMT-07:00)America/Tijuana\",\"America/Toronto\":\"(GMT-04:00)America/Toronto\",\"America/Tortola\":\"(GMT-04:00)America/Tortola\",\"America/Vancouver\":\"(GMT-07:00)America/Vancouver\",\"America/Virgin\":\"(GMT-04:00)America/Virgin\",\"America/Whitehorse\":\"(GMT-07:00)America/Whitehorse\",\"America/Winnipeg\":\"(GMT-05:00)America/Winnipeg\",\"America/Yakutat\":\"(GMT-08:00)America/Yakutat\",\"America/Yellowknife\":\"(GMT-06:00)America/Yellowknife\",\"Antarctica/Casey\":\"(GMT+08:00)Antarctica/Casey\",\"Antarctica/Davis\":\"(GMT+07:00)Antarctica/Davis\",\"Antarctica/DumontDUrville\":\"(GMT+10:00)Antarctica/DumontDUrville\",\"Antarctica/Macquarie\":\"(GMT+11:00)Antarctica/Macquarie\",\"Antarctica/Mawson\":\"(GMT+05:00)Antarctica/Mawson\",\"Antarctica/McMurdo\":\"(GMT+12:00)Antarctica/McMurdo\",\"Antarctica/Palmer\":\"(GMT-03:00)Antarctica/Palmer\",\"Antarctica/Rothera\":\"(GMT-03:00)Antarctica/Rothera\",\"Antarctica/South_Pole\":\"(GMT+12:00)Antarctica/South_Pole\",\"Antarctica/Syowa\":\"(GMT+03:00)Antarctica/Syowa\",\"Antarctica/Troll\":\"(GMT+02:00)Antarctica/Troll\",\"Antarctica/Vostok\":\"(GMT+06:00)Antarctica/Vostok\",\"Arctic/Longyearbyen\":\"(GMT+02:00)Arctic/Longyearbyen\",\"Asia/Aden\":\"(GMT+03:00)Asia/Aden\",\"Asia/Almaty\":\"(GMT+06:00)Asia/Almaty\",\"Asia/Amman\":\"(GMT+03:00)Asia/Amman\",\"Asia/Anadyr\":\"(GMT+12:00)Asia/Anadyr\",\"Asia/Aqtau\":\"(GMT+05:00)Asia/Aqtau\",\"Asia/Aqtobe\":\"(GMT+05:00)Asia/Aqtobe\",\"Asia/Ashgabat\":\"(GMT+05:00)Asia/Ashgabat\",\"Asia/Ashkhabad\":\"(GMT+05:00)Asia/Ashkhabad\",\"Asia/Atyrau\":\"(GMT+05:00)Asia/Atyrau\",\"Asia/Baghdad\":\"(GMT+03:00)Asia/Baghdad\",\"Asia/Bahrain\":\"(GMT+03:00)Asia/Bahrain\",\"Asia/Baku\":\"(GMT+04:00)Asia/Baku\",\"Asia/Bangkok\":\"(GMT+07:00)Asia/Bangkok\",\"Asia/Barnaul\":\"(GMT+07:00)Asia/Barnaul\",\"Asia/Beirut\":\"(GMT+03:00)Asia/Beirut\",\"Asia/Bishkek\":\"(GMT+06:00)Asia/Bishkek\",\"Asia/Brunei\":\"(GMT+08:00)Asia/Brunei\",\"Asia/Calcutta\":\"(GMT+05:30)Asia/Calcutta\",\"Asia/Chita\":\"(GMT+09:00)Asia/Chita\",\"Asia/Choibalsan\":\"(GMT+08:00)Asia/Choibalsan\",\"Asia/Chongqing\":\"(GMT+08:00)Asia/Chongqing\",\"Asia/Chungking\":\"(GMT+08:00)Asia/Chungking\",\"Asia/Colombo\":\"(GMT+05:30)Asia/Colombo\",\"Asia/Dacca\":\"(GMT+06:00)Asia/Dacca\",\"Asia/Damascus\":\"(GMT+03:00)Asia/Damascus\",\"Asia/Dhaka\":\"(GMT+06:00)Asia/Dhaka\",\"Asia/Dili\":\"(GMT+09:00)Asia/Dili\",\"Asia/Dubai\":\"(GMT+04:00)Asia/Dubai\",\"Asia/Dushanbe\":\"(GMT+05:00)Asia/Dushanbe\",\"Asia/Famagusta\":\"(GMT+03:00)Asia/Famagusta\",\"Asia/Gaza\":\"(GMT+03:00)Asia/Gaza\",\"Asia/Harbin\":\"(GMT+08:00)Asia/Harbin\",\"Asia/Hebron\":\"(GMT+03:00)Asia/Hebron\",\"Asia/Ho_Chi_Minh\":\"(GMT+07:00)Asia/Ho_Chi_Minh\",\"Asia/Hong_Kong\":\"(GMT+08:00)Asia/Hong_Kong\",\"Asia/Hovd\":\"(GMT+07:00)Asia/Hovd\",\"Asia/Irkutsk\":\"(GMT+08:00)Asia/Irkutsk\",\"Asia/Istanbul\":\"(GMT+03:00)Asia/Istanbul\",\"Asia/Jakarta\":\"(GMT+07:00)Asia/Jakarta\",\"Asia/Jayapura\":\"(GMT+09:00)Asia/Jayapura\",\"Asia/Jerusalem\":\"(GMT+03:00)Asia/Jerusalem\",\"Asia/Kabul\":\"(GMT+04:30)Asia/Kabul\",\"Asia/Kamchatka\":\"(GMT+12:00)Asia/Kamchatka\",\"Asia/Karachi\":\"(GMT+05:00)Asia/Karachi\",\"Asia/Kashgar\":\"(GMT+06:00)Asia/Kashgar\",\"Asia/Kathmandu\":\"(GMT+05:45)Asia/Kathmandu\",\"Asia/Katmandu\":\"(GMT+05:45)Asia/Katmandu\",\"Asia/Khandyga\":\"(GMT+09:00)Asia/Khandyga\",\"Asia/Kolkata\":\"(GMT+05:30)Asia/Kolkata\",\"Asia/Krasnoyarsk\":\"(GMT+07:00)Asia/Krasnoyarsk\",\"Asia/Kuala_Lumpur\":\"(GMT+08:00)Asia/Kuala_Lumpur\",\"Asia/Kuching\":\"(GMT+08:00)Asia/Kuching\",\"Asia/Kuwait\":\"(GMT+03:00)Asia/Kuwait\",\"Asia/Macao\":\"(GMT+08:00)Asia/Macao\",\"Asia/Macau\":\"(GMT+08:00)Asia/Macau\",\"Asia/Magadan\":\"(GMT+11:00)Asia/Magadan\",\"Asia/Makassar\":\"(GMT+08:00)Asia/Makassar\",\"Asia/Manila\":\"(GMT+08:00)Asia/Manila\",\"Asia/Muscat\":\"(GMT+04:00)Asia/Muscat\",\"Asia/Nicosia\":\"(GMT+03:00)Asia/Nicosia\",\"Asia/Novokuznetsk\":\"(GMT+07:00)Asia/Novokuznetsk\",\"Asia/Novosibirsk\":\"(GMT+07:00)Asia/Novosibirsk\",\"Asia/Omsk\":\"(GMT+06:00)Asia/Omsk\",\"Asia/Oral\":\"(GMT+05:00)Asia/Oral\",\"Asia/Phnom_Penh\":\"(GMT+07:00)Asia/Phnom_Penh\",\"Asia/Pontianak\":\"(GMT+07:00)Asia/Pontianak\",\"Asia/Pyongyang\":\"(GMT+09:00)Asia/Pyongyang\",\"Asia/Qatar\":\"(GMT+03:00)Asia/Qatar\",\"Asia/Qostanay\":\"(GMT+06:00)Asia/Qostanay\",\"Asia/Qyzylorda\":\"(GMT+05:00)Asia/Qyzylorda\",\"Asia/Rangoon\":\"(GMT+06:30)Asia/Rangoon\",\"Asia/Riyadh\":\"(GMT+03:00)Asia/Riyadh\",\"Asia/Saigon\":\"(GMT+07:00)Asia/Saigon\",\"Asia/Sakhalin\":\"(GMT+11:00)Asia/Sakhalin\",\"Asia/Samarkand\":\"(GMT+05:00)Asia/Samarkand\",\"Asia/Seoul\":\"(GMT+09:00)Asia/Seoul\",\"Asia/Shanghai\":\"(GMT+08:00)Asia/Shanghai\",\"Asia/Singapore\":\"(GMT+08:00)Asia/Singapore\",\"Asia/Srednekolymsk\":\"(GMT+11:00)Asia/Srednekolymsk\",\"Asia/Taipei\":\"(GMT+08:00)Asia/Taipei\",\"Asia/Tashkent\":\"(GMT+05:00)Asia/Tashkent\",\"Asia/Tbilisi\":\"(GMT+04:00)Asia/Tbilisi\",\"Asia/Tehran\":\"(GMT+04:30)Asia/Tehran\",\"Asia/Tel_Aviv\":\"(GMT+03:00)Asia/Tel_Aviv\",\"Asia/Thimbu\":\"(GMT+06:00)Asia/Thimbu\",\"Asia/Thimphu\":\"(GMT+06:00)Asia/Thimphu\",\"Asia/Tokyo\":\"(GMT+09:00)Asia/Tokyo\",\"Asia/Tomsk\":\"(GMT+07:00)Asia/Tomsk\",\"Asia/Ujung_Pandang\":\"(GMT+08:00)Asia/Ujung_Pandang\",\"Asia/Ulaanbaatar\":\"(GMT+08:00)Asia/Ulaanbaatar\",\"Asia/Ulan_Bator\":\"(GMT+08:00)Asia/Ulan_Bator\",\"Asia/Urumqi\":\"(GMT+06:00)Asia/Urumqi\",\"Asia/Ust-Nera\":\"(GMT+10:00)Asia/Ust-Nera\",\"Asia/Vientiane\":\"(GMT+07:00)Asia/Vientiane\",\"Asia/Vladivostok\":\"(GMT+10:00)Asia/Vladivostok\",\"Asia/Yakutsk\":\"(GMT+09:00)Asia/Yakutsk\",\"Asia/Yangon\":\"(GMT+06:30)Asia/Yangon\",\"Asia/Yekaterinburg\":\"(GMT+05:00)Asia/Yekaterinburg\",\"Asia/Yerevan\":\"(GMT+04:00)Asia/Yerevan\",\"Atlantic/Azores\":\"(GMT+00:00)Atlantic/Azores\",\"Atlantic/Bermuda\":\"(GMT-03:00)Atlantic/Bermuda\",\"Atlantic/Canary\":\"(GMT+01:00)Atlantic/Canary\",\"Atlantic/Cape_Verde\":\"(GMT-01:00)Atlantic/Cape_Verde\",\"Atlantic/Faeroe\":\"(GMT+01:00)Atlantic/Faeroe\",\"Atlantic/Faroe\":\"(GMT+01:00)Atlantic/Faroe\",\"Atlantic/Jan_Mayen\":\"(GMT+02:00)Atlantic/Jan_Mayen\",\"Atlantic/Madeira\":\"(GMT+01:00)Atlantic/Madeira\",\"Atlantic/Reykjavik\":\"(GMT+00:00)Atlantic/Reykjavik\",\"Atlantic/South_Georgia\":\"(GMT-02:00)Atlantic/South_Georgia\",\"Atlantic/St_Helena\":\"(GMT+00:00)Atlantic/St_Helena\",\"Atlantic/Stanley\":\"(GMT-03:00)Atlantic/Stanley\",\"Australia/ACT\":\"(GMT+10:00)Australia/ACT\",\"Australia/Adelaide\":\"(GMT+09:30)Australia/Adelaide\",\"Australia/Brisbane\":\"(GMT+10:00)Australia/Brisbane\",\"Australia/Broken_Hill\":\"(GMT+09:30)Australia/Broken_Hill\",\"Australia/Canberra\":\"(GMT+10:00)Australia/Canberra\",\"Australia/Currie\":\"(GMT+10:00)Australia/Currie\",\"Australia/Darwin\":\"(GMT+09:30)Australia/Darwin\",\"Australia/Eucla\":\"(GMT+08:45)Australia/Eucla\",\"Australia/Hobart\":\"(GMT+10:00)Australia/Hobart\",\"Australia/LHI\":\"(GMT+10:30)Australia/LHI\",\"Australia/Lindeman\":\"(GMT+10:00)Australia/Lindeman\",\"Australia/Lord_Howe\":\"(GMT+10:30)Australia/Lord_Howe\",\"Australia/Melbourne\":\"(GMT+10:00)Australia/Melbourne\",\"Australia/NSW\":\"(GMT+10:00)Australia/NSW\",\"Australia/North\":\"(GMT+09:30)Australia/North\",\"Australia/Perth\":\"(GMT+08:00)Australia/Perth\",\"Australia/Queensland\":\"(GMT+10:00)Australia/Queensland\",\"Australia/South\":\"(GMT+09:30)Australia/South\",\"Australia/Sydney\":\"(GMT+10:00)Australia/Sydney\",\"Australia/Tasmania\":\"(GMT+10:00)Australia/Tasmania\",\"Australia/Victoria\":\"(GMT+10:00)Australia/Victoria\",\"Australia/West\":\"(GMT+08:00)Australia/West\",\"Australia/Yancowinna\":\"(GMT+09:30)Australia/Yancowinna\",\"Brazil/Acre\":\"(GMT-05:00)Brazil/Acre\",\"Brazil/DeNoronha\":\"(GMT-02:00)Brazil/DeNoronha\",\"Brazil/East\":\"(GMT-03:00)Brazil/East\",\"Brazil/West\":\"(GMT-04:00)Brazil/West\",\"CET\":\"(GMT+02:00)CET\",\"CST6CDT\":\"(GMT-05:00)CST6CDT\",\"Canada/Atlantic\":\"(GMT-03:00)Canada/Atlantic\",\"Canada/Central\":\"(GMT-05:00)Canada/Central\",\"Canada/Eastern\":\"(GMT-04:00)Canada/Eastern\",\"Canada/Mountain\":\"(GMT-06:00)Canada/Mountain\",\"Canada/Newfoundland\":\"(GMT-02:30)Canada/Newfoundland\",\"Canada/Pacific\":\"(GMT-07:00)Canada/Pacific\",\"Canada/Saskatchewan\":\"(GMT-06:00)Canada/Saskatchewan\",\"Canada/Yukon\":\"(GMT-07:00)Canada/Yukon\",\"Chile/Continental\":\"(GMT-04:00)Chile/Continental\",\"Chile/EasterIsland\":\"(GMT-06:00)Chile/EasterIsland\",\"Cuba\":\"(GMT-04:00)Cuba\",\"EET\":\"(GMT+03:00)EET\",\"EST\":\"(GMT-05:00)EST\",\"EST5EDT\":\"(GMT-04:00)EST5EDT\",\"Egypt\":\"(GMT+02:00)Egypt\",\"Eire\":\"(GMT+01:00)Eire\",\"Etc/GMT\":\"(GMT+00:00)Etc/GMT\",\"Etc/GMT+0\":\"(GMT+00:00)Etc/GMT+0\",\"Etc/GMT+1\":\"(GMT-01:00)Etc/GMT+1\",\"Etc/GMT+10\":\"(GMT-10:00)Etc/GMT+10\",\"Etc/GMT+11\":\"(GMT-11:00)Etc/GMT+11\",\"Etc/GMT+12\":\"(GMT-12:00)Etc/GMT+12\",\"Etc/GMT+2\":\"(GMT-02:00)Etc/GMT+2\",\"Etc/GMT+3\":\"(GMT-03:00)Etc/GMT+3\",\"Etc/GMT+4\":\"(GMT-04:00)Etc/GMT+4\",\"Etc/GMT+5\":\"(GMT-05:00)Etc/GMT+5\",\"Etc/GMT+6\":\"(GMT-06:00)Etc/GMT+6\",\"Etc/GMT+7\":\"(GMT-07:00)Etc/GMT+7\",\"Etc/GMT+8\":\"(GMT-08:00)Etc/GMT+8\",\"Etc/GMT+9\":\"(GMT-09:00)Etc/GMT+9\",\"Etc/GMT-0\":\"(GMT+00:00)Etc/GMT-0\",\"Etc/GMT-1\":\"(GMT+01:00)Etc/GMT-1\",\"Etc/GMT-10\":\"(GMT+10:00)Etc/GMT-10\",\"Etc/GMT-11\":\"(GMT+11:00)Etc/GMT-11\",\"Etc/GMT-12\":\"(GMT+12:00)Etc/GMT-12\",\"Etc/GMT-13\":\"(GMT+13:00)Etc/GMT-13\",\"Etc/GMT-14\":\"(GMT+14:00)Etc/GMT-14\",\"Etc/GMT-2\":\"(GMT+02:00)Etc/GMT-2\",\"Etc/GMT-3\":\"(GMT+03:00)Etc/GMT-3\",\"Etc/GMT-4\":\"(GMT+04:00)Etc/GMT-4\",\"Etc/GMT-5\":\"(GMT+05:00)Etc/GMT-5\",\"Etc/GMT-6\":\"(GMT+06:00)Etc/GMT-6\",\"Etc/GMT-7\":\"(GMT+07:00)Etc/GMT-7\",\"Etc/GMT-8\":\"(GMT+08:00)Etc/GMT-8\",\"Etc/GMT-9\":\"(GMT+09:00)Etc/GMT-9\",\"Etc/GMT0\":\"(GMT+00:00)Etc/GMT0\",\"Etc/Greenwich\":\"(GMT+00:00)Etc/Greenwich\",\"Etc/UCT\":\"(GMT+00:00)Etc/UCT\",\"Etc/UTC\":\"(GMT+00:00)Etc/UTC\",\"Etc/Universal\":\"(GMT+00:00)Etc/Universal\",\"Etc/Zulu\":\"(GMT+00:00)Etc/Zulu\",\"Europe/Amsterdam\":\"(GMT+02:00)Europe/Amsterdam\",\"Europe/Andorra\":\"(GMT+02:00)Europe/Andorra\",\"Europe/Astrakhan\":\"(GMT+04:00)Europe/Astrakhan\",\"Europe/Athens\":\"(GMT+03:00)Europe/Athens\",\"Europe/Belfast\":\"(GMT+01:00)Europe/Belfast\",\"Europe/Belgrade\":\"(GMT+02:00)Europe/Belgrade\",\"Europe/Berlin\":\"(GMT+02:00)Europe/Berlin\",\"Europe/Bratislava\":\"(GMT+02:00)Europe/Bratislava\",\"Europe/Brussels\":\"(GMT+02:00)Europe/Brussels\",\"Europe/Bucharest\":\"(GMT+03:00)Europe/Bucharest\",\"Europe/Budapest\":\"(GMT+02:00)Europe/Budapest\",\"Europe/Busingen\":\"(GMT+02:00)Europe/Busingen\",\"Europe/Chisinau\":\"(GMT+03:00)Europe/Chisinau\",\"Europe/Copenhagen\":\"(GMT+02:00)Europe/Copenhagen\",\"Europe/Dublin\":\"(GMT+01:00)Europe/Dublin\",\"Europe/Gibraltar\":\"(GMT+02:00)Europe/Gibraltar\",\"Europe/Guernsey\":\"(GMT+01:00)Europe/Guernsey\",\"Europe/Helsinki\":\"(GMT+03:00)Europe/Helsinki\",\"Europe/Isle_of_Man\":\"(GMT+01:00)Europe/Isle_of_Man\",\"Europe/Istanbul\":\"(GMT+03:00)Europe/Istanbul\",\"Europe/Jersey\":\"(GMT+01:00)Europe/Jersey\",\"Europe/Kaliningrad\":\"(GMT+02:00)Europe/Kaliningrad\",\"Europe/Kiev\":\"(GMT+03:00)Europe/Kiev\",\"Europe/Kirov\":\"(GMT+03:00)Europe/Kirov\",\"Europe/Lisbon\":\"(GMT+01:00)Europe/Lisbon\",\"Europe/Ljubljana\":\"(GMT+02:00)Europe/Ljubljana\",\"Europe/London\":\"(GMT+01:00)Europe/London\",\"Europe/Luxembourg\":\"(GMT+02:00)Europe/Luxembourg\",\"Europe/Madrid\":\"(GMT+02:00)Europe/Madrid\",\"Europe/Malta\":\"(GMT+02:00)Europe/Malta\",\"Europe/Mariehamn\":\"(GMT+03:00)Europe/Mariehamn\",\"Europe/Minsk\":\"(GMT+03:00)Europe/Minsk\",\"Europe/Monaco\":\"(GMT+02:00)Europe/Monaco\",\"Europe/Moscow\":\"(GMT+03:00)Europe/Moscow\",\"Europe/Nicosia\":\"(GMT+03:00)Europe/Nicosia\",\"Europe/Oslo\":\"(GMT+02:00)Europe/Oslo\",\"Europe/Paris\":\"(GMT+02:00)Europe/Paris\",\"Europe/Podgorica\":\"(GMT+02:00)Europe/Podgorica\",\"Europe/Prague\":\"(GMT+02:00)Europe/Prague\",\"Europe/Riga\":\"(GMT+03:00)Europe/Riga\",\"Europe/Rome\":\"(GMT+02:00)Europe/Rome\",\"Europe/Samara\":\"(GMT+04:00)Europe/Samara\",\"Europe/San_Marino\":\"(GMT+02:00)Europe/San_Marino\",\"Europe/Sarajevo\":\"(GMT+02:00)Europe/Sarajevo\",\"Europe/Saratov\":\"(GMT+04:00)Europe/Saratov\",\"Europe/Simferopol\":\"(GMT+03:00)Europe/Simferopol\",\"Europe/Skopje\":\"(GMT+02:00)Europe/Skopje\",\"Europe/Sofia\":\"(GMT+03:00)Europe/Sofia\",\"Europe/Stockholm\":\"(GMT+02:00)Europe/Stockholm\",\"Europe/Tallinn\":\"(GMT+03:00)Europe/Tallinn\",\"Europe/Tirane\":\"(GMT+02:00)Europe/Tirane\",\"Europe/Tiraspol\":\"(GMT+03:00)Europe/Tiraspol\",\"Europe/Ulyanovsk\":\"(GMT+04:00)Europe/Ulyanovsk\",\"Europe/Uzhgorod\":\"(GMT+03:00)Europe/Uzhgorod\",\"Europe/Vaduz\":\"(GMT+02:00)Europe/Vaduz\",\"Europe/Vatican\":\"(GMT+02:00)Europe/Vatican\",\"Europe/Vienna\":\"(GMT+02:00)Europe/Vienna\",\"Europe/Vilnius\":\"(GMT+03:00)Europe/Vilnius\",\"Europe/Volgograd\":\"(GMT+04:00)Europe/Volgograd\",\"Europe/Warsaw\":\"(GMT+02:00)Europe/Warsaw\",\"Europe/Zagreb\":\"(GMT+02:00)Europe/Zagreb\",\"Europe/Zaporozhye\":\"(GMT+03:00)Europe/Zaporozhye\",\"Europe/Zurich\":\"(GMT+02:00)Europe/Zurich\",\"GB\":\"(GMT+01:00)GB\",\"GB-Eire\":\"(GMT+01:00)GB-Eire\",\"GMT\":\"(GMT+00:00)GMT\",\"GMT+0\":\"(GMT+00:00)GMT+0\",\"GMT-0\":\"(GMT+00:00)GMT-0\",\"GMT0\":\"(GMT+00:00)GMT0\",\"Greenwich\":\"(GMT+00:00)Greenwich\",\"HST\":\"(GMT-10:00)HST\",\"Hongkong\":\"(GMT+08:00)Hongkong\",\"Iceland\":\"(GMT+00:00)Iceland\",\"Indian/Antananarivo\":\"(GMT+03:00)Indian/Antananarivo\",\"Indian/Chagos\":\"(GMT+06:00)Indian/Chagos\",\"Indian/Christmas\":\"(GMT+07:00)Indian/Christmas\",\"Indian/Cocos\":\"(GMT+06:30)Indian/Cocos\",\"Indian/Comoro\":\"(GMT+03:00)Indian/Comoro\",\"Indian/Kerguelen\":\"(GMT+05:00)Indian/Kerguelen\",\"Indian/Mahe\":\"(GMT+04:00)Indian/Mahe\",\"Indian/Maldives\":\"(GMT+05:00)Indian/Maldives\",\"Indian/Mauritius\":\"(GMT+04:00)Indian/Mauritius\",\"Indian/Mayotte\":\"(GMT+03:00)Indian/Mayotte\",\"Indian/Reunion\":\"(GMT+04:00)Indian/Reunion\",\"Iran\":\"(GMT+04:30)Iran\",\"Israel\":\"(GMT+03:00)Israel\",\"Jamaica\":\"(GMT-05:00)Jamaica\",\"Japan\":\"(GMT+09:00)Japan\",\"Kwajalein\":\"(GMT+12:00)Kwajalein\",\"Libya\":\"(GMT+02:00)Libya\",\"MET\":\"(GMT+02:00)MET\",\"MST\":\"(GMT-07:00)MST\",\"MST7MDT\":\"(GMT-06:00)MST7MDT\",\"Mexico/BajaNorte\":\"(GMT-07:00)Mexico/BajaNorte\",\"Mexico/BajaSur\":\"(GMT-06:00)Mexico/BajaSur\",\"Mexico/General\":\"(GMT-05:00)Mexico/General\",\"NZ\":\"(GMT+12:00)NZ\",\"NZ-CHAT\":\"(GMT+12:45)NZ-CHAT\",\"Navajo\":\"(GMT-06:00)Navajo\",\"PRC\":\"(GMT+08:00)PRC\",\"PST8PDT\":\"(GMT-07:00)PST8PDT\",\"Pacific/Apia\":\"(GMT+13:00)Pacific/Apia\",\"Pacific/Auckland\":\"(GMT+12:00)Pacific/Auckland\",\"Pacific/Bougainville\":\"(GMT+11:00)Pacific/Bougainville\",\"Pacific/Chatham\":\"(GMT+12:45)Pacific/Chatham\",\"Pacific/Chuuk\":\"(GMT+10:00)Pacific/Chuuk\",\"Pacific/Easter\":\"(GMT-06:00)Pacific/Easter\",\"Pacific/Efate\":\"(GMT+11:00)Pacific/Efate\",\"Pacific/Enderbury\":\"(GMT+13:00)Pacific/Enderbury\",\"Pacific/Fakaofo\":\"(GMT+13:00)Pacific/Fakaofo\",\"Pacific/Fiji\":\"(GMT+12:00)Pacific/Fiji\",\"Pacific/Funafuti\":\"(GMT+12:00)Pacific/Funafuti\",\"Pacific/Galapagos\":\"(GMT-06:00)Pacific/Galapagos\",\"Pacific/Gambier\":\"(GMT-09:00)Pacific/Gambier\",\"Pacific/Guadalcanal\":\"(GMT+11:00)Pacific/Guadalcanal\",\"Pacific/Guam\":\"(GMT+10:00)Pacific/Guam\",\"Pacific/Honolulu\":\"(GMT-10:00)Pacific/Honolulu\",\"Pacific/Johnston\":\"(GMT-10:00)Pacific/Johnston\",\"Pacific/Kiritimati\":\"(GMT+14:00)Pacific/Kiritimati\",\"Pacific/Kosrae\":\"(GMT+11:00)Pacific/Kosrae\",\"Pacific/Kwajalein\":\"(GMT+12:00)Pacific/Kwajalein\",\"Pacific/Majuro\":\"(GMT+12:00)Pacific/Majuro\",\"Pacific/Marquesas\":\"(GMT-09:30)Pacific/Marquesas\",\"Pacific/Midway\":\"(GMT-11:00)Pacific/Midway\",\"Pacific/Nauru\":\"(GMT+12:00)Pacific/Nauru\",\"Pacific/Niue\":\"(GMT-11:00)Pacific/Niue\",\"Pacific/Norfolk\":\"(GMT+11:00)Pacific/Norfolk\",\"Pacific/Noumea\":\"(GMT+11:00)Pacific/Noumea\",\"Pacific/Pago_Pago\":\"(GMT-11:00)Pacific/Pago_Pago\",\"Pacific/Palau\":\"(GMT+09:00)Pacific/Palau\",\"Pacific/Pitcairn\":\"(GMT-08:00)Pacific/Pitcairn\",\"Pacific/Pohnpei\":\"(GMT+11:00)Pacific/Pohnpei\",\"Pacific/Ponape\":\"(GMT+11:00)Pacific/Ponape\",\"Pacific/Port_Moresby\":\"(GMT+10:00)Pacific/Port_Moresby\",\"Pacific/Rarotonga\":\"(GMT-10:00)Pacific/Rarotonga\",\"Pacific/Saipan\":\"(GMT+10:00)Pacific/Saipan\",\"Pacific/Samoa\":\"(GMT-11:00)Pacific/Samoa\",\"Pacific/Tahiti\":\"(GMT-10:00)Pacific/Tahiti\",\"Pacific/Tarawa\":\"(GMT+12:00)Pacific/Tarawa\",\"Pacific/Tongatapu\":\"(GMT+13:00)Pacific/Tongatapu\",\"Pacific/Truk\":\"(GMT+10:00)Pacific/Truk\",\"Pacific/Wake\":\"(GMT+12:00)Pacific/Wake\",\"Pacific/Wallis\":\"(GMT+12:00)Pacific/Wallis\",\"Pacific/Yap\":\"(GMT+10:00)Pacific/Yap\",\"Poland\":\"(GMT+02:00)Poland\",\"Portugal\":\"(GMT+01:00)Portugal\",\"ROC\":\"(GMT+08:00)ROC\",\"ROK\":\"(GMT+09:00)ROK\",\"Singapore\":\"(GMT+08:00)Singapore\",\"Turkey\":\"(GMT+03:00)Turkey\",\"UCT\":\"(GMT+00:00)UCT\",\"US/Alaska\":\"(GMT-08:00)US/Alaska\",\"US/Aleutian\":\"(GMT-09:00)US/Aleutian\",\"US/Arizona\":\"(GMT-07:00)US/Arizona\",\"US/Central\":\"(GMT-05:00)US/Central\",\"US/East-Indiana\":\"(GMT-04:00)US/East-Indiana\",\"US/Eastern\":\"(GMT-04:00)US/Eastern\",\"US/Hawaii\":\"(GMT-10:00)US/Hawaii\",\"US/Indiana-Starke\":\"(GMT-05:00)US/Indiana-Starke\",\"US/Michigan\":\"(GMT-04:00)US/Michigan\",\"US/Mountain\":\"(GMT-06:00)US/Mountain\",\"US/Pacific\":\"(GMT-07:00)US/Pacific\",\"US/Pacific-New\":\"(GMT-07:00)US/Pacific-New\",\"US/Samoa\":\"(GMT-11:00)US/Samoa\",\"UTC\":\"(GMT+00:00)UTC\",\"Universal\":\"(GMT+00:00)Universal\",\"W-SU\":\"(GMT+03:00)W-SU\",\"WET\":\"(GMT+01:00)WET\",\"Zulu\":\"(GMT+00:00)Zulu\"},\"cdnPath\":\"https://d14ctajtgrugd.cloudfront.net/\",\"fbIntegrations\":{\"hootsuite\":183319479511},\"tapfiliate\":{\"ID\":\"19078-6de0a9\"},\"whatsApp\":{\"src\":\"https://hub.360dialog.com/lp/submit-waba/\",\"partnerID\":\"N8q9EFPA\"}}");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(5);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../src/environments/environment.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var env = __webpack_require__(3);
var environment = __assign({ appName: 'SnatchBot', envName: 'PROD', host: 'account.snatchbot.me', cookiesHost: 'snatchbot.me', autoFlowsEndpoint: 'https://flows.snatchbot.me', autoFlowsSDKUrl: 'https://cdn.snatchbot.me/media/flows/sdk.js', cdnPath: 'https://d14ctajtgrugd.cloudfront.net/', webchatHost: 'https://webbot.me/', landingHost: 'https://snatchbot.me/', supportHost: "https://support.snatchbot.me/", usersMediaPath: 'https://dvgpba5hywmpo.cloudfront.net/media/image/', affiliatesHost: 'https://affiliates.snatchbot.me/', protocol: 'https://', production: true, test: false, i18nPrefix: '', gtagID: 'UA-145089299-1', domain: 'snatchbot.me', captchaSiteKey: '6Lfun78bAAAAAAmShjIK8o6j_DmL2DY00Wv3a7iS' }, env);

// EXTERNAL MODULE: ./node_modules/bluebird/js/browser/bluebird.js
var bluebird = __webpack_require__(2);

// CONCATENATED MODULE: ./script-embed.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landings", function() { return Landings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return script_embed_Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Init", function() { return script_embed_Init; });
var script_embed_assign = (undefined && undefined.__assign) || function () {
    script_embed_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return script_embed_assign.apply(this, arguments);
};


var HOST = environment.protocol + environment.host;
var WEBCHATHOST = environment.webchatHost;
var xmlhttp = new XMLHttpRequest();
var getJson = new XMLHttpRequest();
var bodyDefaultStyles = {
    overflow: String,
    overflowX: String,
    overflowY: String
};
var defualtSettings = {
    width: 600,
    height: 600,
    drag: 0,
    hash: '',
    uid: '',
    autoOpen: 0,
    iconSize: 63,
    customImg: 'https://dvgpba5hywmpo.cloudfront.net/media/image/1522254217jjdER1I8ol',
    customCSS: '',
    buttonStyle: 'bubble',
    buttonShowIcon: true,
    buttonLabel: '',
    buttonLabelColor: '#ffffff',
    buttonLabelSize: 18,
    buttonLabelWeight: 400,
    buttonLabelStyle: 'normal',
    buttonWidth: 90,
    buttonHeight: 90,
    buttonBgColor: 'red',
    deploy: false,
    popup: {
        position: 'left',
        enable: false,
        message: '',
        delay: 0
    },
    language: 'en'
};
var isLandings = false;
function Landings(value) { isLandings = value; }
var frameLoaded;
var script_embed_Modal = /** @class */ (function () {
    function Modal(settings) {
        this.settings = settings;
        this.method = {};
        this.modalContent = document.createElement('div');
        this.modalWrapper = document.createElement('div');
        this.modalClose = document.createElement('div');
        this.modalDrag = document.createElement('div');
    }
    Modal.prototype.initModalStyles = function (modalContent) {
        modalContent.id = 'sntch_webchat';
        modalContent.style.backgroundColor = '#ffffff';
        modalContent.style.width = this.settings.width + 'px';
        modalContent.style.height = this.settings.height + 'px';
        modalContent.style.position = 'fixed';
        modalContent.style.bottom = 10 + 'px';
        modalContent.style.right = 10 + 'px';
        modalContent.style.maxHeight = '100%';
        modalContent.style.maxWidth = '100%';
        modalContent.style.zIndex = '2147483647';
        modalContent.style.transform = 'translateY(110%)';
        modalContent.style.transition = '.5s transform';
        modalContent.style.borderRadius = '20px 20px 0 0';
        modalContent.style.overflow = 'hidden';
        modalContent.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
    };
    Modal.prototype.initWrapperStyles = function (modalWrapper) {
        modalWrapper.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
        modalWrapper.style.position = 'relative';
        modalWrapper.style.height = '100%';
    };
    Modal.prototype.initCloseStyles = function (modalClose) {
        var _this = this;
        modalClose.id = 'sntch_close';
        modalClose.style.position = 'absolute';
        modalClose.style.top = 20 + 'px';
        modalClose.style.right = 8 + 'px';
        modalClose.style.width = 40 + 'px';
        modalClose.style.height = 40 + 'px';
        modalClose.style.lineHeight = 20 + 'px';
        modalClose.style.textAlign = 'center';
        modalClose.style.cursor = 'pointer';
        modalClose.style.display = 'none';
        modalClose.innerHTML = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M1490 1245q0 40-24 68l-136 136q-24 24-68 24t-68-28l-294-294-294\n            294q-24 24-68 24t-68-28l-136-136q-24-24-24-68t24-68l294-294-294-294q-24-24-24-68t24-68l136-136q24-24 68-24t68\n            28l294 294 294-294q24-24 68-28t68 28l136 136q28 24 24 68t-24 68l-294 294 294 294q24 24 24 68z\"\n            fill=\"" + this.settings.closeBtnColor + "\"/>\n            </svg>";
        modalClose.onclick = function () {
            modalClose.style.display = 'none';
            _this.close();
        };
    };
    Modal.prototype.open = function (params) {
        this.initModalStyles(this.modalContent);
        this.initWrapperStyles(this.modalWrapper);
        this.initCloseStyles(this.modalClose);
        document.body.appendChild(this.modalContent);
        var iframe = document.createElement('iframe');
        for (var _i = 0, _a = Object.keys(params.iframe); _i < _a.length; _i++) {
            var attr = _a[_i];
            iframe.setAttribute(attr, params.iframe[attr]);
        }
        frameLoaded = new bluebird(function (resolve, reject) {
            iframe.onload = function (event) { resolve(); };
        });
        this.modalWrapper.appendChild(iframe);
        this.modalWrapper.appendChild(this.modalClose);
        if (this.settings.drag === 1) {
            this.modalWrapper.appendChild(this.modalDrag);
        }
        var styles = document.createElement('style');
        styles.innerHTML = "\n        @media print {\n            #sntch_webchat, #sntch_button, #sntch_popup {\n              visibility: hidden;\n            }\n          }\n        ";
        this.modalContent.appendChild(styles);
        this.modalContent.appendChild(this.modalWrapper);
        if (this.settings.autoOpening) {
            this.openChat();
        }
        this.checkMobile();
    };
    Modal.prototype.openChat = function () {
        this.modalContent.style.transform = 'translateY(0)';
        var iframe = document.getElementById('sntch_webchat').querySelector('iframe');
        iframe.onload = function () {
            iframe.contentWindow.postMessage('start', '*');
        };
        setTimeout(function () {
            var closeButton = document.getElementById('sntch_close');
            closeButton.style.display = '';
        }, 550);
    };
    Modal.prototype.close = function () {
        scrollOptions(false);
        this.modalContent.style.transform = 'translateY(105%)';
        var iframe = document.getElementById('sntch_webchat').querySelector('iframe');
        iframe.contentWindow.postMessage('close', '*');
    };
    Modal.prototype.checkMobile = function () {
        var maxWidth635 = window.matchMedia('all and (max-width: 635px)');
        var webchat = document.getElementById('sntch_webchat');
        var iframe = document.getElementById('sntch_iframe');
        // const clientHeight = document.documentElement.clientHeight + 'px';
        if (maxWidth635.matches) {
            webchat.style.width = '100%';
            // webchat.style.height = '';
            webchat.style.height = '100%';
            webchat.style.top = '0px';
            webchat.style.right = '0px';
            webchat.style.bottom = '0px';
            webchat.style.borderRadius = '';
            iframe.style.width = '100%';
            // iframe.style.height = clientHeight;
            iframe.style.height = '100%';
        }
    };
    return Modal;
}());

var script_embed_Init = /** @class */ (function () {
    function Init(BotID, userEmail, isTesting) {
        var _this = this;
        if (isTesting === void 0) { isTesting = false; }
        this.BotID = BotID;
        this.userEmail = userEmail;
        this.isTesting = isTesting;
        this.title = document.title;
        this.webchatBody = document.createElement('div');
        this.botID = this.BotID;
        this.customCss = document.createElement('link');
        this.button = document.createElement('div');
        this.popup = document.createElement('div');
        this.popupNoticeCircle = document.createElement('div');
        this.popupBtnClose = document.createElement('span');
        this.popupStyles = document.createElement('style');
        this.settings = defualtSettings;
        this.popupClosed = false;
        this.bindEvent = function (element, eventName, eventHandler) {
            console.log('event listener');
            if (element.addEventListener) {
                element.addEventListener(eventName, eventHandler, false);
            }
            else if (element.attachEvent) {
                element.attachEvent('on' + eventName, eventHandler);
            }
        };
        this.removeButton = function () {
            if (document.getElementById('sntch_button')) {
                document.getElementById('sntch_button').remove();
            }
            if (document.getElementById('sntch_webchat')) {
                document.getElementById('sntch_webchat').remove();
            }
            this.popupClose();
        };
        this.popupClose = function () {
            if (document.getElementById('sntch_popup')) {
                document.getElementById('sntch_popup').remove();
            }
            if (document.getElementById('sntch_popup_circle')) {
                document.getElementById('sntch_popup_circle').remove();
            }
            this.popupClosed = true;
        };
        this.popupTitleNotice = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.popupClosed) {
                    document.title = _this.title;
                    return;
                }
                document.title = '(1) ' + _this.translate.popupTitleNewMessage;
                setTimeout(function () {
                    document.title = _this.title;
                    _this.popupTitleNotice();
                }, 700);
            }, 700);
        };
        this.activatePopup = function () {
            var _this = this;
            if (this.settings.popup.enable && this.settings.popup.message !== '') {
                setTimeout(function () {
                    if (!_this.popupClosed) {
                        document.getElementById('sntch_popup').style.display = 'block';
                        if (_this.settings.popup.circleUnreadMessage) {
                            document.getElementById('sntch_popup_circle').style.display = 'block';
                            var rightOffset = 0;
                            if (_this.webchatBody.offsetLeft !== 0 && _this.webchatBody.offsetWidth !== 0) {
                                rightOffset = window.screen.width - _this.webchatBody.offsetLeft - _this.webchatBody.offsetWidth;
                            }
                            if (_this.settings.popup.position !== 'left') {
                                if (_this.popup.offsetWidth > _this.settings.buttonWidth) {
                                    if ((window.screen.width - (_this.settings.buttonWidth / 2 - 15) +
                                        _this.popup.offsetWidth - rightOffset + 10) < 230) {
                                        _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) +
                                            _this.popup.offsetWidth - rightOffset + 10 + 'px';
                                    }
                                    else {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                        setTimeout(function () {
                                            _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) + _this.popup.offsetWidth + 10 + 'px';
                                        }, 1);
                                    }
                                }
                                else {
                                    _this.webchatBody.style.width = _this.settings.buttonWidth - rightOffset + 10 + 'px';
                                }
                            }
                            if (_this.settings.popup.position === 'left') {
                                if ((window.screen.width - _this.settings.buttonWidth - rightOffset - 35) < 230) {
                                    _this.webchatBody.style.width = window.screen.width - rightOffset - 10 + 'px';
                                }
                                else {
                                    _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                    setTimeout(function () {
                                        _this.webchatBody.style.width = _this.popup.offsetWidth + _this.settings.buttonWidth + 35 + 'px';
                                    }, 1);
                                }
                            }
                        }
                        _this.popupTitleNotice();
                    }
                }, this.settings.popup.delay * 1000);
            }
        };
        this.initPopup = function name(popup) {
            popup.id = 'sntch_popup';
            popup.style.display = 'none';
            popup.innerText = this.settings.popup.message;
            popup.onclick = this.openPopupWebChat.bind(this);
            this.initPopupStyles(this.popupStyles);
            this.initPopupBtnClose(this.popupBtnClose);
            if (this.settings.popup.circleUnreadMessage) {
                this.initPopupNoticeCircle(this.popupNoticeCircle);
                this.button.appendChild(this.popupNoticeCircle);
            }
            this.popup.appendChild(this.popupBtnClose);
            this.popup.appendChild(this.popupStyles);
        };
        this.initPopupBtnClose = function name(popupBtnClose) {
            popupBtnClose.onclick = this.popupClose.bind(this);
            popupBtnClose.innerHTML = "<svg width=\"10\" height=\"10\" viewBox=\"0 0 2000 2000\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M1490 1245q0 40-24 68l-136 136q-24 24-68 24t-68-28l-294-294-294\n            294q-24 24-68 24t-68-28l-136-136q-24-24-24-68t24-68l294-294-294-294q-24-24-24-68t24-68l136-136q24-24 68-24t68\n            28l294 294 294-294q24-24 68-28t68 28l136 136q28 24 24 68t-24 68l-294 294 294 294q24 24 24 68z\"\n            fill=\"" + (this.settings.popup.btnClosePopupStyle === 'dark' ? '#585858' : '#d4d4d4') + "\"/></svg>\n        ";
        };
        this.initPopupNoticeCircle = function name(popupNoticeCircle) {
            popupNoticeCircle.id = 'sntch_popup_circle';
            popupNoticeCircle.innerHTML = '1';
        };
        this.initPopupStyles = function name(popupStyles) {
            var diffWidthScreen = window.screen.width;
            var popupOverflow = false;
            var rightOffset = 0;
            if (this.webchatBody.offsetLeft !== 0 && this.webchatBody.offsetWidth !== 0) {
                rightOffset = window.screen.width - this.webchatBody.offsetLeft - this.webchatBody.offsetWidth;
            }
            if (this.settings.popup.position === 'left') {
                diffWidthScreen = window.screen.width - this.settings.buttonWidth;
                if (diffWidthScreen - rightOffset - 35 < 195) {
                    popupOverflow = true;
                }
            }
            var positionSettings = {
                right: this.settings.buttonWidth + 25 + 'px',
                bottom: this.settings.buttonHeight / 2 + 'px',
                arrow: {
                    before: {
                        right: '-18px',
                        bottom: '10px'
                    },
                    after: {
                        right: '-15px',
                        bottom: '11px'
                    },
                    border: 'left'
                }
            };
            if (this.settings.popup.position !== 'left' || popupOverflow) {
                positionSettings = {
                    right: this.settings.buttonWidth / 2 - 15 + 'px',
                    bottom: (this.settings.buttonHeight + 25) + 'px',
                    arrow: {
                        before: {
                            right: '19px',
                            bottom: '-18px'
                        },
                        after: {
                            right: '20px',
                            bottom: '-15px'
                        },
                        border: 'top'
                    }
                };
            }
            // this.settings.buttonHeight
            popupStyles.innerHTML = "\n            @media (max-width: 420px) {\n                #sntch_popup {\n                    max-width: " + (this.settings.popup.position === 'left'
                ? (popupOverflow
                    ? (window.screen.width - rightOffset - 20) + 'px'
                    : (diffWidthScreen - rightOffset - 35) + 'px')
                : (window.screen.width - rightOffset - 35) + 'px') + " !important;\n                }\n            }\n            @media (min-width: 421px) {\n                #sntch_popup {\n                    max-width: " + (this.settings.popup.position === 'left' && popupOverflow
                ? (diffWidthScreen - rightOffset > 419 ? '400px' : (window.screen.width - rightOffset - 35) + 'px')
                : (diffWidthScreen - rightOffset > 419 ? '400px' : (diffWidthScreen - rightOffset - 35) + 'px')) + " !important;\n                }\n            }\n\n            #sntch_popup {\n                position: absolute;\n                z-index: 2147483646;\n                right: " + positionSettings.right + ";\n                bottom: " + positionSettings.bottom + ";\n                max-width: 400px;\n                box-shadow: 0 2px 6px 0 rgba(0,0,0,.4);\n                padding: 15px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                background-color: " + this.settings.popup.bgColor + ";\n                color: " + this.settings.popup.textColor + ";\n                margin-left: 10px;\n                cursor: pointer;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n                word-wrap: break-word;\n            }\n            #sntch_popup::before {\n                content: '';\n                position: absolute;\n                right: " + positionSettings.arrow.before.right + ";\n                bottom: " + positionSettings.arrow.before.bottom + ";\n                display: block;\n                border: 9px solid transparent;\n                border-" + positionSettings.arrow.border + ": 9px solid #ccc;\n            }\n            #sntch_popup::after {\n                content: '';\n                position: absolute;\n                right: " + positionSettings.arrow.after.right + ";\n                bottom: " + positionSettings.arrow.after.bottom + ";\n                display: block;\n                border: 8px solid transparent;\n                border-" + positionSettings.arrow.border + ": 8px solid " + this.settings.popup.bgColor + ";\n            }\n\n            #sntch_popup > p {\n                overflow: hidden;\n                word-break: break-word;\n                white-space: pre-line;\n                margin: 0;\n                padding: 0;\n                line-height: 1.1;\n            }\n            " + (isMobile() ? '' : "\n                #sntch_popup > span {\n                    opacity: 0;\n                }\n                #sntch_popup:hover > span {\n                    opacity: 1;\n                }\n            ") + "\n            #sntch_popup > span > svg {\n                width: 15px;\n                height: 15px;\n                position: absolute;\n                top: 2px;\n                left: 2px;\n                cursor: pointer;\n                padding: 7px;\n                margin: -5px;\n                box-sizing: content-box;\n            }\n\n            #sntch_popup > span:hover {\n                opacity: 0.8;\n            }\n\n            #sntch_popup_circle {\n                display: none;\n                position: absolute;\n                right: " + (this.settings.buttonStyle === 'bubble' ? 2 : -8) + "px;\n                top: " + (this.settings.buttonStyle === 'bubble' ? -3 : -8) + "px;\n                font-size: 14px;\n                background-color: #f00;\n                color: #fff;\n                border: 3px solid #fff;\n                padding: 5px;\n                width: 10px;\n                height: 10px;\n                border-radius: 100%;\n                text-align: center;\n                line-height: 12px;\n                font-weight: bold;\n                box-sizing: content-box;\n            }\n        ";
        };
        this.initStylesDiv = function (div) {
            div.style.zIndex = '2147483646';
            div.id = 'sntch_block';
            div.style.position = 'fixed';
            div.style.bottom = '0';
            div.style.right = '0';
            div.style.width = window.screen.width + 'px';
            div.style.height = '5px';
        };
        this.initStylesButton = function (button, hash) {
            button.style.zIndex = '2147483646';
            button.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
            button.style.width = this.settings.buttonWidth + 'px';
            button.style.height = this.settings.buttonHeight + 'px';
            button.style.color = this.settings.buttonLabelColor;
            button.style.fontSize = this.settings.buttonLabelSize + 'px';
            button.style.fontWeight = this.settings.buttonLabelWeight.toString(10);
            button.style.fontStyle = this.settings.buttonLabelStyle;
            button.style.backgroundColor = this.settings.buttonBgColor;
            // commented out for show popup notice circle
            // button.style.overflow = 'hidden';
            button.style.justifyContent = 'center';
            button.style.alignItems = 'center';
            button.style.display = 'none';
            button.style.cursor = 'pointer';
            button.id = 'sntch_button';
            button.style.position = 'absolute';
            button.style.right = '10px';
            button.style.bottom = '10px';
            button.style.boxSizing = 'border-box';
            button.style.padding = '10px';
            this.initWebchat.bind(this)();
            button.onclick = this.openWebChat.bind(this);
            button.setAttribute('hash', hash);
            if (this.settings.buttonShowIcon) {
                button.style.backgroundImage = 'url(' + this.settings.customImg + ')';
                button.style.backgroundSize = 'cover';
                button.style.backgroundPosition = 'center';
            }
            switch (this.settings.buttonStyle) {
                case 'bubble':
                    button.innerHTML = '';
                    button.style.borderRadius = '50%';
                    break;
                case 'rounded':
                    if (!this.settings.buttonLabel) {
                        this.settings.buttonLabel = '';
                    }
                    button.innerHTML = "<div style=\"overflow: hidden\">" + this.settings.buttonLabel + "</div>";
                    button.style.borderRadius = '10px';
                    break;
                case 'rectangle':
                    if (!this.settings.buttonLabel) {
                        this.settings.buttonLabel = '';
                    }
                    button.innerHTML = "<div style=\"overflow: hidden\">" + this.settings.buttonLabel + "</div>";
                    button.style.borderRadius = '0';
                    break;
                default:
                    break;
            }
        };
        this.initWebchat = function (ev) {
            if (document.getElementById('sntch_webchat')) {
                document.getElementById('sntch_webchat').remove();
            }
            var data = {
                iframe: {
                    style: 'max-width: 100%; width:' + this.settings.width + 'px; height: ' + this.settings.height + 'px; border:0',
                    src: WEBCHATHOST + this.settings.hash + (this.isTesting ? '?test=1' : '?test=0') +
                        '&start=' + '&botID=' + this.settings.botID + '&embedScript=1' +
                        (isLandings ? '&landing=1' : '&landing=0'),
                    name: 'mobile',
                    id: 'sntch_iframe',
                    allow: 'microphone'
                },
                draggable: false,
                openCallback: function () { }
            };
            var modal = new script_embed_Modal(this.settings);
            modal.open(data);
            if (isMobile()) {
                var iframe = document.getElementsByTagName('iframe')[0];
                if (iframe) {
                    iframe.style.height = '100%';
                }
            }
        };
        this.openPopupWebChat = function () {
            if (!document.getElementById('sntch_popup')) {
                return;
            }
            this.openWebChat(this);
        };
        this.openWebChat = function () {
            this.popupClose();
            scrollOptions(true);
            var webchat = document.getElementById('sntch_webchat');
            var iframe = document.getElementById('sntch_webchat').querySelector('iframe');
            webchat.style.transform = 'translateY(0)';
            setTimeout(function () {
                var closeButton = document.getElementById('sntch_close');
                closeButton.style.display = '';
            }, 550);
            frameLoaded.then(function () {
                iframe.contentWindow.postMessage('embed not autoopening start', '*');
            });
        };
        if (!userEmail) {
            userEmail = 'tempID';
        }
        var data = {
            botID: this.BotID,
        };
        if (this.BotID !== 0) {
            xmlhttp.open('POST', HOST + '/webchat/getSettings', true);
            xmlhttp.send(JSON.stringify(data));
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                    if (xmlhttp.status === 200 && xmlhttp.responseText.indexOf('<!doctype html>') !== 0) {
                        _this.settings = script_embed_assign(script_embed_assign({}, _this.settings), JSON.parse(xmlhttp.response));
                        getJson.open('GET', WEBCHATHOST + 'webchat/api/getTranslation?lang=' + _this.settings.language, true);
                        getJson.onload = function () {
                            if (getJson.readyState === XMLHttpRequest.DONE && getJson.status === 200) {
                                _this.translate = JSON.parse(getJson.response);
                            }
                        };
                        getJson.send(null);
                        if (_this.settings.deploy === true) {
                            var userAgent = window.navigator.userAgent;
                            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
                                setTimeout(function () {
                                    document.getElementById('sntch_button').style.display = 'block';
                                    _this.activatePopup();
                                }, 1000);
                            }
                            else {
                                _this.bindEvent(window, 'message', function (e) {
                                    _this.button.style.display = 'flex';
                                    _this.activatePopup();
                                });
                            }
                        }
                    }
                    if (_this.settings.customCSS === '1') {
                        _this.customCss.type = 'text/css';
                        _this.customCss.rel = 'stylesheet';
                        var host = environment.host.split('.');
                        _this.customCss.href = 'https://dvgpba5hywmpo.cloudfront.net/customcss/' + host[0] + _this.BotID + '.css';
                        document.getElementsByTagName('head')[0].appendChild(_this.customCss);
                    }
                    _this.initStylesButton(_this.button, _this.settings.hash);
                    _this.initStylesDiv(_this.webchatBody);
                    _this.initPopup(_this.popup);
                    _this.webchatBody.appendChild(_this.button);
                    _this.webchatBody.appendChild(_this.popup);
                    document.body.appendChild(_this.webchatBody);
                    var userAg = window.navigator.userAgent;
                    if (userAg.match(/Mac/i)) {
                        var previousValue_1 = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                        setTimeout(function () {
                            document.body.style.overflow = previousValue_1;
                        }, 2000);
                    }
                    if (_this.settings.popup.enable && _this.settings.popup.message !== '') {
                        _this.bindEvent(window, 'resize', function (e) {
                            if (!_this.popupClosed) {
                                if (document.getElementById('sntch_popup')) {
                                    document.getElementById('sntch_popup').remove();
                                }
                                _this.initPopup(_this.popup);
                                _this.webchatBody.appendChild(_this.popup);
                                document.getElementById('sntch_popup').style.display = 'block';
                                var rightOffset = 0;
                                if (_this.webchatBody.offsetLeft !== 0 && _this.webchatBody.offsetWidth !== 0) {
                                    rightOffset = window.screen.width - _this.webchatBody.offsetLeft - _this.webchatBody.offsetWidth;
                                }
                                if (_this.settings.popup.position === 'left') {
                                    if ((window.screen.width - _this.settings.buttonWidth - rightOffset - 35) < 230) {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset - 10 + 'px';
                                    }
                                    else {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                        setTimeout(function () {
                                            _this.webchatBody.style.width = _this.popup.offsetWidth + _this.settings.buttonWidth + 35 + 'px';
                                        }, 1);
                                    }
                                }
                                if (_this.settings.popup.position !== 'left') {
                                    if ((window.screen.width - (_this.settings.buttonWidth / 2 - 15) +
                                        _this.popup.offsetWidth - rightOffset + 10) < 230) {
                                        _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) +
                                            _this.popup.offsetWidth - rightOffset + 10 + 'px';
                                    }
                                    else {
                                        _this.webchatBody.style.width = window.screen.width - rightOffset + 'px';
                                        setTimeout(function () {
                                            _this.webchatBody.style.width = (_this.settings.buttonWidth / 2 - 15) +
                                                _this.popup.offsetWidth + 10 + 'px';
                                        }, 1);
                                    }
                                }
                            }
                        });
                    }
                }
            };
        }
        else {
            this.removeButton();
        }
    }
    return Init;
}());

function scrollOptions(open) {
    if (isMobile()) {
        var body = document.getElementsByTagName('body')[0];
        if (body) {
            if (open) {
                var overflow = getComputedStyle(body).overflow;
                var overflowY = getComputedStyle(body).overflowY;
                var overflowX = getComputedStyle(body).overflowX;
                if (!!overflow) {
                    Object.assign(bodyDefaultStyles, { overflow: overflow });
                }
                if (!!overflowY) {
                    Object.assign(bodyDefaultStyles, { overflowY: overflowY });
                }
                if (!!overflowX) {
                    Object.assign(bodyDefaultStyles, { overflowX: overflowX });
                }
                body.style.overflow = 'hidden';
            }
            else {
                if (body.style.overflow && body.style.overflow === 'hidden') {
                    body.style.overflow = bodyDefaultStyles.overflow.toString();
                }
                if (body.style.overflowX && body.style.overflowX === 'hidden') {
                    body.style.overflowX = bodyDefaultStyles.overflowX.toString();
                }
                if (body.style.overflowY && body.style.overflowY === 'hidden') {
                    body.style.overflowY = bodyDefaultStyles.overflowY.toString();
                }
            }
        }
    }
}
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}


/***/ })
/******/ ]);