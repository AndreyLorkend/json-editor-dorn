//#################################################################
//# Javascript Class: Editor4JSON()
//#       SuperClass: 
//#   Class Filename: editor4json.js
//#
//# Author of Class:      Engelbert Niehaus
//# email:                niehaus@uni-landau.de
//# created               15.6.2017
//# last modifications    2017/06/02 4:56:59
//# GNU Public License V3 - OpenSource
//#
//# created with JavaScript Class Creator JSCC
//#     https://niebert.github.io/JavascriptClassGenerator
//#################################################################

//---------------------------------------------------------------------
//---Store File in Subdirectory /js and import this Class in HTML-File with
// SCRIPT-Tag:  LANGUAGE="JavaScript" SRC="js/editor4json.js"
//---------------------------------------------------------------------
//---Constructor of Class Editor4JSON()
// Call the constructor for creating an instance of class Editor4JSON
// by the following command in HTML-file that imports this class
// var vMyInstance = new Editor4JSON();
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
//---------------------------------------------------------------------
// If you want to access the attributes of Editor4JSON, use
// the attribute name with a leading "this." in the definition of method of Editor4JSON, e.g.
// this.aName = "Hello World";
//---------------------------------------------------------------------
//----Methods----------------------------------------------------------
//---------------------------------------------------------------------
// (1) If you want to assign definitions of methods for single instance of the class 'Editor4JSON'
// they are defined with
//    this.my_method = function (pPar1,pPar2)
// this approach allows to overwrite the method definition of single instances dynamically.
//---------------------------------------------------------------------
// (2) A prototype definition of methods for 'Editor4JSON' will be set by
// use the method's name and extend it with 'Editor4JSON'.
//    Editor4JSON.prototype.my_method = function (pPar1,pPar2)
// This approach consumes less memory for instances.
//---------------------------------------------------------------------

	// no superclass defined


function Editor4JSON () {
	// no superclass defined

    //---------------------------------------------------------------------
    //---Attributes of Class "Editor4JSON()"
    //---------------------------------------------------------------------
	//---PUBLIC: aEditor (JSONEditor): is the instance of the JSON editor developed by Jeremy Dorn
	this.aEditor = null;
	//---PUBLIC: aData (Array): the attribute 'aData' is a array of JSON records that are edited with the JSON editor by Jeremy Dorn
	this.aData = [];
	//---PUBLIC: current ( ): the attribute 'current' stores the current selected index in the array, -1 means no JSON record selected in array or array is empty
	this.current = -1;
	//---PUBLIC: aSchemaJSON ( ): the attribute 'aSchemaJSON' stores in JSON schema that defines the structure of JSON records in the array
	this.aSchemaJSON = null;
	//---PUBLIC: aEditURL (String): the attribute 'aEditURL' stores the URL to the JSON Editor developed by Jeremy Dorn
	this.aEditURL = "";
	
    //---------------------------------------------------------------------
    //---Methods of Class "Editor4JSON()"
    //---------------------------------------------------------------------
	//----PUBLIC Method: Editor4JSON.init(pDOMID:String,pData:Array,pSchema:Hash)-----
	// init(pDOMID,pData,pSchema)  
	//	pDOMID is the DOM id defines the DOM element where the JSON editor is injected (editor_holder of JSON editor). 
	//	pData is the large array that is edited and 
	//	pSchema defines the JSON schema of a single record in the large thisarray
	//----PUBLIC Method: Editor4JSON.prev()-----
	// prev()  
	//	goto previous record
	//----PUBLIC Method: Editor4JSON.next()-----
	// next()  
	//	Goto next record
	//----PUBLIC Method: Editor4JSON.goto()-----
	// goto()  
	//	goto record with index i
	//----PUBLIC Method: Editor4JSON.first()-----
	// first()  
	//	shows the first element in the large record
	//----PUBLIC Method: Editor4JSON.last()-----
	// last()  
	//	goes to the last record in large array
	//----PUBLIC Method: Editor4JSON.edit()-----
	// edit()  
	//	edit calls the JSON editor of Jeremy Dorn for the selected record. It sets the init value of the JSON editor.  
	//----PUBLIC Method: Editor4JSON.setSchema(pSchemaJSON:Hash)-----
	// setSchema(pSchemaJSON)  
	//	Comment for setSchema
	//----PUBLIC Method: Editor4JSON.getSchema():Hash-----
	// getSchema()  Return: Hash
	//	getSchema() just return the JSON schema this.aSchemaJSON
	//----PUBLIC Method: Editor4JSON.export(pFile:String,pJSON:Object)-----
	// export(pFile,pJSON)  
	//	export() uses the FileSaver.js to create a download of exported JSON pJSON after the JSON was stringified
	//----PUBLIC Method: Editor4JSON.exportData()-----
	// exportData()  
	//	exportData() exports the JSON data in this.aData as file. The filename is defined by this.aName. if aName="myjson" the filename is "myjson.json"
	//----PUBLIC Method: Editor4JSON.exportSchema()-----
	// exportSchema()  
	//	exportSchema() exports the JSON schema in this.aSchemaJSON as file. The filename is defined by this.aName. if aName="myjson" the filename is "myjson_schema.json"
	//----PUBLIC Method: Editor4JSON.getLocalStorageID4Name(pName:String):String-----
	// getLocalStorageID4Name(pName)  Return: String
	//	the LocalStorageID for an item may not contain a dot . Name
	//----PUBLIC Method: Editor4JSON.loadLS()-----
	// loadLS()  
	//	loadLS() loads the JSON file from Local Storage
	//----PUBLIC Method: Editor4JSON.saveLS()-----
	// saveLS()  
	//	saveLS() stores the JSON file in Local Storage
	//----PUBLIC Method: Editor4JSON.validate():Boolean-----
	// validate()  Return: Boolean
	//	validates the current record in the large array against the schema. 
	//	Returns true if record in JSON editor valid according to the JSON schema in this.aSchemaJSON
	//----PUBLIC Method: Editor4JSON.onChange()-----
	// onChange()  
	//	handle onChange event from the JSON editor developed by Jeremy Dorn. This method updates the content in the editor with the record in this.aData[this.current] 
	


}
//-------------------------------------------------------------------------
//---END Constructor of Class "Editor4JSON()"
//-------------------------------------------------------------------------

