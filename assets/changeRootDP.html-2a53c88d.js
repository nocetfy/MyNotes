const t=JSON.parse('{"key":"v-bb31588e","path":"/leetcode/dp/changeRootDP.html","title":"换根DP","lang":"zh-CN","frontmatter":{"description":"换根DP [toc] 思路 ​\\t暴力的方法是先写单个根的答案，然后再遍历每个点，而这样往往是不行的，因为时间复杂度是 O(n2) 的。因此思路变成了先遍历一次答案，然后换根，而换根时候你统计的答案往往有规律，你要找到这个规律，然后统计答案，各个题都不一样，但是思路一致。","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/leetcode/dp/changeRootDP.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"换根DP"}],["meta",{"property":"og:description","content":"换根DP [toc] 思路 ​\\t暴力的方法是先写单个根的答案，然后再遍历每个点，而这样往往是不行的，因为时间复杂度是 O(n2) 的。因此思路变成了先遍历一次答案，然后换根，而换根时候你统计的答案往往有规律，你要找到这个规律，然后统计答案，各个题都不一样，但是思路一致。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"换根DP\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":3,"title":"题目","slug":"题目","link":"#题目","children":[]}],"git":{},"readingTime":{"minutes":6.45,"words":1936},"filePathRelative":"leetcode/dp/changeRootDP.md","excerpt":"<h1> 换根DP</h1>\\n<p>[toc]</p>\\n<h3> 思路</h3>\\n<p>​\\t暴力的方法是先写单个根的答案，然后再遍历每个点，而这样往往是不行的，因为时间复杂度是 <span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.02778em;\\">O</span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">n</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span> 的。因此思路变成了先遍历一次答案，然后换根，而换根时候你统计的答案往往有规律，你要找到这个规律，然后统计答案，各个题都不一样，但是思路一致。</p>","autoDesc":true}');export{t as data};
