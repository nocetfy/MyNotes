const e=JSON.parse('{"key":"v-06ce96d9","path":"/interview/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F.html","title":"分布式","lang":"zh-CN","frontmatter":{"description":"分布式 [toc] 基础 ​\\tCAP 定理，简单的说就是分布式系统不可能同时满足 Consistency 一致性、Availability 可用性、Partition Tolerance 分区容错性三个要素。因为 Consistency、Availability 、Partition Tolerance 这三个单词的首字母分别是 C、A、P，所以这个结论被称为 CAP 定理。","head":[["meta",{"property":"og:url","content":"https://newzone.top/MyNotes/interview/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"nocetfy"}],["meta",{"property":"og:title","content":"分布式"}],["meta",{"property":"og:description","content":"分布式 [toc] 基础 ​\\tCAP 定理，简单的说就是分布式系统不可能同时满足 Consistency 一致性、Availability 可用性、Partition Tolerance 分区容错性三个要素。因为 Consistency、Availability 、Partition Tolerance 这三个单词的首字母分别是 C、A、P，所以这个结论被称为 CAP 定理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"一致性算法","slug":"一致性算法","link":"#一致性算法","children":[{"level":3,"title":"Paxos","slug":"paxos","link":"#paxos","children":[]},{"level":3,"title":"Raft","slug":"raft","link":"#raft","children":[]},{"level":3,"title":"Gossip","slug":"gossip","link":"#gossip","children":[]}]},{"level":2,"title":"全局唯一ID","slug":"全局唯一id","link":"#全局唯一id","children":[{"level":3,"title":"UUID","slug":"uuid","link":"#uuid","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"数据库分段+服务缓存ID","slug":"数据库分段-服务缓存id","link":"#数据库分段-服务缓存id","children":[]},{"level":3,"title":"雪花算法","slug":"雪花算法","link":"#雪花算法","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]}]},{"level":2,"title":"分布式锁","slug":"分布式锁","link":"#分布式锁","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"数据库锁","slug":"数据库锁","link":"#数据库锁","children":[]},{"level":3,"title":"Redis锁","slug":"redis锁","link":"#redis锁","children":[]},{"level":3,"title":"zookeeper锁","slug":"zookeeper锁","link":"#zookeeper锁","children":[]}]},{"level":2,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[{"level":3,"title":"2PC","slug":"_2pc","link":"#_2pc","children":[]},{"level":3,"title":"3PC","slug":"_3pc","link":"#_3pc","children":[]},{"level":3,"title":"TCC","slug":"tcc","link":"#tcc","children":[]},{"level":3,"title":"本地消息表","slug":"本地消息表","link":"#本地消息表","children":[]},{"level":3,"title":"MQ 事务","slug":"mq-事务","link":"#mq-事务","children":[]}]},{"level":2,"title":"分布式Session","slug":"分布式session","link":"#分布式session","children":[{"level":3,"title":"粘性 Session","slug":"粘性-session","link":"#粘性-session","children":[]},{"level":3,"title":"Session 复制共享","slug":"session-复制共享","link":"#session-复制共享","children":[]},{"level":3,"title":"基于缓存的 session 共享","slug":"基于缓存的-session-共享","link":"#基于缓存的-session-共享","children":[]},{"level":3,"title":"具体实现","slug":"具体实现","link":"#具体实现","children":[]}]}],"git":{},"readingTime":{"minutes":35.14,"words":10541},"filePathRelative":"interview/分布式/分布式.md","excerpt":"<h1> 分布式</h1>\\n<p>[toc]</p>\\n<h2> 基础</h2>\\n<figure><img src=\\"https://raw.githubusercontent.com/nocetfy/image/main/img/CgpOIF3vcYSAMqOZAABvnmKZkwc008.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>​\\tCAP 定理，简单的说就是分布式系统不可能同时满足 Consistency 一致性、Availability 可用性、Partition Tolerance 分区容错性三个要素。因为 Consistency、Availability 、Partition Tolerance 这三个单词的首字母分别是 C、A、P，所以这个结论被称为 CAP 定理。</p>","autoDesc":true}');export{e as data};
