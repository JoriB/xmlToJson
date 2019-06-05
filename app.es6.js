import { XmlToJson } from './XmlToJson.es6.js';

const url = 'example.xml';

fetch(url)
  .then(res => res.text())
  .then(str => {
    // console.log( 'before', str );
    let json = new XmlToJson(str);
    document.getElementById('xmltext').value = str;
  })
  .catch(function (e) {
    console.log('ERROR', e);
  });