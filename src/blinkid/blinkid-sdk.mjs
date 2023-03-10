/* eslint-disable */
/* eslint-disable no-unused-expressions */
/*! ****************************************************************************
Copyright (c) Microblink. All rights reserved.

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
***************************************************************************** */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e, t, i, n) {
    return new (i || (i = Promise))(function (s, a) {
        function o(e) {
            try {
                A(n.next(e));
            } catch (e) {
                a(e);
            }
        }
        function r(e) {
            try {
                A(n.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function A(e) {
            var t;
            e.done
                ? s(e.value)
                : ((t = e.value),
                  t instanceof i
                      ? t
                      : new i(function (e) {
                            e(t);
                        })).then(o, r);
        }
        A((n = n.apply(e, t || [])).next());
    });
}
let t = 0;
class i {
    constructor(e) {
        (this.action = e),
            (this.messageID = (function () {
                const e = t;
                return (t += 1), e;
            })());
    }
}
class n extends i {
    constructor(e, t) {
        super(n.action),
            (this.wasmModuleName = e.wasmModuleName),
            (this.licenseKey = e.licenseKey),
            (this.userId = t),
            (this.registerLoadCallback = null !== e.loadProgressCallback),
            (this.allowHelloMessage = e.allowHelloMessage),
            (this.engineLocation = e.engineLocation),
            (this.wasmType = e.wasmType),
            (this.numberOfWorkers = e.numberOfWorkers);
    }
}
var s, a, o;
(n.action = "init"),
    (function (e) {
        (e[(e.Any = 0)] = "Any"),
            (e[(e.Recognizer = 1)] = "Recognizer"),
            (e[(e.RecognizerSettings = 2)] = "RecognizerSettings"),
            (e[(e.Callback = 3)] = "Callback");
    })(s || (s = {}));
class r extends i {
    constructor(e, t) {
        super(r.action), (this.className = e), (this.params = t);
    }
}
r.action = "createNewNativeObject";
class A extends i {
    constructor(e, t, i) {
        super(A.action),
            (this.recognizerHandles = e),
            (this.allowMultipleResults = t),
            (this.registeredMetadataCallbacks = i);
    }
}
A.action = "createRecognizerRunner";
class E extends i {
    constructor(e, t) {
        super(E.action),
            (this.recognizerHandles = e),
            (this.allowMultipleResults = t);
    }
}
E.action = "reconfigureRecognizerRunner";
class I extends i {
    constructor() {
        super(I.action);
    }
}
I.action = "deleteRecognizerRunner";
class R extends i {
    constructor(e, t, i) {
        super(R.action),
            (this.objectHandle = e),
            (this.methodName = t),
            (this.params = i);
    }
}
R.action = "invokeObject";
class N extends i {
    constructor(e) {
        super(N.action), (this.frame = e);
    }
    getTransferrables() {
        return [this.frame.imageData.data.buffer];
    }
}
N.action = "processImage";
class c extends i {
    constructor(e) {
        super(c.action), (this.hardReset = e);
    }
}
c.action = "resetRecognizers";
class _ {
    constructor() {
        (this.onDebugText = !1),
            (this.onDetectionFailed = !1),
            (this.onQuadDetection = !1),
            (this.onPointsDetection = !1),
            (this.onFirstSideResult = !1),
            (this.onGlare = !1);
    }
}
class d extends i {
    constructor(e) {
        super(d.action), (this.registeredMetadataCallbacks = e);
    }
}
d.action = "registerMetadataCallbacks";
class l extends i {
    constructor(e) {
        super(l.action), (this.detectionOnlyMode = e);
    }
}
l.action = "setDetectionOnly";
class S extends i {
    constructor(e) {
        super(S.action), (this.callbackNonEmpty = e);
    }
}
S.action = "setClearTimeoutCallback";
class O extends i {
    constructor(e) {
        super(O.action), (this.cameraPreviewMirrored = e);
    }
}
O.action = "setCameraPreviewMirrored";
class C extends i {
    constructor(e) {
        super(C.action), (this.userId = e);
    }
}
(C.action = "getProductIntegrationInfo"),
    (function (e) {
        (e[(e.onDebugText = 0)] = "onDebugText"),
            (e[(e.onDetectionFailed = 1)] = "onDetectionFailed"),
            (e[(e.onQuadDetection = 2)] = "onQuadDetection"),
            (e[(e.onPointsDetection = 3)] = "onPointsDetection"),
            (e[(e.onFirstSideResult = 4)] = "onFirstSideResult"),
            (e[(e.clearTimeoutCallback = 5)] = "clearTimeoutCallback"),
            (e[(e.onGlare = 6)] = "onGlare"),
            (e[(e.recognizerCallback = 7)] = "recognizerCallback");
    })(a || (a = {})),
    (function (e) {
        (e.Basic = "BASIC"),
            (e.Advanced = "ADVANCED"),
            (e.AdvancedWithThreads = "ADVANCED_WITH_THREADS");
    })(o || (o = {}));
function D(e, t) {
    return (i) => {
        const n = i;
        n.success ? e() : t(n.error);
    };
}
function u(e, t) {
    return (i) => {
        const n = i;
        n.success ? e(i) : t(n.error);
    };
}
class T {
    constructor(e, t, i) {
        (this.wasmSDKWorker = e),
            (this.objectHandle = i),
            (this.recognizerName = t),
            (this.callbacks = new Map());
    }
    getRemoteObjectHandle() {
        return this.objectHandle;
    }
    currentSettings() {
        return new Promise((e, t) => {
            if (0 > this.objectHandle)
                return void t("Invalid object handle: " + this.objectHandle);
            const i = new R(this.objectHandle, "currentSettings", []),
                n = u((t) => {
                    e(t.result);
                }, t);
            this.wasmSDKWorker.postMessage(i, n);
        });
    }
    toSignedJSON() {
        return new Promise((e, t) => {
            if (0 > this.objectHandle)
                return void t("Invalid object handle: " + this.objectHandle);
            const i = new R(this.objectHandle, "toSignedJSON", []),
                n = u((t) => {
                    e(t.result);
                }, t);
            this.wasmSDKWorker.postMessage(i, n);
        });
    }
    clearAllCallbacks() {
        this.callbacks.clear(),
            this.wasmSDKWorker.unregisterRecognizerCallbacks(this.objectHandle);
    }
    removeFunctions(e) {
        this.clearAllCallbacks();
        const t = Object.keys(e);
        let i = !1;
        for (const n of t) {
            const t = e[n];
            if ("function" == typeof t) {
                this.callbacks.set(n, t);
                (e[n] = {
                    parameter: {
                        recognizerHandle: this.objectHandle,
                        callbackName: n,
                    },
                    type: s.Callback,
                }),
                    (i = !0);
            }
        }
        return (
            i &&
                this.wasmSDKWorker.registerRecognizerCallbacks(
                    this.objectHandle,
                    this
                ),
            e
        );
    }
    updateSettings(e) {
        return new Promise((t, i) => {
            if (0 > this.objectHandle)
                return void i("Invalid object handle: " + this.objectHandle);
            const n = new R(this.objectHandle, "updateSettings", [
                    {
                        parameter: this.removeFunctions(e),
                        type: s.RecognizerSettings,
                    },
                ]),
                a = D(t, i);
            this.wasmSDKWorker.postMessage(n, a);
        });
    }
    invokeCallback(e, t) {
        const i = this.callbacks.get(e);
        void 0 !== i ? i(...t) : console.warn("Cannot find callback", e);
    }
    getResult() {
        return new Promise((e, t) => {
            if (0 > this.objectHandle)
                return void t("Invalid object handle: " + this.objectHandle);
            const i = new R(this.objectHandle, "getResult", []),
                n = u((t) => {
                    e(t.result);
                }, t);
            this.wasmSDKWorker.postMessage(i, n);
        });
    }
    delete() {
        return new Promise((e, t) => {
            if (0 > this.objectHandle)
                return void t("Invalid object handle: " + this.objectHandle);
            this.clearAllCallbacks();
            const i = new R(this.objectHandle, "delete", []),
                n = D(() => {
                    (this.objectHandle = -1), e();
                }, t);
            this.wasmSDKWorker.postMessage(i, n);
        });
    }
}
function m(e) {
    const t = new _();
    return (
        (t.onDebugText = !!e.onDebugText),
        (t.onDetectionFailed = !!e.onDetectionFailed),
        (t.onPointsDetection = !!e.onPointsDetection),
        (t.onQuadDetection = !!e.onQuadDetection),
        (t.onFirstSideResult = !!e.onFirstSideResult),
        (t.onGlare = !!e.onGlare),
        t
    );
}
class L {
    constructor(e) {
        (this.deleted = !1), (this.wasmSDKWorker = e);
    }
    processImage(e) {
        return new Promise((t, i) => {
            if (this.deleted)
                return void i(
                    "Recognizer runner is deleted. It cannot be used anymore!"
                );
            const n = new N(e),
                s = u((e) => {
                    t(e.recognitionState);
                }, i);
            this.wasmSDKWorker.postTransferrableMessage(n, s);
        });
    }
    reconfigureRecognizers(e, t) {
        return new Promise((i, n) => {
            if (this.deleted)
                return void n(
                    "Recognizer runner is deleted. It cannot be used anymore!"
                );
            const s = U(e),
                a = new E(s, t),
                o = D(i, n);
            this.wasmSDKWorker.postMessage(a, o);
        });
    }
    setMetadataCallbacks(e) {
        return new Promise((t, i) => {
            const n = new d(m(e)),
                s = D(t, i);
            this.wasmSDKWorker.postMessageAndRegisterCallbacks(n, e, s);
        });
    }
    resetRecognizers(e) {
        return new Promise((t, i) => {
            const n = new c(e),
                s = D(t, i);
            this.wasmSDKWorker.postMessage(n, s);
        });
    }
    setDetectionOnlyMode(e) {
        return new Promise((t, i) => {
            const n = new l(e),
                s = D(t, i);
            this.wasmSDKWorker.postMessage(n, s);
        });
    }
    setClearTimeoutCallback(e) {
        return new Promise((t, i) => {
            const n = new S(null !== e),
                s = D(t, i);
            this.wasmSDKWorker.registerClearTimeoutCallback(e),
                this.wasmSDKWorker.postMessage(n, s);
        });
    }
    setCameraPreviewMirrored(e) {
        return new Promise((t, i) => {
            const n = new O(e),
                s = D(t, i);
            this.wasmSDKWorker.postMessage(n, s);
        });
    }
    delete() {
        return this.deleted
            ? Promise.reject("Recognizer runner is already deleted.")
            : new Promise((e, t) => {
                  const i = new I(),
                      n = D(() => {
                          (this.deleted = !0), e();
                      }, t);
                  this.wasmSDKWorker.postMessage(i, n);
              });
    }
}
function U(e) {
    const t = [];
    for (const i of e) t.push(i.getRemoteObjectHandle());
    return t;
}
class h {
    constructor(e) {
        this.wasmSDKWorker = e;
    }
    createRecognizerRunner(e, t = !1, i = {}) {
        return new Promise((n, s) => {
            const a = U(e),
                o = new A(a, t, m(i)),
                r = D(() => {
                    n(new L(this.wasmSDKWorker));
                }, s);
            this.wasmSDKWorker.postMessageAndRegisterCallbacks(o, i, r);
        });
    }
    newRecognizer(e, ...t) {
        return new Promise((i, n) => {
            const a = new r(
                    e,
                    (function (e) {
                        const t = [];
                        for (let i of e) {
                            let e = s.Any;
                            i instanceof T &&
                                ((e = s.Recognizer),
                                (i = i.getRemoteObjectHandle())),
                                t.push({ parameter: i, type: e });
                        }
                        return t;
                    })(t)
                ),
                o = u((t) => {
                    const n = new T(this.wasmSDKWorker, e, t.objectHandle);
                    i(n);
                }, n);
            this.wasmSDKWorker.postMessage(a, o);
        });
    }
}
class M {
    constructor(e, t, i, n) {
        (this.eventHandlers = {}),
            (this.metadataCallbacks = {}),
            (this.clearTimeoutCallback = null),
            (this.loadedWasmType = o.Basic),
            (this.mbWasmWorker = e),
            (this.mbWasmWorker.onmessage = (e) => {
                this.handleWorkerEvent(e);
            }),
            (this.mbWasmWorker.onerror = () => {
                n("Problem during initialization of worker file!");
            }),
            (this.mbWasmModule = new h(this)),
            (this.loadCallback = t),
            (this.recognizersWithCallbacks = new Map()),
            (this.userId = i),
            (this.showOverlay = !1);
    }
    postMessage(e, t) {
        (this.eventHandlers[e.messageID] = t), this.mbWasmWorker.postMessage(e);
    }
    postTransferrableMessage(e, t) {
        (this.eventHandlers[e.messageID] = t),
            this.mbWasmWorker.postMessage(e, e.getTransferrables());
    }
    postMessageAndRegisterCallbacks(e, t, i) {
        (this.eventHandlers[e.messageID] = i),
            (this.metadataCallbacks = t),
            this.mbWasmWorker.postMessage(e);
    }
    registerClearTimeoutCallback(e) {
        this.clearTimeoutCallback = e;
    }
    registerRecognizerCallbacks(e, t) {
        this.recognizersWithCallbacks.set(e, t);
    }
    unregisterRecognizerCallbacks(e) {
        this.recognizersWithCallbacks.delete(e);
    }
    delete() {
        this.mbWasmWorker.terminate();
    }
    getProductIntegrationInfo() {
        return new Promise((e, t) => {
            const i = new C(this.userId),
                n = u((t) => {
                    e(t.result);
                }, t);
            this.postMessage(i, n);
        });
    }
    handleWorkerEvent(e) {
        if ("isCallbackMessage" in e.data) {
            const t = e.data;
            switch (t.callbackType) {
                case a.onDebugText:
                    "function" == typeof this.metadataCallbacks.onDebugText &&
                        this.metadataCallbacks.onDebugText(
                            t.callbackParameters[0]
                        );
                    break;
                case a.onDetectionFailed:
                    "function" ==
                        typeof this.metadataCallbacks.onDetectionFailed &&
                        this.metadataCallbacks.onDetectionFailed();
                    break;
                case a.onPointsDetection:
                    "function" ==
                        typeof this.metadataCallbacks.onPointsDetection &&
                        this.metadataCallbacks.onPointsDetection(
                            t.callbackParameters[0]
                        );
                    break;
                case a.onQuadDetection:
                    "function" ==
                        typeof this.metadataCallbacks.onQuadDetection &&
                        this.metadataCallbacks.onQuadDetection(
                            t.callbackParameters[0]
                        );
                    break;
                case a.onFirstSideResult:
                    "function" ==
                        typeof this.metadataCallbacks.onFirstSideResult &&
                        this.metadataCallbacks.onFirstSideResult();
                    break;
                case a.clearTimeoutCallback:
                    this.clearTimeoutCallback &&
                        "function" ==
                            typeof this.clearTimeoutCallback.onClearTimeout &&
                        this.clearTimeoutCallback.onClearTimeout();
                    break;
                case a.onGlare:
                    "function" == typeof this.metadataCallbacks.onGlare &&
                        this.metadataCallbacks.onGlare(t.callbackParameters[0]);
                    break;
                case a.recognizerCallback: {
                    const e = t.callbackParameters.shift(),
                        i = this.recognizersWithCallbacks.get(
                            e.recognizerHandle
                        );
                    void 0 !== i
                        ? i.invokeCallback(e.callbackName, t.callbackParameters)
                        : console.warn(
                              "Cannot find recognizer to deliver callback message. Maybe it's destroyed?",
                              e
                          );
                    break;
                }
                default:
                    throw Error("Unknown callback type: " + a[t.callbackType]);
            }
        } else if ("isLoadProgressMessage" in e.data) {
            const t = e.data;
            "function" == typeof this.loadCallback &&
                this.loadCallback(t.progress);
        } else {
            const t = e.data,
                i = this.eventHandlers[t.messageID];
            delete this.eventHandlers[t.messageID], i(t);
        }
    }
    static createWasmWorker(t, i, s) {
        return e(this, void 0, void 0, function* () {
            return new Promise((e, a) => {
                const o = new M(t, i.loadProgressCallback, s, a),
                    r = new n(i, s),
                    A = u(
                        (t) => {
                            const i = t;
                            (o.showOverlay = i.showOverlay),
                                (o.loadedWasmType = i.wasmType),
                                e(o);
                        },
                        (e) => {
                            o && "function" == typeof o.delete && o.delete(),
                                a(e);
                        }
                    );
                o.postMessage(r, A);
            });
        });
    }
}
class g {
    constructor(e, t) {
        if (!e.code || !e.message)
            throw Error(
                "Instance of SDKError is required to have code and message."
            );
        (this.message = e.message), (this.code = e.code), (this.details = t);
    }
}
var F, P;
!(function (e) {
    (e.WORKER_WASM_LOAD_FAILURE = "WORKER_WASM_LOAD_FAILURE"),
        (e.WORKER_WASM_INIT_MISSING = "WORKER_WASM_INIT_MISSING"),
        (e.WORKER_FUNCTION_INVOKE_FAILURE = "WORKER_FUNCTION_INVOKE_FAILURE"),
        (e.WORKER_RECOGNIZER_CREATION_FAILURE =
            "WORKER_RECOGNIZER_CREATION_FAILURE"),
        (e.WORKER_RUNNER_EXISTS = "WORKER_RUNNER_EXISTS"),
        (e.WORKER_RUNNER_CREATION_FAILURE = "WORKER_RUNNER_CREATION_FAILURE"),
        (e.WORKER_RUNNER_MISSING = "WORKER_RUNNER_MISSING"),
        (e.WORKER_RUNNER_RECONFIGURE_FAILURE =
            "WORKER_RUNNER_RECONFIGURE_FAILURE"),
        (e.WORKER_RUNNER_DELETED = "WORKER_RUNNER_DELETED"),
        (e.WORKER_RUNNER_DELETE_FAILURE = "WORKER_RUNNER_DELETE_FAILURE"),
        (e.WORKER_OBJECT_INVOKE_FAILURE = "WORKER_OBJECT_INVOKE_FAILURE"),
        (e.WORKER_IMAGE_PROCESS_FAILURE = "WORKER_IMAGE_PROCESS_FAILURE"),
        (e.WORKER_HANDLE_UNDEFINED = "WORKER_HANDLE_UNDEFINED"),
        (e.WORKER_MESSAGE_ACTION_UNKNOWN = "WORKER_MESSAGE_ACTION_UNKNOWN"),
        (e.WORKER_LICENSE_UNLOCK_ERROR = "WORKER_LICENSE_UNLOCK_ERROR"),
        (e.WORKER_INTEGRATION_INFO_FAILURE = "WORKER_INTEGRATION_INFO_FAILURE"),
        (e.LOCAL_SDK_RUNNER_MISSING = "LOCAL_SDK_RUNNER_MISSING"),
        (e.LOCAL_SDK_RUNNER_EMPTY = "LOCAL_SDK_RUNNER_EMPTY"),
        (e.LICENSE_UNLOCK_ERROR = "LICENSE_UNLOCK_ERROR"),
        (e.FRAME_CAPTURE_SVG_UNSUPPORTED = "FRAME_CAPTURE_SVG_UNSUPPORTED"),
        (e.FRAME_CAPTURE_CANVAS_MISSING = "FRAME_CAPTURE_CANVAS_MISSING"),
        (e.SDK_WASM_SETTINGS_MISSING = "SDK_WASM_SETTINGS_MISSING"),
        (e.SDK_LICENSE_KEY_MISSING = "SDK_LICENSE_KEY_MISSING"),
        (e.SDK_WASM_MODULE_NAME_MISSING = "SDK_WASM_MODULE_NAME_MISSING"),
        (e.SDK_ENGINE_LOCATION_INVALID = "SDK_ENGINE_LOCATION_INVALID"),
        (e.SDK_MISSING = "SDK_MISSING"),
        (e.SDK_RECOGNIZERS_MISSING = "SDK_RECOGNIZERS_MISSING"),
        (e.VIDEO_RECOGNIZER_ELEMENT_MISSING =
            "VIDEO_RECOGNIZER_ELEMENT_MISSING"),
        (e.VIDEO_RECOGNIZER_CAMERA_MISSING = "VIDEO_RECOGNIZER_CAMERA_MISSING"),
        (e.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED =
            "VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED"),
        (e.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE =
            "VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE"),
        (e.VIDEO_RECOGNIZER_CAMERA_IN_USE = "VIDEO_RECOGNIZER_CAMERA_IN_USE"),
        (e.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED =
            "VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED"),
        (e.VIDEO_RECOGNIZER_FEED_RELEASED = "VIDEO_RECOGNIZER_FEED_RELEASED"),
        (e.VIDEO_RECOGNIZER_FEED_NOT_PAUSED =
            "VIDEO_RECOGNIZER_FEED_NOT_PAUSED"),
        (e.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED =
            "VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED"),
        (e.VIDEO_RECOGNIZER_FEED_PAUSED = "VIDEO_RECOGNIZER_FEED_PAUSED"),
        (e.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE =
            "VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE"),
        (e.VIDEO_RECOGNIZER_FEED_MISSING = "VIDEO_RECOGNIZER_FEED_MISSING");
})(F || (F = {})),
    (function (e) {
        (e.WORKER_HANDLE_UNDEFINED =
            "Cannot find object with handle: undefined"),
            (e.WORKER_WASM_LOAD_FAILURE = "Failed to load WASM in web worker!"),
            (e.WORKER_WASM_INIT_MISSING = "WASM module is not initialized!"),
            (e.WORKER_FUNCTION_INVOKE_FAILURE = "Failed to invoke function!"),
            (e.WORKER_RECOGNIZER_CREATION_FAILURE =
                "Failed to create new recognizer!"),
            (e.WORKER_RUNNER_EXISTS =
                "Recognizer runner is already created! Multiple instances are not allowed!"),
            (e.WORKER_RUNNER_CREATION_FAILURE =
                "Failed to create new recognizer runner!"),
            (e.WORKER_RUNNER_MISSING =
                "Recognizer runner is not created! There is nothing to reconfigure!"),
            (e.WORKER_RUNNER_RECONFIGURE_FAILURE =
                "Failed to reconfigure recognizer runner!"),
            (e.WORKER_RUNNER_DELETED = "Recognizer runner is already deleted!"),
            (e.WORKER_RUNNER_DELETE_FAILURE =
                "Failed to delete recognizer runner!"),
            (e.WORKER_OBJECT_INVOKE_FAILURE = "Failed to invoke object!"),
            (e.WORKER_IMAGE_PROCESS_FAILURE =
                "Recognizer runner is not initialized! Cannot process image!"),
            (e.WORKER_INTEGRATION_INFO_FAILURE =
                "Failed to get product integration info!"),
            (e.LOCAL_SDK_RUNNER_MISSING =
                "Property nativeRecognizerRunner is not available!"),
            (e.LOCAL_SDK_RUNNER_EMPTY =
                "Native RecognizerRunner cannot be empty!"),
            (e.LICENSE_TOKEN_STATE_INCORRECT =
                "Internal error (Incorrect token state)"),
            (e.LICENSE_PAYLOAD_VERIFICATION_FAILED =
                "Failed to verify server permission's digital signature!"),
            (e.LICENSE_PAYLOAD_CORRUPTED =
                "Server permission payload is corrupted!"),
            (e.LICENSE_PERMISSION_EXPIRED =
                "Internal error (server permission expired)"),
            (e.LICENSE_REMOTE_LOCKED =
                "Provided license key has been remotely locked. Please contact support for more information!"),
            (e.FRAME_CAPTURE_SVG_UNSUPPORTED =
                "Recognition of SVG elements not supported!"),
            (e.FRAME_CAPTURE_CANVAS_MISSING =
                "Could not get canvas 2d context!"),
            (e.SDK_WASM_SETTINGS_MISSING = "Missing WASM load settings!"),
            (e.SDK_LICENSE_KEY_MISSING = "Missing license key!"),
            (e.SDK_WASM_MODULE_NAME_MISSING = "Missing WASM module name!"),
            (e.SDK_ENGINE_LOCATION_INVALID =
                "Setting property 'engineLocation' must be a string!"),
            (e.SDK_MISSING = "SDK is not provided!"),
            (e.SDK_RECOGNIZERS_MISSING =
                "To create RecognizerRunner at least 1 recognizer is required."),
            (e.VIDEO_RECOGNIZER_ELEMENT_MISSING =
                "Video element, i.e. camera feed is not provided!"),
            (e.VIDEO_RECOGNIZER_CAMERA_MISSING = "Camera not found!"),
            (e.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED = "Camera not allowed!"),
            (e.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE = "Camera not available!"),
            (e.VIDEO_RECOGNIZER_CAMERA_IN_USE = "Camera in use!"),
            (e.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED =
                "Media devices not supported by browser."),
            (e.VIDEO_RECOGNIZER_FEED_RELEASED =
                "The associated video feed has been released!"),
            (e.VIDEO_RECOGNIZER_FEED_NOT_PAUSED =
                "The associated video feed is not paused. Use resumeRecognition instead!"),
            (e.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED =
                "The play() request was interrupted or prevented by browser security rules!"),
            (e.VIDEO_RECOGNIZER_FEED_PAUSED =
                "Cannot resume recognition while video feed is paused! Use recognize or startRecognition"),
            (e.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE =
                "Could not reset recognizers!"),
            (e.VIDEO_RECOGNIZER_FEED_MISSING = "Missing video feed!");
    })(P || (P = {}));
const G = {
        feedMissing: {
            message: P.VIDEO_RECOGNIZER_FEED_MISSING,
            code: F.VIDEO_RECOGNIZER_FEED_MISSING,
        },
        recognizersResetFailure: {
            message: P.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE,
            code: F.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE,
        },
        feedPaused: {
            message: P.VIDEO_RECOGNIZER_FEED_PAUSED,
            code: F.VIDEO_RECOGNIZER_FEED_PAUSED,
        },
        playRequestInterrupted: {
            message: P.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED,
            code: F.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED,
        },
        videoFeedNotPaused: {
            message: P.VIDEO_RECOGNIZER_FEED_NOT_PAUSED,
            code: F.VIDEO_RECOGNIZER_FEED_NOT_PAUSED,
        },
        videoFeedReleased: {
            message: P.VIDEO_RECOGNIZER_FEED_RELEASED,
            code: F.VIDEO_RECOGNIZER_FEED_RELEASED,
        },
        mediaDevicesUnsupported: {
            code: F.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED,
            message: P.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED,
        },
        cameraMissing: {
            code: F.VIDEO_RECOGNIZER_CAMERA_MISSING,
            message: P.VIDEO_RECOGNIZER_CAMERA_MISSING,
        },
        elementMissing: {
            message: P.VIDEO_RECOGNIZER_ELEMENT_MISSING,
            code: F.VIDEO_RECOGNIZER_ELEMENT_MISSING,
        },
    },
    K = {
        wasmSettingsMissing: {
            message: P.SDK_WASM_SETTINGS_MISSING,
            code: F.SDK_WASM_SETTINGS_MISSING,
        },
        licenseKeyMissing: {
            message: P.SDK_LICENSE_KEY_MISSING,
            code: F.SDK_LICENSE_KEY_MISSING,
        },
        wasmModuleNameMissing: {
            message: P.SDK_WASM_MODULE_NAME_MISSING,
            code: F.SDK_WASM_MODULE_NAME_MISSING,
        },
        engineLocationInvalid: {
            message: P.SDK_ENGINE_LOCATION_INVALID,
            code: F.SDK_ENGINE_LOCATION_INVALID,
        },
        missing: { message: P.SDK_MISSING, code: F.SDK_MISSING },
        recognizersMissing: {
            message: P.SDK_RECOGNIZERS_MISSING,
            code: F.SDK_RECOGNIZERS_MISSING,
        },
    },
    p = {
        svgUnsupported: {
            message: P.FRAME_CAPTURE_SVG_UNSUPPORTED,
            code: F.FRAME_CAPTURE_SVG_UNSUPPORTED,
        },
        canvasMissing: {
            message: P.FRAME_CAPTURE_CANVAS_MISSING,
            code: F.FRAME_CAPTURE_CANVAS_MISSING,
        },
    },
    f = {
        licenseTokenStateIncorrect: {
            code: F.LICENSE_UNLOCK_ERROR,
            message: P.LICENSE_TOKEN_STATE_INCORRECT,
        },
        licensePayloadVerificationFailed: {
            code: F.LICENSE_UNLOCK_ERROR,
            message: P.LICENSE_PAYLOAD_VERIFICATION_FAILED,
        },
        licensePayloadCorrupted: {
            code: F.LICENSE_UNLOCK_ERROR,
            message: P.LICENSE_PAYLOAD_CORRUPTED,
        },
        licensePermissionExpired: {
            code: F.LICENSE_UNLOCK_ERROR,
            message: P.LICENSE_PERMISSION_EXPIRED,
        },
        licenseRemoteLocked: {
            code: F.LICENSE_UNLOCK_ERROR,
            message: P.LICENSE_REMOTE_LOCKED,
        },
        licenseNetworkError: { code: F.LICENSE_UNLOCK_ERROR },
        licenseInvalid: { code: F.LICENSE_UNLOCK_ERROR },
    },
    v = {
        runnerMissing: {
            message: P.LOCAL_SDK_RUNNER_MISSING,
            code: F.LOCAL_SDK_RUNNER_MISSING,
        },
        runnerEmpty: {
            message: P.LOCAL_SDK_RUNNER_EMPTY,
            code: F.LOCAL_SDK_RUNNER_EMPTY,
        },
    },
    b = {
        imageProcessFailure: {
            message: P.WORKER_IMAGE_PROCESS_FAILURE,
            code: F.WORKER_IMAGE_PROCESS_FAILURE,
        },
        objectInvokeFailure: {
            message: P.WORKER_OBJECT_INVOKE_FAILURE,
            code: F.WORKER_OBJECT_INVOKE_FAILURE,
        },
        runnerDeleteFailure: {
            message: P.WORKER_RUNNER_DELETE_FAILURE,
            code: F.WORKER_RUNNER_DELETE_FAILURE,
        },
        runnerDeleted: {
            message: P.WORKER_RUNNER_DELETED,
            code: F.WORKER_RUNNER_DELETED,
        },
        runnerReconfigureFailure: {
            message: P.WORKER_RUNNER_RECONFIGURE_FAILURE,
            code: F.WORKER_RUNNER_RECONFIGURE_FAILURE,
        },
        runnerMissing: {
            message: P.WORKER_RUNNER_MISSING,
            code: F.WORKER_RUNNER_MISSING,
        },
        runnerCreationFailure: {
            message: P.WORKER_RUNNER_CREATION_FAILURE,
            code: F.WORKER_RUNNER_CREATION_FAILURE,
        },
        runnerExists: {
            message: P.WORKER_RUNNER_EXISTS,
            code: F.WORKER_RUNNER_EXISTS,
        },
        recognizerCreationFailure: {
            message: P.WORKER_RECOGNIZER_CREATION_FAILURE,
            code: F.WORKER_RECOGNIZER_CREATION_FAILURE,
        },
        functionInvokeFailure: {
            message: P.WORKER_FUNCTION_INVOKE_FAILURE,
            code: F.WORKER_FUNCTION_INVOKE_FAILURE,
        },
        wasmInitMissing: {
            message: P.WORKER_WASM_INIT_MISSING,
            code: F.WORKER_WASM_INIT_MISSING,
        },
        wasmLoadFailure: {
            message: P.WORKER_WASM_LOAD_FAILURE,
            code: F.WORKER_WASM_LOAD_FAILURE,
        },
        handleUndefined: {
            message: P.WORKER_HANDLE_UNDEFINED,
            code: F.WORKER_HANDLE_UNDEFINED,
        },
        integrationInfoFailure: {
            message: P.WORKER_INTEGRATION_INFO_FAILURE,
            code: F.WORKER_INTEGRATION_INFO_FAILURE,
        },
    };
var W;
!(function (e) {
    (e[(e.BackFacingCamera = 0)] = "BackFacingCamera"),
        (e[(e.FrontFacingCamera = 1)] = "FrontFacingCamera");
})(W || (W = {}));
const H = [
    "rear",
    "back",
    "rück",
    "arrière",
    "trasera",
    "trás",
    "traseira",
    "posteriore",
    "后面",
    "後面",
    "背面",
    "后置",
    "後置",
    "背置",
    "задней",
    "الخلفية",
    "후",
    "arka",
    "achterzijde",
    "หลัง",
    "baksidan",
    "bagside",
    "sau",
    "bak",
    "tylny",
    "takakamera",
    "belakang",
    "אחורית",
    "πίσω",
    "spate",
    "hátsó",
    "zadní",
    "darrere",
    "zadná",
    "задня",
    "stražnja",
    "belakang",
    "बैक",
];
function w(e) {
    const t = e.toLowerCase();
    return H.some((e) => t.includes(e));
}
class V {
    constructor(e, t) {
        (this.deviceId = e.deviceId),
            (this.facing = t),
            (this.groupId = e.groupId),
            (this.label = e.label);
    }
}
function y() {
    return e(this, void 0, void 0, function* () {
        const e = [],
            t = [];
        {
            let i = yield navigator.mediaDevices.enumerateDevices();
            if (
                i
                    .filter((e) => "videoinput" === e.kind)
                    .every((e) => "" === e.label)
            ) {
                const e = yield navigator.mediaDevices.getUserMedia({
                    video: { facingMode: { ideal: "environment" } },
                    audio: !1,
                });
                (i = yield navigator.mediaDevices.enumerateDevices()),
                    e.getTracks().forEach((e) => e.stop());
            }
            const n = i.filter((e) => "videoinput" === e.kind);
            for (const i of n)
                w(i.label)
                    ? t.push(new V(i, W.BackFacingCamera))
                    : e.push(new V(i, W.FrontFacingCamera));
        }
        return { frontCameras: e, backCameras: t };
    });
}
function k(t, i) {
    return e(this, void 0, void 0, function* () {
        const { frontCameras: e, backCameras: n } = yield y();
        if (e.length > 0 || n.length > 0) {
            let s = n.length > 0 ? n : e;
            i === W.BackFacingCamera && n.length > 0 && (s = n),
                i === W.FrontFacingCamera && e.length > 0 && (s = e),
                (s = s.sort((e, t) => e.label.localeCompare(t.label)));
            {
                let i = 0;
                const a = s.map((e) => {
                    const t = /\b([0-9]+)MP?\b/i.exec(e.label);
                    return null !== t ? parseInt(t[1], 10) : NaN;
                });
                if (
                    (a.some((e) => isNaN(e)) ||
                        (i = a.lastIndexOf(Math.max(...a))),
                    t)
                ) {
                    let i = null;
                    return (
                        (i = e.filter((e) => e.deviceId === t)[0]),
                        i || (i = n.filter((e) => e.deviceId === t)[0]),
                        i || null
                    );
                }
                return s[i];
            }
        }
        return null;
    });
}
function B(t, i, n = W.BackFacingCamera) {
    return e(this, void 0, void 0, function* () {
        const e = {
            audio: !1,
            video: {
                width: { min: 640, ideal: 1920, max: 1920 },
                height: { min: 480, ideal: 1080, max: 1080 },
            },
        };
        if ("" === t.deviceId) {
            e.video.facingMode = {
                ideal: n === W.BackFacingCamera ? "environment" : "user",
            };
        } else e.video.deviceId = { exact: t.deviceId };
        const s = yield navigator.mediaDevices.getUserMedia(e);
        (i.controls = !1), (i.srcObject = s);
        let a = !1;
        return (
            t.facing === W.FrontFacingCamera &&
                ((i.style.transform = "scaleX(-1)"), (a = !0)),
            a
        );
    });
}
function Y(e) {
    e &&
        null !== e.srcObject &&
        (e.srcObject.getTracks().forEach((e) => e.stop()),
        (e.srcObject = null));
}
var Z, z;
function x() {
    try {
        if (
            "object" == typeof WebAssembly &&
            "function" == typeof WebAssembly.instantiate
        ) {
            const e = new WebAssembly.Module(
                Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
            );
            if (e instanceof WebAssembly.Module)
                return (
                    new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                );
        }
    } catch (e) {
        return !1;
    }
    return !1;
}
function J() {
    const e = navigator.userAgent || navigator.vendor;
    return !!/(instagram|fbav|linkedinapp|twitter|micromessenger|whatsapp|tiktok)[/\s]?([\w.]*)/i.exec(
        e
    );
}
let j;
!(function (e) {
    (e[(e.RotatedLeft90 = 0)] = "RotatedLeft90"),
        (e[(e.NoRotation = 1)] = "NoRotation"),
        (e[(e.RotatedRight90 = 2)] = "RotatedRight90"),
        (e[(e.Rotated180 = 3)] = "Rotated180");
})(Z || (Z = {})),
    (function (e) {
        (e[(e.Empty = 0)] = "Empty"),
            (e[(e.Uncertain = 1)] = "Uncertain"),
            (e[(e.Valid = 2)] = "Valid"),
            (e[(e.StageValid = 3)] = "StageValid");
    })(z || (z = {}));
class Q {
    constructor(e, t, i) {
        (this.imageData = e), (this.orientation = t), (this.videoFrame = i);
    }
}
function X(e) {
    let t,
        i,
        n = !1;
    if (e instanceof HTMLVideoElement)
        (t = e.videoWidth), (i = e.videoHeight), (n = !0);
    else if (e instanceof HTMLImageElement)
        (t = e.naturalWidth), (i = e.naturalHeight);
    else {
        if (e instanceof SVGImageElement) throw new g(p.svgUnsupported);
        (t = e.width), (i = e.height);
    }
    (j = j || document.createElement("canvas")), (j.width = t), (j.height = i);
    const s = j.getContext("2d");
    if (!s) throw new g(p.canvasMissing);
    s.drawImage(e, 0, 0, j.width, j.height);
    const a = s.getImageData(0, 0, j.width, j.height);
    return new Q(a, Z.NoRotation, n);
}
var q, $;
!(function (e) {
    (e[(e.Invalid = 0)] = "Invalid"),
        (e[(e.RequiresServerPermission = 1)] = "RequiresServerPermission"),
        (e[(e.Valid = 2)] = "Valid");
})(q || (q = {})),
    (function (e) {
        (e.LicenseTokenStateInvalid = "LICENSE_TOKEN_STATE_INVALID"),
            (e.NetworkError = "NETWORK_ERROR"),
            (e.RemoteLock = "REMOTE_LOCK"),
            (e.PermissionExpired = "PERMISSION_EXPIRED"),
            (e.PayloadCorrupted = "PAYLOAD_CORRUPTED"),
            (e.PayloadSignatureVerificationFailed =
                "PAYLOAD_SIGNATURE_VERIFICATION_FAILED"),
            (e.IncorrectTokenState = "INCORRECT_TOKEN_STATE");
    })($ || ($ = {}));
function ee(e) {
    return {
        licenseId: e.licenseId,
        licensee: e.licensee,
        packageName: e.packageName,
        platform: "Browser",
        sdkName: e.sdkName,
        sdkVersion: e.sdkVersion,
    };
}
var te, ie, ne, se;
function ae(t, i) {
    return e(this, void 0, void 0, function* () {
        try {
            const e = yield fetch(
                "https://baltazar.microblink.com/api/v1/status/check",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    cache: "no-cache",
                    body: JSON.stringify(ee(t)),
                }
            );
            if (e.ok) {
                const t = "" + (yield e.text());
                return i.submitServerPermission(t);
            }
            return {
                status: te.NetworkError,
                lease: 0,
                networkErrorDescription:
                    "Server responded with status " + e.status,
            };
        } catch (e) {
            return {
                status: te.NetworkError,
                lease: 0,
                networkErrorDescription:
                    "Unexpected error: " + JSON.stringify(e),
            };
        }
    });
}
function oe(t, i, n, s) {
    return e(this, void 0, void 0, function* () {
        const e = s.initializeWithLicenseKey(t, n, i);
        switch (e.unlockResult) {
            case q.Invalid:
                return {
                    error: new g(
                        Object.assign(Object.assign({}, f.licenseInvalid), {
                            message: e.licenseError,
                        }),
                        { type: $.LicenseTokenStateInvalid }
                    ),
                };
            case q.Valid:
                return {
                    error: null,
                    showOverlay:
                        ((a = e.isTrial),
                        (o = e.allowRemoveDemoOverlay),
                        (r = e.allowRemoveProductionOverlay),
                        !((a && o) || (!a && r))),
                };
            case q.RequiresServerPermission: {
                const t = yield ae(e, s);
                switch (t.status) {
                    case te.Ok:
                        return { error: null, lease: t.lease };
                    case te.NetworkError: {
                        let e = "";
                        return (
                            t.networkErrorDescription &&
                                (e = " " + t.networkErrorDescription),
                            {
                                error: new g(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            f.licenseNetworkError
                                        ),
                                        {
                                            message:
                                                "There has been a network error while obtaining the server permission!" +
                                                e,
                                        }
                                    ),
                                    { type: $.NetworkError }
                                ),
                            }
                        );
                    }
                    case te.RemoteLock:
                        return {
                            error: new g(f.licenseRemoteLocked, {
                                type: $.RemoteLock,
                            }),
                            lease: t.lease,
                        };
                    case te.PermissionExpired:
                        return {
                            error: new g(f.licensePermissionExpired, {
                                type: $.PermissionExpired,
                            }),
                            lease: t.lease,
                        };
                    case te.PayloadCorrupted:
                        return {
                            error: new g(f.licensePayloadCorrupted, {
                                type: $.PayloadCorrupted,
                            }),
                            lease: t.lease,
                        };
                    case te.PayloadSignatureVerificationFailed:
                        return {
                            error: new g(f.licensePayloadVerificationFailed, {
                                type: $.PayloadSignatureVerificationFailed,
                            }),
                            lease: t.lease,
                        };
                    case te.IncorrectTokenState:
                        return {
                            error: new g(f.licenseTokenStateIncorrect, {
                                type: $.IncorrectTokenState,
                            }),
                            lease: t.lease,
                        };
                }
            }
        }
        var a, o, r;
    });
}
!(function (e) {
    (e[(e.Ok = 0)] = "Ok"),
        (e[(e.NetworkError = 1)] = "NetworkError"),
        (e[(e.RemoteLock = 2)] = "RemoteLock"),
        (e[(e.PermissionExpired = 3)] = "PermissionExpired"),
        (e[(e.PayloadCorrupted = 4)] = "PayloadCorrupted"),
        (e[(e.PayloadSignatureVerificationFailed = 5)] =
            "PayloadSignatureVerificationFailed"),
        (e[(e.IncorrectTokenState = 6)] = "IncorrectTokenState");
})(te || (te = {})),
    (function (e) {
        (e[(e.Fail = 0)] = "Fail"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.CameraTooHigh = 2)] = "CameraTooHigh"),
            (e[(e.FallbackSuccess = 3)] = "FallbackSuccess"),
            (e[(e.Partial = 4)] = "Partial"),
            (e[(e.CameraAtAngle = 5)] = "CameraAtAngle"),
            (e[(e.CameraTooNear = 6)] = "CameraTooNear"),
            (e[(e.DocumentTooCloseToEdge = 7)] = "DocumentTooCloseToEdge");
    })(ie || (ie = {})),
    (function (e) {
        (e.MediaDevicesNotSupported = "MediaDevicesNotSupported"),
            (e.CameraNotFound = "CameraNotFound"),
            (e.CameraNotAllowed = "CameraNotAllowed"),
            (e.CameraInUse = "CameraInUse"),
            (e.CameraNotAvailable = "CameraNotAvailable"),
            (e.VideoElementNotProvided = "VideoElementNotProvided");
    })(ne || (ne = {})),
    (function (e) {
        (e[(e.Recognition = 0)] = "Recognition"),
            (e[(e.RecognitionTest = 1)] = "RecognitionTest"),
            (e[(e.DetectionTest = 2)] = "DetectionTest");
    })(se || (se = {}));
