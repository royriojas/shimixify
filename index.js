var transformTools = require( 'browserify-transform-tools' );
var transformExclude = require( 'browserify-transform-tools-exclude' );

var options = {
  includeExtensions: [
    '.jsx',
    '.js',
    '.es6'
  ],
  evaluateArguments: true
};

var fnTransform = transformExclude( function ( args, opts, cb ) {
  var configData = opts.configData || { };
  var config = configData.config || { };
  var shims = config.shims || { };

  var key = args[ 0 ];

  var foundDep = shims[ key ];

  if ( foundDep ) {
    cb( null, '(' + foundDep + ')' );
    return;
  }

  cb();
} );


module.exports = transformTools.makeRequireTransform( 'shimixify', options, fnTransform );
