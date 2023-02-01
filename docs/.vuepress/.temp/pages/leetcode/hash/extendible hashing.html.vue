<template><div><h1 id="原地哈希" tabindex="-1"><a class="header-anchor" href="#原地哈希" aria-hidden="true">#</a> 原地哈希</h1>
<h4 id="_41-缺失的第一个正数" tabindex="-1"><a class="header-anchor" href="#_41-缺失的第一个正数" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/first-missing-positive/" target="_blank" rel="noopener noreferrer">41. 缺失的第一个正数<ExternalLinkIcon/></a></h4>
<p>给你一个未排序的整数数组 <code v-pre>nums</code> ，请你找出其中没有出现的最小的正整数。</p>
<p>请你实现时间复杂度为 <code v-pre>O(n)</code> 并且只使用常数级别额外空间的解决方案。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
输出：<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">]</span>
输出：<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li><code v-pre>1 &lt;= nums.length &lt;= 5 * 105</code></li>
<li><code v-pre>-231 &lt;= nums[i] &lt;= 231 - 1</code></li>
</ul>
<blockquote>
<p>思路：</p>
<p>​</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h4 id="_442-数组中重复的数据" tabindex="-1"><a class="header-anchor" href="#_442-数组中重复的数据" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/" target="_blank" rel="noopener noreferrer">442. 数组中重复的数据<ExternalLinkIcon/></a></h4>
<p>给你一个长度为 <code v-pre>n</code> 的整数数组 <code v-pre>nums</code> ，其中 <code v-pre>nums</code> 的所有整数都在范围 <code v-pre>[1, n]</code> 内，且每个整数出现 <strong>一次</strong> 或 <strong>两次</strong> 。请你找出所有出现 <strong>两次</strong> 的整数，并以数组形式返回。</p>
<p>你必须设计并实现一个时间复杂度为 <code v-pre>O(n)</code> 且仅使用常量额外空间的算法解决此问题。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li><code v-pre>n == nums.length</code></li>
<li><code v-pre>1 &lt;= n &lt;= 105</code></li>
<li><code v-pre>1 &lt;= nums[i] &lt;= n</code></li>
<li><code v-pre>nums</code> 中的每个元素出现 <strong>一次</strong> 或 <strong>两次</strong></li>
</ul>
<blockquote>
<p>思路：</p>
<p>​</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h4 id="_448-找到所有数组中消失的数字" tabindex="-1"><a class="header-anchor" href="#_448-找到所有数组中消失的数字" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/" target="_blank" rel="noopener noreferrer">448. 找到所有数组中消失的数字<ExternalLinkIcon/></a></h4>
<p>给你一个含 <code v-pre>n</code> 个整数的数组 <code v-pre>nums</code> ，其中 <code v-pre>nums[i]</code> 在区间 <code v-pre>[1, n]</code> 内。请你找出所有在 <code v-pre>[1, n]</code> 范围内但没有出现在 <code v-pre>nums</code> 中的数字，并以数组的形式返回结果。</p>
<p><strong>示例 1：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li><code v-pre>n == nums.length</code></li>
<li><code v-pre>1 &lt;= n &lt;= 105</code></li>
<li><code v-pre>1 &lt;= nums[i] &lt;= n</code></li>
</ul>
<p>**进阶：**你能在不使用额外空间且时间复杂度为 <code v-pre>O(n)</code> 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。</p>
<blockquote>
<p>思路：</p>
<p>​</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
</div></template>


