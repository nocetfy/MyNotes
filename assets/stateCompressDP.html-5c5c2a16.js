const e=JSON.parse('{"key":"v-0e547bbc","path":"/leetcode/dp/stateCompressDP.html","title":"状压DP","lang":"zh-CN","frontmatter":{"description":"状压DP [toc] 思路 二进制枚举的题目一般元素仅有0,1，就要优先想到二进制，然后再具体看是什么题目。如果题目恰好有集合相关概念，就可以考虑二进制表示集合，开始进行进一步分析。 如果碰到有限个数表示的题，也要想到二进制表示子集。 技巧： 枚举 mask 的子集有一个经典的小技巧，对应的代码如下： subset = mask while subset: # 处理 subset 的逻辑, subset 是 mask 的一个子集，可以用其进行状态转移 subset = (subset - 1) &amp; mask # 使用按位与运算在 O(1) 的时间快速得到下一个（即更小的）mask 的子集","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/leetcode/dp/stateCompressDP.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"状压DP"}],["meta",{"property":"og:description","content":"状压DP [toc] 思路 二进制枚举的题目一般元素仅有0,1，就要优先想到二进制，然后再具体看是什么题目。如果题目恰好有集合相关概念，就可以考虑二进制表示集合，开始进行进一步分析。 如果碰到有限个数表示的题，也要想到二进制表示子集。 技巧： 枚举 mask 的子集有一个经典的小技巧，对应的代码如下： subset = mask while subset: # 处理 subset 的逻辑, subset 是 mask 的一个子集，可以用其进行状态转移 subset = (subset - 1) &amp; mask # 使用按位与运算在 O(1) 的时间快速得到下一个（即更小的）mask 的子集"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状压DP\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[{"level":3,"title":"单子集前后并列关系设计题目","slug":"单子集前后并列关系设计题目","link":"#单子集前后并列关系设计题目","children":[]},{"level":3,"title":"两个子集匹配问题","slug":"两个子集匹配问题","link":"#两个子集匹配问题","children":[]}]}],"git":{},"readingTime":{"minutes":18.38,"words":5514},"filePathRelative":"leetcode/dp/stateCompressDP.md","excerpt":"<h1> 状压DP</h1>\\n<p>[toc]</p>\\n<h2> 思路</h2>\\n<p>二进制枚举的题目一般元素仅有0,1，就要优先想到二进制，然后再具体看是什么题目。如果题目恰好有集合相关概念，就可以考虑二进制表示集合，开始进行进一步分析。</p>\\n<p>如果碰到有限个数表示的题，也要想到二进制表示子集。</p>\\n<p>技巧： 枚举 <code>mask</code> 的子集有一个经典的小技巧，对应的代码如下：</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code>subset <span class=\\"token operator\\">=</span> mask\\n<span class=\\"token keyword\\">while</span> subset<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># 处理 subset 的逻辑, subset 是 mask 的一个子集，可以用其进行状态转移</span>\\n    subset <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>subset <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&amp;</span> mask\\n    <span class=\\"token comment\\"># 使用按位与运算在 O(1) 的时间快速得到下一个（即更小的）mask 的子集</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};