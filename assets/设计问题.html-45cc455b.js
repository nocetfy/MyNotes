import{_ as o,H as t,X as r,Y as n,Z as e,a0 as d,a1 as h,$ as i}from"./framework-47f15ee6.js";const l={},c=i('<h1 id="系统设计" tabindex="-1"><a class="header-anchor" href="#系统设计" aria-hidden="true">#</a> 系统设计</h1><p>[toc]</p><h2 id="即时消息系统" tabindex="-1"><a class="header-anchor" href="#即时消息系统" aria-hidden="true">#</a> 即时消息系统</h2><p>即时消息系统，但是基本上好多即时通讯软件都属于这一类，比如微信，比如 QQ，比如 Facebook Messenger，比如 WhatsApp。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>用户发送消息，直接发给 Chat Service，它会做少量的处理并持久化，然后放到基于 channel 的队列中，每一个对话（thread）都会有一个 channel，这个过程中，它并不关心这个对话有多少人参与（支持群聊）。</li><li>队列有两类消费者，一类是 Message Service 用来服务在线用户。由于单台机器和客户端的连接数量有限（比如小于 2^16=65536），因此 Message Service 需要有很多机器，根据用户的 id 来 sharding，它们去订阅自己感兴趣的频道，有新的消息就发送给用户。</li><li>Message Service 获取客户端的心跳，保持来自客户端的连接（long polling 或者 socket）为了实时性肯定要用 push 模型。因此它知道用户的当前在线状态，也知道最后一条发送成功消息的时间戳（状态）。这个状态可以用于决定用户离线时消息是否要通过其它方式通知用户。</li><li>还有一类是 Notification Service 用来发离线通知。</li><li>Chat Service 有两个职责，一个是处理发消息的请求，一个是接纳读取历史消息的请求，这两个功能可以分成两个组件，也可以一个组件，我放在一起了。</li><li>右侧的消息数据库，RDB 往往不太适合，因为消息数量太大，对于一组对话（thread）的展示，需要找到该对话 N 条最近的记录，行数据库效率较低，可以考虑列数据库，比如 HBase。这种方式下，同一 thread 下的消息都是按时序存放在一起的，读的效率非常高，写因为基本是 append，也很方便。</li><li>用户数据的存储，可以使用 RDB，也可以使用 KV 数据库。 这里面存放的数据库表包括：用户表；对话表；用户对话关联表：二者是 M:N 的关系，并且每个用户都可以有对于特定对话的设置，例如设置对话中的昵称，是否屏蔽消息通知等等。</li><li>对于图中基于 Channel 的队列，把数据 fanout 给下游，它有几个作用，一个是解耦，把消息发送和消息接收分离开，消息发送者可能只管把消息发到群里，但是并不关心这个群应该有几个用户得到通知；第二个是缓冲，无论是为离线用户服务的 Notification Service，还是为在线用户服务的 Message Service，它们消费数据的速率是无法确定的。</li><li>对于用户上线、下线的实现，其实也类似，上线、下线的事件可以推送到一个特定的 Channel 里面。用户的好友，也就是感兴趣的 Notification Service 的个体去订阅消息；还有一种思路是把状态更新到用户表里面，这样所有人都可以查询得到，这后一种方式适合非好友也要查看用户状态的情况。上、下线需要保留缓冲时间，容许一定状态的延迟，没必要，也不应过于实时。</li></ul><hr><h2 id="流媒体设计" tabindex="-1"><a class="header-anchor" href="#流媒体设计" aria-hidden="true">#</a> 流媒体设计</h2><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/YouTube.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="朋友圈feed流设计" tabindex="-1"><a class="header-anchor" href="#朋友圈feed流设计" aria-hidden="true">#</a> 朋友圈feed流设计</h2><p>​ Feed 流常见系统包括 Twitter、微博、Instagram 和抖音等等，它们的特点是，每个用户都是内容创作者，每个用户也都是内容消费者，每个用户看到的内容都是不同的，它取决于用户所关注的用户列表，再结合时间线（有时还包括优先级）将这些用户的最新 feed 聚合，并以流的方式展示出来。</p><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Feed 流系统中，有两种常见的模式，一种是 push，一种是 pull。基本上，对于用户的 “被关注用户”（粉丝）可能远大于 “关注用户” 的系统，比如 Twitter，pull model 是必选，push 是可选；反之，特别是对于一些用户关系要求必须双向的，比如朋友圈，往往不会有很多的 “粉丝”，那就可以将 push 作为主要模式。无论如何，pull 和 push 有利必有弊，如果结合使用，可以根据场景来选择，看似很美，可又会增加系统的复杂性。这里按照二者结合的设计来叙述。</li><li>这里提给 push 和 pull 各提一个经典问题： <ul><li>第一个问题是 push 模型下，由于粉丝众多，推文占用容量过大的问题，一种解决思路是在粉丝的时间线中只存储推文 id，但是这样的话在聚合的时候需要一次额外的根据推文 id 去获取推文的 I/O（但是可以通过缓存优化）；另一种解决思路是只给活跃用户 push。</li><li>第二个问题是 pull 模型下，突然某个大 V 的某一话题活了起来，大量的用户访问该推文，导致所在机器顶不住了（这也是新浪微博挂掉的常见原因）。这个也没有太好的解决办法，可以考虑对于特别火爆的推文拉出专门的一层缓存来扛流量，另外要有流控，丢掉部分请求，尽最大能力服务。</li></ul></li><li>首先，用户本身的数据，存放在 User DB 里，和很多其它系统一样，它可以是一个关系数据库。但是用户的关联关系，可以单独存放，它可以使用关系数据库，也可以使用 Graph DB。</li><li>右侧的 Tweet Storage：用户和帖子（推文）的关联数据，数据量会比较大，可以选择 Redis 这样的 KV 数据库；而推文本身，也可以使用 KV 数据库，或者使用 MongoDB 这一类文档数据库，以适应弱结构化文本为主的数据。但是，Twitter 和微博都使用了 MySQL 来存放这类数据，并且 Twitter 给 MySQL 做了相当的优化，这里面不只有技术原因，更多的还有历史原因。</li><li>关于对推文的 Sharding，这是一个 Feed 系统的核心话题。 <ul><li>一种方式是根据时间的范围来划分，这也是 Twitter 早期的做法，这种做法有一个严重的问题，就是老的推文没有人看，而新推文则火得不得了，因此机器的 load 严重不均。</li><li>第二种方式是根据推文的 id 来做简单 hash，这种方式最大的问题是一个人的推文可能分散到任何一台机器上，为了找这个人的推文要去所有的机器上查询并聚合（既包括网络 I/O，也包括磁盘 I/O），这无疑是过于浪费了。</li><li>第三种方式是根据用户 id 来做 hash，保证某一个特定用户的推文只存储在同一台机器上，但这个方式有两个问题，（1）有时候某特定几个用户会火，导致 load 不均，这种情况需要用良好设计的 Cache 来缓和；（2）某些用户发推多而某些用户少，因此时间长了 shards 的容量使用差异可能很大，这需要一个改进的找 shard 的路由算法。</li></ul></li><li>Media Storage，用于存放图像等媒体数据，这可以是一个 “单纯” 的分布式文件系统，比如 HDFS。</li><li>用户推文的时候，根据用户所应对的策略，如果需要 fan out 推文的 id 到粉丝的时间线数据库中，就要把这个事件进 queue，由于它是异步模型，这一步可能会有不同程度的延迟。</li><li>在用户读取的时候，缓存是非常重要的，考虑到需要的容量巨大，为了增加命中率，减少冗余的缓存信息，可以使用集中式缓存集群。</li><li>Aggregation Service 是用来从多个存储节点中为某个用户拉取数据（pull 模型），合并时间线，并返回的。为了提高效率，这里是多个并行拉取，再聚合的。这些数据可能是即时拉取的（pull 模型），也可能是已经，或者部分已经在之前的 Fan-out 流程中写入存储而准备好了的（push 模型）。</li></ul><h3 id="微博设计" tabindex="-1"><a class="header-anchor" href="#微博设计" aria-hidden="true">#</a> 微博设计</h3><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/Cgq2xl4LEmmAXJ3OAAEdlJkp5jU865.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Feed 流获取的处理流程如下：</p><p>首先，根据用户信息，获取用户的关注关系，一般会得到 300~2000 个关注用户的 UID。</p><p>然后，再获取用户自己的 Feed inbox 收件箱。收件箱主要存放其他用户发表的供部分特定用户可见的微博 ID 列表。</p><p>接下来，再获取所有关注列表用户的微博 ID 列表，即关注者发表的所有用户或者大部分用户可见的 Feed ID 列表。这些 Feed ID 列表都以 vector 数组的形式存储在缓存。由于一般用户的关注数会达到数百甚至数千，因此这一步需要获取数百或数千个 Feed vector。</p><p>然后，Feed 系统将 inbox 和关注用户的所有 Feed vector 进行合并，并排序、分页，即得到目标 Feed 的 ID 列表。</p><p>接下来，再根据 Feed ID 列表获取对应的 Feed 内容，如微博的文字、视频、发表时间、源微博 ID 等。</p><p>然后，再进一步获取所有微博的发表者 user 详细信息、源微博内容等信息，并进行内容组装。</p><p>之后，如果用户设置的过滤词，还要将这些 Feed 进行过滤筛选，剔除用户不感兴趣的 Feed。</p><p>接下来，再获取用户对这些 Feed 的收藏、赞等状态，并设置到对应微博中。</p><p>最后，获取这些 Feed 的转发数、评论数、赞数等，并进行计数组装。至此，Feed 流获取处理完毕，Feed 列表以 JSON 形式返回给前端，用户刷新微博首页成功完成。</p><h4 id="缓存架构" tabindex="-1"><a class="header-anchor" href="#缓存架构" aria-hidden="true">#</a> 缓存架构</h4><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/Cgq2xl4LEueAOUovAAFz9DMRMjI145.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Feed 流处理中，缓存核心业务数据主要分为 6 大类。</p><p>第一类是用户的 inbox 收件箱，在用户发表仅供少量用户可见的 Feed 时，为了提升访问效率，这些 Feed ID 并不会进入公共可见的 outbox 发件箱，而会直接推送到目标客户的收件箱。</p><p>第二类是用户的 outbox 发件箱。用户发表的普通微博都进入 outbox，这些微博几乎所有人都可见，由粉丝在刷新 Feed 列表首页时，系统直接拉取组装。</p><p>第三类是 Social Graph 即用户的关注关系，如各种关注列表、粉丝列表。</p><p>第四类是 Feed Content 即 Feed 的内容，包括 Feed 的文字、视频、发表时间、源微博 ID 等。</p><p>第五类是 Existence 存在性判断缓存，用来判断用户是否阅读了某条 Feed，是否赞了某条 Feed 等。对于存在性判断，微博是采用自研的 phantom 系统，通过 bloomfilter 算法进行存储的。</p><p>第六类是 Counter 计数服务，用来存储诸如关注数、粉丝数，Feed 的转发、评论、赞、阅读等各种计数。</p><p>对于 Feed 的 inbox 收件箱、outbox 发件箱，Feed 系统通过 Memcached 进行缓存，以 feed id的一维数组格式进行存储。</p><p>​ 对于关注列表，Feed 系统采用 Redis 进行缓存，存储格式为 longset。longset 是微博扩展的一种数据结构，它是一个采用 double-hash 寻址的一维数组。当缓存 miss 后，业务 client 可以从 DB 加载，并直接构建 longset 的二进制格式数据作为 value写入Redis，Redis 收到后直接 restore 到内存，而不用逐条加入。这样，即便用户有成千上万个关注，也不会引发阻塞。</p><p>​ Feed content 即 Feed 内容，采用 Memcached 存储。由于 Feed 内容有众多的属性，且时常需要根据业务需要进行扩展，Feed 系统采用 Google 的 protocol bufers 的格式进行存放。protocol buffers 序列化后的所生成的二进制消息非常紧凑，二进制存储空间比 XML 小 3~10 倍，而序列化及反序列化的性能却高 10 倍以上，而且扩展及变更字段也很方便。微博的 Feed content 最初采用 XML 和 JSON 存储，在 2011 年之后逐渐全部改为 protocol buffers 存储。</p><p>​ 对于存在性判断，微博 Feed 系统采用自研的 phantom 进行存储。数据存储采用 bloom filter 存储结构。实际上 phantom 本身就是一个分段存储的 bloomfilter 结构。bloomFilter 采用 bit 数组来表示一个集合，整个数组最初所有 bit 位都是 0，插入 key 时，采用 k 个相互独立的 hash 函数计算，将对应 hash 位置置 1。而检测某个 key 是否存在时，通过对 key 进行多次 hash，检查对应 hash 位置是否为 1 即可，如果有一个为 0，则可以确定该 key 肯定不存在，但如果全部为 1，大概率说明该 key 存在，但该 key 也有可能不存在，即存在一定的误判率，不过这个误判率很低，一般平均每条记录占用 1.2 字节时，误判率即可降低到 1%，1.8 字节，误判率可以降到千分之一。基本可以满足大多数业务场景的需要。</p><h3 id="好友动态怎么提醒" tabindex="-1"><a class="header-anchor" href="#好友动态怎么提醒" aria-hidden="true">#</a> 好友动态怎么提醒</h3><p>push方式</p><hr><h2 id="短链系统设计" tabindex="-1"><a class="header-anchor" href="#短链系统设计" aria-hidden="true">#</a> 短链系统设计</h2><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/Short-URL.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>图中上半部分是写的部分，无论是 API 直接调用还是通过某一个 UI 去调用，Write API 会进行鉴权操作。另外，如果源 URL 已经是经过短网址服务处理过的，就需要返回失败，否则就陷入了一个递归服务的窘境。</li><li>其中写部分的 Cache 是用来防止一些过度的访问，比如由于某种原因，短时间内对某一个特定 URL 来生成短网址的请求特别多，那么就可以通过它来发现并阻止。</li><li>Key Generator 用来生成短网址中变化的部分（key），这里面根据不同的需求有几种方法： <ul><li>如果允许按序，那么最简单的方法是使用数据库的 sequence，为了高可用，可以配置多个数据库，step 相同，但起点分散开，比如数据库 A 生成 ID 序列为 1、3、5……，数据库 B 则是 2、4、6……</li><li>拿到数据库生成的 ID 以后，<strong>可以将这个十进制数转成 [a-zA-Z0-9_-] 这样的 64 进制数</strong>，让url更短。</li><li>如果要求 key 无序，那么可以再根据上述结果加一个算法上的小处理，保证 ID 到最终 key 的一对一映射即可，最简单的方法是单个数或者字符的映射，比如 a-&gt;3、b-&gt;M（当然，这种方法相对也比较好猜）。</li><li>如果需要自定义 ID，那么这个 Key Generator 可以接受一个自定义 key 去数据库里面找，找不到就可以用，否则就意味着冲突出现了。</li></ul></li><li>Key 得到以后，生成的相对路径和原 URL 需要写入 URL DB 中。</li></ul><blockquote><p>可以使用MurmurHash算法，性能更好。如果出现哈希冲突，可以考虑进行加盐，增加一个salt字段，将salt拼到长链后面rehash，最多重试三次，如果还是失败说明哈希攻击，放弃映射。短链接转换取出的时候将盐值去除。</p></blockquote><ul><li>这里面有一个问题，就是如果两次请求的长 URL 相同，系统应该给出同样的短 URL 还是不同的短 URL？或者说，应该考虑去重吗？一般说来，不应该去重，应为根据短 URL 可以进行许多收费和数据分析，这两个相同的长 URL 来自于不同的用户，如果这里合并去重了就丢失了和用户对应的这部分信息。</li><li>短 URL 生成以后，这里我还画了一个 Syncer，用来将生成的新映射同步到其它地区的节点去。因为短网址的读的服务如果在本地，那么显然响应速度是更快的，而且也可以减轻中心节点的负担。</li><li>不同地区的用户，在使用读服务的时候，通过带有缓存的 Read API 来进行，但是具体的地址是根据 DNS 来做均衡，优先使用本地的读服务。</li><li>关于读服务，还有一个常见问题是，HTTP 状态码应该是 301 还是 302？一般应该使用 302，因为 301 是永久重定向(会被浏览器cache)，很明显我们不希望它是永久重定向，而应该是临时重定向，因为永久重定向会丢失很多后续的访问，和前面提到的去重问题，一样不利于收费和数据分析(但是会降低服务器的压力)。</li></ul><hr><h2 id="秒杀系统设计" tabindex="-1"><a class="header-anchor" href="#秒杀系统设计" aria-hidden="true">#</a> 秒杀系统设计</h2><hr><h2 id="k-v数据库设计" tabindex="-1"><a class="header-anchor" href="#k-v数据库设计" aria-hidden="true">#</a> K-V数据库设计</h2><hr><h2 id="rpc系统设计" tabindex="-1"><a class="header-anchor" href="#rpc系统设计" aria-hidden="true">#</a> RPC系统设计</h2>',53),s={href:"https://xilidou.com/2018/09/26/dourpc-remoting/",target:"_blank",rel:"noopener noreferrer"},p=i('<h2 id="幂等性设计" tabindex="-1"><a class="header-anchor" href="#幂等性设计" aria-hidden="true">#</a> 幂等性设计</h2><p>​ 幂等性是开发当中很常见也很重要的一个需求，尤其是支付、订单等与金钱挂钩的服务，保证接口幂等性尤其重要。在实际开发中，我们需要针对不同的业务场景我们需要灵活的选择幂等性的实现方式：</p><ul><li>对于下单等存在唯一主键的，可以使用“唯一主键方案”的方式实现。对于更新订单状态等相关的更新场景操作，使用“乐观锁方案”实现更为简单。</li><li>对于上下游这种，下游请求上游，上游服务可以使用“下游传递唯一序列号方案”更为合理。</li><li>类似于前端重复提交、重复下单、没有唯一ID号的场景，可以通过 Token 与 Redis 配合的“防重 Token 方案”实现更为快捷。</li></ul><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/640-20230304020233312.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><hr><h2 id="分布式调度系统设计" tabindex="-1"><a class="header-anchor" href="#分布式调度系统设计" aria-hidden="true">#</a> 分布式调度系统设计</h2><hr><h2 id="api网关设计" tabindex="-1"><a class="header-anchor" href="#api网关设计" aria-hidden="true">#</a> API网关设计</h2><h2 id="防资损设计" tabindex="-1"><a class="header-anchor" href="#防资损设计" aria-hidden="true">#</a> 防资损设计</h2><h2 id="扫码登录设计" tabindex="-1"><a class="header-anchor" href="#扫码登录设计" aria-hidden="true">#</a> 扫码登录设计</h2><h3 id="整体流程" tabindex="-1"><a class="header-anchor" href="#整体流程" aria-hidden="true">#</a> 整体流程</h3><p>扫描登录的流程，大致分为三个阶段：</p><ol><li>二维码展示阶段</li><li>扫码阶段</li><li>登录确认阶段</li></ol><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/4166179.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Step 1、用户 A 访问网页客户端，服务器为这个会话生成一个全局唯一的 ID，此时系统并不知道访问者是谁。</p><p>Step 2、用户A打开自己的手机App并扫描这个二维码，并提示用户是否确认登录。</p><p>Step 3、手机上的是登录状态，用户点击确认登录后，手机上的客户端将账号和这个扫描得到的 ID 一起提交到服务器</p><p>Step 4、服务器将这个 ID 和用户 A 的账号绑定在一起，并通知网页版，这个 ID 对应的微信号为用户 A，网页版加载用户 A 的信息，至此，扫码登录全部流程完成</p><h3 id="状态机设计" tabindex="-1"><a class="header-anchor" href="#状态机设计" aria-hidden="true">#</a> 状态机设计</h3><p><strong>使用redis来存储每一张二维码的状态</strong></p><p>状态:</p><ol><li>NOT_SCAN 未被扫描</li><li>SCANNED 被扫描</li><li>VERIFIED 确认完后</li><li>EXPIRED 过期</li><li>FINISH 完成</li></ol><blockquote><p>由于一张二维码只能被扫描一次，所以我们每一次扫描一张二维码后，把状态设置为<code>SCANNED</code>，<code>SCANNED</code>状态的二维码无法再次被扫描，抛出已被扫描的信息</p></blockquote><p>状态转移：</p><blockquote><p>NOT_SCANNED-&gt;SCANNED-&gt;VERIFIED-&gt;FINISH</p><p>其中EXPIRED状态可以插在其中任意一个位置，过期了的二维码也自动过期</p></blockquote><h3 id="后端接口" tabindex="-1"><a class="header-anchor" href="#后端接口" aria-hidden="true">#</a> 后端接口</h3><ul><li>创建二维码</li></ul><p>使用UUID工具类生成全局唯一id，也可以使用snowflake生成自增的全局唯一id，然后保存到redis中，key为uuid，val为当前二维码状态。</p><ul><li>二维码是否被扫描接口</li></ul><p>获取到redis保存对应uuid的状态，返回给前端，前端轮询判断做处理。</p><ul><li>app扫描接口</li></ul><p>app扫描二维码后，拿到对应的二维码信息发送一个扫描请求给后端，携带app用户参数，根据相应状态做相应处理：</p><blockquote><ul><li><strong>如果为<code>NOT_SCAN</code>，就修改为<code>SCANNED</code></strong></li><li><strong>如果为<code>SCANNED</code>，就返回重复扫描的错误</strong></li><li><strong>如果为<code>VERIFIED</code>，就完成本次二维码登录逻辑，用户登录成功</strong></li></ul></blockquote><ul><li>app确认登录接口</li></ul><p>app扫描成功后，二维码状态变为<code>SCANNED</code>，返回响应给app前端用户确认，用户点击确认后请求这个接口，完成登录。</p><h3 id="问题思考" tabindex="-1"><a class="header-anchor" href="#问题思考" aria-hidden="true">#</a> 问题思考</h3><h4 id="cookie、session、token区别" tabindex="-1"><a class="header-anchor" href="#cookie、session、token区别" aria-hidden="true">#</a> cookie、session、token区别</h4><p>HTTP 协议是一种<code>无状态协议</code>，即每次服务端接收到客户端的请求时，都是一个全新的请求，服务器并不知道客户端的历史请求记录；Session 和 Cookie 的主要目的就是为了弥补 HTTP 的无状态特性。</p><h5 id="session-是什么" tabindex="-1"><a class="header-anchor" href="#session-是什么" aria-hidden="true">#</a> Session 是什么</h5><p>客户端请求服务端，服务端会为这次请求开辟一块<code>内存空间</code>，这个对象便是 Session 对象，存储结构可以为 <code>ConcurrentHashMap</code>。Session 弥补了 HTTP 无状态特性，服务器可以利用 Session 存储客户端在同一个会话期间的一些操作记录。</p><h5 id="cookie是什么" tabindex="-1"><a class="header-anchor" href="#cookie是什么" aria-hidden="true">#</a> cookie是什么</h5><p>HTTP 协议中的 Cookie 包括 <code>Web Cookie</code> 和<code>浏览器 Cookie</code>，它是服务器发送到 Web 浏览器的一小块数据。服务器发送到浏览器的 Cookie，浏览器会进行存储，并与下一个请求一起发送到服务器。通常，它用于判断两个请求是否来自于同一个浏览器，例如用户保持登录状态。</p><blockquote><p>HTTP Cookie 机制是 HTTP 协议无状态的一种补充和改良</p></blockquote><p>在每次请求时，服务器都会从会话 Cookie 中读取 SessionId，如果服务端的数据和读取的 SessionId 相同，那么服务器就会发送响应给浏览器，允许用户登录。</p><h5 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h5><p>​ token存在客户端，但它是服务端发回来的，每次请求都需要携带token，把token放到HTTP的Header中，基于token的用户认证是一种服务端无状态的认证方式，服务端不用存放token数据，用解析token的计算时间换取session的存储空间，减轻服务器压力，减少频繁查询数据库，token完全由应用管理，避开同源策略。</p><h4 id="长连接、短连接区别" tabindex="-1"><a class="header-anchor" href="#长连接、短连接区别" aria-hidden="true">#</a> 长连接、短连接区别</h4><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20230506233523896.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>​ 短连接是通讯双方有数据交互时就建立一个连接, 数据发送完成后，则断开此连接。长连接就是大家建立连接之后, 不主动断开. 双方互相发送数据, 发完了也不主动断开连接, 之后有需要发送的数据就继续通过这个连接发送。</p><p><strong>TCP连接在默认的情况下就是所谓的长连接</strong>, 也就是说连接双方都不主动关闭连接, 这个连接就应该一直存在。</p><p>​ 但是网络中的情况是复杂的, 这个连接可能会被切断. 比如客户端到服务器的链路因为故障断了, 或者服务器宕机了, 或者是你家网线被人剪了, 这些都是一些莫名其妙的导致连接被切断的因素, 还有几种比较特殊的:</p><ul><li>NAT超时</li></ul><p>​ 因为IPv4地址不足, 或者我们想通过无线路由器上网, 我们的设备可能会处在一个NAT设备的后面, 生活中最常见的NAT设备是家用路由器。NAT设备会在IP封包通过设备时修改源/目的IP地址. 对于家用路由器来说, 使用的是网络地址端口转换(NAPT), 它不仅改IP, 还修改TCP和UDP协议的端口号, 这样就能让内网中的设备共用同一个外网IP。我们的设备经常是处在NAT设备的后面, 比如在大学里的校园网, 查一下自己分配到的IP, 其实是内网IP, 表明我们在NAT设备后面, 如果我们在寝室再接个路由器, 那么我们发出的数据包会多经过一次NAT。国内移动无线网络运营商在链路上一段时间内没有数据通讯后, 会淘汰NAT表中的对应项, 造成链路中断。</p><ul><li>网络状态切换</li></ul><p>​ 手机网络和WIFI网络切换, 网络断开和连上等情况, 也会使长连接断开。</p><ul><li>DHCP租期</li></ul><h4 id="tcp心跳包的作用" tabindex="-1"><a class="header-anchor" href="#tcp心跳包的作用" aria-hidden="true">#</a> TCP心跳包的作用</h4><p>​ 心跳包的主要作用是防止NAT超时，一些NAT设备判断是否淘汰NAT映射的依据是一定时间没有数据, 那么客户端就主动发一个数据。 其次是探测连接是否断开。链路断开, 没有写操作的TCP连接是感知不到的, 除非这个时候发送数据给服务器, 造成写超时, 否则TCP连接不会知道断开了。所以心跳包必须由客户端发送, 客户端发现连接断了, 还可以尝试重连服务器。</p><hr><h4 id="轮询-长轮询、长连接、websocket-这里为什么要用轮询" tabindex="-1"><a class="header-anchor" href="#轮询-长轮询、长连接、websocket-这里为什么要用轮询" aria-hidden="true">#</a> 轮询，长轮询、长连接、WebSocket，这里为什么要用轮询</h4><h5 id="轮询" tabindex="-1"><a class="header-anchor" href="#轮询" aria-hidden="true">#</a> 轮询</h5><p>​ 客户端定期询问服务器有没有新的消息, 这样服务器不用管客户端的地址是什么, 客户端来问, 直接告诉它就行。这种方案最简单, 对于一些不追求实时性的客户端来说, 很适合, 只需要把时间间隔设定成几个小时取一次, 就能很方便的解决问题。</p><p>​ 但对于即时通讯产品来说, 这种方案完全不能用. 假设即时通讯软件在网络畅通的情况下发送的消息要求对方10s内就能收到, 如果用轮询, 那么客户端要每隔5s连一次服务器, 如果在移动端, 手机的电量和流量很快就会被消耗殆尽。</p><h5 id="长轮询" tabindex="-1"><a class="header-anchor" href="#长轮询" aria-hidden="true">#</a> 长轮询</h5><p>​ 长轮询和轮询差不多，都是采用轮询的方式，但长轮询发送请求后服务器端不会立即返回数据，服务器端会阻塞请求连接不会立即断开，直到服务器端有数据更新或者是连接超时才返回，客户端请求后等待服务端回应，不论成功和失败都会再次请求，一直循环。 长轮询主要是服务端作回应。</p><h5 id="长连接" tabindex="-1"><a class="header-anchor" href="#长连接" aria-hidden="true">#</a> 长连接</h5><p>​ 客户端主动和服务器建立TCP长连接之后, 客户端定期向服务器发送心跳包, 有消息的时候, 服务器直接通过这个已经建立好的TCP连接通知客户端。WebSocket即是全双工通道，属于长连接的一种。</p><h5 id="为什么还使用轮询" tabindex="-1"><a class="header-anchor" href="#为什么还使用轮询" aria-hidden="true">#</a> 为什么还使用轮询</h5><p>并不是所有浏览器都支持ws，且开发维护成本更高，WS 需要维持长时间 TCP 连接，服务端开销比较大。使用轮询可以满足要求，且不对服务器造成太大压力。</p><hr><h2 id="oauth2-0流程" tabindex="-1"><a class="header-anchor" href="#oauth2-0流程" aria-hidden="true">#</a> OAUTH2.0流程</h2><p>以豆瓣申请QQ第三方登录为例</p><ol><li>申请appid和key</li><li>在豆瓣官网点击QQ登录，302跳转到QQ界面，点击授权并登录</li><li>授权成功后，QQ携带code回调豆瓣</li><li>豆瓣使用code申请access_token和refresh_token</li><li>豆瓣使用access_token获取QQ用户openid</li><li>豆瓣使用openid获取QQ用户信息</li><li>跳转回到豆瓣页面，成功登录</li></ol><figure><img src="https://raw.githubusercontent.com/nocetfy/image/main/img/image-20240313233321365.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="access-token与fresh-token之token的有效期问题" tabindex="-1"><a class="header-anchor" href="#access-token与fresh-token之token的有效期问题" aria-hidden="true">#</a> ACCESS_TOKEN与FRESH_TOKEN之token的有效期问题</h3><p>OAuth1.0中的access_token过期时间通常很长，安全性差。于是OAuth2.0推出了refresh_token。</p><p>OAuth2.0为了增强安全性,access token的有效期被大大缩短,通常只有几个小时,也可以申请增加到几十天,但是总是会有过期的时候。为此,OAuth2.0增加了一个refresh token的概念,这个token并不能用于请求api.它是用来在access token过期后刷新access token的一个标记.</p><h3 id="为什么使用refresh-token而不是直接去获取一个新的access-token呢" tabindex="-1"><a class="header-anchor" href="#为什么使用refresh-token而不是直接去获取一个新的access-token呢" aria-hidden="true">#</a> 为什么使用refresh_token而不是直接去获取一个新的access_token呢？</h3><p>access_token的有效期一般都很短，几个小时到几天不等。如果这个时间已经过了，难道强制要求用户重新登录一次？那是不是体验太糟糕了。这个时候refresh_token就有用武之地了。</p><p>这个时候客户端就可以通过refresh_token获得新的access_token，expire_in，与refresh_token。 周而复始，你的token的有效期就能被明显延长了</p><blockquote><p>这里所描述的场景,通常是指那种长周期的应用.也就是需要一直保持用户在线的应用. 在线并不是说用户一直在用这个应用,也可能是用户已经离开,我们在后台仍然可以自动维持用户的状态.例如一个自动发状态的应用.用户并不需要操作这个应用,我们会定时在后台利用用户的accesskey帮助用户发送状态.这也算是用户维持登录状态的一种.</p></blockquote><p>因此如果你的refresh_token有效期是1个月，你只需要每个月帮用户发一条状态的话,走上面的流程,一直下去,这个用户的登录状态一直都不会过期。（App移动端就可以这么来实现）</p>',82);function u(g,f){const a=t("ExternalLinkIcon");return r(),n("div",null,[c,e("p",null,[e("a",s,[d("https://xilidou.com/2018/09/26/dourpc-remoting/"),h(a)])]),p])}const b=o(l,[["render",u],["__file","设计问题.html.vue"]]);export{b as default};
