<template><div><h1 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h1>
<p>[TOC]</p>
<h2 id="位运算简介" tabindex="-1"><a class="header-anchor" href="#位运算简介" aria-hidden="true">#</a> 位运算简介：</h2>
<p>程序中的所有数在计算机内存中都是以二进制的形式<a href="https://baike.baidu.com/item/%E5%82%A8%E5%AD%98/2446499" target="_blank" rel="noopener noreferrer">储存<ExternalLinkIcon/></a>的。位运算就是直接对整数在内存中的二进制位进行<a href="https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C/33052" target="_blank" rel="noopener noreferrer">操作<ExternalLinkIcon/></a>。比如，and 运算本来是一个逻辑<a href="https://baike.baidu.com/item/%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank" rel="noopener noreferrer">运算符<ExternalLinkIcon/></a>，但整数与整数之间也可以进行 and 运算。举个例子，6 的二进制是 110，11 的二进制是 1011，那么 6 and 11 的结果就是 2，它是二进制对应位进行逻辑运算的结果（0 表示 False，1 表示 True，空位都当 0 处理）。</p>
<h2 id="位运算的特点" tabindex="-1"><a class="header-anchor" href="#位运算的特点" aria-hidden="true">#</a> 位运算的特点：</h2>
<ul>
<li>在处理<strong>整形数值</strong>时，可以直接对组成整形数值的各个位进行操作。这意味着可以使用屏蔽技术获得整个数中的各个位。</li>
<li>&amp;（与）、|（或）、^(异或)、~（非 / 取反）</li>
<li>&gt;&gt; 和 &lt;&lt; 运算符将二进制位进行右移或者左移操作。</li>
<li>&gt;&gt;&gt; 运算符将用 0 填充高位；&gt;&gt; 运算符用符号位填充高位，没有 &lt;&lt;&lt; 运算符。</li>
<li>对于 int 型，1&lt;&lt; 35 与 1&lt;&lt;3 是相同的，而左边的操作数是 long 型是需要对右侧的操作数作数模 64。</li>
<li>与：相同为 1，或：有一个为 1 结果为 1，异或：相同为 0，不同为 1.</li>
<li>按位或的性质：每一位要么不变，要么从<code v-pre>0</code>变<code v-pre>1</code></li>
</ul>
<h2 id="位运算的规则" tabindex="-1"><a class="header-anchor" href="#位运算的规则" aria-hidden="true">#</a> 位运算的规则：</h2>
<figure><img src="https://s2.loli.net/2021/12/08/UMcFqRNEADnv5Vt.png" alt="运算" tabindex="0" loading="lazy"><figcaption>运算</figcaption></figure>
<p><strong>异或的性质：</strong></p>
<p>异或，可以理解为不进位的加法：1+1=0； 0+0=0；1+0=1</p>
<ul>
<li>交换律：可任意交换运算因子的位置，结果不变。</li>
<li>结合律：即（a<sup>b）</sup>c == a<sup>(b</sup>c)</li>
<li>对于任何数 x，都有 <code v-pre>x ^ x =0</code>, <code v-pre>x ^ 0 = x</code>， 同自己求异或为 0，同 0 求异或为自己。</li>
<li>自反性：A<sup>B</sup>B = A^0=A, 连续和同一个因子做异或运算，最终结果为自己。</li>
<li>当前位异或<code v-pre>1</code>，相当于对当前位取反<code v-pre>~</code>。</li>
<li><code v-pre>x &amp; (x - 1)</code>会去除<code v-pre>x</code>最右位的<code v-pre>1</code>，可以用来统计<code v-pre>1</code>的个数。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>异或运算：x <span class="token operator">^</span> <span class="token number">0</span> <span class="token operator">=</span> x， x <span class="token operator">^</span> <span class="token number">0xffffffff</span> <span class="token operator">=</span> <span class="token operator">~</span>x
与运算： x <span class="token operator">&amp;</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>， x <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">=</span> x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>lowbit</strong></p>
<p><code v-pre>lowbit(n)</code> 运算是一个位运算的常用技巧，它的作用是求出 <code v-pre>n</code> 在表示成二进制的时候，最右边的 <code v-pre>1</code> 出现的位置对应的数。</p>
<blockquote>
<p>公式：<code v-pre>lowbit(n) = n &amp; -n</code></p>
</blockquote>
<p>如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span><span class="token number">1010</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移位</strong></p>
<p><code v-pre>&lt;&lt;</code>：左移，将<code v-pre>移位的数字</code>的二进制位全部左移指定的<code v-pre>移位量</code>移位量由右操作数指定，右操作数必须是非负值，其右边空出的位用<code v-pre>0</code>填补，高位左移溢出则舍弃该高位。可能发生溢出，正数移位变负数，负数移位变正数，但是与相应的乘法运算结果相同。<strong>左移<code v-pre>1</code>位相当于对数字乘以<code v-pre>2</code></strong>。</p>
<p><code v-pre>&gt;&gt;</code>：逻辑右移，逻辑右移运算是将<code v-pre>移动的数字</code>的二进制位数按指定<code v-pre>移位量</code>向右移动，右边低位溢出 y 位则舍弃。<strong>左边的空位一律补符号位</strong>。<strong>右移<code v-pre>1</code>位相当于对数字除以<code v-pre>2</code></strong>。</p>
<blockquote>
<p>​		因为右移相当于除以<code v-pre>2</code>，所以对<code v-pre>2</code>取模相当于拿到右移移走的这些位，即低位的<code v-pre>n</code>位。与<code v-pre>2</code>的幂减<code v-pre>1</code>做按位与运算，即可以得到这些位。所以<code v-pre>HashMap</code>容量要设计为<code v-pre>2</code>的次幂。当<code v-pre>n</code>为<code v-pre>2</code>时，有<code v-pre>x % n  == x &amp; n - 1</code>。</p>
</blockquote>
<p><code v-pre>&gt;&gt;&gt;</code>：算术右移，逻辑右移运算是将<code v-pre>移动的数字</code>的二进制位数按指定<code v-pre>移位量</code>向右移动，右边低位溢出 y 位则舍弃。<strong>左边的空位一律补0</strong>，会把负数变成正数。</p>
<blockquote>
<p>限制：</p>
<p>​		如果超过了移位的最大次数，会对最大次数取模作为移位的次数。以<code v-pre>int</code>为例(<code v-pre>4</code>字节，<code v-pre>32</code>位)，如果直接左移<code v-pre>36</code>位，结果并不是<code v-pre>0</code>，而是等同于左移<code v-pre>36%32=4</code>位。</p>
</blockquote>
<h2 id="位运算的简单应用" tabindex="-1"><a class="header-anchor" href="#位运算的简单应用" aria-hidden="true">#</a> 位运算的简单应用</h2>
<h3 id="判断奇偶数" tabindex="-1"><a class="header-anchor" href="#判断奇偶数" aria-hidden="true">#</a> 判断奇偶数：</h3>
<blockquote>
<p>思路：</p>
<p>​		任何整数，如果是奇数，则转化为二进制数后，最后一位二进制位肯定为<code v-pre>1</code>，为偶数，则最后一位二进制位为 <code v-pre>0</code>。利用这个性质，将任意整数 x 与 1 作与运算，如果结果为 1，则 x 为奇数；结果为 0，则 x 为 0 数。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Case1_JudjeOddEven</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
		<span class="token function">judjeOddEven</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">judjeOddEven</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">judjeOddEven</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">"是偶数！"</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">"是奇数！"</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//-------------------------------------------------------</span>
