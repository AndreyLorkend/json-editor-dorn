var vOutFile="dist/jsoneditor.js"
//minfile="dist/bundle.min.js"
var vFiles = [];
// PART 1
// (1.1) "intro.js" License & version info, start the containing closure
// (1.2) "class.js" Simple inheritance
// (1.3) "ie9.js"  IE9 polyfills
// (1.4) "utilities.js"  Utils like extend, each, and trigger
// (1.5) "core.js"  The main JSONEditor class
// (1.6) "validator.js"  JSON Schema validator
var a1 = ["src/intro.js","src/class.js","src/ie9.js","src/utilities.js","src/core.js","src/validator.js"];
vFiles = vFiles.concat(a1);
// PART 2 EDITORS
// src/editors/array.js
// src/editors/base64.js
// src/editors/checkbox.js
// src/editors/enum.js
// src/editors/hidden.js
// src/editors/integer.js
// src/editors/multiple.js
// src/editors/multiselect.js
// src/editors/null.js
// src/editors/number.js
// src/editors/object.js
// src/editors/select.js
// src/editors/selectize.js
// src/editors/string.js
// src/editors/table.js
// src/editors/upload.js
// (2.1) "editor,null,hidden,number,integer,"  All the editors
var a2 = ["src/editor.js","src/editors/null.js","src/editors/string.js","src/editors/hidden.js","src/editors/number.js","src/editors/integer.js"];
vFiles = vFiles.concat(a2);
// (2.2) "object,array,table,multiple,enum,,"  All the editors
var a3 = ["src/editors/object.js","src/editors/array.js","src/editors/table.js","src/editors/multiple.js","src/editors/enum.js"];
vFiles = vFiles.concat(a3);
// (2.3) "select,selectize,multiselect"  All the editors
var a4 = ["src/editors/select.js","src/editors/selectize.js","src/editors/multiselect.js"];
vFiles = vFiles.concat(a4);
// (2.3) "base64,upload,array/selectize"  All the editors
var a5 = ["src/editors/base64.js","src/editors/upload.js","src/editors/checkbox.js","src/editors/array/selectize.js"];
vFiles = vFiles.concat(a5);
// PART 3 THEMES
// bootstrap2.js
// bootstrap3.js
// foundation.js
// html.js
// jqueryui.js
// jsoneditor.barebones-theme.js
// (3.1) Themes
var a6 = ["src/theme.js","src/themes/bootstrap2.js","src/themes/bootstrap3.js","src/themes/foundation.js","src/themes/html.js","src/themes/jqueryui.js","src/themes/jsoneditor.barebones-theme.js"];
vFiles = vFiles.concat(a6);
// (3.2) Icon Libraries and Support of Template Engines
var a7 = ["src/iconlib.js","src/iconlibs/bootstrap2.js","src/iconlibs/bootstrap3.js","src/iconlibs/fontawesome3.js","src/iconlibs/fontawesome4.js","src/iconlibs/foundation2.js","src/iconlibs/foundation3.js","src/iconlibs/jqueryui.js"];
vFiles = vFiles.concat(a7);
// (3.3) ".js"  The JS templating engines
var a8 = ["src/templates/default.js","src/templates/ejs.js","src/templates/handlebars.js","src/templates/hogan.js","src/templates/markup.js","src/templates/mustache.js","src/templates/swig.js","src/templates/underscore.js"];
vFiles = vFiles.concat(a8);
// PART 4 EDITORS
// (4.1) "defaults.js"  Set the defaults for JSON editor
var a9 = ["src/defaults.js"];
vFiles = vFiles.concat(a9);
// (4.2) "jquery.js"  Wrapper for $.fn style initialization and outro.js
var a10 = ["src/jquery.js"];
vFiles = vFiles.concat(a10);
// (4.3) ".js"   End the closure
var a11 = ["src/outro.js"];
vFiles = vFiles.concat(a11);
// CONCAT PARTS
// (.) ".js"  Minify the code
// (.) ".js"  DOCTOC for Table of Contents in README.md
//doctoc README.md

var concat = require('file-concat-stream')


function onSuccess(){ console.log('Build of "'+vOutFile+'" done!') }
function onError(error){ console.log('ERROR: Concat Libraries for "'+vOutFile+'" - ', error) }

concat(vFiles, vOutFile , onSuccess, onError);

// Call:
//    npm run compress
// to call the following code:
//    uglifyjs dist/jsoneditor.js --source-map -mc -o dist/jsoneditor.min.js
