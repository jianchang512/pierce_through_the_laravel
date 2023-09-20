import{_ as s,o as a,c as p,Q as o}from"./chunks/framework.a9d1f0e8.js";const n="/assets/error_01.0adaf753.png",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"3.md","filePath":"3.md"}'),l={name:"3.md"},e=o(`<h2 id="第三章-实现自动加载" tabindex="-1">第三章：实现自动加载 <a class="header-anchor" href="#第三章-实现自动加载" aria-label="Permalink to &quot;第三章：实现自动加载&quot;">​</a></h2><p>第一行代码，只是简单定义了一个全局常量，并将其值设置为当前时间的时间戳 + 微秒数(小数点后4位)。这是方便在合适的地方计算代码运行时间的一个常量。值得注意的是，我们在框架内全局搜索&quot;LARAVEL_START&quot;关键词时，并没有任何发现，说明这行代码是框架预留的，在5.8.38版本中并没有实际的用处。</p><blockquote><p>mircotime函数如果不加任何参数，返回的是一个空格隔开的字符串，时间戳 + 微秒数）</p></blockquote><p>接下来这行代码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">require</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__DIR__</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;/../vendor/autoload.php&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">require</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__DIR__</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;/../vendor/autoload.php&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>vendor目录实际上是第三方库的目录，使用composer来进行包管理。 因为包含了这个autoload.php文件，在之后的所有php代码中任何使用vendor目录中的类语句(这些包都是按照文件夹独立开来的)，直接引用类名即可，无需再显示包含类文件本身。</p><p>比如，我们很快会阅读的app.php（bootstrap/app.php）中，第14行 ~ 16行代码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Foundation\\Application</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    $_ENV[</span><span style="color:#9ECBFF;">&#39;APP_BASE_PATH&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">__DIR__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Foundation\\Application</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    $_ENV[</span><span style="color:#032F62;">&#39;APP_BASE_PATH&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">__DIR__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>我们看到，这里直接实例化了一个Application对象，如果没有之前的包含autoload.php文件语句，这里肯定会报错。一个简单的验证方法是，注释<code>require __DIR__.&#39;/../vendor/autoload.php</code>语句，直接刷新页面，报错：</p><p><img src="`+n+'" alt=""></p><p>【图3.1】</p><p>继续追踪autoload.php中的代码，最终可以发现，composer使用了<code>spl_autoload_register</code>这个核心函数，来完成对PHP类的自动加载。</p><p>这里，我们不再对composer的包自动加载机制做过多的讲解，感兴趣的读者可以阅读下面这两篇文章。</p><p><strong>参考链接：</strong></p><ul><li><a href="https://segmentfault.com/a/1190000014948542" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000014948542</a></li><li><a href="https://www.cnblogs.com/a609251438/p/12659934.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/a609251438/p/12659934.html</a></li></ul>',15),t=[e];function r(c,i,_,d,E,y){return a(),p("div",null,t)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};