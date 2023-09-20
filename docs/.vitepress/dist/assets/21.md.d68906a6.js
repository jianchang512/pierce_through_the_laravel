import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.a9d1f0e8.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"21.md","filePath":"21.md"}'),p={name:"21.md"},l=e(`<h2 id="附录十一-serviceprovider类的注册和引导" tabindex="-1">附录十一：ServiceProvider类的注册和引导 <a class="header-anchor" href="#附录十一-serviceprovider类的注册和引导" aria-label="Permalink to &quot;附录十一：ServiceProvider类的注册和引导&quot;">​</a></h2><p>服务提供器是所有 Laravel 应用程序引导中心。你的应用程序自定义的服务、第三方资源包提供的服务以及 Laravel 的所有核心服务都是通过服务提供器进行注册(register)和引导(boot)的。</p><p>拿一个Laravel框架自带的服务提供器来举例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">protected $defer = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">public function register()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;app-&gt;singleton(BroadcastManager::class, function ($app) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	  return new BroadcastManager($app);</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;app-&gt;singleton(BroadcasterContract::class, function ($app) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return $app-&gt;make(BroadcastManager::class)-&gt;connection();</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">  //将BroadcastingFactory::class设置为BroadcastManager::class的别名</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;app-&gt;alias(</span></span>
<span class="line"><span style="color:#e1e4e8;">      BroadcastManager::class, BroadcastingFactory::class</span></span>
<span class="line"><span style="color:#e1e4e8;">  );</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">public function provides()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  return [</span></span>
<span class="line"><span style="color:#e1e4e8;">      BroadcastManager::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">      BroadcastingFactory::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">      BroadcasterContract::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">  ];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">protected $defer = true;</span></span>
<span class="line"><span style="color:#24292e;">public function register()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;app-&gt;singleton(BroadcastManager::class, function ($app) {</span></span>
<span class="line"><span style="color:#24292e;">  	  return new BroadcastManager($app);</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;app-&gt;singleton(BroadcasterContract::class, function ($app) {</span></span>
<span class="line"><span style="color:#24292e;">      return $app-&gt;make(BroadcastManager::class)-&gt;connection();</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">  //将BroadcastingFactory::class设置为BroadcastManager::class的别名</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;app-&gt;alias(</span></span>
<span class="line"><span style="color:#24292e;">      BroadcastManager::class, BroadcastingFactory::class</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">public function provides()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  return [</span></span>
<span class="line"><span style="color:#24292e;">      BroadcastManager::class,</span></span>
<span class="line"><span style="color:#24292e;">      BroadcastingFactory::class,</span></span>
<span class="line"><span style="color:#24292e;">      BroadcasterContract::class,</span></span>
<span class="line"><span style="color:#24292e;">  ];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在服务提供器<code>BroadcastServiceProvider</code>的<code>register</code>中， 为<code>BroadcastingFactory</code>的类名绑定了类实现BroadcastManager，这样就能通过服务容器来make出通过<code>BroadcastingFactory::class</code>绑定的服务<code>BroadcastManger</code>对象供应用程序使用了。</p><p>本文主要时来梳理一下laravel是如何注册、和初始化这些服务的，关于如何编写自己的服务提供器，可以参考<a href="https://d.laravel-china.org/docs/5.5/providers#deferred-providers" target="_blank" rel="noreferrer">官方文档</a></p><h3 id="bootstrap" tabindex="-1">BootStrap <a class="header-anchor" href="#bootstrap" aria-label="Permalink to &quot;BootStrap&quot;">​</a></h3><p>首先laravel注册和引导应用需要的服务是发生在寻找路由处理客户端请求之前的Bootstrap阶段的，在框架的入口文件里我们可以看到，框架在实例化了<code>Application</code>对象后从服务容器中解析出了<code>HTTP Kernel</code>对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$kernel = $app-&gt;make(Illuminate\\Contracts\\Http\\Kernel::class);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$response = $kernel-&gt;handle(</span></span>
<span class="line"><span style="color:#e1e4e8;">	$request = Illuminate\\Http\\Request::capture()</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$kernel = $app-&gt;make(Illuminate\\Contracts\\Http\\Kernel::class);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$response = $kernel-&gt;handle(</span></span>
<span class="line"><span style="color:#24292e;">	$request = Illuminate\\Http\\Request::capture()</span></span>
<span class="line"><span style="color:#24292e;">);</span></span></code></pre></div><p>在Kernel处理请求时会先让请求通过中间件然后在发送请求给路由对应的控制器方法， 在这之前有一个BootStrap阶段来引导启动Laravel应用程序，如下面代码所示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public function handle($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">......</span></span>
<span class="line"><span style="color:#e1e4e8;">$response = $this-&gt;sendRequestThroughRouter($request);</span></span>
<span class="line"><span style="color:#e1e4e8;">......</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">return $response;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public function handle($request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">......</span></span>
<span class="line"><span style="color:#24292e;">$response = $this-&gt;sendRequestThroughRouter($request);</span></span>
<span class="line"><span style="color:#24292e;">......</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">return $response;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">protected function sendRequestThroughRouter($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Facade::clearResolvedInstance(&#39;request&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$this-&gt;bootstrap();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">return (new Pipeline($this-&gt;app))</span></span>
<span class="line"><span style="color:#e1e4e8;">              -&gt;send($request)</span></span>
<span class="line"><span style="color:#e1e4e8;">              -&gt;through($this-&gt;app-&gt;shouldSkipMiddleware() ? [] : $this-&gt;middleware)</span></span>
<span class="line"><span style="color:#e1e4e8;">              -&gt;then($this-&gt;dispatchToRouter());</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//引导启动Laravel应用程序</span></span>
<span class="line"><span style="color:#e1e4e8;">public function bootstrap()</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">if (! $this-&gt;app-&gt;hasBeenBootstrapped()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   /**依次执行$bootstrappers中每一个bootstrapper的bootstrap()函数</span></span>
<span class="line"><span style="color:#e1e4e8;">  $bootstrappers = [</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\DetectEnvironment&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\LoadConfiguration&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\ConfigureLogging&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\HandleExceptions&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\RegisterFacades&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\RegisterProviders&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &#39;Illuminate\\Foundation\\Bootstrap\\BootProviders&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      ];*/</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;app-&gt;bootstrapWith($this-&gt;bootstrappers());</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">protected function sendRequestThroughRouter($request)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;app-&gt;instance(&#39;request&#39;, $request);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Facade::clearResolvedInstance(&#39;request&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$this-&gt;bootstrap();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">return (new Pipeline($this-&gt;app))</span></span>
<span class="line"><span style="color:#24292e;">              -&gt;send($request)</span></span>
<span class="line"><span style="color:#24292e;">              -&gt;through($this-&gt;app-&gt;shouldSkipMiddleware() ? [] : $this-&gt;middleware)</span></span>
<span class="line"><span style="color:#24292e;">              -&gt;then($this-&gt;dispatchToRouter());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//引导启动Laravel应用程序</span></span>
<span class="line"><span style="color:#24292e;">public function bootstrap()</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">if (! $this-&gt;app-&gt;hasBeenBootstrapped()) {</span></span>
<span class="line"><span style="color:#24292e;">   /**依次执行$bootstrappers中每一个bootstrapper的bootstrap()函数</span></span>
<span class="line"><span style="color:#24292e;">  $bootstrappers = [</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\DetectEnvironment&#39;,</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\LoadConfiguration&#39;,</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\ConfigureLogging&#39;,</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\HandleExceptions&#39;,</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\RegisterFacades&#39;,</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\RegisterProviders&#39;,</span></span>
<span class="line"><span style="color:#24292e;">       &#39;Illuminate\\Foundation\\Bootstrap\\BootProviders&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      ];*/</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;app-&gt;bootstrapWith($this-&gt;bootstrappers());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>上面bootstrap中会分别执行每一个bootstrapper的bootstrap方法来引导启动应用程序的各个部分</p><pre><code>1. DetectEnvironment  检查环境
2. LoadConfiguration  加载应用配置
3. ConfigureLogging   配置日至
4. HandleException    注册异常处理的Handler
5. RegisterFacades    注册Facades 
6. RegisterProviders  注册Providers 
7. BootProviders      启动Providers
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">namespace Illuminate\\Foundation;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Application extends Container implements ...</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function bootstrapWith(array $bootstrappers)</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;hasBeenBootstrapped = true;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      foreach ($bootstrappers as $bootstrapper) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          $this[&#39;events&#39;]-&gt;fire(&#39;bootstrapping: &#39;.$bootstrapper, [$this]);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          $this-&gt;make($bootstrapper)-&gt;bootstrap($this);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          $this[&#39;events&#39;]-&gt;fire(&#39;bootstrapped: &#39;.$bootstrapper, [$this]);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">namespace Illuminate\\Foundation;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Application extends Container implements ...</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public function bootstrapWith(array $bootstrappers)</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;hasBeenBootstrapped = true;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      foreach ($bootstrappers as $bootstrapper) {</span></span>
<span class="line"><span style="color:#24292e;">          $this[&#39;events&#39;]-&gt;fire(&#39;bootstrapping: &#39;.$bootstrapper, [$this]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">          $this-&gt;make($bootstrapper)-&gt;bootstrap($this);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">          $this[&#39;events&#39;]-&gt;fire(&#39;bootstrapped: &#39;.$bootstrapper, [$this]);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>启动应用程序的最后两部就是注册服务提供这和启动提供者，如果对前面几个阶段具体时怎么实现的可以参考<a href="https://segmentfault.com/a/1190000006946685#articleHeader5" target="_blank" rel="noreferrer">这篇文章</a>。在这里我们主要关注服务提供器的注册和启动。</p><p>先来看注册服务提供器，服务提供器的注册由类 <code>\\Illuminate\\Foundation\\Bootstrap\\RegisterProviders::class</code> 负责，该类用于加载所有服务提供器的 register 函数，并保存延迟加载的服务的信息，以便实现延迟加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class RegisterProviders</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function bootstrap(Application $app)</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      //调用了Application的registerConfiguredProviders()</span></span>
<span class="line"><span style="color:#e1e4e8;">      $app-&gt;registerConfiguredProviders();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function registerConfiguredProviders()</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      (new ProviderRepository($this, new Filesystem, $this-&gt;getCachedServicesPath()))</span></span>
<span class="line"><span style="color:#e1e4e8;">                  -&gt;load($this-&gt;config[&#39;app.providers&#39;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  public function getCachedServicesPath()</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return $this-&gt;bootstrapPath().&#39;/cache/services.php&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class RegisterProviders</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public function bootstrap(Application $app)</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      //调用了Application的registerConfiguredProviders()</span></span>
<span class="line"><span style="color:#24292e;">      $app-&gt;registerConfiguredProviders();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public function registerConfiguredProviders()</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      (new ProviderRepository($this, new Filesystem, $this-&gt;getCachedServicesPath()))</span></span>
<span class="line"><span style="color:#24292e;">                  -&gt;load($this-&gt;config[&#39;app.providers&#39;]);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public function getCachedServicesPath()</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      return $this-&gt;bootstrapPath().&#39;/cache/services.php&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>可以看出，所有服务提供器都在配置文件 app.php 文件的 providers 数组中。类 ProviderRepository 负责所有的服务加载功能：</p><p>class ProviderRepository { public function load(array $providers) { $manifest = $this-&gt;loadManifest(); if ($this-&gt;shouldRecompile($manifest, $providers)) { $manifest = $this-&gt;compileManifest($providers); } foreach ($manifest[&#39;when&#39;] as $provider =&gt; $events) { $this-&gt;registerLoadEvents($provider, $events); } foreach ($manifest[&#39;eager&#39;] as $provider) { $this-&gt;app-&gt;register($provider); } $this-&gt;app-&gt;addDeferredServices($manifest[&#39;deferred&#39;]); } }</p><p><code>loadManifest()</code>会加载服务提供器缓存文件<code>services.php</code>，如果框架是第一次启动时没有这个文件的，或者是缓存文件中的providers数组项与<code>config/app.php</code>里的providers数组项不一致都会编译生成<code>services.php</code>。</p><p>//判断是否需要编译生成services文件 public function shouldRecompile($manifest, $providers) { return is_null($manifest) || $manifest[&#39;providers&#39;] != $providers; }</p><p>//编译生成文件的具体过程 protected function compileManifest($providers) { $manifest = $this-&gt;freshManifest($providers); foreach ($providers as $provider) { $instance = $this-&gt;createProvider($provider); if ($instance-&gt;isDeferred()) { foreach ($instance-&gt;provides() as $service) { $manifest[&#39;deferred&#39;][$service] = $provider; } $manifest[&#39;when&#39;][$provider] = $instance-&gt;when(); } else { $manifest[&#39;eager&#39;][] = $provider; } } return $this-&gt;writeManifest($manifest); }</p><p>protected function freshManifest(array $providers) { return [&#39;providers&#39; =&gt; $providers, &#39;eager&#39; =&gt; [], &#39;deferred&#39; =&gt; []]; }</p><ul><li>缓存文件中 providers 放入了所有自定义和框架核心的服务。</li><li>如果服务提供器是需要立即注册的，那么将会放入缓存文件中 eager 数组中。</li><li>如果服务提供器是延迟加载的，那么其函数 provides() 通常会提供服务别名，这个服务别名通常是向服务容器中注册的别名，别名将会放入缓存文件的 deferred 数组中，与真正要注册的服务提供器组成一个键值对。</li><li>延迟加载如果由 event 事件激活，那么可以在 when 函数中写入事件类，并写入缓存文件的 when 数组中。</li></ul><p>生成的缓存文件内容如下：</p><p>array ( &#39;providers&#39; =&gt; array ( 0 =&gt; &#39;Illuminate\\Auth\\AuthServiceProvider&#39;, 1 =&gt; &#39;Illuminate\\Broadcasting\\BroadcastServiceProvider&#39;, ... ), &#39;eager&#39; =&gt; array ( 0 =&gt; &#39;Illuminate\\Auth\\AuthServiceProvider&#39;, 1 =&gt; &#39;Illuminate\\Cookie\\CookieServiceProvider&#39;, ... ), &#39;deferred&#39; =&gt; array ( &#39;Illuminate\\Broadcasting\\BroadcastManager&#39; =&gt; &#39;Illuminate\\Broadcasting\\BroadcastServiceProvider&#39;, &#39;Illuminate\\Contracts\\Broadcasting\\Factory&#39; =&gt; &#39;Illuminate\\Broadcasting\\BroadcastServiceProvider&#39;, ... ), &#39;when&#39; =&gt; array ( &#39;Illuminate\\Broadcasting\\BroadcastServiceProvider&#39; =&gt; array ( ), ... )</p><h3 id="事件触发时注册延迟服务提供器" tabindex="-1">事件触发时注册延迟服务提供器 <a class="header-anchor" href="#事件触发时注册延迟服务提供器" aria-label="Permalink to &quot;事件触发时注册延迟服务提供器&quot;">​</a></h3><p>延迟服务提供器除了利用 IOC 容器解析服务方式激活，还可以利用 Event 事件来激活：</p><p>protected function registerLoadEvents($provider, array $events) { if (count($events) &lt; 1) { return; } $this-&gt;app-&gt;make(&#39;events&#39;)-&gt;listen($events, function () use ($provider) { $this-&gt;app-&gt;register($provider); }); }</p><h3 id="即时注册服务提供器" tabindex="-1">即时注册服务提供器 <a class="header-anchor" href="#即时注册服务提供器" aria-label="Permalink to &quot;即时注册服务提供器&quot;">​</a></h3><p>需要即时注册的服务提供器的register方法由Application的register方法里来调用：</p><p>class Application extends Container implements ApplicationContract, HttpKernelInterface { public function register($provider, $options = [], $force = false) { if (($registered = $this-&gt;getProvider($provider)) &amp;&amp; ! $force) { return $registered; } if (is_string($provider)) { $provider = $this-&gt;resolveProvider($provider); } if (method_exists($provider, &#39;register&#39;)) { $provider-&gt;register(); } $this-&gt;markAsRegistered($provider); if ($this-&gt;booted) { $this-&gt;bootProvider($provider); } return $provider; } public function getProvider($provider) { $name = is_string($provider) ? $provider : get_class($provider); return Arr::first($this-&gt;serviceProviders, function ($value) use ($name) { return $value instanceof $name; }); } public function resolveProvider($provider) { eturn new $provider($this); } protected function markAsRegistered($provider) { //这个属性在稍后booting服务时会用到 $this-&gt;serviceProviders[] = $provider; $this-&gt;loadedProviders[get_class($provider)] = true; } protected function bootProvider(ServiceProvider $provider) { if (method_exists($provider, &#39;boot&#39;)) { return $this-&gt;call([$provider, &#39;boot&#39;]); } } }</p><p>可以看出，服务提供器的注册过程：</p><ul><li>判断当前服务提供器是否被注册过，如注册过直接返回对象</li><li>解析服务提供器</li><li>调用服务提供器的 register 函数</li><li>标记当前服务提供器已经注册完毕</li><li>若框架已经加载注册完毕所有的服务容器，那么就启动服务提供器的 boot 函数，该函数由于是 call 调用，所以支持依赖注入。</li></ul><h3 id="服务解析时注册延迟服务提供器" tabindex="-1">服务解析时注册延迟服务提供器 <a class="header-anchor" href="#服务解析时注册延迟服务提供器" aria-label="Permalink to &quot;服务解析时注册延迟服务提供器&quot;">​</a></h3><p>延迟服务提供器首先需要添加到 Application 中</p><p>public function addDeferredServices(array $services) { $this-&gt;deferredServices = array_merge($this-&gt;deferredServices, $services); }</p><p>我们之前说过，延迟服务提供器的激活注册有两种方法：事件与服务解析。</p><p>当特定的事件被激发后，就会调用 Application 的 register 函数，进而调用服务提供器的 register 函数，实现服务的注册。</p><p>当利用 Ioc 容器解析服务名时，例如解析服务名 BroadcastingFactory：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  protected $defer = true;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  public function provides()</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return [</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcastManager::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcastingFactory::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcasterContract::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">      ];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  protected $defer = true;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public function provides()</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      return [</span></span>
<span class="line"><span style="color:#24292e;">          BroadcastManager::class,</span></span>
<span class="line"><span style="color:#24292e;">          BroadcastingFactory::class,</span></span>
<span class="line"><span style="color:#24292e;">          BroadcasterContract::class,</span></span>
<span class="line"><span style="color:#24292e;">      ];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在Application的make方法里会通过别名BroadcastingFactory查找是否有对应的延迟注册的服务提供器，如果有的话那么 就先通过registerDeferredProvider方法注册服务提供器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function make($abstract)</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      $abstract = $this-&gt;getAlias($abstract);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (isset($this-&gt;deferredServices[$abstract])) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          $this-&gt;loadDeferredProvider($abstract);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return parent::make($abstract);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  public function loadDeferredProvider($service)</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (! isset($this-&gt;deferredServices[$service])) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    	$provider = $this-&gt;deferredServices[$service];</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (! isset($this-&gt;loadedProviders[$provider])) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          $this-&gt;registerDeferredProvider($provider, $service);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public function make($abstract)</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      $abstract = $this-&gt;getAlias($abstract);</span></span>
<span class="line"><span style="color:#24292e;">      if (isset($this-&gt;deferredServices[$abstract])) {</span></span>
<span class="line"><span style="color:#24292e;">          $this-&gt;loadDeferredProvider($abstract);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return parent::make($abstract);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public function loadDeferredProvider($service)</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      if (! isset($this-&gt;deferredServices[$service])) {</span></span>
<span class="line"><span style="color:#24292e;">          return;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    	$provider = $this-&gt;deferredServices[$service];</span></span>
<span class="line"><span style="color:#24292e;">      if (! isset($this-&gt;loadedProviders[$provider])) {</span></span>
<span class="line"><span style="color:#24292e;">          $this-&gt;registerDeferredProvider($provider, $service);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>由 deferredServices 数组可以得知，BroadcastingFactory 为延迟服务，接着程序会利用函数 loadDeferredProvider 来加载延迟服务提供器，调用服务提供器的 register 函数，若当前的框架还未注册完全部服务。那么将会放入服务启动的回调函数中，以待服务启动时调用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public function registerDeferredProvider($provider, $service = null)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  if ($service) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      unset($this-&gt;deferredServices[$service]);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  $this-&gt;register($instance = new $provider($this));</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (! $this-&gt;booted) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;booting(function () use ($instance) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          $this-&gt;bootProvider($instance);</span></span>
<span class="line"><span style="color:#e1e4e8;">      });</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public function registerDeferredProvider($provider, $service = null)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  if ($service) {</span></span>
<span class="line"><span style="color:#24292e;">      unset($this-&gt;deferredServices[$service]);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  $this-&gt;register($instance = new $provider($this));</span></span>
<span class="line"><span style="color:#24292e;">  if (! $this-&gt;booted) {</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;booting(function () use ($instance) {</span></span>
<span class="line"><span style="color:#24292e;">          $this-&gt;bootProvider($instance);</span></span>
<span class="line"><span style="color:#24292e;">      });</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>还是拿服务提供器BroadcastServiceProvider来举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  protected $defer = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function register()</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;app-&gt;singleton(BroadcastManager::class, function ($app) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return new BroadcastManager($app);</span></span>
<span class="line"><span style="color:#e1e4e8;">      });</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;app-&gt;singleton(BroadcasterContract::class, function ($app) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return $app-&gt;make(BroadcastManager::class)-&gt;connection();</span></span>
<span class="line"><span style="color:#e1e4e8;">      });</span></span>
<span class="line"><span style="color:#e1e4e8;">      //将BroadcastingFactory::class设置为BroadcastManager::class的别名</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;app-&gt;alias(</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcastManager::class, BroadcastingFactory::class</span></span>
<span class="line"><span style="color:#e1e4e8;">      );</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function provides()</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return [</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcastManager::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcastingFactory::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">          BroadcasterContract::class,</span></span>
<span class="line"><span style="color:#e1e4e8;">      ];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class BroadcastServiceProvider extends ServiceProvider</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  protected $defer = true;</span></span>
<span class="line"><span style="color:#24292e;">  public function register()</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;app-&gt;singleton(BroadcastManager::class, function ($app) {</span></span>
<span class="line"><span style="color:#24292e;">          return new BroadcastManager($app);</span></span>
<span class="line"><span style="color:#24292e;">      });</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;app-&gt;singleton(BroadcasterContract::class, function ($app) {</span></span>
<span class="line"><span style="color:#24292e;">          return $app-&gt;make(BroadcastManager::class)-&gt;connection();</span></span>
<span class="line"><span style="color:#24292e;">      });</span></span>
<span class="line"><span style="color:#24292e;">      //将BroadcastingFactory::class设置为BroadcastManager::class的别名</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;app-&gt;alias(</span></span>
<span class="line"><span style="color:#24292e;">          BroadcastManager::class, BroadcastingFactory::class</span></span>
<span class="line"><span style="color:#24292e;">      );</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  public function provides()</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      return [</span></span>
<span class="line"><span style="color:#24292e;">          BroadcastManager::class,</span></span>
<span class="line"><span style="color:#24292e;">          BroadcastingFactory::class,</span></span>
<span class="line"><span style="color:#24292e;">          BroadcasterContract::class,</span></span>
<span class="line"><span style="color:#24292e;">      ];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>函数 register 为类 <code>BroadcastingFactory</code> 向 [服务容器][1]绑定了特定的实现类 <code>BroadcastManager</code>，<code>Application</code>中的 <code>make</code> 函数里执行<code>parent::make($abstract)</code> 通过服务容器的make就会正确的解析出服务 <code>BroadcastingFactory</code>。</p><p>因此函数 <code>provides()</code> 返回的元素一定都是 <code>register()</code> 向 [服务容器][2]中绑定的类名或者别名。这样当我们利用App::make() 解析这些类名的时候，[服务容器][3]才会根据服务提供器的 register() 函数中绑定的实现类，正确解析出服务功能。</p><h3 id="启动application" tabindex="-1">启动Application <a class="header-anchor" href="#启动application" aria-label="Permalink to &quot;启动Application&quot;">​</a></h3><p>Application的启动由类 <code>\\Illuminate\\Foundation\\Bootstrap\\BootProviders</code> 负责：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class BootProviders</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function bootstrap(Application $app)</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      $app-&gt;boot();</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  public function boot()</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if ($this-&gt;booted) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;fireAppCallbacks($this-&gt;bootingCallbacks);</span></span>
<span class="line"><span style="color:#e1e4e8;">      array_walk($this-&gt;serviceProviders, function ($p) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          $this-&gt;bootProvider($p);</span></span>
<span class="line"><span style="color:#e1e4e8;">      });</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;booted = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">      $this-&gt;fireAppCallbacks($this-&gt;bootedCallbacks);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  protected function bootProvider(ServiceProvider $provider)</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (method_exists($provider, &#39;boot&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return $this-&gt;call([$provider, &#39;boot&#39;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class BootProviders</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public function bootstrap(Application $app)</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      $app-&gt;boot();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">class Application extends Container implements ApplicationContract, HttpKernelInterface</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public function boot()</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      if ($this-&gt;booted) {</span></span>
<span class="line"><span style="color:#24292e;">          return;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;fireAppCallbacks($this-&gt;bootingCallbacks);</span></span>
<span class="line"><span style="color:#24292e;">      array_walk($this-&gt;serviceProviders, function ($p) {</span></span>
<span class="line"><span style="color:#24292e;">          $this-&gt;bootProvider($p);</span></span>
<span class="line"><span style="color:#24292e;">      });</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;booted = true;</span></span>
<span class="line"><span style="color:#24292e;">      $this-&gt;fireAppCallbacks($this-&gt;bootedCallbacks);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  protected function bootProvider(ServiceProvider $provider)</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">      if (method_exists($provider, &#39;boot&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">          return $this-&gt;call([$provider, &#39;boot&#39;]);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>引导应用Application的serviceProviders属性中记录的所有服务提供器，就是依次调用这些服务提供器的boot方法，引导完成后<code>$this-&gt;booted = true</code> 就代表应用<code>Application</code>正式启动了，可以开始处理请求了。这里额外说一句，之所以等到所有服务提供器都注册完后再来进行引导是因为有可能在一个服务提供器的boot方法里调用了其他服务提供器注册的服务，所以需要等到所有即时注册的服务提供器都register完成后再来boot。</p><blockquote><p>本文转载自github</p><p>原文链接：<a href="https://github.com/kevinyan815/Learning_Laravel_Kernel/blob/master/articles/ServiceProvider.md" target="_blank" rel="noreferrer">https://github.com/kevinyan815/Learning_Laravel_Kernel/blob/master/articles/ServiceProvider.md</a></p></blockquote>`,55),o=[l];function t(r,c,i,d,y,g){return n(),a("div",null,o)}const $=s(p,[["render",t]]);export{v as __pageData,$ as default};