//
//#################################################################
//# PUBLIC Method: init()
//#    used in Class: Editor4JSON
//# Parameter:
//#    pDOMID:String
//#    pData:Array
//#    pSchema:Hash
//# Comment:
//#    pDOMID is the DOM id defines the DOM element where the JSON editor is injected (editor_holder of JSON editor). 
//#    pData is the large array that is edited and 
//#    pSchema defines the JSON schema of a single record in the large thisarray
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.init = function (pDOMID,pData,pSchema) {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: init(pDOMID:String,pData:Array,pSchema:Hash)");
  // alert("js/editor4json.js - Call: init(pDOMID:String,pData:Array,pSchema:Hash)");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.init(pDOMID,pData,pSchema);
  //-------------------------------------------------------

  this.aSchema = pSchema;
  this.aData = pData
  this.aEditorConfig = {
          // Enable fetching schemas via ajax
          ajax: true,
          
          // The schema for the editor
          schema: pSchema,
          
         
          // Disable additional properties
          no_additional_properties: true,
          
          // Require all properties by default
          required_by_default: true
        };
  // Seed the form with a starting value for the Editor if pData contains at least one record
   if (pData.length > 0) {
      this.aEditorConfig.startval = pData[0]
  };
  // create the editor
  this.aEditor = new JSONEditor(document.getElementById(pDOMID),this.aEditorConfig);
  
  // Hook up the validation indicator to update its 
  // status whenever the editor changes
  this.aEditor.on('change',function() {
          // upadte the currect record in large array
          vApp.aEditor4JSON.onChange()
        });
  
  

};
//----End of Method init Definition


//#################################################################
//# PUBLIC Method: prev()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    goto previous record
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.prev = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: prev()");
  // alert("js/editor4json.js - Call: prev()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.prev();
  //-------------------------------------------------------

  if (this.current > 0) {
      this.current--;
  };
  this.edit();

};
//----End of Method prev Definition


//#################################################################
//# PUBLIC Method: next()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    Goto next record
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.next = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: next()");
  // alert("js/editor4json.js - Call: next()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.next();
  //-------------------------------------------------------

  if (this.current < (this.data.length-1)) {
      this.current++;
  };
  this.edit();

};
//----End of Method next Definition


//#################################################################
//# PUBLIC Method: goto()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    goto record with index i
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.goto = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: goto()");
  // alert("js/editor4json.js - Call: goto()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.goto();
  //-------------------------------------------------------

  if ((i >= 0) && (i < this.aData.length)) {
      this.current = i;
  } else if (this.aData.length > 0) {
      this.current = 0;
  } else {
      this.current = -1;
  };
  this.edit();

};
//----End of Method goto Definition


//#################################################################
//# PUBLIC Method: first()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    shows the first element in the large record
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.first = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: first()");
  // alert("js/editor4json.js - Call: first()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.first();
  //-------------------------------------------------------

  this.current = 0;
  this.edit()

};
//----End of Method first Definition


