# wikic-live-server

## Usage

Install:

```
npm i -D wikic wikic-live-server
```

In wikic.config.js:

``` js
module.exports = {
  server: 'wikic-live-server',
  liveServer: {
    mount: [],
    logLevel: 1,
    open: true, // true | false | url
    // Setting to `true` will make liveServer open /`baseurl` in browser
    // See more params https://github.com/tapio/live-server/blob/master/README.md
  }
}
```

Finally, run `wikic build -s`

## LICENSE

[MIT](LICENSE)