class re {
    constructor(e, t, i = !1, n = !1, s = null) {
        (this.deviceId = null),
            (this.videoFeed = null),
            (this.cancelled = !1),
            (this.timedOut = !1),
            (this.recognitionPaused = !1),
            (this.recognitionTimeoutMs = 2e4),
            (this.timeoutID = 0),
            (this.videoRecognitionMode = se.Recognition),
            (this.onScanningDone = null),
            (this.allowManualVideoPlayout = !1),
            (this.cameraFlipped = !1),
            (this.shouldReleaseVideoFeed = !1),
            (this.videoFeed = e),
            (this.recognizerRunner = t),
            (this.cameraFlipped = i),
            (this.allowManualVideoPlayout = n),
            (this.deviceId = s);
    }
    static createVideoRecognizerFromCameraStream(
        t,
        i,
        n = null,
        s = W.BackFacingCamera
    ) {
        return e(this, void 0, void 0, function* () {
            return new Promise((a, o) =>
                e(this, void 0, void 0, function* () {
                    if (t && t instanceof Element)
                        if (
                            navigator.mediaDevices &&
                            void 0 !== navigator.mediaDevices.getUserMedia
                        )
                            try {
                                const e = yield k(n, s);
                                if (null === e)
                                    return void o(
                                        new g(G.cameraMissing, {
                                            reason: ne.CameraNotFound,
                                        })
                                    );
                                const r = yield B(e, t, s);
                                yield i.setCameraPreviewMirrored(r),
                                    a(new re(t, i, r, !1, e.deviceId));
                            } catch (e) {
                                let t = ne.CameraInUse,
                                    i = F.VIDEO_RECOGNIZER_CAMERA_IN_USE;
                                switch (e.name) {
                                    case "NotFoundError":
                                    case "OverconstrainedError":
                                        (t = ne.CameraNotFound),
                                            (i =
                                                F.VIDEO_RECOGNIZER_CAMERA_MISSING);
                                        break;
                                    case "NotAllowedError":
                                    case "SecurityError":
                                        (t = ne.CameraNotAllowed),
                                            (i =
                                                F.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED);
                                        break;
                                    case "AbortError":
                                    case "NotReadableError":
                                        (t = ne.CameraNotAvailable),
                                            (i =
                                                F.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE);
                                        break;
                                    case "TypeError":
                                        throw e;
                                }
                                o(
                                    new g(
                                        { message: e.message, code: i },
                                        { reason: t }
                                    )
                                );
                            }
                        else
                            o(
                                new g(G.mediaDevicesUnsupported, {
                                    reason: ne.MediaDevicesNotSupported,
                                })
                            );
                    else
                        o(
                            new g(G.elementMissing, {
                                reason: ne.VideoElementNotProvided,
                            })
                        );
                })
            );
        });
    }
    static createVideoRecognizerFromVideoPath(t, i, n) {
        return e(this, void 0, void 0, function* () {
            return new Promise((e) => {
                (i.src = t),
                    (i.currentTime = 0),
                    (i.onended = () => {
                        s.cancelRecognition();
                    });
                const s = new re(i, n);
                e(s);
            });
        });
    }
    flipCamera() {
        return e(this, void 0, void 0, function* () {
            this.videoFeed &&
                (this.cameraFlipped
                    ? ((this.videoFeed.style.transform = "scaleX(1)"),
                      (this.cameraFlipped = !1))
                    : ((this.videoFeed.style.transform = "scaleX(-1)"),
                      (this.cameraFlipped = !0)),
                yield this.recognizerRunner.setCameraPreviewMirrored(
                    this.cameraFlipped
                ));
        });
    }
    isCameraFlipped() {
        return this.cameraFlipped;
    }
    setVideoRecognitionMode(t) {
        return e(this, void 0, void 0, function* () {
            this.videoRecognitionMode = t;
            const e = this.videoRecognitionMode === se.DetectionTest;
            yield this.recognizerRunner.setDetectionOnlyMode(e);
        });
    }
    startRecognition(e, t = 2e4) {
        return new Promise((i, n) => {
            null !== this.videoFeed
                ? this.videoFeed.paused
                    ? ((this.cancelled = !1),
                      (this.recognitionPaused = !1),
                      this.clearTimeout(),
                      (this.recognitionTimeoutMs = t),
                      (this.onScanningDone = e),
                      this.recognizerRunner.setClearTimeoutCallback({
                          onClearTimeout: () => this.clearTimeout(),
                      }),
                      this.videoFeed.play().then(
                          () =>
                              this.playPauseEvent()
                                  .then(() => i())
                                  .catch((e) => n(e)),
                          (e) => {
                              this.allowManualVideoPlayout
                                  ? this.videoFeed &&
                                    ((this.videoFeed.controls = !0),
                                    this.videoFeed.addEventListener(
                                        "play",
                                        () => {
                                            this.playPauseEvent()
                                                .then()
                                                .catch((e) => n(e));
                                        }
                                    ),
                                    this.videoFeed.addEventListener(
                                        "pause",
                                        () => {
                                            this.playPauseEvent()
                                                .then()
                                                .catch((e) => n(e));
                                        }
                                    ))
                                  : n(new g(G.playRequestInterrupted, e));
                          }
                      ))
                    : n(new g(G.videoFeedNotPaused))
                : n(new g(G.videoFeedReleased));
        });
    }
    recognize(e = 2e4) {
        return new Promise((t, i) => {
            try {
                this.startRecognition((e) => {
                    this.pauseVideoFeed(), t(e);
                }, e)
                    .then()
                    .catch((e) => i(e));
            } catch (e) {
                i(e);
            }
        });
    }
    cancelRecognition() {
        this.cancelled = !0;
    }
    pauseVideoFeed() {
        this.pauseRecognition(), this.videoFeed && this.videoFeed.pause();
    }
    pauseRecognition() {
        this.recognitionPaused = !0;
    }
    resetRecognizers(t) {
        return e(this, void 0, void 0, function* () {
            yield this.recognizerRunner.resetRecognizers(t);
        });
    }
    getRecognizerRunner() {
        return this.recognizerRunner;
    }
    resumeRecognition(e) {
        return new Promise((t, i) => {
            (this.cancelled = !1),
                (this.timedOut = !1),
                (this.recognitionPaused = !1),
                this.videoFeed && this.videoFeed.paused
                    ? i(new g(G.feedPaused))
                    : setTimeout(() => {
                          e
                              ? this.resetRecognizers(!0)
                                    .then(() => {
                                        this.recognitionLoop()
                                            .then(() => t())
                                            .catch((e) => i(e));
                                    })
                                    .catch(() => {
                                        i(new g(G.recognizersResetFailure));
                                    })
                              : this.recognitionLoop()
                                    .then(() => t())
                                    .catch((e) => i(e));
                      }, 1);
        });
    }
    releaseVideoFeed() {
        var e, t;
        this.videoFeed &&
        (null === (e = this.videoFeed) || void 0 === e
            ? void 0
            : e.readyState) >=
            (null === (t = this.videoFeed) || void 0 === t
                ? void 0
                : t.HAVE_CURRENT_DATA)
            ? (this.videoFeed.paused || this.cancelRecognition(),
              Y(this.videoFeed),
              (this.videoFeed = null),
              (this.shouldReleaseVideoFeed = !1))
            : (this.shouldReleaseVideoFeed = !0);
    }
    changeCameraDevice(e) {
        return new Promise((t, i) => {
            null !== this.videoFeed
                ? (this.pauseRecognition(),
                  Y(this.videoFeed),
                  B(e, this.videoFeed)
                      .then(() => {
                          null !== this.videoFeed
                              ? this.videoFeed.play().then(
                                    () => {
                                        this.resumeRecognition(!0), t();
                                    },
                                    (e) => {
                                        this.allowManualVideoPlayout
                                            ? this.videoFeed
                                                ? (this.videoFeed.controls = !0)
                                                : i(new g(G.feedMissing))
                                            : i(
                                                  new g(
                                                      G.playRequestInterrupted,
                                                      e
                                                  )
                                              );
                                    }
                                )
                              : i(new g(G.feedMissing));
                      })
                      .catch((e) => i(e)))
                : i(new g(G.feedMissing));
        });
    }
    playPauseEvent() {
        return new Promise((e, t) => {
            if (this.videoFeed && this.videoFeed.paused)
                return this.cancelRecognition(), void e();
            this.resumeRecognition(!0)
                .then(() => e())
                .catch((e) => t(e));
        });
    }
    recognitionLoop() {
        return new Promise((e, t) => {
            if (!this.videoFeed) return void t(new g(G.feedMissing));
            if (
                this.shouldReleaseVideoFeed &&
                this.videoFeed.readyState > this.videoFeed.HAVE_CURRENT_DATA
            )
                return this.releaseVideoFeed(), void e();
            const i = X(this.videoFeed);
            this.recognizerRunner
                .processImage(i)
                .then((i) => {
                    const n = () => {
                        this.recognitionPaused
                            ? e()
                            : setTimeout(() => {
                                  this.recognitionLoop()
                                      .then(() => e())
                                      .catch((e) => t(e));
                              }, 1);
                    };
                    if (i === z.Valid || this.cancelled || this.timedOut) {
                        if (
                            this.videoRecognitionMode !== se.Recognition &&
                            !this.cancelled
                        )
                            return void this.recognizerRunner
                                .resetRecognizers(!0)
                                .then(() => {
                                    this.clearTimeout(), n();
                                })
                                .catch((e) => t(e));
                        this.clearTimeout(),
                            this.onScanningDone && this.onScanningDone(i);
                    } else {
                        if (i === z.Uncertain)
                            return (
                                0 === this.timeoutID &&
                                    (this.timeoutID = window.setTimeout(() => {
                                        this.timedOut = !0;
                                    }, this.recognitionTimeoutMs)),
                                void n()
                            );
                        if (i === z.StageValid)
                            return this.clearTimeout(), void n();
                    }
                    n();
                })
                .catch((e) => t(e));
        });
    }
    clearTimeout() {
        this.timeoutID > 0 &&
            (window.clearTimeout(this.timeoutID), (this.timeoutID = 0));
    }
}
class Ae {
    constructor(e) {
        if (
            ((this.allowHelloMessage = !0),
            (this.engineLocation = ""),
            (this.wasmType = null),
            (this.numberOfWorkers = null),
            (this.loadProgressCallback = null),
            (this.wasmModuleName = "BlinkIDWasmSDK"),
            !e)
        )
            throw new g(K.licenseKeyMissing);
        this.licenseKey = e;
    }
}
function Ee(t) {
    return e(this, void 0, void 0, function* () {
        const e = yield (async () =>
                WebAssembly.validate(
                    new Uint8Array([
                        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1,
                        0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0,
                        252, 10, 0, 0, 11,
                    ])
                ))(),
            i = yield (async () =>
                WebAssembly.validate(
                    new Uint8Array([
                        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1,
                        0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11,
                    ])
                ))(),
            n = yield (async () =>
                WebAssembly.validate(
                    new Uint8Array([
                        0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1,
                        0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11,
                    ])
                ))(),
            s = yield (async () =>
                WebAssembly.validate(
                    new Uint8Array([
                        0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3,
                        2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11,
                    ])
                ))(),
            a = yield (async (e) => {
                try {
                    return (
                        "undefined" != typeof MessageChannel &&
                            new MessageChannel().port1.postMessage(
                                new SharedArrayBuffer(1)
                            ),
                        WebAssembly.validate(e)
                    );
                } catch (e) {
                    return !1;
                }
            })(
                new Uint8Array([
                    0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0,
                    5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26,
                    11,
                ])
            );
        if (!(e && i && n && s)) return o.Basic;
        if (!a) return o.Advanced;
        try {
            return (
                new Worker(t + "/Worker.test.js").terminate(),
                o.AdvancedWithThreads
            );
        } catch (e) {
            return o.Advanced;
        }
    });
}
function Ie(e) {
    switch (e) {
        case o.AdvancedWithThreads:
            return "advanced-threads";
        case o.Advanced:
            return "advanced";
        case o.Basic:
            return "basic";
    }
}
function Re() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
        (
            e ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
        ).toString(16)
    );
}
function Ne(t) {
    return e(this, void 0, void 0, function* () {
        return new Promise((e, i) => {
            if (!t || "object" != typeof t)
                return void i(new g(K.wasmSettingsMissing));
            if ("string" != typeof t.licenseKey)
                return void i(new g(K.licenseKeyMissing));
            if (!t.wasmModuleName)
                return void i(new g(K.wasmModuleNameMissing));
            if ("string" != typeof t.engineLocation)
                return void i(new g(K.engineLocationInvalid));
            const n = (function () {
                try {
                    let e = localStorage.getItem("mb-user-id");
                    return (
                        null === e &&
                            ((e = Re()), localStorage.setItem("mb-user-id", e)),
                        e
                    );
                } catch (e) {
                    return Re();
                }
            })();
            try {
                const s = new Blob(
                        [
                            String.raw`!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(e,t,s,n){return new(s||(s=Promise))((function(r,i){function o(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))}let t=0;class s{constructor(e){this.action=e,this.messageID=function(){const e=t;return t+=1,e}()}}class n extends s{constructor(e,t){super(n.action),this.wasmModuleName=e.wasmModuleName,this.licenseKey=e.licenseKey,this.userId=t,this.registerLoadCallback=null!==e.loadProgressCallback,this.allowHelloMessage=e.allowHelloMessage,this.engineLocation=e.engineLocation,this.wasmType=e.wasmType,this.numberOfWorkers=e.numberOfWorkers}}var r,i;n.action="init",function(e){e[e.Any=0]="Any",e[e.Recognizer=1]="Recognizer",e[e.RecognizerSettings=2]="RecognizerSettings",e[e.Callback=3]="Callback"}(r||(r={}));class o extends s{constructor(e,t){super(o.action),this.funcName=e,this.params=t}}o.action="invokeFunction";class a extends s{constructor(e,t){super(a.action),this.className=e,this.params=t}}a.action="createNewNativeObject";class c extends s{constructor(e,t,s){super(c.action),this.recognizerHandles=e,this.allowMultipleResults=t,this.registeredMetadataCallbacks=s}}c.action="createRecognizerRunner";class E extends s{constructor(e,t){super(E.action),this.recognizerHandles=e,this.allowMultipleResults=t}}E.action="reconfigureRecognizerRunner";class R extends s{constructor(){super(R.action)}}R.action="deleteRecognizerRunner";class l extends s{constructor(e,t,s){super(l.action),this.objectHandle=e,this.methodName=t,this.params=s}}l.action="invokeObject";class _ extends s{constructor(e){super(_.action),this.frame=e}getTransferrables(){return[this.frame.imageData.data.buffer]}}_.action="processImage";class u extends s{constructor(e){super(u.action),this.hardReset=e}}u.action="resetRecognizers";class I extends s{constructor(e){super(I.action),this.registeredMetadataCallbacks=e}}I.action="registerMetadataCallbacks";class d extends s{constructor(e){super(d.action),this.detectionOnlyMode=e}}d.action="setDetectionOnly";class N extends s{constructor(e){super(N.action),this.callbackNonEmpty=e}}N.action="setClearTimeoutCallback";class O extends s{constructor(e){super(O.action),this.cameraPreviewMirrored=e}}O.action="setCameraPreviewMirrored";class h extends s{constructor(e){super(h.action),this.userId=e}}h.action="getProductIntegrationInfo";class S{constructor(e,t,s){this.success=!0,this.error=null,this.messageID=e,this.success=t,this.error=s}}class g{constructor(e,t,s,n){this.success=!0,this.showOverlay=!0,this.messageID=e,this.success=t,this.showOverlay=s,this.wasmType=n}}class C extends S{constructor(e,t){super(e,!0,null),this.result=t}}class m extends S{constructor(e,t){super(e,!0,null),this.objectHandle=t}}class A extends S{constructor(e,t){super(e,!0,null),this.recognitionState=t}}class D extends S{constructor(e,t){super(e,!0,null),this.result=t}}class f{constructor(e){this.isLoadProgressMessage=!0,this.progress=e}}!function(e){e[e.onDebugText=0]="onDebugText",e[e.onDetectionFailed=1]="onDetectionFailed",e[e.onQuadDetection=2]="onQuadDetection",e[e.onPointsDetection=3]="onPointsDetection",e[e.onFirstSideResult=4]="onFirstSideResult",e[e.clearTimeoutCallback=5]="clearTimeoutCallback",e[e.onGlare=6]="onGlare",e[e.recognizerCallback=7]="recognizerCallback"}(i||(i={}));class M{constructor(e,t){this.isCallbackMessage=!0,this.callbackType=e,this.callbackParameters=t}}function T(e,t){return t=t||"",""===(e=e||"")?t:e.endsWith("/")?t.startsWith("/")?e+t.substring(1):e+t:t.startsWith("/")?e+t:e+"/"+t}var p,L,w;function y(t){return e(this,void 0,void 0,(function*(){const e=yield(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])))(),s=yield(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])))(),n=yield(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])))(),r=yield(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])))(),i=yield(async e=>{try{return"undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]));if(!(e&&s&&n&&r))return p.Basic;if(!i)return p.Advanced;try{return new Worker(t+"/Worker.test.js").terminate(),p.AdvancedWithThreads}catch(e){return p.Advanced}}))}!function(e){e.Basic="BASIC",e.Advanced="ADVANCED",e.AdvancedWithThreads="ADVANCED_WITH_THREADS"}(p||(p={}));class U{constructor(e,t){if(!e.code||!e.message)throw Error("Instance of SDKError is required to have code and message.");this.message=e.message,this.code=e.code,this.details=t}}!function(e){e.WORKER_WASM_LOAD_FAILURE="WORKER_WASM_LOAD_FAILURE",e.WORKER_WASM_INIT_MISSING="WORKER_WASM_INIT_MISSING",e.WORKER_FUNCTION_INVOKE_FAILURE="WORKER_FUNCTION_INVOKE_FAILURE",e.WORKER_RECOGNIZER_CREATION_FAILURE="WORKER_RECOGNIZER_CREATION_FAILURE",e.WORKER_RUNNER_EXISTS="WORKER_RUNNER_EXISTS",e.WORKER_RUNNER_CREATION_FAILURE="WORKER_RUNNER_CREATION_FAILURE",e.WORKER_RUNNER_MISSING="WORKER_RUNNER_MISSING",e.WORKER_RUNNER_RECONFIGURE_FAILURE="WORKER_RUNNER_RECONFIGURE_FAILURE",e.WORKER_RUNNER_DELETED="WORKER_RUNNER_DELETED",e.WORKER_RUNNER_DELETE_FAILURE="WORKER_RUNNER_DELETE_FAILURE",e.WORKER_OBJECT_INVOKE_FAILURE="WORKER_OBJECT_INVOKE_FAILURE",e.WORKER_IMAGE_PROCESS_FAILURE="WORKER_IMAGE_PROCESS_FAILURE",e.WORKER_HANDLE_UNDEFINED="WORKER_HANDLE_UNDEFINED",e.WORKER_MESSAGE_ACTION_UNKNOWN="WORKER_MESSAGE_ACTION_UNKNOWN",e.WORKER_LICENSE_UNLOCK_ERROR="WORKER_LICENSE_UNLOCK_ERROR",e.WORKER_INTEGRATION_INFO_FAILURE="WORKER_INTEGRATION_INFO_FAILURE",e.LOCAL_SDK_RUNNER_MISSING="LOCAL_SDK_RUNNER_MISSING",e.LOCAL_SDK_RUNNER_EMPTY="LOCAL_SDK_RUNNER_EMPTY",e.LICENSE_UNLOCK_ERROR="LICENSE_UNLOCK_ERROR",e.FRAME_CAPTURE_SVG_UNSUPPORTED="FRAME_CAPTURE_SVG_UNSUPPORTED",e.FRAME_CAPTURE_CANVAS_MISSING="FRAME_CAPTURE_CANVAS_MISSING",e.SDK_WASM_SETTINGS_MISSING="SDK_WASM_SETTINGS_MISSING",e.SDK_LICENSE_KEY_MISSING="SDK_LICENSE_KEY_MISSING",e.SDK_WASM_MODULE_NAME_MISSING="SDK_WASM_MODULE_NAME_MISSING",e.SDK_ENGINE_LOCATION_INVALID="SDK_ENGINE_LOCATION_INVALID",e.SDK_MISSING="SDK_MISSING",e.SDK_RECOGNIZERS_MISSING="SDK_RECOGNIZERS_MISSING",e.VIDEO_RECOGNIZER_ELEMENT_MISSING="VIDEO_RECOGNIZER_ELEMENT_MISSING",e.VIDEO_RECOGNIZER_CAMERA_MISSING="VIDEO_RECOGNIZER_CAMERA_MISSING",e.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED="VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED",e.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE="VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE",e.VIDEO_RECOGNIZER_CAMERA_IN_USE="VIDEO_RECOGNIZER_CAMERA_IN_USE",e.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED="VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED",e.VIDEO_RECOGNIZER_FEED_RELEASED="VIDEO_RECOGNIZER_FEED_RELEASED",e.VIDEO_RECOGNIZER_FEED_NOT_PAUSED="VIDEO_RECOGNIZER_FEED_NOT_PAUSED",e.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED="VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED",e.VIDEO_RECOGNIZER_FEED_PAUSED="VIDEO_RECOGNIZER_FEED_PAUSED",e.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE="VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE",e.VIDEO_RECOGNIZER_FEED_MISSING="VIDEO_RECOGNIZER_FEED_MISSING"}(L||(L={})),function(e){e.WORKER_HANDLE_UNDEFINED="Cannot find object with handle: undefined",e.WORKER_WASM_LOAD_FAILURE="Failed to load WASM in web worker!",e.WORKER_WASM_INIT_MISSING="WASM module is not initialized!",e.WORKER_FUNCTION_INVOKE_FAILURE="Failed to invoke function!",e.WORKER_RECOGNIZER_CREATION_FAILURE="Failed to create new recognizer!",e.WORKER_RUNNER_EXISTS="Recognizer runner is already created! Multiple instances are not allowed!",e.WORKER_RUNNER_CREATION_FAILURE="Failed to create new recognizer runner!",e.WORKER_RUNNER_MISSING="Recognizer runner is not created! There is nothing to reconfigure!",e.WORKER_RUNNER_RECONFIGURE_FAILURE="Failed to reconfigure recognizer runner!",e.WORKER_RUNNER_DELETED="Recognizer runner is already deleted!",e.WORKER_RUNNER_DELETE_FAILURE="Failed to delete recognizer runner!",e.WORKER_OBJECT_INVOKE_FAILURE="Failed to invoke object!",e.WORKER_IMAGE_PROCESS_FAILURE="Recognizer runner is not initialized! Cannot process image!",e.WORKER_INTEGRATION_INFO_FAILURE="Failed to get product integration info!",e.LOCAL_SDK_RUNNER_MISSING="Property nativeRecognizerRunner is not available!",e.LOCAL_SDK_RUNNER_EMPTY="Native RecognizerRunner cannot be empty!",e.LICENSE_TOKEN_STATE_INCORRECT="Internal error (Incorrect token state)",e.LICENSE_PAYLOAD_VERIFICATION_FAILED="Failed to verify server permission's digital signature!",e.LICENSE_PAYLOAD_CORRUPTED="Server permission payload is corrupted!",e.LICENSE_PERMISSION_EXPIRED="Internal error (server permission expired)",e.LICENSE_REMOTE_LOCKED="Provided license key has been remotely locked. Please contact support for more information!",e.FRAME_CAPTURE_SVG_UNSUPPORTED="Recognition of SVG elements not supported!",e.FRAME_CAPTURE_CANVAS_MISSING="Could not get canvas 2d context!",e.SDK_WASM_SETTINGS_MISSING="Missing WASM load settings!",e.SDK_LICENSE_KEY_MISSING="Missing license key!",e.SDK_WASM_MODULE_NAME_MISSING="Missing WASM module name!",e.SDK_ENGINE_LOCATION_INVALID="Setting property 'engineLocation' must be a string!",e.SDK_MISSING="SDK is not provided!",e.SDK_RECOGNIZERS_MISSING="To create RecognizerRunner at least 1 recognizer is required.",e.VIDEO_RECOGNIZER_ELEMENT_MISSING="Video element, i.e. camera feed is not provided!",e.VIDEO_RECOGNIZER_CAMERA_MISSING="Camera not found!",e.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED="Camera not allowed!",e.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE="Camera not available!",e.VIDEO_RECOGNIZER_CAMERA_IN_USE="Camera in use!",e.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED="Media devices not supported by browser.",e.VIDEO_RECOGNIZER_FEED_RELEASED="The associated video feed has been released!",e.VIDEO_RECOGNIZER_FEED_NOT_PAUSED="The associated video feed is not paused. Use resumeRecognition instead!",e.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED="The play() request was interrupted or prevented by browser security rules!",e.VIDEO_RECOGNIZER_FEED_PAUSED="Cannot resume recognition while video feed is paused! Use recognize or startRecognition",e.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE="Could not reset recognizers!",e.VIDEO_RECOGNIZER_FEED_MISSING="Missing video feed!"}(w||(w={}));const F={licenseTokenStateIncorrect:{code:L.LICENSE_UNLOCK_ERROR,message:w.LICENSE_TOKEN_STATE_INCORRECT},licensePayloadVerificationFailed:{code:L.LICENSE_UNLOCK_ERROR,message:w.LICENSE_PAYLOAD_VERIFICATION_FAILED},licensePayloadCorrupted:{code:L.LICENSE_UNLOCK_ERROR,message:w.LICENSE_PAYLOAD_CORRUPTED},licensePermissionExpired:{code:L.LICENSE_UNLOCK_ERROR,message:w.LICENSE_PERMISSION_EXPIRED},licenseRemoteLocked:{code:L.LICENSE_UNLOCK_ERROR,message:w.LICENSE_REMOTE_LOCKED},licenseNetworkError:{code:L.LICENSE_UNLOCK_ERROR},licenseInvalid:{code:L.LICENSE_UNLOCK_ERROR}},b={imageProcessFailure:{message:w.WORKER_IMAGE_PROCESS_FAILURE,code:L.WORKER_IMAGE_PROCESS_FAILURE},objectInvokeFailure:{message:w.WORKER_OBJECT_INVOKE_FAILURE,code:L.WORKER_OBJECT_INVOKE_FAILURE},runnerDeleteFailure:{message:w.WORKER_RUNNER_DELETE_FAILURE,code:L.WORKER_RUNNER_DELETE_FAILURE},runnerDeleted:{message:w.WORKER_RUNNER_DELETED,code:L.WORKER_RUNNER_DELETED},runnerReconfigureFailure:{message:w.WORKER_RUNNER_RECONFIGURE_FAILURE,code:L.WORKER_RUNNER_RECONFIGURE_FAILURE},runnerMissing:{message:w.WORKER_RUNNER_MISSING,code:L.WORKER_RUNNER_MISSING},runnerCreationFailure:{message:w.WORKER_RUNNER_CREATION_FAILURE,code:L.WORKER_RUNNER_CREATION_FAILURE},runnerExists:{message:w.WORKER_RUNNER_EXISTS,code:L.WORKER_RUNNER_EXISTS},recognizerCreationFailure:{message:w.WORKER_RECOGNIZER_CREATION_FAILURE,code:L.WORKER_RECOGNIZER_CREATION_FAILURE},functionInvokeFailure:{message:w.WORKER_FUNCTION_INVOKE_FAILURE,code:L.WORKER_FUNCTION_INVOKE_FAILURE},wasmInitMissing:{message:w.WORKER_WASM_INIT_MISSING,code:L.WORKER_WASM_INIT_MISSING},wasmLoadFailure:{message:w.WORKER_WASM_LOAD_FAILURE,code:L.WORKER_WASM_LOAD_FAILURE},handleUndefined:{message:w.WORKER_HANDLE_UNDEFINED,code:L.WORKER_HANDLE_UNDEFINED},integrationInfoFailure:{message:w.WORKER_INTEGRATION_INFO_FAILURE,code:L.WORKER_INTEGRATION_INFO_FAILURE}};var k,K;!function(e){e[e.Invalid=0]="Invalid",e[e.RequiresServerPermission=1]="RequiresServerPermission",e[e.Valid=2]="Valid"}(k||(k={})),function(e){e.LicenseTokenStateInvalid="LICENSE_TOKEN_STATE_INVALID",e.NetworkError="NETWORK_ERROR",e.RemoteLock="REMOTE_LOCK",e.PermissionExpired="PERMISSION_EXPIRED",e.PayloadCorrupted="PAYLOAD_CORRUPTED",e.PayloadSignatureVerificationFailed="PAYLOAD_SIGNATURE_VERIFICATION_FAILED",e.IncorrectTokenState="INCORRECT_TOKEN_STATE"}(K||(K={}));function v(e){return{licenseId:e.licenseId,licensee:e.licensee,packageName:e.packageName,platform:"Browser",sdkName:e.sdkName,sdkVersion:e.sdkVersion}}var P;function W(t,s){return e(this,void 0,void 0,(function*(){try{const e=yield fetch("https://baltazar.microblink.com/api/v1/status/check",{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-cache",body:JSON.stringify(v(t))});if(e.ok){const t=""+(yield e.text());return s.submitServerPermission(t)}return{status:P.NetworkError,lease:0,networkErrorDescription:"Server responded with status "+e.status}}catch(e){return{status:P.NetworkError,lease:0,networkErrorDescription:"Unexpected error: "+JSON.stringify(e)}}}))}function G(e){return e===p.AdvancedWithThreads}!function(e){e[e.Ok=0]="Ok",e[e.NetworkError=1]="NetworkError",e[e.RemoteLock=2]="RemoteLock",e[e.PermissionExpired=3]="PermissionExpired",e[e.PayloadCorrupted=4]="PayloadCorrupted",e[e.PayloadSignatureVerificationFailed=5]="PayloadSignatureVerificationFailed",e[e.IncorrectTokenState=6]="IncorrectTokenState"}(P||(P={}));new class{constructor(){this.context=self,this.wasmModule=null,this.nativeRecognizerRunner=null,this.objects={},this.nextObjectHandle=0,this.metadataCallbacks={},this.clearTimeoutCallback=null,this.context.onmessage=e=>{const t=e.data;switch(t.action){case n.action:this.processInitMessage(t);break;case o.action:this.processInvokeFunction(t);break;case a.action:this.processCreateNewRecognizer(t);break;case l.action:this.processInvokeObject(t);break;case c.action:this.processCreateRecognizerRunner(t);break;case E.action:this.processReconfigureRecognizerRunner(t);break;case R.action:this.processDeleteRecognizerRunner(t);break;case _.action:this.processImage(t);break;case u.action:this.resetRecognizers(t);break;case d.action:this.setDetectionOnly(t);break;case O.action:this.setCameraPreviewMirrored(t);break;case I.action:this.registerMetadataCallbacks(t);break;case N.action:this.registerClearTimeoutCallback(t);break;case h.action:this.processGetProductIntegrationInfo(t);break;default:throw new U({code:L.WORKER_MESSAGE_ACTION_UNKNOWN,message:"Unknown message action: "+JSON.stringify(t.action)})}}}getNextObjectHandle(){const e=this.nextObjectHandle;return this.nextObjectHandle=this.nextObjectHandle+1,e}notifyError(e,t){this.context.postMessage(new S(e.messageID,!1,t))}notifySuccess(e){this.context.postMessage(new S(e.messageID,!0,null))}notifyInitSuccess(e,t,s){this.context.postMessage(new g(e.messageID,!0,t,s))}unwrapParameters(e){const t=[];for(const s of e.params){let n=s.parameter;s.type===r.Recognizer?(n=this.objects[n],void 0===n&&this.notifyError(e,new U(b.handleUndefined))):s.type===r.RecognizerSettings&&(n=this.restoreFunctions(n)),t.push(n)}return t}restoreFunctions(e){const t=Object.keys(e);for(const s of t){const t=e[s];"object"==typeof t&&null!==t&&"parameter"in t&&"type"in t&&t.type===r.Callback&&(e[s]=(...e)=>{const s=new M(i.recognizerCallback,[t.parameter].concat(e));this.context.postMessage(s)})}return e}scanForTransferrables(e){if("object"==typeof e){const t=Object.keys(e),s=[];for(const n of t){const t=e[n];t instanceof ImageData?s.push(t.data.buffer):t instanceof Uint8Array?s.push(t.buffer):null!==t&&"object"==typeof t&&s.push(...this.scanForTransferrables(t))}return s}return[]}registerHeartBeat(e){this.unregisterHeartBeat(),this.lease=e;let t=e-Math.floor(Date.now()/1e3);t>120?t-=120:t/=2,this.inFlightHeartBeatTimeoutId=setTimeout((()=>{this.obtainNewServerPermission(!0)}),1e3*t)}unregisterHeartBeat(){this.lease&&delete this.lease,this.inFlightHeartBeatTimeoutId&&(clearTimeout(this.inFlightHeartBeatTimeoutId),delete this.inFlightHeartBeatTimeoutId)}obtainNewServerPermission(t){return e(this,void 0,void 0,(function*(){if(this.wasmModule){const e=this.wasmModule.getActiveLicenseTokenInfo(),s=yield W(e,this.wasmModule);switch(s.status){case P.Ok:case P.RemoteLock:this.registerHeartBeat(s.lease);break;case P.NetworkError:case P.PayloadSignatureVerificationFailed:case P.PayloadCorrupted:t?(console.warn("Problem with obtaining server permission. Will attempt in 10 seconds "+P[s.status]),this.inFlightHeartBeatTimeoutId=setTimeout((()=>{this.obtainNewServerPermission(!1)}),1e4)):console.error("Problem with obtaining server permission. "+P[s.status]);break;case P.IncorrectTokenState:case P.PermissionExpired:console.error("Internal error: "+P[s.status])}return s.status}return console.error("Internal inconsistency! Wasm module not initialized where it's expected to be!"),P.IncorrectTokenState}))}willSoonExpire(){if(this.lease){if(this.wasmModule.getActiveLicenseTokenInfo().unlockResult===k.Valid){const e=Math.floor(Date.now()/1e3);return 30>this.lease-e}return!0}return!1}calculateWasmType(t){return e(this,void 0,void 0,(function*(){return null!==t.wasmType?t.wasmType:yield y(t.engineLocation)}))}calculateEngineLocationPrefix(e,t){const s=T(""===e.engineLocation?self.location.origin:e.engineLocation,function(e){switch(e){case p.AdvancedWithThreads:return"advanced-threads";case p.Advanced:return"advanced";case p.Basic:return"basic"}}(t));return e.allowHelloMessage&&console.log("Engine location prefix is:",s),s}processInitMessage(t){return e(this,void 0,void 0,(function*(){const s=yield this.calculateWasmType(t),n=this.calculateEngineLocationPrefix(t,s);let r={locateFile:e=>T(n,e)};t.registerLoadCallback&&(r=Object.assign(r,{setStatus:e=>{const t=new f(function(e){if("Running..."===e)return 100;if(0===e.length)return 0;const t=/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/.exec(e);if(t)return 100*parseInt(t[2])/parseInt(t[4]);return NaN}(e));this.context.postMessage(t)}}));try{const i=T(n,t.wasmModuleName+".js");G(s)&&(r=function(e,t,s){return t&&t>0&&(e=Object.assign(e,{allowedThreads:t})),null!==s&&(e=Object.assign(e,{mainScriptUrlOrBlob:s})),e}(r,t.numberOfWorkers,i)),importScripts(i);(0,self[t.wasmModuleName])(r).then((n=>e(this,void 0,void 0,(function*(){G(s)&&(t.allowHelloMessage&&console.log("Waiting for thread workers to boot..."),yield function(t){return e(this,void 0,void 0,(function*(){t.threadWorkersReadyPromise&&(yield t.threadWorkersReadyPromise)}))}(n));const r=yield function(t,s,n,r){return e(this,void 0,void 0,(function*(){const e=r.initializeWithLicenseKey(t,n,s);switch(e.unlockResult){case k.Invalid:return{error:new U(Object.assign(Object.assign({},F.licenseInvalid),{message:e.licenseError}),{type:K.LicenseTokenStateInvalid})};case k.Valid:return{error:null,showOverlay:(i=e.isTrial,o=e.allowRemoveDemoOverlay,a=e.allowRemoveProductionOverlay,!(i&&o||!i&&a))};case k.RequiresServerPermission:{const t=yield W(e,r);switch(t.status){case P.Ok:return{error:null,lease:t.lease};case P.NetworkError:{let e="";return t.networkErrorDescription&&(e=" "+t.networkErrorDescription),{error:new U(Object.assign(Object.assign({},F.licenseNetworkError),{message:"There has been a network error while obtaining the server permission!"+e}),{type:K.NetworkError})}}case P.RemoteLock:return{error:new U(F.licenseRemoteLocked,{type:K.RemoteLock}),lease:t.lease};case P.PermissionExpired:return{error:new U(F.licensePermissionExpired,{type:K.PermissionExpired}),lease:t.lease};case P.PayloadCorrupted:return{error:new U(F.licensePayloadCorrupted,{type:K.PayloadCorrupted}),lease:t.lease};case P.PayloadSignatureVerificationFailed:return{error:new U(F.licensePayloadVerificationFailed,{type:K.PayloadSignatureVerificationFailed}),lease:t.lease};case P.IncorrectTokenState:return{error:new U(F.licenseTokenStateIncorrect,{type:K.IncorrectTokenState}),lease:t.lease}}}}var i,o,a}))}(t.licenseKey,t.allowHelloMessage,t.userId,n);null===r.error?(this.wasmModule=n,r.lease?this.registerHeartBeat(r.lease):this.unregisterHeartBeat(),this.notifyInitSuccess(t,!!r.showOverlay,s)):this.notifyError(t,r.error)}))),(e=>{this.notifyError(t,new U(b.wasmLoadFailure,e))}))}catch(e){this.notifyError(t,new U(b.wasmLoadFailure,e))}}))}processInvokeFunction(e){if(null===this.wasmModule)return void this.notifyError(e,new U(b.wasmInitMissing));const t=e.funcName,s=this.unwrapParameters(e);try{const n=this.wasmModule[t](...s);this.context.postMessage(new C(e.messageID,n))}catch(t){this.notifyError(e,new U(b.functionInvokeFailure,t))}}processCreateNewRecognizer(e){if(null===this.wasmModule)return void this.notifyError(e,new U(b.wasmInitMissing));const t=e.className,s=this.unwrapParameters(e);try{const n=new this.wasmModule[t](...s),r=this.getNextObjectHandle();this.objects[r]=n,this.context.postMessage(new m(e.messageID,r))}catch(t){this.notifyError(e,new U(b.recognizerCreationFailure,t))}}getRecognizers(e){const t=[];for(const s of e){t.push(this.objects[s])}return t}processCreateRecognizerRunner(t){return e(this,void 0,void 0,(function*(){if(null===this.wasmModule)this.notifyError(t,new U(b.wasmInitMissing));else if(null!==this.nativeRecognizerRunner)this.notifyError(t,new U(b.runnerExists));else{this.setupMetadataCallbacks(t.registeredMetadataCallbacks);try{if(this.willSoonExpire()){const e=yield this.obtainNewServerPermission(!1);if(e!==P.Ok){const s=P[e];return void this.notifyError(t,new U({code:L.WORKER_LICENSE_UNLOCK_ERROR,message:"Cannot initialize recognizers because of invalid server permission: \n                                    "+s},{type:K[s]}))}}const e=this.getRecognizers(t.recognizerHandles);this.nativeRecognizerRunner=new this.wasmModule.RecognizerRunner(e,t.allowMultipleResults,this.metadataCallbacks),this.notifySuccess(t)}catch(e){this.notifyError(t,new U(b.runnerCreationFailure,e))}}}))}processReconfigureRecognizerRunner(e){if(null===this.wasmModule)this.notifyError(e,new U(b.wasmInitMissing));else if(null===this.nativeRecognizerRunner)this.notifyError(e,new U(b.runnerMissing));else try{const t=this.getRecognizers(e.recognizerHandles);this.nativeRecognizerRunner.reconfigureRecognizers(t,e.allowMultipleResults),this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.runnerReconfigureFailure,t))}}processDeleteRecognizerRunner(e){if(null!==this.nativeRecognizerRunner)try{this.nativeRecognizerRunner.delete(),this.nativeRecognizerRunner=null,this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.runnerDeleteFailure,t))}else this.notifyError(e,new U(b.runnerDeleted))}wrapFunctions(e,t){if("object"!=typeof e)return e;const s=Object.assign({},e),n=Object.keys(s);for(const e of n){if("function"==typeof s[e]){s[e]={parameter:{recognizerHandle:t,callbackName:e},type:r.Callback}}}return s}processInvokeObject(e){try{const t=e.objectHandle,s=e.methodName,n=this.unwrapParameters(e),r=this.objects[t];if(void 0===r)this.notifyError(e,new U({message:"Cannot find object with handle: "+t,code:L.WORKER_HANDLE_UNDEFINED}));else{const i=this.wrapFunctions(r[s](...n),t),o=this.scanForTransferrables(i);"delete"===s&&delete this.objects[t],this.context.postMessage(new C(e.messageID,i),o)}}catch(t){this.notifyError(e,new U(b.objectInvokeFailure,t))}}processImage(e){if(null!==this.nativeRecognizerRunner)try{const t=this.nativeRecognizerRunner.processImage(e.frame);this.context.postMessage(new A(e.messageID,t))}catch(t){this.notifyError(e,new U(b.imageProcessFailure,t))}else this.notifyError(e,new U(b.imageProcessFailure))}resetRecognizers(e){if(null!==this.nativeRecognizerRunner)try{this.nativeRecognizerRunner.resetRecognizers(e.hardReset),this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.imageProcessFailure,t))}else this.notifyError(e,new U(b.imageProcessFailure))}setDetectionOnly(e){if(null!==this.nativeRecognizerRunner)try{this.nativeRecognizerRunner.setDetectionOnlyMode(e.detectionOnlyMode),this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.imageProcessFailure,t))}else this.notifyError(e,new U(b.imageProcessFailure))}setCameraPreviewMirrored(e){if(null!==this.nativeRecognizerRunner)try{this.nativeRecognizerRunner.setCameraPreviewMirrored(e.cameraPreviewMirrored),this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.imageProcessFailure,t))}else this.notifyError(e,new U(b.imageProcessFailure))}setupMetadataCallbacks(e){e.onDebugText?this.metadataCallbacks.onDebugText=e=>{const t=new M(i.onDebugText,[e]);this.context.postMessage(t)}:delete this.metadataCallbacks.onDebugText,e.onDetectionFailed?this.metadataCallbacks.onDetectionFailed=()=>{const e=new M(i.onDetectionFailed,[]);this.context.postMessage(e)}:delete this.metadataCallbacks.onDetectionFailed,e.onPointsDetection?this.metadataCallbacks.onPointsDetection=e=>{const t=new M(i.onPointsDetection,[e]);this.context.postMessage(t)}:delete this.metadataCallbacks.onPointsDetection,e.onQuadDetection?this.metadataCallbacks.onQuadDetection=e=>{const t=new M(i.onQuadDetection,[e]);this.context.postMessage(t)}:delete this.metadataCallbacks.onQuadDetection,e.onFirstSideResult?this.metadataCallbacks.onFirstSideResult=()=>{const e=new M(i.onFirstSideResult,[]);this.context.postMessage(e)}:delete this.metadataCallbacks.onFirstSideResult,e.onGlare?this.metadataCallbacks.onGlare=e=>{const t=new M(i.onGlare,[e]);this.context.postMessage(t)}:delete this.metadataCallbacks.onGlare}registerMetadataCallbacks(e){if(null!==this.nativeRecognizerRunner){this.setupMetadataCallbacks(e.registeredMetadataCallbacks);try{this.nativeRecognizerRunner.setJSDelegate(this.metadataCallbacks),this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.imageProcessFailure,t))}}else this.notifyError(e,new U(b.imageProcessFailure))}registerClearTimeoutCallback(e){if(null!==this.nativeRecognizerRunner){this.clearTimeoutCallback=e.callbackNonEmpty?{onClearTimeout:()=>{const e=new M(i.clearTimeoutCallback,[]);this.context.postMessage(e)}}:null;try{this.nativeRecognizerRunner.setClearTimeoutCallback(this.clearTimeoutCallback),this.notifySuccess(e)}catch(t){this.notifyError(e,new U(b.imageProcessFailure,t))}}else this.notifyError(e,new U(b.imageProcessFailure))}processGetProductIntegrationInfo(e){if(null!==this.wasmModule)try{const t=this.wasmModule.getActiveLicenseTokenInfo(),s={userId:e.userId,licenseId:t.licenseId,licensee:t.licensee,productName:t.sdkName,productVersion:t.sdkVersion,platform:"Browser",device:self.navigator.userAgent,packageName:t.packageName};this.context.postMessage(new D(e.messageID,s))}catch(t){this.notifyError(e,new U(b.objectInvokeFailure,t))}else this.notifyError(e,new U(b.wasmInitMissing))}}}();
`,
                        ],
                        { type: "application/javascript" }
                    ),
                    a = URL.createObjectURL(s),
                    o = new Worker(a);
                M.createWasmWorker(o, t, n).then((t) => {
                    e(t);
                }, i);
            } catch (e) {
                i(e);
            }
        });
    });
}
function ce(t, i, n = !1, s = {}) {
    return e(this, void 0, void 0, function* () {
        if ("object" != typeof t) throw new g(K.missing);
        if ("object" != typeof i || 1 > i.length)
            throw new g(K.recognizersMissing);
        return t.mbWasmModule.createRecognizerRunner(i, n, s);
    });
}
function _e(t, i) {
    return e(this, void 0, void 0, function* () {
        const e = yield t.mbWasmModule.newRecognizer(
            "SuccessFrameGrabberRecognizer",
            i
        );
        return (e.wrappedRecognizer = i), e;
    });
}
var de, le, Se, Oe, Ce, De, ue, Te, me, Le, Ue;
!(function (e) {
    (e[(e.NONE = 0)] = "NONE"),
        (e[(e.QR_CODE = 1)] = "QR_CODE"),
        (e[(e.DATA_MATRIX = 2)] = "DATA_MATRIX"),
        (e[(e.UPC_E = 3)] = "UPC_E"),
        (e[(e.UPC_A = 4)] = "UPC_A"),
        (e[(e.EAN_8 = 5)] = "EAN_8"),
        (e[(e.EAN_13 = 6)] = "EAN_13"),
        (e[(e.CODE_128 = 7)] = "CODE_128"),
        (e[(e.CODE_39 = 8)] = "CODE_39"),
        (e[(e.ITF = 9)] = "ITF"),
        (e[(e.AZTEC_BARCODE = 10)] = "AZTEC_BARCODE"),
        (e[(e.PDF417_BARCODE = 11)] = "PDF417_BARCODE");
})(de || (de = {})),
    (function (e) {
        (e[(e.None = 0)] = "None"),
            (e[(e.ImageOnly = 1)] = "ImageOnly"),
            (e[(e.ResultFieldsOnly = 2)] = "ResultFieldsOnly"),
            (e[(e.FullResult = 3)] = "FullResult");
    })(le || (le = {}));
