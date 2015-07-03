var sFormat = require( 'stringformat' );
var transformTools = require( 'browserify-transform-tools' );

var options = {
  excludeExtensions: [
    '.json'
  ],
  evaluateArguments: true
};

module.exports = transformTools.makeRequireTransform( 'requireTransform', options, function ( args, opts, cb ) {
  var configData = opts.configData || { };
  var config = configData.config || { };
  var shims = config.shims || { };

  var key = args[ 0 ];

  var foundDep = shims[ key ];

  if ( foundDep ) {
    return cb( null, sFormat( '({0})', foundDep ) );
  }

  cb();
} );
