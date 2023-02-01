<template><div><h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1>
<p>[TOC]</p>
<h4 id="剑指-offer-05-替换空格" tabindex="-1"><a class="header-anchor" href="#剑指-offer-05-替换空格" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/" target="_blank" rel="noopener noreferrer">剑指 Offer 05. 替换空格<ExternalLinkIcon/></a></h4>
<p>请实现一个函数，把字符串 <code v-pre>s</code> 中的每个空格替换成<code v-pre>&quot;%20&quot;</code>。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"We are happy."</span>
输出：<span class="token string">"We%20are%20happy."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		遍历字符，然后替换。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cc <span class="token operator">=</span>  s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token operator">:</span>cc<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">' '</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
              sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_344-反转字符串" tabindex="-1"><a class="header-anchor" href="#_344-反转字符串" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/reverse-string/" target="_blank" rel="noopener noreferrer">344. 反转字符串<ExternalLinkIcon/></a></h4>
<p>编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 <code v-pre>char[]</code> 的形式给出。</p>
<p>不要给另外的数组分配额外的空间，你必须<em>原地</em> <strong>修改输入数组</strong>、使用 <code v-pre>O(1)</code> 的额外空间解决这一问题。</p>
<p>你可以假设数组中的所有字符都是 <em>ASCII</em> 码表中的可打印字符。</p>
<p><strong>示例1：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>输入：<span class="token punctuation">[</span><span class="token string">"h"</span><span class="token punctuation">,</span><span class="token string">"e"</span><span class="token punctuation">,</span><span class="token string">"l"</span><span class="token punctuation">,</span><span class="token string">"l"</span><span class="token punctuation">,</span><span class="token string">"o"</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token string">"o"</span><span class="token punctuation">,</span><span class="token string">"l"</span><span class="token punctuation">,</span><span class="token string">"l"</span><span class="token punctuation">,</span><span class="token string">"e"</span><span class="token punctuation">,</span><span class="token string">"h"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		双指针，交换头尾，同时移动指针。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverseString</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>right <span class="token operator">></span> left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_541-反转字符串-ii" tabindex="-1"><a class="header-anchor" href="#_541-反转字符串-ii" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/reverse-string-ii/" target="_blank" rel="noopener noreferrer">541. 反转字符串 II<ExternalLinkIcon/></a></h4>
<p>给定一个字符串 <code v-pre>s</code> 和一个整数 <code v-pre>k</code>，从字符串开头算起，每计数至 <code v-pre>2k</code> 个字符，就反转这 <code v-pre>2k</code> 字符中的前 <code v-pre>k</code> 个字符。</p>
<p>如果剩余字符少于 <code v-pre>k</code> 个，则将剩余字符全部反转。如果剩余字符小于 <code v-pre>2k</code> 但大于或等于 <code v-pre>k</code> 个，则反转前 <code v-pre>k</code> 个字符，其余字符保持原样。</p>
<p><strong>示例 1：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>输入：s <span class="token operator">=</span> <span class="token string">"abcdefg"</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token string">"bacdfeg"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>输入：s <span class="token operator">=</span> <span class="token string">"abcd"</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token string">"bacd"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		循环，每次步长<code v-pre>+2k</code>，然后将区间内进行首尾互换。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token comment">// 是否够k个元素，不足则end取到字符串尾，否则取k位</span>
            <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
                ch<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">^=</span> ch<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
                start<span class="token operator">++</span><span class="token punctuation">;</span>
                end<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_151-翻转字符串里的单词" tabindex="-1"><a class="header-anchor" href="#_151-翻转字符串里的单词" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/reverse-words-in-a-string/" target="_blank" rel="noopener noreferrer">151. 翻转字符串里的单词<ExternalLinkIcon/></a></h4>
<p>给你一个字符串 <code v-pre>s</code> ，逐个翻转字符串中的所有<strong>单词</strong>。</p>
<p><strong>单词</strong>是由非空格字符组成的字符串。<code v-pre>s</code> 中使用至少一个空格将字符串中的<strong>单词</strong>分隔开。</p>
<p>请你返回一个翻转<code v-pre> s</code> 中单词顺序并用单个空格相连的字符串。</p>
<p>说明：</p>
<ul>
<li>输入字符串 <code v-pre>s</code> 可以在前面、后面或者单词间包含多余的空格。</li>
<li>翻转后单词间应当仅用一个空格分隔。</li>
<li>翻转后的字符串中不应包含额外的空格。</li>
</ul>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"the sky is blue"</span>
输出：<span class="token string">"blue is sky the"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"  hello world  "</span>
输出：<span class="token string">"world hello"</span>
解释：输入字符串可以在前面或者后面包含多余的空格，但是翻转后的字符不能包括。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"a good   example"</span>
输出：<span class="token string">"example good a"</span>
解释：如果两个单词间有多余的空格，将翻转后单词间的空格减少到只含一个。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"  Bob    Loves  Alice   "</span>
输出：<span class="token string">"Alice Loves Bob"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"Alice does not even like bob"</span>
输出：<span class="token string">"bob like even not does Alice"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		分隔字符串。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h4 id="剑指-offer-58-ii-左旋转字符串" tabindex="-1"><a class="header-anchor" href="#剑指-offer-58-ii-左旋转字符串" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/" target="_blank" rel="noopener noreferrer">剑指 Offer 58 - II. 左旋转字符串<ExternalLinkIcon/></a></h4>
<p>​		字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串<code v-pre>&quot;abcdefg&quot;</code>和数字<code v-pre>2</code>，该函数将返回左旋转两位得到的结果<code v-pre>&quot;cdefgab&quot;</code>。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> s <span class="token operator">=</span> <span class="token string">"abcdefg"</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">2</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token string">"cdefgab"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> s <span class="token operator">=</span> <span class="token string">"lrloseumgh"</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">6</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token string">"umghlrlose"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		在数字<code v-pre>n</code>处截断，前半段和后半段分别反转，最后将字符串整体反转。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">reverseLeftWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> n<span class="token punctuation">,</span> sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> sb<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">char</span> temp <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">.</span><span class="token function">setCharAt</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> sb<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sb<span class="token punctuation">.</span><span class="token function">setCharAt</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            start<span class="token operator">++</span><span class="token punctuation">;</span>
            end<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_28-实现-strstr" tabindex="-1"><a class="header-anchor" href="#_28-实现-strstr" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/implement-strstr/" target="_blank" rel="noopener noreferrer">28. 实现 strStr()<ExternalLinkIcon/></a></h4>
<p>实现 <a href="https://baike.baidu.com/item/strstr/811469" target="_blank" rel="noopener noreferrer">strStr()<ExternalLinkIcon/></a> 函数。</p>
<p>给你两个字符串 <code v-pre>haystack</code> 和 <code v-pre>needle</code> ，请你在 <code v-pre>haystack</code> 字符串中找出 <code v-pre>needle</code> 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 <code v-pre>-1</code> 。</p>
<p><strong>说明：</strong></p>
<p>当 <code v-pre>needle</code> 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。</p>
<p>对于本题而言，当 <code v-pre>needle</code> 是空字符串时我们应当返回 0 。这与 C 语言的 <a href="https://baike.baidu.com/item/strstr/811469" target="_blank" rel="noopener noreferrer">strstr()<ExternalLinkIcon/></a> 以及 Java 的 <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)" target="_blank" rel="noopener noreferrer">indexOf()<ExternalLinkIcon/></a> 定义相符。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：haystack <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">,</span> needle <span class="token operator">=</span> <span class="token string">"ll"</span>
输出：<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：haystack <span class="token operator">=</span> <span class="token string">"aaaaa"</span><span class="token punctuation">,</span> needle <span class="token operator">=</span> <span class="token string">"bba"</span>
输出：<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：haystack <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> needle <span class="token operator">=</span> <span class="token string">""</span>
输出：<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><hr>
<h4 id="_459-重复的子字符串" tabindex="-1"><a class="header-anchor" href="#_459-重复的子字符串" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/repeated-substring-pattern/" target="_blank" rel="noopener noreferrer">459. 重复的子字符串<ExternalLinkIcon/></a></h4>
<p>给定一个非空的字符串 <code v-pre>s</code> ，检查是否可以通过由它的一个子串重复多次构成。</p>
<p><strong>示例 1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> s <span class="token operator">=</span> <span class="token string">"abab"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 可由子串 <span class="token string">"ab"</span> 重复两次构成。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> s <span class="token operator">=</span> <span class="token string">"aba"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> s <span class="token operator">=</span> <span class="token string">"abcabcabcabc"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 可由子串 <span class="token string">"abc"</span> <span class="token function">重复四次构成。</span> <span class="token punctuation">(</span>或子串 <span class="token string">"abcabc"</span> 重复两次构成。<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><hr>
</div></template>


