(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    if (false) {
    }
    root['ktor-ktor-utils-js-legacy'] = factory(typeof this['ktor-ktor-utils-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-utils-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toChar = Kotlin.toChar;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var readAvailable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readAvailable_ja303r$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var unboxChar = Kotlin.unboxChar;
  var toByte = Kotlin.toByte;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var BytePacketBuilder_init = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder;
  var Throwable = Error;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var L4096 = Kotlin.Long.fromInt(4096);
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel_6taknv$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var close = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var ByteChannel_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel;
  var readBytes_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var addSuppressedInternal = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.addSuppressedInternal_oh0dqn$;
  var toShort = Kotlin.toShort;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var MutableMap$MutableEntry = Kotlin.kotlin.collections.MutableMap.MutableEntry;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Map = Kotlin.kotlin.collections.Map;
  var charArray = Kotlin.charArray;
  var toString = Kotlin.toString;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.AbstractCoroutineContextElement;
  var CoroutineExceptionHandler = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineExceptionHandler;
  var concatToString = Kotlin.kotlin.text.concatToString_355ntz$;
  var encodeToByteArray = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var Set = Kotlin.kotlin.collections.Set;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var L0 = Kotlin.Long.ZERO;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var single = Kotlin.kotlin.collections.single_7wnvza$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var IOException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var getKClass = Kotlin.getKClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var List = Kotlin.kotlin.collections.List;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var single_0 = Kotlin.kotlin.collections.single_2p1efm$;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Comparable = Kotlin.kotlin.Comparable;
  var throwUPAE = Kotlin.throwUPAE;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Any = Object;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var SuspendFunction2 = Function;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var recoverStackTrace = $module$kotlinx_coroutines_core.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
  var getCallableRef = Kotlin.getCallableRef;
  var coroutines_0 = Kotlin.kotlin.coroutines;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  ChannelIOException.prototype = Object.create(IOException.prototype);
  ChannelIOException.prototype.constructor = ChannelIOException;
  WeekDay.prototype = Object.create(Enum.prototype);
  WeekDay.prototype.constructor = WeekDay;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  PluginsTrace.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  PluginsTrace.prototype.constructor = PluginsTrace;
  DebugPipelineContext.prototype = Object.create(PipelineContext.prototype);
  DebugPipelineContext.prototype.constructor = DebugPipelineContext;
  InvalidPhaseException.prototype = Object.create(Throwable.prototype);
  InvalidPhaseException.prototype.constructor = InvalidPhaseException;
  PipelinePhaseRelation$After.prototype = Object.create(PipelinePhaseRelation.prototype);
  PipelinePhaseRelation$After.prototype.constructor = PipelinePhaseRelation$After;
  PipelinePhaseRelation$Before.prototype = Object.create(PipelinePhaseRelation.prototype);
  PipelinePhaseRelation$Before.prototype.constructor = PipelinePhaseRelation$Before;
  PipelinePhaseRelation$Last.prototype = Object.create(PipelinePhaseRelation.prototype);
  PipelinePhaseRelation$Last.prototype.constructor = PipelinePhaseRelation$Last;
  SuspendFunctionGun.prototype = Object.create(PipelineContext.prototype);
  SuspendFunctionGun.prototype.constructor = SuspendFunctionGun;
  InvalidTimestampException.prototype = Object.create(IllegalStateException.prototype);
  InvalidTimestampException.prototype.constructor = InvalidTimestampException;
  function AttributeKey(name) {
    this.name = name;
    if (this.name.length === 0) {
      throw IllegalStateException_init("Name can't be blank");
    }
  }
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.name;
  };
  AttributeKey.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, AttributeKey) ? tmp$_0 : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return hashCode(this.name);
  };
  AttributeKey.$metadata$ = {kind: Kind_CLASS, simpleName: 'AttributeKey', interfaces: []};
  function Attributes() {
  }
  Attributes.prototype.get_yzaw86$ = function (key) {
    var tmp$;
    tmp$ = this.getOrNull_yzaw86$(key);
    if (tmp$ == null) {
      throw IllegalStateException_init('No instance for key ' + key);
    }
    return tmp$;
  };
  Attributes.prototype.take_yzaw86$ = function (key) {
    var $receiver = this.get_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes.prototype.takeOrNull_yzaw86$ = function (key) {
    var $receiver = this.getOrNull_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Attributes', interfaces: []};
  function putAll($receiver, other) {
    var tmp$;
    tmp$ = other.allKeys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      $receiver.put_uuntuo$(Kotlin.isType(tmp$_0 = element, AttributeKey) ? tmp$_0 : throwCCE(), other.get_yzaw86$(element));
    }
  }
  var BASE64_ALPHABET;
  var BASE64_MASK;
  var BASE64_PAD;
  var BASE64_INVERSE_ALPHABET;
  function encodeBase64_0($receiver) {
    var buildPacket$result;
    var builder = new BytePacketBuilder_init();
    try {
      writeFully(builder, $receiver);
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return encodeBase64_1(buildPacket$result);
  }
  function encodeBase64_1($receiver) {
    var $receiver_0 = StringBuilder_init();
    var data = new Int8Array(3);
    while ($receiver.remaining.toNumber() > 0) {
      var read = readAvailable($receiver, data);
      clearFrom(data, read);
      var padSize = ((data.length - read | 0) * 8 | 0) / 6 | 0;
      var chunk = (data[0] & 255) << 16 | (data[1] & 255) << 8 | data[2] & 255;
      for (var index = data.length; index >= padSize; index--) {
        var char = chunk >> (6 * index | 0) & 63;
        $receiver_0.append_s8itvh$(toBase64(char));
      }
      for (var index_0 = 0; index_0 < padSize; index_0++) {
        $receiver_0.append_s8itvh$(BASE64_PAD);
      }
    }
    return $receiver_0.toString();
  }
  function clearFrom($receiver, from) {
    var tmp$;
    tmp$ = until(from, $receiver.length).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver[element] = 0;
    }
  }
  function toBase64($receiver) {
    return BASE64_ALPHABET.charCodeAt($receiver);
  }
  var CHUNK_BUFFER_SIZE;
  function CaseInsensitiveMap() {
    this.delegate_0 = LinkedHashMap_init();
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'size', {configurable: true, get: function () {
    return this.delegate_0.size;
  }});
  CaseInsensitiveMap.prototype.containsKey_11rb$ = function (key) {
    return this.delegate_0.containsKey_11rb$(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.containsValue_11rc$ = function (value) {
    return this.delegate_0.containsValue_11rc$(value);
  };
  CaseInsensitiveMap.prototype.get_11rb$ = function (key) {
    return this.delegate_0.get_11rb$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  CaseInsensitiveMap.prototype.clear = function () {
    this.delegate_0.clear();
  };
  CaseInsensitiveMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.delegate_0.put_xwzc9p$(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      this.put_xwzc9p$(key, value);
    }
  };
  CaseInsensitiveMap.prototype.remove_11rb$ = function (key) {
    return this.delegate_0.remove_11rb$(caseInsensitive(key));
  };
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda($receiver) {
    return $receiver.content;
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0($receiver) {
    return caseInsensitive($receiver);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'keys', {configurable: true, get: function () {
    return new DelegatingMutableSet(this.delegate_0.keys, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0);
  }});
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda($receiver) {
    return new Entry($receiver.key.content, $receiver.value);
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0($receiver) {
    return new Entry(caseInsensitive($receiver.key), $receiver.value);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'entries', {configurable: true, get: function () {
    return new DelegatingMutableSet(this.delegate_0.entries, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0);
  }});
  Object.defineProperty(CaseInsensitiveMap.prototype, 'values', {configurable: true, get: function () {
    return this.delegate_0.values;
  }});
  CaseInsensitiveMap.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, CaseInsensitiveMap))
      return false;
    return equals(other.delegate_0, this.delegate_0);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  CaseInsensitiveMap.$metadata$ = {kind: Kind_CLASS, simpleName: 'CaseInsensitiveMap', interfaces: [MutableMap]};
  function Entry(key, value) {
    this.key_3iz5qv$_0 = key;
    this.value_p1xw47$_0 = value;
  }
  Object.defineProperty(Entry.prototype, 'key', {get: function () {
    return this.key_3iz5qv$_0;
  }});
  Object.defineProperty(Entry.prototype, 'value', {get: function () {
    return this.value_p1xw47$_0;
  }, set: function (value) {
    this.value_p1xw47$_0 = value;
  }});
  Entry.prototype.setValue_11rc$ = function (newValue) {
    this.value = newValue;
    return this.value;
  };
  Entry.prototype.hashCode = function () {
    return 527 + hashCode(ensureNotNull(this.key)) + hashCode(ensureNotNull(this.value)) | 0;
  };
  Entry.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Map$Entry))
      return false;
    return equals(other.key, this.key) && equals(other.value, this.value);
  };
  Entry.prototype.toString = function () {
    return this.key.toString() + '=' + this.value;
  };
  Entry.$metadata$ = {kind: Kind_CLASS, simpleName: 'Entry', interfaces: [MutableMap$MutableEntry]};
  function isLowerCase($receiver) {
    return String.fromCharCode($receiver).toLowerCase().charCodeAt(0) === $receiver;
  }
  function toCharArray($receiver) {
    var tmp$;
    var array = charArray($receiver.length, null);
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var value = unboxChar(toBoxedChar($receiver.charCodeAt(i)));
      array[i] = value;
    }
    return array;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  CoroutineExceptionHandler$ObjectLiteral.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineExceptionHandler$ObjectLiteral.prototype.constructor = CoroutineExceptionHandler$ObjectLiteral;
  function CoroutineExceptionHandler$ObjectLiteral(closure$handler, key) {
    this.closure$handler = closure$handler;
    AbstractCoroutineContextElement.call(this, key);
  }
  CoroutineExceptionHandler$ObjectLiteral.prototype.handleException_1ur55u$ = function (context, exception) {
    this.closure$handler(context, exception);
  };
  CoroutineExceptionHandler$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CoroutineExceptionHandler, AbstractCoroutineContextElement]};
  function SilentSupervisor$lambda(f, f_0) {
    return Unit;
  }
  function SilentSupervisor(parent) {
    if (parent === void 0)
      parent = null;
    return SupervisorJob(parent).plus_1fupul$(new CoroutineExceptionHandler$ObjectLiteral(SilentSupervisor$lambda, CoroutineExceptionHandler.Key));
  }
  var digits;
  var NONCE_SIZE_IN_BYTES;
  function hex(bytes) {
    var tmp$, tmp$_0;
    var result = Kotlin.charArray(bytes.length * 2 | 0);
    var resultIndex = 0;
    var digits_0 = digits;
    for (var index = 0; index < bytes.length; index++) {
      var b = bytes[index] & 255;
      result[tmp$ = resultIndex, resultIndex = tmp$ + 1 | 0, tmp$] = digits_0[b >> 4];
      result[tmp$_0 = resultIndex, resultIndex = tmp$_0 + 1 | 0, tmp$_0] = digits_0[b & 15];
    }
    return concatToString(result);
  }
  function generateNonce(size) {
    var buildPacket$result;
    var builder = new BytePacketBuilder_init();
    try {
      while (builder.size < size) {
        writeText(builder, generateNonce_0());
      }
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return readBytes_0(buildPacket$result, size);
  }
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_0 = delegate;
    this.convertTo_0 = convertTo;
    this.convert_0 = convert;
    this.size_uukmxx$_0 = this.delegate_0.size;
  }
  DelegatingMutableSet.prototype.convert_9xhtru$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convert_0(item));
    }
    return destination;
  };
  DelegatingMutableSet.prototype.convertTo_9xhuij$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convertTo_0(item));
    }
    return destination;
  };
  Object.defineProperty(DelegatingMutableSet.prototype, 'size', {configurable: true, get: function () {
    return this.size_uukmxx$_0;
  }});
  DelegatingMutableSet.prototype.add_11rb$ = function (element) {
    return this.delegate_0.add_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.addAll_brywnq$ = function (elements) {
    return this.delegate_0.addAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.clear = function () {
    this.delegate_0.clear();
  };
  DelegatingMutableSet.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.removeAll_brywnq$ = function (elements) {
    return this.delegate_0.removeAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.retainAll_brywnq$ = function (elements) {
    return this.delegate_0.retainAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.contains_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.delegate_0.containsAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  function DelegatingMutableSet$iterator$ObjectLiteral(this$DelegatingMutableSet) {
    this.this$DelegatingMutableSet = this$DelegatingMutableSet;
    this.delegateIterator = this$DelegatingMutableSet.delegate_0.iterator();
  }
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.delegateIterator.hasNext();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.next = function () {
    return this.this$DelegatingMutableSet.convertTo_0(this.delegateIterator.next());
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.remove = function () {
    this.delegateIterator.remove();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MutableIterator]};
  DelegatingMutableSet.prototype.iterator = function () {
    return new DelegatingMutableSet$iterator$ObjectLiteral(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Set))
      return false;
    var elements = this.convertTo_9xhuij$(this.delegate_0);
    var tmp$ = other.containsAll_brywnq$(elements);
    if (tmp$) {
      tmp$ = elements.containsAll_brywnq$(other);
    }
    return tmp$;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return this.convertTo_9xhuij$(this.delegate_0).toString();
  };
  DelegatingMutableSet.$metadata$ = {kind: Kind_CLASS, simpleName: 'DelegatingMutableSet', interfaces: [MutableSet]};
  var Identity_instance = null;
  var Hash_instance = null;
  var GenerateOnlyNonceManager_instance = null;
  var AlwaysFailNonceManager_instance = null;
  function StringValues() {
    StringValues$Companion_getInstance();
  }
  function StringValues$Companion() {
    StringValues$Companion_instance = this;
    this.Empty = new StringValuesImpl();
  }
  StringValues$Companion.prototype.build_o7hlrk$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.StringValues.Companion.build_o7hlrk$', wrapFunction(function () {
    var StringValuesBuilderImpl_init = _.io.ktor.util.StringValuesBuilderImpl;
    return function (caseInsensitiveName, builder) {
      if (caseInsensitiveName === void 0)
        caseInsensitiveName = false;
      var $receiver = new StringValuesBuilderImpl_init(caseInsensitiveName);
      builder($receiver);
      return $receiver.build();
    };
  }));
  StringValues$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StringValues$Companion_instance = null;
  function StringValues$Companion_getInstance() {
    if (StringValues$Companion_instance === null) {
      new StringValues$Companion();
    }
    return StringValues$Companion_instance;
  }
  StringValues.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValues.prototype.contains_61zpoe$ = function (name) {
    return this.getAll_61zpoe$(name) != null;
  };
  StringValues.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.getAll_61zpoe$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValues.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      body(k, v);
    }
  };
  StringValues.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StringValues', interfaces: []};
  function StringValuesBuilder() {
  }
  StringValuesBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StringValuesBuilder', interfaces: []};
  function StringValuesImpl(caseInsensitiveName, values) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (values === void 0)
      values = emptyMap();
    this.caseInsensitiveName_w2tiaf$_0 = caseInsensitiveName;
    this.values = null;
    var newMap = this.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init();
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      var size = value.size;
      var list = ArrayList_init(size);
      for (var index = 0; index < size; index++) {
        list.add_11rb$(value.get_za3lpa$(index));
      }
      newMap.put_xwzc9p$(key, list);
    }
    this.values = newMap;
  }
  Object.defineProperty(StringValuesImpl.prototype, 'caseInsensitiveName', {get: function () {
    return this.caseInsensitiveName_w2tiaf$_0;
  }});
  StringValuesImpl.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesImpl.prototype.getAll_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name);
  };
  StringValuesImpl.prototype.contains_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name) != null;
  };
  StringValuesImpl.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesImpl.prototype.names = function () {
    return unmodifiable(this.values.keys);
  };
  StringValuesImpl.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesImpl.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesImpl.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.values.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.listForKey_6rkiov$_0 = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  StringValuesImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringValuesImpl', interfaces: [StringValues]};
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (size === void 0)
      size = 8;
    this.caseInsensitiveName_h70hy2$_0 = caseInsensitiveName;
    this.values = this.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init_0(size);
  }
  Object.defineProperty(StringValuesBuilderImpl.prototype, 'caseInsensitiveName', {get: function () {
    return this.caseInsensitiveName_h70hy2$_0;
  }});
  StringValuesBuilderImpl.prototype.getAll_61zpoe$ = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesBuilderImpl.prototype.contains_61zpoe$ = function (name) {
    var $receiver = this.values;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name);
  };
  StringValuesBuilderImpl.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilderImpl.prototype.names = function () {
    return this.values.keys;
  };
  StringValuesBuilderImpl.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesBuilderImpl.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesBuilderImpl.prototype.set_puj7f4$ = function (name, value) {
    this.validateValue_61zpoe$(value);
    var list = this.ensureListForKey_vzb69e$_0(name);
    list.clear();
    list.add_11rb$(value);
  };
  StringValuesBuilderImpl.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesBuilderImpl.prototype.append_puj7f4$ = function (name, value) {
    this.validateValue_61zpoe$(value);
    this.ensureListForKey_vzb69e$_0(name).add_11rb$(value);
  };
  function StringValuesBuilderImpl$appendAll$lambda(this$StringValuesBuilderImpl) {
    return function (name, values) {
      this$StringValuesBuilderImpl.appendAll_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilderImpl.prototype.appendAll_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  function StringValuesBuilderImpl$appendMissing$lambda(this$StringValuesBuilderImpl) {
    return function (name, values) {
      this$StringValuesBuilderImpl.appendMissing_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilderImpl.prototype.appendMissing_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilderImpl$appendMissing$lambda(this));
  };
  StringValuesBuilderImpl.prototype.appendAll_poujtz$ = function (name, values) {
    var list = this.ensureListForKey_vzb69e$_0(name);
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.validateValue_61zpoe$(element);
      list.add_11rb$(element);
    }
  };
  StringValuesBuilderImpl.prototype.appendMissing_poujtz$ = function (name, values) {
    var tmp$, tmp$_0;
    var existing = (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? toSet(tmp$) : null) != null ? tmp$_0 : emptySet();
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = values.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!existing.contains_11rb$(element))
        destination.add_11rb$(element);
    }
    this.appendAll_poujtz$(name, destination);
  };
  StringValuesBuilderImpl.prototype.remove_61zpoe$ = function (name) {
    this.values.remove_11rb$(name);
  };
  StringValuesBuilderImpl.prototype.removeKeysWithNoEntries = function () {
    var tmp$;
    var $receiver = this.values;
    var destination = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.value.isEmpty()) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    tmp$ = destination.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      this.remove_61zpoe$(k);
    }
  };
  StringValuesBuilderImpl.prototype.remove_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.remove_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilderImpl.prototype.clear = function () {
    this.values.clear();
  };
  StringValuesBuilderImpl.prototype.build = function () {
    return new StringValuesImpl(this.caseInsensitiveName, this.values);
  };
  StringValuesBuilderImpl.prototype.validateName_61zpoe$ = function (name) {
  };
  StringValuesBuilderImpl.prototype.validateValue_61zpoe$ = function (value) {
  };
  StringValuesBuilderImpl.prototype.ensureListForKey_vzb69e$_0 = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.values.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = ArrayList_init_0();
      this.validateName_61zpoe$(name);
      this.values.put_xwzc9p$(name, $receiver);
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  StringValuesBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringValuesBuilderImpl', interfaces: [StringValuesBuilder]};
  function flattenEntries($receiver) {
    var $receiver_0 = $receiver.entries();
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = element.value;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function appendAll($receiver, builder) {
    var tmp$;
    tmp$ = builder.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var name = element.key;
      var values = element.value;
      $receiver.appendAll_poujtz$(name, values);
    }
    return $receiver;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return (seed * 31 | 0) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules($receiver) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = get_indices($receiver);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
        var it = toBoxedChar($receiver.charCodeAt(index));
        if (toLowerCasePreservingASCII(unboxChar(it)) !== unboxChar(it)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var firstIndex = indexOfFirst$result;
    if (firstIndex === -1) {
      return $receiver;
    }
    var original = $receiver;
    var $receiver_0 = StringBuilder_init_0($receiver.length);
    var tmp$_3;
    $receiver_0.append_ezbsdh$(original, 0, firstIndex);
    tmp$_3 = get_lastIndex(original);
    for (var index_0 = firstIndex; index_0 <= tmp$_3; index_0++) {
      $receiver_0.append_s8itvh$(toLowerCasePreservingASCII(original.charCodeAt(index_0)));
    }
    return $receiver_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    if ((new CharRange(65, 90)).contains_mef7kx$(ch))
      return toChar(ch + 32);
    else if ((new CharRange(0, 127)).contains_mef7kx$(ch))
      return ch;
    else {
      return String.fromCharCode(ch).toLowerCase().charCodeAt(0);
    }
  }
  function caseInsensitive($receiver) {
    return new CaseInsensitiveString($receiver);
  }
  function CaseInsensitiveString(content) {
    this.content = content;
    this.hash_0 = hashCode(this.content.toLowerCase());
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    return ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = other, CaseInsensitiveString) ? tmp$ : null) != null ? tmp$_0.content : null) != null ? equals_0(tmp$_1, this.content, true) : null) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.hash_0;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.content;
  };
  CaseInsensitiveString.$metadata$ = {kind: Kind_CLASS, simpleName: 'CaseInsensitiveString', interfaces: []};
  function ChannelIOException(message, exception) {
    IOException.call(this, message, exception);
    this.name = 'ChannelIOException';
  }
  ChannelIOException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChannelIOException', interfaces: [IOException]};
  var INITIAL_CAPACITY;
  function CopyOnWriteHashMap() {
    this.current_0 = emptyMap();
  }
  CopyOnWriteHashMap.prototype.put_wuswzg$ = function (key, value) {
    do {
      var old = this.current_0;
      if (old.get_11rb$(key) === value)
        return value;
      var copy = HashMap_init(old);
      var replaced = copy.put_xwzc9p$(key, value);
      if (function (scope) {
        return scope.current_0 === old ? function () {
          scope.current_0 = copy;
          return true;
        }() : false;
      }(this))
        return replaced;
    }
     while (true);
  };
  CopyOnWriteHashMap.prototype.get_trkh7z$ = function (key) {
    return this.current_0.get_11rb$(key);
  };
  CopyOnWriteHashMap.prototype.set_wuswzg$ = function (key, value) {
    this.put_wuswzg$(key, value);
  };
  CopyOnWriteHashMap.prototype.remove_trkh7z$ = function (key) {
    do {
      var old = this.current_0;
      if (old.get_11rb$(key) == null)
        return null;
      var copy = HashMap_init(old);
      var removed = copy.remove_11rb$(key);
      if (function (scope) {
        return scope.current_0 === old ? function () {
          scope.current_0 = copy;
          return true;
        }() : false;
      }(this))
        return removed;
    }
     while (true);
  };
  CopyOnWriteHashMap.prototype.computeIfAbsent_bci5j9$ = function (key, producer) {
    var tmp$;
    do {
      var old = this.current_0;
      if ((tmp$ = old.get_11rb$(key)) != null) {
        return tmp$;
      }
      var copy = HashMap_init(old);
      var newValue = producer(key);
      copy.put_xwzc9p$(key, newValue);
      if (function (scope) {
        return scope.current_0 === old ? function () {
          scope.current_0 = copy;
          return true;
        }() : false;
      }(this))
        return newValue;
    }
     while (true);
  };
  CopyOnWriteHashMap.$metadata$ = {kind: Kind_CLASS, simpleName: 'CopyOnWriteHashMap', interfaces: []};
  var DefaultConversionService_instance = null;
  function WeekDay(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WeekDay_initFields() {
    WeekDay_initFields = function () {
    };
    WeekDay$MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay$TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay$WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay$THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay$FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay$SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay$SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    WeekDay$Companion_getInstance();
  }
  var WeekDay$MONDAY_instance;
  function WeekDay$MONDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$MONDAY_instance;
  }
  var WeekDay$TUESDAY_instance;
  function WeekDay$TUESDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$TUESDAY_instance;
  }
  var WeekDay$WEDNESDAY_instance;
  function WeekDay$WEDNESDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$WEDNESDAY_instance;
  }
  var WeekDay$THURSDAY_instance;
  function WeekDay$THURSDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$THURSDAY_instance;
  }
  var WeekDay$FRIDAY_instance;
  function WeekDay$FRIDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$FRIDAY_instance;
  }
  var WeekDay$SATURDAY_instance;
  function WeekDay$SATURDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$SATURDAY_instance;
  }
  var WeekDay$SUNDAY_instance;
  function WeekDay$SUNDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$SUNDAY_instance;
  }
  function WeekDay$Companion() {
    WeekDay$Companion_instance = this;
  }
  WeekDay$Companion.prototype.from_za3lpa$ = function (ordinal) {
    return WeekDay$values()[ordinal];
  };
  WeekDay$Companion.prototype.from_61zpoe$ = function (value) {
    var tmp$;
    var tmp$_0;
    var $receiver = WeekDay$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (equals(element.value, value)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid day of week: ' + value).toString());
    }
    return tmp$_0;
  };
  WeekDay$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var WeekDay$Companion_instance = null;
  function WeekDay$Companion_getInstance() {
    WeekDay_initFields();
    if (WeekDay$Companion_instance === null) {
      new WeekDay$Companion();
    }
    return WeekDay$Companion_instance;
  }
  WeekDay.$metadata$ = {kind: Kind_CLASS, simpleName: 'WeekDay', interfaces: [Enum]};
  function WeekDay$values() {
    return [WeekDay$MONDAY_getInstance(), WeekDay$TUESDAY_getInstance(), WeekDay$WEDNESDAY_getInstance(), WeekDay$THURSDAY_getInstance(), WeekDay$FRIDAY_getInstance(), WeekDay$SATURDAY_getInstance(), WeekDay$SUNDAY_getInstance()];
  }
  WeekDay.values = WeekDay$values;
  function WeekDay$valueOf(name) {
    switch (name) {
      case 'MONDAY':
        return WeekDay$MONDAY_getInstance();
      case 'TUESDAY':
        return WeekDay$TUESDAY_getInstance();
      case 'WEDNESDAY':
        return WeekDay$WEDNESDAY_getInstance();
      case 'THURSDAY':
        return WeekDay$THURSDAY_getInstance();
      case 'FRIDAY':
        return WeekDay$FRIDAY_getInstance();
      case 'SATURDAY':
        return WeekDay$SATURDAY_getInstance();
      case 'SUNDAY':
        return WeekDay$SUNDAY_getInstance();
      default:
        throwISE('No enum constant io.ktor.util.date.WeekDay.' + name);
    }
  }
  WeekDay.valueOf_61zpoe$ = WeekDay$valueOf;
  function Month(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month$FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month$MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month$APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month$MAY_instance = new Month('MAY', 4, 'May');
    Month$JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month$JULY_instance = new Month('JULY', 6, 'Jul');
    Month$AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month$SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month$OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month$NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month$DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Month$Companion_getInstance();
  }
  var Month$JANUARY_instance;
  function Month$JANUARY_getInstance() {
    Month_initFields();
    return Month$JANUARY_instance;
  }
  var Month$FEBRUARY_instance;
  function Month$FEBRUARY_getInstance() {
    Month_initFields();
    return Month$FEBRUARY_instance;
  }
  var Month$MARCH_instance;
  function Month$MARCH_getInstance() {
    Month_initFields();
    return Month$MARCH_instance;
  }
  var Month$APRIL_instance;
  function Month$APRIL_getInstance() {
    Month_initFields();
    return Month$APRIL_instance;
  }
  var Month$MAY_instance;
  function Month$MAY_getInstance() {
    Month_initFields();
    return Month$MAY_instance;
  }
  var Month$JUNE_instance;
  function Month$JUNE_getInstance() {
    Month_initFields();
    return Month$JUNE_instance;
  }
  var Month$JULY_instance;
  function Month$JULY_getInstance() {
    Month_initFields();
    return Month$JULY_instance;
  }
  var Month$AUGUST_instance;
  function Month$AUGUST_getInstance() {
    Month_initFields();
    return Month$AUGUST_instance;
  }
  var Month$SEPTEMBER_instance;
  function Month$SEPTEMBER_getInstance() {
    Month_initFields();
    return Month$SEPTEMBER_instance;
  }
  var Month$OCTOBER_instance;
  function Month$OCTOBER_getInstance() {
    Month_initFields();
    return Month$OCTOBER_instance;
  }
  var Month$NOVEMBER_instance;
  function Month$NOVEMBER_getInstance() {
    Month_initFields();
    return Month$NOVEMBER_instance;
  }
  var Month$DECEMBER_instance;
  function Month$DECEMBER_getInstance() {
    Month_initFields();
    return Month$DECEMBER_instance;
  }
  function Month$Companion() {
    Month$Companion_instance = this;
  }
  Month$Companion.prototype.from_za3lpa$ = function (ordinal) {
    return Month$values()[ordinal];
  };
  Month$Companion.prototype.from_61zpoe$ = function (value) {
    var tmp$;
    var tmp$_0;
    var $receiver = Month$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (equals(element.value, value)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid month: ' + value).toString());
    }
    return tmp$_0;
  };
  Month$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Month.$metadata$ = {kind: Kind_CLASS, simpleName: 'Month', interfaces: [Enum]};
  function Month$values() {
    return [Month$JANUARY_getInstance(), Month$FEBRUARY_getInstance(), Month$MARCH_getInstance(), Month$APRIL_getInstance(), Month$MAY_getInstance(), Month$JUNE_getInstance(), Month$JULY_getInstance(), Month$AUGUST_getInstance(), Month$SEPTEMBER_getInstance(), Month$OCTOBER_getInstance(), Month$NOVEMBER_getInstance(), Month$DECEMBER_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'JANUARY':
        return Month$JANUARY_getInstance();
      case 'FEBRUARY':
        return Month$FEBRUARY_getInstance();
      case 'MARCH':
        return Month$MARCH_getInstance();
      case 'APRIL':
        return Month$APRIL_getInstance();
      case 'MAY':
        return Month$MAY_getInstance();
      case 'JUNE':
        return Month$JUNE_getInstance();
      case 'JULY':
        return Month$JULY_getInstance();
      case 'AUGUST':
        return Month$AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month$SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month$OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month$NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month$DECEMBER_getInstance();
      default:
        throwISE('No enum constant io.ktor.util.date.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    GMTDate$Companion_getInstance();
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.dayOfWeek = dayOfWeek;
    this.dayOfMonth = dayOfMonth;
    this.dayOfYear = dayOfYear;
    this.month = month;
    this.year = year;
    this.timestamp = timestamp;
  }
  GMTDate.prototype.compareTo_11rb$ = function (other) {
    return this.timestamp.compareTo_11rb$(other.timestamp);
  };
  function GMTDate$Companion() {
    GMTDate$Companion_instance = this;
    this.START = GMTDate_0(L0);
  }
  GMTDate$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GMTDate$Companion_instance = null;
  function GMTDate$Companion_getInstance() {
    if (GMTDate$Companion_instance === null) {
      new GMTDate$Companion();
    }
    return GMTDate$Companion_instance;
  }
  GMTDate.$metadata$ = {kind: Kind_CLASS, simpleName: 'GMTDate', interfaces: [Comparable]};
  GMTDate.prototype.component1 = function () {
    return this.seconds;
  };
  GMTDate.prototype.component2 = function () {
    return this.minutes;
  };
  GMTDate.prototype.component3 = function () {
    return this.hours;
  };
  GMTDate.prototype.component4 = function () {
    return this.dayOfWeek;
  };
  GMTDate.prototype.component5 = function () {
    return this.dayOfMonth;
  };
  GMTDate.prototype.component6 = function () {
    return this.dayOfYear;
  };
  GMTDate.prototype.component7 = function () {
    return this.month;
  };
  GMTDate.prototype.component8 = function () {
    return this.year;
  };
  GMTDate.prototype.component9 = function () {
    return this.timestamp;
  };
  GMTDate.prototype.copy_j9f46j$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    return new GMTDate(seconds === void 0 ? this.seconds : seconds, minutes === void 0 ? this.minutes : minutes, hours === void 0 ? this.hours : hours, dayOfWeek === void 0 ? this.dayOfWeek : dayOfWeek, dayOfMonth === void 0 ? this.dayOfMonth : dayOfMonth, dayOfYear === void 0 ? this.dayOfYear : dayOfYear, month === void 0 ? this.month : month, year === void 0 ? this.year : year, timestamp === void 0 ? this.timestamp : timestamp);
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + Kotlin.toString(this.seconds) + (', minutes=' + Kotlin.toString(this.minutes)) + (', hours=' + Kotlin.toString(this.hours)) + (', dayOfWeek=' + Kotlin.toString(this.dayOfWeek)) + (', dayOfMonth=' + Kotlin.toString(this.dayOfMonth)) + (', dayOfYear=' + Kotlin.toString(this.dayOfYear)) + (', month=' + Kotlin.toString(this.month)) + (', year=' + Kotlin.toString(this.year)) + (', timestamp=' + Kotlin.toString(this.timestamp)) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.minutes) | 0;
    result = result * 31 + Kotlin.hashCode(this.hours) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfWeek) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfMonth) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfYear) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.timestamp) | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.minutes, other.minutes) && Kotlin.equals(this.hours, other.hours) && Kotlin.equals(this.dayOfWeek, other.dayOfWeek) && Kotlin.equals(this.dayOfMonth, other.dayOfMonth) && Kotlin.equals(this.dayOfYear, other.dayOfYear) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.year, other.year) && Kotlin.equals(this.timestamp, other.timestamp)))));
  };
  var GMTDateParser$Companion_instance = null;
  function Coroutine$initContextInDebugMode$lambda(closure$block_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
  }
  Coroutine$initContextInDebugMode$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$initContextInDebugMode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initContextInDebugMode$lambda.prototype.constructor = Coroutine$initContextInDebugMode$lambda;
  Coroutine$initContextInDebugMode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this);
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
  function initContextInDebugMode$lambda(closure$block_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$initContextInDebugMode$lambda(closure$block_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$initContextInDebugMode(block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$block = block_0;
  }
  Coroutine$initContextInDebugMode.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$initContextInDebugMode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initContextInDebugMode.prototype.constructor = Coroutine$initContextInDebugMode;
  Coroutine$initContextInDebugMode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!IntellijIdeaDebugDetector_getInstance().isDebuggerConnected) {
              this.state_0 = 2;
              this.result_0 = this.local$block(this);
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
            return this.result_0;
          case 3:
            this.result_0 = this.context;
            var debugContext = this.result_0.plus_1fupul$(new PluginsTrace());
            this.state_0 = 4;
            this.result_0 = withContext(debugContext, initContextInDebugMode$lambda(this.local$block), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function initContextInDebugMode(block_0, continuation_0, suspended) {
    var instance = new Coroutine$initContextInDebugMode(block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var PluginName$Key_instance = null;
  function PluginsTrace(eventOrder) {
    PluginsTrace$Key_getInstance();
    if (eventOrder === void 0) {
      eventOrder = ArrayList_init_0();
    }
    AbstractCoroutineContextElement.call(this, PluginsTrace$Key_getInstance());
    this.eventOrder = eventOrder;
  }
  function PluginsTrace$Key() {
    PluginsTrace$Key_instance = this;
  }
  PluginsTrace$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var PluginsTrace$Key_instance = null;
  function PluginsTrace$Key_getInstance() {
    if (PluginsTrace$Key_instance === null) {
      new PluginsTrace$Key();
    }
    return PluginsTrace$Key_instance;
  }
  PluginsTrace.prototype.toString = function () {
    return 'PluginsTrace(' + joinToString(this.eventOrder) + ')';
  };
  PluginsTrace.$metadata$ = {kind: Kind_CLASS, simpleName: 'PluginsTrace', interfaces: [AbstractCoroutineContextElement]};
  PluginsTrace.prototype.component1 = function () {
    return this.eventOrder;
  };
  PluginsTrace.prototype.copy_t16olz$ = function (eventOrder) {
    return new PluginsTrace(eventOrder === void 0 ? this.eventOrder : eventOrder);
  };
  PluginsTrace.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eventOrder) | 0;
    return result;
  };
  PluginsTrace.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.eventOrder, other.eventOrder))));
  };
  var PluginTraceElement$PluginEvent$STARTED_instance;
  var PluginTraceElement$PluginEvent$FINISHED_instance;
  var UNDECIDED;
  var SUCCESS;
  var FAILURE;
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  function Symbol(symbol) {
    this.symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return this.symbol;
  };
  Symbol.$metadata$ = {kind: Kind_CLASS, simpleName: 'Symbol', interfaces: []};
  var NO_DECISION;
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.interceptors_0 = interceptors;
    this.coroutineContext_hemy3t$_0 = coroutineContext;
    this.subject_is4q2w$_0 = subject;
    this.index_0 = 0;
  }
  Object.defineProperty(DebugPipelineContext.prototype, 'coroutineContext', {get: function () {
    return this.coroutineContext_hemy3t$_0;
  }});
  Object.defineProperty(DebugPipelineContext.prototype, 'subject', {configurable: true, get: function () {
    return this.subject_is4q2w$_0;
  }, set: function (subject) {
    this.subject_is4q2w$_0 = subject;
  }});
  DebugPipelineContext.prototype.finish = function () {
    this.index_0 = -1;
  };
  DebugPipelineContext.prototype.proceedWith_trkh7z$ = function (subject, continuation) {
    this.subject = subject;
    return this.proceed(continuation);
  };
  DebugPipelineContext.prototype.proceed = function (continuation) {
    var index = this.index_0;
    if (index < 0)
      return this.subject;
    if (index >= this.interceptors_0.size) {
      this.finish();
      return this.subject;
    }
    return this.proceedLoop_0(continuation);
  };
  DebugPipelineContext.prototype.execute_trkh7z$ = function (initial, continuation) {
    this.index_0 = 0;
    this.subject = initial;
    return this.proceed(continuation);
  };
  function Coroutine$proceedLoop_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$index = void 0;
    this.local$interceptors = void 0;
  }
  Coroutine$proceedLoop_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$proceedLoop_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$proceedLoop_0.prototype.constructor = Coroutine$proceedLoop_0;
  Coroutine$proceedLoop_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$index = this.$this.index_0;
            if (this.local$index === -1) {
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$interceptors = this.$this.interceptors_0;
            if (this.local$index >= this.local$interceptors.size) {
              this.$this.finish();
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var executeInterceptor = this.local$interceptors.get_za3lpa$(this.local$index);
            this.$this.index_0 = this.local$index + 1 | 0;
            this.state_0 = 5;
            this.result_0 = (Kotlin.isType(tmp$ = executeInterceptor, SuspendFunction2) ? tmp$ : throwCCE())(this.$this, this.$this.subject, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return this.$this.subject;
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
  DebugPipelineContext.prototype.proceedLoop_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$proceedLoop_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DebugPipelineContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'DebugPipelineContext', interfaces: [PipelineContext]};
  function PhaseContent(phase, relation, interceptors) {
    PhaseContent$Companion_getInstance();
    this.phase = phase;
    this.relation = relation;
    this.interceptors_0 = interceptors;
    this.shared = true;
  }
  Object.defineProperty(PhaseContent.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.interceptors_0.isEmpty();
  }});
  Object.defineProperty(PhaseContent.prototype, 'size', {configurable: true, get: function () {
    return this.interceptors_0.size;
  }});
  PhaseContent.prototype.addInterceptor_g7ktxf$ = function (interceptor) {
    if (this.shared) {
      this.copyInterceptors_0();
    }
    this.interceptors_0.add_11rb$(interceptor);
  };
  PhaseContent.prototype.addTo_nenlhb$ = function (destination) {
    var tmp$;
    var interceptors = this.interceptors_0;
    if (Kotlin.isType(destination, ArrayList)) {
      destination.ensureCapacity_za3lpa$(destination.size + interceptors.size | 0);
    }
    tmp$ = interceptors.size;
    for (var index = 0; index < tmp$; index++) {
      destination.add_11rb$(interceptors.get_za3lpa$(index));
    }
  };
  PhaseContent.prototype.addTo_659igw$ = function (destination) {
    if (this.isEmpty)
      return;
    if (destination.isEmpty) {
      destination.interceptors_0 = this.sharedInterceptors();
      destination.shared = true;
      return;
    }
    if (destination.shared) {
      destination.copyInterceptors_0();
    }
    this.addTo_nenlhb$(destination.interceptors_0);
  };
  PhaseContent.prototype.sharedInterceptors = function () {
    this.shared = true;
    return this.interceptors_0;
  };
  PhaseContent.prototype.copiedInterceptors = function () {
    var $receiver = ArrayList_init_0();
    $receiver.addAll_brywnq$(this.interceptors_0);
    return $receiver;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.phase.name + '`, ' + this.size + ' handlers';
  };
  PhaseContent.prototype.copyInterceptors_0 = function () {
    this.interceptors_0 = this.copiedInterceptors();
    this.shared = false;
  };
  function PhaseContent$Companion() {
    PhaseContent$Companion_instance = this;
    this.SharedArrayList = ArrayList_init_0();
  }
  PhaseContent$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var PhaseContent$Companion_instance = null;
  function PhaseContent$Companion_getInstance() {
    if (PhaseContent$Companion_instance === null) {
      new PhaseContent$Companion();
    }
    return PhaseContent$Companion_instance;
  }
  PhaseContent.$metadata$ = {kind: Kind_CLASS, simpleName: 'PhaseContent', interfaces: []};
  function PhaseContent_init(phase, relation, $this) {
    $this = $this || Object.create(PhaseContent.prototype);
    var tmp$;
    PhaseContent.call($this, phase, relation, Kotlin.isType(tmp$ = PhaseContent$Companion_getInstance().SharedArrayList, MutableList) ? tmp$ : throwCCE());
    if (!PhaseContent$Companion_getInstance().SharedArrayList.isEmpty()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init(message.toString());
    }
    return $this;
  }
  function Pipeline(phases) {
    this.attributes = Attributes_0(true);
    this.developmentMode_pf3u1e$_0 = false;
    this.phasesRaw_hnbfpg$_0 = mutableListOf(phases.slice());
    this.interceptorsQuantity_zh48jz$_0 = 0;
    this._interceptors_8zww1r$_0 = null;
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  }
  Object.defineProperty(Pipeline.prototype, 'developmentMode', {configurable: true, get: function () {
    return this.developmentMode_pf3u1e$_0;
  }});
  Object.defineProperty(Pipeline.prototype, 'items', {configurable: true, get: function () {
    var $receiver = this.phasesRaw_hnbfpg$_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      destination.add_11rb$((tmp$_3 = Kotlin.isType(tmp$_0 = item, PipelinePhase) ? tmp$_0 : null) != null ? tmp$_3 : ensureNotNull((tmp$_2 = Kotlin.isType(tmp$_1 = item, PhaseContent) ? tmp$_1 : null) != null ? tmp$_2.phase : null));
    }
    return destination;
  }});
  Object.defineProperty(Pipeline.prototype, 'isEmpty', {configurable: true, get: function () {
    return this.interceptorsQuantity_zh48jz$_0 === 0;
  }});
  Object.defineProperty(Pipeline.prototype, 'interceptors_dzu4x2$_0', {configurable: true, get: function () {
    return this._interceptors_8zww1r$_0;
  }, set: function (value) {
    this._interceptors_8zww1r$_0 = value;
  }});
  Pipeline.prototype.execute_8pmvt0$ = function (context, subject, continuation) {
    return this.createContext_8mqvkw$_0(context, subject, continuation.context).execute_trkh7z$(subject, continuation);
  };
  Pipeline.prototype.addPhase_cwbx9d$ = function (phase) {
    if (this.hasPhase_ee29uw$_0(phase)) {
      return;
    }
    this.phasesRaw_hnbfpg$_0.add_11rb$(phase);
  };
  Pipeline.prototype.insertPhaseAfter_b9zzbm$ = function (reference, phase) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (this.hasPhase_ee29uw$_0(phase))
      return;
    var index = this.findPhaseIndex_e6azsp$_0(reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    tmp$ = get_lastIndex_0(this.phasesRaw_hnbfpg$_0);
    for (var i = index + 1 | 0; i <= tmp$; i++) {
      tmp$_2 = (tmp$_1 = Kotlin.isType(tmp$_0 = this.phasesRaw_hnbfpg$_0.get_za3lpa$(i), PhaseContent) ? tmp$_0 : null) != null ? tmp$_1.relation : null;
      if (tmp$_2 == null) {
        break;
      }
      var relation = tmp$_2;
      tmp$_5 = (tmp$_4 = Kotlin.isType(tmp$_3 = relation, PipelinePhaseRelation$After) ? tmp$_3 : null) != null ? tmp$_4.relativeTo : null;
      if (tmp$_5 == null) {
        continue;
      }
      var relatedTo = tmp$_5;
      lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
    }
    this.phasesRaw_hnbfpg$_0.add_wxm5ur$(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init(phase, new PipelinePhaseRelation$After(reference)));
  };
  Pipeline.prototype.insertPhaseBefore_b9zzbm$ = function (reference, phase) {
    if (this.hasPhase_ee29uw$_0(phase))
      return;
    var index = this.findPhaseIndex_e6azsp$_0(reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.phasesRaw_hnbfpg$_0.add_wxm5ur$(index, PhaseContent_init(phase, new PipelinePhaseRelation$Before(reference)));
  };
  Pipeline.prototype.intercept_h71y74$ = function (phase, block) {
    var tmp$, tmp$_0;
    tmp$ = this.findPhase_ckbt4l$_0(phase);
    if (tmp$ == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    }
    var phaseContent = tmp$;
    typeof (tmp$_0 = block) === 'function' ? tmp$_0 : throwCCE();
    if (this.tryAddToPhaseFastPath_ysde9t$_0(phase, block)) {
      this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + 1 | 0;
      return;
    }
    phaseContent.addInterceptor_g7ktxf$(block);
    this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + 1 | 0;
    this.resetInterceptorsList_f35ip$_0();
    this.afterIntercepted();
  };
  Pipeline.prototype.afterIntercepted = function () {
  };
  Pipeline.prototype.interceptorsForPhase_cwbx9d$ = function (phase) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = this.phasesRaw_hnbfpg$_0;
    var destination = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (Kotlin.isType(element, PhaseContent))
        destination.add_11rb$(element);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        if (equals(element_0.phase, phase)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.sharedInterceptors() : null) == null || Kotlin.isType(tmp$_0, List) ? tmp$_0 : throwCCE()) != null ? tmp$_1 : emptyList();
  };
  Pipeline.prototype.mergePhases_p814o4$ = function (from) {
    var tmp$, tmp$_0, tmp$_1;
    var fromPhases = from.phasesRaw_hnbfpg$_0;
    var toInsert = toMutableList(fromPhases);
    while (!toInsert.isEmpty()) {
      var iterator = toInsert.iterator();
      while (iterator.hasNext()) {
        var fromPhaseOrContent = iterator.next();
        var fromPhase = (tmp$_1 = Kotlin.isType(tmp$ = fromPhaseOrContent, PipelinePhase) ? tmp$ : null) != null ? tmp$_1 : (Kotlin.isType(tmp$_0 = fromPhaseOrContent, PhaseContent) ? tmp$_0 : throwCCE()).phase;
        if (this.hasPhase_ee29uw$_0(fromPhase)) {
          iterator.remove();
        } else {
          var inserted = this.insertRelativePhase_3d2nvs$_0(fromPhaseOrContent, fromPhase);
          if (inserted) {
            iterator.remove();
          }
        }
      }
    }
  };
  Pipeline.prototype.mergeInterceptors_gp87m2$_0 = function (from) {
    if (this.interceptorsQuantity_zh48jz$_0 === 0) {
      this.setInterceptorsListFromAnotherPipeline_5wxuo1$_0(from);
    } else {
      this.resetInterceptorsList_f35ip$_0();
    }
    var fromPhases = from.phasesRaw_hnbfpg$_0;
    var tmp$;
    tmp$ = fromPhases.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var fromPhase = (tmp$_2 = Kotlin.isType(tmp$_0 = element, PipelinePhase) ? tmp$_0 : null) != null ? tmp$_2 : (Kotlin.isType(tmp$_1 = element, PhaseContent) ? tmp$_1 : throwCCE()).phase;
      if (Kotlin.isType(element, PhaseContent) && !element.isEmpty) {
        Kotlin.isType(tmp$_3 = element, PhaseContent) ? tmp$_3 : throwCCE();
        element.addTo_659igw$(ensureNotNull(this.findPhase_ckbt4l$_0(fromPhase)));
        this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + element.size | 0;
      }
    }
  };
  Pipeline.prototype.merge_p814o4$ = function (from) {
    if (this.fastPathMerge_p3ex3$_0(from)) {
      return;
    }
    this.mergePhases_p814o4$(from);
    this.mergeInterceptors_gp87m2$_0(from);
  };
  Pipeline.prototype.resetFrom_p814o4$ = function (from) {
    this.phasesRaw_hnbfpg$_0.clear();
    if (!(this.interceptorsQuantity_zh48jz$_0 === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this.fastPathMerge_p3ex3$_0(from);
  };
  Pipeline.prototype.phaseInterceptors_fv4x26$ = function (phase) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.findPhase_ckbt4l$_0(phase)) != null ? tmp$.sharedInterceptors() : null) != null ? tmp$_0 : emptyList();
  };
  Pipeline.prototype.interceptorsForTests_8be2vx$ = function () {
    var tmp$;
    return (tmp$ = this.interceptors_dzu4x2$_0) != null ? tmp$ : this.cacheInterceptors_dmwwd8$_0();
  };
  Pipeline.prototype.createContext_8mqvkw$_0 = function (context, subject, coroutineContext) {
    return pipelineContextFor(context, this.sharedInterceptorsList_8aep55$_0(), subject, coroutineContext, this.developmentMode);
  };
  Pipeline.prototype.findPhase_ckbt4l$_0 = function (phase) {
    var tmp$, tmp$_0;
    var phasesList = this.phasesRaw_hnbfpg$_0;
    tmp$ = phasesList.size;
    for (var index = 0; index < tmp$; index++) {
      var current = phasesList.get_za3lpa$(index);
      if (current === phase) {
        var content = PhaseContent_init(phase, PipelinePhaseRelation$Last_getInstance());
        phasesList.set_wxm5ur$(index, content);
        return content;
      }
      if (Kotlin.isType(current, PhaseContent) && current.phase === phase) {
        return Kotlin.isType(tmp$_0 = current, PhaseContent) ? tmp$_0 : throwCCE();
      }
    }
    return null;
  };
  Pipeline.prototype.findPhaseIndex_e6azsp$_0 = function (phase) {
    var tmp$;
    var phasesList = this.phasesRaw_hnbfpg$_0;
    tmp$ = phasesList.size;
    for (var index = 0; index < tmp$; index++) {
      var current = phasesList.get_za3lpa$(index);
      if (current === phase || (Kotlin.isType(current, PhaseContent) && current.phase === phase)) {
        return index;
      }
    }
    return -1;
  };
  Pipeline.prototype.hasPhase_ee29uw$_0 = function (phase) {
    var tmp$;
    var phasesList = this.phasesRaw_hnbfpg$_0;
    tmp$ = phasesList.size;
    for (var index = 0; index < tmp$; index++) {
      var current = phasesList.get_za3lpa$(index);
      if (current === phase || (Kotlin.isType(current, PhaseContent) && current.phase === phase)) {
        return true;
      }
    }
    return false;
  };
  Pipeline.prototype.cacheInterceptors_dmwwd8$_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var interceptorsQuantity = this.interceptorsQuantity_zh48jz$_0;
    if (interceptorsQuantity === 0) {
      this.notSharedInterceptorsList_8b94z2$_0(emptyList());
      return emptyList();
    }
    var phases = this.phasesRaw_hnbfpg$_0;
    if (interceptorsQuantity === 1) {
      tmp$ = get_lastIndex_0(phases);
      for (var phaseIndex = 0; phaseIndex <= tmp$; phaseIndex++) {
        tmp$_1 = Kotlin.isType(tmp$_0 = phases.get_za3lpa$(phaseIndex), PhaseContent) ? tmp$_0 : null;
        if (tmp$_1 == null) {
          continue;
        }
        var phaseContent = tmp$_1;
        if (phaseContent.isEmpty)
          continue;
        var interceptors = phaseContent.sharedInterceptors();
        this.setInterceptorsListFromPhase_j6c7c5$_0(phaseContent);
        return interceptors;
      }
    }
    var destination = ArrayList_init_0();
    tmp$_2 = get_lastIndex_0(phases);
    for (var phaseIndex_0 = 0; phaseIndex_0 <= tmp$_2; phaseIndex_0++) {
      tmp$_4 = Kotlin.isType(tmp$_3 = phases.get_za3lpa$(phaseIndex_0), PhaseContent) ? tmp$_3 : null;
      if (tmp$_4 == null) {
        continue;
      }
      var phase = tmp$_4;
      phase.addTo_nenlhb$(destination);
    }
    this.notSharedInterceptorsList_8b94z2$_0(destination);
    return destination;
  };
  Pipeline.prototype.fastPathMerge_p3ex3$_0 = function (from) {
    var tmp$, tmp$_0;
    if (from.phasesRaw_hnbfpg$_0.isEmpty()) {
      return true;
    }
    if (!this.phasesRaw_hnbfpg$_0.isEmpty()) {
      return false;
    }
    var fromPhases = from.phasesRaw_hnbfpg$_0;
    tmp$ = get_lastIndex_0(fromPhases);
    for (var index = 0; index <= tmp$; index++) {
      var fromPhaseOrContent = fromPhases.get_za3lpa$(index);
      if (Kotlin.isType(fromPhaseOrContent, PipelinePhase)) {
        this.phasesRaw_hnbfpg$_0.add_11rb$(fromPhaseOrContent);
        continue;
      }
      if (!Kotlin.isType(fromPhaseOrContent, PhaseContent)) {
        continue;
      }
      Kotlin.isType(tmp$_0 = fromPhaseOrContent, PhaseContent) ? tmp$_0 : throwCCE();
      this.phasesRaw_hnbfpg$_0.add_11rb$(new PhaseContent(fromPhaseOrContent.phase, fromPhaseOrContent.relation, fromPhaseOrContent.sharedInterceptors()));
      continue;
    }
    this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + from.interceptorsQuantity_zh48jz$_0 | 0;
    this.setInterceptorsListFromAnotherPipeline_5wxuo1$_0(from);
    return true;
  };
  Pipeline.prototype.sharedInterceptorsList_8aep55$_0 = function () {
    if (this.interceptors_dzu4x2$_0 == null) {
      this.cacheInterceptors_dmwwd8$_0();
    }
    this.interceptorsListShared_q9lih5$_0 = true;
    return ensureNotNull(this.interceptors_dzu4x2$_0);
  };
  Pipeline.prototype.resetInterceptorsList_f35ip$_0 = function () {
    this.interceptors_dzu4x2$_0 = null;
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  };
  Pipeline.prototype.notSharedInterceptorsList_8b94z2$_0 = function (list) {
    this.interceptors_dzu4x2$_0 = list;
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  };
  Pipeline.prototype.setInterceptorsListFromPhase_j6c7c5$_0 = function (phaseContent) {
    this.interceptors_dzu4x2$_0 = phaseContent.sharedInterceptors();
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = phaseContent.phase;
  };
  Pipeline.prototype.setInterceptorsListFromAnotherPipeline_5wxuo1$_0 = function (pipeline) {
    this.interceptors_dzu4x2$_0 = pipeline.sharedInterceptorsList_8aep55$_0();
    this.interceptorsListShared_q9lih5$_0 = true;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  };
  Pipeline.prototype.tryAddToPhaseFastPath_ysde9t$_0 = function (phase, block) {
    var currentInterceptors = this.interceptors_dzu4x2$_0;
    if (this.phasesRaw_hnbfpg$_0.isEmpty() || currentInterceptors == null) {
      return false;
    }
    if (this.interceptorsListShared_q9lih5$_0 || !Kotlin.isType(currentInterceptors, MutableList)) {
      return false;
    }
    if (equals(this.interceptorsListSharedPhase_9t9y1q$_0, phase)) {
      currentInterceptors.add_11rb$(block);
      return true;
    }
    if (equals(phase, last(this.phasesRaw_hnbfpg$_0)) || this.findPhaseIndex_e6azsp$_0(phase) === get_lastIndex_0(this.phasesRaw_hnbfpg$_0)) {
      ensureNotNull(this.findPhase_ckbt4l$_0(phase)).addInterceptor_g7ktxf$(block);
      currentInterceptors.add_11rb$(block);
      return true;
    }
    return false;
  };
  Pipeline.prototype.insertRelativePhase_3d2nvs$_0 = function (fromPhaseOrContent, fromPhase) {
    var tmp$, tmp$_0;
    if (fromPhaseOrContent === fromPhase)
      tmp$_0 = PipelinePhaseRelation$Last_getInstance();
    else
      tmp$_0 = (Kotlin.isType(tmp$ = fromPhaseOrContent, PhaseContent) ? tmp$ : throwCCE()).relation;
    var fromPhaseRelation = tmp$_0;
    if (Kotlin.isType(fromPhaseRelation, PipelinePhaseRelation$Last))
      this.addPhase_cwbx9d$(fromPhase);
    else if (Kotlin.isType(fromPhaseRelation, PipelinePhaseRelation$Before) && this.hasPhase_ee29uw$_0(fromPhaseRelation.relativeTo))
      this.insertPhaseBefore_b9zzbm$(fromPhaseRelation.relativeTo, fromPhase);
    else if (Kotlin.isType(fromPhaseRelation, PipelinePhaseRelation$After))
      this.insertPhaseAfter_b9zzbm$(fromPhaseRelation.relativeTo, fromPhase);
    else
      return false;
    return true;
  };
  Pipeline.$metadata$ = {kind: Kind_CLASS, simpleName: 'Pipeline', interfaces: []};
  defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.pipeline.execute_8vjjyp$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var initContextInDebugMode = _.io.ktor.util.debug.initContextInDebugMode_lnyleu$;
    function Coroutine$execute$lambda(closure$context_0, this$execute_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$context = closure$context_0;
      this.local$this$execute = this$execute_0;
    }
    Coroutine$execute$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$execute$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$execute$lambda.prototype.constructor = Coroutine$execute$lambda;
    Coroutine$execute$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$execute.execute_8pmvt0$(this.local$closure$context, Unit, this);
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
    function execute$lambda(closure$context_0, this$execute_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$execute$lambda(closure$context_0, this$execute_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function ($receiver, context, continuation) {
      Kotlin.suspendCall(initContextInDebugMode(execute$lambda(context, $receiver), Kotlin.coroutineReceiver()));
    };
  }));
  function PipelineContext(context) {
    this.context = context;
  }
  PipelineContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'PipelineContext', interfaces: [CoroutineScope]};
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    if (debugMode === void 0)
      debugMode = false;
    if (debugMode) {
      return new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      return new SuspendFunctionGun(subject, context, interceptors);
    }
  }
  function PipelinePhase(name) {
    this.name = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.name + "')";
  };
  PipelinePhase.$metadata$ = {kind: Kind_CLASS, simpleName: 'PipelinePhase', interfaces: []};
  function InvalidPhaseException(message) {
    Throwable.call(this);
    this.message_qcnek0$_0 = message;
    this.cause_hz8mdu$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'InvalidPhaseException';
  }
  Object.defineProperty(InvalidPhaseException.prototype, 'message', {get: function () {
    return this.message_qcnek0$_0;
  }});
  Object.defineProperty(InvalidPhaseException.prototype, 'cause', {get: function () {
    return this.cause_hz8mdu$_0;
  }});
  InvalidPhaseException.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvalidPhaseException', interfaces: [Throwable]};
  function PipelinePhaseRelation() {
  }
  function PipelinePhaseRelation$After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo = relativeTo;
  }
  PipelinePhaseRelation$After.$metadata$ = {kind: Kind_CLASS, simpleName: 'After', interfaces: [PipelinePhaseRelation]};
  function PipelinePhaseRelation$Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo = relativeTo;
  }
  PipelinePhaseRelation$Before.$metadata$ = {kind: Kind_CLASS, simpleName: 'Before', interfaces: [PipelinePhaseRelation]};
  function PipelinePhaseRelation$Last() {
    PipelinePhaseRelation$Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  PipelinePhaseRelation$Last.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Last', interfaces: [PipelinePhaseRelation]};
  var PipelinePhaseRelation$Last_instance = null;
  function PipelinePhaseRelation$Last_getInstance() {
    if (PipelinePhaseRelation$Last_instance === null) {
      new PipelinePhaseRelation$Last();
    }
    return PipelinePhaseRelation$Last_instance;
  }
  PipelinePhaseRelation.$metadata$ = {kind: Kind_CLASS, simpleName: 'PipelinePhaseRelation', interfaces: []};
  function recoverStackTraceBridge(exception, continuation) {
    try {
      return withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return exception;
      } else
        throw _;
    }
  }
  function StackWalkingFailed() {
    StackWalkingFailed_instance = this;
  }
  StackWalkingFailed.prototype.failedToCaptureStackFrame = function () {
    throw IllegalStateException_init(('Failed to capture stack frame. This is usually happens when a coroutine is running so' + ' the frame stack is changing quickly ' + 'and the coroutine debug agent is unable to capture it concurrently.' + ' You may retry running your test to see this particular trace.').toString());
  };
  StackWalkingFailed.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StackWalkingFailed', interfaces: []};
  var StackWalkingFailed_instance = null;
  function StackWalkingFailed_getInstance() {
    if (StackWalkingFailed_instance === null) {
      new StackWalkingFailed();
    }
    return StackWalkingFailed_instance;
  }
  function StackWalkingFailedFrame() {
    StackWalkingFailedFrame_instance = this;
  }
  Object.defineProperty(StackWalkingFailedFrame.prototype, 'callerFrame', {configurable: true, get: function () {
    return null;
  }});
  StackWalkingFailedFrame.prototype.getStackTraceElement = function () {
    return createStackTraceElement(getKClass(StackWalkingFailed), getCallableRef('failedToCaptureStackFrame', function ($receiver) {
      return $receiver.failedToCaptureStackFrame(), Unit;
    }.bind(null, StackWalkingFailed_getInstance())).callableName, 'StackWalkingFailed.kt', 8);
  };
  Object.defineProperty(StackWalkingFailedFrame.prototype, 'context', {configurable: true, get: function () {
    return coroutines_0.EmptyCoroutineContext;
  }});
  StackWalkingFailedFrame.prototype.resumeWith_tl1gpc$ = function (result) {
    StackWalkingFailed_getInstance().failedToCaptureStackFrame();
  };
  StackWalkingFailedFrame.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StackWalkingFailedFrame', interfaces: [Continuation, CoroutineStackFrame]};
  var StackWalkingFailedFrame_instance = null;
  function StackWalkingFailedFrame_getInstance() {
    if (StackWalkingFailedFrame_instance === null) {
      new StackWalkingFailedFrame();
    }
    return StackWalkingFailedFrame_instance;
  }
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.blocks_0 = blocks;
    this.continuation_0 = new SuspendFunctionGun$continuation$ObjectLiteral(this);
    this.subject_vl1hkm$_0 = initial;
    this.suspensions_0 = Kotlin.newArray(this.blocks_0.size, null);
    this.lastSuspensionIndex_0 = -1;
    this.index_0 = 0;
  }
  Object.defineProperty(SuspendFunctionGun.prototype, 'coroutineContext', {configurable: true, get: function () {
    return this.continuation_0.context;
  }});
  Object.defineProperty(SuspendFunctionGun.prototype, 'subject', {configurable: true, get: function () {
    return this.subject_vl1hkm$_0;
  }, set: function (subject) {
    this.subject_vl1hkm$_0 = subject;
  }});
  SuspendFunctionGun.prototype.finish = function () {
    this.index_0 = this.blocks_0.size;
  };
  function SuspendFunctionGun$proceed$lambda(this$SuspendFunctionGun) {
    return function (continuation) {
      if (this$SuspendFunctionGun.index_0 === this$SuspendFunctionGun.blocks_0.size)
        return this$SuspendFunctionGun.subject;
      this$SuspendFunctionGun.addContinuation_0(continuation);
      if (this$SuspendFunctionGun.loop_0(true)) {
        this$SuspendFunctionGun.discardLastRootContinuation_0();
        return this$SuspendFunctionGun.subject;
      }
      return COROUTINE_SUSPENDED;
    };
  }
  SuspendFunctionGun.prototype.proceed = function (continuation) {
    return SuspendFunctionGun$proceed$lambda(this)(continuation);
  };
  SuspendFunctionGun.prototype.proceedWith_trkh7z$ = function (subject, continuation) {
    this.subject = subject;
    return this.proceed(continuation);
  };
  SuspendFunctionGun.prototype.execute_trkh7z$ = function (initial, continuation) {
    this.index_0 = 0;
    if (this.index_0 === this.blocks_0.size)
      return initial;
    this.subject = initial;
    if (this.lastSuspensionIndex_0 >= 0)
      throw IllegalStateException_init('Already started');
    return this.proceed(continuation);
  };
  SuspendFunctionGun.prototype.loop_0 = function (direct) {
    do {
      var currentIndex = this.index_0;
      if (currentIndex === this.blocks_0.size) {
        if (!direct) {
          this.resumeRootWith_0(new Result(this.subject));
          return false;
        }
        return true;
      }
      this.index_0 = currentIndex + 1 | 0;
      var next = this.blocks_0.get_za3lpa$(currentIndex);
      try {
        var result = next(this, this.subject, this.continuation_0);
        if (result === COROUTINE_SUSPENDED)
          return false;
      } catch (cause) {
        if (Kotlin.isType(cause, Throwable)) {
          this.resumeRootWith_0(new Result(createFailure(cause)));
          return false;
        } else
          throw cause;
      }
    }
     while (true);
  };
  SuspendFunctionGun.prototype.resumeRootWith_0 = function (result) {
    var tmp$;
    if (this.lastSuspensionIndex_0 < 0) {
      throw IllegalStateException_init('No more continuations to resume'.toString());
    }
    var next = ensureNotNull(this.suspensions_0[this.lastSuspensionIndex_0]);
    this.suspensions_0[tmp$ = this.lastSuspensionIndex_0, this.lastSuspensionIndex_0 = tmp$ - 1 | 0, tmp$] = null;
    if (!result.isFailure) {
      next.resumeWith_tl1gpc$(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(result.exceptionOrNull()), next);
      next.resumeWith_tl1gpc$(new Result(createFailure(exception)));
    }
  };
  SuspendFunctionGun.prototype.discardLastRootContinuation_0 = function () {
    var tmp$;
    if (this.lastSuspensionIndex_0 < 0)
      throw IllegalStateException_init('No more continuations to resume');
    this.suspensions_0[tmp$ = this.lastSuspensionIndex_0, this.lastSuspensionIndex_0 = tmp$ - 1 | 0, tmp$] = null;
  };
  SuspendFunctionGun.prototype.addContinuation_0 = function (continuation) {
    this.suspensions_0[this.lastSuspensionIndex_0 = this.lastSuspensionIndex_0 + 1 | 0, this.lastSuspensionIndex_0] = continuation;
  };
  function SuspendFunctionGun$continuation$ObjectLiteral(this$SuspendFunctionGun) {
    this.this$SuspendFunctionGun = this$SuspendFunctionGun;
    this.currentIndex = -2147483648;
  }
  Object.defineProperty(SuspendFunctionGun$continuation$ObjectLiteral.prototype, 'callerFrame', {configurable: true, get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.peekContinuation_0(), CoroutineStackFrame) ? tmp$ : null;
  }});
  SuspendFunctionGun$continuation$ObjectLiteral.prototype.getStackTraceElement = function () {
    return null;
  };
  SuspendFunctionGun$continuation$ObjectLiteral.prototype.peekContinuation_0 = function () {
    var tmp$;
    if (this.currentIndex === -2147483648)
      this.currentIndex = this.this$SuspendFunctionGun.lastSuspensionIndex_0;
    if (this.currentIndex < 0) {
      this.currentIndex = -2147483648;
      return null;
    }
    try {
      tmp$ = this.this$SuspendFunctionGun.suspensions_0[this.currentIndex];
      if (tmp$ == null) {
        return StackWalkingFailedFrame_getInstance();
      }
      var result = tmp$;
      this.currentIndex = this.currentIndex - 1 | 0;
      return result;
    } catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return StackWalkingFailedFrame_getInstance();
      } else
        throw _;
    }
  };
  Object.defineProperty(SuspendFunctionGun$continuation$ObjectLiteral.prototype, 'context', {configurable: true, get: function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = this.this$SuspendFunctionGun.suspensions_0[this.this$SuspendFunctionGun.lastSuspensionIndex_0]) != null ? tmp$.context : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init('Not started'.toString());
    }
    return tmp$_1;
  }});
  SuspendFunctionGun$continuation$ObjectLiteral.prototype.resumeWith_tl1gpc$ = function (result) {
    if (result.isFailure) {
      this.this$SuspendFunctionGun.resumeRootWith_0(new Result(createFailure(ensureNotNull(result.exceptionOrNull()))));
      return;
    }
    this.this$SuspendFunctionGun.loop_0(false);
  };
  SuspendFunctionGun$continuation$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CoroutineStackFrame, Continuation]};
  SuspendFunctionGun.$metadata$ = {kind: Kind_CLASS, simpleName: 'SuspendFunctionGun', interfaces: [PipelineContext]};
  function TypeInfo(type, reifiedType, kotlinType) {
    if (kotlinType === void 0)
      kotlinType = null;
    this.type = type;
    this.reifiedType = reifiedType;
    this.kotlinType = kotlinType;
  }
  TypeInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeInfo', interfaces: []};
  TypeInfo.prototype.component1 = function () {
    return this.type;
  };
  TypeInfo.prototype.component2 = function () {
    return this.reifiedType;
  };
  TypeInfo.prototype.component3 = function () {
    return this.kotlinType;
  };
  TypeInfo.prototype.copy_yupgpq$ = function (type, reifiedType, kotlinType) {
    return new TypeInfo(type === void 0 ? this.type : type, reifiedType === void 0 ? this.reifiedType : reifiedType, kotlinType === void 0 ? this.kotlinType : kotlinType);
  };
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + Kotlin.toString(this.type) + (', reifiedType=' + Kotlin.toString(this.reifiedType)) + (', kotlinType=' + Kotlin.toString(this.kotlinType)) + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.reifiedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.kotlinType) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.reifiedType, other.reifiedType) && Kotlin.equals(this.kotlinType, other.kotlinType)))));
  };
  function Attributes_0(concurrent) {
    if (concurrent === void 0)
      concurrent = false;
    return new AttributesJs();
  }
  function AttributesJs() {
    this.map_0 = LinkedHashMap_init();
  }
  AttributesJs.prototype.getOrNull_yzaw86$ = function (key) {
    var tmp$;
    return (tmp$ = this.map_0.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  AttributesJs.prototype.contains_w48dwb$ = function (key) {
    return this.map_0.containsKey_11rb$(key);
  };
  AttributesJs.prototype.put_uuntuo$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  AttributesJs.prototype.remove_yzaw86$ = function (key) {
    this.map_0.remove_11rb$(key);
  };
  AttributesJs.prototype.computeIfAbsent_u4q9l2$ = function (key, block) {
    var tmp$;
    if ((tmp$ = this.map_0.get_11rb$(key)) != null) {
      var tmp$_0;
      return Kotlin.isType(tmp$_0 = tmp$, Any) ? tmp$_0 : throwCCE();
    }
    var $receiver = block();
    this.map_0.put_xwzc9p$(key, $receiver);
    return $receiver;
  };
  Object.defineProperty(AttributesJs.prototype, 'allKeys', {configurable: true, get: function () {
    return toList_0(this.map_0.keys);
  }});
  AttributesJs.$metadata$ = {kind: Kind_CLASS, simpleName: 'AttributesJs', interfaces: [Attributes]};
  function unmodifiable($receiver) {
    return $receiver;
  }
  function generateNonce_0() {
    var buffer = new Int8Array(16);
    if (PlatformUtils_getInstance().IS_NODE) {
      get__crypto().randomFillSync(buffer);
    } else {
      get__crypto().getRandomValues(buffer);
    }
    return hex(buffer);
  }
  function _crypto$lambda() {
    if (PlatformUtils_getInstance().IS_NODE) {
      return eval('require')('crypto');
    } else {
      return window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
    }
  }
  var _crypto;
  function get__crypto() {
    return _crypto.value;
  }
  function sha1(bytes) {
    throw IllegalStateException_init('sha1 currently is not supported in ktor-js'.toString());
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp$, tmp$_0;
    this.IS_BROWSER = typeof (tmp$ = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined')) === 'boolean' ? tmp$ : throwCCE();
    this.IS_NODE = typeof (tmp$_0 = (typeof process !== 'undefined' && process.versions != null && process.versions.node != null)) === 'boolean' ? tmp$_0 : throwCCE();
    this.IS_JVM = false;
    this.IS_NATIVE = false;
    this.IS_DEVELOPMENT_MODE = false;
    this.IS_NEW_MM_ENABLED = true;
  }
  PlatformUtils.$metadata$ = {kind: Kind_OBJECT, simpleName: 'PlatformUtils', interfaces: []};
  var PlatformUtils_instance = null;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance === null) {
      new PlatformUtils();
    }
    return PlatformUtils_instance;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CoroutineStackFrame', interfaces: []};
  function createStackTraceElement(kClass, methodName, fileName, lineNumber) {
    return new Any();
  }
  function GMTDate_0(timestamp) {
    if (timestamp === void 0)
      timestamp = null;
    var tmp$, tmp$_0;
    var date = (tmp$_0 = (tmp$ = timestamp != null ? timestamp.toNumber() : null) != null ? new Date(tmp$) : null) != null ? tmp$_0 : new Date();
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var dayOfWeek = WeekDay$Companion_getInstance().from_za3lpa$((date.getUTCDay() + 6 | 0) % 7);
    var month = Month$Companion_getInstance().from_za3lpa$(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), Kotlin.Long.fromNumber(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init('Invalid date timestamp exception: ' + timestamp.toString(), this);
    this.name = 'InvalidTimestampException';
  }
  InvalidTimestampException.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvalidTimestampException', interfaces: [IllegalStateException]};
  function getTimeMillis() {
    return Kotlin.Long.fromNumber((new Date()).getTime());
  }
  function IntellijIdeaDebugDetector() {
    IntellijIdeaDebugDetector_instance = this;
    this.isDebuggerConnected = false;
  }
  IntellijIdeaDebugDetector.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntellijIdeaDebugDetector', interfaces: []};
  var IntellijIdeaDebugDetector_instance = null;
  function IntellijIdeaDebugDetector_getInstance() {
    if (IntellijIdeaDebugDetector_instance === null) {
      new IntellijIdeaDebugDetector();
    }
    return IntellijIdeaDebugDetector_instance;
  }
  function initCauseBridge($receiver, cause) {
  }
  function withCause($receiver, cause) {
    return $receiver;
  }
  function Type() {
  }
  Type.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Type', interfaces: []};
  function JsType() {
    JsType_instance = this;
  }
  JsType.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsType', interfaces: [Type]};
  var JsType_instance = null;
  function JsType_getInstance() {
    if (JsType_instance === null) {
      new JsType();
    }
    return JsType_instance;
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function instanceOf($receiver, type) {
    return type.isInstance_s8jyv4$($receiver);
  }
  function get_platformType($receiver) {
    return JsType_getInstance();
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$util = package$ktor.util || (package$ktor.util = {});
  package$util.AttributeKey = AttributeKey;
  package$util.Attributes = Attributes;
  package$util.putAll_orn3b7$ = putAll;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$util.encodeBase64_964n91$ = encodeBase64_0;
  package$util.encodeBase64_mlrm9h$ = encodeBase64_1;
  package$util.clearFrom_767k4w$ = clearFrom;
  package$util.toBase64_8e50z4$ = toBase64;
  package$util.CaseInsensitiveMap = CaseInsensitiveMap;
  package$util.isLowerCase_myv2d0$ = isLowerCase;
  package$util.toCharArray_pdl1vz$ = toCharArray;
  package$util.caseInsensitiveMap_30y1fr$ = caseInsensitiveMap;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$util.SilentSupervisor_5dx9e$ = SilentSupervisor;
  package$util.hex_fqrh44$ = hex;
  package$util.generateNonce_za3lpa$ = generateNonce;
  package$util.DelegatingMutableSet = DelegatingMutableSet;
  Object.defineProperty(StringValues, 'Companion', {get: StringValues$Companion_getInstance});
  package$util.StringValues = StringValues;
  package$util.StringValuesBuilder = StringValuesBuilder;
  package$util.StringValuesImpl = StringValuesImpl;
  package$util.StringValuesBuilderImpl = StringValuesBuilderImpl;
  package$util.flattenEntries_vr6bp2$ = flattenEntries;
  package$util.appendAll_k10e8h$ = appendAll;
  package$util.toLowerCasePreservingASCIIRules_pdl1vz$ = toLowerCasePreservingASCIIRules;
  package$util.caseInsensitive_7efafi$ = caseInsensitive;
  package$util.CaseInsensitiveString = CaseInsensitiveString;
  var package$cio = package$util.cio || (package$util.cio = {});
  package$cio.ChannelIOException = ChannelIOException;
  var package$collections = package$util.collections || (package$util.collections = {});
  package$collections.CopyOnWriteHashMap = CopyOnWriteHashMap;
  Object.defineProperty(WeekDay, 'MONDAY', {get: WeekDay$MONDAY_getInstance});
  Object.defineProperty(WeekDay, 'TUESDAY', {get: WeekDay$TUESDAY_getInstance});
  Object.defineProperty(WeekDay, 'WEDNESDAY', {get: WeekDay$WEDNESDAY_getInstance});
  Object.defineProperty(WeekDay, 'THURSDAY', {get: WeekDay$THURSDAY_getInstance});
  Object.defineProperty(WeekDay, 'FRIDAY', {get: WeekDay$FRIDAY_getInstance});
  Object.defineProperty(WeekDay, 'SATURDAY', {get: WeekDay$SATURDAY_getInstance});
  Object.defineProperty(WeekDay, 'SUNDAY', {get: WeekDay$SUNDAY_getInstance});
  Object.defineProperty(WeekDay, 'Companion', {get: WeekDay$Companion_getInstance});
  var package$date = package$util.date || (package$util.date = {});
  package$date.WeekDay = WeekDay;
  Object.defineProperty(Month, 'JANUARY', {get: Month$JANUARY_getInstance});
  Object.defineProperty(Month, 'FEBRUARY', {get: Month$FEBRUARY_getInstance});
  Object.defineProperty(Month, 'MARCH', {get: Month$MARCH_getInstance});
  Object.defineProperty(Month, 'APRIL', {get: Month$APRIL_getInstance});
  Object.defineProperty(Month, 'MAY', {get: Month$MAY_getInstance});
  Object.defineProperty(Month, 'JUNE', {get: Month$JUNE_getInstance});
  Object.defineProperty(Month, 'JULY', {get: Month$JULY_getInstance});
  Object.defineProperty(Month, 'AUGUST', {get: Month$AUGUST_getInstance});
  Object.defineProperty(Month, 'SEPTEMBER', {get: Month$SEPTEMBER_getInstance});
  Object.defineProperty(Month, 'OCTOBER', {get: Month$OCTOBER_getInstance});
  Object.defineProperty(Month, 'NOVEMBER', {get: Month$NOVEMBER_getInstance});
  Object.defineProperty(Month, 'DECEMBER', {get: Month$DECEMBER_getInstance});
  Object.defineProperty(Month, 'Companion', {get: Month$Companion_getInstance});
  package$date.Month = Month;
  Object.defineProperty(GMTDate, 'Companion', {get: GMTDate$Companion_getInstance});
  package$date.GMTDate = GMTDate;
  var package$debug = package$util.debug || (package$util.debug = {});
  package$debug.initContextInDebugMode_lnyleu$ = initContextInDebugMode;
  var package$plugins = package$debug.plugins || (package$debug.plugins = {});
  Object.defineProperty(PluginsTrace, 'Key', {get: PluginsTrace$Key_getInstance});
  package$plugins.PluginsTrace = PluginsTrace;
  var package$internal = package$util.internal || (package$util.internal = {});
  var package$pipeline = package$util.pipeline || (package$util.pipeline = {});
  package$pipeline.DebugPipelineContext = DebugPipelineContext;
  Object.defineProperty(PhaseContent, 'Companion', {get: PhaseContent$Companion_getInstance});
  package$pipeline.PhaseContent_init_ctf2er$ = PhaseContent_init;
  package$pipeline.PhaseContent = PhaseContent;
  package$pipeline.Pipeline = Pipeline;
  package$pipeline.PipelineContext = PipelineContext;
  package$pipeline.pipelineContextFor_djf7bn$ = pipelineContextFor;
  package$pipeline.PipelinePhase = PipelinePhase;
  package$pipeline.InvalidPhaseException = InvalidPhaseException;
  PipelinePhaseRelation.After = PipelinePhaseRelation$After;
  PipelinePhaseRelation.Before = PipelinePhaseRelation$Before;
  Object.defineProperty(PipelinePhaseRelation, 'Last', {get: PipelinePhaseRelation$Last_getInstance});
  package$pipeline.PipelinePhaseRelation = PipelinePhaseRelation;
  package$pipeline.recoverStackTraceBridge_5yr8tz$ = recoverStackTraceBridge;
  Object.defineProperty(package$pipeline, 'StackWalkingFailed', {get: StackWalkingFailed_getInstance});
  Object.defineProperty(package$pipeline, 'StackWalkingFailedFrame', {get: StackWalkingFailedFrame_getInstance});
  package$pipeline.SuspendFunctionGun = SuspendFunctionGun;
  var package$reflect = package$util.reflect || (package$util.reflect = {});
  package$reflect.TypeInfo = TypeInfo;
  package$util.AttributesJsFn = Attributes_0;
  package$util.AttributesJs = AttributesJs;
  package$util.unmodifiable_cgavii$ = unmodifiable;
  package$util.generateNonce = generateNonce_0;
  package$util.sha1_fqrh44$ = sha1;
  Object.defineProperty(package$util, 'PlatformUtils', {get: PlatformUtils_getInstance});
  package$util.CoroutineStackFrame = CoroutineStackFrame;
  package$util.createStackTraceElement_svyzhk$ = createStackTraceElement;
  package$date.GMTDate_mts6q2$ = GMTDate_0;
  package$date.InvalidTimestampException = InvalidTimestampException;
  package$date.getTimeMillis = getTimeMillis;
  Object.defineProperty(package$debug, 'IntellijIdeaDebugDetector', {get: IntellijIdeaDebugDetector_getInstance});
  package$internal.initCauseBridge_oh0dqn$ = initCauseBridge;
  package$pipeline.withCause_6zzckt$ = withCause;
  package$reflect.Type = Type;
  Object.defineProperty(package$reflect, 'JsType', {get: JsType_getInstance});
  package$reflect.typeInfoImpl_1lvkm8$ = typeInfoImpl;
  package$reflect.instanceOf_lgjw4r$ = instanceOf;
  package$reflect.get_platformType_op6ljc$ = get_platformType;
  AttributesJs.prototype.get_yzaw86$ = Attributes.prototype.get_yzaw86$;
  AttributesJs.prototype.take_yzaw86$ = Attributes.prototype.take_yzaw86$;
  AttributesJs.prototype.takeOrNull_yzaw86$ = Attributes.prototype.takeOrNull_yzaw86$;
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_MASK = 63;
  BASE64_PAD = 61;
  var array = new Int32Array(256);
  var tmp$;
  tmp$ = array.length - 1 | 0;
  for (var i = 0; i <= tmp$; i++) {
    array[i] = indexOf(BASE64_ALPHABET, toChar(i));
  }
  BASE64_INVERSE_ALPHABET = array;
  digits = toCharArray('0123456789abcdef');
  NONCE_SIZE_IN_BYTES = 16;
  INITIAL_CAPACITY = 32;
  UNDECIDED = 0;
  SUCCESS = 1;
  FAILURE = 2;
  CONDITION_FALSE = new Symbol('CONDITION_FALSE');
  ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
  LIST_EMPTY = new Symbol('LIST_EMPTY');
  REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
  NO_DECISION = new Symbol('NO_DECISION');
  _crypto = lazy(_crypto$lambda);
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-legacy.js.map
