import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.a9d1f0e8.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"18.md","filePath":"18.md"}'),l={name:"18.md"},p=n(`<h2 id="附录八-扩展自动注册-package-auto-discovery" tabindex="-1">附录八：扩展自动注册(Package auto discovery) <a class="header-anchor" href="#附录八-扩展自动注册-package-auto-discovery" aria-label="Permalink to &quot;附录八：扩展自动注册(Package auto discovery)&quot;">​</a></h2><p>在进入探究 Laravel 包提供者与门面如何自动发现之前，让我们先粗浅剖析一下 PHP 中包的概念。</p><p>一个包就是一个在多个项目内可复用的代码片段，例如 包 spatie/laravel-analytics 可以让你在 laravel 项目内，用一种简易方式从谷歌统计（Google Analytics）中取回数据，该包被托管 在 GitHub 上，由 Spatie 进行维护，它们会持续发布，更新和修复该包 bug，如果你在项目当中使用该包，希望获取这些一旦发布的更新和修复，无须担心使用 Composer 从 Github 上 拷贝一份新代码即可。</p><blockquote><p>Composer 是一个 PHP 依赖管理工具。它允许你声明项目库依赖且管理（安装 / 更新）它们。 -- 详见官网 getcomposer.org</p></blockquote><p>Laravel 自带 composer.json 文件，文件内的 require 或 require-dev 条目下，给出了你扩展应用功能需用到的包，执行 <code>composer update</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;require&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;spatie/laravel-analytics&quot;: &quot;3.*&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">   },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">   &quot;require&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">       &quot;spatie/laravel-analytics&quot;: &quot;3.*&quot;,</span></span>
<span class="line"><span style="color:#24292e;">   },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>你也可以使用下面命令，达到同样的效果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">composer require spatie/laravel-analytics</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">composer require spatie/laravel-analytics</span></span></code></pre></div><p>Composer 所做的工作在于，拉取你所需版本包，下载到 vendor 目录，上述命令执行完毕， 包内所有类和文件被加载进项目，你就可以马上使用它们了，每次当你再次执行<code>composer update</code>，Composer将会重新获取（译者注 通常从 composer 仓库拉取）更新该包，并且自动更新位于你项目 vendor 目录下的文件。</p><p>在 Laravel 项目中使用某些 Laravel 包 需要以下额外几个步骤：</p><ul><li>注册服务提供者</li><li>注册别名 / 门面</li><li>发布资源</li></ul><p>如果你看过&quot;Spatie 包安装说明&quot;你会发现，在继续下一步这前，项目配置必须注册服务提供者和一个门面，是一个很好的习惯，这个步骤由 Taylor Otwell 定义，只是一个非必要条件， Dries Vints，且达到无论何时你决定引入一个新包或移除包，服务提供者和门面皆可被自动发现。 重温 Taylor 的新特性声明：在媒体上(<a href="https://medium.com/@taylorotwell/package-auto-discovery-in-laravel-5-5-ea9e3ab20518" target="_blank" rel="noreferrer">https://medium.com/@taylorotwell/package-auto-discovery-in-laravel-5-5-ea9e3ab20518</a>).</p><h3 id="什么是服务提供者和门面" tabindex="-1">什么是服务提供者和门面？ <a class="header-anchor" href="#什么是服务提供者和门面" aria-label="Permalink to &quot;什么是服务提供者和门面？&quot;">​</a></h3><blockquote><p>服务提供者负责将事物绑定到 Laravel 的服务容器中，并通知 Laravel 在哪里加载包资源，例如视图，配置和本地化文件。-- laravel.com 文档</p></blockquote><p>你可以在上面阅读有关服务提供者的更多信息 官方文档(<a href="https://learnku.com/docs/laravel/5.4/providers" target="_blank" rel="noreferrer">https://learnku.com/docs/laravel/5.4/providers</a>).</p><blockquote><p>门面为应用程序服务容器中可用的类提供 &quot;static&quot; 接口 -- laravel.com 文档</p></blockquote><p>你可以在上面阅读更多有关门面的信息 官方文档(<a href="https://learnku.com/docs/laravel/5.4/facades" target="_blank" rel="noreferrer">https://learnku.com/docs/laravel/5.4/facades</a>).</p><p>在查找和安装 / 更新不同的扩展包时，Composer 会触发你可以订阅的多个事件并运行你自己的一段代码甚至是命令行可执行文件，其中一个有趣的事件称为<code>post-autoload-dump</code>。 在 composer 生成项目中自动加载的最终类列表之后直接触发，此时 Laravel 已经可以访问所有类，并且应用程序已准备好使用加载到其中的所有包类。</p><p>Laravel在主composer.json文件中订阅此事件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;post-autoload-dump&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;Illuminate\\\\Foundation\\\\ComposerScripts::postAutoloadDump&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;@php artisan package:discover&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">   ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">   &quot;post-autoload-dump&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">       &quot;Illuminate\\\\Foundation\\\\ComposerScripts::postAutoloadDump&quot;,</span></span>
<span class="line"><span style="color:#24292e;">       &quot;@php artisan package:discover&quot;</span></span>
<span class="line"><span style="color:#24292e;">   ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>首先它调用<code>postAutoloadDump()</code>静态方法，此方法会清理缓存的服务或之前发现的包，另一个是它运行<code>package:discover</code>的artisan命令，这就是 Laravel 可以自动发现的秘密。</p><h3 id="包自动发现" tabindex="-1">包自动发现 <a class="header-anchor" href="#包自动发现" aria-label="Permalink to &quot;包自动发现&quot;">​</a></h3><p><code>Illuminate\\Foundation\\Console\\PackageDiscoverCommand</code> 在 <code>Illuminate\\Foundation\\PackageManifest</code> 类中调用 <code>build()</code> 方法，该类是 Laravel 发现已安装包的地方。</p><p>PackageManifest 在应用程序引导程序的早期注册到容器中，完全来自 <code>Illuminate\\Foundation\\Application::registerBaseServiceProviders()</code>，此方法在创建 Laravel 应用程序的新实例后直接运行。</p><p>在<code>build()</code>方法中，Laravel 查找 <code>vendor/composer/installed.json</code> 文件，它由 composer 生成并保存一个完整的映射，其中包含 composer 安装的所有扩展包的 composer.json 文件内容， Laravel 映射该文件的内容并搜索包含<code>extra.laravel</code>部分的包：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;extra&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;laravel&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;providers&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">           &quot;Barryvdh\\\\Debugbar\\\\ServiceProvider&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">       ],</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;aliases&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">           &quot;Debugbar&quot;: &quot;Barryvdh\\\\Debugbar\\\\Facade&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;extra&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">   &quot;laravel&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">       &quot;providers&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">           &quot;Barryvdh\\\\Debugbar\\\\ServiceProvider&quot;</span></span>
<span class="line"><span style="color:#24292e;">       ],</span></span>
<span class="line"><span style="color:#24292e;">       &quot;aliases&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">           &quot;Debugbar&quot;: &quot;Barryvdh\\\\Debugbar\\\\Facade&quot;</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>它首先收集该部分的内容，然后查看主composer.json文件下的<code>extra.laravel.dont-discover</code>的内容，看看你是否决定不自动发现某些包或所有包：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;extra&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;laravel&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;dont-discover&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">           &quot;barryvdh/laravel-debugbar&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">       ]</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;extra&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">   &quot;laravel&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">       &quot;dont-discover&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">           &quot;barryvdh/laravel-debugbar&quot;</span></span>
<span class="line"><span style="color:#24292e;">       ]</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>你可以在数组中添加 * 以指示 laravel 完全停止自动注册。</p><h3 id="现在-laravel-收集了有关扩展包的信息" tabindex="-1">现在 Laravel 收集了有关扩展包的信息 <a class="header-anchor" href="#现在-laravel-收集了有关扩展包的信息" aria-label="Permalink to &quot;现在 Laravel 收集了有关扩展包的信息&quot;">​</a></h3><p>是的，一旦获得所需要的信息，它将在 <code>bootstrap/cache/packages.php</code> 中编写一个 PHP 文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;?php return array (</span></span>
<span class="line"><span style="color:#e1e4e8;"> &#39;barryvdh/laravel-debugbar&#39; =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> array (</span></span>
<span class="line"><span style="color:#e1e4e8;">   &#39;providers&#39; =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">   array (</span></span>
<span class="line"><span style="color:#e1e4e8;">     0 =&gt; &#39;Barryvdh\\\\Debugbar\\\\ServiceProvider&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">   ),</span></span>
<span class="line"><span style="color:#e1e4e8;">   &#39;aliases&#39; =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">   array (</span></span>
<span class="line"><span style="color:#e1e4e8;">     &#39;Debugbar&#39; =&gt; &#39;Barryvdh\\\\Debugbar\\\\Facade&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">   ),</span></span>
<span class="line"><span style="color:#e1e4e8;"> ),</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?php return array (</span></span>
<span class="line"><span style="color:#24292e;"> &#39;barryvdh/laravel-debugbar&#39; =&gt;</span></span>
<span class="line"><span style="color:#24292e;"> array (</span></span>
<span class="line"><span style="color:#24292e;">   &#39;providers&#39; =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   array (</span></span>
<span class="line"><span style="color:#24292e;">     0 =&gt; &#39;Barryvdh\\\\Debugbar\\\\ServiceProvider&#39;,</span></span>
<span class="line"><span style="color:#24292e;">   ),</span></span>
<span class="line"><span style="color:#24292e;">   &#39;aliases&#39; =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   array (</span></span>
<span class="line"><span style="color:#24292e;">     &#39;Debugbar&#39; =&gt; &#39;Barryvdh\\\\Debugbar\\\\Facade&#39;,</span></span>
<span class="line"><span style="color:#24292e;">   ),</span></span>
<span class="line"><span style="color:#24292e;"> ),</span></span>
<span class="line"><span style="color:#24292e;">);</span></span></code></pre></div><h3 id="包注册" tabindex="-1">包注册 <a class="header-anchor" href="#包注册" aria-label="Permalink to &quot;包注册&quot;">​</a></h3><p>Laravel 有两个 bootstrappers，在 HTTP 或控制台内核启动时使用：</p><ul><li><p><code>\\Illuminate\\Foundation\\Bootstrap\\RegisterFacades</code></p></li><li><p><code>\\Illuminate\\Foundation\\Bootstrap\\RegisterProviders</code></p></li></ul><p>第一个使用<code>Illuminate\\Foundation\\AliasLoader</code>将所有门面加载到应用程序中，现在 Laravel 将查看 packages.php 生成的文件并提取包中希望 Laravel 自动注册的所有别名并注册这些别名。 它使用<code>PackageManifest::aliases()</code>方法来收集这些信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 在 RegisterFacades::bootstrap()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">AliasLoader::getInstance(array_merge(</span></span>
<span class="line"><span style="color:#e1e4e8;">   $app-&gt;make(&#39;config&#39;)-&gt;get(&#39;app.aliases&#39;, []),</span></span>
<span class="line"><span style="color:#e1e4e8;">   $app-&gt;make(PackageManifest::class)-&gt;aliases()</span></span>
<span class="line"><span style="color:#e1e4e8;">))-&gt;register();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 在 RegisterFacades::bootstrap()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">AliasLoader::getInstance(array_merge(</span></span>
<span class="line"><span style="color:#24292e;">   $app-&gt;make(&#39;config&#39;)-&gt;get(&#39;app.aliases&#39;, []),</span></span>
<span class="line"><span style="color:#24292e;">   $app-&gt;make(PackageManifest::class)-&gt;aliases()</span></span>
<span class="line"><span style="color:#24292e;">))-&gt;register();</span></span></code></pre></div><p>如你所见，从<code>config/app.php</code>文件加载的别名与从 PackageManifest 类加载的别名合并。 类似地，Laravel 在启动时注册服务提供者，<code>RegisterProviders</code>中的<code>bootstrapper 调用</code>Foundation\\Application<code> 的</code>registerConfiguredProviders()\` 方法，并且 Laravel 在这会收集所有应该自动注册的包提供者并注册它们。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$providers = Collection::make($this-&gt;config[&#39;app.providers&#39;])</span></span>
<span class="line"><span style="color:#e1e4e8;">               -&gt;partition(function ($provider) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                   return Str::startsWith($provider, &#39;Illuminate\\\\&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">               });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$providers-&gt;splice(1, 0, [$this-&gt;make(PackageManifest::class)-&gt;providers()]);</span></span>
<span class="line"><span style="color:#e1e4e8;">(new ProviderRepository($this, new Filesystem, $this-&gt;getCachedServicesPath()))</span></span>
<span class="line"><span style="color:#e1e4e8;">                   -&gt;load($providers-&gt;collapse()-&gt;toArray());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$providers = Collection::make($this-&gt;config[&#39;app.providers&#39;])</span></span>
<span class="line"><span style="color:#24292e;">               -&gt;partition(function ($provider) {</span></span>
<span class="line"><span style="color:#24292e;">                   return Str::startsWith($provider, &#39;Illuminate\\\\&#39;);</span></span>
<span class="line"><span style="color:#24292e;">               });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$providers-&gt;splice(1, 0, [$this-&gt;make(PackageManifest::class)-&gt;providers()]);</span></span>
<span class="line"><span style="color:#24292e;">(new ProviderRepository($this, new Filesystem, $this-&gt;getCachedServicesPath()))</span></span>
<span class="line"><span style="color:#24292e;">                   -&gt;load($providers-&gt;collapse()-&gt;toArray());</span></span></code></pre></div><p>在这里，我们在 Illuminate 服务提供者和可能在你的配置文件中的任何其他服务提供者之间注入自动发现的服务提供者，这样我们确保你可以通过在配置文件中重新注册它们来覆盖扩展包服务提供者，并且 Illuminate 组件将会在尝试加载任何其他服务提供者之前加载。</p><blockquote><p>原文作者：Summer 转自链接：<a href="https://learnku.com/laravel/t/33459" target="_blank" rel="noreferrer">https://learnku.com/laravel/t/33459</a></p></blockquote>`,41),o=[p];function t(r,c,i,d,u,y){return s(),e("div",null,o)}const h=a(l,[["render",t]]);export{g as __pageData,h as default};
