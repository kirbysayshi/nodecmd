nodecmd
=======

Auto buffer piped/streamed input, and then evaluate it using the given JS function.

Examples
--------

```sh
# encode a file as base64
$ < somefile nodecmd btoa

# decode the clipboard contents
$ pbpaste | nodecmd decodeURIComponent
```

Notes
-----

This is doing this all in memory, so be aware that it will have trouble with large inputs. 

License
-------

MIT

