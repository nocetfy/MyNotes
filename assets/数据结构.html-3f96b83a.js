import{_ as r,X as s,Y as t,Z as e,a0 as i,a1 as l,$ as a,H as d}from"./framework-1ee2252c.js";const o={},c=a(`<h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1><p>[toc]</p><h2 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h2><p><strong>TreeMap底层通过红黑树(Red-Black tree)实现</strong>，也就意味着<code>containsKey()</code>, <code>get()</code>, <code>put()</code>, <code>remove()</code>都有着<code>log(n)</code>的时间复杂度。其具体算法实现参照了《算法导论》。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_base.png" alt="TreeMap_base.png" tabindex="0" loading="lazy"><figcaption>TreeMap_base.png</figcaption></figure><p>出于性能原因，<code>TreeMap</code>是非同步的(not synchronized)，如果需要在多线程环境使用，需要程序员手动同步；或者通过如下方式将<code>TreeMap</code>包装成(wrapped)同步的:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SortedMap</span> m <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedSortedMap</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>红黑树是一种近似平衡的二叉查找树，它能够确保任何一个节点的左右子树的高度差不会超过二者中较低那个的一倍</strong>。具体来说，红黑树是满足如下条件的二叉查找树(binary search tree):</p><ol><li>每个节点要么是红色，要么是黑色。</li><li>根节点必须是黑色</li><li>红色节点不能连续(也即是，红色节点的孩子和父亲都不能是红色)。</li><li>对于每个节点，从该点至<code>null</code>(树尾端)的任何路径，都含有相同个数的黑色节点。</li></ol><p>在树的结构发生改变时(插入或者删除操作)，往往会破坏上述条件3或条件4，需要通过调整使得查找树重新满足红黑树的约束条件。</p><h3 id="预备知识" tabindex="-1"><a class="header-anchor" href="#预备知识" aria-hidden="true">#</a> 预备知识</h3><p>​ 前文说到当查找树的结构发生改变时，红黑树的约束条件可能被破坏，需要通过调整使得查找树重新满足红黑树的约束条件。调整可以分为两类: 一类是颜色调整，即改变某个节点的颜色；另一类是结构调整，即改变检索树的结构关系。结构调整过程包含两个基本操作: 左旋(Rotate Left)，右旋(RotateRight)。</p><h4 id="左旋" tabindex="-1"><a class="header-anchor" href="#左旋" aria-hidden="true">#</a> 左旋</h4><p>左旋的过程是将<code>x</code>的右子树绕<code>x</code>逆时针旋转，使得<code>x</code>的右子树成为<code>x</code>的父亲，同时修改相关节点的引用。旋转之后，二叉查找树的属性仍然满足。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_rotateLeft.png" alt="TreeMap_rotateLeft.png" tabindex="0" loading="lazy"><figcaption>TreeMap_rotateLeft.png</figcaption></figure><p><code>TreeMap</code>中左旋代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//Rotate Left
private void rotateLeft(Entry&lt;K,V&gt; p) {
    if (p != null) {
        Entry&lt;K,V&gt; r = p.right;
        p.right = r.left;
        if (r.left != null)
            r.left.parent = p;
        r.parent = p.parent;
        if (p.parent == null)
            root = r;
        else if (p.parent.left == p)
            p.parent.left = r;
        else
            p.parent.right = r;
        r.left = p;
        p.parent = r;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="右旋" tabindex="-1"><a class="header-anchor" href="#右旋" aria-hidden="true">#</a> 右旋</h4><p>右旋的过程是将<code>x</code>的左子树绕<code>x</code>顺时针旋转，使得<code>x</code>的左子树成为<code>x</code>的父亲，同时修改相关节点的引用。旋转之后，二叉查找树的属性仍然满足。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_rotateRight.png" alt="TreeMap_rotateRight.png" tabindex="0" loading="lazy"><figcaption>TreeMap_rotateRight.png</figcaption></figure><p><code>TreeMap</code>中右旋代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//Rotate Right
private void rotateRight(Entry&lt;K,V&gt; p) {
    if (p != null) {
        Entry&lt;K,V&gt; l = p.left;
        p.left = l.right;
        if (l.right != null) l.right.parent = p;
        l.parent = p.parent;
        if (p.parent == null)
            root = l;
        else if (p.parent.right == p)
            p.parent.right = l;
        else p.parent.left = l;
        l.right = p;
        p.parent = l;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="寻找节点后继" tabindex="-1"><a class="header-anchor" href="#寻找节点后继" aria-hidden="true">#</a> 寻找节点后继</h4><p>对于一棵二叉查找树，给定节点t，其后继(树中比大于t的最小的那个元素)可以通过如下方式找到:</p><blockquote><ol><li>t的右子树不空，则t的后继是其右子树中最小的那个元素。</li><li>t的右孩子为空，则t的后继是其第一个向左走的祖先。</li></ol></blockquote><p>后继节点在红黑树的删除操作中将会用到。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_successor.png" alt="TreeMap_successor.png" tabindex="0" loading="lazy"><figcaption>TreeMap_successor.png</figcaption></figure><p><code>TreeMap</code>中寻找节点后继的代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 寻找节点后继函数successor()
static &lt;K,V&gt; TreeMap.Entry&lt;K,V&gt; successor(Entry&lt;K,V&gt; t) {
    if (t == null)
        return null;
    else if (t.right != null) {// 1. t的右子树不空，则t的后继是其右子树中最小的那个元素
        Entry&lt;K,V&gt; p = t.right;
        while (p.left != null)
            p = p.left;
        return p;
    } else {// 2. t的右孩子为空，则t的后继是其第一个向左走的祖先
        Entry&lt;K,V&gt; p = t.parent;
        Entry&lt;K,V&gt; ch = t;
        while (p != null &amp;&amp; ch == p.right) {
            ch = p;
            p = p.parent;
        }
        return p;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法剖析" tabindex="-1"><a class="header-anchor" href="#方法剖析" aria-hidden="true">#</a> 方法剖析</h3><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h4><p><code> get(Object key)</code>方法根据指定的<code>key</code>值返回对应的<code>value</code>，该方法调用了<code>getEntry(Object key)</code>得到相应的<code>entry</code>，然后返回<code>entry.value</code>。因此<code>getEntry()</code>是算法的核心。算法思想是根据<code>key</code>的自然顺序(或者比较器顺序)对二叉查找树进行查找，直到找到满足<code>k.compareTo(p.key) == 0</code>的<code>entry</code>。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_getEntry.png" alt="TreeMap_getEntry.png" tabindex="0" loading="lazy"><figcaption>TreeMap_getEntry.png</figcaption></figure><p>具体代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//getEntry()方法
final Entry&lt;K,V&gt; getEntry(Object key) {
    ......
    if (key == null)//不允许key值为null
        throw new NullPointerException();
    Comparable&lt;? super K&gt; k = (Comparable&lt;? super K&gt;) key;//使用元素的自然顺序
    Entry&lt;K,V&gt; p = root;
    while (p != null) {
        int cmp = k.compareTo(p.key);
        if (cmp &lt; 0)//向左找
            p = p.left;
        else if (cmp &gt; 0)//向右找
            p = p.right;
        else
            return p;
    }
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put()</h4><p><code> put(K key, V value)</code>方法是将指定的<code>key</code>, <code>value</code>对添加到<code>map</code>里。该方法首先会对<code>map</code>做一次查找，看是否包含该元组，如果已经包含则直接返回，查找过程类似于<code>getEntry()</code>方法；如果没有找到则会在红黑树中插入新的<code>entry</code>，如果插入之后破坏了红黑树的约束条件，还需要进行调整(旋转，改变某些节点的颜色)。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public V put(K key, V value) {
	......
    int cmp;
    Entry&lt;K,V&gt; parent;
    if (key == null)
        throw new NullPointerException();
    Comparable&lt;? super K&gt; k = (Comparable&lt;? super K&gt;) key;//使用元素的自然顺序
    do {
        parent = t;
        cmp = k.compareTo(t.key);
        if (cmp &lt; 0) t = t.left;//向左找
        else if (cmp &gt; 0) t = t.right;//向右找
        else return t.setValue(value);
    } while (t != null);
    Entry&lt;K,V&gt; e = new Entry&lt;&gt;(key, value, parent);//创建并插入新的entry
    if (cmp &lt; 0) parent.left = e;
    else parent.right = e;
    fixAfterInsertion(e);//调整
    size++;
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 上述代码的插入部分并不难理解: 首先在红黑树上找到合适的位置，然后创建新的<code>entry</code>并插入(当然，新插入的节点一定是树的叶子)。难点是调整函数<code>fixAfterInsertion()</code>，前面已经说过，调整往往需要1.改变某些节点的颜色，2.对某些节点进行旋转。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_put.png" alt="TreeMap_put.png" tabindex="0" loading="lazy"><figcaption>TreeMap_put.png</figcaption></figure><p>​ 调整函数<code>fixAfterInsertion()</code>的具体代码如下，其中用到了上文中提到的<code>rotateLeft()</code>和<code>rotateRight()</code>函数。通过代码我们能够看到，情况2其实是落在情况3内的。情况4～情况6跟前三种情况是对称的，因此图解中并没有画出后三种情况，读者可以参考代码自行理解。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//红黑树调整函数fixAfterInsertion()
private void fixAfterInsertion(Entry&lt;K,V&gt; x) {
    x.color = RED;
    while (x != null &amp;&amp; x != root &amp;&amp; x.parent.color == RED) {
        if (parentOf(x) == leftOf(parentOf(parentOf(x)))) {
            Entry&lt;K,V&gt; y = rightOf(parentOf(parentOf(x)));
            if (colorOf(y) == RED) {
                setColor(parentOf(x), BLACK);              // 情况1
                setColor(y, BLACK);                        // 情况1
                setColor(parentOf(parentOf(x)), RED);      // 情况1
                x = parentOf(parentOf(x));                 // 情况1
            } else {
                if (x == rightOf(parentOf(x))) {
                    x = parentOf(x);                       // 情况2
                    rotateLeft(x);                         // 情况2
                }
                setColor(parentOf(x), BLACK);              // 情况3
                setColor(parentOf(parentOf(x)), RED);      // 情况3
                rotateRight(parentOf(parentOf(x)));        // 情况3
            }
        } else {
            Entry&lt;K,V&gt; y = leftOf(parentOf(parentOf(x)));
            if (colorOf(y) == RED) {
                setColor(parentOf(x), BLACK);              // 情况4
                setColor(y, BLACK);                        // 情况4
                setColor(parentOf(parentOf(x)), RED);      // 情况4
                x = parentOf(parentOf(x));                 // 情况4
            } else {
                if (x == leftOf(parentOf(x))) {
                    x = parentOf(x);                       // 情况5
                    rotateRight(x);                        // 情况5
                }
                setColor(parentOf(x), BLACK);              // 情况6
                setColor(parentOf(parentOf(x)), RED);      // 情况6
                rotateLeft(parentOf(parentOf(x)));         // 情况6
            }
        }
    }
    root.color = BLACK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove()</h4><p>​ <code>remove(Object key)</code>的作用是删除<code>key</code>值对应的<code>entry</code>，该方法首先通过上文中提到的<code>getEntry(Object key)</code>方法找到<code>key</code>值对应的<code>entry</code>，然后调用<code>deleteEntry(Entry&lt;K,V&gt; entry)</code>删除对应的<code>entry</code>。由于删除操作会改变红黑树的结构，有可能破坏红黑树的约束条件，因此有可能要进行调整。</p><p><code>getEntry()</code>函数前面已经讲解过，这里重点放<code>deleteEntry()</code>上，该函数删除指定的<code>entry</code>并在红黑树的约束被破坏时进行调用<code>fixAfterDeletion(Entry&lt;K,V&gt; x)</code>进行调整。</p><p><strong>由于红黑树是一棵增强版的二叉查找树，红黑树的删除操作跟普通二叉查找树的删除操作也就非常相似，唯一的区别是红黑树在节点删除之后可能需要进行调整</strong>。现在考虑一棵普通二叉查找树的删除过程，可以简单分为两种情况:</p><blockquote><ol><li>删除点p的左右子树都为空，或者只有一棵子树非空。</li><li>删除点p的左右子树都非空。</li></ol></blockquote><p>​ 对于上述情况1，处理起来比较简单，直接将p删除(左右子树都为空时)，或者用非空子树替代p(只有一棵子树非空时)；对于情况2，可以用p的后继s(树中大于x的最小的那个元素)代替p，然后使用情况1删除s(此时s一定满足情况1.可以画画看)。</p><p>基于以上逻辑，红黑树的节点删除函数<code>deleteEntry()</code>代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 红黑树entry删除函数deleteEntry()
private void deleteEntry(Entry&lt;K,V&gt; p) {
    modCount++;
    size--;
    if (p.left != null &amp;&amp; p.right != null) {// 2. 删除点p的左右子树都非空。
        Entry&lt;K,V&gt; s = successor(p);// 后继
        p.key = s.key;
        p.value = s.value;
        p = s;
    }
    Entry&lt;K,V&gt; replacement = (p.left != null ? p.left : p.right);
    if (replacement != null) {// 1. 删除点p只有一棵子树非空。
        replacement.parent = p.parent;
        if (p.parent == null)
            root = replacement;
        else if (p == p.parent.left)
            p.parent.left  = replacement;
        else
            p.parent.right = replacement;
        p.left = p.right = p.parent = null;
        if (p.color == BLACK)
            fixAfterDeletion(replacement);// 调整
    } else if (p.parent == null) {
        root = null;
    } else { // 1. 删除点p的左右子树都为空
        if (p.color == BLACK)
            fixAfterDeletion(p);// 调整
        if (p.parent != null) {
            if (p == p.parent.left)
                p.parent.left = null;
            else if (p == p.parent.right)
                p.parent.right = null;
            p.parent = null;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 上述代码中占据大量代码行的，是用来修改父子节点间引用关系的代码，其逻辑并不难理解。下面着重讲解删除后调整函数<code>fixAfterDeletion()</code>。首先请思考一下，删除了哪些点才会导致调整？<strong>只有删除点是BLACK的时候，才会触发调整函数</strong>，因为删除RED节点不会破坏红黑树的任何约束，而删除BLACK节点会破坏规则4。</p><p>跟上文中讲过的<code>fixAfterInsertion()</code>函数一样，这里也要分成若干种情况。记住，<strong>无论有多少情况，具体的调整操作只有两种: 1.改变某些节点的颜色，2.对某些节点进行旋转。</strong></p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/TreeMap_fixAfterDeletion.png" alt="TreeMap_fixAfterDeletion.png" tabindex="0" loading="lazy"><figcaption>TreeMap_fixAfterDeletion.png</figcaption></figure><p>​ 上述图解的总体思想是: 将情况1首先转换成情况2，或者转换成情况3和情况4。当然，该图解并不意味着调整过程一定是从情况1开始。通过后续代码我们还会发现几个有趣的规则: a).如果是由情况1之后紧接着进入的情况2，那么情况2之后一定会退出循环(因为x为红色)；b).一旦进入情况3和情况4，一定会退出循环(因为x为root)。</p><p>​ 删除后调整函数<code>fixAfterDeletion()</code>的具体代码如下，其中用到了上文中提到的<code>rotateLeft()</code>和<code>rotateRight()</code>函数。通过代码我们能够看到，情况3其实是落在情况4内的。情况5～情况8跟前四种情况是对称的，因此图解中并没有画出后四种情况，读者可以参考代码自行理解。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private void fixAfterDeletion(Entry&lt;K,V&gt; x) {
    while (x != root &amp;&amp; colorOf(x) == BLACK) {
        if (x == leftOf(parentOf(x))) {
            Entry&lt;K,V&gt; sib = rightOf(parentOf(x));
            if (colorOf(sib) == RED) {
                setColor(sib, BLACK);                   // 情况1
                setColor(parentOf(x), RED);             // 情况1
                rotateLeft(parentOf(x));                // 情况1
                sib = rightOf(parentOf(x));             // 情况1
            }
            if (colorOf(leftOf(sib))  == BLACK &amp;&amp;
                colorOf(rightOf(sib)) == BLACK) {
                setColor(sib, RED);                     // 情况2
                x = parentOf(x);                        // 情况2
            } else {
                if (colorOf(rightOf(sib)) == BLACK) {
                    setColor(leftOf(sib), BLACK);       // 情况3
                    setColor(sib, RED);                 // 情况3
                    rotateRight(sib);                   // 情况3
                    sib = rightOf(parentOf(x));         // 情况3
                }
                setColor(sib, colorOf(parentOf(x)));    // 情况4
                setColor(parentOf(x), BLACK);           // 情况4
                setColor(rightOf(sib), BLACK);          // 情况4
                rotateLeft(parentOf(x));                // 情况4
                x = root;                               // 情况4
            }
        } else { // 跟前四种情况对称
            Entry&lt;K,V&gt; sib = leftOf(parentOf(x));
            if (colorOf(sib) == RED) {
                setColor(sib, BLACK);                   // 情况5
                setColor(parentOf(x), RED);             // 情况5
                rotateRight(parentOf(x));               // 情况5
                sib = leftOf(parentOf(x));              // 情况5
            }
            if (colorOf(rightOf(sib)) == BLACK &amp;&amp;
                colorOf(leftOf(sib)) == BLACK) {
                setColor(sib, RED);                     // 情况6
                x = parentOf(x);                        // 情况6
            } else {
                if (colorOf(leftOf(sib)) == BLACK) {
                    setColor(rightOf(sib), BLACK);      // 情况7
                    setColor(sib, RED);                 // 情况7
                    rotateLeft(sib);                    // 情况7
                    sib = leftOf(parentOf(x));          // 情况7
                }
                setColor(sib, colorOf(parentOf(x)));    // 情况8
                setColor(parentOf(x), BLACK);           // 情况8
                setColor(leftOf(sib), BLACK);           // 情况8
                rotateRight(parentOf(x));               // 情况8
                x = root;                               // 情况8
            }
        }
    }
    setColor(x, BLACK);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h2><p><strong>优先队列的作用是能保证每次取出的元素都是队列中权值最小的</strong>。这里牵涉到了大小关系，<strong>元素大小的评判可以通过元素本身的自然顺序(<code>natural ordering</code>)，也可以通过构造时传入的比较器</strong>。</p><p>Java中<code>PriorityQueue</code>实现了<code>Queue</code>接口，不允许放入<code>null</code>元素；其通过堆实现，具体说是通过完全二叉树(<code>complete binary tree</code>)实现的<strong>小顶堆</strong>(任意一个非叶子节点的权值，都不大于其左右子节点的权值)，也就意味着可以通过数组来作为<code>PriorityQueue</code>的底层实现。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/PriorityQueue_base.png" alt="PriorityQueue_base.png" tabindex="0" loading="lazy"><figcaption>PriorityQueue_base.png</figcaption></figure><p>上图中我们给每个元素按照层序遍历的方式进行了编号，如果你足够细心，会发现父节点和子节点的编号是有联系的，更确切的说父子节点的编号之间有如下关系:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>leftNo = parentNo*2+1
rightNo = parentNo*2+2
parentNo = (nodeNo-1)/2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述三个公式，可以轻易计算出某个节点的父节点以及子节点的下标。这也就是为什么可以直接用数组来存储堆的原因。</p>`,64),p=e("p",null,[e("code",null,"PriorityQueue"),i("的"),e("code",null,"peek()"),i("和"),e("code",null,"element"),i("操作是常数时间，"),e("code",null,"add()"),i(", "),e("code",null,"offer()"),i(", 无参数的"),e("code",null,"remove()"),i("以及"),e("code",null,"poll()"),i("方法的时间复杂度都是"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"l"),e("mi",null,"o"),e("msub",null,[e("mi",null,"g"),e("mi",null,"n")]),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(log_n)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord mathnormal"},"o"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1514em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"n")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mclose"},")")])])]),i("。")],-1),u=a(`<h3 id="方法剖析-1" tabindex="-1"><a class="header-anchor" href="#方法剖析-1" aria-hidden="true">#</a> 方法剖析</h3><h4 id="add-和offer" tabindex="-1"><a class="header-anchor" href="#add-和offer" aria-hidden="true">#</a> add()和offer()</h4><p><code>add(E e)</code>和<code>offer(E e)</code>的语义相同，都是向优先队列中插入元素，只是<code>Queue</code>接口规定二者对插入失败时的处理不同，前者在插入失败时抛出异常，后则则会返回<code>false</code>。对于<code>PriorityQueue</code>这两个方法其实没什么差别。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/PriorityQueue_offer.png" alt="PriorityQueue_offer.png" tabindex="0" loading="lazy"><figcaption>PriorityQueue_offer.png</figcaption></figure><p>新加入的元素可能会破坏小顶堆的性质，因此需要进行必要的调整。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//offer(E e)
public boolean offer(E e) {
    if (e == null)//不允许放入null元素
        throw new NullPointerException();
    modCount++;
    int i = size;
    if (i &gt;= queue.length)
        grow(i + 1);//自动扩容
    size = i + 1;
    if (i == 0)//队列原来为空，这是插入的第一个元素
        queue[0] = e;
    else
        siftUp(i, e);//调整
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，扩容函数<code>grow()</code>类似于<code>ArrayList</code>里的<code>grow()</code>函数，就是再申请一个更大的数组，并将原数组的元素复制过去，这里不再赘述。需要注意的是<code>siftUp(int k, E x)</code>方法，该方法用于插入元素<code>x</code>并维持堆的特性。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//siftUp()
private void siftUp(int k, E x) {
    while (k &gt; 0) {
        int parent = (k - 1) &gt;&gt;&gt; 1;//parentNo = (nodeNo-1)/2
        Object e = queue[parent];
        if (comparator.compare(x, (E) e) &gt;= 0)//调用比较器的比较方法
            break;
        queue[k] = e;
        k = parent;
    }
    queue[k] = x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新加入的元素<code>x</code>可能会破坏小顶堆的性质，因此需要进行调整。调整的过程为: <strong>从<code>k</code>指定的位置开始，将<code>x</code>逐层与当前点的<code>parent</code>进行比较并交换，直到满足<code>x &gt;= queue[parent]</code>为止</strong>。注意这里的比较可以是元素的自然顺序，也可以是依靠比较器的顺序。</p><h4 id="element-和peek" tabindex="-1"><a class="header-anchor" href="#element-和peek" aria-hidden="true">#</a> element()和peek()</h4><p><code> element()</code>和<code>peek()</code>的语义完全相同，都是获取但不删除队首元素，也就是队列中权值最小的那个元素，二者唯一的区别是当方法失败时前者抛出异常，后者返回<code>null</code>。根据小顶堆的性质，堆顶那个元素就是全局最小的那个；由于堆用数组表示，根据下标关系，<code>0</code>下标处的那个元素既是堆顶元素。所以<strong>直接返回数组<code>0</code>下标处的那个元素即可</strong>。</p><figure><img src="https://pdai.tech/images/collection/PriorityQueue_peek.png" alt="PriorityQueue_peek.png" tabindex="0" loading="lazy"><figcaption>PriorityQueue_peek.png</figcaption></figure><p>代码也就非常简洁:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//peek()
public E peek() {
    if (size == 0)
        return null;
    return (E) queue[0];//0下标处的那个元素就是最小的那个
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="remove-和poll" tabindex="-1"><a class="header-anchor" href="#remove-和poll" aria-hidden="true">#</a> remove()和poll()</h4><p><code>remove()</code>和<code>poll()</code>方法的语义也完全相同，都是获取并删除队首元素，区别是当方法失败时前者抛出异常，后者返回<code>null</code>。由于删除操作会改变队列的结构，为维护小顶堆的性质，需要进行必要的调整。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/PriorityQueue_poll.png" alt="PriorityQueue_poll.png" tabindex="0" loading="lazy"><figcaption>PriorityQueue_poll.png</figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public E poll() {
    if (size == 0)
        return null;
    int s = --size;
    modCount++;
    E result = (E) queue[0];//0下标处的那个元素就是最小的那个
    E x = (E) queue[s];
    queue[s] = null;
    if (s != 0)
        siftDown(0, x);//调整
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 上述代码首先记录<code>0</code>下标处的元素，并用最后一个元素替换<code>0</code>下标位置的元素，之后调用<code>siftDown()</code>方法对堆进行调整，最后返回原来<code>0</code>下标处的那个元素(也就是最小的那个元素)。重点是<code>siftDown(int k, E x)</code>方法，该方法的作用是<strong>从<code>k</code>指定的位置开始，将<code>x</code>逐层向下与当前点的左右孩子中较小的那个交换，直到<code>x</code>小于或等于左右孩子中的任何一个为止</strong>。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//siftDown()
private void siftDown(int k, E x) {
    int half = size &gt;&gt;&gt; 1;
    while (k &lt; half) {
    	//首先找到左右孩子中较小的那个，记录到c里，并用child记录其下标
        int child = (k &lt;&lt; 1) + 1;//leftNo = parentNo*2+1
        Object c = queue[child];
        int right = child + 1;
        if (right &lt; size &amp;&amp;
            comparator.compare((E) c, (E) queue[right]) &gt; 0)
            c = queue[child = right];
        if (comparator.compare(x, (E) c) &lt;= 0)
            break;
        queue[k] = c;//然后用c取代原来的值
        k = child;
    }
    queue[k] = x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="remove-object-o" tabindex="-1"><a class="header-anchor" href="#remove-object-o" aria-hidden="true">#</a> remove(Object o)</h4><p>​ <code>remove(Object o)</code>方法用于删除队列中跟<code>o</code>相等的某一个元素(如果有多个相等，只删除一个)，该方法不是<code>Queue</code>接口内的方法，而是<code>Collection</code>接口的方法。由于删除操作会改变队列结构，所以要进行调整；又由于删除元素的位置可能是任意的，所以调整过程比其它函数稍加繁琐。具体来说，<code>remove(Object o)</code>可以分为2种情况: 1. 删除的是最后一个元素。直接删除即可，不需要调整。2. 删除的不是最后一个元素，从删除点开始以最后一个元素为参照调用一次<code>siftDown()</code>即可。此处不再赘述。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/PriorityQueue_remove2.png" alt="PriorityQueue_remove2.png" tabindex="0" loading="lazy"><figcaption>PriorityQueue_remove2.png</figcaption></figure><p>具体代码如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//remove(Object o)
public boolean remove(Object o) {
	//通过遍历数组的方式找到第一个满足o.equals(queue[i])元素的下标
    int i = indexOf(o);
    if (i == -1)
        return false;
    int s = --size;
    if (s == i) //情况1
        queue[i] = null;
    else {
        E moved = (E) queue[s];
        queue[s] = null;
        siftDown(i, moved);//情况2
        ......
    }
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="b树与b-树" tabindex="-1"><a class="header-anchor" href="#b树与b-树" aria-hidden="true">#</a> B树与B+树</h2><h3 id="b树" tabindex="-1"><a class="header-anchor" href="#b树" aria-hidden="true">#</a> B树</h3>`,28),v=e("strong",null,"B树",-1),m={href:"https://en.wikipedia.org/wiki/Tree_data_structure",target:"_blank",rel:"noopener noreferrer"},b={href:"https://en.wikipedia.org/wiki/Logarithmic_time",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",rel:"noopener noreferrer"},h={href:"https://en.wikipedia.org/wiki/B-tree#cite_note-Comer-1",target:"_blank",rel:"noopener noreferrer"},f={href:"https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree",target:"_blank",rel:"noopener noreferrer"},x={href:"https://en.wikipedia.org/wiki/Database",target:"_blank",rel:"noopener noreferrer"},y={href:"https://en.wikipedia.org/wiki/File_system",target:"_blank",rel:"noopener noreferrer"},k=a('<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><p>B树是一种平衡的多叉树，通常我们说m阶的B树，它必须满足如下条件：</p><ul><li>每个节点最多只有m个子节点。</li><li>每个非叶子节点（除了根）具有至少[m/2]子节点。</li><li>如果根不是叶节点，则根至少有两个子节点。</li><li>具有<em>k</em>个子节点的非叶节点包含<code>k-1</code>个键。</li><li>所有叶子都出现在同一水平，没有任何信息（高度一致）。</li></ul><h3 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树" aria-hidden="true">#</a> B+树</h3><p>B+树是应文件系统所需而产生的B树的变形树，那么可能一定会想到，既然有了B树，又出一个B+树，那B+树必然是有很多优点的。</p><p><strong>B+树的特征：</strong></p><ul><li>有m个子树的中间节点包含有m个元素（B树中是k-1个元素），每个元素不保存数据，只用来索引；</li><li>所有的叶子结点中包含了全部关键字的信息，及指向含有这些关键字记录的指针，且叶子结点本身依关键字的大小自小而大的顺序链接。 (而B 树的叶子节点并没有包括全部需要查找的信息)；</li><li>所有的非终端结点可以看成是索引部分，结点中仅含有其子树根结点中最大（或最小）关键字。 (而B 树的非终节点也包含需要查找的有效信息)；</li></ul><p><strong>为什么说B+树比B树更适合数据库索引？</strong></p><ol><li>B+树的磁盘读写代价更低</li></ol><p>​ B+树的内部结点并没有指向关键字具体信息的指针。因此其内部结点相对B 树更小。如果把所有同一内部结点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多。一次性读入内存中的需要查找的关键字也就越多。相对来说IO读写次数也就降低了；</p><ol start="2"><li>B+树查询效率更加稳定</li></ol><p>​ 由于非终结点并不是最终指向文件内容的结点，而只是叶子结点中关键字的索引。所以任何关键字的查找必须走一条从根结点到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当；</p><ol start="3"><li>B+树便于范围查询（最重要的原因，范围查找是数据库的常态）</li></ol><p>​ B树在提高了IO性能的同时并没有解决元素遍历的我效率低下的问题，正是为了解决这个问题，B+树应用而生。B+树只需要去遍历叶子节点就可以实现整棵树的遍历。而且在数据库中基于范围的查询是非常频繁的，而B树不支持这样的操作或者说效率太低。补充：B树的范围查找用的是中序遍历，而B+树用的是在链表上遍历；</p><p>​ B+树如下：</p>',15),_={href:"https://github.com/wardseptember/notes/blob/master/imgs/20200926212656.png",target:"_blank",rel:"noopener noreferrer"},O=e("img",{src:"https://raw.githubusercontent.com/nocetfy/image/main/img/20200926212656.png",alt:"",tabindex:"0",loading:"lazy"},null,-1),B=e("figcaption",null,null,-1),E={href:"https://github.com/wardseptember/notes/blob/master/imgs/20200926212831.png",target:"_blank",rel:"noopener noreferrer"},w=e("img",{src:"https://raw.githubusercontent.com/nocetfy/image/main/img/20200926212831.png",alt:"",tabindex:"0",loading:"lazy"},null,-1),C=e("figcaption",null,null,-1),L={href:"https://github.com/wardseptember/notes/blob/master/imgs/20200926213019.png",target:"_blank",rel:"noopener noreferrer"},K=e("img",{src:"https://raw.githubusercontent.com/nocetfy/image/main/img/20200926213019.png",alt:"",tabindex:"0",loading:"lazy"},null,-1),M=e("figcaption",null,null,-1),R=a('<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li><strong>B+树最大的性能问题是会产生大量的随机IO</strong>，随着新数据的插入，叶子节点会慢慢分裂，逻辑上连续的叶子节点在物理上往往不连续，甚至分离的很远，但做范围查询时，会产生大量读随机IO。对于大量的随机写也一样，举一个插入key跨度很大的例子，如7-&gt;1000-&gt;3-&gt;2000 ... 新插入的数据存储在磁盘上相隔很远，会产生大量的随机写IO。</li><li>在写操作比较多的大数据场景，<strong>页分裂会导致B+树的写入性能极其不稳定</strong>。</li></ul><h4 id="为什么选用b-树作为索引的数据结构" tabindex="-1"><a class="header-anchor" href="#为什么选用b-树作为索引的数据结构" aria-hidden="true">#</a> 为什么选用B+树作为索引的数据结构</h4><ul><li>哈希虽然能够提供 <code>O(1)</code> 的单数据行操作性能，但是对于范围查询和排序却无法很好地支持，最终导致全表扫描。</li><li>B 树能够在非叶节点中存储数据，但是这也导致在查询连续数据时可能会带来更多的随机 I/O，而 B+ 树的所有叶节点可以通过指针相互连接，能够减少顺序遍历时产生的额外随机 I/O。</li></ul><hr><h2 id="跳表" tabindex="-1"><a class="header-anchor" href="#跳表" aria-hidden="true">#</a> 跳表</h2>',6),q=e("p",null,[i("​ 跳表（skip list）对表的是平衡树（AVL Tree）和 二分查找，是一种插入/删除/搜索都是"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"l"),e("mi",null,"o"),e("mi",null,"g"),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(logn)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord mathnormal"},"o"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])]),i("的数据结构。1989年出现。它的最大优势是原理简单、容易实现、方便扩展、效率更高。因此在一些热门的项目里用来替代平衡树，如 "),e("code",null,"Redis"),i("、"),e("code",null,"LevelDB"),i("等。")],-1),A=a('<p><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/eaaf8a2e5ad64eff95d9cb5c713a3be9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="" loading="lazy"> 从图中可以看到， 跳跃表主要由以下部分构成：</p><ul><li>表头（head）：负责维护跳跃表的节点指针。</li><li>跳跃表节点：保存着元素值，以及多个层。</li><li>层：保存着指向其他元素的指针。高层的指针越过的元素数量大于等于低层的指针，为了提高查找的效率，程序总是从高层先开始访问，然后随着元素值范围的缩小，慢慢降低层次。</li><li>表尾：全部由 NULL 组成，表示跳跃表的末尾。</li></ul><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/v2-168fd46e635c1ded44dc317a67ce64e5_r.jpg" alt="img" style="zoom:50%;"><p>​ 最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。跳表内的所有链表的元素都是排序的。查找时，可以从顶级链表开始找。一旦发现被查找的元素大于当前链表中的取值，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。如下图所示，在跳表中查找元素18。</p><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/v2-826bc3af79e9f828eaa22254535282b5_r.jpg" alt="img" style="zoom:50%;"><h4 id="插入元素" tabindex="-1"><a class="header-anchor" href="#插入元素" aria-hidden="true">#</a> 插入元素</h4><p>​ 工程中的跳表并不严格要求索引层结点数量遵循2:1的关系，因为这种要求将导致插入和删除数据时的调整，成本很大。跳表的每个插入的结点在插入时进行选择是否作为索引结点，如果作为索引结点则<strong>随机</strong>出层数，整个过程都是基于概率的，但是在大数据量时却能很好地解决索引层数和结点数的权衡。</p><p><strong>跳表元素17插入</strong></p><p>链表的插入和删除是结合搜索过程完成的，贴一张William Pugh在论文中给出的在跳表中插入元素17的过程图(暂时忽略结点17是否作为索引结点以及索引层数，后面会详细说明)：</p><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/e798b9f07ec7ee65962ef6ce166c4ca7_r.jpg" alt="img" align="left" style="zoom:67%;"><p><strong>跳表元素1删除</strong></p><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/b5eb2d8f4f0fd829336749607958f856.png" align="left"><p>跳表元素的删除与普通链表相比增加了索引层的判断，如果结点是非索引结点则正常处理，如果结点是索引结点那边需要进行索引层结点的处理。</p><p><strong>跳表结点的平均层数</strong></p><p>我们很容易看出，产生越高的节点层数出现概率越低，无论如何层数总是满足幂次定律越大的数出现的概率越小。</p><p>如果某件事的发生频率和它的某个属性成幂关系，那么这个频率就可以称之为符合幂次定律。</p><p>幂次定律的表现是少数几个事件的发生频率占了整个发生频率的大部分， 而其余的大多数事件只占整个发生频率的一个小部分。</p><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/946ba1696f702ea1e435e22e32c7406a.png" align="left"><p>幂次定律应用到跳表的随机层数来说就是大部分的节点层数都是黄色部分，只有少数是绿色部分，并且概率很低。</p><hr><h2 id="bitmap-bloomfilter" tabindex="-1"><a class="header-anchor" href="#bitmap-bloomfilter" aria-hidden="true">#</a> BitMap &amp; BloomFilter</h2><p>布隆在1970年提出了布隆过滤器(Bloom Filter)，是一个很长的二进制向量(可以想象成一个序列)和一系列随机映射函数(hash function)。可用于判断一个元素是否在一个集合中，查询效率很高(1-N，最优能逼近于1)。通常应用在一些需要快速判断某个元素是否属于集合，但是并不严格要求100%正确的场合。</p><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><ul><li><code>优点</code>: 占用空间小，查询快</li><li><code>缺点</code>: 有误判(哈希冲突导致)，删除困难</li></ul><h4 id="bitset-实现方式" tabindex="-1"><a class="header-anchor" href="#bitset-实现方式" aria-hidden="true">#</a> BitSet 实现方式</h4><p>创建一个m位BitSet，先将所有位初始化为0，然后选择k个不同的哈希函数。第i个哈希函数对字符串str哈希的结果记为h(i，str)，且h(i，str)的范围是0到m-1 。</p><ul><li>加入字符串过程</li></ul><p>下面是每个字符串处理的过程，首先是将字符串str“记录”到BitSet中的过程: 对于字符串str，分别计算h(1，str)，h(2，str)…… h(k，str)。然后将BitSet的第h(1，str)、h(2，str)…… h(k，str)位设为1。这样就将字符串str映射到BitSet中的k个二进制位了。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/alg-dst-bloomfilter-0.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>检查字符串是否存在的过程</li></ul><p>下面是检查字符串str是否被BitSet记录过的过程: 对于字符串str，分别计算h(1，str)，h(2，str)…… h(k，str)。然后检查BitSet的第h(1，str)、h(2，str)…… h(k，str)位是否为1，若其中任何一位不为1则可以判定str一定没有被记录过。若全部位都是1，则“认为”字符串str存在。 若一个字符串对应的Bit不全为1，则可以肯定该字符串一定没有被Bloom Filter记录过。(这是显然的，因为字符串被记录过，其对应的二进制位肯定全部被设为1了)。</p><hr><h2 id="外排序" tabindex="-1"><a class="header-anchor" href="#外排序" aria-hidden="true">#</a> 外排序</h2><blockquote><p>外排序, 即借助外部存储进行排序.</p></blockquote><ul><li><code>适用范围</code>: 大数据的排序，去重</li><li><code>基本原理及要点</code>: 外排序的归并方法，置换选择败者树原理，最优归并树</li></ul><p><strong>输入</strong>：一个最多含有n个不重复的正整数（也就是说可能含有少于n个不重复正整数）的文件，其中每个数都小于等于n，且n=10^7（1000万个）。</p><p><strong>输出</strong>：得到按从小到大升序排列的包含所有输入的整数的列表。</p><p><strong>条件</strong>：最多有大约1MB的内存空间可用，但磁盘空间足够。且要求运行时间在5分钟以下，10秒为最佳结果。</p><h3 id="位图排序法" tabindex="-1"><a class="header-anchor" href="#位图排序法" aria-hidden="true">#</a> 位图排序法</h3><blockquote><p>针对我们的10^7个数据量的磁盘文件排序问题，我们可以这么考虑，由于每个7位十进制整数表示一个小于1000万的整数。我们可以使用一个具有1000万个位的字符串来表示这个文件，其中，当且仅当整数i在文件中存在时，第i位为1。</p></blockquote><h3 id="多路归并排序" tabindex="-1"><a class="header-anchor" href="#多路归并排序" aria-hidden="true">#</a> 多路归并排序</h3><blockquote><p>假设文件中整数个数为N(N是亿级的)，整数之间用空格分开。首先分多次从该文件中读取M（十万级）个整数，每次将M个整数在内存中使用内部排序之后存入临时文件，这样就得到多个外部文件，对应于多个外部文件，我们可以利用多路归并将各个临时文件中的数据一边读入内存，一边进行归并输出到输出文件。显然，该排序算法需要对每个整数做2次磁盘读和2次磁盘写。</p></blockquote><p><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/alg-bigdata-out-sort-0-20230222033525971.png" alt="" loading="lazy"><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/alg-bigdata-out-sort-0.png" alt="" loading="lazy"></p><h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20230222033820140.png" alt="image-20230222033820140" align="left" style="zoom:50%;"><ul><li>统计40亿个整数中出现次数最多的数，只有1G内存，磁盘无限制。</li></ul><blockquote><p><strong>我们可以使用哈希函数对 40 亿个数字进行分类这种方式</strong>。具体步骤如下：</p><ol><li><p>在磁盘上申请 100 个文件（具体申请多少个文件视情况而定）</p></li><li><p>对 40 亿个数依次进行遍历，对遍历到的数字用哈希函数计算出一个哈希值，然后在模除文件的个数，也就是 <code>% 100</code> ，这样就能均匀的分配到 100 个文件中（相等的数他们的哈希值肯定是一样的，所以一样的数肯定能保存到一个文件中）</p></li><li><p>依次对 100 个文件进行统计，统计每个文件中出现最多的数字，如何统计呢？我们可以使用哈希表进行统计，<code>key</code> 还是数字，<code>value</code> 还是出现次数。正常情况下，文件中的数大概是 <code>40 亿 / 100</code> 个，也就是只占用 <code>32 GB / 100 = 0.32 GB</code>，内存足够。</p></li><li><p>再用一个哈希表保存每个文件出现最多的数字和出现次数（也就是只保存 100 个数）。然后再依次遍历哈希表，找出现次数最大值即可。</p></li></ol><p>注意：假设出现最差情况，一个数出现了 <code>40 亿 - 1</code> 次，这意味着一个文件中保持了将近 40 亿个数，也就是 32 GB 左右，但是也没事。我们统计的时候是分批读入数字，并且哈希表肯定不会溢出，因为你保存的本来就是 <strong>数字 + 出现次数</strong>，假设 2 出现了 40 亿次，我们在哈希表中就记录 <code>2 : 40 亿</code> 不就行了吗，也就是只记录一个数就行了。</p></blockquote><ul><li><p>假设有40亿个整是，统计0 ~ 42亿范围中没出现过的次数，最多使用1G内存。</p><ul><li>进阶：内存限制为10M，但只找出一个数即可。</li></ul><blockquote><p><strong>我们可以使用位图的方式来做，也就是</strong> <code>bitMap</code>。具体步骤如下：</p><ol><li><p>我们用 1 <code>bit</code> 来表示数字是否出现过，也就是说我们可以开<code> int[ 42 亿 / 8]</code> 这么大的数组（一个 Byte = 8 bit），这里的 42 亿是范围，其实意思就是说我们的思路没有变化，只是换了一种数据的存储方式。空间占用：<code>42 亿 Byte / 8</code>，大概是 500 多 MB，满足条件。</p></li><li><p>然后遍历这 40 亿个数，依次在对应的 bit 位上标为 1。</p></li><li><p>最后统计我们开的数组，bit 位上为 0 的就是没出现过的。</p></li></ol><h5 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h5><p>​ <strong>我们可以使用范围划分的方式</strong>。具体步骤如下：</p><ol><li><p>10 MB 大概可以申请 <code>int[2621440]</code> 这么多数组空间，计算方式：10 MB / 4Byte = 2621440</p></li><li><p>划分份数：42 亿 / 2621440 大概等于 1638，假设这个数组名为 arr，arr[0] 就代表 0 ~ 1637 这个范围出现的数字的个数，同理 arr[1] 就代表 1638~ (1638+ 1638- 1) 这个范围出现的数字的个数。也就是类似于词频统计。</p></li><li><p>依次遍历这 40 亿个数，<code>arr[每个数 / 1638]++</code>，也就是说 0 就是 arr[0]++，1638就是 arr[1]++，其实思路就是把范围划分成 1638份，每份统计对应的数字个数，如果对应的数字个数小于 1638，说明在这个范围内肯定有数字没出现过</p></li><li><p>重复此过程，将范围逐渐缩小即可求出答案。</p></li></ol></blockquote></li><li><p>有一个包含100亿个URL的大文件，找出所有重复的URL</p></li></ul><blockquote><p>第一种办法：使用哈希函数进行分类。</p><ol><li><p>申请 N 个磁盘文件</p></li><li><p>遍历所有的 URL，为每个 URL 计算哈希值，然后再模除 N，就能均匀地分类到对应的文件中，重复的 URL 一定会在同一个文件中。</p></li><li><p>依次统计每一个文件中重复的 URL，然后再汇总各个文件的信息即可。</p></li></ol><p>第二种办法：使用布隆过滤器。会有失误率，不过概率很低。</p><ol><li><p>首先申请一个足够大的 bitMap，便建立边检查是否重复</p></li><li><p>遍历所有的 URL，遍历到一个 URL，就通过某种哈希函数计算它的哈希值，然后再模除 bitMap 的位数。</p></li><li><p>如果发现对应的槽位已经为 1 （初始都是为 0，一个 bit 位就两种状态，0 和 1），就说明这个 URL 是重复的。</p></li><li><p>如果发现对应的槽位为 0，说明不重复，将槽位置为 1。</p></li></ol><p>可以发现，如果重复的 URL 一定能找出来，但是可能不重复的 URL 也被找出来了（这也就是失误率，因为哈希冲突），如果可以允许有一定的失误率就可以使用这种办法。</p></blockquote><ul><li>百亿数据量中找出热门TOP100</li></ul><blockquote><p>​ 首先遍历大文件，对遍历到的每个词x，执行 <code>hash(x) % 5000</code>，将结果为 i 的词存放到文件 ai 中。遍历结束后，我们可以得到 5000 个小文件。每个小文件的大小为 200KB 左右。如果有的小文件大小仍然超过 1MB，则采用同样的方式继续进行分解。</p><p>接着统计每个小文件中出现频数最高的 100 个词。最简单的方式是使用 HashMap 来实现。其中 key 为词，value 为该词出现的频率。具体方法是：对于遍历到的词 x，如果在 map 中不存在，则执行 <code>map.put(x, 1)</code>；若存在，则执行 <code>map.put(x, map.get(x)+1)</code>，将该词频数加 1。</p><p>上面我们统计了每个小文件单词出现的频数。接下来，我们可以通过维护一个<strong>小顶堆</strong>来找出所有词中出现频数最高的 100 个。具体方法是：依次遍历每个小文件，构建一个<strong>小顶堆</strong>，堆大小为 100。如果遍历到的词的出现次数大于堆顶词的出现次数，则用新词替换堆顶的词，然后重新调整为<strong>小顶堆</strong>，遍历结束后，小顶堆上的词就是出现频数最高的 100 个词。</p><ol><li>分而治之，进行哈希取余；</li><li>使用 HashMap 统计频数；</li><li>求解<strong>最大</strong>的 TopN 个，用<strong>小顶堆</strong>；求解<strong>最小</strong>的 TopN 个，用<strong>大顶堆</strong>。</li></ol></blockquote><ul><li>40亿个数中只出现了两次的数</li></ul><blockquote><p>第一种方式：哈希函数。</p><ol><li><p>通过哈希函数对 40 亿个数进行分流，分到一个个小文件中。</p></li><li><p>依次用哈希表统计每个小文件中只出现了两次的数。</p></li><li><p>然后再汇总各个文件中只出现了两次的数即可。</p></li></ol><p>第二种方式：bitMap。</p><ol><li><p>正常来说我们都是用 1 bit 来表示对应的数字是否出现过，对应这个题目，我们可以变化一下。</p></li><li><p>用 2 bit 来表示对应的数字，<code>00</code> 代表这个数没有出现过，<code>01</code> 代表这个数出现过一次，<code>10</code> 代表这个数出现过两次，<code>11</code> 代表这个数出现了两次以上。</p></li><li><p>容量大概使用：40 亿大概就是 232，所以就是 232 * 2 bit / 8 ，大概就是 1 GB 左右。</p></li></ol></blockquote><ul><li>5亿个整数，寻找中位数，只有10MB内存</li></ul><blockquote><p>​ 顺序读取这 5 亿个数字，对于读取到的数字 num，如果它对应的二进制中最高位为1，则把这个数字写到 f1 中，否则写入 f0 中。通过这一步，可以把这 5 亿个数划分为两部分，而且 f0 中的数都大于 f1 中的数（最高位是符号位）。</p><p>划分之后，可以非常容易地知道中位数是在 f0 还是 f1 中。假设 f1 中有 1 亿个数，那么中位数一定在 f0 中，且是在 f0 中，从小到大排列的第 1.5 亿个数与它后面的一个数的平均值。</p><blockquote><p><strong>提示</strong>，5 亿数的中位数是第 2.5 亿与右边相邻一个数求平均值。若 f1 有一亿个数，那么中位数就是 f0 中从第 1.5 亿个数开始的两个数求得的平均值。</p></blockquote><p>对于 f0 可以用次高位的二进制继续将文件一分为二，如此划分下去，直到划分后的文件可以被加载到内存中，把数据加载到内存中以后直接排序，找出中位数。</p><blockquote><p><strong>注意</strong>，当数据总数为偶数，如果划分后两个文件中的数据有相同个数，那么中位数就是数据较小的文件中的最大值与数据较大的文件中的最小值的平均值。</p></blockquote></blockquote><hr>',56);function J(z,T){const n=d("ExternalLinkIcon");return s(),t("div",null,[c,p,u,e("p",null,[i("​ "),v,i("是一种自平衡"),e("a",m,[i("树数据结构"),l(n)]),i("，它维护有序数据并允许以"),e("a",b,[i("对数时间"),l(n)]),i("进行搜索，顺序访问，插入和删除。B树是"),e("a",g,[i("二叉搜索树"),l(n)]),i("的一般化，因为节点可以有两个以上的子节点。["),e("a",h,[i("1]"),l(n)]),i("与其他"),e("a",f,[i("自平衡二进制搜索树不同"),l(n)]),i("，B树非常适合读取和写入相对较大的数据块（如光盘）的存储系统。它通常用于"),e("a",x,[i("数据库"),l(n)]),i("和"),e("a",y,[i("文件系统"),l(n)]),i("。")]),k,e("figure",null,[e("a",_,[O,l(n)]),B]),e("figure",null,[e("a",E,[w,l(n)]),C]),e("figure",null,[e("a",L,[K,l(n)]),M]),R,q,A])}const V=r(o,[["render",J],["__file","数据结构.html.vue"]]);export{V as default};
