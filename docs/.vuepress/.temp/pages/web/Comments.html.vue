<template><div><p>LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline &gt; Valine &gt; giscus &gt; Gitalk &gt; Gitter。</p>
<h2 id="评论插件" tabindex="-1"><a class="header-anchor" href="#评论插件" aria-hidden="true">#</a> 评论插件</h2>
<ul>
<li><a href="https://waline.js.org/guide/get-started.html" target="_blank" rel="noopener noreferrer">Waline<ExternalLinkIcon/></a>：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。</li>
<li><a href="https://github.com/xCss/Valine" target="_blank" rel="noopener noreferrer">Valine<ExternalLinkIcon/></a>：快速、简洁且高效的无后端评论系统，可匿名互动。</li>
<li><a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">giscus<ExternalLinkIcon/></a>：基于 github discussion，近似于论坛。查看 <a href="https://blog.csdn.net/duninet/article/details/125280107" target="_blank" rel="noopener noreferrer">配置方法<ExternalLinkIcon/></a>。</li>
<li><a href="https://github.com/gitalk/gitalk" target="_blank" rel="noopener noreferrer">Gitalk<ExternalLinkIcon/></a>：基于 github commit，需配置独立库用于存储评论。</li>
<li><a href="https://gitter.im/" target="_blank" rel="noopener noreferrer">Gitter<ExternalLinkIcon/></a>：要登录的公共聊天室。样例如：<a href="https://boardgame.io/documentation/#/" target="_blank" rel="noopener noreferrer">boardgame<ExternalLinkIcon/></a>，<a href="https://itchef.github.io/regauge/#/" target="_blank" rel="noopener noreferrer">regauge<ExternalLinkIcon/></a>。</li>
</ul>
<h2 id="waline" tabindex="-1"><a class="header-anchor" href="#waline" aria-hidden="true">#</a> Waline</h2>
<p>Waline 支持 Akismet 反垃圾评论和免注册留言，不过匿名留言会带来安全隐患，建议开启评论通知，避免极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。</p>
<p>Vercel 项目中选择「Overview」&gt;「Settings」&gt;「Environment Variables」，然后按照 <a href="https://waline.js.org/guide/server/notification.html" target="_blank" rel="noopener noreferrer">Waline 评论通知<ExternalLinkIcon/></a>配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 <a href="https://waline.js.org/reference/server.html" target="_blank" rel="noopener noreferrer">Waline 服务端配置<ExternalLinkIcon/></a>。配置成功后，选择「Overview」&gt;「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。</p>
<p>目前 <code v-pre>*.vercel.app</code> 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。</p>
<h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2>
<p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p>
<p><code v-pre>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<p>将以下代码放入 docsify 页面中，即可启动 Gitalk：</p>
<div class="language-HTML line-numbers-mode" data-ext="HTML"><pre v-pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;

&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    /* 使用下面的 Javascript 代码生成 gitalk 插件 */
    const gitalk = new Gitalk({
        clientID: '2f3da234d27ed9a7c290',
        clientSecret: 'd64c45594858477fff0c234c3ed3947a53b0a9ac',
        repo: 'docsifytalk',        //仓库名称 (GitHub repo)
        owner: 'rockbenben',        //仓库拥有者 (GitHub repo owner)
        admin: ['rockbenben'],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p>
<ul>
<li>每次有新页面时，都需要登录 github 初始化评论区。</li>
<li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="https://blog.csdn.net/qq_39052513/article/details/108291272" target="_blank" rel="noopener noreferrer">超 Nice 的评论组件 —— Gitalk<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


