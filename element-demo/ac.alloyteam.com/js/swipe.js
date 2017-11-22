/* transformjs 1.1.6
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs
 */
; (function () {

    var DEG_TO_RAD =  0.017453292519943295;

    var Matrix3D = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        this.elements = window.Float32Array ? new Float32Array(16) : [];
        var te = this.elements;
        te[0] = (n11 !== undefined) ? n11 : 1; te[4] = n12 || 0; te[8] = n13 || 0; te[12] = n14 || 0;
        te[1] = n21 || 0; te[5] = (n22 !== undefined) ? n22 : 1; te[9] = n23 || 0; te[13] = n24 || 0;
        te[2] = n31 || 0; te[6] = n32 || 0; te[10] = (n33 !== undefined) ? n33 : 1; te[14] = n34 || 0;
        te[3] = n41 || 0; te[7] = n42 || 0; te[11] = n43 || 0; te[15] = (n44 !== undefined) ? n44 : 1;
    };


    Matrix3D.prototype = {
        set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
            var te = this.elements;
            te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
            te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
            te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
            te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
            return this;
        },
        identity: function () {
            this.set(
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );
            return this;
        },
        multiplyMatrices: function (a, be) {

            var ae = a.elements;
            var te = this.elements;
            var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
            var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
            var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
            var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

            var b11 = be[0], b12 = be[1], b13 = be[2], b14 = be[3];
            var b21 = be[4], b22 = be[5], b23 = be[6], b24 = be[7];
            var b31 = be[8], b32 = be[9], b33 = be[10], b34 = be[11];
            var b41 = be[12], b42 = be[13], b43 = be[14], b44 = be[15];

            te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

            te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

            te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

            te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

            return this;

        },
        // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
        _rounded: function (value, i) {
            i = Math.pow(10, i || 15);
            // default
            return Math.round(value * i) / i;
        },
        _arrayWrap: function (arr) {
            return window.Float32Array ? new Float32Array(arr) : arr;
        },
        appendTransform: function (x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

            var rx = rotateX * DEG_TO_RAD;
            var cosx = this._rounded(Math.cos(rx));
            var sinx = this._rounded(Math.sin(rx));
            var ry = rotateY * DEG_TO_RAD;
            var cosy = this._rounded(Math.cos(ry));
            var siny = this._rounded(Math.sin(ry));
            var rz = rotateZ * DEG_TO_RAD;
            var cosz = this._rounded(Math.cos(rz * -1));
            var sinz = this._rounded(Math.sin(rz * -1));

            this.multiplyMatrices(this, this._arrayWrap([
                1, 0, 0, x,
                0, cosx, sinx, y,
                0, -sinx, cosx, z,
                0, 0, 0, 1
            ]));

            this.multiplyMatrices(this, this._arrayWrap([
                cosy, 0, siny, 0,
                0, 1, 0, 0,
                -siny, 0, cosy, 0,
                0, 0, 0, 1
            ]));

            this.multiplyMatrices(this, this._arrayWrap([
                cosz * scaleX, sinz * scaleY, 0, 0,
                -sinz * scaleX, cosz * scaleY, 0, 0,
                0, 0, 1 * scaleZ, 0,
                0, 0, 0, 1
            ]));

            if (skewX || skewY) {
                this.multiplyMatrices(this, this._arrayWrap([
                    this._rounded(Math.cos(skewX * DEG_TO_RAD)), this._rounded(Math.sin(skewX * DEG_TO_RAD)), 0, 0,
                    -1 * this._rounded(Math.sin(skewY * DEG_TO_RAD)), this._rounded(Math.cos(skewY * DEG_TO_RAD)), 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1
                ]));
            }


            if (originX || originY || originZ) {
                this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
                this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
                this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
            }
            return this;
        }
    };

    var Matrix2D = function(a, b, c, d, tx, ty) {
        this.a = a == null ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = d == null ? 1 : d;
        this.tx = tx || 0;
        this.ty = ty || 0;
        return this;
    };

    Matrix2D.prototype = {
        identity : function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this;
        },
        appendTransform : function(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
            if (rotation % 360) {
                var r = rotation * DEG_TO_RAD;
                var cos = Math.cos(r);
                var sin = Math.sin(r);
            } else {
                cos = 1;
                sin = 0;
            }
            if (skewX || skewY) {
                skewX *= DEG_TO_RAD;
                skewY *= DEG_TO_RAD;
                this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            } else {
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
            }
            if (originX || originY) {
                this.tx -= originX * this.a + originY * this.c;
                this.ty -= originX * this.b + originY * this.d;
            }
            return this;
        },
        append : function(a, b, c, d, tx, ty) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + this.tx;
            this.ty = tx * b1 + ty * d1 + this.ty;
            return this;
        },
        initialize : function(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
        },
        setValues : function(a, b, c, d, tx, ty) {
            this.a = a == null ? 1 : a;
            this.b = b || 0;
            this.c = c || 0;
            this.d = d == null ? 1 : d;
            this.tx = tx || 0;
            this.ty = ty || 0;
            return this;
        },
        copy : function(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        }
    };

    function observe(target, props, callback) {
        for (var i = 0, len = props.length; i < len; i++) {
            var prop = props[i];
            watch(target, prop, callback);
        }
    }

    function watch(target, prop, callback) {
        Object.defineProperty(target, prop, {
            get: function () {
                return this["_" + prop];
            },
            set: function (value) {
                this["_" + prop] = value;
                callback();
            }
        });
    }

    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    function Transform(obj, notPerspective) {
        if(obj.hasOwnProperty("translateX")) return;
        var observeProps = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
            objIsElement = isElement(obj);
        if (!notPerspective) {
            observeProps.push("perspective");
        }

        observe(
            obj,
            observeProps,
            function () {
                var mtx = obj.matrix3d.identity().appendTransform(obj.translateX, obj.translateY, obj.translateZ, obj.scaleX, obj.scaleY, obj.scaleZ, obj.rotateX, obj.rotateY, obj.rotateZ, obj.skewX, obj.skewY, obj.originX, obj.originY, obj.originZ);
                var transform = (notPerspective ? "" : "perspective(" + obj.perspective + "px) ") + "matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
                if (objIsElement) {
                    obj.style.transform = obj.style.msTransform = obj.style.OTransform = obj.style.MozTransform = obj.style.webkitTransform = transform;
                } else {
                    obj.transform = transform;
                }
            });

        obj.matrix3d = new Matrix3D();
        if (!notPerspective) {
            obj.perspective = 500;
        }
        obj.scaleX = obj.scaleY = obj.scaleZ = 1;
        //由于image自带了x\y\z，所有加上translate前缀
        obj.translateX = obj.translateY = obj.translateZ = obj.rotateX = obj.rotateY = obj.rotateZ = obj.skewX = obj.skewY = obj.originX = obj.originY = obj.originZ = 0;
    }

    Transform.getMatrix3D = function (option) {
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            originZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix3D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.translateZ, defaultOption.scaleX, defaultOption.scaleY, defaultOption.scaleZ, defaultOption.rotateX, defaultOption.rotateY, defaultOption.rotateZ, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY, defaultOption.originZ).elements;

    }

    Transform.getMatrix2D = function(option){
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            rotation: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            scaleX: 1,
            scaleY: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix2D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.scaleX, defaultOption.scaleY, defaultOption.rotation, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY);
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = Transform;
    }else {
        window.Transform = Transform;
    }
})();

