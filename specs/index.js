describe( 'shimixify', function () {
  var transformTools = require( 'browserify-transform-tools' );
  var shimify = require( '../' );
  var path = require( 'path' );

  it( 'should replace calls to require("window") and require("document") by (globa.window) and (global.document)', function () {

    var dummyJsFile = path.resolve( __dirname, '../testFixtures/testWithConfig/dummy.js' );

    var content = 'var win = require("window"); var doc = require("document");';
    var deps = {
      'window': 'global.window',
      'document': 'global.document'
    };

    transformTools.runTransform( shimify.configure( deps ), dummyJsFile, {
      content: content
    }, function ( err, transformed ) {
      if ( !err ) {
        expect( transformed ).to.equal( 'var win = (global.window); var doc = (global.document);' );
      }
      throw err;
    }
    );
  } );
} );
