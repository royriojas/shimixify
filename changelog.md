
# shimixify - Changelog
## v1.1.0
- **Build Scripts Changes**
  - Release v1.1.0 - [92ab8ff]( https://github.com/royriojas/shimixify/commit/92ab8ff ), [royriojas](https://github.com/royriojas), 03/07/2015 00:13:41

    
  - Update deps - [5668083]( https://github.com/royriojas/shimixify/commit/5668083 ), [royriojas](https://github.com/royriojas), 02/07/2015 23:24:44

    
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
    
#### changelog
- **Build Scripts Changes**
  - generated changelog - [71f9bb1]( https://github.com/royriojas/shimixify/commit/71f9bb1 ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:09:01

    
## v1.0.3
- **Build Scripts Changes**
  - Release v1.0.3 - [4ca1fa6]( https://github.com/royriojas/shimixify/commit/4ca1fa6 ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:08:32

    
#### changelog
- **Build Scripts Changes**
  - Enable the changelog generation - [c5044e3]( https://github.com/royriojas/shimixify/commit/c5044e3 ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:08:22

    
## v1.0.2
- **Build Scripts Changes**
  - Release v1.0.2 - [6153bed]( https://github.com/royriojas/shimixify/commit/6153bed ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:05:18

    
  - First version - [bd222a4]( https://github.com/royriojas/shimixify/commit/bd222a4 ), [Roy Riojas](https://github.com/Roy Riojas), 13/03/2015 12:40:43

    
- **Documentation**
  - Fix require path for shimixify - [38151b3]( https://github.com/royriojas/shimixify/commit/38151b3 ), [Roy Riojas](https://github.com/Roy Riojas), 14/03/2015 20:45:13

    
- **Other changes**
  - Create README.md - [8b7594d]( https://github.com/royriojas/shimixify/commit/8b7594d ), [Roy Riojas](https://github.com/Roy Riojas), 13/03/2015 04:02:19

    
  - Initial commit - [801068f]( https://github.com/royriojas/shimixify/commit/801068f ), [Roy Riojas](https://github.com/Roy Riojas), 13/03/2015 04:02:08

    