class he {
    constructor() {
        (this.enableMrzId = !0),
            (this.enableMrzPassport = !0),
            (this.enableMrzVisa = !0),
            (this.enablePhotoId = !0),
            (this.enableBarcodeId = !0),
            (this.enableFullDocumentRecognition = !0);
    }
}
class Me {
    constructor(e = 0, t = 0, i = 0, n = 0) {
        (this.upFactor = 0),
            (this.downFactor = 0),
            (this.leftFactor = 0),
            (this.rightFactor = 0),
            this.checkExtensionFactor(e),
            this.checkExtensionFactor(t),
            this.checkExtensionFactor(i),
            this.checkExtensionFactor(n),
            (this.upFactor = e),
            (this.downFactor = t),
            (this.leftFactor = i),
            (this.rightFactor = n);
    }
    checkExtensionFactor(e) {
        if (e > 1 || -1 > e)
            throw Error("Extension factor must be in range [-1.0, 1.0]");
    }
}
function ge(e) {
    if (100 > e || e > 400) throw Error("DPI must be from interval [100, 400]");
}
!(function (e) {
    (e[(e.DocumentType = 0)] = "DocumentType"),
        (e[(e.StandardVersionNumber = 1)] = "StandardVersionNumber"),
        (e[(e.CustomerFamilyName = 2)] = "CustomerFamilyName"),
        (e[(e.CustomerFirstName = 3)] = "CustomerFirstName"),
        (e[(e.CustomerFullName = 4)] = "CustomerFullName"),
        (e[(e.DateOfBirth = 5)] = "DateOfBirth"),
        (e[(e.Sex = 6)] = "Sex"),
        (e[(e.EyeColor = 7)] = "EyeColor"),
        (e[(e.AddressStreet = 8)] = "AddressStreet"),
        (e[(e.AddressCity = 9)] = "AddressCity"),
        (e[(e.AddressJurisdictionCode = 10)] = "AddressJurisdictionCode"),
        (e[(e.AddressPostalCode = 11)] = "AddressPostalCode"),
        (e[(e.FullAddress = 12)] = "FullAddress"),
        (e[(e.Height = 13)] = "Height"),
        (e[(e.HeightIn = 14)] = "HeightIn"),
        (e[(e.HeightCm = 15)] = "HeightCm"),
        (e[(e.CustomerMiddleName = 16)] = "CustomerMiddleName"),
        (e[(e.HairColor = 17)] = "HairColor"),
        (e[(e.NameSuffix = 18)] = "NameSuffix"),
        (e[(e.AKAFullName = 19)] = "AKAFullName"),
        (e[(e.AKAFamilyName = 20)] = "AKAFamilyName"),
        (e[(e.AKAGivenName = 21)] = "AKAGivenName"),
        (e[(e.AKASuffixName = 22)] = "AKASuffixName"),
        (e[(e.WeightRange = 23)] = "WeightRange"),
        (e[(e.WeightPounds = 24)] = "WeightPounds"),
        (e[(e.WeightKilograms = 25)] = "WeightKilograms"),
        (e[(e.CustomerIdNumber = 26)] = "CustomerIdNumber"),
        (e[(e.FamilyNameTruncation = 27)] = "FamilyNameTruncation"),
        (e[(e.FirstNameTruncation = 28)] = "FirstNameTruncation"),
        (e[(e.MiddleNameTruncation = 29)] = "MiddleNameTruncation"),
        (e[(e.PlaceOfBirth = 30)] = "PlaceOfBirth"),
        (e[(e.AddressStreet2 = 31)] = "AddressStreet2"),
        (e[(e.RaceEthnicity = 32)] = "RaceEthnicity"),
        (e[(e.NamePrefix = 33)] = "NamePrefix"),
        (e[(e.CountryIdentification = 34)] = "CountryIdentification"),
        (e[(e.ResidenceStreetAddress = 35)] = "ResidenceStreetAddress"),
        (e[(e.ResidenceStreetAddress2 = 36)] = "ResidenceStreetAddress2"),
        (e[(e.ResidenceCity = 37)] = "ResidenceCity"),
        (e[(e.ResidenceJurisdictionCode = 38)] = "ResidenceJurisdictionCode"),
        (e[(e.ResidencePostalCode = 39)] = "ResidencePostalCode"),
        (e[(e.ResidenceFullAddress = 40)] = "ResidenceFullAddress"),
        (e[(e.Under18 = 41)] = "Under18"),
        (e[(e.Under19 = 42)] = "Under19"),
        (e[(e.Under21 = 43)] = "Under21"),
        (e[(e.SocialSecurityNumber = 44)] = "SocialSecurityNumber"),
        (e[(e.AKASocialSecurityNumber = 45)] = "AKASocialSecurityNumber"),
        (e[(e.AKAMiddleName = 46)] = "AKAMiddleName"),
        (e[(e.AKAPrefixName = 47)] = "AKAPrefixName"),
        (e[(e.OrganDonor = 48)] = "OrganDonor"),
        (e[(e.Veteran = 49)] = "Veteran"),
        (e[(e.AKADateOfBirth = 50)] = "AKADateOfBirth"),
        (e[(e.IssuerIdentificationNumber = 51)] = "IssuerIdentificationNumber"),
        (e[(e.DocumentExpirationDate = 52)] = "DocumentExpirationDate"),
        (e[(e.JurisdictionVersionNumber = 53)] = "JurisdictionVersionNumber"),
        (e[(e.JurisdictionVehicleClass = 54)] = "JurisdictionVehicleClass"),
        (e[(e.JurisdictionRestrictionCodes = 55)] =
            "JurisdictionRestrictionCodes"),
        (e[(e.JurisdictionEndorsementCodes = 56)] =
            "JurisdictionEndorsementCodes"),
        (e[(e.DocumentIssueDate = 57)] = "DocumentIssueDate"),
        (e[(e.FederalCommercialVehicleCodes = 58)] =
            "FederalCommercialVehicleCodes"),
        (e[(e.IssuingJurisdiction = 59)] = "IssuingJurisdiction"),
        (e[(e.StandardVehicleClassification = 60)] =
            "StandardVehicleClassification"),
        (e[(e.IssuingJurisdictionName = 61)] = "IssuingJurisdictionName"),
        (e[(e.StandardEndorsementCode = 62)] = "StandardEndorsementCode"),
        (e[(e.StandardRestrictionCode = 63)] = "StandardRestrictionCode"),
        (e[(e.JurisdictionVehicleClassificationDescription = 64)] =
            "JurisdictionVehicleClassificationDescription"),
        (e[(e.JurisdictionEndorsmentCodeDescription = 65)] =
            "JurisdictionEndorsmentCodeDescription"),
        (e[(e.JurisdictionRestrictionCodeDescription = 66)] =
            "JurisdictionRestrictionCodeDescription"),
        (e[(e.InventoryControlNumber = 67)] = "InventoryControlNumber"),
        (e[(e.CardRevisionDate = 68)] = "CardRevisionDate"),
        (e[(e.DocumentDiscriminator = 69)] = "DocumentDiscriminator"),
        (e[(e.LimitedDurationDocument = 70)] = "LimitedDurationDocument"),
        (e[(e.AuditInformation = 71)] = "AuditInformation"),
        (e[(e.ComplianceType = 72)] = "ComplianceType"),
        (e[(e.IssueTimestamp = 73)] = "IssueTimestamp"),
        (e[(e.PermitExpirationDate = 74)] = "PermitExpirationDate"),
        (e[(e.PermitIdentifier = 75)] = "PermitIdentifier"),
        (e[(e.PermitIssueDate = 76)] = "PermitIssueDate"),
        (e[(e.NumberOfDuplicates = 77)] = "NumberOfDuplicates"),
        (e[(e.HAZMATExpirationDate = 78)] = "HAZMATExpirationDate"),
        (e[(e.MedicalIndicator = 79)] = "MedicalIndicator"),
        (e[(e.NonResident = 80)] = "NonResident"),
        (e[(e.UniqueCustomerId = 81)] = "UniqueCustomerId"),
        (e[(e.DataDiscriminator = 82)] = "DataDiscriminator"),
        (e[(e.DocumentExpirationMonth = 83)] = "DocumentExpirationMonth"),
        (e[(e.DocumentNonexpiring = 84)] = "DocumentNonexpiring"),
        (e[(e.SecurityVersion = 85)] = "SecurityVersion"),
        (e[(e.Count = 86)] = "Count");
})(Se || (Se = {})),
    (function (e) {
        (e[(e.NONE = 0)] = "NONE"),
            (e[(e.ALBANIA = 1)] = "ALBANIA"),
            (e[(e.ALGERIA = 2)] = "ALGERIA"),
            (e[(e.ARGENTINA = 3)] = "ARGENTINA"),
            (e[(e.AUSTRALIA = 4)] = "AUSTRALIA"),
            (e[(e.AUSTRIA = 5)] = "AUSTRIA"),
            (e[(e.AZERBAIJAN = 6)] = "AZERBAIJAN"),
            (e[(e.BAHRAIN = 7)] = "BAHRAIN"),
            (e[(e.BANGLADESH = 8)] = "BANGLADESH"),
            (e[(e.BELGIUM = 9)] = "BELGIUM"),
            (e[(e.BOSNIA_AND_HERZEGOVINA = 10)] = "BOSNIA_AND_HERZEGOVINA"),
            (e[(e.BRUNEI = 11)] = "BRUNEI"),
            (e[(e.BULGARIA = 12)] = "BULGARIA"),
            (e[(e.CAMBODIA = 13)] = "CAMBODIA"),
            (e[(e.CANADA = 14)] = "CANADA"),
            (e[(e.CHILE = 15)] = "CHILE"),
            (e[(e.COLOMBIA = 16)] = "COLOMBIA"),
            (e[(e.COSTA_RICA = 17)] = "COSTA_RICA"),
            (e[(e.CROATIA = 18)] = "CROATIA"),
            (e[(e.CYPRUS = 19)] = "CYPRUS"),
            (e[(e.CZECHIA = 20)] = "CZECHIA"),
            (e[(e.DENMARK = 21)] = "DENMARK"),
            (e[(e.DOMINICAN_REPUBLIC = 22)] = "DOMINICAN_REPUBLIC"),
            (e[(e.EGYPT = 23)] = "EGYPT"),
            (e[(e.ESTONIA = 24)] = "ESTONIA"),
            (e[(e.FINLAND = 25)] = "FINLAND"),
            (e[(e.FRANCE = 26)] = "FRANCE"),
            (e[(e.GEORGIA = 27)] = "GEORGIA"),
            (e[(e.GERMANY = 28)] = "GERMANY"),
            (e[(e.GHANA = 29)] = "GHANA"),
            (e[(e.GREECE = 30)] = "GREECE"),
            (e[(e.GUATEMALA = 31)] = "GUATEMALA"),
            (e[(e.HONG_KONG = 32)] = "HONG_KONG"),
            (e[(e.HUNGARY = 33)] = "HUNGARY"),
            (e[(e.INDIA = 34)] = "INDIA"),
            (e[(e.INDONESIA = 35)] = "INDONESIA"),
            (e[(e.IRELAND = 36)] = "IRELAND"),
            (e[(e.ISRAEL = 37)] = "ISRAEL"),
            (e[(e.ITALY = 38)] = "ITALY"),
            (e[(e.JORDAN = 39)] = "JORDAN"),
            (e[(e.KAZAKHSTAN = 40)] = "KAZAKHSTAN"),
            (e[(e.KENYA = 41)] = "KENYA"),
            (e[(e.KOSOVO = 42)] = "KOSOVO"),
            (e[(e.KUWAIT = 43)] = "KUWAIT"),
            (e[(e.LATVIA = 44)] = "LATVIA"),
            (e[(e.LITHUANIA = 45)] = "LITHUANIA"),
            (e[(e.MALAYSIA = 46)] = "MALAYSIA"),
            (e[(e.MALDIVES = 47)] = "MALDIVES"),
            (e[(e.MALTA = 48)] = "MALTA"),
            (e[(e.MAURITIUS = 49)] = "MAURITIUS"),
            (e[(e.MEXICO = 50)] = "MEXICO"),
            (e[(e.MOROCCO = 51)] = "MOROCCO"),
            (e[(e.NETHERLANDS = 52)] = "NETHERLANDS"),
            (e[(e.NEW_ZEALAND = 53)] = "NEW_ZEALAND"),
            (e[(e.NIGERIA = 54)] = "NIGERIA"),
            (e[(e.PAKISTAN = 55)] = "PAKISTAN"),
            (e[(e.PANAMA = 56)] = "PANAMA"),
            (e[(e.PARAGUAY = 57)] = "PARAGUAY"),
            (e[(e.PHILIPPINES = 58)] = "PHILIPPINES"),
            (e[(e.POLAND = 59)] = "POLAND"),
            (e[(e.PORTUGAL = 60)] = "PORTUGAL"),
            (e[(e.PUERTO_RICO = 61)] = "PUERTO_RICO"),
            (e[(e.QATAR = 62)] = "QATAR"),
            (e[(e.ROMANIA = 63)] = "ROMANIA"),
            (e[(e.RUSSIA = 64)] = "RUSSIA"),
            (e[(e.SAUDI_ARABIA = 65)] = "SAUDI_ARABIA"),
            (e[(e.SERBIA = 66)] = "SERBIA"),
            (e[(e.SINGAPORE = 67)] = "SINGAPORE"),
            (e[(e.SLOVAKIA = 68)] = "SLOVAKIA"),
            (e[(e.SLOVENIA = 69)] = "SLOVENIA"),
            (e[(e.SOUTH_AFRICA = 70)] = "SOUTH_AFRICA"),
            (e[(e.SPAIN = 71)] = "SPAIN"),
            (e[(e.SWEDEN = 72)] = "SWEDEN"),
            (e[(e.SWITZERLAND = 73)] = "SWITZERLAND"),
            (e[(e.TAIWAN = 74)] = "TAIWAN"),
            (e[(e.THAILAND = 75)] = "THAILAND"),
            (e[(e.TUNISIA = 76)] = "TUNISIA"),
            (e[(e.TURKEY = 77)] = "TURKEY"),
            (e[(e.UAE = 78)] = "UAE"),
            (e[(e.UGANDA = 79)] = "UGANDA"),
            (e[(e.UK = 80)] = "UK"),
            (e[(e.UKRAINE = 81)] = "UKRAINE"),
            (e[(e.USA = 82)] = "USA"),
            (e[(e.VIETNAM = 83)] = "VIETNAM"),
            (e[(e.BRAZIL = 84)] = "BRAZIL"),
            (e[(e.NORWAY = 85)] = "NORWAY"),
            (e[(e.OMAN = 86)] = "OMAN"),
            (e[(e.ECUADOR = 87)] = "ECUADOR"),
            (e[(e.EL_SALVADOR = 88)] = "EL_SALVADOR"),
            (e[(e.SRI_LANKA = 89)] = "SRI_LANKA"),
            (e[(e.PERU = 90)] = "PERU"),
            (e[(e.URUGUAY = 91)] = "URUGUAY"),
            (e[(e.BAHAMAS = 92)] = "BAHAMAS"),
            (e[(e.BERMUDA = 93)] = "BERMUDA"),
            (e[(e.BOLIVIA = 94)] = "BOLIVIA"),
            (e[(e.CHINA = 95)] = "CHINA"),
            (e[(e.EUROPEAN_UNION = 96)] = "EUROPEAN_UNION"),
            (e[(e.HAITI = 97)] = "HAITI"),
            (e[(e.HONDURAS = 98)] = "HONDURAS"),
            (e[(e.ICELAND = 99)] = "ICELAND"),
            (e[(e.JAPAN = 100)] = "JAPAN"),
            (e[(e.LUXEMBOURG = 101)] = "LUXEMBOURG"),
            (e[(e.MONTENEGRO = 102)] = "MONTENEGRO"),
            (e[(e.NICARAGUA = 103)] = "NICARAGUA"),
            (e[(e.SOUTH_KOREA = 104)] = "SOUTH_KOREA"),
            (e[(e.VENEZUELA = 105)] = "VENEZUELA"),
            (e[(e.AFGHANISTAN = 106)] = "AFGHANISTAN"),
            (e[(e.ALAND_ISLANDS = 107)] = "ALAND_ISLANDS"),
            (e[(e.AMERICAN_SAMOA = 108)] = "AMERICAN_SAMOA"),
            (e[(e.ANDORRA = 109)] = "ANDORRA"),
            (e[(e.ANGOLA = 110)] = "ANGOLA"),
            (e[(e.ANGUILLA = 111)] = "ANGUILLA"),
            (e[(e.ANTARCTICA = 112)] = "ANTARCTICA"),
            (e[(e.ANTIGUA_AND_BARBUDA = 113)] = "ANTIGUA_AND_BARBUDA"),
            (e[(e.ARMENIA = 114)] = "ARMENIA"),
            (e[(e.ARUBA = 115)] = "ARUBA"),
            (e[(e.BAILIWICK_OF_GUERNSEY = 116)] = "BAILIWICK_OF_GUERNSEY"),
            (e[(e.BAILIWICK_OF_JERSEY = 117)] = "BAILIWICK_OF_JERSEY"),
            (e[(e.BARBADOS = 118)] = "BARBADOS"),
            (e[(e.BELARUS = 119)] = "BELARUS"),
            (e[(e.BELIZE = 120)] = "BELIZE"),
            (e[(e.BENIN = 121)] = "BENIN"),
            (e[(e.BHUTAN = 122)] = "BHUTAN"),
            (e[(e.BONAIRE_SAINT_EUSTATIUS_AND_SABA = 123)] =
                "BONAIRE_SAINT_EUSTATIUS_AND_SABA"),
            (e[(e.BOTSWANA = 124)] = "BOTSWANA"),
            (e[(e.BOUVET_ISLAND = 125)] = "BOUVET_ISLAND"),
            (e[(e.BRITISH_INDIAN_OCEAN_TERRITORY = 126)] =
                "BRITISH_INDIAN_OCEAN_TERRITORY"),
            (e[(e.BURKINA_FASO = 127)] = "BURKINA_FASO"),
            (e[(e.BURUNDI = 128)] = "BURUNDI"),
            (e[(e.CAMEROON = 129)] = "CAMEROON"),
            (e[(e.CAPE_VERDE = 130)] = "CAPE_VERDE"),
            (e[(e.CARIBBEAN_NETHERLANDS = 131)] = "CARIBBEAN_NETHERLANDS"),
            (e[(e.CAYMAN_ISLANDS = 132)] = "CAYMAN_ISLANDS"),
            (e[(e.CENTRAL_AFRICAN_REPUBLIC = 133)] =
                "CENTRAL_AFRICAN_REPUBLIC"),
            (e[(e.CHAD = 134)] = "CHAD"),
            (e[(e.CHRISTMAS_ISLAND = 135)] = "CHRISTMAS_ISLAND"),
            (e[(e.COCOS_ISLANDS = 136)] = "COCOS_ISLANDS"),
            (e[(e.COMOROS = 137)] = "COMOROS"),
            (e[(e.CONGO = 138)] = "CONGO"),
            (e[(e.COOK_ISLANDS = 139)] = "COOK_ISLANDS"),
            (e[(e.CUBA = 140)] = "CUBA"),
            (e[(e.CURACAO = 141)] = "CURACAO"),
            (e[(e.DEMOCRATIC_REPUBLIC_OF_THE_CONGO = 142)] =
                "DEMOCRATIC_REPUBLIC_OF_THE_CONGO"),
            (e[(e.DJIBOUTI = 143)] = "DJIBOUTI"),
            (e[(e.DOMINICA = 144)] = "DOMINICA"),
            (e[(e.EAST_TIMOR = 145)] = "EAST_TIMOR"),
            (e[(e.EQUATORIAL_GUINEA = 146)] = "EQUATORIAL_GUINEA"),
            (e[(e.ERITREA = 147)] = "ERITREA"),
            (e[(e.ETHIOPIA = 148)] = "ETHIOPIA"),
            (e[(e.FALKLAND_ISLANDS = 149)] = "FALKLAND_ISLANDS"),
            (e[(e.FAROE_ISLANDS = 150)] = "FAROE_ISLANDS"),
            (e[(e.FEDERATED_STATES_OF_MICRONESIA = 151)] =
                "FEDERATED_STATES_OF_MICRONESIA"),
            (e[(e.FIJI = 152)] = "FIJI"),
            (e[(e.FRENCH_GUIANA = 153)] = "FRENCH_GUIANA"),
            (e[(e.FRENCH_POLYNESIA = 154)] = "FRENCH_POLYNESIA"),
            (e[(e.FRENCH_SOUTHERN_TERRITORIES = 155)] =
                "FRENCH_SOUTHERN_TERRITORIES"),
            (e[(e.GABON = 156)] = "GABON"),
            (e[(e.GAMBIA = 157)] = "GAMBIA"),
            (e[(e.GIBRALTAR = 158)] = "GIBRALTAR"),
            (e[(e.GREENLAND = 159)] = "GREENLAND"),
            (e[(e.GRENADA = 160)] = "GRENADA"),
            (e[(e.GUADELOUPE = 161)] = "GUADELOUPE"),
            (e[(e.GUAM = 162)] = "GUAM"),
            (e[(e.GUINEA = 163)] = "GUINEA"),
            (e[(e.GUINEA_BISSAU = 164)] = "GUINEA_BISSAU"),
            (e[(e.GUYANA = 165)] = "GUYANA"),
            (e[(e.HEARD_ISLAND_AND_MCDONALD_ISLANDS = 166)] =
                "HEARD_ISLAND_AND_MCDONALD_ISLANDS"),
            (e[(e.IRAN = 167)] = "IRAN"),
            (e[(e.IRAQ = 168)] = "IRAQ"),
            (e[(e.ISLE_OF_MAN = 169)] = "ISLE_OF_MAN"),
            (e[(e.IVORY_COAST = 170)] = "IVORY_COAST"),
            (e[(e.JAMAICA = 171)] = "JAMAICA"),
            (e[(e.KIRIBATI = 172)] = "KIRIBATI"),
            (e[(e.KYRGYZSTAN = 173)] = "KYRGYZSTAN"),
            (e[(e.LAOS = 174)] = "LAOS"),
            (e[(e.LEBANON = 175)] = "LEBANON"),
            (e[(e.LESOTHO = 176)] = "LESOTHO"),
            (e[(e.LIBERIA = 177)] = "LIBERIA"),
            (e[(e.LIBYA = 178)] = "LIBYA"),
            (e[(e.LIECHTENSTEIN = 179)] = "LIECHTENSTEIN"),
            (e[(e.MACAU = 180)] = "MACAU"),
            (e[(e.MADAGASCAR = 181)] = "MADAGASCAR"),
            (e[(e.MALAWI = 182)] = "MALAWI"),
            (e[(e.MALI = 183)] = "MALI"),
            (e[(e.MARSHALL_ISLANDS = 184)] = "MARSHALL_ISLANDS"),
            (e[(e.MARTINIQUE = 185)] = "MARTINIQUE"),
            (e[(e.MAURITANIA = 186)] = "MAURITANIA"),
            (e[(e.MAYOTTE = 187)] = "MAYOTTE"),
            (e[(e.MOLDOVA = 188)] = "MOLDOVA"),
            (e[(e.MONACO = 189)] = "MONACO"),
            (e[(e.MONGOLIA = 190)] = "MONGOLIA"),
            (e[(e.MONTSERRAT = 191)] = "MONTSERRAT"),
            (e[(e.MOZAMBIQUE = 192)] = "MOZAMBIQUE"),
            (e[(e.MYANMAR = 193)] = "MYANMAR"),
            (e[(e.NAMIBIA = 194)] = "NAMIBIA"),
            (e[(e.NAURU = 195)] = "NAURU"),
            (e[(e.NEPAL = 196)] = "NEPAL"),
            (e[(e.NEW_CALEDONIA = 197)] = "NEW_CALEDONIA"),
            (e[(e.NIGER = 198)] = "NIGER"),
            (e[(e.NIUE = 199)] = "NIUE"),
            (e[(e.NORFOLK_ISLAND = 200)] = "NORFOLK_ISLAND"),
            (e[(e.NORTHERN_CYPRUS = 201)] = "NORTHERN_CYPRUS"),
            (e[(e.NORTHERN_MARIANA_ISLANDS = 202)] =
                "NORTHERN_MARIANA_ISLANDS"),
            (e[(e.NORTH_KOREA = 203)] = "NORTH_KOREA"),
            (e[(e.NORTH_MACEDONIA = 204)] = "NORTH_MACEDONIA"),
            (e[(e.PALAU = 205)] = "PALAU"),
            (e[(e.PALESTINE = 206)] = "PALESTINE"),
            (e[(e.PAPUA_NEW_GUINEA = 207)] = "PAPUA_NEW_GUINEA"),
            (e[(e.PITCAIRN = 208)] = "PITCAIRN"),
            (e[(e.REUNION = 209)] = "REUNION"),
            (e[(e.RWANDA = 210)] = "RWANDA"),
            (e[(e.SAINT_BARTHELEMY = 211)] = "SAINT_BARTHELEMY"),
            (e[(e.SAINT_HELENA_ASCENSION_AND_TRISTIAN_DA_CUNHA = 212)] =
                "SAINT_HELENA_ASCENSION_AND_TRISTIAN_DA_CUNHA"),
            (e[(e.SAINT_KITTS_AND_NEVIS = 213)] = "SAINT_KITTS_AND_NEVIS"),
            (e[(e.SAINT_LUCIA = 214)] = "SAINT_LUCIA"),
            (e[(e.SAINT_MARTIN = 215)] = "SAINT_MARTIN"),
            (e[(e.SAINT_PIERRE_AND_MIQUELON = 216)] =
                "SAINT_PIERRE_AND_MIQUELON"),
            (e[(e.SAINT_VINCENT_AND_THE_GRENADINES = 217)] =
                "SAINT_VINCENT_AND_THE_GRENADINES"),
            (e[(e.SAMOA = 218)] = "SAMOA"),
            (e[(e.SAN_MARINO = 219)] = "SAN_MARINO"),
            (e[(e.SAO_TOME_AND_PRINCIPE = 220)] = "SAO_TOME_AND_PRINCIPE"),
            (e[(e.SENEGAL = 221)] = "SENEGAL"),
            (e[(e.SEYCHELLES = 222)] = "SEYCHELLES"),
            (e[(e.SIERRA_LEONE = 223)] = "SIERRA_LEONE"),
            (e[(e.SINT_MAARTEN = 224)] = "SINT_MAARTEN"),
            (e[(e.SOLOMON_ISLANDS = 225)] = "SOLOMON_ISLANDS"),
            (e[(e.SOMALIA = 226)] = "SOMALIA"),
            (e[(e.SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS = 227)] =
                "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"),
            (e[(e.SOUTH_SUDAN = 228)] = "SOUTH_SUDAN"),
            (e[(e.SUDAN = 229)] = "SUDAN"),
            (e[(e.SURINAME = 230)] = "SURINAME"),
            (e[(e.SVALBARD_AND_JAN_MAYEN = 231)] = "SVALBARD_AND_JAN_MAYEN"),
            (e[(e.ESWATINI = 232)] = "ESWATINI"),
            (e[(e.SYRIA = 233)] = "SYRIA"),
            (e[(e.TAJIKISTAN = 234)] = "TAJIKISTAN"),
            (e[(e.TANZANIA = 235)] = "TANZANIA"),
            (e[(e.TOGO = 236)] = "TOGO"),
            (e[(e.TOKELAU = 237)] = "TOKELAU"),
            (e[(e.TONGA = 238)] = "TONGA"),
            (e[(e.TRINIDAD_AND_TOBAGO = 239)] = "TRINIDAD_AND_TOBAGO"),
            (e[(e.TURKMENISTAN = 240)] = "TURKMENISTAN"),
            (e[(e.TURKS_AND_CAICOS_ISLANDS = 241)] =
                "TURKS_AND_CAICOS_ISLANDS"),
            (e[(e.TUVALU = 242)] = "TUVALU"),
            (e[(e.UNITED_STATES_MINOR_OUTLYING_ISLANDS = 243)] =
                "UNITED_STATES_MINOR_OUTLYING_ISLANDS"),
            (e[(e.UZBEKISTAN = 244)] = "UZBEKISTAN"),
            (e[(e.VANUATU = 245)] = "VANUATU"),
            (e[(e.VATICAN_CITY = 246)] = "VATICAN_CITY"),
            (e[(e.VIRGIN_ISLANDS_BRITISH = 247)] = "VIRGIN_ISLANDS_BRITISH"),
            (e[(e.VIRGIN_ISLANDS_US = 248)] = "VIRGIN_ISLANDS_US"),
            (e[(e.WALLIS_AND_FUTUNA = 249)] = "WALLIS_AND_FUTUNA"),
            (e[(e.WESTERN_SAHARA = 250)] = "WESTERN_SAHARA"),
            (e[(e.YEMEN = 251)] = "YEMEN"),
            (e[(e.YUGOSLAVIA = 252)] = "YUGOSLAVIA"),
            (e[(e.ZAMBIA = 253)] = "ZAMBIA"),
            (e[(e.ZIMBABWE = 254)] = "ZIMBABWE"),
            (e[(e.COUNT = 255)] = "COUNT");
    })(Oe || (Oe = {})),
    (function (e) {
        (e[(e.NONE = 0)] = "NONE"),
            (e[(e.ALABAMA = 1)] = "ALABAMA"),
            (e[(e.ALASKA = 2)] = "ALASKA"),
            (e[(e.ALBERTA = 3)] = "ALBERTA"),
            (e[(e.ARIZONA = 4)] = "ARIZONA"),
            (e[(e.ARKANSAS = 5)] = "ARKANSAS"),
            (e[(e.AUSTRALIAN_CAPITAL_TERRITORY = 6)] =
                "AUSTRALIAN_CAPITAL_TERRITORY"),
            (e[(e.BRITISH_COLUMBIA = 7)] = "BRITISH_COLUMBIA"),
            (e[(e.CALIFORNIA = 8)] = "CALIFORNIA"),
            (e[(e.COLORADO = 9)] = "COLORADO"),
            (e[(e.CONNECTICUT = 10)] = "CONNECTICUT"),
            (e[(e.DELAWARE = 11)] = "DELAWARE"),
            (e[(e.DISTRICT_OF_COLUMBIA = 12)] = "DISTRICT_OF_COLUMBIA"),
            (e[(e.FLORIDA = 13)] = "FLORIDA"),
            (e[(e.GEORGIA = 14)] = "GEORGIA"),
            (e[(e.HAWAII = 15)] = "HAWAII"),
            (e[(e.IDAHO = 16)] = "IDAHO"),
            (e[(e.ILLINOIS = 17)] = "ILLINOIS"),
            (e[(e.INDIANA = 18)] = "INDIANA"),
            (e[(e.IOWA = 19)] = "IOWA"),
            (e[(e.KANSAS = 20)] = "KANSAS"),
            (e[(e.KENTUCKY = 21)] = "KENTUCKY"),
            (e[(e.LOUISIANA = 22)] = "LOUISIANA"),
            (e[(e.MAINE = 23)] = "MAINE"),
            (e[(e.MANITOBA = 24)] = "MANITOBA"),
            (e[(e.MARYLAND = 25)] = "MARYLAND"),
            (e[(e.MASSACHUSETTS = 26)] = "MASSACHUSETTS"),
            (e[(e.MICHIGAN = 27)] = "MICHIGAN"),
            (e[(e.MINNESOTA = 28)] = "MINNESOTA"),
            (e[(e.MISSISSIPPI = 29)] = "MISSISSIPPI"),
            (e[(e.MISSOURI = 30)] = "MISSOURI"),
            (e[(e.MONTANA = 31)] = "MONTANA"),
            (e[(e.NEBRASKA = 32)] = "NEBRASKA"),
            (e[(e.NEVADA = 33)] = "NEVADA"),
            (e[(e.NEW_BRUNSWICK = 34)] = "NEW_BRUNSWICK"),
            (e[(e.NEW_HAMPSHIRE = 35)] = "NEW_HAMPSHIRE"),
            (e[(e.NEW_JERSEY = 36)] = "NEW_JERSEY"),
            (e[(e.NEW_MEXICO = 37)] = "NEW_MEXICO"),
            (e[(e.NEW_SOUTH_WALES = 38)] = "NEW_SOUTH_WALES"),
            (e[(e.NEW_YORK = 39)] = "NEW_YORK"),
            (e[(e.NORTHERN_TERRITORY = 40)] = "NORTHERN_TERRITORY"),
            (e[(e.NORTH_CAROLINA = 41)] = "NORTH_CAROLINA"),
            (e[(e.NORTH_DAKOTA = 42)] = "NORTH_DAKOTA"),
            (e[(e.NOVA_SCOTIA = 43)] = "NOVA_SCOTIA"),
            (e[(e.OHIO = 44)] = "OHIO"),
            (e[(e.OKLAHOMA = 45)] = "OKLAHOMA"),
            (e[(e.ONTARIO = 46)] = "ONTARIO"),
            (e[(e.OREGON = 47)] = "OREGON"),
            (e[(e.PENNSYLVANIA = 48)] = "PENNSYLVANIA"),
            (e[(e.QUEBEC = 49)] = "QUEBEC"),
            (e[(e.QUEENSLAND = 50)] = "QUEENSLAND"),
            (e[(e.RHODE_ISLAND = 51)] = "RHODE_ISLAND"),
            (e[(e.SASKATCHEWAN = 52)] = "SASKATCHEWAN"),
            (e[(e.SOUTH_AUSTRALIA = 53)] = "SOUTH_AUSTRALIA"),
            (e[(e.SOUTH_CAROLINA = 54)] = "SOUTH_CAROLINA"),
            (e[(e.SOUTH_DAKOTA = 55)] = "SOUTH_DAKOTA"),
            (e[(e.TASMANIA = 56)] = "TASMANIA"),
            (e[(e.TENNESSEE = 57)] = "TENNESSEE"),
            (e[(e.TEXAS = 58)] = "TEXAS"),
            (e[(e.UTAH = 59)] = "UTAH"),
            (e[(e.VERMONT = 60)] = "VERMONT"),
            (e[(e.VICTORIA = 61)] = "VICTORIA"),
            (e[(e.VIRGINIA = 62)] = "VIRGINIA"),
            (e[(e.WASHINGTON = 63)] = "WASHINGTON"),
            (e[(e.WESTERN_AUSTRALIA = 64)] = "WESTERN_AUSTRALIA"),
            (e[(e.WEST_VIRGINIA = 65)] = "WEST_VIRGINIA"),
            (e[(e.WISCONSIN = 66)] = "WISCONSIN"),
            (e[(e.WYOMING = 67)] = "WYOMING"),
            (e[(e.YUKON = 68)] = "YUKON"),
            (e[(e.CIUDAD_DE_MEXICO = 69)] = "CIUDAD_DE_MEXICO"),
            (e[(e.JALISCO = 70)] = "JALISCO"),
            (e[(e.NEWFOUNDLAND_AND_LABRADOR = 71)] =
                "NEWFOUNDLAND_AND_LABRADOR"),
            (e[(e.NUEVO_LEON = 72)] = "NUEVO_LEON"),
            (e[(e.BAJA_CALIFORNIA = 73)] = "BAJA_CALIFORNIA"),
            (e[(e.CHIHUAHUA = 74)] = "CHIHUAHUA"),
            (e[(e.GUANAJUATO = 75)] = "GUANAJUATO"),
            (e[(e.GUERRERO = 76)] = "GUERRERO"),
            (e[(e.MEXICO = 77)] = "MEXICO"),
            (e[(e.MICHOACAN = 78)] = "MICHOACAN"),
            (e[(e.NEW_YORK_CITY = 79)] = "NEW_YORK_CITY"),
            (e[(e.TAMAULIPAS = 80)] = "TAMAULIPAS"),
            (e[(e.VERACRUZ = 81)] = "VERACRUZ"),
            (e[(e.CHIAPAS = 82)] = "CHIAPAS"),
            (e[(e.COAHUILA = 83)] = "COAHUILA"),
            (e[(e.DURANGO = 84)] = "DURANGO"),
            (e[(e.GUERRERO_COCULA = 85)] = "GUERRERO_COCULA"),
            (e[(e.GUERRERO_JUCHITAN = 86)] = "GUERRERO_JUCHITAN"),
            (e[(e.GUERRERO_TEPECOACUILCO = 87)] = "GUERRERO_TEPECOACUILCO"),
            (e[(e.GUERRERO_TLACOAPA = 88)] = "GUERRERO_TLACOAPA"),
            (e[(e.GUJARAT = 89)] = "GUJARAT"),
            (e[(e.HIDALGO = 90)] = "HIDALGO"),
            (e[(e.KARNATAKA = 91)] = "KARNATAKA"),
            (e[(e.KERALA = 92)] = "KERALA"),
            (e[(e.KHYBER_PAKHTUNKHWA = 93)] = "KHYBER_PAKHTUNKHWA"),
            (e[(e.MADHYA_PRADESH = 94)] = "MADHYA_PRADESH"),
            (e[(e.MAHARASHTRA = 95)] = "MAHARASHTRA"),
            (e[(e.MORELOS = 96)] = "MORELOS"),
            (e[(e.NAYARIT = 97)] = "NAYARIT"),
            (e[(e.OAXACA = 98)] = "OAXACA"),
            (e[(e.PUEBLA = 99)] = "PUEBLA"),
            (e[(e.PUNJAB = 100)] = "PUNJAB"),
            (e[(e.QUERETARO = 101)] = "QUERETARO"),
            (e[(e.SAN_LUIS_POTOSI = 102)] = "SAN_LUIS_POTOSI"),
            (e[(e.SINALOA = 103)] = "SINALOA"),
            (e[(e.SONORA = 104)] = "SONORA"),
            (e[(e.TABASCO = 105)] = "TABASCO"),
            (e[(e.TAMIL_NADU = 106)] = "TAMIL_NADU"),
            (e[(e.YUCATAN = 107)] = "YUCATAN"),
            (e[(e.ZACATECAS = 108)] = "ZACATECAS"),
            (e[(e.AGUASCALIENTES = 109)] = "AGUASCALIENTES"),
            (e[(e.BAJA_CALIFORNIA_SUR = 110)] = "BAJA_CALIFORNIA_SUR"),
            (e[(e.CAMPECHE = 111)] = "CAMPECHE"),
            (e[(e.COLIMA = 112)] = "COLIMA"),
            (e[(e.QUINTANA_ROO_BENITO_JUAREZ = 113)] =
                "QUINTANA_ROO_BENITO_JUAREZ"),
            (e[(e.UINTANA_ROO = 114)] = "UINTANA_ROO"),
            (e[(e.QUINTANA_ROO_SOLIDARIDAD = 115)] =
                "QUINTANA_ROO_SOLIDARIDAD"),
            (e[(e.TLAXCALA = 116)] = "TLAXCALA"),
            (e[(e.COUNT = 117)] = "COUNT");
    })(Ce || (Ce = {})),
    (function (e) {
        (e[(e.NONE = 0)] = "NONE"),
            (e[(e.CONSULAR_ID = 1)] = "CONSULAR_ID"),
            (e[(e.DL = 2)] = "DL"),
            (e[(e.DL_PUBLIC_SERVICES_CARD = 3)] = "DL_PUBLIC_SERVICES_CARD"),
            (e[(e.EMPLOYMENT_PASS = 4)] = "EMPLOYMENT_PASS"),
            (e[(e.FIN_CARD = 5)] = "FIN_CARD"),
            (e[(e.ID = 6)] = "ID"),
            (e[(e.MULTIPURPOSE_ID = 7)] = "MULTIPURPOSE_ID"),
            (e[(e.MyKad = 8)] = "MyKad"),
            (e[(e.MyKid = 9)] = "MyKid"),
            (e[(e.MyPR = 10)] = "MyPR"),
            (e[(e.MyTentera = 11)] = "MyTentera"),
            (e[(e.PAN_CARD = 12)] = "PAN_CARD"),
            (e[(e.PROFESSIONAL_ID = 13)] = "PROFESSIONAL_ID"),
            (e[(e.PUBLIC_SERVICES_CARD = 14)] = "PUBLIC_SERVICES_CARD"),
            (e[(e.RESIDENCE_PERMIT = 15)] = "RESIDENCE_PERMIT"),
            (e[(e.RESIDENT_ID = 16)] = "RESIDENT_ID"),
            (e[(e.TEMPORARY_RESIDENCE_PERMIT = 17)] =
                "TEMPORARY_RESIDENCE_PERMIT"),
            (e[(e.VOTER_ID = 18)] = "VOTER_ID"),
            (e[(e.WORK_PERMIT = 19)] = "WORK_PERMIT"),
            (e[(e.iKAD = 20)] = "iKAD"),
            (e[(e.MILITARY_ID = 21)] = "MILITARY_ID"),
            (e[(e.MyKAS = 22)] = "MyKAS"),
            (e[(e.SOCIAL_SECURITY_CARD = 23)] = "SOCIAL_SECURITY_CARD"),
            (e[(e.HEALTH_INSURANCE_CARD = 24)] = "HEALTH_INSURANCE_CARD"),
            (e[(e.PASSPORT = 25)] = "PASSPORT"),
            (e[(e.S_PASS = 26)] = "S_PASS"),
            (e[(e.ADDRESS_CARD = 27)] = "ADDRESS_CARD"),
            (e[(e.ALIEN_ID = 28)] = "ALIEN_ID"),
            (e[(e.ALIEN_PASSPORT = 29)] = "ALIEN_PASSPORT"),
            (e[(e.GREEN_CARD = 30)] = "GREEN_CARD"),
            (e[(e.MINORS_ID = 31)] = "MINORS_ID"),
            (e[(e.POSTAL_ID = 32)] = "POSTAL_ID"),
            (e[(e.PROFESSIONAL_DL = 33)] = "PROFESSIONAL_DL"),
            (e[(e.TAX_ID = 34)] = "TAX_ID"),
            (e[(e.WEAPON_PERMIT = 35)] = "WEAPON_PERMIT"),
            (e[(e.VISA = 36)] = "VISA"),
            (e[(e.BORDER_CROSSING_CARD = 37)] = "BORDER_CROSSING_CARD"),
            (e[(e.DRIVER_CARD = 38)] = "DRIVER_CARD"),
            (e[(e.GLOBAL_ENTRY_CARD = 39)] = "GLOBAL_ENTRY_CARD"),
            (e[(e.MyPolis = 40)] = "MyPolis"),
            (e[(e.NEXUS_CARD = 41)] = "NEXUS_CARD"),
            (e[(e.PASSPORT_CARD = 42)] = "PASSPORT_CARD"),
            (e[(e.PROOF_OF_AGE_CARD = 43)] = "PROOF_OF_AGE_CARD"),
            (e[(e.REFUGEE_ID = 44)] = "REFUGEE_ID"),
            (e[(e.TRIBAL_ID = 45)] = "TRIBAL_ID"),
            (e[(e.VETERAN_ID = 46)] = "VETERAN_ID"),
            (e[(e.CITIZENSHIP_CERTIFICATE = 47)] = "CITIZENSHIP_CERTIFICATE"),
            (e[(e.MY_NUMBER_CARD = 48)] = "MY_NUMBER_CARD"),
            (e[(e.COUNT = 49)] = "COUNT");
    })(De || (De = {})),
    (function (e) {
        (e[(e.NotAvailable = 0)] = "NotAvailable"),
            (e[(e.BlackAndWhite = 1)] = "BlackAndWhite"),
            (e[(e.Color = 2)] = "Color");
    })(ue || (ue = {})),
    (function (e) {
        (e[(e.NotAvailable = 0)] = "NotAvailable"),
            (e[(e.NotDetected = 1)] = "NotDetected"),
            (e[(e.Detected = 2)] = "Detected");
    })(Te || (Te = {})),
    (function (e) {
        (e[(e.Success = 0)] = "Success"),
            (e[(e.DetectionFailed = 1)] = "DetectionFailed"),
            (e[(e.ImagePreprocessingFailed = 2)] = "ImagePreprocessingFailed"),
            (e[(e.StabilityTestFailed = 3)] = "StabilityTestFailed"),
            (e[(e.ScanningWrongSide = 4)] = "ScanningWrongSide"),
            (e[(e.FieldIdentificationFailed = 5)] =
                "FieldIdentificationFailed"),
            (e[(e.MandatoryFieldMissing = 6)] = "MandatoryFieldMissing"),
            (e[(e.InvalidCharactersFound = 7)] = "InvalidCharactersFound"),
            (e[(e.ImageReturnFailed = 8)] = "ImageReturnFailed"),
            (e[(e.BarcodeRecognitionFailed = 9)] = "BarcodeRecognitionFailed"),
            (e[(e.MrzParsingFailed = 10)] = "MrzParsingFailed"),
            (e[(e.ClassFiltered = 11)] = "ClassFiltered"),
            (e[(e.UnsupportedClass = 12)] = "UnsupportedClass"),
            (e[(e.UnsupportedByLicense = 13)] = "UnsupportedByLicense"),
            (e[(e.AwaitingOtherSide = 14)] = "AwaitingOtherSide"),
            (e[(e.Count = 15)] = "Count");
    })(me || (me = {})),
    (function (e) {
        (e[(e.None = 0)] = "None"),
            (e[(e.MrzId = 1)] = "MrzId"),
            (e[(e.MrzVisa = 2)] = "MrzVisa"),
            (e[(e.MrzPassport = 3)] = "MrzPassport"),
            (e[(e.PhotoId = 4)] = "PhotoId"),
            (e[(e.FullRecognition = 5)] = "FullRecognition"),
            (e[(e.BarcodeId = 6)] = "BarcodeId"),
            (e[(e.Count = 7)] = "Count");
    })(Le || (Le = {}));
