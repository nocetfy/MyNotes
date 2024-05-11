import{_ as e,X as a,Y as r,$ as i}from"./framework-47f15ee6.js";const o={},t=i('<h1 id="boot" tabindex="-1"><a class="header-anchor" href="#boot" aria-hidden="true">#</a> Boot</h1><h4 id="enablexxx的驱动逻辑" tabindex="-1"><a class="header-anchor" href="#enablexxx的驱动逻辑" aria-hidden="true">#</a> @EnableXXX的驱动逻辑</h4><p><code>@Enable</code>的模块驱动，依赖于<code>@Import</code>实现。然后会被<code>ConfigurationClassParser</code>解析。</p><h4 id="自动装配原理" tabindex="-1"><a class="header-anchor" href="#自动装配原理" aria-hidden="true">#</a> 自动装配原理</h4><h4 id="怎么自己封装starter" tabindex="-1"><a class="header-anchor" href="#怎么自己封装starter" aria-hidden="true">#</a> 怎么自己封装starter</h4><h4 id="配置文件读取顺序" tabindex="-1"><a class="header-anchor" href="#配置文件读取顺序" aria-hidden="true">#</a> 配置文件读取顺序</h4><blockquote><p>properties &gt; yml</p></blockquote><h5 id="内部配置" tabindex="-1"><a class="header-anchor" href="#内部配置" aria-hidden="true">#</a> 内部配置</h5><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20231028230115169.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>整个设计非常巧妙。SpringBoot会从这四个位置全部加载主配置文件，如果高优先级中配置文件属性与低优先级配置文件不冲突的属性，则会共同存在—<code>互补配置</code>。</p><h5 id="所有属性最终的生效顺序" tabindex="-1"><a class="header-anchor" href="#所有属性最终的生效顺序" aria-hidden="true">#</a> 所有属性最终的生效顺序</h5><ol><li>命令行参数（java -jar启动时指定的参数优先级最高）</li><li>Java系统属性（System.getProperties()）</li><li>jar包外部的<code>application-{profile}.properties</code>配置文件</li><li>jar包内部的<code>application-{profile}.properties</code>配置文件</li><li>jar包外部的application.properties配置文件（此级别在测试环境经常使用。比如就在jar包同级目录放置一个配置文件，就覆盖jar包内部所有的配置文件了）</li><li>jar包内部的application.properties配置文件</li></ol>',12),d=[t];function n(c,h){return a(),r("div",null,d)}const s=e(o,[["render",n],["__file","Spring Boot.html.vue"]]);export{s as default};