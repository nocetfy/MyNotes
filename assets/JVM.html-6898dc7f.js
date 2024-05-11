const e=JSON.parse('{"key":"v-c6904a04","path":"/interview/Java/JVM.html","title":"JVM","lang":"zh-CN","frontmatter":{"description":"JVM [toc] JVM内存模型 运行时数据区 ​\\t内存是非常重要的系统资源，是硬盘和 CPU 的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略，保证了 JVM 的高效稳定运行。不同的 JVM 对于内存的划分方式和管理机制存在着部分差异。 下图是 JVM 整体架构，中间部分就是 Java 虚拟机定义的各种运行时数据区域。","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/interview/Java/JVM.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"JVM"}],["meta",{"property":"og:description","content":"JVM [toc] JVM内存模型 运行时数据区 ​\\t内存是非常重要的系统资源，是硬盘和 CPU 的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略，保证了 JVM 的高效稳定运行。不同的 JVM 对于内存的划分方式和管理机制存在着部分差异。 下图是 JVM 整体架构，中间部分就是 Java 虚拟机定义的各种运行时数据区域。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JVM内存模型","slug":"jvm内存模型","link":"#jvm内存模型","children":[{"level":3,"title":"运行时数据区","slug":"运行时数据区","link":"#运行时数据区","children":[]},{"level":3,"title":"类的生命周期","slug":"类的生命周期","link":"#类的生命周期","children":[]},{"level":3,"title":"类的加载：查找并加载类的二进制数据","slug":"类的加载-查找并加载类的二进制数据","link":"#类的加载-查找并加载类的二进制数据","children":[]},{"level":3,"title":"程序计数器","slug":"程序计数器","link":"#程序计数器","children":[]},{"level":3,"title":"虚拟机栈","slug":"虚拟机栈","link":"#虚拟机栈","children":[]},{"level":3,"title":"本地方法栈","slug":"本地方法栈","link":"#本地方法栈","children":[]},{"level":3,"title":"堆内存","slug":"堆内存","link":"#堆内存","children":[]},{"level":3,"title":"方法区","slug":"方法区","link":"#方法区","children":[]}]},{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[{"level":3,"title":"动态绑定","slug":"动态绑定","link":"#动态绑定","children":[]},{"level":3,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]}]},{"level":2,"title":"JMM内存模型","slug":"jmm内存模型","link":"#jmm内存模型","children":[]},{"level":2,"title":"GC ROOTS","slug":"gc-roots","link":"#gc-roots","children":[]},{"level":2,"title":"三色标记","slug":"三色标记","link":"#三色标记","children":[{"level":3,"title":"多标与漏标问题","slug":"多标与漏标问题","link":"#多标与漏标问题","children":[]},{"level":3,"title":"漏标解决方案","slug":"漏标解决方案","link":"#漏标解决方案","children":[]}]}],"git":{},"readingTime":{"minutes":66.8,"words":20039},"filePathRelative":"interview/Java/JVM.md","excerpt":"<h1> JVM</h1>\\n<p>[toc]</p>\\n<h2> JVM内存模型</h2>\\n<h3> 运行时数据区</h3>\\n<p>​\\t内存是非常重要的系统资源，是硬盘和 CPU 的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略，保证了 JVM 的高效稳定运行。不同的 JVM 对于内存的划分方式和管理机制存在着部分差异。</p>\\n<p>下图是 JVM 整体架构，中间部分就是 Java 虚拟机定义的各种运行时数据区域。</p>\\n<figure><img src=\\"https://raw.githubusercontent.com/nocetfy/image/main/img/20230223235458.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
