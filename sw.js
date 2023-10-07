/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/17/000-2017春/index.html","ea83922118d04b38aa6b2e49569f14d3"],["/2017/09/26/1666-FormData上传图片通用办法/index.html","cb889ec869f3f68bd8af0c4840975fe2"],["/2018/01/17/1111-地信公司行业现状/index.html","8f3f20657a7d00d0d930f51cacc6d2e4"],["/2018/02/06/1666-二元运算符，三元运算符在JS中的学习/index.html","e9b83e9b522b5d041edbec0fd0c722e2"],["/2018/02/16/000-2018春/index.html","914648c3d9622defe737e00427bb76b6"],["/2018/11/19/1667-发布image格式（大）文件作为底图（切片or不切片）/index.html","6b8eed31132d052067aa2f445ad66e29"],["/2019/01/17/000-2019春/index.html","a02bafec535cc862e190996b6557e310"],["/2019/01/19/1667-3度带的还是6度带记录/index.html","8e9023af448f37c1e100b6e29d5a6a38"],["/2019/08/15/1666-前端开发规范/index.html","0cff153198bd8de38f7560a189444ac4"],["/2019/12/15/1666-前端架构/index.html","47851622ddd2901e65f88a94aba85fae"],["/2020/01/15/1668-verdaccio+gitlab/index.html","263c19e739a211fe51effcdee923f122"],["/2020/01/25/000-2020春/index.html","0c9fffc172247760ae9c2fa8347aa428"],["/2020/02/24/1666-前端道路摸索/index.html","8e47287fc6293db4012239e49bdbcfb7"],["/2020/06/15/766-方案经理/index.html","940afc7b14786d955087502dd51f25f5"],["/2020/06/15/770-项目经理总述/index.html","505ab602eab6561290bd1096e2001283"],["/2020/06/15/771-项目管理之崇高情怀/index.html","763db9910aee827e625a1b6a087c7b58"],["/2020/06/15/771-项目管理的自我修养/index.html","8863c22ebccedd145a1fd3ce978ad536"],["/2020/10/15/010-关于平凡/index.html","fc6b7b354b4c2c21734865e6ccccf3f1"],["/2020/10/25/010-关于社会及阶级/index.html","9f5f6c3baee95c6ca5881e1e1b0adfc7"],["/2020/10/25/755-产品经理/index.html","e1b62ae3019fa5e2f2d3d48c5aaa8594"],["/2021/04/15/1668-GITHUB使用博客被墙解决/index.html","c003c2dd45d7690309612c4a36ec2846"],["/2021/04/25/000-2021春/index.html","04f464cd1a82dd4bd647ca785c25a659"],["/2021/08/15/010-关于挫折小记/index.html","ff04d6ad1c030da5d91cd0d2f0946181"],["/2021/08/15/010-关于童心/index.html","a2b1ba004a4db259532aa607226b6a2b"],["/2022/01/25/000-2022春/index.html","e02b01bc2076b3bd7648cf0be0da0a3e"],["/2022/12/25/770-项目经理实践篇/index.html","277c52ed22f85fc20c6c5d1157f127bc"],["/2023/09/04/000-2023春/index.html","070dbf7a4a80ab8415bc8670431bdbaf"],["/about/index.html","805eaabd4ac84db473bb3f5eea6bbd87"],["/archives/2017/01/index.html","e6e0a7a73a9faebe4cb0c9d9decbb596"],["/archives/2017/09/index.html","d492af243dbbe7e201aba4010ad797e2"],["/archives/2017/index.html","832cef085e9a1a97ed42771ad515cdb6"],["/archives/2018/01/index.html","aca499b0a1ea43af178c2cadd9267b8b"],["/archives/2018/02/index.html","4d4c4d5fde3982419d74e37967ae3d26"],["/archives/2018/11/index.html","a102a7495106d3fb2747753586d0670c"],["/archives/2018/index.html","9200b24f77ff3886954abcbac28119b3"],["/archives/2019/01/index.html","967ab1c546037113703b366dab39e485"],["/archives/2019/08/index.html","6dabbb0e2c9744e5ed39f77b88ece803"],["/archives/2019/12/index.html","6b054c6efd2bb746e0f416895cf1e98f"],["/archives/2019/index.html","8440c64ebd260a544a4083fd3739e230"],["/archives/2020/01/index.html","cbef252a2f699b63a62460a0d69f6590"],["/archives/2020/02/index.html","673e48d632e7efe8a2b6d0a909334ebf"],["/archives/2020/06/index.html","4d4a329d29ced8c0d840f4f47626e3bb"],["/archives/2020/10/index.html","08dfa5e9583623da8dd155bc26451aea"],["/archives/2020/index.html","97e66b926bc1fe4555191f1c72a60253"],["/archives/2021/04/index.html","1c7eed6ebdc36359e05f2a45f640191e"],["/archives/2021/08/index.html","0a86d88833b86dee8a1429bb7b0aad57"],["/archives/2021/index.html","63d4ade5d8f6bc18e45a738abced83ed"],["/archives/2022/01/index.html","df4b11a7f42cc75f9834a049615ec5c2"],["/archives/2022/12/index.html","bdeec3c510dbebe1928236eda5eadc87"],["/archives/2022/index.html","024ef65cf006ace073f292707efdc6a5"],["/archives/2023/09/index.html","9cb2c65a9fb094d525293147425fb235"],["/archives/2023/index.html","00b7b1764b4fdd5fbce13e7d0e00b5b4"],["/archives/index.html","c2fc080f78b6f585fc52657e3e1f1c2f"],["/archives/page/2/index.html","5eba02df7041957d6c6719828cef77ae"],["/archives/page/3/index.html","2df75cedd07db57b365211837813d040"],["/bundle.js","5af7be498b0b4fa94c1c8be79385bfd2"],["/categories/index.html","5d0996af995f30214443bf6884c7e44d"],["/categories/产品设计/index.html","dfb31af36e4435c3419d6dde8e06e5d4"],["/categories/代码研发/index.html","9ffbaa243ac8f7722b65e5bb1a9848e5"],["/categories/代码研发/前端架构/index.html","848e867984d6c98617d4d21b238743b7"],["/categories/年终总结/index.html","2ce67e08711b30ecfa01105af2bcdcfc"],["/categories/方案设计/index.html","af09fb8f72eea285a982e3e93fd42b85"],["/categories/杂记/index.html","aed1ef389b58afe5a4795037d93dcf43"],["/categories/生活随笔/index.html","830b7c96b23d9d4dabe6e9539e1abaa2"],["/categories/项目管理/index.html","4dfeafeb359c40cb1dcb4b197f7af0a0"],["/css/main.css","3ac07e2628cd880fbc5c3c2d04701e73"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.jpg","cf1b4479b8a7d05d602a568513ba605e"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","d5bdf95d7c02cf92c98b4ada3e098f12"],["/images/favicon-32x32-next.png","3db3d16948ce2844f04ea75c3f2013d5"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","57e8718434ae9a7f6c87f229fb26cb02"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/fireworks.js","53fc0d7f8041ecc6b398af14a32f973b"],["/js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["/js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["/js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["/js/utils.js","432db0ab3928890383447c0566927d39"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a4d55ada0c852cd5ce340616136b1de4"],["/page/3/index.html","0c5e46813ea40a7da23022a416a9c2e1"],["/style.css","c912dc8607482ddfc4fd63239227025b"],["/tags/GITHUB/index.html","c7b4fddb6dd80ae86a68c6593e2390e0"],["/tags/index.html","c5b33c6efdd15ec92d4e31f5d0e1fc78"],["/tags/webgis/index.html","efa7d84553820a0165b81a4493706d79"],["/tags/产品设计/index.html","910f715ac81f68ef132cfddab0e18ca1"],["/tags/关于灵魂/index.html","4dc8bfdf8535b95745a775117e523245"],["/tags/前端/index.html","b5b792c92be98eaa6dcccbb319c6a3d5"],["/tags/前端开发/index.html","f476e6c9ae2dc7ab7d8034bda7ba1c9f"],["/tags/前端开发，前端架构/index.html","aa535ddd46a01c1eb75545c5567d01cb"],["/tags/前端，前端架构/index.html","da5e6a3f499171f1db82d7efcf67ed60"],["/tags/地理信息系统/index.html","1a8a9560f984cbae0f99e1f05efed912"],["/tags/城市大脑/index.html","ab1ddbfe289e42eec05ab8520a35c1c1"],["/tags/年终总结/index.html","efdb7dd245adace8c72789168950c686"],["/tags/方向/index.html","6bb53493bed640aa662733daf09b1003"],["/tags/方案/index.html","a619a9850ad2c5d0445b58f38eb149c2"],["/tags/方案设计/index.html","5744ec9778d494273940962d7ab0dda9"],["/tags/杂记，地理信息系统/index.html","9569919f6aa86e0dbd54fdc05be57198"],["/tags/生活日志/index.html","96d8733777cecdcd60e21b63d622e8a1"],["/tags/项目管理/index.html","5ceb8b3a68d0cd48b6ba8ec05b1dd7d7"]];
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
