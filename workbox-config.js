// module.exports = {
//     globDirectory: './',
//     globPatterns: ['\*\*/\*.{html,js,woff,png,svg,ttf,glb,gltf}'],
//     swDest: './public/sw.js',
//     clientsClaim: true,
//     skipWaiting: true,
//   };
  module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
      "**/*.{json,ico,png,html,js,css}"
    ],
    "swDest": "build/sw.js",
   // "swSrc": "src/sw.js",
    "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
  };