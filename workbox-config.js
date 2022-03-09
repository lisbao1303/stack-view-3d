
module.exports = {
  globDirectory: './',
  globPatterns: ['\*\*/\*.{html,js,woff,png,svg,ttf,glb,gltf}'],
  swDest: './public/sw.js',
  clientsClaim: true,
  skipWaiting: true,
};