<span class="token comment">// 运行结果：</span>
<span class="token number">40</span>是偶数！
<span class="token number">31</span>是奇数！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取二进制位是-1-还是-0-两种解决方法" tabindex="-1"><a class="header-anchor" href="#获取二进制位是-1-还是-0-两种解决方法" aria-hidden="true">#</a> 获取二进制位是 1 还是 0（两种解决方法）：</h3>
<ul>
<li>方案 1：做与运算。例如：判断 x 的第五位二进制是 1 还是 0，可以与 1&lt;&lt;4 做与运算，然后将结果&gt;&gt;4 位，判断最终结果是 1 还是 0。如果最终结果是 0，则 x 的第五位为 0，否则第五位的二进制位 1。</li>
<li>方案 2：做与运算。例如：判断 x 的第五位二进制是 1 还是 0，可以将 x&gt;&gt;4 位，与 1 做与运算，判断最终结果是 1 还是 0。如果最终结果是 0，则 x 的第五位为 0，否则第五位的二进制位 1。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Case2_Judje0_1</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">judje0_1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">judje0_1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">judje0_1_2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">judje0_1_2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 判断整数x的第y位的二进制位是0还是1
	 * <span class="token keyword">@param</span> <span class="token parameter">x</span> 一个整数x
	 * <span class="token keyword">@param</span> <span class="token parameter">y</span> 判断x的二进制的第几位
	 */</span>
    <span class="token comment">//方案1代码</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">judje0_1</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">"的第"</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">"位的二进制位为："</span> <span class="token operator">+</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>y<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">>></span><span class="token punctuation">(</span>y<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"0"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
    <span class="token comment">//方案2代码</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">judje0_1_2</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">"的第"</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">"位的二进制位为："</span> <span class="token operator">+</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">>></span><span class="token punctuation">(</span>y<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"0"</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">10</span>的第<span class="token number">2</span>位的二进制位为：<span class="token number">1</span>
<span class="token number">10</span>的第<span class="token number">3</span>位的二进制位为：<span class="token number">0</span>
<span class="token number">10</span>的第<span class="token number">2</span>位的二进制位为：<span class="token number">1</span>
<span class="token number">10</span>的第<span class="token number">3</span>位的二进制位为：<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交换两个整数变量的值" tabindex="-1"><a class="header-anchor" href="#交换两个整数变量的值" aria-hidden="true">#</a> 交换两个整数变量的值：</h3>
<blockquote>
<p>利用异或的性质实现。对于任何数 x，都有 x^x =0, x^0 = x， 同自己求异或为 0，同 0 求异或为自己。 自反性：A<sup>B</sup>B = A^0=A, 连续喝同一个因子做异或运算，最终结果为自己。如交换 A、B 的值，有：</p>
<ol>
<li>A = A ^ B</li>
<li>B = A ^ B （B = A ^ B ^ B = A）</li>
<li>A = A ^ B (A = A ^ A ^ B = B)</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Case3_SwapValue</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"交换前：a="</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">" b="</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
		b <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
		a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"交换后：a="</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">" b="</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>交换前：a<span class="token operator">=</span><span class="token number">3</span> b<span class="token operator">=</span><span class="token number">6</span>
