/*! JSON Editor v0.7.28 - JSON Schema -> HTML Editor
 * By Jeremy Dorn - https://github.com/jdorn/json-editor/
 * Released under the MIT license
 *
 * Date: 2016-08-07
 */

/**
 * See README.md for requirements and usage info
 */

(function() {
  // -- 1 -- Class Management, IE, Utilities and Validatior
  // (1.1) "class.js" Simple inheritance
  require('./class.js');
  // (1.2) "ie9.js"  IE9 polyfills
  require('./ie9.js');
  // (1.3) "utilities.js"  Utils like extend, each, and trigger
  require("./utilities.js");
  // (1.4) "core.js"  The main JSONEditor class
  require("./core.js");
  // (1.5) "validator.js"  JSON Schema validator
  require("./validator.js");
  //-- 2 -- All Editors
  require("./editors/array.js");
  require("./editors/base64.js");
  require("./editors/checkbox.js");
  require("./editors/enum.js");
  require("./editors/hidden.js");
  require("./editors/integer.js");
  require("./editors/multiple.js");
  require("./editors/multiselect.js");
  require("./editors/null.js");
  require("./editors/number.js");
  require("./editors/object.js");
  require("./editors/select.js");
  require("./editors/selectize.js");
  require("./editors/string.js");
  require("./editors/table.js");
  require("./editors/upload.js");

  //--- PART 3 THEMES  ---
  require("./theme.js");
  require("./themes/bootstrap2.js");
  require("./themes/bootstrap3.js");
  require("./themes/foundation.js");
  require("./themes/html.js");
  require("./themes/jqueryui.js");
  require("./themes/jsoneditor.barebones-theme.js");

  //--- PART 4: ICONLIBS ---
  require("./iconlibs/bootstrap2.js");
  require("./iconlibs/bootstrap3.js");
  require("./iconlibs/fontawesome3.js");
  require("./iconlibs/fontawesome4.js");
  require("./iconlibs/foundation2.js");
  require("./iconlibs/foundation3.js");
  require("./iconlibs/jqueryui.js");

  //--- PART 5; TEMPLATES  and Template Engines---
  require("./templates/default.js");
  require("./templates/ejs.js");
  require("./templates/handlebars.js");
  require("./templates/hogan.js");
  require("./templates/markup.js");
  require("./templates/mustache.js");
  require("./templates/swig.js");
  require("./templates/underscore.js");

  //--- PART 6: DEFAULT and JQUERY Wrapper
  // "defaults.js");"  Set the defaults for JSON editor
  require("./defaults.js");
  // "jquery.js"  Wrapper for $.fn style initialization 
  require("./jquery.js");

  window.JSONEditor = JSONEditor;
})();
