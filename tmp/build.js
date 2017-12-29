//outfile="dist/bundle.js"
//minfile="dist/bundle.min.js"
// PART 1
// (1.1) "intro.js" License & version info, start the containing closure
// (1.2) "class.js" Simple inheritance
// (1.3) "ie9.js"  IE9 polyfills
// (1.4) "utilities.js"  Utils like extend, each, and trigger
// (1.5) "core.js"  The main JSONEditor class
// (1.6) "validator.js"  JSON Schema validator
uglifyjs src/intro.js src/class.js  src/ie9.js src/utilities.js src/core.js src/validator.js  -o src/parts/p1.js
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
uglifyjs src/editor.js src/editors/null.js src/editors/string.js src/editors/hidden.js src/editors/number.js src/editors/integer.js -o src/parts/p2.js
// (2.2) "object,array,table,multiple,enum,,"  All the editors
uglifyjs src/editors/object.js src/editors/array.js src/editors/table.js src/editors/multiple.js src/editors/enum.js -o src/parts/p3.js
// (2.3) "select,selectize,multiselect"  All the editors
uglifyjs src/editors/select.js src/editors/selectize.js src/editors/multiselect.js -o src/parts/p4.js
// (2.3) "base64,upload,array/selectize"  All the editors
uglifyjs src/editors/base64.js src/editors/upload.js src/editors/checkbox.js src/editors/array/selectize.js -o src/parts/p5.js
// PART 3 THEMES
// bootstrap2.js
// bootstrap3.js
// foundation.js
// html.js
// jqueryui.js
// jsoneditor.barebones-theme.js
// (3.1) Themes
uglifyjs src/theme.js src/themes/bootstrap2.js src/themes/bootstrap3.js src/themes/foundation.js src/themes/html.js src/themes/jqueryui.js src/themes/jsoneditor.barebones-theme.js -o src/parts/p6.js
// (3.2) Icon Libraries and Support of Template Engines
uglifyjs src/iconlib.js src/iconlibs/bootstrap2.js src/iconlibs/bootstrap3.js src/iconlibs/fontawesome3.js src/iconlibs/fontawesome4.js src/iconlibs/foundation2.js src/iconlibs/foundation3.js src/iconlibs/jqueryui.js -o src/parts/p7.js
// (3.3) ".js"  The JS templating engines
uglifyjs src/templates/default.js src/templates/ejs.js src/templates/handlebars.js  src/templates/hogan.js src/templates/markup.js src/templates/mustache.js src/templates/swig.js src/templates/underscore.js  -o src/parts/p8.js
// PART 4 EDITORS
// (4.1) "defaults.js"  Set the defaults for JSON editor
uglifyjs src/defaults.js -o src/parts/p9.js
// (4.2) "jquery.js"  Wrapper for $.fn style initialization and outro.js
uglifyjs src/jquery.js -o src/parts/p10.js
// (4.3) ".js"   End the closure
uglifyjs src/outro.js -o src/parts/p11.js
// CONCAT PARTS
uglifyjs src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js src/parts/p.js  -o dist/bundle_js.js
// (.) ".js"  Minify the code
uglifyjs dist/bundle_js.js --source-map -mc -o dist/bundle_js.min.js
// (.) ".js"  DOCTOC for Table of Contents in README.md
//doctoc README.md