交换后：a<span class="token operator">=</span><span class="token number">6</span> b<span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不用判断语句-求整数的绝对值" tabindex="-1"><a class="header-anchor" href="#不用判断语句-求整数的绝对值" aria-hidden="true">#</a> 不用判断语句，求整数的绝对值：</h3>
<blockquote>
<p>利用位运算的移位，异或运算实现。</p>
<p>原理：将一个整型整数 x，带符号右移 31 位，则结果要么是 0，要么是 - 1。其中如果是 0，则 x 为正数，为 - 1 则 x 为负数。然后，将 x 与右移 31 位后的结果做异或运算，当与 x^0 是，结果还是 x。 当 x^-1 时，结果为 x 取反，即 x 的反码，然后 + 1，即为 x 的绝对值。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> a <span class="token operator">>></span> <span class="token number">31</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">~</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">abs2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> a <span class="token operator">>></span> <span class="token number">31</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">^</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<h4 id="_89-格雷编码" tabindex="-1"><a class="header-anchor" href="#_89-格雷编码" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/gray-code/" target="_blank" rel="noopener noreferrer">89. 格雷编码<ExternalLinkIcon/></a></h4>
<p><strong>n 位格雷码序列</strong> 是一个由 <code v-pre>2n</code> 个整数组成的序列，其中：</p>
<ul>
<li>每个整数都在范围 <code v-pre>[0, 2n - 1]</code> 内（含 <code v-pre>0</code> 和 <code v-pre>2n - 1</code>）</li>
<li>第一个整数是 <code v-pre>0</code></li>
<li>一个整数在序列中出现 <strong>不超过一次</strong></li>
<li>每对 <strong>相邻</strong> 整数的二进制表示 <strong>恰好一位不同</strong> ，且</li>
<li><strong>第一个</strong> 和 <strong>最后一个</strong> 整数的二进制表示 <strong>恰好一位不同</strong></li>
</ul>
<p>给你一个整数 <code v-pre>n</code> ，返回任一有效的 <strong>n 位格雷码序列</strong> 。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
解释：
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> 的二进制表示是 <span class="token punctuation">[</span><span class="token number">00</span><span class="token punctuation">,</span><span class="token number">01</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span> 。
<span class="token operator">-</span> <span class="token number">00</span> 和 <span class="token number">01</span> 有一位不同
<span class="token operator">-</span> <span class="token number">01</span> 和 <span class="token number">11</span> 有一位不同
<span class="token operator">-</span> <span class="token number">11</span> 和 <span class="token number">10</span> 有一位不同
<span class="token operator">-</span> <span class="token number">10</span> 和 <span class="token number">00</span> 有一位不同
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> 也是一个有效的格雷码序列，其二进制表示是 <span class="token punctuation">[</span><span class="token number">00</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">01</span><span class="token punctuation">]</span> 。
<span class="token operator">-</span> <span class="token number">00</span> 和 <span class="token number">10</span> 有一位不同
<span class="token operator">-</span> <span class="token number">10</span> 和 <span class="token number">11</span> 有一位不同
<span class="token operator">-</span> <span class="token number">11</span> 和 <span class="token number">01</span> 有一位不同
<span class="token operator">-</span> <span class="token number">01</span> 和 <span class="token number">00</span> 有一位不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		 关键是搞清楚格雷编码的生成过程, G(i) = i ^ (i/2);</p>
<p>​        如 n = 3:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>		<span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">000</span><span class="token punctuation">,</span> 
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">^</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">001</span> <span class="token operator">^</span> <span class="token number">000</span> <span class="token operator">=</span> <span class="token number">001</span>
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">^</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">010</span> <span class="token operator">^</span> <span class="token number">001</span> <span class="token operator">=</span> <span class="token number">011</span> 
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">^</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">011</span> <span class="token operator">^</span> <span class="token number">001</span> <span class="token operator">=</span> <span class="token number">010</span>
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">^</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">^</span> <span class="token number">010</span> <span class="token operator">=</span> <span class="token number">110</span>
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">^</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">101</span> <span class="token operator">^</span> <span class="token number">010</span> <span class="token operator">=</span> <span class="token number">111</span>
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">^</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">110</span> <span class="token operator">^</span> <span class="token number">011</span> <span class="token operator">=</span> <span class="token number">101</span>
        <span class="token constant">G</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">7</span> <span class="token operator">^</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">111</span> <span class="token operator">^</span> <span class="token number">011</span> <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> <span class="token function">grayCode</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token operator">&lt;&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
            ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i <span class="token operator">^</span> i<span class="token operator">>></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_67-二进制求和" tabindex="-1"><a class="header-anchor" href="#_67-二进制求和" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/add-binary/" target="_blank" rel="noopener noreferrer">67. 二进制求和<ExternalLinkIcon/></a></h4>
<p>给你两个二进制字符串，返回它们的和（用二进制表示）。</p>
<p>输入为 <strong>非空</strong> 字符串且只包含数字 <code v-pre>1</code> 和 <code v-pre>0</code>。</p>
<p><strong>示例 1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> a <span class="token operator">=</span> <span class="token string">"11"</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">"1"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token string">"100"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> a <span class="token operator">=</span> <span class="token string">"1010"</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">"1011"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token string">"10101"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		我们可以设计这样的算法来计算：</p>
<ul>
<li>把 <em>a</em> 和 <em>b</em> 转换成整型数字 <em>x</em> 和<em>y</em>，在接下来的过程中，<em>x</em> 保存结果，<em>y</em> 保存进位。</li>
<li>当进位不为 00时
<ul>
<li>计算当前 <em>x</em> 和 <em>y</em> 的无进位相加结果：<code v-pre>answer = x ^ y</code></li>
<li>计算当前 <em>x</em> 和 <em>y</em> 的进位：<code v-pre>carry = (x &amp; y) &lt;&lt; 1</code></li>
<li>完成本次循环，更新 <code v-pre>x = answer</code>，<code v-pre>y = carry</code></li>
</ul>
</li>
<li>返回 <em>x</em> 的二进制形式</li>
</ul>
<p>为什么这个方法是可行的呢？在第一轮计算中，<code v-pre>answer</code> 的最后一位是 <em>x</em> 和 <em>y</em> 相加之后的结果，<code v-pre>carry</code>的倒数第二位是 <em>x</em> 和 <em>y</em> 最后一位相加的进位。接着每一轮中，由于 <code v-pre>carry</code> 是由 <em>x</em> 和 <em>y</em> 按位与并且左移得到的，那么最后会补零，所以在下面计算的过程中后面的数位不受影响，而每一轮都可以得到一个低 i* 位的答案和它向低 <code v-pre>i+1</code> 位的进位，也就模拟了加法的过程。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addBinary</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> index1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> index2 <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">StringBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> a1 <span class="token punctuation">,</span> b1 <span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>index1 <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">||</span> index2 <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            a1 <span class="token operator">=</span> index1 <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">?</span> a<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index1<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">'0'</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            b1 <span class="token operator">=</span> index2 <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">?</span> b<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index2<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">'0'</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>a1 <span class="token operator">^</span> b1 <span class="token operator">^</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            temp <span class="token operator">=</span> <span class="token punctuation">(</span>a1 <span class="token operator">+</span> b1 <span class="token operator">+</span> temp<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_136-只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#_136-只出现一次的数字" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/single-number/" target="_blank" rel="noopener noreferrer">136. 只出现一次的数字<ExternalLinkIcon/></a></h4>
<p>给定一个<strong>非空</strong>整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p>
<p><strong>说明：</strong></p>
<p>你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？</p>
<p><strong>示例 1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		异或位运算，从0作为初始值开始，因为自身相异或是0，与0异或是自身，所以最后结果就是结果。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res <span class="token operator">^=</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_137-只出现一次的数字-ii" tabindex="-1"><a class="header-anchor" href="#_137-只出现一次的数字-ii" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/single-number-ii/" target="_blank" rel="noopener noreferrer">137. 只出现一次的数字 II<ExternalLinkIcon/></a></h4>
<p>给你一个整数数组 <code v-pre>nums</code> ，除某个元素仅出现 <strong>一次</strong> 外，其余每个元素都恰出现 **三次 。**请你找出并返回那个只出现了一次的元素。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
输出：<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">]</span>
输出：<span class="token number">99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		哈希表，计算<code v-pre>value</code>最小的<code v-pre>key</code>。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token operator">:</span>nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">.</span><span class="token function">comparingByValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		<code v-pre>DFA</code>，有限状态自动机</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ones <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> twos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            ones <span class="token operator">=</span> ones <span class="token operator">^</span> num <span class="token operator">&amp;</span> <span class="token operator">~</span>twos<span class="token punctuation">;</span>
            twos <span class="token operator">=</span> twos <span class="token operator">^</span> num <span class="token operator">&amp;</span> <span class="token operator">~</span>ones<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ones<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_260-只出现一次的数字-iii" tabindex="-1"><a class="header-anchor" href="#_260-只出现一次的数字-iii" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/single-number-iii/" target="_blank" rel="noopener noreferrer">260. 只出现一次的数字 III<ExternalLinkIcon/></a></h4>
<p>给定一个整数数组 <code v-pre>nums</code>，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 <strong>任意顺序</strong> 返回答案。</p>
<p>**进阶：**你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
解释：<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> 也是有效的答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		使用哈希表计算，返回次数最少的<code v-pre>key</code></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token operator">:</span>nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">.</span><span class="token function">comparingByValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		全部异或，最后结果即为要求的两个数的异或结果。然后查找是否有<code v-pre>1</code>的位，这一位即为两个结果不相同的位，然后对数组中所有数遍历，找出这一位为<code v-pre>1</code>的数，全部异或求出一个结果。对这一位是<code v-pre>0</code>的数全部异或求一个结果，得到另一个数。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res <span class="token operator">^=</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>i <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res <span class="token operator">>></span> i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                k <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">>></span> k<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                ans<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">^=</span> x<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                ans<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^=</span> x<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_338-比特位计数" tabindex="-1"><a class="header-anchor" href="#_338-比特位计数" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/counting-bits/" target="_blank" rel="noopener noreferrer">338. 比特位计数<ExternalLinkIcon/></a></h4>
<p>给你一个整数 <code v-pre>n</code> ，对于 <code v-pre>0 &lt;= i &lt;= n</code> 中的每个 <code v-pre>i</code> ，计算其二进制表示中 <strong><code v-pre>1</code> 的个数</strong> ，返回一个长度为 <code v-pre>n + 1</code> 的数组 <code v-pre>ans</code> 作为答案。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
解释：
<span class="token number">0</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">0</span>
<span class="token number">1</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">1</span>
<span class="token number">2</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">5</span>
输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
解释：
<span class="token number">0</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">0</span>
<span class="token number">1</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">1</span>
<span class="token number">2</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">10</span>
<span class="token number">3</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">11</span>
<span class="token number">4</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">100</span>
<span class="token number">5</span> <span class="token operator">--</span><span class="token operator">></span> <span class="token number">101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		偶数的位数等于其一半的数的位数，奇数的则等于其一半数的位数加一。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">countBits</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_342-4-的幂" tabindex="-1"><a class="header-anchor" href="#_342-4-的幂" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/power-of-four/" target="_blank" rel="noopener noreferrer">342. 4 的幂<ExternalLinkIcon/></a></h4>
<p>给定一个整数，写一个函数来判断它是否是 <code v-pre>4</code> 的幂次方。如果是，返回 <code v-pre>true</code> ；否则，返回 <code v-pre>false</code> 。</p>
<p>整数 <code v-pre>n</code> 是 <code v-pre>4</code> 的幂次方需满足：存在整数 <code v-pre>x</code> 使得 <code v-pre>n == 4x</code></p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">16</span>
输出：<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">5</span>
输出：<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		如果是<code v-pre>4</code>的幂，则转为二进制为奇数位，且第一位为<code v-pre>1</code>，其余为<code v-pre>0</code>。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfFour</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">'1'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		先判断是否是<code v-pre>2</code>的幂，可以用<code v-pre>lowbit</code> ，也可以用快速去最右<code v-pre>1</code>。然后判断奇数位是否有<code v-pre>1</code>，可以使用<code v-pre>0x5</code>即<code v-pre>0b0101</code>来判断。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfFour</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    	<span class="token punctuation">}</span>
    	<span class="token keyword">return</span> <span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token number">0x55555555</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_405-数字转换为十六进制数" tabindex="-1"><a class="header-anchor" href="#_405-数字转换为十六进制数" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/" target="_blank" rel="noopener noreferrer">405. 数字转换为十六进制数<ExternalLinkIcon/></a></h4>
<p>给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 <a href="https://baike.baidu.com/item/%E8%A1%A5%E7%A0%81/6854613?fr=aladdin" target="_blank" rel="noopener noreferrer">补码运算<ExternalLinkIcon/></a> 方法。</p>
<p><strong>注意:</strong></p>
<ol>
<li>十六进制中所有字母 (a-f) 都必须是小写。</li>
<li>十六进制字符串中不能包含多余的前导零。如果要转化的数为 0，那么以单个字符'0' 来表示；对于其他情况，十六进制字符串中的第一个字符将不会是 0 字符。</li>
<li>给定的数确保在 32 位有符号整数范围内。</li>
<li>不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。</li>
</ol>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span>
<span class="token number">26</span>

<span class="token literal-property property">输出</span><span class="token operator">:</span>
<span class="token string">"1a"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span>
<span class="token operator">-</span><span class="token number">1</span>

<span class="token literal-property property">输出</span><span class="token operator">:</span>
<span class="token string">"ffffffff"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		使用<code v-pre>0xf</code>获取数字的低<code v-pre>4</code>位，然后取出在对应数组中表示的十六进制数，然后拼接，然后将数字无符号右移<code v-pre>4</code>位，最后数字会变为<code v-pre>0</code>。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toHex</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">"0"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> hex <span class="token operator">=</span> <span class="token string">"0123456789abcdef"</span> <span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res <span class="token operator">=</span> hex<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
            num <span class="token operator">>>>=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_190-颠倒二进制位" tabindex="-1"><a class="header-anchor" href="#_190-颠倒二进制位" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/reverse-bits/" target="_blank" rel="noopener noreferrer">190. 颠倒二进制位<ExternalLinkIcon/></a></h4>
<p>颠倒给定的 32 位无符号整数的二进制位。</p>
<p><strong>提示：</strong></p>
<ul>
<li>请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。</li>
<li>在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。</li>
</ul>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">00000010100101000001111010011100</span>
<span class="token function">输出：964176192</span> <span class="token punctuation">(</span><span class="token number">00111001011110000010100101000000</span><span class="token punctuation">)</span>
解释：输入的二进制串 <span class="token number">00000010100101000001111010011100</span> 表示无符号整数 <span class="token number">43261596</span>，
     因此返回 <span class="token number">964176192</span>，其二进制表示形式为 <span class="token number">00111001011110000010100101000000</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">11111111111111111111111111111101</span>
<span class="token function">输出：3221225471</span> <span class="token punctuation">(</span><span class="token number">10111111111111111111111111111111</span><span class="token punctuation">)</span>
解释：输入的二进制串 <span class="token number">11111111111111111111111111111101</span> 表示无符号整数 <span class="token number">4294967293</span>，
     因此返回 <span class="token number">3221225471</span> 其二进制表示形式为 <span class="token number">10111111111111111111111111111111</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		每位遍历，如果这一位是<code v-pre>1</code>则将结果中对应位(<code v-pre>31 - i</code>这一位)置为<code v-pre>1</code>。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">// you need treat n as an unsigned value</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">reverseBits</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">>></span> i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">|=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">31</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_191-位-1-的个数" tabindex="-1"><a class="header-anchor" href="#_191-位-1-的个数" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/number-of-1-bits/" target="_blank" rel="noopener noreferrer">191. 位 1 的个数<ExternalLinkIcon/></a></h4>
<p>编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为<a href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E9%87%8D%E9%87%8F" target="_blank" rel="noopener noreferrer">汉明重量<ExternalLinkIcon/></a>）。</p>
<p><strong>提示：</strong></p>
<ul>
<li>请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。</li>
<li>在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 3 中，表示有符号整数 -3。</li>
</ul>
<p><strong>示例 1：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>输入：<span class="token number">00000000000000000000000000001011</span>
输出：<span class="token number">3</span>
解释：输入的二进制串 <span class="token number">00000000000000000000000000001011</span> 中，共有三位为 <span class="token char">'1'</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：<span class="token number">00000000000000000000000010000000</span>
输出：<span class="token number">1</span>
解释：输入的二进制串 <span class="token number">00000000000000000000000010000000</span> 中，共有一位为 <span class="token string">'1'</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：<span class="token number">11111111111111111111111111111101</span>
输出：<span class="token number">31</span>
解释：输入的二进制串 <span class="token number">11111111111111111111111111111101</span> 中，共有 <span class="token number">31</span> 位为 <span class="token string">'1'</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		利用<code v-pre>x &amp; x - 1</code>会消除<code v-pre>x</code>最右边<code v-pre>1</code>的性质，进行记数。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            n <span class="token operator">&amp;=</span>  n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_476-数字的补数" tabindex="-1"><a class="header-anchor" href="#_476-数字的补数" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/number-complement/" target="_blank" rel="noopener noreferrer">476. 数字的补数<ExternalLinkIcon/></a></h4>
<p>对整数的二进制表示取反（<code v-pre>0</code> 变 <code v-pre>1</code> ，<code v-pre>1</code> 变 <code v-pre>0</code>）后，再转换为十进制表示，可以得到这个整数的补数。</p>
<ul>
<li>例如，整数 <code v-pre>5</code> 的二进制表示是 <code v-pre>&quot;101&quot;</code> ，取反后得到 <code v-pre>&quot;010&quot;</code> ，再转回十进制表示得到补数 <code v-pre>2</code> 。</li>
</ul>
<p>给你一个整数 <code v-pre>num</code> ，输出它的补数。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：num <span class="token operator">=</span> <span class="token number">5</span>
输出：<span class="token number">2</span>
解释：<span class="token number">5</span> 的二进制表示为 <span class="token number">101</span>（没有前导零位），其补数为 <span class="token number">010</span>。所以你需要输出 <span class="token number">2</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：num <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token number">0</span>
解释：<span class="token number">1</span> 的二进制表示为 <span class="token number">1</span>（没有前导零位），其补数为 <span class="token number">0</span>。所以你需要输出 <span class="token number">0</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		每位取反，再转成数字。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findComplement</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> c<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'0'</span><span class="token punctuation">)</span>
                c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'1'</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'0'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以下做法在输入为0时都会出现问题，需要特殊处理。</strong></p>
<blockquote>
<p>思路：</p>
<p>​		模拟，先找到最高位<code v-pre>1</code>的位置，然后对有效位取反。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findComplement</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>i <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">>></span> i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                index <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       	<span class="token comment">// 默认每位都是0，只有原来是0的才需要取反，所以循环只到index，不到index + 1</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">>></span> i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              	<span class="token comment">// 当前位赋1 </span>
                res <span class="token operator">|=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		参考<code v-pre>jdk8</code>中<code v-pre>HashMap</code>求最近的<code v-pre>2</code>的次幂的算法，得到最高为<code v-pre>1</code>的位后全为<code v-pre>1</code>的数，然后对两个数求异或，即原来<code v-pre>1</code>的位变<code v-pre>0</code>，原来<code v-pre>0</code>的位变<code v-pre>1</code>。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findComplement</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> n <span class="token operator">=</span> num<span class="token punctuation">;</span>
       n <span class="token operator">=</span> n<span class="token operator">|=</span> n <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">;</span>
       n <span class="token operator">=</span> n<span class="token operator">|=</span> n <span class="token operator">>></span> <span class="token number">2</span><span class="token punctuation">;</span>
       n <span class="token operator">=</span> n<span class="token operator">|=</span> n <span class="token operator">>></span> <span class="token number">4</span><span class="token punctuation">;</span>
       n <span class="token operator">=</span> n<span class="token operator">|=</span> n <span class="token operator">>></span> <span class="token number">8</span><span class="token punctuation">;</span>
       n <span class="token operator">=</span> n<span class="token operator">|=</span> n <span class="token operator">>></span> <span class="token number">16</span><span class="token punctuation">;</span>
       <span class="token keyword">return</span> n <span class="token operator">^</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		<code v-pre>jdk11</code>中<code v-pre>HashMap</code>的实现，二分查找找到前导<code v-pre>0</code>，然后构建最高位为<code v-pre>1</code>的位后全为<code v-pre>1</code>的数。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findComplement</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">>>></span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">numberOfLeadingZeros</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> n <span class="token operator">^</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		如果 <code v-pre>num</code> 的二进制表示中最高位 <code v-pre>1</code> 的位置为 <code v-pre>s</code> 的话，那么实际上我们只需要对 <code v-pre>num</code> 的前 <code v-pre>s - 1</code> 位进行取反即是答案（第 <code v-pre>s</code> 位的取反结果始终为 <code v-pre>0</code>）。</p>
<p>​		因此我们可以先使用 <code v-pre>lowbit</code> 操作来得到 <code v-pre>num</code> 二进制表示中最高位 <code v-pre>1</code> 的位置为 <code v-pre>1</code>，其余位为 <code v-pre>0</code>时所代表的数字 <code v-pre>x</code>。然后 <code v-pre>x - 1</code> 即是二进制表示中前 <code v-pre>s - 1</code>位均为 <code v-pre>1</code>，其余位为 <code v-pre>0</code> 的数字，将其与 <code v-pre>num</code> 的<strong>取反数</strong>执行「按位与」操作，即可达到「仅对 <code v-pre>num</code> 的前 <code v-pre>s − 1</code> 位进行取反」的效果。</p>
<p>​		因为取反数前面位均为<code v-pre>1</code>，做按位与后全置为<code v-pre>0</code>，而最高<code v-pre>1</code>位后的数先取反，再与<code v-pre>1</code>按位与，结果不变。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findComplement</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> num<span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">-=</span> i <span class="token operator">&amp;</span> <span class="token operator">-</span>i<span class="token punctuation">)</span> x <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token operator">~</span>num <span class="token operator">&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findComplement</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> num<span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">-=</span> <span class="token function">lowbit</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> x <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token operator">~</span>num <span class="token operator">&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      
      	lowbit <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> i <span class="token operator">&amp;</span> <span class="token operator">-</span>i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_231-2-的幂" tabindex="-1"><a class="header-anchor" href="#_231-2-的幂" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/power-of-two/" target="_blank" rel="noopener noreferrer">231. 2 的幂<ExternalLinkIcon/></a></h4>
<p>给你一个整数 <code v-pre>n</code>，请你判断该整数是否是 2 的幂次方。如果是，返回 <code v-pre>true</code> ；否则，返回 <code v-pre>false</code> 。</p>
<p>如果存在一个整数 <code v-pre>x</code> 使得 <code v-pre>n == 2x</code> ，则认为 <code v-pre>n</code> 是 2 的幂次方。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token boolean">true</span>
解释：<span class="token number">2</span> <span class="token operator">^</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">5</span>
输出：<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		2的幂转为二进制后，第一位为<code v-pre>1</code>，其他位为<code v-pre>0</code>。特殊情况：<code v-pre>Integer.MIN_VALUE</code>符号位为<code v-pre>1</code>，其他位为<code v-pre>0</code>。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">2147483648</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">'0'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		找到<code v-pre>int</code>中2的最大次幂，即<code v-pre>1 &lt;&lt; 30</code>, 如果它对<code v-pre>n</code>取模是<code v-pre>0</code>则满足条件。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">%</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		如果是<code v-pre>2</code>的次幂，则最高位为<code v-pre>1</code>，其余为<code v-pre>0</code>，在补码下可以得到<code v-pre>n &amp; -n</code>的结果仍为<code v-pre>n</code>，如<code v-pre>8</code>为<code v-pre>00001000</code>，而<code v-pre>-8</code>为<code v-pre>11111000</code>，<code v-pre>&amp;</code>的结果仍为<code v-pre>8</code>。即<code v-pre>lowbit</code>。<code v-pre>2</code>的幂次方在二进制下，只有<code v-pre>1</code>位是<code v-pre>1</code>，其余全是<code v-pre>0</code>。例如:<code v-pre>8---00001000</code>。负数的在计算机中二进制表示为补码(原码-&gt;正常二进制表示，原码按位取反<code v-pre>(0-1,1-0)</code>，最后再<code v-pre>+1</code>。然后两者进行与操作，得到的肯定是原码中最后一个二进制的<code v-pre>1</code>。例如<code v-pre>&amp;(-8)-&gt;00001000 &amp; 11111000</code> 得 <code v-pre>00001000</code>，即8。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token operator">-</span>n<span class="token punctuation">)</span> <span class="token operator">==</span> n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_326-3-的幂" tabindex="-1"><a class="header-anchor" href="#_326-3-的幂" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/power-of-three/" target="_blank" rel="noopener noreferrer">326. 3 的幂<ExternalLinkIcon/></a></h4>
<p>给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 <code v-pre>true</code> ；否则，返回 <code v-pre>false</code> 。</p>
<p>整数 <code v-pre>n</code> 是 3 的幂次方需满足：存在整数 <code v-pre>x</code> 使得 <code v-pre>n == 3x</code></p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">27</span>
输出：<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">0</span>
输出：<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">9</span>
输出：<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">45</span>
输出：<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：使用Set保存数字，然后计算</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> cur <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">&lt;=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">*=</span> <span class="token number">3</span><span class="token punctuation">;</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfThree</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_318-最大单词长度乘积" tabindex="-1"><a class="header-anchor" href="#_318-最大单词长度乘积" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/maximum-product-of-word-lengths/" target="_blank" rel="noopener noreferrer">318. 最大单词长度乘积<ExternalLinkIcon/></a></h4>
<p>给你一个字符串数组 <code v-pre>words</code> ，找出并返回 <code v-pre>length(words[i]) * length(words[j])</code> 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 <code v-pre>0</code> 。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"abcw"</span><span class="token punctuation">,</span><span class="token string">"baz"</span><span class="token punctuation">,</span><span class="token string">"foo"</span><span class="token punctuation">,</span><span class="token string">"bar"</span><span class="token punctuation">,</span><span class="token string">"xtfn"</span><span class="token punctuation">,</span><span class="token string">"abcdef"</span><span class="token punctuation">]</span>
输出：<span class="token number">16</span> 
解释：这两个单词为 <span class="token string">"abcw"</span><span class="token punctuation">,</span> <span class="token string">"xtfn"</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span><span class="token string">"ab"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token string">"d"</span><span class="token punctuation">,</span><span class="token string">"cd"</span><span class="token punctuation">,</span><span class="token string">"bcd"</span><span class="token punctuation">,</span><span class="token string">"abcd"</span><span class="token punctuation">]</span>
输出：<span class="token number">4</span> 
解释：这两个单词为 <span class="token string">"ab"</span><span class="token punctuation">,</span> <span class="token string">"cd"</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span><span class="token string">"aa"</span><span class="token punctuation">,</span><span class="token string">"aaa"</span><span class="token punctuation">,</span><span class="token string">"aaaa"</span><span class="token punctuation">]</span>
输出：<span class="token number">0</span> 
解释：不存在这样的两个单词。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		因为全是小写字母，使用<code v-pre>32</code>位的<code v-pre>int</code>可以放下每个字母是否出现过，然后计算两个数<code v-pre>&amp;</code>的值，如果为<code v-pre>0</code>则所有字符均不同，然后更新最大值。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxProduct</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                hash<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">|=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>c <span class="token operator">-</span> <span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>hash<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res <span class="token punctuation">,</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> words<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_421-数组中两个数的最大异或值" tabindex="-1"><a class="header-anchor" href="#_421-数组中两个数的最大异或值" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/" target="_blank" rel="noopener noreferrer">421. 数组中两个数的最大异或值<ExternalLinkIcon/></a></h4>
<p>给你一个整数数组 <code v-pre>nums</code> ，返回 <code v-pre>nums[i] XOR nums[j]</code> 的最大运算结果，其中 <code v-pre>0 ≤ i ≤ j &lt; n</code> 。</p>
<p>**进阶：**你可以在 <code v-pre>O(n)</code> 的时间解决这个问题吗？</p>
<p><strong>示例 1：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
输出：<span class="token number">28</span>
解释：最大运算结果是 <span class="token number">5</span> <span class="token class-name">XOR</span> <span class="token number">25</span> <span class="token operator">=</span> <span class="token number">28.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
输出：<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
输出：<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
输出：<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 5：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token punctuation">,</span><span class="token number">83</span><span class="token punctuation">,</span><span class="token number">49</span><span class="token punctuation">,</span><span class="token number">91</span><span class="token punctuation">,</span><span class="token number">36</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">92</span><span class="token punctuation">,</span><span class="token number">51</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">]</span>
输出：<span class="token number">127</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h4 id="_461-汉明距离" tabindex="-1"><a class="header-anchor" href="#_461-汉明距离" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/hamming-distance/" target="_blank" rel="noopener noreferrer">461. 汉明距离<ExternalLinkIcon/></a></h4>
<p>两个整数之间的 <a href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB" target="_blank" rel="noopener noreferrer">汉明距离<ExternalLinkIcon/></a> 指的是这两个数字对应二进制位不同的位置的数目。</p>
<p>给你两个整数 <code v-pre>x</code> 和 <code v-pre>y</code>，计算并返回它们之间的汉明距离。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">4</span>
输出：<span class="token number">2</span>
解释：
<span class="token number">1</span>   <span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">4</span>   <span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">)</span>
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		先计算<code v-pre>x</code>和<code v-pre>y</code>的异或值，然后统计其中<code v-pre>1</code>的位数。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hammingDistance</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> x <span class="token operator">^</span> y<span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>sum <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum <span class="token operator">&amp;=</span> sum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_477-汉明距离总和" tabindex="-1"><a class="header-anchor" href="#_477-汉明距离总和" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/total-hamming-distance/" target="_blank" rel="noopener noreferrer">477. 汉明距离总和<ExternalLinkIcon/></a></h4>
<p>两个整数的 <a href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB/475174?fr=aladdin" target="_blank" rel="noopener noreferrer">汉明距离<ExternalLinkIcon/></a> 指的是这两个数字的二进制数对应位不同的数量。</p>
<p>给你一个整数数组 <code v-pre>nums</code>，请你计算并返回 <code v-pre>nums</code> 中任意两个数之间 <strong>汉明距离的总和</strong> 。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
输出：<span class="token number">6</span>
解释：在二进制表示中，<span class="token number">4</span> 表示为 <span class="token number">0100</span> ，<span class="token number">14</span> 表示为 <span class="token number">1110</span> ，<span class="token number">2</span>表示为 <span class="token number">0010</span> 。（这样表示是为了体现后四位之间关系）
所以答案为：
<span class="token function">HammingDistance</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">HammingDistance</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">HammingDistance</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
输出：<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		分别统计每一位上，<code v-pre>0</code>和<code v-pre>1</code>的个数，这一位的总和即为这两个数相乘(即排列组合)。<code v-pre>int</code>为<code v-pre>32</code>位，将每一位结果累加。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">totalHammingDistance</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
           <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">>></span> i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    x<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    y<span class="token operator">++</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
           res <span class="token operator">+=</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_371-两整数之和" tabindex="-1"><a class="header-anchor" href="#_371-两整数之和" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/sum-of-two-integers/" target="_blank" rel="noopener noreferrer">371. 两整数之和<ExternalLinkIcon/></a></h4>
