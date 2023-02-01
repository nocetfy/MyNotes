const n=JSON.parse('{"key":"v-6725d240","path":"/leetcode/unionfind/uf.html","title":"并查集","lang":"zh-CN","frontmatter":{"description":"并查集 模板 // 开启了路径压缩和按秩合并的并查集 class UnionFind { int n;//顶点数目 int[] parent;//每个顶点所在连通分量的代表 int[] size;//可以简单地理解为每个连通分量中的顶点个数 int branchCount;// 当前连通分支数目 public UnionFind(int n) { this.n = n; this.branchCount = n; this.parent = new int[n]; this.size = new int[n]; Arrays.fill(size, 1); for (int i = 0; i &lt; n; ++i) { parent[i] = i; } } public int find(int x) { // 路径压缩 return parent[x] == x ? x : (parent[x] = find(parent[x])); } public boolean union(int x, int y) { x = find(x); y = find(y); if (x == y) { return false; } // 按秩合并 if (size[x] &lt; size[y]) { int temp = x; x = y; y = temp; } parent[y] = x; size[x] += size[y]; --branchCount; return true; } public boolean connected(int x, int y) { return find(x) == find(y); } public int branchCount() { return branchCount; } }","head":[["meta",{"property":"og:url","content":"https://newzone.top/myNotes/leetcode/unionfind/uf.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"并查集"}],["meta",{"property":"og:description","content":"并查集 模板 // 开启了路径压缩和按秩合并的并查集 class UnionFind { int n;//顶点数目 int[] parent;//每个顶点所在连通分量的代表 int[] size;//可以简单地理解为每个连通分量中的顶点个数 int branchCount;// 当前连通分支数目 public UnionFind(int n) { this.n = n; this.branchCount = n; this.parent = new int[n]; this.size = new int[n]; Arrays.fill(size, 1); for (int i = 0; i &lt; n; ++i) { parent[i] = i; } } public int find(int x) { // 路径压缩 return parent[x] == x ? x : (parent[x] = find(parent[x])); } public boolean union(int x, int y) { x = find(x); y = find(y); if (x == y) { return false; } // 按秩合并 if (size[x] &lt; size[y]) { int temp = x; x = y; y = temp; } parent[y] = x; size[x] += size[y]; --branchCount; return true; } public boolean connected(int x, int y) { return find(x) == find(y); } public int branchCount() { return branchCount; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并查集\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"模板","slug":"模板","link":"#模板","children":[]},{"level":3,"title":"题目","slug":"题目","link":"#题目","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.48,"words":1044},"filePathRelative":"leetcode/unionfind/uf.md","excerpt":"<h1> 并查集</h1>\\n<h3> 模板</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 开启了路径压缩和按秩合并的并查集</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">UnionFind</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//顶点数目</span>\\n    <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> parent<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//每个顶点所在连通分量的代表</span>\\n    <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> size<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//可以简单地理解为每个连通分量中的顶点个数</span>\\n    <span class=\\"token keyword\\">int</span> branchCount<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 当前连通分支数目</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">UnionFind</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>n <span class=\\"token operator\\">=</span> n<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>branchCount <span class=\\"token operator\\">=</span> n<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>parent <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>size <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Arrays</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fill</span><span class=\\"token punctuation\\">(</span>size<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> n<span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">++</span>i<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            parent<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> i<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 路径压缩</span>\\n        <span class=\\"token keyword\\">return</span> parent<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> x <span class=\\"token operator\\">?</span> x <span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>parent<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span>parent<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">union</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> y<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        x <span class=\\"token operator\\">=</span> <span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        y <span class=\\"token operator\\">=</span> <span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span>y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>x <span class=\\"token operator\\">==</span> y<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token comment\\">// 按秩合并</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>size<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span> size<span class=\\"token punctuation\\">[</span>y<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">int</span> temp <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>\\n            x <span class=\\"token operator\\">=</span> y<span class=\\"token punctuation\\">;</span>\\n            y <span class=\\"token operator\\">=</span> temp<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        parent<span class=\\"token punctuation\\">[</span>y<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>\\n        size<span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+=</span> size<span class=\\"token punctuation\\">[</span>y<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token operator\\">--</span>branchCount<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">connected</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> y<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">==</span> <span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span>y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">branchCount</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> branchCount<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
