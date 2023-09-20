import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a9d1f0e8.js";const l="/assets/pths.881569ac.png",D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"4.md","filePath":"4.md"}'),o={name:"4.md"},e=p(`<h2 id="第四章-艰难的开始" tabindex="-1">第四章：艰难的开始 <a class="header-anchor" href="#第四章-艰难的开始" aria-label="Permalink to &quot;第四章：艰难的开始&quot;">​</a></h2><p>继续看index.php后面的代码，</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">require_once</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__DIR__</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;/../bootstrap/app.php&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">require_once</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__DIR__</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;/../bootstrap/app.php&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>追踪app.php源码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Create The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| The first thing we will do is create a new Laravel application instance</span></span>
<span class="line"><span style="color:#6A737D;">| which serves as the &quot;glue&quot; for all the components of Laravel, and is</span></span>
<span class="line"><span style="color:#6A737D;">| the IoC container for the system binding all of the various parts.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Foundation\\Application</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    $_ENV[</span><span style="color:#9ECBFF;">&#39;APP_BASE_PATH&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">__DIR__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Bind Important Interfaces</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| Next, we need to bind some important interfaces into the container so</span></span>
<span class="line"><span style="color:#6A737D;">| we will be able to resolve them when needed. The kernels serve the</span></span>
<span class="line"><span style="color:#6A737D;">| incoming requests to this application from both the web and CLI.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">singleton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Illuminate\\Contracts\\Http\\Kernel</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">App\\Http\\Kernel</span><span style="color:#F97583;">::class</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">singleton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Illuminate\\Contracts\\Console\\Kernel</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">App\\Console\\Kernel</span><span style="color:#F97583;">::class</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">singleton</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Illuminate\\Contracts\\Debug\\ExceptionHandler</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">App\\Exceptions\\Handler</span><span style="color:#F97583;">::class</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Return The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| This script returns the application instance. The instance is given to</span></span>
<span class="line"><span style="color:#6A737D;">| the calling script so we can separate the building of the instances</span></span>
<span class="line"><span style="color:#6A737D;">| from the actual running of the application and sending responses.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $app;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Create The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| The first thing we will do is create a new Laravel application instance</span></span>
<span class="line"><span style="color:#6A737D;">| which serves as the &quot;glue&quot; for all the components of Laravel, and is</span></span>
<span class="line"><span style="color:#6A737D;">| the IoC container for the system binding all of the various parts.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Foundation\\Application</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    $_ENV[</span><span style="color:#032F62;">&#39;APP_BASE_PATH&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">__DIR__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Bind Important Interfaces</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| Next, we need to bind some important interfaces into the container so</span></span>
<span class="line"><span style="color:#6A737D;">| we will be able to resolve them when needed. The kernels serve the</span></span>
<span class="line"><span style="color:#6A737D;">| incoming requests to this application from both the web and CLI.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">singleton</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Illuminate\\Contracts\\Http\\Kernel</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">App\\Http\\Kernel</span><span style="color:#D73A49;">::class</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">singleton</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Illuminate\\Contracts\\Console\\Kernel</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">App\\Console\\Kernel</span><span style="color:#D73A49;">::class</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">singleton</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Illuminate\\Contracts\\Debug\\ExceptionHandler</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">App\\Exceptions\\Handler</span><span style="color:#D73A49;">::class</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Return The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| This script returns the application instance. The instance is given to</span></span>
<span class="line"><span style="color:#6A737D;">| the calling script so we can separate the building of the instances</span></span>
<span class="line"><span style="color:#6A737D;">| from the actual running of the application and sending responses.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $app;</span></span></code></pre></div><blockquote><p>bootstrap/app.php</p></blockquote><p>我们看到$app其实是类Application的一个实例，那么Application类又是怎样定义的呢？通过查看<code>vendor/laravel/framework/src/Illuminate/Foundation/Application.php</code>文件的源码，我们能了解到，Application类其实是负责整个应用调度的类，它起到了一个胶水的作用(将Laravel的各个组件粘贴在一起)。这一点，Laravel作者给出了明确的提示：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Create The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| The first thing we will do is create a new Laravel application </span></span>
<span class="line"><span style="color:#6A737D;">instance</span></span>
<span class="line"><span style="color:#6A737D;">| which serves as the &quot;glue&quot; for all the components of Laravel, and is</span></span>
<span class="line"><span style="color:#6A737D;">| the IoC container for the system binding all of the various parts.</span></span>
<span class="line"><span style="color:#6A737D;">|*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Foundation\\Application</span><span style="color:#E1E4E8;">(    $_ENV[</span><span style="color:#9ECBFF;">&#39;APP_BASE_PATH&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">__DIR__</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Create The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| The first thing we will do is create a new Laravel application </span></span>
<span class="line"><span style="color:#6A737D;">instance</span></span>
<span class="line"><span style="color:#6A737D;">| which serves as the &quot;glue&quot; for all the components of Laravel, and is</span></span>
<span class="line"><span style="color:#6A737D;">| the IoC container for the system binding all of the various parts.</span></span>
<span class="line"><span style="color:#6A737D;">|*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Foundation\\Application</span><span style="color:#24292E;">(    $_ENV[</span><span style="color:#032F62;">&#39;APP_BASE_PATH&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">__DIR__</span><span style="color:#24292E;">));</span></span></code></pre></div><blockquote><p>bootstrap/app.php</p></blockquote><p>serves as the &quot;glue&quot;就是&quot;扮演胶水这个角色&quot;的意思。</p><p>我们知道，<code>$app = new Illuminate\\Foundation\\Application($_ENV[&#39;APP_BASE_PATH&#39;] ?? dirname(__DIR__));</code> 这行代码，表面上是创建一个Application的实例然后赋值给变量$app，实际上创建Application实例的同时，必然会调用Application类的构造函数。我们猜测，在构造函数中可能会做一些执行MVC之前必须做的基础工作，比如解析URL，初始化参数值等。</p><p>因此，我们继续追踪Application类的构造函数：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">($basePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($basePath) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">setBasePath</span><span style="color:#E1E4E8;">($basePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerBaseBindings</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerBaseServiceProviders</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerCoreContainerAliases</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">($basePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($basePath) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">setBasePath</span><span style="color:#24292E;">($basePath);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerBaseBindings</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerBaseServiceProviders</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerCoreContainerAliases</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Foundation/Application.php</p></blockquote><p>从上到下依次执行了四个主要动作：</p><ul><li><p>设置基础目录路径</p></li><li><p>注册基础绑定</p></li><li><p>注册服务提供者</p></li><li><p>注册核心别名类</p></li></ul><p>接下来是就是setBasePath方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Set the base path for the application.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $basePath</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> $this</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setBasePath</span><span style="color:#E1E4E8;">($basePath)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">basePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rtrim</span><span style="color:#E1E4E8;">($basePath, </span><span style="color:#9ECBFF;">&#39;\\/&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bindPathsInContainer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Set the base path for the application.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $basePath</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> $this</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setBasePath</span><span style="color:#24292E;">($basePath)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">basePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rtrim</span><span style="color:#24292E;">($basePath, </span><span style="color:#032F62;">&#39;\\/&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bindPathsInContainer</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Foundation/Application.php</p></blockquote><p>程序赋值了basePath这个类的成员变量后，执行了另一个方法bindPathsInContainer：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Bind all of the application paths in the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bindPathsInContainer</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.base&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">basePath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.lang&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">langPath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.config&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">configPath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.public&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">publicPath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.storage&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">storagePath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.database&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">databasePath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.resources&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">resourcePath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.bootstrap&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bootstrapPath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Bind all of the application paths in the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bindPathsInContainer</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.base&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">basePath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.lang&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">langPath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.config&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">configPath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.public&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">publicPath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.storage&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">storagePath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.database&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">databasePath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.resources&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">resourcePath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.bootstrap&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bootstrapPath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Foundation/Application.php</p></blockquote><p>我们看到，这里调用了另一个核心的方法instance，继续追踪：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Register an existing instance as shared in the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">mixed</span><span style="color:#6A737D;">   $instance</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">mixed</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">($abstract, $instance)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">removeAbstractAlias</span><span style="color:#E1E4E8;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    $isBound </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bound</span><span style="color:#E1E4E8;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">unset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">aliases[$abstract]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// We&#39;ll check to determine if this type has been bound before, and if it has</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// we will fire the rebound callbacks registered with the container and it</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// can be updated with consuming classes that have gotten resolved here.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($isBound) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">rebound</span><span style="color:#E1E4E8;">($abstract);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Register an existing instance as shared in the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">mixed</span><span style="color:#6A737D;">   $instance</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">mixed</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">($abstract, $instance)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">removeAbstractAlias</span><span style="color:#24292E;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    $isBound </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bound</span><span style="color:#24292E;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">unset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">aliases[$abstract]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// We&#39;ll check to determine if this type has been bound before, and if it has</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// we will fire the rebound callbacks registered with the container and it</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// can be updated with consuming classes that have gotten resolved here.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($isBound) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">rebound</span><span style="color:#24292E;">($abstract);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $instance;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Container/Container.php</p></blockquote><p>在这一段代码中，我们把注意力集中到<code>this-&gt;instances[$abstract] = $instance;</code>这一行上，可以很清楚地看到，代码做的事情，就是简单地给类的成员变量instances(通过后面的操作可以看到该变量实际上是一个数组类型的变量)，添加一个健值对。其中键名是传入的参数$abstract的参数值，键值是另一个参数$instance的参数值。由此，我们可以很清楚地看到，bindPathsInContainer方法，完成了多个路径的&quot;键值对绑定&quot;工作。</p><blockquote><p>instance方法全部代码的详细解读，请参考【附录二】</p></blockquote><p>那么，在框架需要用到路径的地方，必然会引用到这些键值对。如何验证呢？很简单，使用phpstorm编辑器的快捷键：ctrl + shift + f，全局搜索即可。我们以&quot;path.storage&quot;为例，在我们的blog项目中，全局搜索&quot;path.storage&quot;，会发现搜索到的结果如下：</p><p><img src="`+l+`" alt=""></p><p>【图4.1】</p><p>点开helpers.php文件中的第846行代码，追踪到下面这个方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get the path to the storage folder.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $path</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">storage_path</span><span style="color:#E1E4E8;">($path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">app</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.storage&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">($path </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DIRECTORY_SEPARATOR</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$path </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> $path);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get the path to the storage folder.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $path</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">storage_path</span><span style="color:#24292E;">($path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">app</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.storage&#39;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">($path </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DIRECTORY_SEPARATOR</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$path </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> $path);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\helpers.php</p></blockquote><p>这里，让人感到疑惑的是：为什么获取&quot;path.storage&quot;这个&quot;键值&quot;的时候是直接将&quot;path.storage&quot;作为参数传入app这个函数的呢？为了弄清楚这个问题，我们继续去追踪app这个函数的具体实现：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get the available container instance.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">|</span><span style="color:#F97583;">null</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">array</span><span style="color:#6A737D;">   $parameters</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">mixed</span><span style="color:#6A737D;">|</span><span style="color:#79B8FF;">\\Illuminate\\Contracts\\Foundation\\Application</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">app</span><span style="color:#E1E4E8;">($abstract </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">array</span><span style="color:#E1E4E8;"> $parameters </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [])</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">is_null</span><span style="color:#E1E4E8;">($abstract)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Container</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Container</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">($abstract, $parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get the available container instance.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">|</span><span style="color:#D73A49;">null</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">array</span><span style="color:#6A737D;">   $parameters</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">mixed</span><span style="color:#6A737D;">|</span><span style="color:#005CC5;">\\Illuminate\\Contracts\\Foundation\\Application</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">app</span><span style="color:#24292E;">($abstract </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">array</span><span style="color:#24292E;"> $parameters </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [])</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">is_null</span><span style="color:#24292E;">($abstract)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Container</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Container</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">($abstract, $parameters);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\helpers.php</p></blockquote><p>显然，我们发现在<code>app(&#39;path.storage&#39;)</code>这种方式的调用情况下，代码执行的是if之外的那个return语句。这样一来，我们必然会去查看Container这个类的<code>getInstance</code>方法，和<code>Container::getInstance()-&gt;make($abstract, $parameters)</code>这条语句做了什么：</p><p>首先是getInstance方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get the globally available instance of the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">static</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">is_null</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">static::</span><span style="color:#E1E4E8;">$instance)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">static::</span><span style="color:#E1E4E8;">$instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static::</span><span style="color:#E1E4E8;">$instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get the globally available instance of the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">static</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">is_null</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">static::</span><span style="color:#24292E;">$instance)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">static::</span><span style="color:#24292E;">$instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static::</span><span style="color:#24292E;">$instance;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Container/Container.php</p></blockquote><p>这里，我们看到一条比较生僻的php语句：<code>static::$instance = new static;</code>。其次，我们发现Container类的$instance变量设置成了静态变量，因此这是一个典型的单例实现(所有引用Container::getInstance()得到的实例，都指向同一个静态成员变量$instance)。</p><h3 id="new-static" tabindex="-1">new static <a class="header-anchor" href="#new-static" aria-label="Permalink to &quot;new static&quot;">​</a></h3><p>在一个类中，常见的是new self()操作，代表返回自身类的实例。</p><p>当父类中存在方法，然后每个子类继承于父类，调用这个方法会返回自身的实例化对象，如下：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">self</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">B</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">B</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 返回类A的实例</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">self</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">B</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">B</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 返回类A的实例</span></span></code></pre></div><p>上例中，调用create方法，总是返回类A的实例。如果要返回调用者类B的实例呢？很简单：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">B</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">B</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 返回类B的实例</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">B</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">B</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 返回类B的实例</span></span></code></pre></div><p>也就是说，只需要将<code>new self()</code>改成<code>new static()</code>就行了。上面这种使用static关键字的语法，就是PHP5.3新加入的特性：<strong>延迟静态绑定</strong>，我们可以简单理解为：由调用者来决定static后的对象该指向谁(谁调用就指向谁)，和传统的static属性和方法不同，这里static指向的对象不能在编译阶段就确定下来，必须要等到执行阶段才能确定下来，所以叫&quot;<strong>延迟静态绑定</strong>&quot;。</p><h3 id="make方法" tabindex="-1">make方法 <a class="header-anchor" href="#make方法" aria-label="Permalink to &quot;make方法&quot;">​</a></h3><p>既然getInstance方法返回的是Container自身，那么找到make方法就很简单了，直接在Container.php中查找&quot;function make&quot;即可：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Resolve the given type from the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">array</span><span style="color:#6A737D;">  $parameters</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">mixed</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Illuminate\\Contracts\\Container\\BindingResolutionException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">($abstract, </span><span style="color:#F97583;">array</span><span style="color:#E1E4E8;"> $parameters </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [])</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">($abstract, $parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Resolve the given type from the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">array</span><span style="color:#6A737D;">  $parameters</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">mixed</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Illuminate\\Contracts\\Container\\BindingResolutionException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">($abstract, </span><span style="color:#D73A49;">array</span><span style="color:#24292E;"> $parameters </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [])</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">($abstract, $parameters);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Container/Container.php</p></blockquote><p>继续追踪resolve方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Resolve the given type from the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">array</span><span style="color:#6A737D;">  $parameters</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">bool</span><span style="color:#6A737D;">   $raiseEvents</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">mixed</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Illuminate\\Contracts\\Container\\BindingResolutionException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">($abstract, $parameters </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [], $raiseEvents </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    $abstract </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getAlias</span><span style="color:#E1E4E8;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    $needsContextualBuild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">empty</span><span style="color:#E1E4E8;">($parameters) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">is_null</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getContextualConcrete</span><span style="color:#E1E4E8;">($abstract)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// If an instance of the type is currently being managed as a singleton we&#39;ll</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// just return an existing instance instead of instantiating new instances</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// so the developer can keep using the same objects instance every time.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">isset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract]) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> $needsContextualBuild) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">with[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $parameters;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    $concrete </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getConcrete</span><span style="color:#E1E4E8;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// We&#39;re ready to instantiate an instance of the concrete type registered for</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// the binding. This will instantiate the types, as well as resolve any of</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// its &quot;nested&quot; dependencies recursively until all have gotten resolved.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">isBuildable</span><span style="color:#E1E4E8;">($concrete, $abstract)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $object </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">($concrete);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $object </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">($concrete);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// If we defined any extenders for this type, we&#39;ll need to spin through them</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// and apply them to the object being built. This allows for the extension</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// of services, such as changing configuration or decorating the object.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getExtenders</span><span style="color:#E1E4E8;">($abstract) </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $extender) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $object </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $extender($object, </span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// If the requested type is registered as a singleton we&#39;ll want to cache off</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// the instances in &quot;memory&quot; so we can return it later without creating an</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// entirely new instance of an object on each subsequent request for it.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">isShared</span><span style="color:#E1E4E8;">($abstract) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> $needsContextualBuild) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $object;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($raiseEvents) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">fireResolvingCallbacks</span><span style="color:#E1E4E8;">($abstract, $object);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Before returning, we will also set the resolved flag to &quot;true&quot; and pop off</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// the parameter overrides for this build. After those two things are done</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// we will be ready to return back the fully constructed class instance.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">resolved[$abstract] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">array_pop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">with);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $object;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Resolve the given type from the container.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $abstract</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">array</span><span style="color:#6A737D;">  $parameters</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">bool</span><span style="color:#6A737D;">   $raiseEvents</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">mixed</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Illuminate\\Contracts\\Container\\BindingResolutionException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">($abstract, $parameters </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [], $raiseEvents </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    $abstract </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getAlias</span><span style="color:#24292E;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    $needsContextualBuild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">empty</span><span style="color:#24292E;">($parameters) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">is_null</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getContextualConcrete</span><span style="color:#24292E;">($abstract)</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// If an instance of the type is currently being managed as a singleton we&#39;ll</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// just return an existing instance instead of instantiating new instances</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// so the developer can keep using the same objects instance every time.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">isset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract]) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> $needsContextualBuild) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">with[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $parameters;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    $concrete </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getConcrete</span><span style="color:#24292E;">($abstract);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// We&#39;re ready to instantiate an instance of the concrete type registered for</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// the binding. This will instantiate the types, as well as resolve any of</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// its &quot;nested&quot; dependencies recursively until all have gotten resolved.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">isBuildable</span><span style="color:#24292E;">($concrete, $abstract)) {</span></span>
<span class="line"><span style="color:#24292E;">        $object </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">($concrete);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        $object </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">($concrete);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// If we defined any extenders for this type, we&#39;ll need to spin through them</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// and apply them to the object being built. This allows for the extension</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// of services, such as changing configuration or decorating the object.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getExtenders</span><span style="color:#24292E;">($abstract) </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $extender) {</span></span>
<span class="line"><span style="color:#24292E;">        $object </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $extender($object, </span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// If the requested type is registered as a singleton we&#39;ll want to cache off</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// the instances in &quot;memory&quot; so we can return it later without creating an</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// entirely new instance of an object on each subsequent request for it.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">isShared</span><span style="color:#24292E;">($abstract) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> $needsContextualBuild) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $object;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($raiseEvents) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">fireResolvingCallbacks</span><span style="color:#24292E;">($abstract, $object);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Before returning, we will also set the resolved flag to &quot;true&quot; and pop off</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// the parameter overrides for this build. After those two things are done</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// we will be ready to return back the fully constructed class instance.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">resolved[$abstract] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">array_pop</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">with);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $object;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Container/Container.php</p></blockquote><p>要完全理解这段代码，我们必须对Container类本身有深入的分析和了解(参考【附录三】)。在本节中，我们只需要关注到&quot;获取基础路径&quot;的代码实现部分即可。通过阅读，我们很容易发现，下面这一小段代码，正是我们要找的部分：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">isset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract]) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> $needsContextualBuild) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">isset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract]) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> $needsContextualBuild) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>vendor/laravel/framework/src/Illuminate/Container/Container.php</p></blockquote><p>在前面基础路径的设置部分，代码正是将路径信息保存在了容器对象的成员变量instances中。</p><p>现在我们就来回答前面提到的问题：为什么获取path.storage这个&quot;键值&quot;的时候是直接将path.storage作为参数传入app这个函数的？</p><p>大家可以回到本章引用的【图4.1】，从这个图中，可以很明显得看到有php语句将&quot;path.storage&quot;传递给了instance方法。而instance方法会把这个传入的字符串作为键名存储到容器对象的成员变量instances中。当再次使用make方法获取这个键名对应的值时，是优先从容器对象的成员变量instances数组中获取，检测到有这个键名并且当前无需上下文构建时直接返回这个保存的键值。</p><p>至此，我们终于理解了四个动作中的第一个动作：设置基础目录路径。这一步完成之后，以后框架需要使用到基础路径的地方都会和这里产生联系。我们终于迈出了第一步。</p>`,62),t=[e];function c(r,y,i,E,A,h){return n(),a("div",null,t)}const d=s(o,[["render",c]]);export{D as __pageData,d as default};