<p>给你两个整数 <code v-pre>a</code> 和 <code v-pre>b</code> ，<strong>不使用</strong> 运算符 <code v-pre>+</code> 和 <code v-pre>-</code> ，计算并返回两整数之和。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">3</span>
输出：<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		<code v-pre>a ^ b</code>是无进位的相加； <code v-pre>a &amp; b</code>得到每一位的进位；让无进位相加的结果与进位不断的异或， 直到进位为<code v-pre>0</code>；</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> b<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> a<span class="token punctuation">;</span>
            <span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
            <span class="token keyword">int</span> carry <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">getSum</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> carry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_526-优美的排列" tabindex="-1"><a class="header-anchor" href="#_526-优美的排列" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/beautiful-arrangement/" target="_blank" rel="noopener noreferrer">526. 优美的排列<ExternalLinkIcon/></a></h4>
<p>假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 <code v-pre>perm</code>（<strong>下标从 1 开始</strong>），只要满足下述条件 <strong>之一</strong> ，该数组就是一个 <strong>优美的排列</strong> ：</p>
<ul>
<li><code v-pre>perm[i]</code> 能够被 <code v-pre>i</code> 整除</li>
<li><code v-pre>i</code> 能够被 <code v-pre>perm[i]</code> 整除</li>
</ul>
<p>给你一个整数 <code v-pre>n</code> ，返回可以构造的 <strong>优美排列</strong> 的 <strong>数量</strong> 。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token number">2</span>
解释：
第 <span class="token number">1</span> 个优美的排列是 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>：
    <span class="token operator">-</span> perm<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> 能被 i <span class="token operator">=</span> <span class="token number">1</span> 整除
    <span class="token operator">-</span> perm<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> 能被 i <span class="token operator">=</span> <span class="token number">2</span> 整除
