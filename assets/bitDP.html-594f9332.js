const e=JSON.parse('{"key":"v-5b6dd702","path":"/leetcode/dp/bitDP.html","title":"数位DP","lang":"zh-CN","frontmatter":{"description":"数位DP [toc] 思路 数位概念：是指把一个数字按照个、十、百、千一位一位拆开，关注它每一位上的数字。 举个例子： 如果拆的是十进制数，那么每一位数字都是 0-9， 其他进制可类比十进制。例如二进制，每一位数字都是0-1。 leetcode 目前题目都是基于十进制和二进制的。 数位 DP：（题目应用特征和条件） （1）计数 （2）输入会提供一个 数字区间(或者只提供上界) 作为计数的限制 （3）题目条件经过 转换 后可以使用「数位」的思想去判断和理解 为什么可以用数位DP （1）最朴素的计数就是从小到大开始依次加一。 （2）但我们发现对于 位数比较多的数，这样的过程中有许多重复的部分 。 举个例子：从 700 数到 799、从 800 数到 899、和从 900 数到 999 的过程非常相似，它们都是后两位从 000 变到 999，不一样的地方只有百位这一位。所以我们可以把重复计算的过程归并保证不重复计算，即将这些过程中产生的计数答案存放在一个数组里。此数组根据题目具体要求设置状态，用递推 或 DP 的方式进行状态转移。 （3）统计答案建议使用 记忆化搜索 ，为了 统计所有不超过上限的答案 ，要 从高到低枚举每一位 ，再考虑每一位都可以填哪些数字，最后利用通用答案数组统计答案。","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/leetcode/dp/bitDP.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"数位DP"}],["meta",{"property":"og:description","content":"数位DP [toc] 思路 数位概念：是指把一个数字按照个、十、百、千一位一位拆开，关注它每一位上的数字。 举个例子： 如果拆的是十进制数，那么每一位数字都是 0-9， 其他进制可类比十进制。例如二进制，每一位数字都是0-1。 leetcode 目前题目都是基于十进制和二进制的。 数位 DP：（题目应用特征和条件） （1）计数 （2）输入会提供一个 数字区间(或者只提供上界) 作为计数的限制 （3）题目条件经过 转换 后可以使用「数位」的思想去判断和理解 为什么可以用数位DP （1）最朴素的计数就是从小到大开始依次加一。 （2）但我们发现对于 位数比较多的数，这样的过程中有许多重复的部分 。 举个例子：从 700 数到 799、从 800 数到 899、和从 900 数到 999 的过程非常相似，它们都是后两位从 000 变到 999，不一样的地方只有百位这一位。所以我们可以把重复计算的过程归并保证不重复计算，即将这些过程中产生的计数答案存放在一个数组里。此数组根据题目具体要求设置状态，用递推 或 DP 的方式进行状态转移。 （3）统计答案建议使用 记忆化搜索 ，为了 统计所有不超过上限的答案 ，要 从高到低枚举每一位 ，再考虑每一位都可以填哪些数字，最后利用通用答案数组统计答案。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数位DP\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"题型","slug":"题型","link":"#题型","children":[{"level":3,"title":"pre类，统计数位某个数字的出现次数\\\\和前面的数位相关等等","slug":"pre类-统计数位某个数字的出现次数-和前面的数位相关等等","link":"#pre类-统计数位某个数字的出现次数-和前面的数位相关等等","children":[]},{"level":3,"title":"考虑前导0， mask类，前后数位存在约束","slug":"考虑前导0-mask类-前后数位存在约束","link":"#考虑前导0-mask类-前后数位存在约束","children":[]},{"level":3,"title":"考虑前导0， cnt类，依据题意模拟","slug":"考虑前导0-cnt类-依据题意模拟","link":"#考虑前导0-cnt类-依据题意模拟","children":[]},{"level":3,"title":"其他题目","slug":"其他题目","link":"#其他题目","children":[]}]}],"git":{},"readingTime":{"minutes":21.58,"words":6473},"filePathRelative":"leetcode/dp/bitDP.md","excerpt":"<h1> 数位DP</h1>\\n<p>[toc]</p>\\n<h2> 思路</h2>\\n<ol>\\n<li>数位概念：是指把一个数字按照个、十、百、千一位一位拆开，关注它每一位上的数字。\\n举个例子： 如果拆的是十进制数，那么每一位数字都是 0-9， 其他进制可类比十进制。例如二进制，每一位数字都是0-1。\\nleetcode 目前题目都是基于十进制和二进制的。</li>\\n<li>数位 DP：（题目应用特征和条件）\\n（1）计数\\n（2）输入会提供一个 <strong>数字区间(或者只提供上界)</strong> 作为计数的限制\\n（3）题目条件经过 <strong>转换</strong> 后可以使用「数位」的思想去判断和理解</li>\\n<li>为什么可以用数位DP\\n（1）最朴素的计数就是从小到大开始依次加一。\\n（2）但我们发现对于 <strong>位数比较多的数，这样的过程中有许多重复的部分</strong> 。\\n举个例子：从 700 数到 799、从 800 数到 899、和从 900 数到 999 的过程非常相似，它们都是后两位从 000 变到 999，不一样的地方只有百位这一位。所以我们可以把重复计算的过程归并保证不重复计算，即将这些过程中产生的计数答案存放在一个数组里。此数组根据题目具体要求设置状态，用递推 或 DP 的方式进行状态转移。\\n（3）统计答案建议使用 <strong>记忆化搜索</strong> ，为了 <strong>统计所有不超过上限的答案</strong> ，要 从<strong>高到低枚举每一位</strong> ，再考虑每一位都可以填哪些数字，最后利用通用答案数组统计答案。</li>\\n</ol>","autoDesc":true}');export{e as data};
