const e=JSON.parse('{"key":"v-1ec07d98","path":"/interview/Java/Java%20Thread.html","title":"Java 并发","lang":"zh-CN","frontmatter":{"description":"Java 并发 [toc] 并发 JMM(Java 内存模型) JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。 并发编程下，像 CPU 多级缓存和指令重排这类设计可能会导致程序运行出现一些问题。就比如说我们上面提到的指令重排序就可能会让多线程程序的执行出现问题，为此，JMM 抽象了 happens-before 原则来解决这个指令重排序问题。 JMM 说白了就是定义了一些规范来解决这些问题，开发者可以利用这些规范更方便地开发多线程程序。对于 Java 开发者说，你不需要了解底层原理，直接使用并发相关的一些关键字和类（比如 volatile、synchronized、各种 Lock）即可开发出并发安全的程序。","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/interview/Java/Java%20Thread.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"Java 并发"}],["meta",{"property":"og:description","content":"Java 并发 [toc] 并发 JMM(Java 内存模型) JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。 并发编程下，像 CPU 多级缓存和指令重排这类设计可能会导致程序运行出现一些问题。就比如说我们上面提到的指令重排序就可能会让多线程程序的执行出现问题，为此，JMM 抽象了 happens-before 原则来解决这个指令重排序问题。 JMM 说白了就是定义了一些规范来解决这些问题，开发者可以利用这些规范更方便地开发多线程程序。对于 Java 开发者说，你不需要了解底层原理，直接使用并发相关的一些关键字和类（比如 volatile、synchronized、各种 Lock）即可开发出并发安全的程序。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 并发\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[{"level":3,"title":"JMM(Java 内存模型)","slug":"jmm-java-内存模型","link":"#jmm-java-内存模型","children":[]},{"level":3,"title":"线程与线程池","slug":"线程与线程池","link":"#线程与线程池","children":[]},{"level":3,"title":"关键字","slug":"关键字","link":"#关键字","children":[]},{"level":3,"title":"AQS","slug":"aqs","link":"#aqs","children":[]},{"level":3,"title":"CAS","slug":"cas","link":"#cas","children":[]},{"level":3,"title":"Unsafe","slug":"unsafe","link":"#unsafe","children":[]},{"level":3,"title":"常用工具与场景","slug":"常用工具与场景","link":"#常用工具与场景","children":[]},{"level":3,"title":"数据的删除","slug":"数据的删除","link":"#数据的删除","children":[]}]}],"git":{},"readingTime":{"minutes":148.62,"words":44586},"filePathRelative":"interview/Java/Java Thread.md","excerpt":"<h1> Java 并发</h1>\\n<p>[toc]</p>\\n<h2> 并发</h2>\\n<h3> JMM(Java 内存模型)</h3>\\n<p>JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。</p>\\n<p>并发编程下，像 CPU 多级缓存和指令重排这类设计可能会导致程序运行出现一些问题。就比如说我们上面提到的指令重排序就可能会让多线程程序的执行出现问题，为此，JMM 抽象了 happens-before 原则来解决这个指令重排序问题。</p>\\n<p>JMM 说白了就是定义了一些规范来解决这些问题，开发者可以利用这些规范更方便地开发多线程程序。对于 Java 开发者说，你不需要了解底层原理，直接使用并发相关的一些关键字和类（比如 <code>volatile</code>、<code>synchronized</code>、各种 <code>Lock</code>）即可开发出并发安全的程序。</p>","autoDesc":true}');export{e as data};