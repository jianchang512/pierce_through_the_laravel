import{_ as s}from"./chunks/test_11.92d1822b.js";import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.a9d1f0e8.js";const e="/assets/test_03.848d0662.png",P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1.md","filePath":"1.md"}'),o={name:"1.md"},c=p('<h2 id="第一章-基础环境搭建" tabindex="-1">第一章：基础环境搭建 <a class="header-anchor" href="#第一章-基础环境搭建" aria-label="Permalink to &quot;第一章：基础环境搭建&quot;">​</a></h2><p>分析代码前，有必要主动告知大家本文分析的Laravel框架是哪个版本。以防有读者在核对代码时，发现作者引用的代码和其本地的代码版本不一致，由此引发不必要的误会。</p><p>对于框架版本不一致的情况，强烈建议您在本地安装一个和作者分析的版本一致的Laravel应用。作者相信通读这个系列的文章后，对于新版本框架的代码，您可以依葫芦画瓢，依靠自己的力量去理解新旧框架之间的不同部分。</p><p>下面是本文安装的Laravel框架版本：</p><p><img src="'+e+`" alt=""></p><p>【图1.1】</p><p>composer安装方法：<code>composer create-project --prefer-dist laravel/laravel blog &quot;5.8.*&quot;</code></p><blockquote><p>上述命令中的blog，实际上是我们安装完laravel框架后项目的文件夹名称</p></blockquote><p>通常，当我们使用composer执行完上述命令后，blog应用并不是立即可用的，你还需要做一些必要的配置：</p><p>.env配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">APP_NAME=Blog</span></span>
<span class="line"><span style="color:#e1e4e8;">APP_ENV=local</span></span>
<span class="line"><span style="color:#e1e4e8;">APP_KEY=base64:fvgDEFOa3vK7Hk8lvUwN8Pat0w/u7o16IJ4j+lj3g1k=</span></span>
<span class="line"><span style="color:#e1e4e8;">APP_DEBUG=true</span></span>
<span class="line"><span style="color:#e1e4e8;">APP_URL=http://dev.blog.z</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">LOG_CHANNEL=stack</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">DB_CONNECTION=mysql</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_HOST=192.168.10.1</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_PORT=3306</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_DATABASE=laravel</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_USERNAME=root</span></span>
<span class="line"><span style="color:#e1e4e8;">DB_PASSWORD=123456</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">BROADCAST_DRIVER=log</span></span>
<span class="line"><span style="color:#e1e4e8;">CACHE_DRIVER=file</span></span>
<span class="line"><span style="color:#e1e4e8;">QUEUE_CONNECTION=database</span></span>
<span class="line"><span style="color:#e1e4e8;">QUEUE_DRIVER=database</span></span>
<span class="line"><span style="color:#e1e4e8;">SESSION_DRIVER=file</span></span>
<span class="line"><span style="color:#e1e4e8;">#SESSION_DRIVER=database</span></span>
<span class="line"><span style="color:#e1e4e8;">#SESSION_DRIVER=redis//使用redis</span></span>
<span class="line"><span style="color:#e1e4e8;">#SESSION_CONNECTION=session//使用redis</span></span>
<span class="line"><span style="color:#e1e4e8;">SESSION_LIFETIME=120</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">REDIS_HOST=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">REDIS_PASSWORD=null</span></span>
<span class="line"><span style="color:#e1e4e8;">REDIS_PORT=6379</span></span>
<span class="line"><span style="color:#e1e4e8;">REDIS_DB=0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">MAIL_DRIVER=smtp</span></span>
<span class="line"><span style="color:#e1e4e8;">MAIL_HOST=smtp.mailtrap.io</span></span>
<span class="line"><span style="color:#e1e4e8;">MAIL_PORT=2525</span></span>
<span class="line"><span style="color:#e1e4e8;">MAIL_USERNAME=null</span></span>
<span class="line"><span style="color:#e1e4e8;">MAIL_PASSWORD=null</span></span>
<span class="line"><span style="color:#e1e4e8;">MAIL_ENCRYPTION=null</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">AWS_ACCESS_KEY_ID=</span></span>
<span class="line"><span style="color:#e1e4e8;">AWS_SECRET_ACCESS_KEY=</span></span>
<span class="line"><span style="color:#e1e4e8;">AWS_DEFAULT_REGION=us-east-1</span></span>
<span class="line"><span style="color:#e1e4e8;">AWS_BUCKET=</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">PUSHER_APP_ID=</span></span>
<span class="line"><span style="color:#e1e4e8;">PUSHER_APP_KEY=</span></span>
<span class="line"><span style="color:#e1e4e8;">PUSHER_APP_SECRET=</span></span>
<span class="line"><span style="color:#e1e4e8;">PUSHER_APP_CLUSTER=mt1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">MIX_PUSHER_APP_KEY=&quot;\${PUSHER_APP_KEY}&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">MIX_PUSHER_APP_CLUSTER=&quot;\${PUSHER_APP_CLUSTER}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">APP_NAME=Blog</span></span>
<span class="line"><span style="color:#24292e;">APP_ENV=local</span></span>
<span class="line"><span style="color:#24292e;">APP_KEY=base64:fvgDEFOa3vK7Hk8lvUwN8Pat0w/u7o16IJ4j+lj3g1k=</span></span>
<span class="line"><span style="color:#24292e;">APP_DEBUG=true</span></span>
<span class="line"><span style="color:#24292e;">APP_URL=http://dev.blog.z</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">LOG_CHANNEL=stack</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">DB_CONNECTION=mysql</span></span>
<span class="line"><span style="color:#24292e;">DB_HOST=192.168.10.1</span></span>
<span class="line"><span style="color:#24292e;">DB_PORT=3306</span></span>
<span class="line"><span style="color:#24292e;">DB_DATABASE=laravel</span></span>
<span class="line"><span style="color:#24292e;">DB_USERNAME=root</span></span>
<span class="line"><span style="color:#24292e;">DB_PASSWORD=123456</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">BROADCAST_DRIVER=log</span></span>
<span class="line"><span style="color:#24292e;">CACHE_DRIVER=file</span></span>
<span class="line"><span style="color:#24292e;">QUEUE_CONNECTION=database</span></span>
<span class="line"><span style="color:#24292e;">QUEUE_DRIVER=database</span></span>
<span class="line"><span style="color:#24292e;">SESSION_DRIVER=file</span></span>
<span class="line"><span style="color:#24292e;">#SESSION_DRIVER=database</span></span>
<span class="line"><span style="color:#24292e;">#SESSION_DRIVER=redis//使用redis</span></span>
<span class="line"><span style="color:#24292e;">#SESSION_CONNECTION=session//使用redis</span></span>
<span class="line"><span style="color:#24292e;">SESSION_LIFETIME=120</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">REDIS_HOST=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;">REDIS_PASSWORD=null</span></span>
<span class="line"><span style="color:#24292e;">REDIS_PORT=6379</span></span>
<span class="line"><span style="color:#24292e;">REDIS_DB=0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">MAIL_DRIVER=smtp</span></span>
<span class="line"><span style="color:#24292e;">MAIL_HOST=smtp.mailtrap.io</span></span>
<span class="line"><span style="color:#24292e;">MAIL_PORT=2525</span></span>
<span class="line"><span style="color:#24292e;">MAIL_USERNAME=null</span></span>
<span class="line"><span style="color:#24292e;">MAIL_PASSWORD=null</span></span>
<span class="line"><span style="color:#24292e;">MAIL_ENCRYPTION=null</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">AWS_ACCESS_KEY_ID=</span></span>
<span class="line"><span style="color:#24292e;">AWS_SECRET_ACCESS_KEY=</span></span>
<span class="line"><span style="color:#24292e;">AWS_DEFAULT_REGION=us-east-1</span></span>
<span class="line"><span style="color:#24292e;">AWS_BUCKET=</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">PUSHER_APP_ID=</span></span>
<span class="line"><span style="color:#24292e;">PUSHER_APP_KEY=</span></span>
<span class="line"><span style="color:#24292e;">PUSHER_APP_SECRET=</span></span>
<span class="line"><span style="color:#24292e;">PUSHER_APP_CLUSTER=mt1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">MIX_PUSHER_APP_KEY=&quot;\${PUSHER_APP_KEY}&quot;</span></span>
<span class="line"><span style="color:#24292e;">MIX_PUSHER_APP_CLUSTER=&quot;\${PUSHER_APP_CLUSTER}&quot;</span></span></code></pre></div><blockquote><p>注意：默认composer安装laravel框架完成后，根目录下只有一个&quot;.env.example&quot;文件，你需要自己生成一个.env文件，并且修改其中的配置值。上面这个示例，是作者本机应用的一个配置。关于Laravel如何配置，您可以阅读Laravel5.8手册获取相关知识，此处不再赘述。</p><p>由于我们分析的代码不涉及读取数据库的任何操作，上述配置仍可继续简化（将&quot;DB_&quot;为前缀的配置项全部删除或注释）</p></blockquote><p>nginx站点配置:</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> dev.blog.z;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#9ECBFF;">&quot;/home/www/blog/public/&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;"> index.htm index.html index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.php(.*)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_pass </span><span style="color:#E1E4E8;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_index </span><span style="color:#E1E4E8;"> index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;"> fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }               </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">   </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;"> dev.blog.z;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#032F62;">&quot;/home/www/blog/public/&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> index </span><span style="color:#24292E;"> index.htm index.html index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">                </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\\.php(.*)$ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> fastcgi_pass </span><span style="color:#24292E;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> fastcgi_index </span><span style="color:#24292E;"> index.php;</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> fastcgi_param </span><span style="color:#24292E;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;"> fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">        }               </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>注意：在这个配置实例中，我们给web网站定义的域名是&quot;dev.blog.z&quot;（和之前.env文件中的APP_URL保持一致），这个域名您当然可以随意更改。同时您需要注意的是root对应的配置值：/home/www/blog/public/，这个路径一定要对应您本地安装blog应用后文件夹所处的实际目录。</p></blockquote><p>默认情况下完成上述配置后，访问的主页应该像下面这样：</p><p><img src="`+s+`" alt=""></p><p>【图1.2】</p><h3 id="关于nginx重定向" tabindex="-1">关于Nginx重定向 <a class="header-anchor" href="#关于nginx重定向" aria-label="Permalink to &quot;关于Nginx重定向&quot;">​</a></h3><p>通常，基于MVC模式的框架都是走统一的单一入口文件模式，而在web服务器中, 要实现这一点也很简单，利用web服务器的URL重定向功能，比如nginx提供的try files指令就能实现。我们来看一个Laravel站点的配置文件(nginx.conf)：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> dev.blog.z;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#9ECBFF;">&quot;/home/www/www/blog/public/&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;"> index.htm index.html index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.php(.*)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_pass </span><span style="color:#E1E4E8;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_index </span><span style="color:#E1E4E8;"> index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;"> fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }               </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">   </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;"> dev.blog.z;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#032F62;">&quot;/home/www/www/blog/public/&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> index </span><span style="color:#24292E;"> index.htm index.html index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">                </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\\.php(.*)$ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> fastcgi_pass </span><span style="color:#24292E;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> fastcgi_index </span><span style="color:#24292E;"> index.php;</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> fastcgi_param </span><span style="color:#24292E;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;"> fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">        }               </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>现在假设用户在浏览器中输入:<a href="http://dev.blog.z/test/index" target="_blank" rel="noreferrer">http://dev.blog.z/test/index</a> 根据上面这个配置, nginx会进行怎样的处理呢？</p><ul><li><ol><li>首先nginx读取路径中的uri部分：/test/index，try files指令的意思是优先读取相对应目录下的文件，读取不到则丢弃该请求，并重新发起一个子请求。</li></ol></li><li><ol start="2"><li>由于/home/www/www/blog/public/下没有test/index文件夹，因此服务器会发起一个内部子请求到/home/www/www/blog/public/index.php</li></ol></li><li><ol start="3"><li>由于try files指令中index.php后面携带了?$query_string，因此请求发送到index.php后，在服务端PHP通过<code>$_SERVER[&#39;REQUEST_URI&#39;]</code>语句获取到的值为/test/index</li></ol></li></ul><p>由此, 我们可以猜想Laravel框架在路由解析这一块使用的是分析<code>$_SERVER[&#39;REQUEST_URI&#39;]</code>结果, 和ThinkPHP3中分析path_info或者Phalcon中直接将uri放在_url=后作为重定向地址不同。</p><h3 id="思考" tabindex="-1">思考 <a class="header-anchor" href="#思考" aria-label="Permalink to &quot;思考&quot;">​</a></h3><ol><li>如果public下面有test/index/index.htm文件存在, 浏览器直接访问<a href="http://dev.blog.z/test/index%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%EF%BC%9F" target="_blank" rel="noreferrer">http://dev.blog.z/test/index会发生什么？</a></li><li>关于本文末尾提到的路由解析猜想，如何验证？</li></ol>`,26),t=[c];function r(E,i,y,_,d,S){return a(),l("div",null,t)}const R=n(o,[["render",r]]);export{P as __pageData,R as default};
