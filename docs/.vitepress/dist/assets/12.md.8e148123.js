import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.a9d1f0e8.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"12.md","filePath":"12.md"}'),l={name:"12.md"},o=p(`<h2 id="附录二-container之instance方法" tabindex="-1">附录二：Container之instance方法 <a class="header-anchor" href="#附录二-container之instance方法" aria-label="Permalink to &quot;附录二：Container之instance方法&quot;">​</a></h2><p>源文件路径：vendor/laravel/framework/src/Illuminate/Container/Container.php</p><p>方法名：instance</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>我们进入removeAbstractAlias方法内部，进行var_dump中断测试，如下：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Remove an alias from the contextual binding alias cache.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $searched</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeAbstractAlias</span><span style="color:#E1E4E8;">($searched)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">aliases[$searched])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">var_dump</span><span style="color:#E1E4E8;">($searched);</span><span style="color:#F97583;">exit</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">abstractAliases </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $abstract </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $aliases) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($aliases </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $index </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $alias) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($alias </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> $searched) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">unset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">abstractAliases[$abstract][$index]);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">	    }</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Remove an alias from the contextual binding alias cache.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $searched</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeAbstractAlias</span><span style="color:#24292E;">($searched)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">aliases[$searched])) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">var_dump</span><span style="color:#24292E;">($searched);</span><span style="color:#D73A49;">exit</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">abstractAliases </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $abstract </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $aliases) {</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($aliases </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $index </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $alias) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($alias </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> $searched) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">unset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">abstractAliases[$abstract][$index]);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">	    }</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>测试结果：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">&quot;path&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span><span style="color:#032F62;">&quot;path&quot;</span></span></code></pre></div><p>继续做如下的var_dump中断测试：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Remove an alias from the contextual binding alias cache.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;">  </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">  $searched</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeAbstractAlias</span><span style="color:#E1E4E8;">($searched)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">aliases[$searched])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">abstractAliases </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $abstract </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $aliases) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">var_dump</span><span style="color:#E1E4E8;">($searched);</span><span style="color:#F97583;">exit</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($aliases </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $index </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $alias) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($alias </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> $searched) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">unset</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">abstractAliases[$abstract][$index]);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">	    }</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Remove an alias from the contextual binding alias cache.</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;">  </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">  $searched</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeAbstractAlias</span><span style="color:#24292E;">($searched)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">aliases[$searched])) {</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">abstractAliases </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $abstract </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $aliases) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">var_dump</span><span style="color:#24292E;">($searched);</span><span style="color:#D73A49;">exit</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($aliases </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $index </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $alias) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($alias </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> $searched) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">unset</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">abstractAliases[$abstract][$index]);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">	    }</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>测试发现，首页仍然能正常访问。</p><p>上面两次中断测试，说明默认情况下，foreach循环体中的语句并不会被触发运行。这里我们能看到，这个方法的主要目的，就是检测abstractAliases成员变量中是否包含$searched这个键，如果包含则主动删除。</p><p>instance方法中剩余的代码，做的工作可以简述如下：</p><p>将$instance装填到容器的instances成员变量上，注意这个变量是一个数组，键值就是传递进来的$abstract。</p><p>之后判断$abstract是否被绑定过，如果是，则执行绑定回调事件。</p><p>最后返回$instance变量</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">instances[$abstract] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($isBound) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">rebound</span><span style="color:#E1E4E8;">($abstract);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $instance;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">instances[$abstract] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($isBound) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">rebound</span><span style="color:#24292E;">($abstract);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $instance;</span></span></code></pre></div><p>最后我们简单总结一下：</p><ol><li><p>instance方法执行的主要动作就是往容器对象的成员变量instances身上绑定新的键值对</p></li><li><p>绑定之前会移除成员变量abstractAliases中的相应键值(如果有)</p></li><li><p>如果成员变量aliases中有相应键值对也移除</p></li><li><p>如果当前要绑定的这个键已经被绑定过，主动运行当前键上保存的绑定回调事件</p></li></ol>`,19),e=[o];function t(c,r,y,i,E,d){return a(),n("div",null,e)}const D=s(l,[["render",t]]);export{h as __pageData,D as default};
