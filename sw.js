/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "f87560ea4442539e9b79f7f8fc74e5c7"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-139eb1a0.entry.js"
  },
  {
    "url": "build/p-14054f15.js"
  },
  {
    "url": "build/p-1b64c0cd.entry.js"
  },
  {
    "url": "build/p-265d2c18.entry.js"
  },
  {
    "url": "build/p-27b4d099.entry.js"
  },
  {
    "url": "build/p-3ce00a40.entry.js"
  },
  {
    "url": "build/p-4c4b8a8a.entry.js"
  },
  {
    "url": "build/p-53bcbd1d.js"
  },
  {
    "url": "build/p-543a2680.js"
  },
  {
    "url": "build/p-6bd16f5b.js"
  },
  {
    "url": "build/p-78824d66.entry.js"
  },
  {
    "url": "build/p-8d5dcd8d.js"
  },
  {
    "url": "build/p-ca3ed379.entry.js"
  },
  {
    "url": "build/p-ccb419d8.entry.js"
  },
  {
    "url": "build/p-fd3f5559.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
