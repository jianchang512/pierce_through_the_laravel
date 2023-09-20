import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a9d1f0e8.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2.md","filePath":"2.md"}'),p={name:"2.md"},e=l(`<h2 id="第二章-核心代码结构分析" tabindex="-1">第二章：核心代码结构分析 <a class="header-anchor" href="#第二章-核心代码结构分析" aria-label="Permalink to &quot;第二章：核心代码结构分析&quot;">​</a></h2><p>入口文件index.php的源码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Laravel - A PHP Framework For Web Artisans</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@package</span><span style="color:#6A737D;">  Laravel</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@author</span><span style="color:#6A737D;">   Taylor Otwell &lt;taylor@laravel.com&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">define</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;LARAVEL_START&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">microtime</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Register The Auto Loader</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| Composer provides a convenient, automatically generated class loader for</span></span>
<span class="line"><span style="color:#6A737D;">| our application. We just need to utilize it! We&#39;ll simply require it</span></span>
<span class="line"><span style="color:#6A737D;">| into the script here so that we don&#39;t have to worry about manual</span></span>
<span class="line"><span style="color:#6A737D;">| loading any of our classes later on. It feels great to relax.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">require</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__DIR__</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;/../vendor/autoload.php&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 第一阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Turn On The Lights</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| We need to illuminate PHP development, so let us turn on the lights.</span></span>
<span class="line"><span style="color:#6A737D;">| This bootstraps the framework and gets it ready for use, then it</span></span>
<span class="line"><span style="color:#6A737D;">| will load up this application so that we can run it and send</span></span>
<span class="line"><span style="color:#6A737D;">| the responses back to the browser and delight our users.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">require_once</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__DIR__</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;/../bootstrap/app.php&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 第二阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Run The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| Once we have the application, we can handle the incoming request</span></span>
<span class="line"><span style="color:#6A737D;">| through the kernel, and send the associated response back to</span></span>
<span class="line"><span style="color:#6A737D;">| the client&#39;s browser allowing them to enjoy the creative</span></span>
<span class="line"><span style="color:#6A737D;">| and wonderful application we have prepared for them.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$kernel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $app</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Illuminate\\Contracts\\Http\\Kernel</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 第三阶段</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">$response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $kernel</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(  </span><span style="color:#6A737D;">// 第四阶段</span></span>
<span class="line"><span style="color:#E1E4E8;">    $request </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Http\\Request</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">capture</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$response</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 第五阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$kernel</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">terminate</span><span style="color:#E1E4E8;">($request, $response);  </span><span style="color:#6A737D;">// 第六阶段</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Laravel - A PHP Framework For Web Artisans</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@package</span><span style="color:#6A737D;">  Laravel</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;">   Taylor Otwell &lt;taylor@laravel.com&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">define</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;LARAVEL_START&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">microtime</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Register The Auto Loader</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| Composer provides a convenient, automatically generated class loader for</span></span>
<span class="line"><span style="color:#6A737D;">| our application. We just need to utilize it! We&#39;ll simply require it</span></span>
<span class="line"><span style="color:#6A737D;">| into the script here so that we don&#39;t have to worry about manual</span></span>
<span class="line"><span style="color:#6A737D;">| loading any of our classes later on. It feels great to relax.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">require</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__DIR__</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;/../vendor/autoload.php&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 第一阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Turn On The Lights</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| We need to illuminate PHP development, so let us turn on the lights.</span></span>
<span class="line"><span style="color:#6A737D;">| This bootstraps the framework and gets it ready for use, then it</span></span>
<span class="line"><span style="color:#6A737D;">| will load up this application so that we can run it and send</span></span>
<span class="line"><span style="color:#6A737D;">| the responses back to the browser and delight our users.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">require_once</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__DIR__</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;/../bootstrap/app.php&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 第二阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">| Run The Application</span></span>
<span class="line"><span style="color:#6A737D;">|--------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">| Once we have the application, we can handle the incoming request</span></span>
<span class="line"><span style="color:#6A737D;">| through the kernel, and send the associated response back to</span></span>
<span class="line"><span style="color:#6A737D;">| the client&#39;s browser allowing them to enjoy the creative</span></span>
<span class="line"><span style="color:#6A737D;">| and wonderful application we have prepared for them.</span></span>
<span class="line"><span style="color:#6A737D;">|</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$kernel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $app</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Illuminate\\Contracts\\Http\\Kernel</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 第三阶段</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">$response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $kernel</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">(  </span><span style="color:#6A737D;">// 第四阶段</span></span>
<span class="line"><span style="color:#24292E;">    $request </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Http\\Request</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">capture</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$response</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 第五阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$kernel</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">terminate</span><span style="color:#24292E;">($request, $response);  </span><span style="color:#6A737D;">// 第六阶段</span></span></code></pre></div><blockquote><p>public/index.php</p></blockquote><p>按照上面代码中的注释，我们简要说明一下6个阶段，每个阶段大致都做了什么：</p><ul><li><p>实现项目第三方库文件的自动加载</p></li><li><p>引入框架app启动文件</p><p>这个阶段框架做了大量的准备工作，包括：</p><ul><li>实例化容器类 <ul><li>设置基础目录路径</li><li>注册基础绑定</li><li>注册服务提供者</li><li>注册核心别名类</li></ul></li><li>向容器中&quot;装填&quot;处理HTTP请求的核心类HttpKernel</li><li>向容器中&quot;装填&quot;处理命令行的核心类ConsoleKernel</li><li>向容器中&quot;装填&quot;处理异常的核心类</li></ul></li><li><p>从app中得到容器中装填好的处理HTTP请求的类赋值给变量kernel</p></li><li><p>运行HttpKernel类的handle方法，处理接收到的HTTP请求，得到需要返回的对象</p></li><li><p>运行返回对象的send方法渲染页面</p></li><li><p>继续运行HttpKernel类的terminate方法，执行绑定在容器中可能要执行的其他动作</p></li></ul><p>从下一章开始，我们将按照上面的次序从上到下为大家详细阐述每个阶段框架所做的工作。</p>`,7),o=[e];function t(c,r,i,y,A,D){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
