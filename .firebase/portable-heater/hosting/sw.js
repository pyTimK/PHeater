if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8ed979ebb9424dcf7512077647c98204"},{url:"/_next/static/PfXKQKbUgdQU5pcmY1xjn/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/PfXKQKbUgdQU5pcmY1xjn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/698-aa6f76bedee439ea.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/720-7fd1d0ad53cda670.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/app/layout-7b5ac86e890349b1.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/app/page-5549666a3ed0e082.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/bce60fc1-97c6f64f33809f3b.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/cacdea1d-5ee6fd96fca7122e.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/main-a2d04b6e86b669c7.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/main-app-b1612d6d75583865.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b31b766ae0174a76.js",revision:"PfXKQKbUgdQU5pcmY1xjn"},{url:"/_next/static/css/545280d1ff2858c3.css",revision:"545280d1ff2858c3"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/icon-512x512.png",revision:"684baff2afa7258feeb0e16d6a847227"},{url:"/icon.png",revision:"684baff2afa7258feeb0e16d6a847227"},{url:"/img/icons/apple-touch-icon.png",revision:"7ada8c7cee0da028b9dafcd6699cedf9"},{url:"/img/icons/maskable_icon_x128.png",revision:"a20851036a18637ba5570b0b08d0a366"},{url:"/img/icons/maskable_icon_x192.png",revision:"5a666dc18aa6f32f8340997e0c49cfe6"},{url:"/img/icons/maskable_icon_x384.png",revision:"a641475767cf98cc0a3b697003642696"},{url:"/img/icons/maskable_icon_x48.png",revision:"f278d0e7b01414d0e009caa312cf9cb2"},{url:"/img/icons/maskable_icon_x512.png",revision:"300252164aaa340f035accbf231921c4"},{url:"/img/icons/maskable_icon_x72.png",revision:"57a2f3ff98c55fceaa8bd582f8e5dc41"},{url:"/img/icons/maskable_icon_x96.png",revision:"1edd378a592680a305f0ede1775ce149"},{url:"/manifest.json",revision:"bc2681d9cbdcbccb7d00d1ec12b904ee"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));