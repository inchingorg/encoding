
`xdata-cli` is a terminal util to process data, like encoding, decoding, convert encoding methods.

## Install

```bash
npm install -g xdata-cli
```

## Usage

```
Usage: xdata [options] [command]
 
 
   Commands:
 
     encode|e [options] <data>  Encode string to bytes
     decode|d [options] <data>  Decode bytes to string
     convert|c <data>           Convert encoding.
 
   Options:
 
     -h, --help  output usage information
```

### Encode

Encode string to bytes.

```bash
Usage: encode|e [options] <data>

  Encode string data

  Options:

    -h, --help                 output usage information
    -c, --encoding [encoding]  Encoding method, default utf-8
    -f, --format [format]      Output format style, options are hex|compress|map|array, hex is default.

```

For example:

```
xdata e 中国 -c gbk
```
### Base64

### Decode

Decode bytes to string.

```bash
Usage: decode|d [options] <data>

  Decode string data

  Options:

    -h, --help                 output usage information
    -c, --encoding [encoding]  Encoding to be converted from, default utf-8
```

For example:

```bash
xdata d "d6 d0 b9 fa" -c gbk
```

## Supported encodings

1.  Node.js Native encodings: utf8, ucs2 / utf16le, ascii, binary, base64, hex
2.  Unicode: UTF-16BE, UTF-16 (with BOM)
3.  Single-byte:

    * Windows codepages: 874, 1250-1258 (aliases: cpXXX, winXXX, windowsXXX)
    * ISO codepages: ISO-8859-1 - ISO-8859-16
    * IBM codepages: 437, 737, 775, 808, 850, 852, 855-858, 860-866, 869, 922, 1046, 1124, 1125, 1129, 1133, 1161-1163 (aliases cpXXX, ibmXXX)
    * Mac codepages: maccroatian, maccyrillic, macgreek, maciceland, macroman, macromania, macthai, macturkish, macukraine, maccenteuro, macintosh
    * KOI8 codepages: koi8-r, koi8-u, koi8-ru, koi8-t
    * Miscellaneous: armscii8, rk1048, tcvn, georgianacademy, georgianps, pt154, viscii, iso646cn, iso646jp, hproman8, tis620

4.  Multi-byte:

    * Japanese: Shift_JIS, Windows-31j, Windows932, EUC-JP
    * Chinese: GB2312, GBK, GB18030, Windows936, EUC-CN
    * Korean: KS_C_5601, Windows949, EUC-KR
    * Taiwan/Hong Kong: Big5, Big5-HKSCS, Windows950

## Reference

- [ashtuchkin/iconv-lite](https://github.com/ashtuchkin/iconv-lite) Convert character encodings in pure javascript.
- [commander-rb/commander](https://github.com/commander-rb/commander) The complete solution for Ruby command-line executables.
- [andris9/encoding: Encode/decode strings with node-iconv and iconv-lite](https://github.com/andris9/encoding)

## Online Tools

- [Base64 Decode and Encode - Online](https://www.base64decode.org/)