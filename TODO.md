## ToDo

### Using Icons
Using icons with two additional icon libraries requires modifications in `src/iconlib.js` as Abstract Class for using all other iconlibs defined in  `src/iconlibs/*.js`.
* SVG Icons in the Menu - see [CSS tricks to embed SVG as Menu Icons](https://css-tricks.com/lodge/svg/09-svg-data-uris/)
* SVG images are in fact strings with a XML format, so these
* Store the required SVG strings for all icons in a hash so that the string can be accessed by `mapping` attribute of the iconlib class e.g. by `mapping["collapse"]` or `mapping.collapse` you will get the XML string for the `collapse` icon. The value of the mapping would contain the string of the SVG icon.

The JSON editor requires just a few basic icons that can be selected for the repository [Icons4Menu](https://www.github.com/niebert/icons4menu).
```javascript
mapping : {
  collapse: '<svg ... > ... </svg>',
  expand: '<svg ... > ... </svg>',
  "delete": '<svg ... > ... </svg>',
  edit: '<svg ... > ... </svg>',
  add: '<svg ... > ... </svg>',
  cancel: '<svg ... > ... </svg>',
  save: '<svg ... > ... </svg>',
  moveup: '<svg ... > ... </svg>',
  movedown: '<svg ... > ... </svg>'
},
```
* If you want to have these SVG icons as default, add the `mapping` to the abstract class in `src/iconlib.js`.
* If you want to create the new SVG iconlib
The icon will be injected just as `img` tag, that will look in a hard coded way like this:
```html
<img src='data:image/svg+xml;utf8,<svg ... > ... </svg>'>
```

If you want to create that with Javascript in the DOM you can expand the Abstract class with the method `getIconSVG()`. Add this method to the Abstract Class for `iconlibs` in the file `src/iconlib.js`:
```javascript
getIconSVG: function(key,height,width) {
  var icon4dom = null;
  var svg4icon = this.mapping[key];
  if (svg4icon) {
    icon4dom = document.createElement("img");
    icon4dom.src = 'data:image/svg+xml;utf8,' + svg4icon;
    icon4dom.alt = 'Icon '+key;
    if (height) {
      icon4dom.height = height; // e.g. "18px"
    }
    if (width) {
      icon4dom.width = width; // e.g. "18px"
    };
    icon4dom.className = "jsoneditor-svg-icon"
  };
  return icon4dom;
}
```

### Merge with `jsoneditor@jsoneditor`
The repository `jsoneditor` on Github was originally developed by [Jeremy Dorn](https://github.com/jdorn/json-editor) and the development is continued at the [repository `jsoneditor@jsoneditor`](https://github.com/json-editor/json-editor).  
