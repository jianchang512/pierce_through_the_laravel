import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a9d1f0e8.js";const l="/assets/test_21.44b2f59a.png",g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"19.md","filePath":"19.md"}'),e={name:"19.md"},o=p(`<h2 id="附录九-route之findroute方法" tabindex="-1">附录九：Route之findRoute方法 <a class="header-anchor" href="#附录九-route之findroute方法" aria-label="Permalink to &quot;附录九：Route之findRoute方法&quot;">​</a></h2><p>源文件路径：vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Router.php</p><p>方法名：findRoute</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Find the route matching a given request.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#79B8FF;">\\Illuminate\\Http\\Request</span><span style="color:#6A737D;">  $request</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Illuminate\\Routing\\Route</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">findRoute</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $route </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routes</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">container</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Route</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">, $route);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $route;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Find the route matching a given request.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#005CC5;">\\Illuminate\\Http\\Request</span><span style="color:#6A737D;">  $request</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Illuminate\\Routing\\Route</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findRoute</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $route </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routes</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">($request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">container</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Route</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">, $route);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $route;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>首先，我们看一下<code>findRoute</code>被调用的路径：</p><ul><li>index.php文件调用<code>make</code>方法创建Kernel对象（1）</li></ul><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$kernel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Illuminate\\Contracts\\Http\\Kernel</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$kernel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Illuminate\\Contracts\\Http\\Kernel</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">);</span></span></code></pre></div><ul><li>创建Kernel对象过程中，调用Kernel类的构造函数（2）</li></ul><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Application</span><span style="color:#E1E4E8;"> $app, </span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;"> $router)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $app;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $router;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	$router</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middlewarePriority </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middlewarePriority;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middlewareGroups </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $key </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $middleware) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		$router</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">middlewareGroup</span><span style="color:#E1E4E8;">($key, $middleware);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routeMiddleware </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $key </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $middleware) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		$router</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">aliasMiddleware</span><span style="color:#E1E4E8;">($key, $middleware);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Application</span><span style="color:#24292E;"> $app, </span><span style="color:#005CC5;">Router</span><span style="color:#24292E;"> $router)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $app;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $router;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	$router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middlewarePriority </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middlewarePriority;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middlewareGroups </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $key </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $middleware) {</span></span>
<span class="line"><span style="color:#24292E;">		$router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">middlewareGroup</span><span style="color:#24292E;">($key, $middleware);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routeMiddleware </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $key </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $middleware) {</span></span>
<span class="line"><span style="color:#24292E;">		$router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">aliasMiddleware</span><span style="color:#24292E;">($key, $middleware);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>index.php文件执行Kernel对象的<code>handle</code>方法（3）</li></ul><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $kernel</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    $request </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Http\\Request</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">capture</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $kernel</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    $request </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Http\\Request</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">capture</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><ul><li><p><code>handle</code>方法调用Kernel类的<code>sendRequestThroughRouter</code>方法（4）</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		$request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">enableHttpMethodParameterOverride</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		$response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sendRequestThroughRouter</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> $e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reportException</span><span style="color:#E1E4E8;">($e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		$response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">renderException</span><span style="color:#E1E4E8;">($request, $e);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Throwable</span><span style="color:#E1E4E8;"> $e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reportException</span><span style="color:#E1E4E8;">($e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FatalThrowableError</span><span style="color:#E1E4E8;">($e));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		$response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">renderException</span><span style="color:#E1E4E8;">($request, $e);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app[</span><span style="color:#9ECBFF;">&#39;events&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Events\\RequestHandled</span><span style="color:#E1E4E8;">($request, $response)</span></span>
<span class="line"><span style="color:#E1E4E8;">	);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $response;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		$request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">enableHttpMethodParameterOverride</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		$response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sendRequestThroughRouter</span><span style="color:#24292E;">($request);</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> $e) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reportException</span><span style="color:#24292E;">($e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		$response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">renderException</span><span style="color:#24292E;">($request, $e);</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Throwable</span><span style="color:#24292E;"> $e) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reportException</span><span style="color:#24292E;">($e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FatalThrowableError</span><span style="color:#24292E;">($e));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		$response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">renderException</span><span style="color:#24292E;">($request, $e);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app[</span><span style="color:#032F62;">&#39;events&#39;</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Events\\RequestHandled</span><span style="color:#24292E;">($request, $response)</span></span>
<span class="line"><span style="color:#24292E;">	);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $response;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p><code>sendRequestThroughRouter</code>方法调用<code>Pipeline</code>类的<code>then</code>方法，<code>then</code>方法继续调用Kernel类的<code>dispatchToRouter</code>方法（5）</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sendRequestThroughRouter</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request&#39;</span><span style="color:#E1E4E8;">, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Facade</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">clearResolvedInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bootstrap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app))</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">through</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">shouldSkipMiddleware</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middleware)</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dispatchToRouter</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sendRequestThroughRouter</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request&#39;</span><span style="color:#24292E;">, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Facade</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">clearResolvedInstance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bootstrap</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Pipeline</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app))</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">through</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">shouldSkipMiddleware</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> [] </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middleware)</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dispatchToRouter</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dispatchToRouter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($request) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request&#39;</span><span style="color:#E1E4E8;">, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">router</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">	};</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dispatchToRouter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($request) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request&#39;</span><span style="color:#24292E;">, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">($request);</span></span>
<span class="line"><span style="color:#24292E;">	};</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p><code>dispatchToRouter</code>方法调用Kernel类成员变量router上的<code>dispatch</code>方法（其实就是Router类的<code>dispatch</code>方法），<code>dispatch</code>方法又继续调用Router类的<code>dispatchToRoute</code>方法：（6）</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">currentRequest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $request;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dispatchToRoute</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">currentRequest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $request;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dispatchToRoute</span><span style="color:#24292E;">($request);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dispatchToRoute</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">runRoute</span><span style="color:#E1E4E8;">($request, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">findRoute</span><span style="color:#E1E4E8;">($request));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dispatchToRoute</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">runRoute</span><span style="color:#24292E;">($request, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">findRoute</span><span style="color:#24292E;">($request));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ul><p>至此，我们在这一步终于看到<code>findRoute</code>实际是在调用<code>runRoute</code>方法时，先执行<code>findRoute</code>方法获得运行结果，然后将它作为参数值传递给<code>runRoute</code>方法的。</p><p>接下来我们来看<code>findRoute</code>方法的内部代码：</p><p>第一行<code>$this-&gt;current = $route = $this-&gt;routes-&gt;match($request);</code>，这里调用当前成员变量$routes身上的<code>match</code>方法，那么我们必然要去追踪$routes是什么：</p><p>通过搜索：routes（在Router类文件中），我们在Router类的构造函数中找到下面的代码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Create a new Router instance.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#79B8FF;">\\Illuminate\\Contracts\\Events\\Dispatcher</span><span style="color:#6A737D;">  $events</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#79B8FF;">\\Illuminate\\Container\\Container</span><span style="color:#6A737D;">|</span><span style="color:#F97583;">null</span><span style="color:#6A737D;">  $container</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Dispatcher</span><span style="color:#E1E4E8;"> $events, </span><span style="color:#79B8FF;">Container</span><span style="color:#E1E4E8;"> $container </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">events </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $events;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">RouteCollection</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">container </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $container </span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Container</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Create a new Router instance.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#005CC5;">\\Illuminate\\Contracts\\Events\\Dispatcher</span><span style="color:#6A737D;">  $events</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#005CC5;">\\Illuminate\\Container\\Container</span><span style="color:#6A737D;">|</span><span style="color:#D73A49;">null</span><span style="color:#6A737D;">  $container</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Dispatcher</span><span style="color:#24292E;"> $events, </span><span style="color:#005CC5;">Container</span><span style="color:#24292E;"> $container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">events </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $events;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">RouteCollection</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $container </span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Container</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这样我们就知道了，$routes是类RouteCollection的具体实例，那Router类又是什么时候创建的呢？</p><p>请读者回到本节开头仔细浏览(1) ~ (6)这6个过程中的代码，可以发现在(5)中出现了<code>$this-&gt;router-&gt;dispatch($request)</code>语句。这样，我们就发现了，router其实是Kernel类的一个成员变量，继续向前追踪可以发现在(2)中，Router是作为构造函数的参数在类的创建过程中被保存到成员变量router上的。</p><p>我们继续看<code>match</code>方法的源码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Find the first route matching a given request.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#79B8FF;">\\Illuminate\\Http\\Request</span><span style="color:#6A737D;">  $request</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Illuminate\\Routing\\Route</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	$routes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">($request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getMethod</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// First, we will see if we can find a matching route for this current request</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// method. If we can, great, we can just return it so that it can be called</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// by the consumer. Otherwise we will check for routes with another verb.</span></span>
<span class="line"><span style="color:#E1E4E8;">	$route </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">matchAgainstRoutes</span><span style="color:#E1E4E8;">($routes, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">is_null</span><span style="color:#E1E4E8;">($route)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $route</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// If no route was found we will now check if a matching route is specified by</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// another HTTP verb. If it is we will need to throw a MethodNotAllowed and</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// inform the user agent of which HTTP verb it should use for this route.</span></span>
<span class="line"><span style="color:#E1E4E8;">	$others </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">checkForAlternateVerbs</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">($others) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getRouteForMethods</span><span style="color:#E1E4E8;">($request, $others);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NotFoundHttpException</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Find the first route matching a given request.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#005CC5;">\\Illuminate\\Http\\Request</span><span style="color:#6A737D;">  $request</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Illuminate\\Routing\\Route</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	$routes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">($request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getMethod</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// First, we will see if we can find a matching route for this current request</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// method. If we can, great, we can just return it so that it can be called</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// by the consumer. Otherwise we will check for routes with another verb.</span></span>
<span class="line"><span style="color:#24292E;">	$route </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">matchAgainstRoutes</span><span style="color:#24292E;">($routes, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">is_null</span><span style="color:#24292E;">($route)) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">($request);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// If no route was found we will now check if a matching route is specified by</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// another HTTP verb. If it is we will need to throw a MethodNotAllowed and</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// inform the user agent of which HTTP verb it should use for this route.</span></span>
<span class="line"><span style="color:#24292E;">	$others </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">checkForAlternateVerbs</span><span style="color:#24292E;">($request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">count</span><span style="color:#24292E;">($others) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getRouteForMethods</span><span style="color:#24292E;">($request, $others);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NotFoundHttpException</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>继续追踪<code>get</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get routes from the collection by method.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">|</span><span style="color:#F97583;">null</span><span style="color:#6A737D;">  $method</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">($method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">is_null</span><span style="color:#E1E4E8;">($method) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getRoutes</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Arr</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routes, $method, []);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get routes from the collection by method.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">|</span><span style="color:#D73A49;">null</span><span style="color:#6A737D;">  $method</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">($method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">is_null</span><span style="color:#24292E;">($method) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getRoutes</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Arr</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routes, $method, []);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里我们简单解释就是，获取对应$method参数值的所有route，返回route集合(以数组形式)</p><p>继续追踪<code>getRoutes</code>：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get all of the routes in the collection.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRoutes</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">array_values</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">allRoutes);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Get all of the routes in the collection.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRoutes</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">array_values</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">allRoutes);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>我们看到，这里直接是取allRoutes成员变量中的值(这里我们猜测$this-&gt;allRoutes也是一个键值型数组)。</p><p>我们猜测，代码执行到这里时，$this-&gt;allRoutes和$this-&gt;routes一定是有值的，否则后面下面的<code>matchAgainstRoutes</code>方法如何能匹配</p><p>到路由呢？要验证这一点也很简单，我们对<code>RouteCollection</code>类的<code>match</code>方法，做简单的var_dump中断测试就可以了：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Find the first route matching a given request.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#79B8FF;">\\Illuminate\\Http\\Request</span><span style="color:#6A737D;">  $request</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Illuminate\\Routing\\Route</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">\\Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">var_dump</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routes);</span><span style="color:#F97583;">exit</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//var_dump($this-&gt;getRoutes());exit;</span></span>
<span class="line"><span style="color:#E1E4E8;">	$routes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">($request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getMethod</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Find the first route matching a given request.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#005CC5;">\\Illuminate\\Http\\Request</span><span style="color:#6A737D;">  $request</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Illuminate\\Routing\\Route</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@throws</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">\\Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">var_dump</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routes);</span><span style="color:#D73A49;">exit</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//var_dump($this-&gt;getRoutes());exit;</span></span>
<span class="line"><span style="color:#24292E;">	$routes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">($request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getMethod</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span></span></code></pre></div><p>输出结果截图：</p><p><img src="`+l+`" alt=""></p><blockquote><p>注意第二个var_dump，打印的其实是$this-&gt;allRoutes的值。并且，大家在实际操作过程中会发现，这两次中断测试都会导致网页一直处于加载中的状态，随着时间的推移最终导致内存溢出。</p></blockquote><p>现在问题来了：</p><ul><li>在我们分析代码的过程中，根本就没有对<code>RouteCollection</code>类中的成员变量$routes和$allRoutes做任何操作，它们的值是从哪来的呢？</li><li>就算前面有对$routes和$allRoutes的操作，代码又是怎么做到这里获取到的值就是之前操作过的值呢？</li></ul><p>要弄清楚这个问题，我们必须先弄清楚路由类的工作原理和工作过程：</p><blockquote><h3 id="路由简介" tabindex="-1">路由简介 <a class="header-anchor" href="#路由简介" aria-label="Permalink to &quot;路由简介&quot;">​</a></h3><p>路由是外界访问Laravel应用程序的通路或者说路由定义了Laravel的应用程序向外界提供服务的具体方式：通过指定的URI、HTTP请求方法以及路由参数（可选）才能正确访问到路由定义的处理程序。无论URI对应的处理程序是一个简单的闭包还是说是控制器方法没有对应的路由外界都访问不到他们，今天我们就来看看Laravel是如何来设计和实现路由的。</p><p>我们在路由文件里通常是向下面这样来定义路由的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Route::get(&#39;/user&#39;, &#39;UsersController@index&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Route::get(&#39;/user&#39;, &#39;UsersController@index&#39;);</span></span></code></pre></div><p>通过上面的路由我们可以知道，客户端通过以HTTP GET方式来请求 URI &quot;/user&quot;时，Laravel会把请求最终派发给UsersController类的index方法来进行处理，然后在index方法中返回响应给客户端。</p><p>上面注册路由时用到的Route类在Laravel里叫门面（Facade），它提供了一种简单的方式来访问绑定到服务容器里的服务router，Facade的设计理念和实现方式我打算以后单开博文来写，在这里我们只要知道调用的Route这个门面的静态方法都对应服务容器里router这个服务的方法，所以上面那条路由你也可以看成是这样来注册的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">app()-&gt;make(&#39;router&#39;)-&gt;get(&#39;user&#39;, &#39;UsersController@index&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">app()-&gt;make(&#39;router&#39;)-&gt;get(&#39;user&#39;, &#39;UsersController@index&#39;);</span></span></code></pre></div><h3 id="路由服务注册" tabindex="-1">路由服务注册 <a class="header-anchor" href="#路由服务注册" aria-label="Permalink to &quot;路由服务注册&quot;">​</a></h3><p>router这个服务是在实例化应用程序Application时在构造方法里通过注册RoutingServiceProvider时绑定到服务容器里的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//bootstrap/app.php</span></span>
<span class="line"><span style="color:#e1e4e8;">$app = new Illuminate\\Foundation\\Application(</span></span>
<span class="line"><span style="color:#e1e4e8;">  realpath(__DIR__.&#39;/../&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//Application: 构造方法</span></span>
<span class="line"><span style="color:#e1e4e8;">public function __construct($basePath = null)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">if ($basePath) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	$this-&gt;setBasePath($basePath);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;registerBaseBindings();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;registerBaseServiceProviders();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;registerCoreContainerAliases();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//Application: 注册基础的服务提供器</span></span>
<span class="line"><span style="color:#e1e4e8;">protected function registerBaseServiceProviders()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;register(new EventServiceProvider($this));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;register(new LogServiceProvider($this));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;register(new RoutingServiceProvider($this));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//\\Illuminate\\Routing\\RoutingServiceProvider: 绑定router到服务容器</span></span>
<span class="line"><span style="color:#e1e4e8;">protected function registerRouter()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;app-&gt;singleton(&#39;router&#39;, function ($app) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return new Router($app[&#39;events&#39;], $app);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//bootstrap/app.php</span></span>
<span class="line"><span style="color:#24292e;">$app = new Illuminate\\Foundation\\Application(</span></span>
<span class="line"><span style="color:#24292e;">  realpath(__DIR__.&#39;/../&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//Application: 构造方法</span></span>
<span class="line"><span style="color:#24292e;">public function __construct($basePath = null)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">if ($basePath) {</span></span>
<span class="line"><span style="color:#24292e;">	$this-&gt;setBasePath($basePath);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;registerBaseBindings();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;registerBaseServiceProviders();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;registerCoreContainerAliases();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//Application: 注册基础的服务提供器</span></span>
<span class="line"><span style="color:#24292e;">protected function registerBaseServiceProviders()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;register(new EventServiceProvider($this));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;register(new LogServiceProvider($this));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;register(new RoutingServiceProvider($this));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//\\Illuminate\\Routing\\RoutingServiceProvider: 绑定router到服务容器</span></span>
<span class="line"><span style="color:#24292e;">protected function registerRouter()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;app-&gt;singleton(&#39;router&#39;, function ($app) {</span></span>
<span class="line"><span style="color:#24292e;">	return new Router($app[&#39;events&#39;], $app);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>通过上面的代码我们知道了Route调用的静态方法都对应于<code>\\Illuminate\\Routing\\Router</code>类里的方法，Router这个类里包含了与路由的注册、寻址、调度相关的方法。 下面我们从路由的注册、加载、寻址这几个阶段来看一下laravel里是如何实现这些的。</p><h3 id="路由加载" tabindex="-1">路由加载 <a class="header-anchor" href="#路由加载" aria-label="Permalink to &quot;路由加载&quot;">​</a></h3><p>注册路由前需要先加载路由文件，路由文件的加载是在<code>App\\Providers\\RouteServiceProvider</code>这个服务器提供者的boot方法里加载的:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class RouteServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function boot()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	parent::boot();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public function map()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;mapApiRoutes();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;mapWebRoutes();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function mapWebRoutes()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  Route::middleware(&#39;web&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">     -&gt;namespace($this-&gt;namespace)</span></span>
<span class="line"><span style="color:#e1e4e8;">     -&gt;group(base_path(&#39;routes/web.php&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function mapApiRoutes()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  Route::prefix(&#39;api&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">     -&gt;middleware(&#39;api&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">     -&gt;namespace($this-&gt;namespace)</span></span>
<span class="line"><span style="color:#e1e4e8;">     -&gt;group(base_path(&#39;routes/api.php&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class RouteServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function boot()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	parent::boot();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public function map()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;mapApiRoutes();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;mapWebRoutes();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function mapWebRoutes()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  Route::middleware(&#39;web&#39;)</span></span>
<span class="line"><span style="color:#24292e;">     -&gt;namespace($this-&gt;namespace)</span></span>
<span class="line"><span style="color:#24292e;">     -&gt;group(base_path(&#39;routes/web.php&#39;));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function mapApiRoutes()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  Route::prefix(&#39;api&#39;)</span></span>
<span class="line"><span style="color:#24292e;">     -&gt;middleware(&#39;api&#39;)</span></span>
<span class="line"><span style="color:#24292e;">     -&gt;namespace($this-&gt;namespace)</span></span>
<span class="line"><span style="color:#24292e;">     -&gt;group(base_path(&#39;routes/api.php&#39;));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">namespace Illuminate\\Foundation\\Support\\Providers;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class RouteServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public function boot()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;setRootControllerNamespace();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if ($this-&gt;app-&gt;routesAreCached()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	$this-&gt;loadCachedRoutes();</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	$this-&gt;loadRoutes();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;app-&gt;booted(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            $this-&gt;app[&#39;router&#39;]-&gt;getRoutes()-&gt;refreshNameLookups();</span></span>
<span class="line"><span style="color:#e1e4e8;">            $this-&gt;app[&#39;router&#39;]-&gt;getRoutes()-&gt;refreshActionLookups();</span></span>
<span class="line"><span style="color:#e1e4e8;">        });</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function loadCachedRoutes()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;app-&gt;booted(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	require $this-&gt;app-&gt;getCachedRoutesPath();</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function loadRoutes()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (method_exists($this, &#39;map&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	$this-&gt;app-&gt;call([$this, &#39;map&#39;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function routesAreCached()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this[&#39;files&#39;]-&gt;exists($this-&gt;getCachedRoutesPath());</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public function getCachedRoutesPath()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;bootstrapPath().&#39;/cache/routes.php&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">namespace Illuminate\\Foundation\\Support\\Providers;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class RouteServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public function boot()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;setRootControllerNamespace();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if ($this-&gt;app-&gt;routesAreCached()) {</span></span>
<span class="line"><span style="color:#24292e;">  	$this-&gt;loadCachedRoutes();</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">  	$this-&gt;loadRoutes();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;app-&gt;booted(function () {</span></span>
<span class="line"><span style="color:#24292e;">            $this-&gt;app[&#39;router&#39;]-&gt;getRoutes()-&gt;refreshNameLookups();</span></span>
<span class="line"><span style="color:#24292e;">            $this-&gt;app[&#39;router&#39;]-&gt;getRoutes()-&gt;refreshActionLookups();</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function loadCachedRoutes()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;app-&gt;booted(function () {</span></span>
<span class="line"><span style="color:#24292e;">  	require $this-&gt;app-&gt;getCachedRoutesPath();</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function loadRoutes()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  if (method_exists($this, &#39;map&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">  	$this-&gt;app-&gt;call([$this, &#39;map&#39;]);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function routesAreCached()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this[&#39;files&#39;]-&gt;exists($this-&gt;getCachedRoutesPath());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public function getCachedRoutesPath()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;bootstrapPath().&#39;/cache/routes.php&#39;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>laravel 首先去寻找路由的缓存文件，没有缓存文件再去进行加载路由。缓存文件一般在<code>bootstrap/cache/routes.php</code> 文件中。 方法loadRoutes会调用map方法来加载路由文件里的路由，map这个函数在<code>App\\Providers\\RouteServiceProvider</code>类中，这个类继承自<code>Illuminate\\Foundation\\Support\\Providers\\RouteServiceProvider</code>。通过map方法我们能看到laravel将路由分为两个大组：api、web。这两个部分的路由分别写在两个文件中：routes/web.php、routes/api.php。 Laravel5.5里是把路由分别放在了几个文件里，之前的版本是在app/Http/routes.php文件里。放在多个文件里能更方便地管理API路由和与WEB路由。</p><h3 id="路由注册" tabindex="-1">路由注册 <a class="header-anchor" href="#路由注册" aria-label="Permalink to &quot;路由注册&quot;">​</a></h3><p>我们通常都是用Route这个Facade调用静态方法get, post, head, options, put, patch, delete......等来注册路由，上面我们也说了这些静态方法其实是调用了Router类里的方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public function get($uri, $action = null)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;addRoute([&#39;GET&#39;, &#39;HEAD&#39;], $uri, $action);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public function post($uri, $action = null)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;addRoute(&#39;POST&#39;, $uri, $action);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public function get($uri, $action = null)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;addRoute([&#39;GET&#39;, &#39;HEAD&#39;], $uri, $action);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public function post($uri, $action = null)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;addRoute(&#39;POST&#39;, $uri, $action);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>可以看到路由的注册统一都是由router类的addRoute方法来处理的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//注册路由到RouteCollection</span></span>
<span class="line"><span style="color:#e1e4e8;">protected function addRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;routes-&gt;add($this-&gt;createRoute($methods, $uri, $action));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//创建路由</span></span>
<span class="line"><span style="color:#e1e4e8;">protected function createRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">if ($this-&gt;actionReferencesController($action)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  //controller@action类型的路由在这里要进行转换</span></span>
<span class="line"><span style="color:#e1e4e8;">  $action = $this-&gt;convertToControllerAction($action);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$route = $this-&gt;newRoute(</span></span>
<span class="line"><span style="color:#e1e4e8;">      $methods, $this-&gt;prefix($uri), $action</span></span>
<span class="line"><span style="color:#e1e4e8;">      );</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if ($this-&gt;hasGroupStack()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	$this-&gt;mergeGroupAttributesIntoRoute($route);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;addWhereClausesToRoute($route);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">return $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function convertToControllerAction($action)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">if (is_string($action)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	$action = [&#39;uses&#39; =&gt; $action];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if (! empty($this-&gt;groupStack)) {        </span></span>
<span class="line"><span style="color:#e1e4e8;">	$action[&#39;uses&#39;] = $this-&gt;prependGroupNamespace($action[&#39;uses&#39;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$action[&#39;controller&#39;] = $action[&#39;uses&#39;];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">return $action;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//注册路由到RouteCollection</span></span>
<span class="line"><span style="color:#24292e;">protected function addRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;routes-&gt;add($this-&gt;createRoute($methods, $uri, $action));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//创建路由</span></span>
<span class="line"><span style="color:#24292e;">protected function createRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">if ($this-&gt;actionReferencesController($action)) {</span></span>
<span class="line"><span style="color:#24292e;">  //controller@action类型的路由在这里要进行转换</span></span>
<span class="line"><span style="color:#24292e;">  $action = $this-&gt;convertToControllerAction($action);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$route = $this-&gt;newRoute(</span></span>
<span class="line"><span style="color:#24292e;">      $methods, $this-&gt;prefix($uri), $action</span></span>
<span class="line"><span style="color:#24292e;">      );</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if ($this-&gt;hasGroupStack()) {</span></span>
<span class="line"><span style="color:#24292e;">	$this-&gt;mergeGroupAttributesIntoRoute($route);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;addWhereClausesToRoute($route);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">return $route;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function convertToControllerAction($action)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">if (is_string($action)) {</span></span>
<span class="line"><span style="color:#24292e;">	$action = [&#39;uses&#39; =&gt; $action];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if (! empty($this-&gt;groupStack)) {        </span></span>
<span class="line"><span style="color:#24292e;">	$action[&#39;uses&#39;] = $this-&gt;prependGroupNamespace($action[&#39;uses&#39;]);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$action[&#39;controller&#39;] = $action[&#39;uses&#39;];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">return $action;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注册路由时传递给addRoute的第三个参数action可以闭包、字符串或者数组，数组就是类似<code>[&#39;uses&#39; =&gt; &#39;Controller@action&#39;, &#39;middleware&#39; =&gt; &#39;...]</code>这种形式的。如果action是Controller@action类型的路由将被转换为action数组, convertToControllerAction执行完后action的内容为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;uses&#39; =&gt; &#39;App\\Http\\Controllers\\SomeController@someAction&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;controller&#39; =&gt; &#39;App\\Http\\Controllers\\SomeController@someAction&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">&#39;uses&#39; =&gt; &#39;App\\Http\\Controllers\\SomeController@someAction&#39;,</span></span>
<span class="line"><span style="color:#24292e;">&#39;controller&#39; =&gt; &#39;App\\Http\\Controllers\\SomeController@someAction&#39;</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>可以看到把命名空间补充到了控制器的名称前组成了完整的控制器类名，action数组构建完成接下里就是创建路由了，创建路由即用指定的HTTP请求方法、URI字符串和action数组来创建\\Illuminate\\Routing\\Route类的实例:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">protected function newRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">return (new Route($methods, $uri, $action))</span></span>
<span class="line"><span style="color:#e1e4e8;">    -&gt;setRouter($this)</span></span>
<span class="line"><span style="color:#e1e4e8;">    -&gt;setContainer($this-&gt;container);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">protected function newRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">return (new Route($methods, $uri, $action))</span></span>
<span class="line"><span style="color:#24292e;">    -&gt;setRouter($this)</span></span>
<span class="line"><span style="color:#24292e;">    -&gt;setContainer($this-&gt;container);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>路由创建完成后将Route添加到RouteCollection中去：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">protected function addRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;routes-&gt;add($this-&gt;createRoute($methods, $uri, $action));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">protected function addRoute($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;routes-&gt;add($this-&gt;createRoute($methods, $uri, $action));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>router的$routes属性就是一个RouteCollection对象，添加路由到RouteCollection对象时会更新RouteCollection对象的routes、allRoutes、nameList和actionList属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class RouteCollection implements Countable, IteratorAggregate</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function add(Route $route)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;addToCollections($route);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;addLookups($route);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function addToCollections($route)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $domainAndUri = $route-&gt;getDomain().$route-&gt;uri();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  foreach ($route-&gt;methods() as $method) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	$this-&gt;routes[$method][$domainAndUri] = $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;allRoutes[$method.$domainAndUri] = $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function addLookups($route)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $action = $route-&gt;getAction();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (isset($action[&#39;as&#39;])) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      //如果时命名路由，将route对象映射到以路由名为key的数组值中方便查找</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;nameList[$action[&#39;as&#39;]] = $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (isset($action[&#39;controller&#39;])) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	$this-&gt;addToActionList($action, $route);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class RouteCollection implements Countable, IteratorAggregate</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function add(Route $route)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;addToCollections($route);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;addLookups($route);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return $route;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function addToCollections($route)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $domainAndUri = $route-&gt;getDomain().$route-&gt;uri();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  foreach ($route-&gt;methods() as $method) {</span></span>
<span class="line"><span style="color:#24292e;">  	$this-&gt;routes[$method][$domainAndUri] = $route;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;allRoutes[$method.$domainAndUri] = $route;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function addLookups($route)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $action = $route-&gt;getAction();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (isset($action[&#39;as&#39;])) {</span></span>
<span class="line"><span style="color:#24292e;">      //如果时命名路由，将route对象映射到以路由名为key的数组值中方便查找</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;nameList[$action[&#39;as&#39;]] = $route;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (isset($action[&#39;controller&#39;])) {</span></span>
<span class="line"><span style="color:#24292e;">  	$this-&gt;addToActionList($action, $route);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>RouteCollection的四个属性 routes中存放了HTTP请求方法与路由对象的映射：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;GET&#39; =&gt; [</span></span>
<span class="line"><span style="color:#e1e4e8;">  $routeUri1 =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#e1e4e8;">  ...</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span>
<span class="line"><span style="color:#e1e4e8;">	...</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">  &#39;GET&#39; =&gt; [</span></span>
<span class="line"><span style="color:#24292e;">  $routeUri1 =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#24292e;">  ...</span></span>
<span class="line"><span style="color:#24292e;">]</span></span>
<span class="line"><span style="color:#24292e;">	...</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>allRoutes属性里存放的内容时将routes属性里的二位数组编程一位数组后的内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;GET&#39; . $routeUri1 =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;GET&#39; . $routeUri2 =&gt; $routeObj2</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">&#39;GET&#39; . $routeUri1 =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#24292e;">&#39;GET&#39; . $routeUri2 =&gt; $routeObj2</span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>nameList是路由名称与路由对象的一个映射表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">$routeName1 =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">$routeName1 =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>actionList是路由控制器方法字符串与路由对象的映射表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">	&#39;App\\Http\\Controllers\\ControllerOne@ActionOne&#39; =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">	&#39;App\\Http\\Controllers\\ControllerOne@ActionOne&#39; =&gt; $routeObj1</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>这样就算注册好路由了。</p><h3 id="路由寻址" tabindex="-1">路由寻址 <a class="header-anchor" href="#路由寻址" aria-label="Permalink to &quot;路由寻址&quot;">​</a></h3><p>中间件的文章里我们说过HTTP请求在经过Pipeline通道上的中间件的前置操作后到达目的地：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//Illuminate\\Foundation\\Http\\Kernel</span></span>
<span class="line"><span style="color:#e1e4e8;">class Kernel implements KernelContract</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">protected function sendRequestThroughRouter($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  Facade::clearResolvedInstance(&#39;request&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;bootstrap();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (new Pipeline($this-&gt;app))</span></span>
<span class="line"><span style="color:#e1e4e8;">            -&gt;send($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">            -&gt;through($this-&gt;app-&gt;shouldSkipMiddleware() ? [] : $this-&gt;middleware)</span></span>
<span class="line"><span style="color:#e1e4e8;">            -&gt;then($this-&gt;dispatchToRouter());</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function dispatchToRouter()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  return function ($request) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return $this-&gt;router-&gt;dispatch($request);</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//Illuminate\\Foundation\\Http\\Kernel</span></span>
<span class="line"><span style="color:#24292e;">class Kernel implements KernelContract</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">protected function sendRequestThroughRouter($request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  Facade::clearResolvedInstance(&#39;request&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;bootstrap();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (new Pipeline($this-&gt;app))</span></span>
<span class="line"><span style="color:#24292e;">            -&gt;send($request)</span></span>
<span class="line"><span style="color:#24292e;">            -&gt;through($this-&gt;app-&gt;shouldSkipMiddleware() ? [] : $this-&gt;middleware)</span></span>
<span class="line"><span style="color:#24292e;">            -&gt;then($this-&gt;dispatchToRouter());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function dispatchToRouter()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  return function ($request) {</span></span>
<span class="line"><span style="color:#24292e;">    $this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#24292e;">    return $this-&gt;router-&gt;dispatch($request);</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>上面代码可以看到Pipeline的destination就是dispatchToRouter函数返回的闭包：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$destination = function ($request) {</span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#e1e4e8;">return $this-&gt;router-&gt;dispatch($request);</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$destination = function ($request) {</span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#24292e;">return $this-&gt;router-&gt;dispatch($request);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>在闭包里调用了router的dispatch方法，路由寻址就发生在dispatch的第一个阶段findRoute里：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Router implements RegistrarContract, BindingRegistrar</span></span>
<span class="line"><span style="color:#e1e4e8;">{    </span></span>
<span class="line"><span style="color:#e1e4e8;">public function dispatch(Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;currentRequest = $request;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return $this-&gt;dispatchToRoute($request);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public function dispatchToRoute(Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;runRoute($request, $this-&gt;findRoute($request));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function findRoute($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;current = $route = $this-&gt;routes-&gt;match($request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;container-&gt;instance(Route::class, $route);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Router implements RegistrarContract, BindingRegistrar</span></span>
<span class="line"><span style="color:#24292e;">{    </span></span>
<span class="line"><span style="color:#24292e;">public function dispatch(Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;currentRequest = $request;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return $this-&gt;dispatchToRoute($request);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public function dispatchToRoute(Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;runRoute($request, $this-&gt;findRoute($request));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function findRoute($request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;current = $route = $this-&gt;routes-&gt;match($request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;container-&gt;instance(Route::class, $route);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return $route;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>寻找路由的任务由 RouteCollection 负责，这个函数负责匹配路由，并且把 request 的 url 参数绑定到路由中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class RouteCollection implements Countable, IteratorAggregate</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function match(Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	$routes = $this-&gt;get($request-&gt;getMethod());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	$route = $this-&gt;matchAgainstRoutes($routes, $request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (! is_null($route)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    //找到匹配的路由后，将URI里的路径参数绑定赋值给路由(如果有的话)</span></span>
<span class="line"><span style="color:#e1e4e8;">  	return $route-&gt;bind($request);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $others = $this-&gt;checkForAlternateVerbs($request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (count($others) &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	return $this-&gt;getRouteForMethods($request, $others);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  	throw new NotFoundHttpException;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function matchAgainstRoutes(array $routes, $request, $includingMethod = true)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return Arr::first($routes, function ($value) use ($request, $includingMethod) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return $value-&gt;matches($request, $includingMethod);</span></span>
<span class="line"><span style="color:#e1e4e8;">	});</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Route</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function matches(Request $request, $includingMethod = true)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;compileRoute();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  foreach ($this-&gt;getValidators() as $validator) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (! $includingMethod &amp;&amp; $validator instanceof MethodValidator) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      	continue;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		if (! $validator-&gt;matches($this, $request)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class RouteCollection implements Countable, IteratorAggregate</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function match(Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	$routes = $this-&gt;get($request-&gt;getMethod());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	$route = $this-&gt;matchAgainstRoutes($routes, $request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (! is_null($route)) {</span></span>
<span class="line"><span style="color:#24292e;">    //找到匹配的路由后，将URI里的路径参数绑定赋值给路由(如果有的话)</span></span>
<span class="line"><span style="color:#24292e;">  	return $route-&gt;bind($request);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $others = $this-&gt;checkForAlternateVerbs($request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (count($others) &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">  	return $this-&gt;getRouteForMethods($request, $others);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  	throw new NotFoundHttpException;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function matchAgainstRoutes(array $routes, $request, $includingMethod = true)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return Arr::first($routes, function ($value) use ($request, $includingMethod) {</span></span>
<span class="line"><span style="color:#24292e;">		return $value-&gt;matches($request, $includingMethod);</span></span>
<span class="line"><span style="color:#24292e;">	});</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Route</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function matches(Request $request, $includingMethod = true)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;compileRoute();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  foreach ($this-&gt;getValidators() as $validator) {</span></span>
<span class="line"><span style="color:#24292e;">      if (! $includingMethod &amp;&amp; $validator instanceof MethodValidator) {</span></span>
<span class="line"><span style="color:#24292e;">      	continue;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		if (! $validator-&gt;matches($this, $request)) {</span></span>
<span class="line"><span style="color:#24292e;">			return false;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	return true;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>$routes = $this-&gt;get($request-&gt;getMethod());会先加载注册路由阶段在RouteCollection里生成的routes属性里的值，routes中存放了HTTP请求方法与路由对象的映射。</p><p>然后依次调用这堆路由里路由对象的matches方法， matches方法, matches方法里会对HTTP请求对象进行一些验证，验证对应的Validator是：UriValidator、MethodValidator、SchemeValidator、HostValidator。 在验证之前在$this-&gt;compileRoute()里会将路由的规则转换成正则表达式。</p><p>UriValidator主要是看请求对象的URI是否与路由的正则规则匹配能匹配上：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class UriValidator implements ValidatorInterface</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	public function matches(Route $route, Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">	{</span></span>
<span class="line"><span style="color:#e1e4e8;">		$path = $request-&gt;path() == &#39;/&#39; ? &#39;/&#39; : &#39;/&#39;.$request-&gt;path();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		return preg_match($route-&gt;getCompiled()-&gt;getRegex(), rawurldecode($path));</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class UriValidator implements ValidatorInterface</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	public function matches(Route $route, Request $request)</span></span>
<span class="line"><span style="color:#24292e;">	{</span></span>
<span class="line"><span style="color:#24292e;">		$path = $request-&gt;path() == &#39;/&#39; ? &#39;/&#39; : &#39;/&#39;.$request-&gt;path();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		return preg_match($route-&gt;getCompiled()-&gt;getRegex(), rawurldecode($path));</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>MethodValidator验证请求方法, SchemeValidator验证协议是否正确(http|https), HostValidator验证域名, 如果路由中不设置host属性，那么这个验证不会进行。</p><p>一旦某个路由通过了全部的认证就将会被返回，接下来就要将请求对象URI里的路径参数绑定赋值给路由参数。</p><h3 id="路由参数绑定" tabindex="-1">路由参数绑定 <a class="header-anchor" href="#路由参数绑定" aria-label="Permalink to &quot;路由参数绑定&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Route</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function bind(Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;compileRoute();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;parameters = (new RouteParameterBinder($this))</span></span>
<span class="line"><span style="color:#e1e4e8;">                -&gt;parameters($request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return $this;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}	</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class RouteParameterBinder</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function parameters($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $parameters = $this-&gt;bindPathParameters($request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  if (! is_null($this-&gt;route-&gt;compiled-&gt;getHostRegex())) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        $parameters = $this-&gt;bindHostParameters(</span></span>
<span class="line"><span style="color:#e1e4e8;">            $request, $parameters</span></span>
<span class="line"><span style="color:#e1e4e8;">        );</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		return $this-&gt;replaceDefaults($parameters);</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function bindPathParameters($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  preg_match($this-&gt;route-&gt;compiled-&gt;getRegex(), &#39;/&#39;.$request-&gt;decodedPath(), $matches);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return $this-&gt;matchToKeys(array_slice($matches, 1));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function matchToKeys(array $matches)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (empty($parameterNames = $this-&gt;route-&gt;parameterNames())) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $parameters = array_intersect_key($matches, array_flip($parameterNames));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return array_filter($parameters, function ($value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return is_string($value) &amp;&amp; strlen($value) &gt; 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">      });</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Route</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function bind(Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;compileRoute();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;parameters = (new RouteParameterBinder($this))</span></span>
<span class="line"><span style="color:#24292e;">                -&gt;parameters($request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return $this;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}	</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class RouteParameterBinder</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function parameters($request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $parameters = $this-&gt;bindPathParameters($request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  if (! is_null($this-&gt;route-&gt;compiled-&gt;getHostRegex())) {</span></span>
<span class="line"><span style="color:#24292e;">        $parameters = $this-&gt;bindHostParameters(</span></span>
<span class="line"><span style="color:#24292e;">            $request, $parameters</span></span>
<span class="line"><span style="color:#24292e;">        );</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		return $this-&gt;replaceDefaults($parameters);</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function bindPathParameters($request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  preg_match($this-&gt;route-&gt;compiled-&gt;getRegex(), &#39;/&#39;.$request-&gt;decodedPath(), $matches);</span></span>
<span class="line"><span style="color:#24292e;">  return $this-&gt;matchToKeys(array_slice($matches, 1));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function matchToKeys(array $matches)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  if (empty($parameterNames = $this-&gt;route-&gt;parameterNames())) {</span></span>
<span class="line"><span style="color:#24292e;">      return [];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $parameters = array_intersect_key($matches, array_flip($parameterNames));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return array_filter($parameters, function ($value) {</span></span>
<span class="line"><span style="color:#24292e;">          return is_string($value) &amp;&amp; strlen($value) &gt; 0;</span></span>
<span class="line"><span style="color:#24292e;">      });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>赋值路由参数完成后路由寻址的过程就结束了，结下来就该运行通过匹配路由中对应的控制器方法返回响应对象了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Router implements RegistrarContract, BindingRegistrar</span></span>
<span class="line"><span style="color:#e1e4e8;">{    </span></span>
<span class="line"><span style="color:#e1e4e8;">public function dispatch(Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;currentRequest = $request;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return $this-&gt;dispatchToRoute($request);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public function dispatchToRoute(Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	return $this-&gt;runRoute($request, $this-&gt;findRoute($request));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function runRoute(Request $request, Route $route)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $request-&gt;setRouteResolver(function () use ($route) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	return $route;</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;events-&gt;dispatch(new Events\\RouteMatched($route, $request));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return $this-&gt;prepareResponse($request,</span></span>
<span class="line"><span style="color:#e1e4e8;">  	$this-&gt;runRouteWithinStack($route, $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">protected function runRouteWithinStack(Route $route, Request $request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $shouldSkipMiddleware = $this-&gt;container-&gt;bound(&#39;middleware.disable&#39;) &amp;&amp;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    $this-&gt;container-&gt;make(&#39;middleware.disable&#39;) === true;</span></span>
<span class="line"><span style="color:#e1e4e8;">  //收集路由和控制器里应用的中间件</span></span>
<span class="line"><span style="color:#e1e4e8;">  $middleware = $shouldSkipMiddleware ? [] : $this-&gt;gatherRouteMiddleware($route);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return (new Pipeline($this-&gt;container))</span></span>
<span class="line"><span style="color:#e1e4e8;">            -&gt;send($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">            -&gt;through($middleware)</span></span>
<span class="line"><span style="color:#e1e4e8;">            -&gt;then(function ($request) use ($route) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return $this-&gt;prepareResponse(</span></span>
<span class="line"><span style="color:#e1e4e8;">                    $request, $route-&gt;run()</span></span>
<span class="line"><span style="color:#e1e4e8;">                );</span></span>
<span class="line"><span style="color:#e1e4e8;">            });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">namespace Illuminate\\Routing;</span></span>
<span class="line"><span style="color:#e1e4e8;">class Route</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">public function run()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;container = $this-&gt;container ?: new Container;</span></span>
<span class="line"><span style="color:#e1e4e8;">  try {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if ($this-&gt;isControllerAction()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      	return $this-&gt;runController();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return $this-&gt;runCallable();</span></span>
<span class="line"><span style="color:#e1e4e8;">  } catch (HttpResponseException $e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	return $e-&gt;getResponse();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Router implements RegistrarContract, BindingRegistrar</span></span>
<span class="line"><span style="color:#24292e;">{    </span></span>
<span class="line"><span style="color:#24292e;">public function dispatch(Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;currentRequest = $request;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return $this-&gt;dispatchToRoute($request);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public function dispatchToRoute(Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	return $this-&gt;runRoute($request, $this-&gt;findRoute($request));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function runRoute(Request $request, Route $route)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $request-&gt;setRouteResolver(function () use ($route) {</span></span>
<span class="line"><span style="color:#24292e;">  	return $route;</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;events-&gt;dispatch(new Events\\RouteMatched($route, $request));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return $this-&gt;prepareResponse($request,</span></span>
<span class="line"><span style="color:#24292e;">  	$this-&gt;runRouteWithinStack($route, $request)</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">protected function runRouteWithinStack(Route $route, Request $request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $shouldSkipMiddleware = $this-&gt;container-&gt;bound(&#39;middleware.disable&#39;) &amp;&amp;</span></span>
<span class="line"><span style="color:#24292e;">                    $this-&gt;container-&gt;make(&#39;middleware.disable&#39;) === true;</span></span>
<span class="line"><span style="color:#24292e;">  //收集路由和控制器里应用的中间件</span></span>
<span class="line"><span style="color:#24292e;">  $middleware = $shouldSkipMiddleware ? [] : $this-&gt;gatherRouteMiddleware($route);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return (new Pipeline($this-&gt;container))</span></span>
<span class="line"><span style="color:#24292e;">            -&gt;send($request)</span></span>
<span class="line"><span style="color:#24292e;">            -&gt;through($middleware)</span></span>
<span class="line"><span style="color:#24292e;">            -&gt;then(function ($request) use ($route) {</span></span>
<span class="line"><span style="color:#24292e;">                return $this-&gt;prepareResponse(</span></span>
<span class="line"><span style="color:#24292e;">                    $request, $route-&gt;run()</span></span>
<span class="line"><span style="color:#24292e;">                );</span></span>
<span class="line"><span style="color:#24292e;">            });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">namespace Illuminate\\Routing;</span></span>
<span class="line"><span style="color:#24292e;">class Route</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">public function run()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;container = $this-&gt;container ?: new Container;</span></span>
<span class="line"><span style="color:#24292e;">  try {</span></span>
<span class="line"><span style="color:#24292e;">      if ($this-&gt;isControllerAction()) {</span></span>
<span class="line"><span style="color:#24292e;">      	return $this-&gt;runController();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return $this-&gt;runCallable();</span></span>
<span class="line"><span style="color:#24292e;">  } catch (HttpResponseException $e) {</span></span>
<span class="line"><span style="color:#24292e;">  	return $e-&gt;getResponse();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这里我们主要介绍路由相关的内容，runRoute的过程通过上面的源码可以看到其实也很复杂， 会收集路由和控制器里的中间件，将请求通过中间件过滤才会最终到达目的地路由，执行目的路由地run()方法，里面会判断路由对应的是一个控制器方法还是闭包然后进行相应地调用，最后把执行结果包装成Response对象返回给客户端。这个过程还会涉及到我们以前介绍过的中间件过滤、服务解析、依赖注入方面的信息，如果在看源码时有不懂的地方可以翻看我之前写的文章。</p><p>———————————————— 版权声明：本文为CSDN博主「kevin_tech」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。 原文链接：<a href="https://blog.csdn.net/kevin_tech/article/details/104093933" target="_blank" rel="noreferrer">https://blog.csdn.net/kevin_tech/article/details/104093933</a></p></blockquote><p>现在我们就来回答之前提到的两个问题：</p><ol><li>$routes和$allRoutes值是从哪里来的？</li><li>如何保证在<code>findRoute</code>方法运行时，调用的RouteCollection类自身$routes值和$allRoutes值就是之前操作过程中得到的值？</li></ol><p>关键点在下面这个方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sendRequestThroughRouter</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">instance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request&#39;</span><span style="color:#E1E4E8;">, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Facade</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">clearResolvedInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bootstrap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Pipeline</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app))</span></span>
<span class="line"><span style="color:#E1E4E8;">		    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">		    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">through</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">shouldSkipMiddleware</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middleware)</span></span>
<span class="line"><span style="color:#E1E4E8;">		    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dispatchToRouter</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sendRequestThroughRouter</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">instance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request&#39;</span><span style="color:#24292E;">, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Facade</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">clearResolvedInstance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bootstrap</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Pipeline</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app))</span></span>
<span class="line"><span style="color:#24292E;">		    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">		    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">through</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">shouldSkipMiddleware</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> [] </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middleware)</span></span>
<span class="line"><span style="color:#24292E;">		    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dispatchToRouter</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这个方法是Kernel类(vendor\\laravel\\framework\\src\\Illuminate\\Foundation\\Http\\Kernel.php)的一个方法，它是index.php在执行$kernel对象的handle方法时触发的：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">($request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">enableHttpMethodParameterOverride</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        $response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sendRequestThroughRouter</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> $e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reportException</span><span style="color:#E1E4E8;">($e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        $response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">renderException</span><span style="color:#E1E4E8;">($request, $e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Throwable</span><span style="color:#E1E4E8;"> $e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reportException</span><span style="color:#E1E4E8;">($e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FatalThrowableError</span><span style="color:#E1E4E8;">($e));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        $response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">renderException</span><span style="color:#E1E4E8;">($request, $e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app[</span><span style="color:#9ECBFF;">&#39;events&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Events\\RequestHandled</span><span style="color:#E1E4E8;">($request, $response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $response;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">($request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        $request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">enableHttpMethodParameterOverride</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        $response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sendRequestThroughRouter</span><span style="color:#24292E;">($request);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> $e) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reportException</span><span style="color:#24292E;">($e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        $response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">renderException</span><span style="color:#24292E;">($request, $e);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Throwable</span><span style="color:#24292E;"> $e) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reportException</span><span style="color:#24292E;">($e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FatalThrowableError</span><span style="color:#24292E;">($e));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        $response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">renderException</span><span style="color:#24292E;">($request, $e);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app[</span><span style="color:#032F62;">&#39;events&#39;</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Events\\RequestHandled</span><span style="color:#24292E;">($request, $response)</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $response;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>sendRequestThroughRouter</code>方法中的关键语句<code>$this-&gt;bootstrap()</code>语句，会触发<code>\\Illuminate\\Foundation\\Bootstrap\\BootProviders</code>类上的<code>boostrap</code>方法运行，这个类的<code>bootstrap</code>方法实际就是触发容器运行<code>boot</code>方法；容器运行<code>boot</code>方法时，又会触发所有注册的ServiceProvider类型类运行自身的<code>boot</code>方法。</p><blockquote><p>Provider类的注册和加载进制，请参考【附录十一】</p></blockquote><p>这样就触发了RouteServiceProvider(app/Providers/RouteServiceProvider.php)类上的<code>boot</code>方法执行：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">boot</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">parent::</span><span style="color:#B392F0;">boot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">boot</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">parent::</span><span style="color:#6F42C1;">boot</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里，又再次指向了父类(Illuminate\\Foundation\\Support\\Providers\\RouteServiceProvider)的<code>boot</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">boot</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">setRootControllerNamespace</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">routesAreCached</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">loadCachedRoutes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">loadRoutes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">booted</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app[</span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getRoutes</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">refreshNameLookups</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app[</span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getRoutes</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">refreshActionLookups</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">		});</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">boot</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">setRootControllerNamespace</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">routesAreCached</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">loadCachedRoutes</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">loadRoutes</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">booted</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app[</span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getRoutes</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">refreshNameLookups</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app[</span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getRoutes</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">refreshActionLookups</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">		});</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>继续看<code>loadRoutes</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadRoutes</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">method_exists</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;map&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;map&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadRoutes</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">method_exists</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;map&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;map&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这样，又回到<code>App\\Providers\\RouteServiceProvider</code>的<code>map</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapApiRoutes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapWebRoutes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapApiRoutes</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapWebRoutes</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里我们只需要分析其中一个方法即可，以mapWebRoutes为例：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapWebRoutes</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Route</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">middleware</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;web&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">	     </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">namespace</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">namespace)</span></span>
<span class="line"><span style="color:#E1E4E8;">	     </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">group</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">base_path</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;routes/web.php&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapWebRoutes</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Route</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">middleware</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;web&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">	     </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">namespace</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">namespace)</span></span>
<span class="line"><span style="color:#24292E;">	     </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">group</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">base_path</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;routes/web.php&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>到这里，我们需要继续追踪<code>middleware</code>这个方法在哪个位置，我们知道代码中的Route实际是代理的Router类，但是Router类中并没有<code>middleware</code>这个静态方法，这是怎么回事呢？</p><p>要弄清楚这一点，我们需要对laravel中的Macroable这个trait有清晰的的认识。我们注意到，Router类的源码中包含下面的部分：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RegistrarContract</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">BindingRegistrar</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Macroable</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">__call</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">macroCall</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__call</span><span style="color:#E1E4E8;">($method, $parameters)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">static::</span><span style="color:#B392F0;">hasMacro</span><span style="color:#E1E4E8;">($method)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">macroCall</span><span style="color:#E1E4E8;">($method, $parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($method </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;middleware&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">RouteRegistrar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">))</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">attribute</span><span style="color:#E1E4E8;">($method, </span><span style="color:#79B8FF;">is_array</span><span style="color:#E1E4E8;">($parameters[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> $parameters[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> $parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">RouteRegistrar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">))</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">attribute</span><span style="color:#E1E4E8;">($method, $parameters[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegistrarContract</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">BindingRegistrar</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Macroable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">__call</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">macroCall</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__call</span><span style="color:#24292E;">($method, $parameters)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">static::</span><span style="color:#6F42C1;">hasMacro</span><span style="color:#24292E;">($method)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">macroCall</span><span style="color:#24292E;">($method, $parameters);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($method </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;middleware&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">RouteRegistrar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">))</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">attribute</span><span style="color:#24292E;">($method, </span><span style="color:#005CC5;">is_array</span><span style="color:#24292E;">($parameters[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> $parameters[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> $parameters);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">RouteRegistrar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">))</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">attribute</span><span style="color:#24292E;">($method, $parameters[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>现在笔者简单解释一下，包含上面这个两个部分的代码后，发生了什么：</p><p>1）首先Macroable中定义的所有方法会自动对Router类生效</p><p>2）由于Macroable中也定义了一个__call方法，因此将Macroable中的__call方法取一个别名为<code>macroCall</code> ，供本类代码调用</p><p>这样当调用middleware时，代码会进入__call中的第二个if分支(注意：__call实际是php类中的保留方法(也称魔术方法)，当调用的方法在类中没有定义时，会自动进入这个方法中)。这样我们就清楚了，接下来我们要去追踪<code>RouteRegistrar</code>类的<code>attribute</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">attribute</span><span style="color:#E1E4E8;">($key, $value)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">in_array</span><span style="color:#E1E4E8;">($key, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">allowedAttributes)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">InvalidArgumentException</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Attribute [{</span><span style="color:#E1E4E8;">$key</span><span style="color:#9ECBFF;">}] does not exist.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">attributes[</span><span style="color:#79B8FF;">Arr</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">aliases, $key, $key)] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">attribute</span><span style="color:#24292E;">($key, $value)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">in_array</span><span style="color:#24292E;">($key, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">allowedAttributes)) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">InvalidArgumentException</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Attribute [{</span><span style="color:#24292E;">$key</span><span style="color:#032F62;">}] does not exist.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">attributes[</span><span style="color:#005CC5;">Arr</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">aliases, $key, $key)] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这个方法返回的是RouteRegistrar对象本身，之后的链接调用语句来到这里：<code>-&gt;namespace($this-&gt;namespace)</code>，此时代码会进入<code>RouteRegistrar</code>类的__call方法中(因为<code>RouteRegistrar</code>类没有定义这个<code>namespace</code>方法)：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__call</span><span style="color:#E1E4E8;">($method, $parameters)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">in_array</span><span style="color:#E1E4E8;">($method, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">passthru)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerRoute</span><span style="color:#E1E4E8;">($method, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">$parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">in_array</span><span style="color:#E1E4E8;">($method, </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">allowedAttributes)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($method </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;middleware&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">attribute</span><span style="color:#E1E4E8;">($method, </span><span style="color:#79B8FF;">is_array</span><span style="color:#E1E4E8;">($parameters[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> $parameters[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> $parameters);</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">attribute</span><span style="color:#E1E4E8;">($method, $parameters[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BadMethodCallException</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">sprintf</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#9ECBFF;">&#39;Method %s::%s does not exist.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">static::class</span><span style="color:#E1E4E8;">, $method</span></span>
<span class="line"><span style="color:#E1E4E8;">    ));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__call</span><span style="color:#24292E;">($method, $parameters)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">in_array</span><span style="color:#24292E;">($method, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">passthru)) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerRoute</span><span style="color:#24292E;">($method, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">$parameters);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">in_array</span><span style="color:#24292E;">($method, </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">allowedAttributes)) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($method </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;middleware&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">attribute</span><span style="color:#24292E;">($method, </span><span style="color:#005CC5;">is_array</span><span style="color:#24292E;">($parameters[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> $parameters[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> $parameters);</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">attribute</span><span style="color:#24292E;">($method, $parameters[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BadMethodCallException</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">sprintf</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#032F62;">&#39;Method %s::%s does not exist.&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">static::class</span><span style="color:#24292E;">, $method</span></span>
<span class="line"><span style="color:#24292E;">    ));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>代码进入第二个if分支，仍然调用的是<code>RouteRegistrar</code>类的<code>attribute</code>方法，接下来链式调用语句来到最后一句：<code>-&gt;group(base_path(&#39;routes/web.php&#39;))</code>，继续追踪<code>RouteRegistrar</code>的group方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">group</span><span style="color:#E1E4E8;">($callback)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">router</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">group</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">attributes, $callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">group</span><span style="color:#24292E;">($callback)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">group</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">attributes, $callback);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>到这里，我们终于看到执行<code>mapWebRoutes</code>方法的终点，实际是调用<code>Router</code>类自身的<code>group</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">group</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">array</span><span style="color:#E1E4E8;"> $attributes, $routes)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">updateGroupStack</span><span style="color:#E1E4E8;">($attributes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// Once we have updated the group stack, we&#39;ll load the provided routes and</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// merge in the group&#39;s attributes when the routes are created. After we</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// have created the routes, we will pop the attributes off the stack.</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">loadRoutes</span><span style="color:#E1E4E8;">($routes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">array_pop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">groupStack);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">group</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">array</span><span style="color:#24292E;"> $attributes, $routes)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">updateGroupStack</span><span style="color:#24292E;">($attributes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// Once we have updated the group stack, we&#39;ll load the provided routes and</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// merge in the group&#39;s attributes when the routes are created. After we</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// have created the routes, we will pop the attributes off the stack.</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">loadRoutes</span><span style="color:#24292E;">($routes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">array_pop</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">groupStack);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>继续追踪<code>loadRoutes</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadRoutes</span><span style="color:#E1E4E8;">($routes)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($routes </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Closure</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		$routes(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">RouteFileRegistrar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">))</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">($routes);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadRoutes</span><span style="color:#24292E;">($routes)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($routes </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Closure</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		$routes(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">RouteFileRegistrar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">))</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">($routes);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>我们知道，此时传递进来的$routes参数值是一个路由文件的路径，并不是闭包，因此代码进入else分支，继续追踪<code>RouteFileRegistrar</code>类的<code>register</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Require the given routes file.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $routes</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">($routes)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	$router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">router;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">require</span><span style="color:#E1E4E8;"> $routes;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Require the given routes file.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $routes</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">($routes)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	$router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">router;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">require</span><span style="color:#24292E;"> $routes;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>终于，我们看到路由文件被直接require了。</p><p>当路由文件被<code>require</code>之后，路由文件中的php代码会逐条运行，我们以最常见的<code>get</code>、<code>post</code>来举例：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Route</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/profile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;TestController@profile&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">Route</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/profile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;TestController@profile&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Route</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/profile&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;TestController@profile&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">Route</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/profile&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;TestController@profile&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>直接看Router类的get和post方法源码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">($uri, $action </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">addRoute</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;HEAD&#39;</span><span style="color:#E1E4E8;">], $uri, $action);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">($uri, $action </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">addRoute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">, $uri, $action);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">($uri, $action </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">addRoute</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;HEAD&#39;</span><span style="color:#24292E;">], $uri, $action);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">($uri, $action </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">addRoute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">, $uri, $action);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这两个方法都指向<code>addRoute</code>：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addRoute</span><span style="color:#E1E4E8;">($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routes</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">createRoute</span><span style="color:#E1E4E8;">($methods, $uri, $action));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addRoute</span><span style="color:#24292E;">($methods, $uri, $action)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routes</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">createRoute</span><span style="color:#24292E;">($methods, $uri, $action));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>继续追踪<code>add</code>:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;"> $route)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">addToCollections</span><span style="color:#E1E4E8;">($route);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">addLookups</span><span style="color:#E1E4E8;">($route);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $route;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Route</span><span style="color:#24292E;"> $route)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">addToCollections</span><span style="color:#24292E;">($route);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">addLookups</span><span style="color:#24292E;">($route);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $route;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>继续追踪<code>addToCollections</code>：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addToCollections</span><span style="color:#E1E4E8;">($route)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	$domainAndUri </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $route</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getDomain</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$route</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">uri</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($route</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $method) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routes[$method][$domainAndUri] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $route;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">allRoutes[$method</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$domainAndUri] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $route;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addToCollections</span><span style="color:#24292E;">($route)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	$domainAndUri </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getDomain</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">uri</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $method) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routes[$method][$domainAndUri] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $route;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">allRoutes[$method</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$domainAndUri] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $route;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>到这里，大家应该能很清楚地看到，路由加载过程中，$routes和$allRoutes变量值是怎样被赋值的了。</p><p>剩下的另一个问题是：如何保证在<code>findRoute</code>方法运行时，调用的RouteCollection类自身$routes值和$allRoutes值就是之前操作过程中得到的值？</p><p>答案：Laravel通过操作一个单例Router来保证所有操作都在同一个Router对象上，既然是对同一个对象进行的操作，那这个对象的成员变量值自然在操作的各个阶段都能保持一致了。</p><p>要明白这一点，我们需要回退到容器的实例化阶段：</p><p>在app.php文件(bootstrap/app.php)中执行下面这一行代码时：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Foundation\\Application</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    $_ENV[</span><span style="color:#9ECBFF;">&#39;APP_BASE_PATH&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">__DIR__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Foundation\\Application</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    $_ENV[</span><span style="color:#032F62;">&#39;APP_BASE_PATH&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">__DIR__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>会触发Application类的构造函数运行：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">($basePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($basePath) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">setBasePath</span><span style="color:#E1E4E8;">($basePath);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerBaseBindings</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerBaseServiceProviders</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerCoreContainerAliases</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">($basePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($basePath) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">setBasePath</span><span style="color:#24292E;">($basePath);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerBaseBindings</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerBaseServiceProviders</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerCoreContainerAliases</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在<code>$this-&gt;registerBaseServiceProviders()</code>阶段：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">registerBaseServiceProviders</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">EventServiceProvider</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LogServiceProvider</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">RoutingServiceProvider</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">registerBaseServiceProviders</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">EventServiceProvider</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LogServiceProvider</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">RoutingServiceProvider</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>最后这条语句：<code>$this-&gt;register(new RoutingServiceProvider($this));</code>会触发运行<code>RoutingServiceProvider</code>类自身的<code>register</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerRouter</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerUrlGenerator</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerRedirector</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerPsrRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerPsrResponse</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerResponseFactory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">registerControllerDispatcher</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerRouter</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerUrlGenerator</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerRedirector</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerPsrRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerPsrResponse</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerResponseFactory</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">registerControllerDispatcher</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这个方法中的第一句：<code>$this-&gt;registerRouter();</code></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">registerRouter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">singleton</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($app) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;">($app[</span><span style="color:#9ECBFF;">&#39;events&#39;</span><span style="color:#E1E4E8;">], $app);</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">registerRouter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">singleton</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($app) {</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Router</span><span style="color:#24292E;">($app[</span><span style="color:#032F62;">&#39;events&#39;</span><span style="color:#24292E;">], $app);</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这就是典型的单例形式的绑定，表示容器会共享这个对象。容器在实例化阶段，完成了router类的注册。那在调用阶段中，确保了传递</p><p>的都是同一个router吗？</p><p>现在我们验证两个调用Router类的地方：</p><p>1）Kernel类中的成员变量$router</p><p>2）自定义路由的路由文件中引用的<code>Route</code>类</p><p>对1），Kernel类中的成员变量router值，实际是在构造函数中进行赋值操作的：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Application</span><span style="color:#E1E4E8;"> $app, </span><span style="color:#79B8FF;">Router</span><span style="color:#E1E4E8;"> $router)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $app;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $router;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	$router</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middlewarePriority </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middlewarePriority;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">middlewareGroups </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $key </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $middleware) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		$router</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">middlewareGroup</span><span style="color:#E1E4E8;">($key, $middleware);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">routeMiddleware </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $key </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $middleware) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		$router</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">aliasMiddleware</span><span style="color:#E1E4E8;">($key, $middleware);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Application</span><span style="color:#24292E;"> $app, </span><span style="color:#005CC5;">Router</span><span style="color:#24292E;"> $router)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $app;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $router;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	$router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middlewarePriority </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middlewarePriority;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">middlewareGroups </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $key </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $middleware) {</span></span>
<span class="line"><span style="color:#24292E;">		$router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">middlewareGroup</span><span style="color:#24292E;">($key, $middleware);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">routeMiddleware </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $key </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $middleware) {</span></span>
<span class="line"><span style="color:#24292E;">		$router</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">aliasMiddleware</span><span style="color:#24292E;">($key, $middleware);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里的Kernel类在实例化时，创建出来的router对象就是容器中共享的实例router吗？</p><p>答案是肯定的。大家可以回顾一下<code>make</code>方法调用的<code>resolve</code>方法（见【附录三】）的源码。<code>singleton</code>方式注册的类make时是直接返回instance中保存的值的。</p><p>那路由文件中的引用的Route，是不是也指向共享实例router呢？</p><p>比如：<code>Route::get(&#39;/profile&#39;, &#39;TestController@profile&#39;);</code></p><p>要搞清楚这里，需要大家对Laravel中的Facade机制有深入的理解。由于Route是代理的Router类，在Facade机制下，调用<code>Route::get()</code>时，会从Facade类中的app(指向全局容器对象)对象上获取router键值，这个router键的值正好是容器实例化阶段绑定上去的Router类。</p><p>到目前为止，我们只讲清楚了RouteCollection类中<code>match</code>方法的第一行代码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	$routes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">($request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getMethod</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// First, we will see if we can find a matching route for this current request</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// method. If we can, great, we can just return it so that it can be called</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// by the consumer. Otherwise we will check for routes with another verb.</span></span>
<span class="line"><span style="color:#E1E4E8;">	$route </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">matchAgainstRoutes</span><span style="color:#E1E4E8;">($routes, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">is_null</span><span style="color:#E1E4E8;">($route)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $route</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// If no route was found we will now check if a matching route is specified by</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// another HTTP verb. If it is we will need to throw a MethodNotAllowed and</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// inform the user agent of which HTTP verb it should use for this route.</span></span>
<span class="line"><span style="color:#E1E4E8;">	$others </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">checkForAlternateVerbs</span><span style="color:#E1E4E8;">($request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">($others) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getRouteForMethods</span><span style="color:#E1E4E8;">($request, $others);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NotFoundHttpException</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	$routes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">($request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getMethod</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// First, we will see if we can find a matching route for this current request</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// method. If we can, great, we can just return it so that it can be called</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// by the consumer. Otherwise we will check for routes with another verb.</span></span>
<span class="line"><span style="color:#24292E;">	$route </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">matchAgainstRoutes</span><span style="color:#24292E;">($routes, $request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">is_null</span><span style="color:#24292E;">($route)) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">($request);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// If no route was found we will now check if a matching route is specified by</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// another HTTP verb. If it is we will need to throw a MethodNotAllowed and</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// inform the user agent of which HTTP verb it should use for this route.</span></span>
<span class="line"><span style="color:#24292E;">	$others </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">checkForAlternateVerbs</span><span style="color:#24292E;">($request);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">count</span><span style="color:#24292E;">($others) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getRouteForMethods</span><span style="color:#24292E;">($request, $others);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NotFoundHttpException</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这个方法中的第二条语句：<code>$route = $this-&gt;matchAgainstRoutes($routes, $request);</code>，才是<code>findRoute</code>方法的核心，根据当前request请求匹配到一条路由。</p><p>直接进入<code>matchAgainstRoutes</code>方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">matchAgainstRoutes</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">array</span><span style="color:#E1E4E8;"> $routes, $request, $includingMethod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	[$fallbacks, $routes] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($routes)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">partition</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($route) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $route</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">isFallback;</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $routes</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">($fallbacks)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($value) </span><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> ($request, $includingMethod) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $value</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">matches</span><span style="color:#E1E4E8;">($request, $includingMethod);</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">matchAgainstRoutes</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">array</span><span style="color:#24292E;"> $routes, $request, $includingMethod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	[$fallbacks, $routes] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($routes)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">partition</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($route) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">isFallback;</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $routes</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">($fallbacks)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($value) </span><span style="color:#D73A49;">use</span><span style="color:#24292E;"> ($request, $includingMethod) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $value</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">matches</span><span style="color:#24292E;">($request, $includingMethod);</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在这个方法中，我们重点关注<code>matches</code>方法，通过分析我们知道这个matches方法应该是Route类(vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Route.php)中的方法：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">matches</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request, $includingMethod </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">compileRoute</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getValidators</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $validator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> $includingMethod </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> $validator </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MethodValidator</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> $validator</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">matches</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#E1E4E8;">, $request)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">matches</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request, $includingMethod </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">compileRoute</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getValidators</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $validator) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> $includingMethod </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> $validator </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MethodValidator</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> $validator</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">matches</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#24292E;">, $request)) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>compileRoute方法底层是调用SymfonyRoute类构造出一个compile实例，然后赋值给本类的成员变量compiled。</p></blockquote><p>继续追踪<code>getValidators</code>方法中获取的<code>Validator</code>，我们就能看到这个方法中的核心方法<code>matches</code>是怎么工作的了。</p><p>以<code>UrlValidator</code>为例：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">matches</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Route</span><span style="color:#E1E4E8;"> $route, </span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request)</span></span>
<span class="line"><span style="color:#E1E4E8;">{	</span></span>
<span class="line"><span style="color:#E1E4E8;">	$path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$request</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">preg_match</span><span style="color:#E1E4E8;">($route</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getCompiled</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getRegex</span><span style="color:#E1E4E8;">(), </span><span style="color:#79B8FF;">rawurldecode</span><span style="color:#E1E4E8;">($path));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">matches</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Route</span><span style="color:#24292E;"> $route, </span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request)</span></span>
<span class="line"><span style="color:#24292E;">{	</span></span>
<span class="line"><span style="color:#24292E;">	$path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$request</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">preg_match</span><span style="color:#24292E;">($route</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getCompiled</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getRegex</span><span style="color:#24292E;">(), </span><span style="color:#005CC5;">rawurldecode</span><span style="color:#24292E;">($path));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>到这里，我们终于讲完了<code>findRoute</code>涉及到的所有代码。</p>`,122),t=[o];function c(r,y,i,E,u,d){return n(),a("div",null,t)}const F=s(e,[["render",c]]);export{g as __pageData,F as default};