第 <span class="token number">2</span> 个优美的排列是 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span>
    <span class="token operator">-</span> perm<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> 能被 i <span class="token operator">=</span> <span class="token number">1</span> 整除
    <span class="token operator">-</span> i <span class="token operator">=</span> <span class="token number">2</span> 能被 perm<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> 整除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：n <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><hr>
<h4 id="_1711-大餐计数" tabindex="-1"><a class="header-anchor" href="#_1711-大餐计数" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/count-good-meals/" target="_blank" rel="noopener noreferrer">1711. 大餐计数<ExternalLinkIcon/></a></h4>
<p><strong>大餐</strong> 是指 <strong>恰好包含两道不同餐品</strong> 的一餐，其美味程度之和等于 2 的幂。</p>
<p>你可以搭配 <strong>任意</strong> 两道餐品做一顿大餐。</p>
<p>给你一个整数数组 <code v-pre>deliciousness</code> ，其中 <code v-pre>deliciousness[i]</code> 是第 <code v-pre>i</code> 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 <strong>大餐</strong> 的数量。结果需要对 <code v-pre>109 + 7</code> 取余。</p>
<p>注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：deliciousness <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
输出：<span class="token number">4</span>
<span class="token function">解释：大餐的美味程度组合为</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">、</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token function">、</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">和</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span> 。
它们各自的美味程度之和分别为 <span class="token number">4</span> 、<span class="token number">8</span> 、<span class="token number">8</span> 和 <span class="token number">16</span> ，都是 <span class="token number">2</span> 的幂。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：deliciousness <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
输出：<span class="token number">15</span>
解释：大餐的美味程度组合为 <span class="token number">3</span> <span class="token function">种</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> ，<span class="token number">9</span> <span class="token function">种</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> ，和 <span class="token number">3</span> <span class="token function">种</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><hr>
<h4 id="_1178-猜字谜" tabindex="-1"><a class="header-anchor" href="#_1178-猜字谜" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/" target="_blank" rel="noopener noreferrer">1178. 猜字谜<ExternalLinkIcon/></a></h4>
<p>外国友人仿照中国字谜设计了一个英文版猜字谜小游戏，请你来猜猜看吧。</p>
<p>字谜的迷面 <code v-pre>puzzle</code> 按字符串形式给出，如果一个单词 <code v-pre>word</code> 符合下面两个条件，那么它就可以算作谜底：</p>
<ul>
<li>单词 <code v-pre>word</code> 中包含谜面 <code v-pre>puzzle</code> 的第一个字母。</li>
<li>单词 <code v-pre>word</code> 中的每一个字母都可以在谜面 <code v-pre>puzzle</code> 中找到。</li>
</ul>
<p>例如，如果字谜的谜面是 &quot;abcdefg&quot;，那么可以作为谜底的单词有 &quot;faced&quot;, &quot;cabbage&quot;, 和 &quot;baggage&quot;；而 &quot;beefed&quot;（不含字母 &quot;a&quot;）以及 &quot;based&quot;（其中的 &quot;s&quot; 没有出现在谜面中）都不能作为谜底。</p>
<p>返回一个答案数组 <code v-pre>answer</code>，数组中的每个元素 <code v-pre>answer[i]</code> 是在给出的单词列表 <code v-pre>words</code> 中可以作为字谜迷面 <code v-pre>puzzles[i]</code> 所对应的谜底的单词数目。</p>
<p><strong>示例：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：
words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"aaaa"</span><span class="token punctuation">,</span><span class="token string">"asas"</span><span class="token punctuation">,</span><span class="token string">"able"</span><span class="token punctuation">,</span><span class="token string">"ability"</span><span class="token punctuation">,</span><span class="token string">"actt"</span><span class="token punctuation">,</span><span class="token string">"actor"</span><span class="token punctuation">,</span><span class="token string">"access"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
puzzles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"aboveyz"</span><span class="token punctuation">,</span><span class="token string">"abrodyz"</span><span class="token punctuation">,</span><span class="token string">"abslute"</span><span class="token punctuation">,</span><span class="token string">"absoryz"</span><span class="token punctuation">,</span><span class="token string">"actresz"</span><span class="token punctuation">,</span><span class="token string">"gaswxyz"</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
解释：
<span class="token number">1</span> 个单词可以作为 <span class="token string">"aboveyz"</span> <span class="token literal-property property">的谜底</span> <span class="token operator">:</span> <span class="token string">"aaaa"</span> 
<span class="token number">1</span> 个单词可以作为 <span class="token string">"abrodyz"</span> <span class="token literal-property property">的谜底</span> <span class="token operator">:</span> <span class="token string">"aaaa"</span>
<span class="token number">3</span> 个单词可以作为 <span class="token string">"abslute"</span> <span class="token literal-property property">的谜底</span> <span class="token operator">:</span> <span class="token string">"aaaa"</span><span class="token punctuation">,</span> <span class="token string">"asas"</span><span class="token punctuation">,</span> <span class="token string">"able"</span>
<span class="token number">2</span> 个单词可以作为 <span class="token string">"absoryz"</span> <span class="token literal-property property">的谜底</span> <span class="token operator">:</span> <span class="token string">"aaaa"</span><span class="token punctuation">,</span> <span class="token string">"asas"</span>
<span class="token number">4</span> 个单词可以作为 <span class="token string">"actresz"</span> <span class="token literal-property property">的谜底</span> <span class="token operator">:</span> <span class="token string">"aaaa"</span><span class="token punctuation">,</span> <span class="token string">"asas"</span><span class="token punctuation">,</span> <span class="token string">"actt"</span><span class="token punctuation">,</span> <span class="token string">"access"</span>
没有单词可以作为 <span class="token string">"gaswxyz"</span> 的谜底，因为列表中的单词都不含字母 <span class="token string">'g'</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		使用一个<code v-pre>int</code>可以保存一个字符串中字符出现与否，所以统计单词，因为编码过程可能会出现重复数字，如<code v-pre>abc -&gt; 111</code> , <code v-pre>aaabbc -&gt; 111</code>，所以使用哈希表存储数字出现的次数，然后判断<code v-pre>key</code>是否满足条件，满足直接加上<code v-pre>value</code>可以有效降低时间复杂度。</p>
<p>​		判断逻辑：对于每个<code v-pre>puzzle</code>，我们找到它所有符合条件的子集，然后在上一步求得的<code v-pre>map</code>中找对应子集出现的次数，累加可得该<code v-pre>puzzle</code>对应的单词总数。</p>
<p>​		比如<code v-pre>puzzle</code>为<code v-pre>eca</code>，它对应的所有子集为<code v-pre>e, ec, ea, eca</code>，我们先用<code v-pre>getBitMask()</code>对其进行二进制压缩，然后在<code v-pre>map</code>中寻找<code v-pre>key</code>为这几个子集的元素，并累加可得结果。</p>
<p>​		那么如何找到一个字符串所有的子集？这里引入一个寻找二进制数子集的模板</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>	<span class="token keyword">int</span> subset <span class="token operator">=</span> mask<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>subset <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		subset <span class="token operator">=</span> <span class="token punctuation">(</span>subset <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> mask<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		这个模板不是很容易理解，解释一下：</p>
<p>​		首先将<code v-pre>subset</code>设为<code v-pre>mask</code>的二进制码，然后不断对<code v-pre>subset</code>减一，再与<code v-pre>mask</code>进行与运算，这样可以求得<code v-pre>mask</code>的所有子集。</p>
<p>​		其他题解中还有一个更简单的模板，不用重复计算后面字符为空的情况：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>		<span class="token keyword">int</span> subset <span class="token operator">=</span> mask<span class="token punctuation">;</span>
		<span class="token keyword">do</span> <span class="token punctuation">{</span>
	    subset <span class="token operator">=</span> <span class="token punctuation">(</span>subset <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> mask<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>subset <span class="token operator">!=</span> mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		这个结束条件为什么是<code v-pre>subset != mask</code>呢</p>
<p>​		当<code v-pre>subset</code>等于<code v-pre>0</code>时，再减=<code v-pre>1</code>，它的二进制值会变成<code v-pre>1111111....1111</code>，再与<code v-pre>mask</code>进行与运算就等于<code v-pre>mask</code>，此时循环结束。这样做的好处是直接算进了子集为空的情景。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> <span class="token function">findNumOfValidWords</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> words<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> puzzles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 首先计算每个word出现次数，使用二进制状态压缩每个word</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> word <span class="token operator">:</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mask <span class="token operator">=</span> <span class="token function">getBitMask</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 如果包含的字符数量大于7，那么一定无法作为谜底，无需加入映射表</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">bitCount</span><span class="token punctuation">(</span>mask<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>mask<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>mask<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> puzzle <span class="token operator">:</span> puzzles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token comment">// 第一个字符必须存在，先获取第一个字符的二进制码</span>
            <span class="token keyword">int</span> first <span class="token operator">=</span> <span class="token function">getBitMask</span><span class="token punctuation">(</span>puzzle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取后面字符串的二进制码</span>
            <span class="token keyword">int</span> mask <span class="token operator">=</span> <span class="token function">getBitMask</span><span class="token punctuation">(</span>puzzle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> subset <span class="token operator">=</span> mask<span class="token punctuation">;</span>
            <span class="token comment">// 枚举后面字符串子集</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>subset <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              	<span class="token comment">// 拼接包含首字母的迷面字集</span>
                <span class="token keyword">int</span> key <span class="token operator">=</span> first <span class="token operator">|</span> subset<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cnt <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                subset <span class="token operator">=</span> <span class="token punctuation">(</span>subset <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> mask<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 后面字符串为空的情况</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cnt <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getBitMask</span><span class="token punctuation">(</span><span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mask <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> ch <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mask <span class="token operator">|=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>ch <span class="token operator">-</span> <span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2275-按位与结果大于零的最长组合" tabindex="-1"><a class="header-anchor" href="#_2275-按位与结果大于零的最长组合" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero/" target="_blank" rel="noopener noreferrer">2275. 按位与结果大于零的最长组合<ExternalLinkIcon/></a></h4>
<p>对数组 <code v-pre>nums</code> 执行 <strong>按位与</strong> 相当于对数组 <code v-pre>nums</code> 中的所有整数执行 <strong>按位与</strong> 。</p>
<ul>
<li>例如，对 <code v-pre>nums = [1, 5, 3]</code> 来说，按位与等于 <code v-pre>1 &amp; 5 &amp; 3 = 1</code> 。</li>
<li>同样，对 <code v-pre>nums = [7]</code> 而言，按位与等于 <code v-pre>7</code> 。</li>
</ul>
<p>给你一个正整数数组 <code v-pre>candidates</code> 。计算 <code v-pre>candidates</code> 中的数字每种组合下 <strong>按位与</strong> 的结果。 <code v-pre>candidates</code> 中的每个数字在每种组合中只能使用 <strong>一次</strong> 。</p>
<p>返回按位与结果大于 <code v-pre>0</code> 的 <strong>最长</strong> 组合的长度。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：candidates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token number">71</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">]</span>
输出：<span class="token number">4</span>
解释：组合 <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token number">62</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">]</span> 的按位与结果是 <span class="token number">16</span> <span class="token operator">&amp;</span> <span class="token number">17</span> <span class="token operator">&amp;</span> <span class="token number">62</span> <span class="token operator">&amp;</span> <span class="token number">24</span> <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">></span> <span class="token number">0</span> 。
组合长度是 <span class="token number">4</span> 。
可以证明不存在按位与结果大于 <span class="token number">0</span> 且长度大于 <span class="token number">4</span> 的组合。
注意，符合长度最大的组合可能不止一种。
例如，组合 <span class="token punctuation">[</span><span class="token number">62</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">]</span> 的按位与结果是 <span class="token number">62</span> <span class="token operator">&amp;</span> <span class="token number">12</span> <span class="token operator">&amp;</span> <span class="token number">24</span> <span class="token operator">&amp;</span> <span class="token number">14</span> <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">></span> <span class="token number">0</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：candidates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
输出：<span class="token number">2</span>
解释：最长组合是 <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span> ，按位与结果 <span class="token number">8</span> <span class="token operator">&amp;</span> <span class="token number">8</span> <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">></span> <span class="token number">0</span> 。
组合长度是 <span class="token number">2</span> ，所以返回 <span class="token number">2</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		按位与，某一位为都为1<code v-pre>1</code>，结果才会是<code v-pre>1</code>，所以要求的结果即统计二进制所有位中哪一位的<code v-pre>1</code>出现的次数最多。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">largestCombination</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> candidates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 题目最大数字为10^7，转为二进制数是24位</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">24</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> candidate <span class="token operator">:</span> candidates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 这一位有多少个数是1</span>
                max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> count <span class="token operator">+=</span> <span class="token punctuation">(</span>candidate <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2411-按位或最大的最小子数组长度" tabindex="-1"><a class="header-anchor" href="#_2411-按位或最大的最小子数组长度" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/smallest-subarrays-with-maximum-bitwise-or/" target="_blank" rel="noopener noreferrer">2411. 按位或最大的最小子数组长度<ExternalLinkIcon/></a></h4>
<p>给你一个长度为 <code v-pre>n</code> 下标从 <strong>0</strong> 开始的数组 <code v-pre>nums</code> ，数组中所有数字均为非负整数。对于 <code v-pre>0</code> 到 <code v-pre>n - 1</code> 之间的每一个下标 <code v-pre>i</code> ，你需要找出 <code v-pre>nums</code> 中一个 <strong>最小</strong> 非空子数组，它的起始位置为 <code v-pre>i</code> （包含这个位置），同时有 <strong>最大</strong> 的 <strong>按位或运算值</strong> 。</p>
<ul>
<li>换言之，令 <code v-pre>Bij</code> 表示子数组 <code v-pre>nums[i...j]</code> 的按位或运算的结果，你需要找到一个起始位置为 <code v-pre>i</code> 的最小子数组，这个子数组的按位或运算的结果等于 <code v-pre>max(Bik)</code> ，其中 <code v-pre>i &lt;= k &lt;= n - 1</code> 。</li>
</ul>
<p>一个数组的按位或运算值是这个数组里所有数字按位或运算的结果。</p>
<p>请你返回一个大小为 <code v-pre>n</code> 的整数数组 <code v-pre>answer</code>，其中 <code v-pre>answer[i]</code>是开始位置为 <code v-pre>i</code> ，按位或运算结果最大，且 <strong>最短</strong> 子数组的长度。</p>
<p><strong>子数组</strong> 是数组里一段连续非空元素组成的序列。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
解释：
任何位置开始，最大按位或运算的结果都是 <span class="token number">3</span> 。
<span class="token operator">-</span> 下标 <span class="token number">0</span> 处，能得到结果 <span class="token number">3</span> 的最短子数组是 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> 。
<span class="token operator">-</span> 下标 <span class="token number">1</span> 处，能得到结果 <span class="token number">3</span> 的最短子数组是 <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> 。
<span class="token operator">-</span> 下标 <span class="token number">2</span> 处，能得到结果 <span class="token number">3</span> 的最短子数组是 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> 。
<span class="token operator">-</span> 下标 <span class="token number">3</span> 处，能得到结果 <span class="token number">3</span> 的最短子数组是 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> 。
<span class="token operator">-</span> 下标 <span class="token number">4</span> 处，能得到结果 <span class="token number">3</span> 的最短子数组是 <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> 。
所以我们返回 <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
解释：
下标 <span class="token number">0</span> 处，能得到最大按位或运算值的最短子数组长度为 <span class="token number">2</span> 。
下标 <span class="token number">1</span> 处，能得到最大按位或运算值的最短子数组长度为 <span class="token number">1</span> 。
所以我们返回 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li><code v-pre>n == nums.length</code></li>
<li><code v-pre>1 &lt;= n &lt;= 105</code></li>
<li><code v-pre>0 &lt;= nums[i] &lt;= 109</code></li>
</ul>
<blockquote>
<ol>
<li>求出<strong>所有</strong>子数组的按位或的结果，以及值等于该结果的子数组的个数。</li>
<li>求按位或结果等于<strong>任意给定数字</strong>的子数组的最短长度/最长长度。</li>
</ol>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>class Solution {
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> smallestSubarrays<span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> {
        <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> ors <span class="token operator">=</span> new ArrayList<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">--i) {</span>
            ors<span class="token punctuation">.</span><span class="token keyword">add</span><span class="token punctuation">(</span>new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span>{<span class="token number">0</span><span class="token punctuation">,</span> i}<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">or</span> : ors<span class="token punctuation">)</span> {
                <span class="token operator">or</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">|</span><span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ors<span class="token punctuation">.</span>get<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token operator">or</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                    ors<span class="token punctuation">.</span>get<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">or</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> ors<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">+</span>k<span class="token punctuation">,</span> <span class="token operator">or</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            }
            ors<span class="token punctuation">.</span>subList<span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> ors<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> ors<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        }
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


