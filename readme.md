# [RNDM](https://www.rndm.com) Render Plugin: URL Parse

## About

This plugin provides the URL parsing and composition functionality for the [RNDM Render package](https://www.rndm.com/docs/rndm-render).

This plugin is a RNDM wrapper for the wonderful [url-parse](https://github.com/unshiftio/url-parse) library.

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://www.rndm.com/docs/rndm-render) and [RNDM Plugin: Core](https://www.rndm.com/docs/rndm-render/plugin/core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-url-parse
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-url-parse';
```

## Usage

The URL Parse Plugin transforms the URL Parser class into serialisable functions.

### Parse

The parse method takes a URL input and provides an object back giving a break down of the components of the URL. These are:

**protocol:** The protocol scheme of the URL (e.g. http:).

**slashes:** A boolean which indicates whether the protocol is followed by two forward slashes (//).

**auth:** Authentication information portion (e.g. username:password).

**username:** Username of basic authentication.

**password:** Password of basic authentication.

**host:** Host name with port number.

**hostname:** Host name without port number.

**port:** Optional port number.

**pathname:** URL path.

**query:** Parsed object containing query string, unless parsing is set to false.

**hash:** The "fragment" portion of the URL including the pound-sign (#).

**href:** The full URL.

**origin:** The origin of the URL.

Any of these can also be accessed via helper methods provided by this framework:

**Example**

```json
{
    "type": "react-native.TouchableOpacity",
    "props": {
        "onPress": {
            "isFunc": true,
            "type": "url-parse.host",
            "args": [
                "https://www.rndm.com/playground"
            ]
        },
        "children": {
            "type": "react-native.Text",
            "props": {
                "children": "Touch Me"
            }
        }
    }
}
```

### Set

Using the same components as above, you can also set parts of a URL or compose a full URL.

If this method has a URL passed into it then the output will be the original URL mutated with the new compoents. If not, then it will be a new URL comprised solely of the components you have added:

```json
{
    "type": "react-native.TouchableOpacity",
    "props": {
        "onPress": {
            "isFunc": true,
            "type": "url-parse.set",
            "args": [
                {
                    "protocol": "https",
                    "path": "playground"
                },
                "http://www.rndm.com"
            ]
        },
        "children": {
            "type": "react-native.Text",
            "props": {
                "children": "Touch Me"
            }
        }
    }
}
```

Check out the [Playground](https://www.rndm.com/playground) page to see how these features work.
