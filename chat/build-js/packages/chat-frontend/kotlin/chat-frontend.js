(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-client-core-js-legacy', 'kotlinx-coroutines-core', 'ktor-ktor-http-js-legacy', 'ktor-ktor-websockets-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-core-js-legacy'), require('kotlinx-coroutines-core'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-websockets-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'chat-frontend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'chat-frontend'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'chat-frontend'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'chat-frontend'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'chat-frontend'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'chat-frontend'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'chat-frontend'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'chat-frontend'.");
    }
    if (typeof this['ktor-ktor-websockets-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'chat-frontend'. Its dependency 'ktor-ktor-websockets-js-legacy' was not found. Please, check whether 'ktor-ktor-websockets-js-legacy' is loaded prior to 'chat-frontend'.");
    }
    root['chat-frontend'] = factory(typeof this['chat-frontend'] === 'undefined' ? {} : this['chat-frontend'], kotlin, this['ktor-ktor-client-core-js-legacy'], this['kotlinx-coroutines-core'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-websockets-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_client_core_js_legacy, $module$kotlinx_coroutines_core, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_websockets_js_legacy) {
  'use strict';
  var WebSockets = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.websocket.WebSockets;
  var Unit = Kotlin.kotlin.Unit;
  var HttpClient = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.HttpClient_f0veat$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var getCallableRef = Kotlin.getCallableRef;
  var ClosedReceiveChannelException = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.ClosedReceiveChannelException;
  var toString = Kotlin.toString;
  var WebSocketException = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.websocket.WebSocketException;
  var Exception = Kotlin.kotlin.Exception;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var webSocketSession = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.websocket.webSocketSession_se50ds$;
  var Frame$Frame$Text_init = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Text_init_61zpoe$;
  var Frame$Text = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Text;
  var readText = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.readText_xv7s0w$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function main$lambda($receiver) {
    $receiver.install_dq2y33$(WebSockets.Plugin);
    return Unit;
  }
  function Coroutine$main$lambda(closure$wsClient_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$wsClient = closure$wsClient_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = initConnection(this.local$closure$wsClient, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda_0(closure$wsClient_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda(closure$wsClient_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda$lambda(closure$wsClient_0, closure$commandInput_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$wsClient = closure$wsClient_0;
    this.local$closure$commandInput = closure$commandInput_0;
  }
  Coroutine$main$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = sendMessage(this.local$closure$wsClient, this.local$closure$commandInput, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda(closure$wsClient_0, closure$commandInput_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(closure$wsClient_0, closure$commandInput_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda(closure$wsClient, closure$commandInput) {
    return function (it) {
      launch(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda$lambda(closure$wsClient, closure$commandInput));
      return Unit;
    };
  }
  function Coroutine$main$lambda$lambda$lambda_0(closure$wsClient_0, closure$commandInput_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$wsClient = closure$wsClient_0;
    this.local$closure$commandInput = closure$commandInput_0;
  }
  Coroutine$main$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda$lambda_0;
  Coroutine$main$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = sendMessage(this.local$closure$wsClient, this.local$closure$commandInput, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda_0(closure$wsClient_0, closure$commandInput_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda_0(closure$wsClient_0, closure$commandInput_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda_0(closure$wsClient, closure$commandInput) {
    return function (e) {
      var tmp$;
      if (equals((Kotlin.isType(tmp$ = e, KeyboardEvent) ? tmp$ : throwCCE()).key, 'Enter')) {
        launch(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda$lambda_0(closure$wsClient, closure$commandInput));
      }
      return Unit;
    };
  }
  function main$lambda_1(closure$wsClient) {
    return function (it) {
      var tmp$, tmp$_0;
      var sendButton = Kotlin.isType(tmp$ = document.getElementById('sendButton'), HTMLElement) ? tmp$ : throwCCE();
      var commandInput = Kotlin.isType(tmp$_0 = document.getElementById('commandInput'), HTMLInputElement) ? tmp$_0 : throwCCE();
      sendButton.addEventListener('click', main$lambda$lambda(closure$wsClient, commandInput));
      commandInput.addEventListener('keydown', main$lambda$lambda_0(closure$wsClient, commandInput));
      return Unit;
    };
  }
  function main() {
    var wsClient = new WsClient(HttpClient(main$lambda));
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda_0(wsClient));
    document.addEventListener('DOMContentLoaded', main$lambda_1(wsClient));
  }
  function Coroutine$initConnection$lambda$lambda(closure$wsClient_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$wsClient = closure$wsClient_0;
  }
  Coroutine$initConnection$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initConnection$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initConnection$lambda$lambda.prototype.constructor = Coroutine$initConnection$lambda$lambda;
  Coroutine$initConnection$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = initConnection(this.local$closure$wsClient, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function initConnection$lambda$lambda(closure$wsClient_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$initConnection$lambda$lambda(closure$wsClient_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function initConnection$lambda(closure$wsClient) {
    return function () {
      return launch(coroutines.GlobalScope, void 0, void 0, initConnection$lambda$lambda(closure$wsClient));
    };
  }
  function Coroutine$initConnection(wsClient_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$wsClient = wsClient_0;
  }
  Coroutine$initConnection.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initConnection.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initConnection.prototype.constructor = Coroutine$initConnection;
  Coroutine$initConnection.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$wsClient.connect(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$wsClient.receive_ep0k5p$(getCallableRef('writeMessage', function (p1) {
              return writeMessage(p1), Unit;
            }), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              if (Kotlin.isType(e, ClosedReceiveChannelException)) {
                writeMessage('Disconnected. ' + toString(e.message) + '.');
              } else if (Kotlin.isType(e, WebSocketException)) {
                writeMessage('Unable to connect.');
              }
              window.setTimeout(initConnection$lambda(this.local$wsClient), 5000);
            } else
              throw e;
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:
            this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function initConnection(wsClient_0, continuation_0, suspended) {
    var instance = new Coroutine$initConnection(wsClient_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$sendMessage(client_0, input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$client = client_0;
    this.local$input = input_0;
  }
  Coroutine$sendMessage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendMessage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendMessage.prototype.constructor = Coroutine$sendMessage;
  Coroutine$sendMessage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$input.value.length > 0) {
              this.state_0 = 2;
              this.result_0 = this.local$client.send_61zpoe$(this.local$input.value, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$input.value = '';
            this.state_0 = 3;
            continue;
          case 3:
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function sendMessage(client_0, input_0, continuation_0, suspended) {
    var instance = new Coroutine$sendMessage(client_0, input_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function writeMessage(message) {
    var tmp$, tmp$_0;
    var line = Kotlin.isType(tmp$ = document.createElement('p'), HTMLElement) ? tmp$ : throwCCE();
    line.className = 'message';
    line.textContent = message;
    var messagesBlock = Kotlin.isType(tmp$_0 = document.getElementById('messages'), HTMLElement) ? tmp$_0 : throwCCE();
    messagesBlock.appendChild(line);
    messagesBlock.scrollTop = line.offsetTop;
  }
  function WsClient(client) {
    this.client_0 = client;
    this.session = null;
  }
  function Coroutine$connect($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$connect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$connect.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$connect.prototype.constructor = Coroutine$connect;
  Coroutine$connect.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = webSocketSession(this.$this.client_0, HttpMethod.Companion.Get, window.location.hostname, toInt(window.location.port), '/ws', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.session = this.result_0;
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WsClient.prototype.connect = function (continuation_0, suspended) {
    var instance = new Coroutine$connect(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_61zpoe$($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$send_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_61zpoe$.prototype.constructor = Coroutine$send_61zpoe$;
  Coroutine$send_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.$this.session) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.send_q1ubw4$(Frame$Frame$Text_init(this.local$message), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
            continue;
          case 3:
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WsClient.prototype.send_61zpoe$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$send_61zpoe$(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$receive_ep0k5p$($this, onReceive_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$onReceive = onReceive_0;
  }
  Coroutine$receive_ep0k5p$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receive_ep0k5p$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_ep0k5p$.prototype.constructor = Coroutine$receive_ep0k5p$;
  Coroutine$receive_ep0k5p$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$_0 = (tmp$ = this.$this.session) != null ? tmp$.incoming : null) != null) {
              this.state_0 = 3;
              this.result_0 = tmp$_0.receive(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            var frame = this.result_0;
            if (Kotlin.isType(frame, Frame$Text)) {
              this.local$onReceive(readText(frame));
            }

            this.state_0 = 2;
            continue;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WsClient.prototype.receive_ep0k5p$ = function (onReceive_0, continuation_0, suspended) {
    var instance = new Coroutine$receive_ep0k5p$(this, onReceive_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WsClient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WsClient',
    interfaces: []
  };
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$samples = package$ktor.samples || (package$ktor.samples = {});
  var package$chat = package$samples.chat || (package$samples.chat = {});
  var package$frontend = package$chat.frontend || (package$chat.frontend = {});
  package$frontend.main = main;
  package$frontend.initConnection_j24ohg$ = initConnection;
  package$frontend.sendMessage_ubj3sq$ = sendMessage;
  package$frontend.writeMessage = writeMessage;
  package$frontend.WsClient = WsClient;
  main();
  Kotlin.defineModule('chat-frontend', _);
  return _;
}));

//# sourceMappingURL=chat-frontend.js.map
