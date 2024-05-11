const e=JSON.parse('{"key":"v-1114479c","path":"/leetcode/array/window.html","title":"滑动窗口","lang":"zh-CN","frontmatter":{"description":"滑动窗口 [toc] 同向双指针(不定长滑动窗口) 应用场景 应用场景 关键词： 满足xxx条件（计算结果(加减乘除)、出现次数(cnt数组准备)、同时包含） 长度最长/最短 子串/子数组（必定连续） 举个例子：长度最小的子数组 使用技巧 枚举右端点，不满足长度要求时，从左侧释放。","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/leetcode/array/window.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"滑动窗口"}],["meta",{"property":"og:description","content":"滑动窗口 [toc] 同向双指针(不定长滑动窗口) 应用场景 应用场景 关键词： 满足xxx条件（计算结果(加减乘除)、出现次数(cnt数组准备)、同时包含） 长度最长/最短 子串/子数组（必定连续） 举个例子：长度最小的子数组 使用技巧 枚举右端点，不满足长度要求时，从左侧释放。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"滑动窗口\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"同向双指针(不定长滑动窗口)","slug":"同向双指针-不定长滑动窗口","link":"#同向双指针-不定长滑动窗口","children":[{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"定长滑动窗口","slug":"定长滑动窗口","link":"#定长滑动窗口","children":[]},{"level":3,"title":"不定长滑动窗口(求最长/最大)","slug":"不定长滑动窗口-求最长-最大","link":"#不定长滑动窗口-求最长-最大","children":[]},{"level":3,"title":"不定长滑动窗口(求最短/最小)","slug":"不定长滑动窗口-求最短-最小","link":"#不定长滑动窗口-求最短-最小","children":[]},{"level":3,"title":"两端滑动窗口","slug":"两端滑动窗口","link":"#两端滑动窗口","children":[]},{"level":3,"title":"统计个数","slug":"统计个数","link":"#统计个数","children":[]},{"level":3,"title":"和/个数k固定的区间个数计算","slug":"和-个数k固定的区间个数计算","link":"#和-个数k固定的区间个数计算","children":[]},{"level":3,"title":"最长区间","slug":"最长区间","link":"#最长区间","children":[]},{"level":3,"title":"分组循环 + 滑动窗口","slug":"分组循环-滑动窗口","link":"#分组循环-滑动窗口","children":[]},{"level":3,"title":"多指针滑动窗口","slug":"多指针滑动窗口","link":"#多指针滑动窗口","children":[]},{"level":3,"title":"中位数贪心+滑动窗口","slug":"中位数贪心-滑动窗口","link":"#中位数贪心-滑动窗口","children":[]}]}],"git":{},"readingTime":{"minutes":91.24,"words":27372},"filePathRelative":"leetcode/array/window.md","excerpt":"<h1> 滑动窗口</h1>\\n<p>[toc]</p>\\n<h2> 同向双指针(不定长滑动窗口)</h2>\\n<h3> 应用场景</h3>\\n<ul>\\n<li>应用场景</li>\\n</ul>\\n<blockquote>\\n<p>关键词： 满足xxx条件（计算结果(加减乘除)、出现次数(cnt数组准备)、同时包含）</p>\\n<p>长度最长/最短</p>\\n<p>子串/子数组（必定连续）</p>\\n<p>举个例子：长度最小的子数组</p>\\n</blockquote>\\n<ul>\\n<li>使用技巧</li>\\n</ul>\\n<blockquote>\\n<p>枚举右端点，不满足长度要求时，从左侧释放。</p>\\n</blockquote>","autoDesc":true}');export{e as data};