//#################################################################
//# PUBLIC Method: last()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    goes to the last record in large array
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.last = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: last()");
  // alert("js/editor4json.js - Call: last()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.last();
  //-------------------------------------------------------

  this.current = this.aData.length - 1;
  this.edit();

};
//----End of Method last Definition


//#################################################################
//# PUBLIC Method: edit()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    edit calls the JSON editor of Jeremy Dorn for the selected record. It sets the init value of the JSON editor.  
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.edit = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: edit()");
  // alert("js/editor4json.js - Call: edit()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.edit();
  //-------------------------------------------------------

  if (this.aData.length == 0) {
      // push an empty JSON hash
      console.log("pData is empty create an empty element in the large array")
      this.aData.push({});
  };
  if (this.current < 0) {
      console.log("current index in large array is not for the large array - use first element")
      this.current = 0;
  };
  this.aEditor.setValue(this.aData[this.current]);

};
//----End of Method edit Definition


//#################################################################
//# PUBLIC Method: setSchema()
//#    used in Class: Editor4JSON
//# Parameter:
//#    pSchemaJSON:Hash
//# Comment:
//#    Comment for setSchema
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.setSchema = function (pSchemaJSON) {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: setSchema(pSchemaJSON:Hash)");
  // alert("js/editor4json.js - Call: setSchema(pSchemaJSON:Hash)");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.setSchema(pSchemaJSON);
  //-------------------------------------------------------

  //----------- INSERT YOUR CODE HERE ---------------

};
//----End of Method setSchema Definition


//#################################################################
//# PUBLIC Method: getSchema()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    getSchema() just return the JSON schema this.aSchemaJSON
//# Return: Hash
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.getSchema = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: getSchema():Hash");
  // alert("js/editor4json.js - Call: getSchema():Hash");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.getSchema();
  //-------------------------------------------------------

  return this.aSchemaJSON;

};
//----End of Method getSchema Definition


//#################################################################
//# PUBLIC Method: export()
//#    used in Class: Editor4JSON
//# Parameter:
//#    pFile:String
//#    pJSON:Object
//# Comment:
//#    export() uses the FileSaver.js to create a download of exported JSON pJSON after the JSON was stringified
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.export = function (pFile,pJSON) {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: export(pFile:String,pJSON:Object)");
  // alert("js/editor4json.js - Call: export(pFile:String,pJSON:Object)");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.export(pFile,pJSON);
  //-------------------------------------------------------

  var vStringJSON = JSON.stringify(pJSON,null,4);
  // File is a Javascript Class defined in FileSaver.js
  var file = new File([vStringJSON], {type: "text/plain;charset=utf-8"});
  // method saveAs() is defined in FileSaver.js so import filesaver.js and blob.js to your Javascript project
  saveAs(file,pFilename);
  

};
//----End of Method export Definition


//#################################################################
//# PUBLIC Method: exportData()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    exportData() exports the JSON data in this.aData as file. The filename is defined by this.aName. if aName="myjson" the filename is "myjson.json"
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.exportData = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: exportData()");
  // alert("js/editor4json.js - Call: exportData()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.exportData();
  //-------------------------------------------------------

  this.export(this.aName+".json",this.aData)

};
//----End of Method exportData Definition


//#################################################################
//# PUBLIC Method: exportSchema()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    exportSchema() exports the JSON schema in this.aSchemaJSON as file. The filename is defined by this.aName. if aName="myjson" the filename is "myjson_schema.json"
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.exportSchema = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: exportSchema()");
  // alert("js/editor4json.js - Call: exportSchema()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.exportSchema();
  //-------------------------------------------------------

  this.export(this.aName+"_schema.json",this.aSchemaJSON)

};
//----End of Method exportSchema Definition


//#################################################################
//# PUBLIC Method: getLocalStorageID4Name()
//#    used in Class: Editor4JSON
//# Parameter:
//#    pName:String
//# Comment:
//#    the LocalStorageID for an item may not contain a dot . Name
//# Return: String
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.getLocalStorageID4Name = function (pName) {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: getLocalStorageID4Name(pName:String):String");
  // alert("js/editor4json.js - Call: getLocalStorageID4Name(pName:String):String");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.getLocalStorageID4Name(pName);
  //-------------------------------------------------------

  return pName.replace(/[^A-Za-z0-9]/g,"_");
  

};
//----End of Method getLocalStorageID4Name Definition


