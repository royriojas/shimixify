
# shimixify - Changelog
## v1.1.4
- **Features**
  - Add option to exclude certain files from the transformation - [b63d21b]( https://github.com/royriojas/shimixify/commit/b63d21b ), [royriojas](https://github.com/royriojas), 19/07/2015 02:47:28

    
## v1.1.3
- **Build Scripts Changes**
  - Update browserify-transform-tools and removed old unused code - [0e741a8]( https://github.com/royriojas/shimixify/commit/0e741a8 ), [royriojas](https://github.com/royriojas), 17/07/2015 18:15:03

    
## v1.1.1
- **Documentation**
  - make the code block in the Readme rendered as Javascript - [02e768a]( https://github.com/royriojas/shimixify/commit/02e768a ), [royriojas](https://github.com/royriojas), 03/07/2015 00:17:39

    
## v1.1.0
- **Refactoring**
  - Make the dependencies to shim be passed as an argument to the transform - [9f4b1ae]( https://github.com/royriojas/shimixify/commit/9f4b1ae ), [royriojas](https://github.com/royriojas), 02/07/2015 23:33:20

    **BREAKING CHANGE**
    Now the way to configure which modules will be replaced by the global
    shims has changed
    Please use with caution.
    
    Before:
    
    ```javascript
    var shims = {
      react : 'global.react'
    };
    
    var shimify = require( 'shimify' ).configure( shims );
    ```
    
    Now:
    
    ```javascript
    var shims = {
      react : 'global.react'
    };
    
    var shimify = require( 'shimify' ).configure( { shims: shims } );
    //pass the deps to shim
    ```
    
- **Build Scripts Changes**
  - Update deps - [5668083]( https://github.com/royriojas/shimixify/commit/5668083 ), [royriojas](https://github.com/royriojas), 02/07/2015 23:24:44

    
## v1.0.3
#### changelog
- **Build Scripts Changes**
  - Enable the changelog generation - [c5044e3]( https://github.com/royriojas/shimixify/commit/c5044e3 ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:08:22

    
## v1.0.2
- **Documentation**
  - Fix require path for shimixify - [38151b3]( https://github.com/royriojas/shimixify/commit/38151b3 ), [Roy Riojas](https://github.com/Roy Riojas), 14/03/2015 20:45:13

    
- **Build Scripts Changes**
  - First version - [bd222a4]( https://github.com/royriojas/shimixify/commit/bd222a4 ), [Roy Riojas](https://github.com/Roy Riojas), 13/03/2015 12:40:43

    
- **Other changes**
  - Create README.md - [8b7594d]( https://github.com/royriojas/shimixify/commit/8b7594d ), [Roy Riojas](https://github.com/Roy Riojas), 13/03/2015 04:02:19

    
  - Initial commit - [801068f]( https://github.com/royriojas/shimixify/commit/801068f ), [Roy Riojas](https://github.com/Roy Riojas), 13/03/2015 04:02:08

    
