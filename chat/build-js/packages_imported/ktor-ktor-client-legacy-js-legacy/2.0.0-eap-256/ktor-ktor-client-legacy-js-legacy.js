(function(root, factory) {
  if (typeof define === 'function' && define.amd) 
    define(['exports', 'kotlin', 'ktor-ktor-http-cio-js-legacy', 'ktor-ktor-http-js-legacy'], factory);
  else if (typeof exports === 'object') 
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-cio-js-legacy'), require('ktor-ktor-http-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-legacy-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-legacy-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-cio-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-legacy-js-legacy'. Its dependency 'ktor-ktor-http-cio-js-legacy' was not found. Please, check whether 'ktor-ktor-http-cio-js-legacy' is loaded prior to 'ktor-ktor-client-legacy-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-legacy-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-legacy-js-legacy'.");
    }
    root['ktor-ktor-client-legacy-js-legacy'] = factory(typeof this['ktor-ktor-client-legacy-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-legacy-js-legacy'], kotlin, this['ktor-ktor-http-cio-js-legacy'], this['ktor-ktor-http-js-legacy']);
  }
}(this, function(_, Kotlin, $module$ktor_ktor_http_cio_js_legacy, $module$ktor_ktor_http_js_legacy) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_pdl1vj$;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var WebSocketSession = $module$ktor_ktor_http_cio_js_legacy.io.ktor.http.cio.websocket.WebSocketSession;
  var DefaultWebSocketSession = $module$ktor_ktor_http_cio_js_legacy.io.ktor.http.cio.websocket.DefaultWebSocketSession;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  ContentConverterException.prototype = Object.create(Exception.prototype);
  ContentConverterException.prototype.constructor = ContentConverterException;
  ResponseException.prototype = Object.create(IllegalStateException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  RedirectResponseException.prototype = Object.create(ResponseException.prototype);
  RedirectResponseException.prototype.constructor = RedirectResponseException;
  ServerResponseException.prototype = Object.create(ResponseException.prototype);
  ServerResponseException.prototype.constructor = ServerResponseException;
  ClientRequestException.prototype = Object.create(ResponseException.prototype);
  ClientRequestException.prototype.constructor = ClientRequestException;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  HttpRequestTimeoutException.prototype = Object.create(CancellationException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  InvalidCacheStateException.prototype = Object.create(IllegalStateException.prototype);
  InvalidCacheStateException.prototype.constructor = InvalidCacheStateException;
  UnsupportedContentEncodingException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentEncodingException.prototype.constructor = UnsupportedContentEncodingException;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  WebSocketException.prototype = Object.create(IllegalStateException.prototype);
  WebSocketException.prototype.constructor = WebSocketException;
  function BodyProgress() {
  }
  BodyProgress.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'BodyProgress', 
  interfaces: []};
  function onDownload(listener) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function onUpload(listener) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function ContentNegotiation() {
  }
  ContentNegotiation.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ContentNegotiation', 
  interfaces: []};
  function ContentConverterException(message) {
    Exception_init(message, this);
    this.name = 'ContentConverterException';
  }
  ContentConverterException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ContentConverterException', 
  interfaces: [Exception]};
  function DataConversion() {
    DataConversion_instance = this;
  }
  DataConversion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'DataConversion', 
  interfaces: []};
  var DataConversion_instance = null;
  function DataConversion_getInstance() {
    if (DataConversion_instance === null) {
      new DataConversion();
    }
    return DataConversion_instance;
  }
  function DefaultRequest(builder) {
    this.builder_0 = builder;
  }
  DefaultRequest.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DefaultRequest', 
  interfaces: []};
  function defaultRequest(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function addDefaultResponseValidation() {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init('Bad response: ' + response.toString() + '. Text: ' + '"' + cachedResponseText + '"', this);
    this.name = 'ResponseException';
  }
  ResponseException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ResponseException', 
  interfaces: [IllegalStateException]};
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.name = 'RedirectResponseException';
  }
  RedirectResponseException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'RedirectResponseException', 
  interfaces: [ResponseException]};
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.name = 'ServerResponseException';
  }
  ServerResponseException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ServerResponseException', 
  interfaces: [ResponseException]};
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.name = 'ClientRequestException';
  }
  ClientRequestException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ClientRequestException', 
  interfaces: [ResponseException]};
  function defaultTransformers() {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function HttpCallValidator() {
  }
  HttpCallValidator.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpCallValidator', 
  interfaces: []};
  function HttpResponseValidator(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function get_expectSuccess() {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function set_expectSuccess(value) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function HttpClientFeature() {
  }
  HttpClientFeature.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'HttpClientFeature', 
  interfaces: []};
  function feature(feature) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function HttpPlainText() {
  }
  HttpPlainText.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpPlainText', 
  interfaces: []};
  function Charsets(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function HttpRedirect() {
  }
  HttpRedirect.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpRedirect', 
  interfaces: []};
  function Sender() {
  }
  Sender.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Sender', 
  interfaces: []};
  function HttpSend(maxSendCount) {
    if (maxSendCount === void 0) 
      maxSendCount = 20;
  }
  HttpSend.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpSend', 
  interfaces: []};
  function SendCountExceedException(message) {
    IllegalStateException_init(message, this);
    this.name = 'SendCountExceedException';
  }
  SendCountExceedException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'SendCountExceedException', 
  interfaces: [IllegalStateException]};
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    this.requestTimeoutMillis_0 = requestTimeoutMillis;
    this.connectTimeoutMillis_0 = connectTimeoutMillis;
    this.socketTimeoutMillis_0 = socketTimeoutMillis;
  }
  HttpTimeout.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpTimeout', 
  interfaces: []};
  function timeout(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function HttpRequestTimeoutException(request) {
    CancellationException_init('', this);
    this.name = 'HttpRequestTimeoutException';
  }
  HttpRequestTimeoutException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpRequestTimeoutException', 
  interfaces: [CancellationException]};
  function ConnectTimeoutException(request, cause) {
    if (cause === void 0) 
      cause = null;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function ConnectTimeoutException_0(url, timeout, cause) {
    if (cause === void 0) 
      cause = null;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function SocketTimeoutException(request, cause) {
    if (cause === void 0) 
      cause = null;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'JsonContentTypeMatcher', 
  interfaces: []};
  var JsonContentTypeMatcher_instance = null;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance === null) {
      new JsonContentTypeMatcher();
    }
    return JsonContentTypeMatcher_instance;
  }
  function UserAgent(agent) {
    this.agent = agent;
  }
  UserAgent.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'UserAgent', 
  interfaces: []};
  function BrowserUserAgent() {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function CurlUserAgent() {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins'.toString());
  }
  function Auth(providers) {
    if (providers === void 0) {
      providers = ArrayList_init();
    }
    this.providers = providers;
  }
  Auth.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Auth', 
  interfaces: []};
  function Auth_0(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.features.auth'.toString());
  }
  function AuthProvider() {
  }
  AuthProvider.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'AuthProvider', 
  interfaces: []};
  function HttpCache(publicStorage, privateStorage) {
    this.publicStorage = publicStorage;
    this.privateStorage = privateStorage;
  }
  HttpCache.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpCache', 
  interfaces: []};
  function InvalidCacheStateException(requestUrl) {
    IllegalStateException_init('The entry for url: ' + requestUrl + ' was removed from cache', this);
    this.name = 'InvalidCacheStateException';
  }
  InvalidCacheStateException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'InvalidCacheStateException', 
  interfaces: [IllegalStateException]};
  function HttpCacheEntry(expires, varyKeys, response, body) {
    this.expires = expires;
    this.varyKeys = varyKeys;
    this.response = response;
    this.body = body;
  }
  HttpCacheEntry.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpCacheEntry', 
  interfaces: []};
  function HttpCacheStorage() {
  }
  HttpCacheStorage.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpCacheStorage', 
  interfaces: []};
  function ContentEncoder() {
  }
  ContentEncoder.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ContentEncoder', 
  interfaces: []};
  function ContentEncoding(encoders, qualityValues) {
    this.encoders_0 = encoders;
    this.qualityValues_0 = qualityValues;
  }
  ContentEncoding.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ContentEncoding', 
  interfaces: []};
  function ContentEncoding_0(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.compression'.toString());
  }
  function UnsupportedContentEncodingException(encoding) {
    IllegalStateException_init('Content-Encoding: ' + encoding + ' unsupported.', this);
    this.name = 'UnsupportedContentEncodingException';
  }
  UnsupportedContentEncodingException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'UnsupportedContentEncodingException', 
  interfaces: [IllegalStateException]};
  function AcceptAllCookiesStorage() {
  }
  AcceptAllCookiesStorage.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'AcceptAllCookiesStorage', 
  interfaces: [CookiesStorage]};
  function ConstantCookiesStorage(cookies) {
  }
  ConstantCookiesStorage.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'ConstantCookiesStorage', 
  interfaces: [CookiesStorage]};
  function CookiesStorage() {
  }
  CookiesStorage.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'CookiesStorage', 
  interfaces: []};
  function HttpCookies(storage, defaults) {
    this.storage_0 = storage;
    this.defaults_0 = defaults;
  }
  HttpCookies.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'HttpCookies', 
  interfaces: []};
  function cookies(url, continuation) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.cookies'.toString());
  }
  function cookies_0(urlString, continuation) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.cookies'.toString());
  }
  function get_0($receiver, name) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.cookies'.toString());
  }
  function JsonFeature() {
  }
  JsonFeature.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'JsonFeature', 
  interfaces: []};
  function Json(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.json'.toString());
  }
  function JsonSerializer() {
  }
  JsonSerializer.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'JsonSerializer', 
  interfaces: []};
  function LogLevel(name, ordinal, info, headers, body) {
    Enum.call(this);
    this.info = info;
    this.headers = headers;
    this.body = body;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevel_initFields() {
    LogLevel_initFields = function() {
};
    LogLevel$ALL_instance = new LogLevel('ALL', 0, true, true, true);
    LogLevel$HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
    LogLevel$BODY_instance = new LogLevel('BODY', 2, true, false, true);
    LogLevel$INFO_instance = new LogLevel('INFO', 3, true, false, false);
    LogLevel$NONE_instance = new LogLevel('NONE', 4, false, false, false);
  }
  var LogLevel$ALL_instance;
  function LogLevel$ALL_getInstance() {
    LogLevel_initFields();
    return LogLevel$ALL_instance;
  }
  var LogLevel$HEADERS_instance;
  function LogLevel$HEADERS_getInstance() {
    LogLevel_initFields();
    return LogLevel$HEADERS_instance;
  }
  var LogLevel$BODY_instance;
  function LogLevel$BODY_getInstance() {
    LogLevel_initFields();
    return LogLevel$BODY_instance;
  }
  var LogLevel$INFO_instance;
  function LogLevel$INFO_getInstance() {
    LogLevel_initFields();
    return LogLevel$INFO_instance;
  }
  var LogLevel$NONE_instance;
  function LogLevel$NONE_getInstance() {
    LogLevel_initFields();
    return LogLevel$NONE_instance;
  }
  LogLevel.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'LogLevel', 
  interfaces: [Enum]};
  function LogLevel$values() {
    return [LogLevel$ALL_getInstance(), LogLevel$HEADERS_getInstance(), LogLevel$BODY_getInstance(), LogLevel$INFO_getInstance(), LogLevel$NONE_getInstance()];
  }
  LogLevel.values = LogLevel$values;
  function LogLevel$valueOf(name) {
    switch (name) {
      case 'ALL':
        return LogLevel$ALL_getInstance();
      case 'HEADERS':
        return LogLevel$HEADERS_getInstance();
      case 'BODY':
        return LogLevel$BODY_getInstance();
      case 'INFO':
        return LogLevel$INFO_getInstance();
      case 'NONE':
        return LogLevel$NONE_getInstance();
      default:
        throwISE('No enum constant io.ktor.client.features.logging.LogLevel.' + name);
    }
  }
  LogLevel.valueOf_61zpoe$ = LogLevel$valueOf;
  function Logger() {
    Logger$Companion_getInstance();
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
  }
  Logger$Companion.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'Companion', 
  interfaces: []};
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Logger.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'Logger', 
  interfaces: []};
  function get_DEFAULT($receiver) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.logging'.toString());
  }
  function get_SIMPLE($receiver) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.logging'.toString());
  }
  function get_EMPTY($receiver) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.logging'.toString());
  }
  function Logging(logger, level, filters) {
    if (filters === void 0) 
      filters = emptyList();
    this.logger = logger;
    this.level = level;
    this.filters = filters;
  }
  Logging.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'Logging', 
  interfaces: []};
  function Logging$lambda() {
    return Unit;
  }
  function Logging_0(block) {
    if (block === void 0) 
      block = Logging$lambda;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.logging'.toString());
  }
  function ResponseObserver(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.observer'.toString());
  }
  function ClientWebSocketSession() {
  }
  ClientWebSocketSession.$metadata$ = {
  kind: Kind_INTERFACE, 
  simpleName: 'ClientWebSocketSession', 
  interfaces: [WebSocketSession]};
  function DefaultClientWebSocketSession(call, delegate) {
    this.$delegate_wwo9g4$_0 = delegate;
  }
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'closeReason', {
  configurable: true, 
  get: function() {
  return this.$delegate_wwo9g4$_0.closeReason;
}});
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'coroutineContext', {
  configurable: true, 
  get: function() {
  return this.$delegate_wwo9g4$_0.coroutineContext;
}});
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'extensions', {
  configurable: true, 
  get: function() {
  return this.$delegate_wwo9g4$_0.extensions;
}});
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'incoming', {
  configurable: true, 
  get: function() {
  return this.$delegate_wwo9g4$_0.incoming;
}});
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'maxFrameSize', {
  configurable: true, 
  get: function() {
  return this.$delegate_wwo9g4$_0.maxFrameSize;
}, 
  set: function(tmp$) {
  this.$delegate_wwo9g4$_0.maxFrameSize = tmp$;
}});
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'outgoing', {
  configurable: true, 
  get: function() {
  return this.$delegate_wwo9g4$_0.outgoing;
}});
  DefaultClientWebSocketSession.prototype.flush = function(continuation) {
  return this.$delegate_wwo9g4$_0.flush(continuation);
};
  DefaultClientWebSocketSession.prototype.send_x9o3m3$ = function(frame, continuation) {
  return this.$delegate_wwo9g4$_0.send_x9o3m3$(frame, continuation);
};
  DefaultClientWebSocketSession.prototype.start_wohq5n$$default = function(negotiatedExtensions) {
  return this.$delegate_wwo9g4$_0.start_wohq5n$$default(negotiatedExtensions);
};
  DefaultClientWebSocketSession.prototype.terminate = function() {
  return this.$delegate_wwo9g4$_0.terminate();
};
  DefaultClientWebSocketSession.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'DefaultClientWebSocketSession', 
  interfaces: [DefaultWebSocketSession, ClientWebSocketSession]};
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'WebSocketCapability', 
  interfaces: []};
  var WebSocketCapability_instance = null;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance === null) {
      new WebSocketCapability();
    }
    return WebSocketCapability_instance;
  }
  function WebSocketExtensionsCapability() {
    WebSocketExtensionsCapability_instance = this;
  }
  WebSocketExtensionsCapability.$metadata$ = {
  kind: Kind_OBJECT, 
  simpleName: 'WebSocketExtensionsCapability', 
  interfaces: []};
  var WebSocketExtensionsCapability_instance = null;
  function WebSocketExtensionsCapability_getInstance() {
    if (WebSocketExtensionsCapability_instance === null) {
      new WebSocketExtensionsCapability();
    }
    return WebSocketExtensionsCapability_instance;
  }
  function WebSockets() {
  }
  WebSockets.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebSockets', 
  interfaces: []};
  function WebSocketException(message) {
    IllegalStateException_init(message, this);
    this.name = 'WebSocketException';
  }
  WebSocketException.$metadata$ = {
  kind: Kind_CLASS, 
  simpleName: 'WebSocketException', 
  interfaces: [IllegalStateException]};
  function WebSockets_0(config) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function webSocketSession(block) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function webSocketSession$lambda() {
    return Unit;
  }
  function webSocketSession_0(method, host, port, path, block, continuation) {
    if (method === void 0) 
      method = HttpMethod.Companion.Get;
    if (host === void 0) 
      host = 'localhost';
    if (port === void 0) 
      port = 0;
    if (path === void 0) 
      path = '/';
    if (block === void 0) 
      block = webSocketSession$lambda;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function webSocket(request, block, continuation) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function webSocket$lambda() {
    return Unit;
  }
  function webSocket_0(method, host, port, path, request, block, continuation) {
    if (method === void 0) 
      method = HttpMethod.Companion.Get;
    if (host === void 0) 
      host = 'localhost';
    if (port === void 0) 
      port = 0;
    if (path === void 0) 
      path = '/';
    if (request === void 0) 
      request = webSocket$lambda;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function webSocket$lambda_0() {
    return Unit;
  }
  function webSocket_1(urlString, request, block, continuation) {
    if (request === void 0) 
      request = webSocket$lambda_0;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function ws$lambda() {
    return Unit;
  }
  function ws(method, host, port, path, request, block, continuation) {
    if (method === void 0) 
      method = HttpMethod.Companion.Get;
    if (host === void 0) 
      host = 'localhost';
    if (port === void 0) 
      port = 0;
    if (path === void 0) 
      path = '/';
    if (request === void 0) 
      request = ws$lambda;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function ws_0(request, block, continuation) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function ws$lambda_0() {
    return Unit;
  }
  function ws_1(urlString, request, block, continuation) {
    if (request === void 0) 
      request = ws$lambda_0;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function wss(request, block, continuation) {
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function wss$lambda() {
    return Unit;
  }
  function wss_0(urlString, request, block, continuation) {
    if (request === void 0) 
      request = wss$lambda;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  function wss$lambda_0() {
    return Unit;
  }
  function wss_1(method, host, port, path, request, block, continuation) {
    if (method === void 0) 
      method = HttpMethod.Companion.Get;
    if (host === void 0) 
      host = 'localhost';
    if (port === void 0) 
      port = 0;
    if (path === void 0) 
      path = '/';
    if (request === void 0) 
      request = wss$lambda_0;
    throw IllegalStateException_init('Moved to io.ktor.client.plugins.websocket'.toString());
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$features = package$client.features || (package$client.features = {});
  package$features.BodyProgress = BodyProgress;
  package$features.onDownload_s877gv$ = onDownload;
  package$features.onUpload_s877gv$ = onUpload;
  package$features.ContentNegotiation = ContentNegotiation;
  package$features.ContentConverterException = ContentConverterException;
  Object.defineProperty(package$features, 'DataConversion', {
  get: DataConversion_getInstance});
  package$features.DefaultRequest = DefaultRequest;
  package$features.defaultRequest_o14v8n$ = defaultRequest;
  package$features.addDefaultResponseValidation = addDefaultResponseValidation;
  package$features.ResponseException = ResponseException;
  package$features.RedirectResponseException = RedirectResponseException;
  package$features.ServerResponseException = ServerResponseException;
  package$features.ClientRequestException = ClientRequestException;
  package$features.defaultTransformers = defaultTransformers;
  package$features.HttpCallValidator = HttpCallValidator;
  package$features.HttpResponseValidator_o14v8n$ = HttpResponseValidator;
  Object.defineProperty(package$features, 'expectSuccess', {
  get: get_expectSuccess, 
  set: set_expectSuccess});
  package$features.HttpClientFeature = HttpClientFeature;
  package$features.feature_rz11d2$ = feature;
  package$features.HttpPlainText = HttpPlainText;
  package$features.Charsets_o14v8n$ = Charsets;
  package$features.HttpRedirect = HttpRedirect;
  package$features.Sender = Sender;
  package$features.HttpSend = HttpSend;
  package$features.SendCountExceedException = SendCountExceedException;
  package$features.HttpTimeout = HttpTimeout;
  package$features.timeout_o14v8n$ = timeout;
  package$features.HttpRequestTimeoutException = HttpRequestTimeoutException;
  package$features.ConnectTimeoutException_490oin$ = ConnectTimeoutException;
  package$features.ConnectTimeoutException_214kh0$ = ConnectTimeoutException_0;
  package$features.SocketTimeoutException_490oin$ = SocketTimeoutException;
  Object.defineProperty(package$features, 'JsonContentTypeMatcher', {
  get: JsonContentTypeMatcher_getInstance});
  package$features.UserAgent = UserAgent;
  package$features.BrowserUserAgent = BrowserUserAgent;
  package$features.CurlUserAgent = CurlUserAgent;
  var package$auth = package$features.auth || (package$features.auth = {});
  package$auth.Auth = Auth;
  package$auth.Auth_hgl5nv$ = Auth_0;
  package$auth.AuthProvider = AuthProvider;
  var package$cache = package$features.cache || (package$features.cache = {});
  package$cache.HttpCache = HttpCache;
  package$cache.InvalidCacheStateException = InvalidCacheStateException;
  package$cache.HttpCacheEntry = HttpCacheEntry;
  var package$storage = package$cache.storage || (package$cache.storage = {});
  package$storage.HttpCacheStorage = HttpCacheStorage;
  var package$compression = package$features.compression || (package$features.compression = {});
  package$compression.ContentEncoder = ContentEncoder;
  package$compression.ContentEncoding = ContentEncoding;
  package$compression.ContentEncoding_za3rmp$ = ContentEncoding_0;
  package$compression.UnsupportedContentEncodingException = UnsupportedContentEncodingException;
  var package$cookies = package$features.cookies || (package$features.cookies = {});
  package$cookies.AcceptAllCookiesStorage = AcceptAllCookiesStorage;
  package$cookies.ConstantCookiesStorage = ConstantCookiesStorage;
  package$cookies.CookiesStorage = CookiesStorage;
  package$cookies.HttpCookies = HttpCookies;
  package$cookies.cookies_dxu3lv$ = cookies;
  package$cookies.cookies_61zpoe$ = cookies_0;
  package$cookies.get_h6ajkg$ = get_0;
  var package$json = package$features.json || (package$features.json = {});
  package$json.JsonFeature = JsonFeature;
  package$json.Json_za3rmp$ = Json;
  package$json.JsonSerializer = JsonSerializer;
  Object.defineProperty(LogLevel, 'ALL', {
  get: LogLevel$ALL_getInstance});
  Object.defineProperty(LogLevel, 'HEADERS', {
  get: LogLevel$HEADERS_getInstance});
  Object.defineProperty(LogLevel, 'BODY', {
  get: LogLevel$BODY_getInstance});
  Object.defineProperty(LogLevel, 'INFO', {
  get: LogLevel$INFO_getInstance});
  Object.defineProperty(LogLevel, 'NONE', {
  get: LogLevel$NONE_getInstance});
  var package$logging = package$features.logging || (package$features.logging = {});
  package$logging.LogLevel = LogLevel;
  Object.defineProperty(Logger, 'Companion', {
  get: Logger$Companion_getInstance});
  package$logging.Logger = Logger;
  package$logging.get_DEFAULT_3z44iy$ = get_DEFAULT;
  package$logging.get_SIMPLE_3z44iy$ = get_SIMPLE;
  package$logging.get_EMPTY_3z44iy$ = get_EMPTY;
  package$logging.Logging = Logging;
  package$logging.Logging_za3rmp$ = Logging_0;
  var package$observer = package$features.observer || (package$features.observer = {});
  package$observer.ResponseObserver_dqn3l2$ = ResponseObserver;
  var package$websocket = package$features.websocket || (package$features.websocket = {});
  package$websocket.ClientWebSocketSession = ClientWebSocketSession;
  package$websocket.DefaultClientWebSocketSession = DefaultClientWebSocketSession;
  Object.defineProperty(package$websocket, 'WebSocketCapability', {
  get: WebSocketCapability_getInstance});
  Object.defineProperty(package$websocket, 'WebSocketExtensionsCapability', {
  get: WebSocketExtensionsCapability_getInstance});
  package$websocket.WebSockets = WebSockets;
  package$websocket.WebSocketException = WebSocketException;
  package$websocket.WebSockets_o14v8n$ = WebSockets_0;
  package$websocket.webSocketSession_o14v8n$ = webSocketSession;
  package$websocket.webSocketSession_4yqji2$ = webSocketSession_0;
  package$websocket.webSocket_3xrpoe$ = webSocket;
  package$websocket.webSocket_lnpuj3$ = webSocket_0;
  package$websocket.webSocket_744gmk$ = webSocket_1;
  package$websocket.ws_lnpuj3$ = ws;
  package$websocket.ws_3xrpoe$ = ws_0;
  package$websocket.ws_744gmk$ = ws_1;
  package$websocket.wss_3xrpoe$ = wss;
  package$websocket.wss_744gmk$ = wss_0;
  package$websocket.wss_lnpuj3$ = wss_1;
  ClientWebSocketSession.prototype.send_x9o3m3$ = WebSocketSession.prototype.send_x9o3m3$;
  DefaultClientWebSocketSession.prototype.start_wohq5n$ = DefaultWebSocketSession.prototype.start_wohq5n$;
  Kotlin.defineModule('ktor-ktor-client-legacy-js-legacy', _);
  return _;
}));
