<template><div><h1 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h1>
<h4 id="_133-克隆图" tabindex="-1"><a class="header-anchor" href="#_133-克隆图" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/clone-graph/" target="_blank" rel="noopener noreferrer">133. 克隆图<ExternalLinkIcon/></a></h4>
<p>给你无向 <strong><a href="https://baike.baidu.com/item/%E8%BF%9E%E9%80%9A%E5%9B%BE/6460995?fr=aladdin" target="_blank" rel="noopener noreferrer">连通<ExternalLinkIcon/></a></strong> 图中一个节点的引用，请你返回该图的 <a href="https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D/22785317?fr=aladdin" target="_blank" rel="noopener noreferrer"><strong>深拷贝</strong><ExternalLinkIcon/></a>（克隆）。</p>
<p>图中的每个节点都包含它的值 <code v-pre>val</code>（<code v-pre>int</code>） 和其邻居的列表（<code v-pre>list[Node]</code>）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> neighbors<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试用例格式：</strong></p>
<p>简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（<code v-pre>val = 1</code>），第二个节点值为 2（<code v-pre>val = 2</code>），以此类推。该图在测试用例中使用邻接列表表示。</p>
<p><strong>邻接列表</strong> 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。</p>
<p>给定节点将始终是图中的第一个节点（值为 1）。你必须将 <strong>给定节点的拷贝</strong> 作为对克隆图的引用返回。</p>
<p><strong>示例 1：</strong></p>
<figure><img src="https://s2.loli.net/2022/04/11/cLexRyXtpQ76PEh.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：adjList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
解释：
图中有 <span class="token number">4</span> 个节点。
节点 <span class="token number">1</span> 的值是 <span class="token number">1</span>，它有两个邻居：节点 <span class="token number">2</span> 和 <span class="token number">4</span> 。
节点 <span class="token number">2</span> 的值是 <span class="token number">2</span>，它有两个邻居：节点 <span class="token number">1</span> 和 <span class="token number">3</span> 。
节点 <span class="token number">3</span> 的值是 <span class="token number">3</span>，它有两个邻居：节点 <span class="token number">2</span> 和 <span class="token number">4</span> 。
节点 <span class="token number">4</span> 的值是 <span class="token number">4</span>，它有两个邻居：节点 <span class="token number">1</span> 和 <span class="token number">3</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<figure><img src="https://s2.loli.net/2022/04/11/Kdn5ryShUH7FifY.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：adjList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
解释：输入包含一个空列表。该图仅仅只有一个值为 <span class="token number">1</span> 的节点，它没有任何邻居。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：adjList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
解释：这个图是空的，它不含任何节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p>
<figure><img src="https://s2.loli.net/2022/04/11/HUR2q5DYQBmPol9.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：adjList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>思路：</p>
<p>​		本题其实就是无向图的遍历以及还原，先通过广度优先搜索来遍历所有顶点，并且用邻接表存储原图，然后再从邻接表生成一个克隆图，返回顶点即可。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">/*
// Definition for a Node.
class Node {
    public int val;
    public List&lt;Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList&lt;Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList&lt;Node>();
    }
    public Node(int _val, ArrayList&lt;Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">cloneGraph</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token comment">//借助队列来实现广度优先遍历</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//邻接表 用来存储顶点的邻居顶点</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token class-name">Node</span> source <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> nodes <span class="token operator">=</span> source<span class="token punctuation">.</span>neighbors<span class="token punctuation">;</span>
           <span class="token class-name">Node</span> dest <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> n<span class="token operator">:</span> nodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                   q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
                   map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
               dest<span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


