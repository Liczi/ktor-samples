let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/liczi/Projects/ktor-samples/chat/build/js/packages/chat-frontend/kotlin-dce/chat-frontend.js"]
};

config.output = {
    path: "/home/liczi/Projects/ktor-samples/chat/src/backendMain/resources/web",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "chat.js"
            : "chat-[name].js";
    },
    library: "chat",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/liczi/Projects/ktor-samples/chat/build/js/packages/chat-frontend/kotlin-dce")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/home/liczi/Projects/ktor-samples/chat/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/liczi/Projects/ktor-samples/chat/build/reports/webpack/chat-frontend/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
