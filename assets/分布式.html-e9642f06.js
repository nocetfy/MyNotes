import{_ as t,H as r,X as s,Y as l,Z as e,a0 as i,a1 as n,$ as o}from"./framework-47f15ee6.js";const p={},c=o('<h1 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h1><p>[toc]</p><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/CgpOIF3vcYSAMqOZAABvnmKZkwc008.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>​ CAP 定理，简单的说就是分布式系统不可能同时满足 Consistency 一致性、Availability 可用性、Partition Tolerance 分区容错性三个要素。因为 Consistency、Availability 、Partition Tolerance 这三个单词的首字母分别是 C、A、P，所以这个结论被称为 CAP 定理。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/CgpOIF3zZ3yAFW3FAACQv-4BBXE880.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>BASE 理论也包括三要素，即 Basically Availabe 基本可用、Soft state 软状态和 Eventual Consistency 最终一致性。</p>',7),d={href:"https://zq99299.github.io/note-architect/hc/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://dunwu.github.io/db-tutorial/#%F0%9F%93%96-%E5%86%85%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"},g=o(`<h2 id="一致性算法" tabindex="-1"><a class="header-anchor" href="#一致性算法" aria-hidden="true">#</a> 一致性算法</h2><h3 id="paxos" tabindex="-1"><a class="header-anchor" href="#paxos" aria-hidden="true">#</a> Paxos</h3><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20230305004031767.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="zab" tabindex="-1"><a class="header-anchor" href="#zab" aria-hidden="true">#</a> ZAB</h4><p>在一个zookeeper集群中，有三种角色：Leader、Follower、Observer(观察者)，其中Observer的角色可有可无，可在集群中手动指定。</p><p>首先看zookeeper集群的特性：</p><ol><li>读写分离，zookeeper的写通过leader，读则是从follwer节点读取。</li><li>最终一致性，zookeeper节点选举过程中集群是不可用状态。</li><li>命令原子性，只有成功就是失败，没有部分成功的说法。</li><li>集群有序或是有状态，部署过zookeeper的都会了解到对于每一个节点都需要手动分配一个集群内唯一的id（myid）。</li></ol><p>Zookeeper通过ZAB协议实现了一致性。大致原理有点类似于上面的2PC，原理图如下：</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20230305010008022.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>数据提交大致分为4步：</p><ol><li>客户端发送请求，该请求会被路由至Leader节点；</li><li>Leader存储数据，并放入一个队列中，以保证数据的顺序性，随后将消息广播给Follower；</li><li>在正常情况下follower会传递ACK给leader，表明他已经消费并存储了这条数据；</li><li>当完成3步骤的节点多于集群节点数的一半时，会返回给客户端成功的标识，反之则是失败或超时。</li></ol><p>这一步骤与2PC十分相似，如果有少数的Follower发生宕机如上的架构也不会被破坏，失去联系的节点会被标注不可用，直到网络恢复并数据同步完毕。</p><h4 id="故障恢复" tabindex="-1"><a class="header-anchor" href="#故障恢复" aria-hidden="true">#</a> 故障恢复</h4><p>很容易理解zk的Follower宕机使得集群故障时，只要等待网络回复即可。但是当Leader发生故障时呢？Zookeeper会产生单点故障问题，在Leader出现故障时，Zookeeper会重新进行Leader选举，选举规则很简单，有如下三条规则：</p><ol><li>对于上文队列中每一条成功提交的数据都按顺序分配了id，优先选举数据id最新的，就是接受到数据最多的节点为Leader；</li><li>在1的基础上，如有多个节点，选取myid最大的；</li><li>依然是过半同意才能进行选举。</li></ol><p>上文已经提到了Zookeeper任何操作都是过半同意机制（这里采取过半，是大于一半，不包含等于的情况），所以一个集群是绝非可能产生两个Master的，这种处理<strong>不存在脑裂问题</strong>。</p><hr><h3 id="raft" tabindex="-1"><a class="header-anchor" href="#raft" aria-hidden="true">#</a> Raft</h3><p>Raft 将一致性问题分解成了三个子问题：</p><ul><li><strong>选举 Leader</strong></li><li><strong>日志复制</strong></li><li><strong>安全性</strong></li></ul><p>在 Raft 中，任何时刻，每个服务器都处于这三个角色之一 ：</p><ul><li><strong><code>Leader</code></strong> - 领导者，通常一个系统中是<strong>一主（Leader）多从（Follower）</strong>。Leader <strong>负责处理所有的客户端请求</strong>。</li><li><strong><code>Follower</code></strong> - 跟随者，<strong>不会发送任何请求</strong>，只是简单的 <strong>响应来自 Leader 或者 Candidate 的请求</strong>。</li><li><strong><code>Candidate</code></strong> - 参选者，选举新 Leader 时的临时角色。</li></ul><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200131215742.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>💡 图示说明：</p><ul><li>Follower 只响应来自其他服务器的请求。在一定时限内，如果 Follower 接收不到消息，就会转变成 Candidate，并发起选举。</li><li>Candidate 向 Follower 发起投票请求，如果获得集群中半数以上的选票，就会转变为 Leader。</li><li>在一个 Term 内，Leader 始终保持不变，直到下线了。Leader 需要周期性向所有 Follower 发送心跳消息，以阻止 Follower 转变为 Candidate。</li></ul></blockquote><h4 id="任期" tabindex="-1"><a class="header-anchor" href="#任期" aria-hidden="true">#</a> 任期</h4><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/20200131220742.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Raft 把时间分割成任意长度的 <code>任期(Term)</code>，任期用连续的整数标记。每一段任期从一次<strong>选举</strong>开始。<strong>Raft 保证了在一个给定的任期内，最多只有一个领导者</strong>。</p><ul><li>如果选举成功，Leader 会管理整个集群直到任期结束。</li><li>如果选举失败，那么这个任期就会因为没有 Leader 而结束。</li></ul><p><strong>不同服务器节点观察到的任期转换状态可能不一样</strong>：</p><ul><li>服务器节点可能观察到多次的任期转换。</li><li>服务器节点也可能观察不到任何一次任期转换。</li></ul><p><strong>任期在 Raft 算法中充当逻辑时钟的作用，使得服务器节点可以查明一些过期的信息（比如过期的 Leader）。每个服务器节点都会存储一个当前任期号，这一编号在整个时期内单调的增长。当服务器之间通信的时候会交换当前任期号。</strong></p><ul><li>如果一个服务器的当前任期号比其他人小，那么他会更新自己的编号到较大的编号值。</li><li>如果一个 Candidate 或者 Leader 发现自己的任期号过期了，那么他会立即恢复成跟随者状态。</li><li>如果一个节点接收到一个包含过期的任期号的请求，那么他会直接拒绝这个请求。</li></ul><p>Raft 算法中服务器节点之间的通信使用 <code>远程过程调用（RPC）</code>。</p><p>基本的一致性算法只需要两种 RPC：</p><ul><li><strong><code>RequestVote RPC</code></strong> - 请求投票 RPC，由 Candidate 在选举期间发起。</li><li><strong><code>AppendEntries RPC</code></strong> - 附加条目 RPC，由 Leader 发起，用来复制日志和提供一种心跳机制。</li></ul><h3 id="gossip" tabindex="-1"><a class="header-anchor" href="#gossip" aria-hidden="true">#</a> Gossip</h3><p>Gossip并不适用于所有分布式场景，它是一种P2P的一致性算法，Gossip并不具有强一致性，也就是相比前面的Raft或是ZAB，他不能保证一个事务在提交成功的时刻各节点对数据认同是一致的，因此，Gossip属于最终一致算法，常规的分布式情景使用Gossip会出现偶有数据不一致的问题。</p><p>那么，Gossip是用在哪里的？Consul系统将Gossip用的淋漓尽致，我们都知道作为k-v存储系统，其选主和数据事务都使用了Raft算法，但是其WAN(多个数据中心间)、LAN(节点间)通信、故障广播使用了Gossip算法。</p><p>Gossip译为八卦，其算法也如此，可以在有限的时间内，使用较少的路由传播事件，易于扩展，Gossip去中心化，不存在单点故障的问题，其具有天然的容灾性。</p><p>Gossip的实现我们以Consul为例：</p><ol><li>每一个节点都会记录集群内部分其余随机n个节点的地址，所有被记录的节点公共集合会覆盖集群内所有机器，这样无需知道所有节点的地址。</li><li>每次收到新消息后，会将消息广播给这些地址，当然收到重复消息就不予理会了。</li><li>节点的宕机不会影响可用性和最终一致性，消息总能在合适的实际被广播出去。</li></ol><p>图例如下：</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/fpz9919agk.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样我们就很能理解它为什么不存在单点故障的问题了，去中心化的处理使得集群内有节点宕机一般不会影响到其他节点通信，一旦所有连接恢复正常，数据最终必将保持一致。譬如Consul集群中节点不可用的消息会很快被广播出去。近似随机的服务列表（我们管这个叫Gossip池）也受集群规模影响较小，用更多的通信延迟换来了较强的横向扩展性。</p><p>但是Consul中选主和数据存储却不能使用这样的协议，因为数据的提交必须保证一致。举例来说，如果Consul集群中超过一半节点通信不良，此时的集群应是部分只读状态，只读便是依靠Gossip实现的，否则便会像Zookeeper一样是不可用的，因此我们可以这样说，Consul的k-v数据是强一致性的，当过半节点宕机或进行Leader选举时不可用，但是Consul的集群状态数据是最终一致性的，当前时刻的节点故障数据可能还没有在各个节点间同步，我们在各个节点读取到的故障状态数据可能有所不同，但如果集群已经稳定下来，随着时间的推移，最终的故障数据总能一致（当然，既然被称作是最终一致，这个时间是不可预估的，当前的广播进度我们也并不知晓）。</p><hr><h2 id="全局唯一id" tabindex="-1"><a class="header-anchor" href="#全局唯一id" aria-hidden="true">#</a> 全局唯一ID</h2><p>首先，分布式 ID 应该具备哪些特性呢？</p><ol><li><strong>全局唯一性</strong> - 不能出现重复的 ID 号，既然是唯一标识，这是最基本的要求。</li><li><strong>趋势递增</strong> - 在 MySQL InnoDB 引擎中使用的是聚集索引，由于多数 RDBMS 使用 B-tree 的数据结构来存储索引数据，在主键的选择上面我们应该尽量使用有序的主键保证写入性能。</li><li><strong>单调递增</strong> - 保证下一个 ID 一定大于上一个 ID，例如事务版本号、IM 增量消息、排序等特殊需求。</li><li><strong>信息安全</strong> - 如果 ID 是连续的，恶意用户的扒取工作就非常容易做了，直接按照顺序下载指定 URL 即可；如果是订单号就更危险了，竞对可以直接知道我们一天的单量。所以在一些应用场景下，会需要 ID 无规则、不规则。</li></ol><h3 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> UUID</h3><p>UUID的优点:</p><ul><li>通过本地生成，没有经过网络I/O，性能较快</li><li>无序，无法预测他的生成顺序。(当然这个也是他的缺点之一)</li></ul><p>UUID的缺点:</p><ul><li>128位二进制一般转换成36位的16进制，太长了只能用String存储，空间占用较多。</li><li>不能生成递增有序的数字。</li></ul><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>Redis中有两个命令Incr，IncrBy,因为Redis是单线程的所以能保证原子性。</p><p>优点：</p><ul><li>性能比数据库好，能满足有序递增。</li></ul><p>缺点：</p><ul><li>由于redis是内存的KV数据库，即使有AOF和RDB，但是依然会存在数据丢失，有可能会造成ID重复。</li><li>依赖于redis，redis要是不稳定，会影响ID生成。</li></ul><h3 id="数据库分段-服务缓存id" tabindex="-1"><a class="header-anchor" href="#数据库分段-服务缓存id" aria-hidden="true">#</a> 数据库分段+服务缓存ID</h3><p>​ 每次获取一个segment(step决定大小)号段的值。用完之后再去数据库获取新的号段，可以大大的减轻数据库的压力一次按需批量生成多个ID，每次生成都需要访问数据库，将数据库修改为最大的ID值，并在内存中记录当前值及最大值一般可以借助redis实现，或使用文件，对文件加锁读写，或使用JVM堆内存。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/5e4ff128.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li>比数据库自增键性能高</li><li>能保证键趋势递增。</li><li>如果数据库宕机，由于 proxServer 有缓存，依然可以坚持一段时间。</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ul><li>和主键递增一样，容易被人猜测。</li><li>数据库宕机后，虽然能支撑一段时间，但是仍然会造成系统不可用。</li></ul><h3 id="雪花算法" tabindex="-1"><a class="header-anchor" href="#雪花算法" aria-hidden="true">#</a> 雪花算法</h3><p>雪花算法（Snowflake）是由 Twitter 公布的分布式主键生成算法，<strong>它会生成一个 <code>64 bit</code> 的整数</strong>，可以保证不同进程主键的不重复性，以及相同进程主键的有序性。</p><p>在同一个进程中，它首先是通过时间位保证不重复，如果时间相同则是通过序列位保证。 同时由于时间位是单调递增的，且各个服务器如果大体做了时间同步，那么生成的主键在分布式环境可以认为是总体有序的，这就保证了对索引字段的插入的高效性。</p><h4 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h4><h5 id="键的组成" tabindex="-1"><a class="header-anchor" href="#键的组成" aria-hidden="true">#</a> 键的组成</h5><p>使用<strong>雪花算法生成的主键，二进制表示形式包含 4 部分</strong>，从高位到低位分表为：1bit 符号位、41bit 时间戳位、10bit 工作进程位以及 12bit 序列号位。</p><ul><li><strong>符号位(1bit)</strong></li></ul><p>预留的符号位，恒为零。</p><ul><li><strong>时间戳位(41bit)</strong></li></ul><p>41 位的时间戳可以容纳的毫秒数是 2 的 41 次幂，一年所使用的毫秒数是：<code>365 * 24 * 60 * 60 * 1000</code>。通过计算可知：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">365</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果约等于 69.73 年。ShardingSphere 的雪花算法的时间纪元从 2016 年 11 月 1 日零点开始，可以使用到 2086 年，相信能满足绝大部分系统的要求。</p><ul><li><strong>工作进程位(10bit)</strong></li></ul><p>该标志在 Java 进程内是唯一的，如果是分布式应用部署应保证每个工作进程的 id 是不同的。该值默认为 0，可通过属性设置。</p><ul><li><strong>序列号位(12bit)</strong></li></ul><p>该序列是用来在同一个毫秒内生成不同的 ID。如果在这个毫秒内生成的数量超过 4096(2 的 12 次幂)，那么生成器会等待到下个毫秒继续生成。</p><p>雪花算法主键的详细结构见下图：</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/snowflake_cn_v2.png" alt="雪花算法" tabindex="0" loading="lazy"><figcaption>雪花算法</figcaption></figure><h4 id="时钟回拨" tabindex="-1"><a class="header-anchor" href="#时钟回拨" aria-hidden="true">#</a> 时钟回拨</h4><p>服务器时钟回拨会导致产生重复序列，因此默认分布式主键生成器提供了一个最大容忍的时钟回拨毫秒数。 如果时钟回拨的时间超过最大容忍的毫秒数阈值，则程序报错；如果在可容忍的范围内，默认分布式主键生成器会等待时钟同步到最后一次主键生成的时间后再继续工作。 最大容忍的时钟回拨毫秒数的默认值为 0，可通过属性设置。</p><h4 id="灵活定制" tabindex="-1"><a class="header-anchor" href="#灵活定制" aria-hidden="true">#</a> 灵活定制</h4><p>上面只是一个将 <code>64bit</code> 划分的标准，当然也不一定这么做，可以根据不同业务的具体场景来划分，比如下面给出一个业务场景：</p><ul><li>服务目前 QPS10 万，预计几年之内会发展到百万。</li><li>当前机器三地部署，上海，北京，深圳都有。</li><li>当前机器 10 台左右，预计未来会增加至百台。</li></ul><p>这个时候我们根据上面的场景可以再次合理的划分 62bit，QPS 几年之内会发展到百万，那么每毫秒就是千级的请求，目前 10 台机器那么每台机器承担百级的请求，为了保证扩展，后面的循环位可以限制到 1024，也就是 2^10，那么循环位 10 位就足够了。机器三地部署我们可以用 3bit 总共 8 来表示机房位置，当前的机器 10 台，为了保证扩展到百台那么可以用 7bit 128 来表示，时间位依然是 41bit，那么还剩下 64-10-3-7-41-1 = 2bit，还剩下 2bit 可以用来进行扩展。</p><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h4><ul><li>生成的 ID 都是趋势递增的。</li><li>不依赖数据库等第三方系统，以服务的方式部署，稳定性更高，生成 ID 的性能也是非常高的。</li><li>可以根据自身业务特性分配 bit 位，非常灵活。</li></ul><h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h4><ul><li>强依赖机器时钟，如果机器上时钟回拨，会导致发号重复或者服务会处于不可用状态。</li></ul><hr><h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>主要思路：</p><ol><li><strong>互斥、可重入</strong></li></ol><blockquote><p>​ 创建锁必须是唯一的，表现形式为向数据存储服务器或容器插入一个唯一的 key，一旦有一个线程插入这个 key，其他线程就不能再插入了。</p></blockquote><ol start="2"><li><strong>避免死锁</strong></li></ol><blockquote><p>​ 数据库分布式锁和缓存分布式锁（Redis）的思路都是引入超时机制，即成功申请锁后，超过一定时间，锁失效（删除 key），原因在于它们无法感知申请锁的客户端节点状态。而 ZooKeeper 由于其 znode 以目录、文件形式组织，天然就存在物理空间隔离，只要 znode 存在，即表示客户端节点还在工作，所以不存在这种问题。</p></blockquote><ol start="3"><li><strong>容错</strong></li></ol><blockquote><p>​ 只要大部分 Redis 节点可用，客户端就能正常加锁。</p></blockquote><ol start="4"><li><strong>自旋重试</strong></li></ol><blockquote><p>​ 获取不到锁时，不要直接返回失败，而是支持一定的周期自旋重试，设置一个总的超时时间，当过了超时时间以后还没有获取到锁则返回失败。</p></blockquote><hr><h3 id="数据库锁" tabindex="-1"><a class="header-anchor" href="#数据库锁" aria-hidden="true">#</a> 数据库锁</h3><p>可以使用行锁作为分布式锁</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>优点：</p><blockquote><ol><li>直接借助数据库，容易理解，方便使用。</li><li>可阻塞，别的线程可以进行等待获取。</li></ol></blockquote><p>缺点：</p><blockquote><ol><li>强依赖数据库的可用性。如果数据库是一个单点，一旦数据库挂掉，会导致业务系统不可用。</li><li>没有失效时间，一旦解锁操作失败，就会导致锁记录一直在数据库中，其他线程无法再获得到锁。</li><li>非重入的，同一个线程在没有释放锁之前无法再次获得该锁。因为行锁已经被占有。</li></ol></blockquote><hr><h3 id="redis锁" tabindex="-1"><a class="header-anchor" href="#redis锁" aria-hidden="true">#</a> Redis锁</h3><h4 id="setnx-set" tabindex="-1"><a class="header-anchor" href="#setnx-set" aria-hidden="true">#</a> setnx/set</h4><ul><li><code>setnx</code> - <code>setnx key val</code>：当且仅当 key 不存在时，set 一个 key 为 val 的字符串，返回 1；若 key 存在，则什么都不做，返回 0。</li><li><code>expire</code> - <code>expire key timeout</code>：为 key 设置一个超时时间，单位为 second，超过这个时间锁会自动释放，避免死锁。</li></ul><p>避免通过这种方式设置，非原子操作。通过set命令即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SET resource_name my_random_value NX PX <span class="token number">30000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>释放时：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">-</span><span class="token operator">-</span> 删除锁的时候，找到 key 对应的 value，跟自己传过去的 value 做比较，如果是一样的才删除。
<span class="token keyword">if</span> redis<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> then
    <span class="token keyword">return</span> redis<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token string">&quot;del&quot;</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>​ 为啥要用 <code>random_value</code> 随机值呢？因为如果某个客户端获取到了锁，但是阻塞了很长时间才执行完，比如说超过了 30s，此时可能已经自动释放锁了，此时可能别的客户端已经获取到了这个锁，要是你这个时候直接删除 key 的话会有问题，所以得用随机值加上面的 <code>lua</code> 脚本来释放锁。</p></blockquote><h4 id="问题与应对" tabindex="-1"><a class="header-anchor" href="#问题与应对" aria-hidden="true">#</a> 问题与应对</h4><ul><li><strong>死锁</strong>：设置过期时间</li><li><strong>过期时间评估不好，锁提前过期</strong>：守护线程，自动续期</li><li><strong>锁被别人释放</strong>：锁写入唯一标识，释放锁先检查标识，再释放</li></ul><p>​ 但这种方式是单点的方式，如果是集群形式，<strong>redis 主从异步复制，如果主节点挂了（key 就没有了），key 还没同步到从节点，此时从节点切换为主节点，别人就可以 set key，从而拿到锁</strong>。</p><h4 id="redlock" tabindex="-1"><a class="header-anchor" href="#redlock" aria-hidden="true">#</a> RedLock</h4><p>Redlock 的方案基于 2 个前提：</p><ol><li>不再需要部署<strong>从库</strong>和<strong>哨兵</strong>实例，只部署<strong>主库</strong></li><li>但主库要部署多个，官方推荐至少 5 个实例</li></ol><p>假设我们有N个Redis节点，N应该是一个大于2的奇数。RedLock的实现步骤:</p><ol><li>取得当前时间</li><li>使用上文提到的方法依次获取N个节点的Redis锁。</li><li>如果获取到的锁的数量大于 （N/2+1）个,且获取的时间小于锁的有效时间(lock validity time)就认为获取到了一个有效的锁。锁自动释放时间就是最初的锁释放时间减去之前获取锁所消耗的时间。</li><li>如果获取锁的数量小于 （N/2+1），或者在锁的有效时间(lock validity time)内没有获取到足够的说，就认为获取锁失败。这个时候需要向所有节点发送释放锁的消息。</li></ol><p>释放锁的实现就很简单了。向所有的Redis节点发起释放的操作，无论之前是否获取锁成功。</p><p>同时需要注意几个细节：</p><ul><li><p>重试获取锁的间隔时间应当是一个随机范围而非一个固定时间。这样可以防止，多客户端同时一起向Redis集群发送获取锁的操作，避免同时竞争。同时获取相同数量锁的情况。（虽然概率很低）</p></li><li><p>如果某master节点故障之后，回复的时间间隔应当大于锁的有效时间。</p><ol><li>假设有A，B，C三个Redis节点。</li><li>客户端foo获取到了A、B两个锁。</li><li>这个时候B宕机，所有内存的数据丢失。</li><li>B节点恢复。</li><li>这个时候客户端bar重新获取锁，获取到B，C两个节点。</li><li>此时又有两个客户端获取到锁了。</li></ol><p>所以如果恢复的时间将大于锁的有效时间，就可以避免以上情况发生。同时如果性能要求不高，甚至可以开启Redis的持久化选项。</p></li></ul><blockquote><p>​ 为什么需要多个Redis Cluster，一个行不行？回答这个问题之前，我们假设只有一个Redis Cluster，那么无论这个Cluster有多少个Master，我们是没办法让LOCK_KEY发送到多个Master上的，因为一个KEY只会属于Cluster中的一个Master，这一点也是没理解RedLock方案最容易犯的错误。</p></blockquote><hr><h3 id="zookeeper锁" tabindex="-1"><a class="header-anchor" href="#zookeeper锁" aria-hidden="true">#</a> zookeeper锁</h3><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20230302164204627.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ZooKeeper 实现分布式锁基于 ZooKeeper 的两个特性：</p><ul><li><strong>顺序临时节点</strong>：ZooKeeper 的存储类似于 DNS 那样的具有层级的命名空间。ZooKeeper 节点类型可以分为持久节点（PERSISTENT ）、临时节点（EPHEMERAL），每个节点还能被标记为有序性（SEQUENTIAL），一旦节点被标记为有序性，那么整个节点就具有顺序自增的特点。</li><li><strong>Watch 机制</strong>：ZooKeeper 允许用户在指定节点上注册一些 Watcher，并且在特定事件触发的时候，ZooKeeper 服务端会将事件通知给用户。</li></ul><p>这也是 ZooKeeper 客户端 curator 的分布式锁实现。</p><ol><li>创建一个目录 mylock；</li><li>线程 A 想获取锁就在 mylock 目录下创建临时顺序节点；</li><li>获取 mylock 目录下所有的子节点，然后获取比自己小的兄弟节点，如果不存在，则说明当前线程顺序号最小，获得锁；</li><li>线程 B 获取所有节点，判断自己不是最小节点，设置监听比自己次小的节点；</li><li>线程 A 处理完，删除自己的节点，线程 B 监听到变更事件，判断自己是不是最小的节点，如果是则获得锁。</li></ol><p>客户端 1 创建临时节点后，Zookeeper 是如何保证让这个客户端一直持有锁呢？</p><p>原因就在于，<strong>客户端 1 此时会与 Zookeeper 服务器维护一个 Session，这个 Session 会依赖客户端「定时心跳」来维持连接。</strong></p><p>如果 Zookeeper 长时间收不到客户端的心跳，就认为这个 Session 过期了，也会把这个临时节点删除。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/640-20230302163545097.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h2><p>分布式事务的具体方案较多，典型有 2PC 两阶段提交、3PC 三阶段提交、tcc等。</p><h3 id="_2pc" tabindex="-1"><a class="header-anchor" href="#_2pc" aria-hidden="true">#</a> 2PC</h3><p>2PC是一种分布式事务的解决方案，在这篇文章进行简单的回顾以便于更好的理解其中的一些概念和思想设计。</p><p>2PC（两阶段提交），是一种分布式系统一致性的数据提交方案，维持着分布式系统的一致性，他是有着一致性、原子性的中心化的协议。</p><p>2PC将数据提交事务大致分为投票阶段和提交阶段，在2PC协议中有两种角色：参与者（如在分布式系统的follower/slave）和协调者（如在分布式系统的leader/master），其中的参与者可以是功能不同的服务为了一致性而共同参与事务（譬如支付业务中的支付和订单服务），也可以是分布式系统中要保持数据同步的从节点。两个阶段：</p><p>第一个阶段，投票/提交。当产生新的数据写入请求，协调者会向参与者发送预请求，确认相关服务的存活可用状态。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/30fabac0aa4d495090acdef4c7fa8256.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第二个阶段，提交。当第一个阶段多数或是全部（视系统架构规则而定，严格的说2PC其实应该是全部可用）都为可用状态，协调者会提交相关的写入请求到参与者，并确认之前的存活服务均写入成功，一旦该过程有失败，则会发出回滚数据的请求。值得注意的是，<strong>回滚过程不属于2PC的过程，这也正是2PC实际存在的问题</strong>。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/ce75cefc57b842888ef341562df4ac32.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="方案总结" tabindex="-1"><a class="header-anchor" href="#方案总结" aria-hidden="true">#</a> 方案总结</h4><p>2PC 方案实现起来简单，实际项目中使用比较少，主要因为以下问题：</p><ul><li><strong>性能问题</strong> - 所有参与者在事务提交阶段处于同步阻塞状态，占用系统资源，容易导致性能瓶颈。</li><li><strong>可靠性问题</strong> - 如果协调者存在单点故障问题，如果协调者出现故障，参与者将一直处于锁定状态。</li><li><strong>数据一致性问题</strong> - 在阶段 2 中，如果发生局部网络问题，一部分事务参与者收到了提交消息，另一部分事务参与者没收到提交消息，那么就导致了节点之间数据的不一致。</li></ul><hr><h3 id="_3pc" tabindex="-1"><a class="header-anchor" href="#_3pc" aria-hidden="true">#</a> 3PC</h3><p>三阶段提交协议（3PC）主要是为了解决两阶段提交协议的阻塞问题，2pc存在的问题是当协作者崩溃时，参与者不能做出最后的选择。因此参与者可能在协作者恢复之前保持阻塞。三阶段提交（Three-phase commit），是二阶段提交（2PC）的改进版本。</p><p>与两阶段提交不同的是，三阶段提交有两个改动点。</p><blockquote><p>1、 引入超时机制。同时在协调者和参与者中都引入超时机制。 2、在第一阶段和第二阶段中插入一个准备阶段。保证了在最后提交阶段之前各参与节点的状态是一致的。</p></blockquote><p>也就是说，除了引入超时机制之外，<strong>3PC把2PC的准备阶段再次一分为二</strong>，这样三阶段提交就有<code>CanCommit</code>、<code>PreCommit</code>、<code>DoCommit</code>三个阶段。</p><h4 id="cancommit阶段" tabindex="-1"><a class="header-anchor" href="#cancommit阶段" aria-hidden="true">#</a> CanCommit阶段</h4><p>之前2PC的一阶段是本地事务执行结束后，最后不Commit,等其它服务都执行结束并返回Yes，由协调者发生commit才真正执行commit。而这里的CanCommit指的是 <strong>尝试获取数据库锁</strong> 如果可以，就返回Yes。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/1090617-20190710222512291-462809105.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这阶段主要分为2步</p><p><code>事务询问</code> <strong>协调者</strong> 向 <strong>参与者</strong> 发送CanCommit请求。询问是否可以执行事务提交操作。然后开始等待 <strong>参与者</strong> 的响应。 <code>响应反馈</code> <strong>参与者</strong> 接到CanCommit请求之后，正常情况下，如果其自身认为可以顺利执行事务，则返回Yes响应，并进入预备状态。否则反馈No</p><h4 id="precommit阶段" tabindex="-1"><a class="header-anchor" href="#precommit阶段" aria-hidden="true">#</a> PreCommit阶段</h4><p>在阶段一中，如果所有的参与者都返回Yes的话，那么就会进入PreCommit阶段进行事务预提交。这里的<strong>PreCommit阶段</strong> 跟上面的第一阶段是差不多的，只不过这里 <strong>协调者和参与者都引入了超时机制</strong> （2PC中只有协调者可以超时，参与者没有超时机制）。</p><h4 id="docommit阶段" tabindex="-1"><a class="header-anchor" href="#docommit阶段" aria-hidden="true">#</a> DoCommit阶段</h4><p>这里跟2pc的阶段二是差不多的。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>​ 相比较2PC而言，3PC对于协调者（<strong>Coordinator</strong>）和参与者（<strong>Partcipant</strong>）都设置了超时时间，而2PC只有协调者才拥有超时机制。这解决了一个什么问题呢？</p><p>​ 这个优化点，主要是避免了参与者在长时间无法与协调者节点通讯（协调者挂掉了）的情况下，无法释放资源的问题，因为参与者自身拥有超时机制会在超时后，自动进行本地commit从而进行释放资源。而这种机制也侧面降低了整个事务的阻塞时间和范围。阶段 3 中协调者出现问题时，参与者会继续提交事务。</p><p>​ 另外，通过<strong>CanCommit、PreCommit、DoCommit</strong>三个阶段的设计，相较于2PC而言，多设置了一个<strong>缓冲阶段</strong>保证了在最后提交阶段之前各参与节点的状态是一致的。</p><p>​ 以上就是3PC相对于2PC的一个提高（相对缓解了2PC中的前两个问题），但是3PC依然没有完全解决数据不一致的问题。当在参与者收到 preCommit 请求后等待 do commite 指令时，此时如果协调者请求中断事务，而协调者无法与参与者正常通信，会导致参与者继续提交事务，造成数据不一致。</p><hr><h3 id="tcc" tabindex="-1"><a class="header-anchor" href="#tcc" aria-hidden="true">#</a> TCC</h3><h4 id="方案简介" tabindex="-1"><a class="header-anchor" href="#方案简介" aria-hidden="true">#</a> 方案简介</h4><p>TCC（Try-Confirm-Cancel）的概念，最早是由 Pat Helland 于 2007 年发表的一篇名为《Life beyond Distributed Transactions:an Apostate’s Opinion》的论文提出。</p><p>TCC 是服务化的二阶段编程模型，其 Try、Confirm、Cancel 3 个方法均由业务编码实现；</p><ul><li><strong>Try</strong> - 操作作为一阶段，负责资源的检查和预留。</li><li><strong>Confirm</strong> - 操作作为二阶段提交操作，执行真正的业务。</li><li><strong>Cancel</strong> - 是预留资源的取消。</li></ul><p>TCC 事务的 Try、Confirm、Cancel 可以理解为 SQL 事务中的 Lock、Commit、Rollback。</p><h4 id="处理流程" tabindex="-1"><a class="header-anchor" href="#处理流程" aria-hidden="true">#</a> 处理流程</h4><p>为了方便理解，下面以电商下单为例进行方案解析，这里把整个过程简单分为扣减库存，订单创建 2 个步骤，库存服务和订单服务分别在不同的服务器节点上。</p><h5 id="try-阶段" tabindex="-1"><a class="header-anchor" href="#try-阶段" aria-hidden="true">#</a> Try 阶段</h5><p>从执行阶段来看，与传统事务机制中业务逻辑相同。但从业务角度来看，却不一样。TCC 机制中的 Try 仅是一个初步操作，它和后续的确认一起才能真正构成一个完整的业务逻辑，这个阶段主要完成：</p><ul><li>完成所有业务检查( 一致性 )</li><li>预留必须业务资源( 准隔离性 )</li><li>Try 尝试执行业务 TCC 事务机制以初步操作（Try）为中心的，确认操作（Confirm）和取消操作（Cancel）都是围绕初步操作（Try）而展开。因此，Try 阶段中的操作，其保障性是最好的，即使失败，仍然有取消操作（Cancel）可以将其执行结果撤销。</li></ul><p>假设商品库存为 100，购买数量为 2，这里检查和更新库存的同时，冻结用户购买数量的库存，同时创建订单，订单状态为待确认。</p><h5 id="confirm-cancel-阶段" tabindex="-1"><a class="header-anchor" href="#confirm-cancel-阶段" aria-hidden="true">#</a> Confirm / Cancel 阶段</h5><p>根据 Try 阶段服务是否全部正常执行，继续执行确认操作（Confirm）或取消操作（Cancel）。 Confirm 和 Cancel 操作满足幂等性，如果 Confirm 或 Cancel 操作执行失败，将会不断重试直到执行完成。</p><p><strong>Confirm：当 Try 阶段服务全部正常执行， 执行确认业务逻辑操作</strong></p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/20200205205200.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里使用的资源一定是 Try 阶段预留的业务资源。在 TCC 事务机制中认为，如果在 Try 阶段能正常的预留资源，那 Confirm 一定能完整正确的提交。Confirm 阶段也可以看成是对 Try 阶段的一个补充，Try+Confirm 一起组成了一个完整的业务逻辑。</p><p><strong>Cancel：当 Try 阶段存在服务执行失败， 进入 Cancel 阶段</strong></p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20200205205221.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Cancel 取消执行，释放 Try 阶段预留的业务资源，上面的例子中，Cancel 操作会把冻结的库存释放，并更新订单状态为取消。</p><h4 id="方案总结-1" tabindex="-1"><a class="header-anchor" href="#方案总结-1" aria-hidden="true">#</a> 方案总结</h4><p>TCC 事务机制相对于传统事务机制（X/Open XA），TCC 事务机制相比于上面介绍的 XA 事务机制，有以下优点:</p><ul><li><strong>性能提升</strong> - 具体业务来实现控制资源锁的粒度变小，不会锁定整个资源。</li><li><strong>数据最终一致性</strong> - 基于 Confirm 和 Cancel 的幂等性，保证事务最终完成确认或者取消，保证数据的一致性。</li><li><strong>可靠性</strong> - 解决了 XA 协议的协调者单点故障问题，由主业务方发起并控制整个业务活动，业务活动管理器也变成多点，引入集群。</li></ul><p>缺点： TCC 的 Try、Confirm 和 Cancel 操作功能要按具体业务来实现，业务耦合度较高，提高了开发成本。</p><hr><h3 id="本地消息表" tabindex="-1"><a class="header-anchor" href="#本地消息表" aria-hidden="true">#</a> 本地消息表</h3><h4 id="方案简介-1" tabindex="-1"><a class="header-anchor" href="#方案简介-1" aria-hidden="true">#</a> 方案简介</h4><p>本地消息表的方案最初是由 ebay 提出，核心思路是将分布式事务拆分成本地事务进行处理。</p><p>方案通过在事务主动发起方额外新建事务消息表，事务发起方处理业务和记录事务消息在本地事务中完成，轮询事务消息表的数据发送事务消息，事务被动方基于消息中间件消费事务消息表中的事务。</p><p>这样设计可以避免”<strong>业务处理成功 + 事务消息发送失败</strong>&quot;，或&quot;<strong>业务处理失败 + 事务消息发送成功</strong>&quot;的棘手情况出现，保证 2 个系统事务的数据一致性。</p><h4 id="处理流程-1" tabindex="-1"><a class="header-anchor" href="#处理流程-1" aria-hidden="true">#</a> 处理流程</h4><p>下面把分布式事务最先开始处理的事务方成为事务主动方，在事务主动方之后处理的业务内的其他事务成为事务被动方。</p><p>为了方便理解，下面继续以电商下单为例进行方案解析，这里把整个过程简单分为扣减库存，订单创建 2 个步骤，库存服务和订单服务分别在不同的服务器节点上，其中库存服务是事务主动方，订单服务是事务被动方。</p><p>事务的主动方需要额外新建事务消息表，用于记录分布式事务的消息的发生、处理状态。</p><p>整个业务处理流程如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194208.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><ol><li><strong>步骤 1 事务主动方处理本地事务。</strong> 事务主动发在本地事务中处理业务更新操作和写消息表操作。 上面例子中库存服务阶段再本地事务中完成扣减库存和写消息表(图中 1、2)。</li><li><strong>步骤 2 事务主动方通过 MQ 通知事务被动方处理事务</strong>。 消息中间件可以基于 Kafka、RocketMQ 消息队列，事务主动方法主动写消息到消息队列，事务消费方消费并处理消息队列中的消息。 上面例子中，库存服务把事务待处理消息写到消息中间件，订单服务消费消息中间件的消息，完成新增订单（图中 3 - 5）。</li><li><strong>步骤 3 事务被动方通过 MQ 反会处理结果。</strong> 上面例子中，订单服务把事务已处理消息写到消息中间件，库存服务消费中间件的消息，并将事务消息的状态更新为已完成(图中 6 - 8)</li></ol></blockquote><p>为了数据的一致性，当处理错误需要重试，事务发送方和事务接收方相关业务处理需要支持幂等。具体保存一致性的容错处理如下：</p><blockquote><ul><li>当步骤 1 处理出错，事务回滚，相当于什么都没发生。</li><li>当步骤 2、步骤 3 处理出错，由于未处理的事务消息还是保存在事务发送方，事务发送方可以定时轮询为超时消息数据，再次发送的消息中间件进行处理。事务被动方消费事务消息重试处理。</li><li>如果是业务上的失败，事务被动方可以发消息给事务主动方进行回滚。</li><li>如果多个事务被动方已经消费消息，事务主动方需要回滚事务时需要通知事务被动方回滚。</li></ul></blockquote><h4 id="方案总结-2" tabindex="-1"><a class="header-anchor" href="#方案总结-2" aria-hidden="true">#</a> 方案总结</h4><p>方案的优点如下：</p><ul><li>从应用设计开发的角度实现了消息数据的可靠性，消息数据的可靠性不依赖于消息中间件，弱化了对 MQ 中间件特性的依赖。</li><li>方案轻量，容易实现。</li></ul><p>缺点如下：</p><ul><li>与具体的业务场景绑定，耦合性强，不可复用。</li><li>消息数据与业务数据同库，占用业务系统资源。</li><li>业务系统在使用关系型数据库的情况下，消息服务性能会受到关系型数据库并发性能的局限。</li></ul><hr><h3 id="mq-事务" tabindex="-1"><a class="header-anchor" href="#mq-事务" aria-hidden="true">#</a> MQ 事务</h3><p>事务消息需要消息队列提供相应的功能才能实现，Kafka 和 RocketMQ 都提供了事务相关功能。</p><ul><li><strong>Kafka</strong> 的解决方案是：直接抛出异常，让用户自行处理。用户可以在业务代码中反复重试提交，直到提交成功，或者删除之前修改的数据记录进行事务补偿。</li><li><strong>RocketMQ</strong> 的解决方案是：通过事务反查机制来解决事务消息提交失败的问题。如果 Producer 在提交或者回滚事务消息时发生网络异常，RocketMQ 的 Broker 没有收到提交或者回滚的请求，Broker 会定期去 Producer 上反查这个事务对应的本地事务的状态，然后根据反查结果决定提交或者回滚这个事务。为了支撑这个事务反查机制，业务代码需要实现一个反查本地事务状态的接口，告知 RocketMQ 本地事务是成功还是失败。</li></ul><h4 id="rocketmq-事务消息流程" tabindex="-1"><a class="header-anchor" href="#rocketmq-事务消息流程" aria-hidden="true">#</a> RocketMQ 事务消息流程</h4><p>基于 MQ 的分布式事务方案其实是对本地消息表的封装，将本地消息表基于 MQ 内部，其他方面的协议基本与本地消息表一致。下面主要基于 RocketMQ 4.3 之后的版本介绍 MQ 的分布式事务方案。</p><p>在本地消息表方案中，保证事务主动方发写业务表数据和写消息表数据的一致性是基于数据库事务，RocketMQ 的事务消息相对于普通 MQ，相对于提供了 2PC 的提交接口，方案如下：</p><p><strong>正常情况——事务主动方发消息</strong> 这种情况下，事务主动方服务正常，没有发生故障，发消息流程如下：</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/20220512194221.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>发送方向 MQ 服务端(MQ Server)发送 half 消息。</li><li>MQ Server 将消息持久化成功之后，向发送方 ACK 确认消息已经发送成功。</li><li>发送方开始执行本地事务逻辑。</li><li>发送方根据本地事务执行结果向 MQ Server 提交二次确认（commit 或是 rollback）。</li><li>MQ Server 收到 commit 状态则将半消息标记为可投递，订阅方最终将收到该消息；MQ Server 收到 rollback 状态则删除半消息，订阅方将不会接受该消息。</li></ol><p><strong>异常情况——事务主动方消息恢复</strong> 在断网或者应用重启等异常情况下，图中 4 提交的二次确认超时未到达 MQ Server，此时处理逻辑如下：</p><figure><img src="https://raw.githubusercontent.com/dunwu/images/dev/snap/20220512194230.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>MQ Server 对该消息发起消息回查。</li><li>发送方收到消息回查后，需要检查对应消息的本地事务执行的最终结果。</li><li>发送方根据检查得到的本地事务的最终状态再次提交二次确认</li><li>MQ Server 基于 commit / rollback 对消息进行投递或者删除</li></ol><blockquote><p><strong>思考</strong>：为什么不等待写业务表成功后再向消息队列发送提交消息呢？</p><p>因为可能存在这样情况：写业务表成功了，但是还没来得及发消息，节点就宕机了。</p></blockquote><h4 id="mq-事务方案总结" tabindex="-1"><a class="header-anchor" href="#mq-事务方案总结" aria-hidden="true">#</a> MQ 事务方案总结</h4><p>相比本地消息表方案，MQ 事务方案优点是：</p><ul><li>消息数据独立存储 ，降低业务系统与消息系统之间的耦合。</li><li>吞吐量优于使用本地消息表方案。</li></ul><p>缺点是：</p><ul><li>一次消息发送需要两次网络请求(half 消息 + commit/rollback 消息)</li><li>业务处理服务需要实现消息状态回查接口</li></ul><hr><h2 id="分布式session" tabindex="-1"><a class="header-anchor" href="#分布式session" aria-hidden="true">#</a> 分布式Session</h2><p>在分布式场景下，一个用户的 Session 如果只存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器上，该服务器没有用户的 Session，就可能导致用户需要重新进行登录等操作。</p><p>分布式 Session 的几种实现策略：</p><ol><li>粘性 session</li><li>应用服务器间的 session 复制共享</li><li>基于缓存的 session 共享 ✅</li></ol><h3 id="粘性-session" tabindex="-1"><a class="header-anchor" href="#粘性-session" aria-hidden="true">#</a> 粘性 Session</h3><blockquote><p>粘性 Session（Sticky Sessions）<strong>需要配置负载均衡器，使得一个用户的所有请求都路由到一个服务器节点上</strong>，这样就可以把用户的 Session 存放在该服务器节点中。</p><p>缺点：<strong>当服务器节点宕机时，将丢失该服务器节点上的所有 Session</strong>。</p></blockquote><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/MultiNode-StickySessions-20230305014631055.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="session-复制共享" tabindex="-1"><a class="header-anchor" href="#session-复制共享" aria-hidden="true">#</a> Session 复制共享</h3><blockquote><p>Session 复制共享（Session Replication）<strong>在服务器节点之间进行 Session 同步操作</strong>，这样的话用户可以访问任何一个服务器节点。</p><p>缺点：<strong>占用过多内存</strong>；<strong>同步过程占用网络带宽以及服务器处理器时间</strong>。</p></blockquote><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/MultiNode-SessionReplication.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="基于缓存的-session-共享" tabindex="-1"><a class="header-anchor" href="#基于缓存的-session-共享" aria-hidden="true">#</a> 基于缓存的 session 共享</h3><blockquote><p><strong>使用一个单独的存储服务器存储 Session 数据</strong>，可以存在 MySQL 数据库上，也可以存在 Redis 或者 Memcached 这种内存型数据库。</p><p>缺点：需要去实现存取 Session 的代码。</p></blockquote><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/MultiNode-SpringSession.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h3><ul><li>JWT Token</li><li>tomcat + redis</li><li>spring session + redis</li></ul><hr>`,263);function u(m,f){const a=r("ExternalLinkIcon");return s(),l("div",null,[c,e("p",null,[e("a",d,[i("https://zq99299.github.io/note-architect/hc/"),n(a)])]),e("p",null,[e("a",h,[i("https://dunwu.github.io/db-tutorial/#📖-内容"),n(a)])]),g])}const k=t(p,[["render",u],["__file","分布式.html.vue"]]);export{k as default};
