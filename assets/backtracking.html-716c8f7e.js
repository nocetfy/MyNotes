const e=JSON.parse('{"key":"v-41f7dbaa","path":"/leetcode/backtracking/backtracking.html","title":"回溯算法","lang":"zh-CN","frontmatter":{"description":"回溯算法 [TOC] dfs dfs本质就是枚举，解决无法确定枚举层数的问题 遇到超时，两种思路： 时间复杂度过高，尝试使用低的算法 重复的事情做的过多，考虑能否去重，如记忆化 基础暴力尝试 如果超时，思考是否可能存在优化 优化点： 记忆化 剪枝 如果存在优化，但是又不确定优化效果，那么可以先试一下 如果更慢了，思考一下为什么更慢了 如果优化加上去还是超时，那么要么是知识学的不够多，优化加的不够好。要么就是简单搜索无法通过的问题，思考是否存在其他解法","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/leetcode/backtracking/backtracking.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"回溯算法"}],["meta",{"property":"og:description","content":"回溯算法 [TOC] dfs dfs本质就是枚举，解决无法确定枚举层数的问题 遇到超时，两种思路： 时间复杂度过高，尝试使用低的算法 重复的事情做的过多，考虑能否去重，如记忆化 基础暴力尝试 如果超时，思考是否可能存在优化 优化点： 记忆化 剪枝 如果存在优化，但是又不确定优化效果，那么可以先试一下 如果更慢了，思考一下为什么更慢了 如果优化加上去还是超时，那么要么是知识学的不够多，优化加的不够好。要么就是简单搜索无法通过的问题，思考是否存在其他解法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"回溯算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dfs","slug":"dfs","link":"#dfs","children":[]},{"level":2,"title":"回溯三问","slug":"回溯三问","link":"#回溯三问","children":[]},{"level":2,"title":"子集","slug":"子集","link":"#子集","children":[{"level":3,"title":"思考方式","slug":"思考方式","link":"#思考方式","children":[]}]},{"level":2,"title":"组合","slug":"组合","link":"#组合","children":[]},{"level":2,"title":"排列","slug":"排列","link":"#排列","children":[]},{"level":2,"title":"网格图","slug":"网格图","link":"#网格图","children":[]},{"level":2,"title":"路径问题","slug":"路径问题","link":"#路径问题","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{},"readingTime":{"minutes":44.08,"words":13223},"filePathRelative":"leetcode/backtracking/backtracking.md","excerpt":"<h1> 回溯算法</h1>\\n<p>[TOC]</p>\\n<h2> dfs</h2>\\n<blockquote>\\n<p>dfs本质就是枚举，解决无法确定枚举层数的问题</p>\\n<p>遇到超时，两种思路：</p>\\n<ol>\\n<li>时间复杂度过高，尝试使用低的算法</li>\\n<li>重复的事情做的过多，考虑能否去重，如记忆化</li>\\n</ol>\\n</blockquote>\\n<blockquote>\\n<ol>\\n<li>\\n<p>基础暴力尝试</p>\\n</li>\\n<li>\\n<p>如果超时，思考是否可能存在优化</p>\\n<p>优化点：</p>\\n<ol>\\n<li>记忆化</li>\\n<li>剪枝</li>\\n</ol>\\n</li>\\n<li>\\n<p>如果存在优化，但是又不确定优化效果，那么可以先试一下</p>\\n</li>\\n<li>\\n<p>如果更慢了，思考一下为什么更慢了</p>\\n</li>\\n<li>\\n<p>如果优化加上去还是超时，那么要么是知识学的不够多，优化加的不够好。要么就是简单搜索无法通过的问题，思考是否存在其他解法</p>\\n</li>\\n</ol>\\n</blockquote>","autoDesc":true}');export{e as data};