//#################################################################
//# PUBLIC Method: loadLS()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    loadLS() loads the JSON file from Local Storage
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.loadLS = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: loadLS()");
  // alert("js/editor4json.js - Call: loadLS()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.loadLS();
  //-------------------------------------------------------

  if (typeof(Storage) != "undefined") {
      // Store
      if (typeof(localStorage.getItem(this.aName)) !== undefined) {
        console.log("JSON-DB '"+this.aName+"' try loading from Local Storage");
        var vJSONstring = localStorage.getItem(this.aName);
  	  if (!vJSONstring) {
          console.log("JSON-DB '"+this.aName+"' undefined in Local Storage.\nSave default as JSON");
          localStorage.setItem(this.aName, JSON.stringify(this.aData));
  	  } else {
          console.log("parse DB '"+this.aName+"') from LocalStorage JSONstring='"+vJSONstring.substr(0,120)+"...'");
          this.aData = JSON.parse(vJSONstring);
  	  }
      } else {
        console.log("JSON-DB '"+this.aName+"' is undefined in Local Storage.\nSave default as JSON");
        localStorage.setItem(vDBID, JSON.stringify(this.aData));
      };
  }	 else {
      console.log("WARNING: Sorry, your browser does not support Local Storage of JSON Database. Use Firefox ...");
  };

};
//----End of Method loadLS Definition


//#################################################################
//# PUBLIC Method: saveLS()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    saveLS() stores the JSON file in Local Storage
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.saveLS = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: saveLS()");
  // alert("js/editor4json.js - Call: saveLS()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.saveLS();
  //-------------------------------------------------------

  if (typeof(Storage) != "undefined") {
      // Store
      if (typeof(this.aData) != undefined) {
        console.log("JSON-DB '"+this.aName+"' is defined, JSONDB in  Local Storage");
        if (this.aData) {
          //console.log("pJSONDB '"+this.aName+"' is saved to Local Storage");
          var vJSONstring = JSON.stringify(this.aData)
          console.log("saveLS('"+this.aName+"') JSONstring='"+vJSONstring.substr(0,120)+"...'");
          localStorage.setItem(this.aName,vJSONstring);
        } else {
          console.log("this.aData in Editor4JSON is NOT defined");
        }
      } else {
        console.log("pJSONDB is undefined");
      };
    }	 else {
      console.log("WARNING: Sorry, your browser does not support Local Storage of JSON Database. Use Firefox ...");
    }

};
//----End of Method saveLS Definition


//#################################################################
//# PUBLIC Method: validate()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    validates the current record in the large array against the schema. 
//#    Returns true if record in JSON editor valid according to the JSON schema in this.aSchemaJSON
//# Return: Boolean
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.validate = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: validate():Boolean");
  // alert("js/editor4json.js - Call: validate():Boolean");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.validate();
  //-------------------------------------------------------

  
  // Get an array of errors from the validator
  //var errors = editor.validate();
  var errors = this.aEditor.validate();
  var vValid = true;
  if (errors.length) {
    vValid = false;
  };
  var indicator = document.getElementById('valid_indicator');
  if (!indicator) {
      console.log("DOM element 'valid_indicator' does not exist")
  } else {
      if (errors.length) {
          // Not valid
          indicator.style.color = 'red';
          indicator.textContent = "not valid";
      } else {
          // Valid
          indicator.style.color = 'green';
          indicator.textContent = "valid";
      }
  };
  return vValid;
  

};
//----End of Method validate Definition


//#################################################################
//# PUBLIC Method: onChange()
//#    used in Class: Editor4JSON
//# Parameter:
//#    
//# Comment:
//#    handle onChange event from the JSON editor developed by Jeremy Dorn. This method updates the content in the editor with the record in this.aData[this.current] 
//# 
//# created with JSCC  2017/03/05 18:13:28
//# last modifications 2017/06/02 4:56:59
//#################################################################

Editor4JSON.prototype.onChange = function () {
  //----Debugging------------------------------------------
  // console.log("js/editor4json.js - Call: onChange()");
  // alert("js/editor4json.js - Call: onChange()");
  //----Create Object/Instance of Editor4JSON----
  //    var vMyInstance = new Editor4JSON();
  //    vMyInstance.onChange();
  //-------------------------------------------------------

  var vValid = this.validate();
  if (this.current < 0) {
      this.current = 0
  };
  // it is possible to make the update of aData dependent on the return boolean of validate
  // with the following update the JSON editor is updated if valid or not
  this.aData[this.current] = this.aEditor.getValue();

};
//----End of Method onChange Definition


    
//-------------------------------------------
//---End Definition of Class-----------------
// JS Class: Editor4JSON
//-------------------------------------------
