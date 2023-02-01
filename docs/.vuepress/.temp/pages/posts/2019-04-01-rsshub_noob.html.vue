<template><div><p>RSS 使用已经介绍了 feed43 和 Huginn，但这些工具或需要学习，或需要硬件。与之相比，RSSHub 有着成熟的配置，可以直接使用。</p>
<p><strong>RSSHub</strong> 是个开源项目，对微博、知乎、豆瓣、bilibili、Youtube 等主流网站进行 RSS 转化。我们只要访问 <a href="https://docs.rsshub.app/" target="_blank" rel="noopener noreferrer">RSSHub 官网<ExternalLinkIcon/></a>，上面定期更新了主流媒体的 rss 项目。</p>
<figure><img src="http://tc.seoipo.com/20190331012441.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="抓取示例-bilibili-番剧" tabindex="-1"><a class="header-anchor" href="#抓取示例-bilibili-番剧" aria-hidden="true">#</a> 抓取示例：bilibili 番剧</h2>
<ol>
<li>
<p>打开 <a href="https://docs.rsshub.app/social-media.html#bilibili" target="_blank" rel="noopener noreferrer">RSSHub bilibili 专区<ExternalLinkIcon/></a> ，上面能根据番剧、UP 主等定制 rss。</p>
<figure><img src="http://tc.seoipo.com/20190406131343.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
<li>
<p>准备抓取番剧《盾之勇者成名录》的更新，番剧主页链接为 <code v-pre>https://www.bilibili.com/bangumi/media/md4316482/</code> ，mediaid 为 <code v-pre>4316482</code>。</p>
</li>
<li>
<p>按照路由参数修改 rss 链接 <code v-pre>https://rsshub.app/bilibili/bangumi/media/4316482</code>，并在 rss 阅读器中打开。</p>
<figure><img src="http://tc.seoipo.com/20190406134022.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
<p>p.s. RSSHub 使用非常简单，但现在已经太过流行，微博、知乎已经开始反爬限制，动手能力强建议走 Huginn。</p>
<h2 id="rss-合集" tabindex="-1"><a class="header-anchor" href="#rss-合集" aria-hidden="true">#</a> RSS 合集</h2>
<p>汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。</p>
<ul>
<li>
<p><a href="https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html" target="_blank" rel="noopener noreferrer">RSS 入门篇：FEED43&amp;FeedEx-为静态网页定制 RSS 源<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html" target="_blank" rel="noopener noreferrer">RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://newzone.top/posts/2019-04-01-rsshub_noob.html" target="_blank" rel="noopener noreferrer">RSS 速成篇：RSSHub 捡现成的轮子<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://newzone.top/posts/2020-03-25-rsshub_on_vps.html" target="_blank" rel="noopener noreferrer">RSS 速成篇 2：RSSHub 自部署<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html" target="_blank" rel="noopener noreferrer">RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html" target="_blank" rel="noopener noreferrer">RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


