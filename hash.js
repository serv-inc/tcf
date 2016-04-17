var {Cc, Ci} = require("chrome");

// see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsICryptoHash
/** @return MD5-hash of hash_this string */
function hash(hash_this) {
    var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].
        createInstance(Ci.nsIScriptableUnicodeConverter);
    converter.charset = "UTF-8";
    var result = {};
    // data is an array of bytes
    var data = converter.convertToByteArray(hash_this, result);

    var ch = Cc["@mozilla.org/security/hash;1"]
        .createInstance(Ci.nsICryptoHash);
    ch.init(ch.MD5);
    ch.update(data, data.length);
    var hash = ch.finish(false);
    var s = Array.from(hash, 
                       (c, i) => toHexString(hash.charCodeAt(i))).join("");
    console.log('hash value: ' + s);
    return s;
}
exports.hash = hash;

function toHexString(charCode) {
  return ("0" + charCode.toString(16)).slice(-2);
}