class Fe {
    constructor() {
        (this.allowBlurFilter = !0),
            (this.allowUnparsedMrzResults = !1),
            (this.allowUnverifiedMrzResults = !0),
            (this.recognitionModeFilter = new he()),
            (this.saveCameraFrames = !1),
            (this.scanCroppedDocumentImage = !1),
            (this.validateResultCharacters = !0),
            (this.anonymizationMode = le.FullResult),
            (this.barcodeScanningStartedCallback = null),
            (this.classifierCallback = null),
            (this.allowedDocumentClasses = null),
            (this.paddingEdge = 0),
            (this.returnFullDocumentImage = !1),
            (this.returnEncodedFullDocumentImage = !1),
            (this._fullDocumentImageDpi = 250),
            (this.fullDocumentImageExtensionFactors = new Me()),
            (this.returnFaceImage = !1),
            (this.returnEncodedFaceImage = !1),
            (this._faceImageDpi = 250),
            (this.returnSignatureImage = !1),
            (this.returnEncodedSignatureImage = !1),
            (this._signatureImageDpi = 250);
    }
    get fullDocumentImageDpi() {
        return this._fullDocumentImageDpi;
    }
    set fullDocumentImageDpi(e) {
        ge(e), (this._fullDocumentImageDpi = e);
    }
    get faceImageDpi() {
        return this._faceImageDpi;
    }
    set faceImageDpi(e) {
        ge(e), (this._faceImageDpi = e);
    }
    get signatureImageDpi() {
        return this._signatureImageDpi;
    }
    set signatureImageDpi(e) {
        ge(e), (this._signatureImageDpi = e);
    }
}
function Pe(t) {
    return e(this, void 0, void 0, function* () {
        return t.mbWasmModule.newRecognizer("BlinkIdRecognizer");
    });
}
class Ge extends Fe {
    constructor() {
        super(...arguments),
            (this.allowUncertainFrontSideScan = !1),
            (this.maxAllowedMismatchesPerField = 0),
            (this.skipUnsupportedBack = !1);
    }
}
function Ke(t) {
    return e(this, void 0, void 0, function* () {
        return t.mbWasmModule.newRecognizer("BlinkIdCombinedRecognizer");
    });
}
class pe {}
function fe(t) {
    return e(this, void 0, void 0, function* () {
        return t.mbWasmModule.newRecognizer("IdBarcodeRecognizer");
    });
}
!(function (e) {
    (e[(e.None = 0)] = "None"),
        (e[(e.AAMVACompliant = 1)] = "AAMVACompliant"),
        (e[(e.ArgentinaID = 2)] = "ArgentinaID"),
        (e[(e.ArgentinaAlienID = 3)] = "ArgentinaAlienID"),
        (e[(e.ArgentinaDL = 4)] = "ArgentinaDL"),
        (e[(e.ColombiaID = 5)] = "ColombiaID"),
        (e[(e.ColombiaDL = 6)] = "ColombiaDL"),
        (e[(e.NigeriaVoterID = 7)] = "NigeriaVoterID"),
        (e[(e.NigeriaDL = 8)] = "NigeriaDL"),
        (e[(e.PanamaID = 9)] = "PanamaID"),
        (e[(e.SouthAfricaID = 10)] = "SouthAfricaID");
})(Ue || (Ue = {}));
export {
    le as AnonymizationMode,
    Se as BarcodeElementKey,
    de as BarcodeFormat,
    Ge as BlinkIdCombinedRecognizerSettings,
    Fe as BlinkIdRecognizerSettings,
    Q as CapturedFrame,
    Oe as Country,
    ie as DetectionStatus,
    ue as DocumentImageColorStatus,
    De as DocumentType,
    F as ErrorCodes,
    P as ErrorMessages,
    Me as ExtensionFactors,
    Ue as IdBarcodeDocumentType,
    pe as IdBarcodeRecognizerSettings,
    Te as ImageAnalysisDetectionStatus,
    Z as ImageOrientation,
    $ as LicenseErrorType,
    q as LicenseTokenState,
    ne as NotSupportedReason,
    W as PreferredCameraType,
    me as ProcessingStatus,
    Le as RecognitionMode,
    he as RecognitionModeFilter,
    z as RecognizerResultState,
    Ce as Region,
    g as SDKError,
    V as SelectedCamera,
    te as ServerPermissionSubmitResultStatus,
    se as VideoRecognitionMode,
    re as VideoRecognizer,
    Ae as WasmSDKLoadSettings,
    o as WasmType,
    B as bindCameraToVideoFeed,
    X as captureFrame,
    Y as clearVideoFeed,
    Ke as createBlinkIdCombinedRecognizer,
    Pe as createBlinkIdRecognizer,
    fe as createIdBarcodeRecognizer,
    ce as createRecognizerRunner,
    _e as createSuccessFrameGrabberRecognizer,
    Ee as detectWasmType,
    p as frameCaptureErrors,
    y as getCameraDevices,
    x as isBrowserSupported,
    J as isInAppBrowser,
    f as licenseErrors,
    Ne as loadWasmModule,
    v as localSdkErrors,
    ae as obtainNewServerPermission,
    K as sdkErrors,
    k as selectCamera,
    oe as unlockWasmSDK,
    ge as validateDpi,
    G as videoRecognizerErrors,
    Ie as wasmFolder,
    b as workerErrors,
};
