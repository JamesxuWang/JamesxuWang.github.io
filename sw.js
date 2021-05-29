/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/17/2017年终总结/index.html","2920592b8c42beabfb68d93c5474b3bb"],["/2017/09/26/FormData上传图片通用办法/index.html","d5637c87fc57254cfadf367db0abe3c4"],["/2018/01/17/简单记录/index.html","8d46b836348d96e395b5c9bbcbe94545"],["/2018/02/06/二元运算符，三元运算符在JS中的学习/index.html","c8e706f9eeafbe683d3abcffbd48e88a"],["/2018/02/16/2018年终总结/index.html","e7d8111430ecba9336ef6af55538a8ca"],["/2018/11/19/发布image格式（大）文件作为底图（切片or不切片）/index.html","002dcc58836a1f04fe9c1ec4bc456dce"],["/2019/01/17/2019年终总结/index.html","fa1415ff52fecd2761c3090635d2b13d"],["/2019/01/19/3度带的还是6度带记录/index.html","c2a76b0e496117fc134f8b63514233b0"],["/2019/08/15/前端开发规范/index.html","b1be41754ea46292abe3c203cf62b323"],["/2019/12/15/前端架构/index.html","87f20b71938fed5353cc7c4d56bd3ca8"],["/2020/01/15/verdaccio+gitlab/index.html","016def31a28b38d5ce383bf68e3bedb9"],["/2020/01/25/2020年终总结/index.html","99de08059ea587cdaff79a78245509f5"],["/2020/02/24/前端道路摸索/index.html","844ce510cbad0743dcf81a7e6a1a2129"],["/2020/06/15/项目经理/index.html","6c8cf98f32b402c7e7b088d456a7c425"],["/2020/10/15/平凡之路/index.html","5fb225b35c8d26e4ecadbcc6599c40e1"],["/2021/01/25/2021年终总结/index.html","f168e1aa32f58faeb5b73dbaa671107c"],["/2021/04/15/GITHUB使用博客被墙解决/index.html","7d24beeab221bd92eb9f4186d8a8baa4"],["/about/index.html","bd8d46b3449b62713cd5b6a850fca7d3"],["/archives/2017/01/index.html","901aac0261f13c4c72f40b94633384e2"],["/archives/2017/09/index.html","b1d660f8f7d7a5fc142b8894d76c5288"],["/archives/2017/index.html","e29c97e66aef11438db9e4ea8831af91"],["/archives/2018/01/index.html","73287497610f2910746bd2487a27026b"],["/archives/2018/02/index.html","613af115372b7daa10c4c7585389d3a1"],["/archives/2018/11/index.html","a0238b03c02e8f077998244c1aaa6190"],["/archives/2018/index.html","fb918a4d1a1526aa2045c1874f5044ba"],["/archives/2019/01/index.html","562894e6bdea47956d24c16ece6e8c90"],["/archives/2019/08/index.html","b7cbd5437c5b6a5bf885db8597c6c33c"],["/archives/2019/12/index.html","cf1a24f653d74d7847fde2e8406deeaf"],["/archives/2019/index.html","39ee97743b88b897fa48d772586a14ad"],["/archives/2020/01/index.html","ac069771753a217e585b25640cb29942"],["/archives/2020/02/index.html","eebd77104ef2f45c5ae3985311d1e9ba"],["/archives/2020/06/index.html","ea152d778b4981687bcfdf98ba691842"],["/archives/2020/10/index.html","d1a8fe99b1a1ee97688680bcb2dec6c0"],["/archives/2020/index.html","283de51177ee6fb39483997ccad87512"],["/archives/2021/01/index.html","c8a0af8f86608d40839ab3a02abfb3dd"],["/archives/2021/04/index.html","6720254c456b8b6421ed8d82aacbf5a3"],["/archives/2021/index.html","b8f4bcd48d1d58281b2be88103128b5c"],["/archives/index.html","55e4f9bbd6b315d80cebd87450eb72f7"],["/archives/page/2/index.html","dbf7370b10e486d1205f768c74b0af80"],["/bundle.js","5af7be498b0b4fa94c1c8be79385bfd2"],["/categories/index.html","d60090c2a8ede93ac04cd5beb5222d1b"],["/categories/web/index.html","dc75e151704979d05e332a09d628b571"],["/categories/webgis/index.html","a5611ca4d21899d56b81607ca5ac9d78"],["/categories/生活随笔/index.html","d8001a3241e4788d2ad9f59c3dbd4e82"],["/css/main.css","dc33ef8e465748b8a3a8b49da39075cf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.jpg","cf1b4479b8a7d05d602a568513ba605e"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","d5bdf95d7c02cf92c98b4ada3e098f12"],["/images/favicon-32x32-next.png","3db3d16948ce2844f04ea75c3f2013d5"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","70757360702977b11fb13dc0a52cd719"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/fireworks.js","53fc0d7f8041ecc6b398af14a32f973b"],["/js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["/js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["/js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["/js/utils.js","432db0ab3928890383447c0566927d39"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","13faf0446d724c1df78f779ffdc55ab1"],["/style.css","cd26f529168548966ebb90bcc9050abc"],["/sw-register.js","6ff719a52af84f420d60c190f3ed6d5c"],["/tags/GIS/index.html","7b61afe6e825dac885ab1303fc1e2257"],["/tags/Linux/index.html","5f33077299d3cc184fc1e0eb96876957"],["/tags/index.html","11ddfb3c4b3a82fe62b6a2f52af66282"],["/tags/前端/index.html","b7991823ac7fc4ae5fa09279bcbf5ec3"],["/tags/年终总结/index.html","dabbd2a045db0a8fd53e00407effdf28"],["/tags/架构/index.html","90376705a2cefd1156648e5ae8734057"],["/tags/生活日志/index.html","a1b30f8c64a07e92685e3c5b88b96b7f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
