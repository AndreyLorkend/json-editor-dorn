#!/bin/sh
outfile="dist/bundle.js"
minfile="dist/bundle.min.js"
outfile="dist/jsoneditor_new.js"
minfile="dist/jsoneditor.min.js"
docslib="docs/js/jsoneditor.js"
# License & version info, start the containing closure
cat src/intro.js > $outfile
# Simple inheritance
cat src/class.js >> $outfile
# IE9 polyfills
cat src/ie9.js >> $outfile
# Utils like extend, each, and trigger
cat src/utilities.js >> $outfile
# The main JSONEditor class
cat src/core.js >> $outfile
# JSON Schema validator
cat src/validator.js  >> $outfile
# All the editors
cat src/editor.js src/editors/null.js src/editors/string.js src/editors/hidden.js src/editors/number.js src/editors/integer.js >> $outfile
cat src/editors/object.js src/editors/array.js src/editors/table.js src/editors/multiple.js src/editors/enum.js >> $outfile
cat src/editors/select.js src/editors/selectize.js src/editors/multiselect.js >> $outfile
cat src/editors/base64.js src/editors/upload.js src/editors/checkbox.js src/editors/array/selectize.js >> $outfile
# The JS templating engines
# Themes, Icon Libraries and Support of Template Engines
cat src/theme.js src/themes/*.js src/iconlib.js src/iconlibs/*.js src/templates/*.js >> $outfile
# Set the defaults for JSON editor
cat src/defaults.js >> $outfile
# Wrapper for $.fn style initialization
cat src/jquery.js >> $outfile
#  End the closure
cat src/outro.js >> $outfile
# Minify the code
uglifyjs $outfile --source-map -mc -o $minfile
# DOCTOC for Table of Contents in README.md
cp $outfile $docslib
doctoc README.md