/* AlloyTouch CSS v0.2.2
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */
; (function () {
    'use strict';

    if (!Date.now)
        Date.now = function () { return new Date().getTime(); };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
        || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); },
                nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

; (function () {

    var _elementStyle = document.createElement('div').style,
        endTransitionEventName,
        transitionDuration,
        transitionTimingFunction,
        transform;

    if ('transform' in _elementStyle) {
        transform = 'transform';
        endTransitionEventName = 'transitionend';
        transitionDuration = 'transitionDuration';
        transitionTimingFunction = 'transitionTimingFunction';
    } else if ('webkitTransform' in _elementStyle) {
        transform = 'webkitTransform';
        endTransitionEventName = 'webkitTransitionEnd';
        transitionDuration = 'webkitTransitionDuration';
        transitionTimingFunction = 'webkitTransitionTimingFunction';
    } else {
        //throw 'please use a modern browser'
    }

    var ease = 'cubic-bezier(0.1, 0.57, 0.1, 1)';

    function reverseEase(y) {
        return 1 - Math.sqrt(1 - y * y);
    }

    function bind(element, type, callback) {
        element.addEventListener(type, callback, false);
    }

    function unbind(element, type, callback) {
        element.removeEventListener(type, callback);
    }

    function preventDefaultTest(el, exceptions) {
        for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }
        return false;
    }

    var AlloyTouch = function (option) {
        this.scroller = option.target;
        this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
        this.vertical = this._getValue(option.vertical,true) ;
        this.property = option.property;
        this.preventDefault = this._getValue(option.preventDefault,true) ;
        this.sensitivity =  this._getValue(option.sensitivity,1);
        this.lockDirection = this._getValue(option.lockDirection, true);

        this.initialValue = this._getValue(option.initialValue, this.scroller[this.property]);
        this.scroller[this.property] = this.initialValue;

        this.moveFactor = this._getValue(option.moveFactor, 1);
        this.factor = this._getValue(option.factor, 1);
        this.outFactor =  this._getValue(option.outFactor, 0.3);

        this.min = option.min;
        this.max = option.max;

        this.maxRegion = this._getValue(option.maxRegion,60);

        this.deceleration = 0.0006;
        this.maxRegion = this._getValue(option.maxRegion, 600);
        this.springMaxRegion = this._getValue(option.springMaxRegion, 60);

        this.change = option.change || function () { };
        this.touchEnd = option.touchEnd || function () { };
        this.touchStart = option.touchStart || function () { };
        this.touchMove = option.touchMove || function () { };
        this.touchCancel = option.touchMove || function () { };
        this.animationEnd = option.animationEnd || function () { };

        this.preventDefaultException = {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/};
        this.hasMin = !(this.min === void 0);
        this.hasMax = !(this.max === void 0);
        this.isTouchStart = false;
        this.step = option.step;
        this.inertia = this._getValue(option.inertia,true);
        this.maxSpeed = option.maxSpeed;
        this.hasMaxSpeed = !(this.maxSpeed === void 0);

        if (this.hasMax && this.hasMin) {
            if (this.min > this.max) throw "min value can't be greater than max value";
            this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
        }

        this._startHandler = this._start.bind(this);
        this._moveHandler = this._move.bind(this);
        this._transitionEndHandler = this._transitionEnd.bind(this);
        this._endHandler = this._end.bind(this);
        this._cancelHandler = this._cancel.bind(this);
        bind(this.element, "touchstart", this._startHandler);
        bind(this.scroller, endTransitionEventName, this._transitionEndHandler);
        bind(window, "touchmove", this._moveHandler);
        bind(window, "touchend", this._endHandler);
        bind(window, "touchcancel", this._cancelHandler);
        //当有step设置的时候防止执行两次end
        this._endCallbackTag = true;

        this._endTimeout = null;
    };

    AlloyTouch.prototype = {
        _getValue: function (obj, defaultValue) {
            return obj === void 0 ? defaultValue : obj;
        },
        _transitionEnd: function () {
            if (!this._triggerTransitionEnd) return;
            var current = this.scroller[this.property];
            if (current < this.min) {
                this.to(this.min, 600, ease);
                return;
            } else if (current > this.max) {
                this.to(this.max, 600, ease);
                return;
            }

            if (this.step) {
                this.correction();
                if (this._endCallbackTag) {
                    this._endTimeout = setTimeout(function () {
                        this.animationEnd.call(this, current);
                        cancelAnimationFrame(this.tickID);
                    }.bind(this), 400);
                    this._endCallbackTag = false;
                }
            } else {
                this.animationEnd.call(this, current);
                cancelAnimationFrame(this.tickID);
            }
        },
        _cancelAnimation: function () {
            this.scroller.style[transitionDuration] = '0ms';
            this.scroller[this.property] = this.getComputedPosition();

        },
        getComputedPosition: function () {
            var matrix = window.getComputedStyle(this.scroller, null);
            matrix = matrix[transform].split(')')[0].split(', ');
            return this.vertical ? (+(matrix[13] || matrix[5])) : (+(matrix[12] || matrix[4]));
        },
        _tick: function () {
            this.change.call(this, this.getComputedPosition());
            this.tickID = requestAnimationFrame(this._tick.bind(this));
        },
        _start: function (evt) {
            cancelAnimationFrame(this.tickID);
            this._tick();

            this._endCallbackTag = true;
            this.isTouchStart = true;
            this._firstTouchMove = true;
            this._preventMove = false;
            this.touchStart.call(this,evt,this.scroller[this.property]);
            this._cancelAnimation();
            clearTimeout(this._endTimeout);
            if (this.hasMax && this.hasMin) {
                this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
            }
            this.startTime = new Date().getTime();
            this._startX = this.preX = evt.touches[0].pageX;
            this._startY = this.preY = evt.touches[0].pageY;
            this.start = this.vertical ? this.preY : this.preX;
        },
        _move: function (evt) {
            if (this.isTouchStart) {
                var dx = Math.abs(evt.touches[0].pageX - this._startX), dy = Math.abs(evt.touches[0].pageY - this._startY);
                if (this._firstTouchMove && this.lockDirection) {
                    var dDis = dx - dy;
                    if (dDis > 0 && this.vertical) {
                        this._preventMove = true;
                    } else if (dDis < 0 && !this.vertical) {
                        this._preventMove = true;
                    }
                    this._firstTouchMove = false;
                }
                if (dx < 10 && dy < 10) return;

                if (!this._preventMove) {
                    var f = this.moveFactor;
                    var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sensitivity;
                    if (this.hasMax && this.scroller[this.property] > this.max && d > 0) {
                        f = this.outFactor;
                    } else if (this.hasMin && this.scroller[this.property] < this.min && d < 0) {
                        f = this.outFactor;
                    }
                    d *= f;
                    this.preX = evt.touches[0].pageX;
                    this.preY = evt.touches[0].pageY;
                    this.scroller[this.property] += d;

                    var timestamp = new Date().getTime();
                    if (timestamp - this.startTime > 300) {
                        this.startTime = timestamp;
                        this.start = this.vertical ? this.preY : this.preX;
                    }
                    this.touchMove.call(this,evt,this.scroller[this.property]);

                }

                if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                    evt.preventDefault();
                }
            }
        },
        _end: function (evt) {
            if (this.isTouchStart) {
                var self = this,
                    current = this.scroller[this.property];
                if (this.touchEnd.call(this, evt, current) === false) {
                    this._triggerTransitionEnd = false;
                    return;
                } else {
                    this._triggerTransitionEnd = true;
                }
                if (this.hasMax && current > this.max) {
                    this.to(this.max, 600, ease);
                } else if (this.hasMin && current < this.min) {
                    this.to(this.min, 600, ease);
                } else if (this.inertia && !this._preventMove) {
                    var dt = new Date().getTime() - this.startTime;
                    if (dt < 300) {

                        var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
                            speed = Math.abs(distance) / dt,
                            speed2 = this.factor * speed;
                        if(this.hasMaxSpeed&&speed2>this.maxSpeed) {
                            speed2 = this.maxSpeed;
                        }
                        var destination = current + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

                        var tRatio = 1;
                        if (destination < this.min) {
                            if (destination < this.min - this.maxRegion) {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
                            }
                        } else if (destination > this.max) {
                            if (destination > this.max + this.maxRegion) {
                                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;

                            }
                        }
                        var duration = Math.round(speed / self.deceleration) * tRatio;

                        self.to(Math.round(destination), duration, ease);
                    } else {
                        if (self.step) {
                            self.correction();
                        }
                    }
                } else {
                    if (self.step) {
                        self.correction();
                    }
                }
                // if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                //     evt.preventDefault();
                // }
                this.isTouchStart = false;
            }
        },
        _cancel: function (evt) {
            cancelAnimationFrame(this.tickID);
            if (this.step) {
                this.correction();
            }
            this.touchCancel.call(this, evt);
        },
        to: function (value, time, u_ease) {
            var el = this.scroller,
                property = this.property;

            el.style[transitionDuration] =  this._getValue(time, 600) + 'ms';
            el.style[transitionTimingFunction] = u_ease||ease;
            el[property] = value;
        },
        correction: function () {
            var m_str = window.getComputedStyle(this.scroller)[transform];
            var value = this.vertical ? parseInt(m_str.split(',')[13]) : parseInt(m_str.split(',')[12]);
            var rpt = Math.floor(Math.abs(value / this.step));
            var dy = value % this.step;
            var result;
            if (Math.abs(dy) > this.step / 2) {
                result = (value < 0 ? -1 : 1) * (rpt + 1) * this.step;
                if (result > this.max) result = this.max;
                if (result < this.min) result = this.min;
                this.to(result, 400, ease);
            } else {
                result = (value < 0 ? -1 : 1) * rpt * this.step;
                if (result > this.max) result = this.max;
                if (result < this.min) result = this.min;
                this.to(result, 400, ease);
            }
        },
        destroy: function () {
            unbind(this.element, "touchstart", this._startHandler);
            unbind(this.scroller, endTransitionEventName, this._transitionEndHandler);
            unbind(window, "touchmove", this._moveHandler);
            unbind(window, "touchend", this._endHandler);
            unbind(window, "touchcancel", this._cancelHandler);
        }
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = AlloyTouch;
    } else {
        window.AlloyTouch = AlloyTouch;
    }

})();