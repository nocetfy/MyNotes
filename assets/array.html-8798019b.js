import{_ as e,H as o,X as c,Y as l,Z as n,a0 as s,a1 as p,$ as t}from"./framework-47f15ee6.js";const u={},i=n("h1",{id:"数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数组","aria-hidden":"true"},"#"),s(" 数组")],-1),k=n("p",null,"[toc]",-1),r=n("blockquote",null,[n("p",null,"子数组问题通用思路：枚举右端点")],-1),d=n("h2",{id:"模拟步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模拟步骤","aria-hidden":"true"},"#"),s(" 模拟步骤")],-1),m={id:"_54-螺旋矩阵",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_54-螺旋矩阵","aria-hidden":"true"},"#",-1),b={href:"https://leetcode-cn.com/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>给你一个 <code>m</code> 行 <code>n</code> 列的矩阵 <code>matrix</code> ，请按照 <strong>顺时针螺旋顺序</strong> ，返回矩阵中的所有元素。</p><p><strong>示例1：</strong></p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/8uFEadVHbhC3lqv.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2：</strong></p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/6ICOwqXrHKUM8Gm.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>思路：</p><p>​ 左闭右开区间，按照从左到右，从上到下，从右到左，从下到上的顺序生成二维数组的元素，每列每次生成n -1-count个元素，每行每次生成m-1-count个元素</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> len1 <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> flagI <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> flagD <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        k<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length <span class="token operator">*</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>flagD<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flagI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    n<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        n<span class="token operator">--</span><span class="token punctuation">;</span>
                        count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                        len<span class="token operator">--</span><span class="token punctuation">;</span>
                        flagI <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    m<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> len1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        m<span class="token operator">--</span><span class="token punctuation">;</span>
                        count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                        len1<span class="token operator">--</span><span class="token punctuation">;</span>
                        flagI <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        flagD <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flagI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    n<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        n<span class="token operator">++</span><span class="token punctuation">;</span>
                        count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                        len<span class="token operator">--</span><span class="token punctuation">;</span>
                        flagI <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    m<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> len1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        m<span class="token operator">++</span><span class="token punctuation">;</span>
                        count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                        len1<span class="token operator">--</span><span class="token punctuation">;</span>
                        flagI <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        flagD <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            k<span class="token operator">++</span><span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>思路：</p><p>​ 更改值为特定值，标记为已经走过，然后根据方向决定向哪里走，当满足条件时转换方向。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>m <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> direction <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>direction <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                direction <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>direction <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                direction <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>direction <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                direction <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>direction <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                direction <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
           <span class="token keyword">switch</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
                            j<span class="token operator">++</span><span class="token punctuation">;</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                            i<span class="token operator">++</span><span class="token punctuation">;</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                            j<span class="token operator">--</span><span class="token punctuation">;</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                            i<span class="token operator">--</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,12),w={id:"_59-螺旋矩阵-ii",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#_59-螺旋矩阵-ii","aria-hidden":"true"},"#",-1),h={href:"https://leetcode-cn.com/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>给你一个正整数 <code>n</code> ，生成一个包含 <code>1</code> 到 <code>n2</code> 所有元素，且元素按顺时针顺序螺旋排列的 <code>n x n</code> 正方形矩阵 <code>matrix</code> 。</p><p><strong>示例1：</strong></p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/knqVygBGIHiLdRr.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">3</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>思路：</p><p>​ 左闭右开区间，按照从左到右，从上到下，从右到左，从下到上的顺序生成二维数组的元素，每次生成n -1-count个元素，如果n是奇数，中心元素单独赋值n * n</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">generateMatrix</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> len <span class="token operator">-</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                j<span class="token operator">++</span><span class="token punctuation">;</span>
                temp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len <span class="token operator">-</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
                temp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
                temp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                i<span class="token operator">--</span><span class="token punctuation">;</span>
                temp<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            matrix<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> matrix<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,7);function x(_,j){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,k,r,d,n("h4",m,[v,s(),n("a",b,[s("54. 螺旋矩阵"),p(a)])]),g,n("h4",w,[y,s(),n("a",h,[s("59. 螺旋矩阵 II"),p(a)])]),f])}const q=e(u,[["render",x],["__file","array.html.vue"]]);export{q as default};