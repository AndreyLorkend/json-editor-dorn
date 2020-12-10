JSONEditor.AbstractIconLib = Class.extend({
  imgtag:"img",
  width: 14,
  heigth: 14,
  mapping: {
    "collapse": '',
    "expand": '',
    "delete": '',
    "edit": '',
    "add": '',
    "cancel": '',
    "save": '',
    "moveup": '',
    "movedown": ''
  },
  icon_prefix: '',

  getIconClass: function(key) {
    if(this.mapping[key]) return this.icon_prefix+this.mapping[key];
    else return null;
  },
  getIcon4Image: function(key) {
    var vIcon = this.getIconData(key);

    if(!vIcon) {
      return null;
    } else {
      var img = document.createElement('img');
       //<img src="img/icons-svg/alert-black.png" alt="Girl in a jacket" width="500" height="600">
      img.setAttribute("src", vIcon.src);
      img.setAttribute("width", this.width);
      img.setAttribute("heigth", this.height);
      img.setAttribute("licence", vIcon.license);
      return img;
    }
  },
  getIcon: function(key) {
    if (this.imgtag && (this.imgtag === "img")) {
      return this.getIcon4Image(key);
    } else {
      return this.getIcon4Class(key);
    }
  },
  getIcon4Class: function(key) {
    var iconclass = this.getIconClass(key);

    if(!iconclass) return null;

    var i = document.createElement('i');
    i.className = iconclass;
    return i;
  },
  getIconData: function(key) {
    if (this.icons && this.icons[key]) {
      return this.icons[key];
    } else {
      console.error("ERROR: Icon not found for key '" + key + "' in src/iconlib.js");
      return null;
    }
  }

});
