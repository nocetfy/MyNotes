import{_ as a,H as p,X as t,Y as o,Z as n,a0 as e,a1 as c,$ as l}from"./framework-47f15ee6.js";const i={},u=l(`<h1 id="线段树" tabindex="-1"><a class="header-anchor" href="#线段树" aria-hidden="true">#</a> 线段树</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>线段树是算法竞赛中常用的用来维护 <strong>区间信息</strong> 的数据结构。</p><p>线段树可以在 的时间复杂度内实现单点修改、区间修改、区间查询（区间求和，求区间最大值，求区间最小值）等操作。</p><h4 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> left<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> right<span class="token punctuation">;</span>
        <span class="token keyword">int</span> l<span class="token punctuation">;</span>
        <span class="token keyword">int</span> r<span class="token punctuation">;</span>
        <span class="token keyword">int</span> mid<span class="token punctuation">;</span>
        <span class="token keyword">int</span> v<span class="token punctuation">;</span>
        <span class="token keyword">int</span> add<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>l <span class="token operator">=</span> l<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>r <span class="token operator">=</span> r<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>mid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">class</span> <span class="token class-name">SegmentTree</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">Node</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">1e9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">SegmentTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">modify</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> v<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>l <span class="token operator">&gt;=</span> l <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>r <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>v <span class="token operator">=</span> v<span class="token punctuation">;</span>
                node<span class="token punctuation">.</span>add <span class="token operator">=</span> v<span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">pushdown</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> node<span class="token punctuation">.</span>mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">modify</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> v<span class="token punctuation">,</span> node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">modify</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> v<span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">pushup</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushup</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>v <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>v<span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pushdown</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>l<span class="token punctuation">,</span> node<span class="token punctuation">.</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>add <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Node</span> left <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
                left<span class="token punctuation">.</span>add <span class="token operator">=</span> node<span class="token punctuation">.</span>add<span class="token punctuation">;</span>
                right<span class="token punctuation">.</span>add <span class="token operator">=</span> node<span class="token punctuation">.</span>add<span class="token punctuation">;</span>

                left<span class="token punctuation">.</span>v <span class="token operator">=</span> node<span class="token punctuation">.</span>add<span class="token punctuation">;</span>
                right<span class="token punctuation">.</span>v <span class="token operator">=</span> node<span class="token punctuation">.</span>add<span class="token punctuation">;</span>
                node<span class="token punctuation">.</span>add <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>l <span class="token operator">&gt;=</span> l <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>r <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>v<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">pushdown</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> node<span class="token punctuation">.</span>mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                v <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                v <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k={href:"https://www.bilibili.com/video/BV15D4y1G7ms/?vd_source=796837b5aa058b3dd0be87c00ba75c6c",target:"_blank",rel:"noopener noreferrer"};function d(r,v){const s=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",k,[e("https://www.bilibili.com/video/BV15D4y1G7ms/?vd_source=796837b5aa058b3dd0be87c00ba75c6c"),c(s)])])])}const b=a(i,[["render",d],["__file","segament.html.vue"]]);export{b as default};