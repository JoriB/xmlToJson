# xmlToJson

> Library-free Javascript Singleton to convert ugly XML to JSON. < 1k minified.


## Overview

One of the companies I worked for supplied data via RESTful APIs that returned ugly XML. Who uses XML anymore? Are there other libraries out there? Sure. Many of them are predicated on jQuery or other libraries and the resulting structure sometimes.... meh. Not exactly without some overhead.

I wanted something simple that came as close to native JSON as I could get, so I wrote up this simple Singleton to handle the conversion.

The parser gracefully flattens structures so that attributes and child nodes become properties, groups of nodes become collections, and values are parsed to Booleans and Numbers where appropriate.

## Usage
Include a link to the library in your project. If you are not using a build tool and simply want to include the library in your HTML file, link to the minified version.
```
<script src="/path/to/xmlToJson.min.js"></script>
```
Upon the return of the XML data from the API, or otherwise, pass the full XML document to the `parse()` method and expect the return of that call to supply you with a JSON object.
```
var json = xmlToJson.parse( xmldata );
```