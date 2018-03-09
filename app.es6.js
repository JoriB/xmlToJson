import { XmlToJson } from './XmlToJson.es6';

const url = 'http://localhost/xmlToJson/example.xml';

fetch( url )
    .then( res => res.text() )
    .then( str => {
        // console.log( 'before', str );
        let json = new XmlToJson( str );
        console.log( 'The xml converted to json', json );
    })
    .catch( function ( e ) {
        console.log( 'ERROR', e );
    });