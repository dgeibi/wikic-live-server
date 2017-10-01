const liveServer = require('live-server')

module.exports = (config, root) => {
  const defaultParams = {
    mount: [],
    logLevel: 1,
    open: true, // true | false | url
    // Setting to `true` will make liveServer open /`baseurl` in browser
  }
  // See more params https://github.com/tapio/live-server/blob/master/README.md

  const params = Object.assign(defaultParams, config.liveServer, {
    port: config.port,
    root,
  })

  const baseurl = String(config.baseurl).trim().replace(/^\/*/, '')
  if (baseurl) {
    const base = `/${baseurl}`
    params.mount.push([base, root])
    if (params.open === true) params.open = base
  }

  return liveServer.start(params)
}
