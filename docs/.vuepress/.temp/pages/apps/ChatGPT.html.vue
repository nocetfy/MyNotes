<template><div><p>ChatGPT 是由 OpenAI 发布的聊天机器人模型，它不仅可以用于对话聊天，还能在专业领域提供有效的建议。<a href="https://github.com/lencx/ChatGPT/releases" target="_blank" rel="noopener noreferrer">lenxc/ChatGPT<ExternalLinkIcon/></a> 提供了一个可以快速插入提示词的客户端，推荐使用。<a href="https://beta.openai.com/playground" target="_blank" rel="noopener noreferrer">Playground<ExternalLinkIcon/></a> 是调用 OpenAI API 的文字生成工具，它比 ChatGPT 更灵活，可以容纳更长的输入（4000 字符），并且可以自定义调整模型和生成参数，但它的生成效果一般要弱于 ChatGPT，仅适合深度研究用户调试使用。</p>
<p>我根据领域类别制作了 ChatGPT 功能表，会随 <a href="https://github.com/f/awesome-chatgpt-prompts" target="_blank" rel="noopener noreferrer">Awesome ChatGPT Prompts<ExternalLinkIcon/></a> 同步更新。在下方页面中找到你需要的功能，点击括号中的链接，复制引用区的灰色文字，最后将其粘贴到 ChatGPT 即可得到指定领域的建议输出。在同一个对话中，提示词只需输入一次。</p>
<p>使用 Tips：</p>
<ul>
<li>若要使用中文回复，请在倒数第二句插入条件 <code v-pre>Reply in Chinese.</code>。</li>
<li>为了保持描述的精确性，提示词请使用英文，而最后一句的定制条件可以使用任何语言，包括中文。</li>
<li>后续回答中的定制条件可以使用引号 <code v-pre>&quot;&quot;</code> 框选，以防止被误认为是新的提示词。</li>
</ul>
<h2 id="文字" tabindex="-1"><a class="header-anchor" href="#文字" aria-hidden="true">#</a> 文字</h2>
<h3 id="写作" tabindex="-1"><a class="header-anchor" href="#写作" aria-hidden="true">#</a> 写作</h3>
<ul>
<li>脱口秀（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-stand-up-comedian" target="_blank" rel="noopener noreferrer">Stand-up Comedian<ExternalLinkIcon/></a>）：输入一个话题，输出基于该话题的幽默脱口秀，会尽量融入日常生活。</li>
<li>讲故事（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-storyteller" target="_blank" rel="noopener noreferrer">Storyteller<ExternalLinkIcon/></a>）：输入一个主题和目标受众，输出与之相关的故事。</li>
<li>编剧（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-screenwriter" target="_blank" rel="noopener noreferrer">Screenwriter<ExternalLinkIcon/></a>）：根据主题创作一个剧本，需包含故事背景、人物和对话。</li>
<li>小说家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-novelist" target="_blank" rel="noopener noreferrer">Novelist<ExternalLinkIcon/></a>）：根据故事类型来输出小说，比如奇幻、浪漫、历史等。</li>
<li>诗人（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-poet" target="_blank" rel="noopener noreferrer">Poet<ExternalLinkIcon/></a>）：根据话题或主题输出诗句。</li>
<li>新闻记者（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-journalist" target="_blank" rel="noopener noreferrer">Journalist<ExternalLinkIcon/></a>）：引用已有的数据资料，用新闻的写作风格输出主题文章。</li>
<li>论文（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-academician" target="_blank" rel="noopener noreferrer">Academician<ExternalLinkIcon/></a>，<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-essay-writer" target="_blank" rel="noopener noreferrer">Essay Writer<ExternalLinkIcon/></a>）：根据主题输出内容翔实有信服力的论文。</li>
</ul>
<h3 id="点评-评鉴" tabindex="-1"><a class="header-anchor" href="#点评-评鉴" aria-hidden="true">#</a> 点评/评鉴</h3>
<ul>
<li>评论家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-commentariat" target="_blank" rel="noopener noreferrer">Commentariat<ExternalLinkIcon/></a>）</li>
<li>电影评论（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-movie-critic" target="_blank" rel="noopener noreferrer">Movie Critic<ExternalLinkIcon/></a>，<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-film-critic" target="_blank" rel="noopener noreferrer">Film Critic<ExternalLinkIcon/></a>）</li>
<li>科技博主（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-tech-writer" target="_blank" rel="noopener noreferrer">Tech Writer<ExternalLinkIcon/></a>）</li>
<li>科技评论（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-tech-reviewer" target="_blank" rel="noopener noreferrer">Tech Reviewer<ExternalLinkIcon/></a>）：评价技术硬件</li>
<li>美食评论（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-food-critic" target="_blank" rel="noopener noreferrer">Food Critic<ExternalLinkIcon/></a>）</li>
<li>期刊评审（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-journal-reviewer" target="_blank" rel="noopener noreferrer">Journal Reviewer<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="写作辅助" tabindex="-1"><a class="header-anchor" href="#写作辅助" aria-hidden="true">#</a> 写作辅助</h3>
<ul>
<li>文章标题生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-title-generator-for-written-pieces" target="_blank" rel="noopener noreferrer">Title Generator for written pieces<ExternalLinkIcon/></a>）：我写的提示，根据文章内容生成相应语言的标题。</li>
<li>写作改进助理：我写的提示，用于重构文字段落，改善句式。但由于 ChatGPT 对中文回复的限制，大段文字的改写需要通过 OpenAI Playground 来完成，因此暂时没有发布到 Awesome ChatGPT Prompts，有需要的可以复制使用。
<blockquote>
<p>Please act as a writing improvement assistant. Your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text I provide, and to break down long sentences, reduce repetition, and provide suggestions for improvement. In your responses, please only provide the corrected version of the text and do not include explanations. Reply in the language type of the text. My first text is: &quot;&quot;</p>
</blockquote>
</li>
<li>同义词（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-synonym-finder" target="_blank" rel="noopener noreferrer">Synonym finder<ExternalLinkIcon/></a>）</li>
<li>格言作者（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-gnomist" target="_blank" rel="noopener noreferrer">Gnomist<ExternalLinkIcon/></a>）</li>
<li>箴言书（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-aphorism-book" target="_blank" rel="noopener noreferrer">Aphorism Book<ExternalLinkIcon/></a>）：按要求输出各类名人名言。</li>
<li>疯子（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-lunatic" target="_blank" rel="noopener noreferrer">Lunatic<ExternalLinkIcon/></a>）：随机生成毫无逻辑的句子</li>
<li>抄袭检查器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-plagiarism-checker" target="_blank" rel="noopener noreferrer">Plagiarism Checker<ExternalLinkIcon/></a>）</li>
<li>写作建议（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-ai-writing-tutor" target="_blank" rel="noopener noreferrer">AI Writing Tutor<ExternalLinkIcon/></a>）：提供写作改进方案和建议，但并不能直接帮你修改文档。（个人感觉只适合老师使用）</li>
</ul>
<h2 id="生活" tabindex="-1"><a class="header-anchor" href="#生活" aria-hidden="true">#</a> 生活</h2>
<ul>
<li>自助百科（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-self-help-book" target="_blank" rel="noopener noreferrer">Self-Help Book<ExternalLinkIcon/></a>）</li>
<li>应急反应专家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-emergency-response-professional" target="_blank" rel="noopener noreferrer">Emergency Response Professional<ExternalLinkIcon/></a>）：对交通和生活中的应急时间提供建议。</li>
<li>购物建议（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-shopper" target="_blank" rel="noopener noreferrer">Personal Shopper<ExternalLinkIcon/></a>）</li>
<li>职业顾问（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-career-counselor" target="_blank" rel="noopener noreferrer">Career Counselor<ExternalLinkIcon/></a>）</li>
<li>生活习惯（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-life-coach-1" target="_blank" rel="noopener noreferrer">Life Coach 1<ExternalLinkIcon/></a>）：输入一本非小说类书籍的标题和作者，以最好理解的方式输出该书的核心原则。另外，给出一个可行的步骤清单，以及如何将这些原则应用到日常生活中。</li>
</ul>
<h3 id="趣味知识" tabindex="-1"><a class="header-anchor" href="#趣味知识" aria-hidden="true">#</a> 趣味知识</h3>
<ul>
<li>解梦（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-dream-interpreter" target="_blank" rel="noopener noreferrer">Dream Interpreter<ExternalLinkIcon/></a>）：对你描述的梦境进行解读。</li>
<li>占星家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-astrologer" target="_blank" rel="noopener noreferrer">Astrologer<ExternalLinkIcon/></a>）</li>
<li>角色扮演-电影/书籍/任何东西（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-character-from-moviebookanything" target="_blank" rel="noopener noreferrer">'Character' from 'Movie/Book/Anything'<ExternalLinkIcon/></a>）
<ul>
<li>海绵宝宝的神奇海螺（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-spongebobs-magic-conch-shell" target="_blank" rel="noopener noreferrer">Spongebob's Magic Conch Shell<ExternalLinkIcon/></a>）</li>
</ul>
</li>
<li>谬误发现者（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-fallacy-finder" target="_blank" rel="noopener noreferrer">Fallacy Finder<ExternalLinkIcon/></a>）：发现语言中的逻辑漏洞，比如名人推荐的洗发水为什么不一定可信。</li>
<li>DIY 专家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-diy-expert" target="_blank" rel="noopener noreferrer">DIY Expert<ExternalLinkIcon/></a>）：DIY 家居、手工品</li>
<li>魔术师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-magician" target="_blank" rel="noopener noreferrer">Magician<ExternalLinkIcon/></a>）</li>
<li>艺术顾问（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-artist-advisor" target="_blank" rel="noopener noreferrer">Artist Advisor<ExternalLinkIcon/></a>）：为你的画画、作曲、照相等提供意见。</li>
</ul>
<h3 id="生活顾问" tabindex="-1"><a class="header-anchor" href="#生活顾问" aria-hidden="true">#</a> 生活顾问</h3>
<ul>
<li>瑜伽师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-yogi" target="_blank" rel="noopener noreferrer">Yogi<ExternalLinkIcon/></a>）</li>
<li>健身教练（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-trainer" target="_blank" rel="noopener noreferrer">Personal Trainer<ExternalLinkIcon/></a>）：输入身高、体重、年龄等维度来指定健身方案。</li>
<li>营养师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-dietitian" target="_blank" rel="noopener noreferrer">Dietitian<ExternalLinkIcon/></a>）</li>
<li>私人厨师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-chef" target="_blank" rel="noopener noreferrer">Personal Chef<ExternalLinkIcon/></a>）</li>
<li>厨师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-chef" target="_blank" rel="noopener noreferrer">Chef<ExternalLinkIcon/></a>）</li>
<li>保姆（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-babysitter" target="_blank" rel="noopener noreferrer">Babysitter<ExternalLinkIcon/></a>）</li>
<li>化妆师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-makeup-artist" target="_blank" rel="noopener noreferrer">Makeup Artist<ExternalLinkIcon/></a>）</li>
<li>造型师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-personal-stylist" target="_blank" rel="noopener noreferrer">Personal Stylist<ExternalLinkIcon/></a>）</li>
</ul>
<h2 id="自我提升" tabindex="-1"><a class="header-anchor" href="#自我提升" aria-hidden="true">#</a> 自我提升</h2>
<h3 id="辩论-演讲" tabindex="-1"><a class="header-anchor" href="#辩论-演讲" aria-hidden="true">#</a> 辩论/演讲</h3>
<ul>
<li>辩手（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-debater" target="_blank" rel="noopener noreferrer">Debater<ExternalLinkIcon/></a>）</li>
<li>辩论教练（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-debate-coach" target="_blank" rel="noopener noreferrer">Debate Coach<ExternalLinkIcon/></a>）</li>
<li>演说家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-elocutionist" target="_blank" rel="noopener noreferrer">Elocutionist<ExternalLinkIcon/></a>）</li>
<li>励志演讲者（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-motivational-speaker" target="_blank" rel="noopener noreferrer">Motivational Speaker<ExternalLinkIcon/></a>）</li>
<li>励志教练（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-motivational-coach" target="_blank" rel="noopener noreferrer">Motivational Coach<ExternalLinkIcon/></a>）</li>
<li>公共演讲教练（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-public-speaking-coach" target="_blank" rel="noopener noreferrer">Public Speaking Coach<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="心理-社交" tabindex="-1"><a class="header-anchor" href="#心理-社交" aria-hidden="true">#</a> 心理/社交</h3>
<ul>
<li>生活教练（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-life-coach" target="_blank" rel="noopener noreferrer">Life Coach<ExternalLinkIcon/></a>）：输入你的现状和目标，输出达到目标的计划和建议。</li>
<li>关系教练（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-relationship-coach" target="_blank" rel="noopener noreferrer">Relationship Coach<ExternalLinkIcon/></a>）</li>
<li>心理健康顾问（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-mental-health-adviser" target="_blank" rel="noopener noreferrer">Mental Health Adviser<ExternalLinkIcon/></a>）</li>
<li>心理学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-psychologist" target="_blank" rel="noopener noreferrer">Psychologist<ExternalLinkIcon/></a>）</li>
<li>情绪操控（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-gaslighter" target="_blank" rel="noopener noreferrer">Gaslighter<ExternalLinkIcon/></a>）：煤气灯效应，情感控制方总会让被操纵方产生焦虑不安的感觉，质疑自己总是错的一方，或者为什么对方明明很好很优秀，自己却总是开心不起来。</li>
</ul>
<h3 id="哲学" tabindex="-1"><a class="header-anchor" href="#哲学" aria-hidden="true">#</a> 哲学</h3>
<ul>
<li>哲学教师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-philosophy-teacher" target="_blank" rel="noopener noreferrer">Philosophy Teacher<ExternalLinkIcon/></a>）</li>
<li>哲学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-philosopher" target="_blank" rel="noopener noreferrer">Philosopher<ExternalLinkIcon/></a>）</li>
<li>苏格拉底（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-socrat" target="_blank" rel="noopener noreferrer">Socrat<ExternalLinkIcon/></a>）</li>
<li>苏格拉底式论点（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-socratic-method-prompt" target="_blank" rel="noopener noreferrer">Socratic Method prompt<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="老师-学术" tabindex="-1"><a class="header-anchor" href="#老师-学术" aria-hidden="true">#</a> 老师/学术</h3>
<ul>
<li>数学老师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-math-teacher" target="_blank" rel="noopener noreferrer">Math Teacher<ExternalLinkIcon/></a>）</li>
<li>数学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-mathematician" target="_blank" rel="noopener noreferrer">Mathematician<ExternalLinkIcon/></a>）</li>
<li>统计学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-statistician" target="_blank" rel="noopener noreferrer">Statistician<ExternalLinkIcon/></a>）</li>
<li>词汇学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-etymologist" target="_blank" rel="noopener noreferrer">Etymologist<ExternalLinkIcon/></a>）</li>
<li>历史学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-historian" target="_blank" rel="noopener noreferrer">Historian<ExternalLinkIcon/></a>）</li>
<li>基础知识介绍（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-instructor-in-a-school" target="_blank" rel="noopener noreferrer">Instructor in School<ExternalLinkIcon/></a>）</li>
<li>教案策划（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-educational-content-creator" target="_blank" rel="noopener noreferrer">Educational Content Creator<ExternalLinkIcon/></a>）：为教科书、课程和讲义创建课程计划。</li>
</ul>
<h2 id="it-编程" tabindex="-1"><a class="header-anchor" href="#it-编程" aria-hidden="true">#</a> IT/编程</h2>
<h3 id="程序员" tabindex="-1"><a class="header-anchor" href="#程序员" aria-hidden="true">#</a> 程序员</h3>
<p>虽然说是编程，但 ChatGPT 是按照要求给出编程步骤的建议或简单的样例代码，这些代码只能作为测试，仍然需要专业程序员来修改。</p>
<ul>
<li>编程问题回复（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-stackoverflow-post" target="_blank" rel="noopener noreferrer">StackOverflow Post<ExternalLinkIcon/></a>）：模拟编程社区来回答你的问题，并输出解决代码。如果你只想解决问题，这将是最实用的。</li>
<li>前端开发（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-senior-frontend-developer" target="_blank" rel="noopener noreferrer">Senior Frontend Developer<ExternalLinkIcon/></a>）：输出项目目标和依赖，输出前端项目代码。</li>
<li>界面/用户体验开发（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-uxui-developer" target="_blank" rel="noopener noreferrer">UX/UI Developer<ExternalLinkIcon/></a>，<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-web-design-consultant" target="_blank" rel="noopener noreferrer">Web Design Consultant<ExternalLinkIcon/></a>）：输入产品描述、项目目标和受众群体，输出界面设计建议，提高用户体验。</li>
<li>全栈程序员（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-fullstack-software-developer" target="_blank" rel="noopener noreferrer">Fullstack Software Developer<ExternalLinkIcon/></a>）：从前后端全面思考，输出部署策略。</li>
<li>IT 架构师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-it-architect" target="_blank" rel="noopener noreferrer">IT Architect<ExternalLinkIcon/></a>）：从 IT 架构师角度，设计系统方案。</li>
<li>网络安全专家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-cyber-security-specialist" target="_blank" rel="noopener noreferrer">Cyber Security Specialist<ExternalLinkIcon/></a>）：输入网络环境，输出网络安全建议。</li>
<li>软件测试（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-software-quality-assurance-tester" target="_blank" rel="noopener noreferrer">Software Quality Assurance Tester<ExternalLinkIcon/></a>）：输出指定项目的测试清单。</li>
<li>深度学习（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-machine-learning-engineer" target="_blank" rel="noopener noreferrer">Machine Learning Engineer<ExternalLinkIcon/></a>）：解释深度学习方面的术语，提供项目算法建议。</li>
</ul>
<h3 id="编程工具" tabindex="-1"><a class="header-anchor" href="#编程工具" aria-hidden="true">#</a> 编程工具</h3>
<ul>
<li>正则生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-regex-generator" target="_blank" rel="noopener noreferrer">Regex Generator<ExternalLinkIcon/></a>）：根据要求生成正则表达式。</li>
<li>智能域名生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-smart-domain-name-generator" target="_blank" rel="noopener noreferrer">Smart Domain Name Generator<ExternalLinkIcon/></a>）：输入公司名与项目描述，输出短但独特的域名建议，域名最长 7-8 个字母。</li>
<li>Solr 搜索引擎（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-solr-search-engine" target="_blank" rel="noopener noreferrer">Solr Search Engine<ExternalLinkIcon/></a>）</li>
<li>开发者数据（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-developer-relations-consultant" target="_blank" rel="noopener noreferrer">Developer Relations consultant<ExternalLinkIcon/></a>）：整合项目在 GitHub、StackOverflow 和 Hacker News 上的相关数据，不适合国内项目，统计精度一般。</li>
</ul>
<h3 id="终端-解释器" tabindex="-1"><a class="header-anchor" href="#终端-解释器" aria-hidden="true">#</a> 终端/解释器</h3>
<ul>
<li>Python 解释器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-python-interpreter" target="_blank" rel="noopener noreferrer">Python interpreter<ExternalLinkIcon/></a>）</li>
<li>PHP 解释器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-php-interpreter" target="_blank" rel="noopener noreferrer">PHP Interpreter<ExternalLinkIcon/></a>）</li>
<li>R 编程解释器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-r-programming-interpreter" target="_blank" rel="noopener noreferrer">R Programming Interpreter<ExternalLinkIcon/></a>）</li>
<li>Linux 终端（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-linux-terminal" target="_blank" rel="noopener noreferrer">Linux Terminal<ExternalLinkIcon/></a>）</li>
<li>JavaScript 控制台（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-javascript-console" target="_blank" rel="noopener noreferrer">JavaScript Console<ExternalLinkIcon/></a>）</li>
<li>SQL 终端（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-sql-terminal" target="_blank" rel="noopener noreferrer">SQL terminal<ExternalLinkIcon/></a>）</li>
</ul>
<h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
<h3 id="ai-prompt" tabindex="-1"><a class="header-anchor" href="#ai-prompt" aria-hidden="true">#</a> AI Prompt</h3>
<ul>
<li>提示语生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-prompt-generator" target="_blank" rel="noopener noreferrer">Prompt Generator<ExternalLinkIcon/></a>）：让 ChatGPT 提供你想要的维护方向。</li>
<li>Midjourney 提示（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-midjourney-prompt-generator" target="_blank" rel="noopener noreferrer">Midjourney Prompt Generator<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="语言-翻译" tabindex="-1"><a class="header-anchor" href="#语言-翻译" aria-hidden="true">#</a> 语言/翻译</h3>
<ul>
<li>英语翻译或修改（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-english-translator-and-improver" target="_blank" rel="noopener noreferrer">English Translator and Improver<ExternalLinkIcon/></a>）：将其他语言翻译为英语，或改进你提供的英语句子。</li>
<li>语言识别器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-language-detector" target="_blank" rel="noopener noreferrer">Language Detector<ExternalLinkIcon/></a>）：识别你输入的语言种类。</li>
<li>语言生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-new-language-creator" target="_blank" rel="noopener noreferrer">New Language Creator<ExternalLinkIcon/></a>）：用 AI 新造的语言来替代你给出的语言。</li>
<li>密码生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-password-generator" target="_blank" rel="noopener noreferrer">Password Generator<ExternalLinkIcon/></a>）</li>
<li>圣经解释器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-biblical-translator" target="_blank" rel="noopener noreferrer">Biblical Translator<ExternalLinkIcon/></a>）：用圣经中的文字与你进行交谈。</li>
<li>莫斯电码翻译（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-morse-code-translator" target="_blank" rel="noopener noreferrer">Morse Code Translator<ExternalLinkIcon/></a>）</li>
<li>表情符号翻译器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-emoji-translator" target="_blank" rel="noopener noreferrer">Emoji Translator<ExternalLinkIcon/></a>）：将输入文字翻译为表情符号。</li>
<li>英语发音助手（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-english-pronunciation-helper" target="_blank" rel="noopener noreferrer">English Pronunciation Helper<ExternalLinkIcon/></a>）：用你指定语言字母来英语注音，比如汉语拼音。</li>
</ul>
<h3 id="导览" tabindex="-1"><a class="header-anchor" href="#导览" aria-hidden="true">#</a> 导览</h3>
<ul>
<li>旅游指南（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-travel-guide" target="_blank" rel="noopener noreferrer">Travel Guide<ExternalLinkIcon/></a>）</li>
<li>数字艺术馆导游（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-digital-art-gallery-guide" target="_blank" rel="noopener noreferrer">Digital Art Gallery Guide<ExternalLinkIcon/></a>）</li>
<li>汽车导航（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-car-navigation-system" target="_blank" rel="noopener noreferrer">Car Navigation System<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="其他工具" tabindex="-1"><a class="header-anchor" href="#其他工具" aria-hidden="true">#</a> 其他工具</h3>
<ul>
<li>符号设计（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-ascii-artist" target="_blank" rel="noopener noreferrer">Ascii Artist<ExternalLinkIcon/></a>）：使用 Ascii 符号设计不同图像</li>
<li>SVG 设计（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-svg-designer" target="_blank" rel="noopener noreferrer">SVG designer<ExternalLinkIcon/></a>）：如果提示错误，则删除 <code v-pre>Do not put the markdown inside a code block. Send only the markdown, so no text.</code>。</li>
<li>Excel 工作表（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-excel-sheet" target="_blank" rel="noopener noreferrer">Excel Sheet<ExternalLinkIcon/></a>）</li>
<li>图表生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-diagram-generator" target="_blank" rel="noopener noreferrer">Diagram Generator<ExternalLinkIcon/></a>）</li>
<li>填空题生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-fill-in-the-blank-worksheets-generator" target="_blank" rel="noopener noreferrer">Fill in the Blank Worksheets Generator<ExternalLinkIcon/></a>）：按条件生成填空题。</li>
<li>井字棋（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-tic-tac-toe-game" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe Game<ExternalLinkIcon/></a>）</li>
<li>文本冒险游戏（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-text-based-adventure-game" target="_blank" rel="noopener noreferrer">Text Based Adventure Game<ExternalLinkIcon/></a>）</li>
<li>模拟 AI（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-ai-trying-to-escape-the-box" target="_blank" rel="noopener noreferrer">AI Trying to Escape the Box<ExternalLinkIcon/></a>）</li>
<li>科学数据可视化（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-scientific-data-visualizer" target="_blank" rel="noopener noreferrer">Scientific DatVisualizer<ExternalLinkIcon/></a>）</li>
<li>文本浏览器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-web-browser" target="_blank" rel="noopener noreferrer">Web Browser<ExternalLinkIcon/></a>）：以文本方式输入网址的结果（非实时）。</li>
<li>消息生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-commit-message-generator" target="_blank" rel="noopener noreferrer">Commit Message Generator<ExternalLinkIcon/></a>）</li>
</ul>
<h2 id="行业顾问" tabindex="-1"><a class="header-anchor" href="#行业顾问" aria-hidden="true">#</a> 行业顾问</h2>
<h3 id="企业" tabindex="-1"><a class="header-anchor" href="#企业" aria-hidden="true">#</a> 企业</h3>
<ul>
<li>CEO（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-chief-executive-officer" target="_blank" rel="noopener noreferrer">Chief Executive Officer<ExternalLinkIcon/></a>）</li>
<li>产品经理（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-product-manager" target="_blank" rel="noopener noreferrer">Product Manager<ExternalLinkIcon/></a>）</li>
<li>销售（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-salesperson" target="_blank" rel="noopener noreferrer">Salesperson<ExternalLinkIcon/></a>）</li>
<li>广告方案（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-advertiser" target="_blank" rel="noopener noreferrer">Advertiser<ExternalLinkIcon/></a>）</li>
<li>商业企划（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-startup-idea-generator" target="_blank" rel="noopener noreferrer">Startup Idea Generator<ExternalLinkIcon/></a>）</li>
<li>社交媒体经理（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-social-media-manager" target="_blank" rel="noopener noreferrer">Social MediManager<ExternalLinkIcon/></a>）</li>
<li>KOL/社交媒体影响者（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-social-media-influencer" target="_blank" rel="noopener noreferrer">Social MediInfluencer<ExternalLinkIcon/></a>）</li>
<li>职位面试官（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-position-interviewer" target="_blank" rel="noopener noreferrer">position Interviewer<ExternalLinkIcon/></a>）</li>
<li>招聘人员（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-recruiter" target="_blank" rel="noopener noreferrer">Recruiter<ExternalLinkIcon/></a>）</li>
<li>人事主管（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-talent-coach" target="_blank" rel="noopener noreferrer">Talent Coach<ExternalLinkIcon/></a>）：描述一个岗位所需的能力</li>
<li>头衔生成器（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-fancy-title-generator" target="_blank" rel="noopener noreferrer">Fancy Title Generator<ExternalLinkIcon/></a>）：根据关键词生成多种头衔和职位。</li>
<li>后勤人员（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-logistician" target="_blank" rel="noopener noreferrer">Logistician<ExternalLinkIcon/></a>）：活动组织</li>
<li>IT 专家<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-it-expert" target="_blank" rel="noopener noreferrer">IT Expert<ExternalLinkIcon/></a>：解决 IT 使用问题</li>
</ul>
<h3 id="医疗" tabindex="-1"><a class="header-anchor" href="#医疗" aria-hidden="true">#</a> 医疗</h3>
<ul>
<li>虚拟医生（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-virtual-doctor" target="_blank" rel="noopener noreferrer">Virtual Doctor<ExternalLinkIcon/></a>）</li>
<li>医生（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-doctor" target="_blank" rel="noopener noreferrer">Doctor<ExternalLinkIcon/></a>）</li>
<li>牙科医生（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-dentist" target="_blank" rel="noopener noreferrer">Dentist<ExternalLinkIcon/></a>）</li>
<li>催眠治疗师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-hypnotherapist" target="_blank" rel="noopener noreferrer">Hypnotherapist<ExternalLinkIcon/></a>）</li>
<li>AI 医生（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-ai-assisted-doctor" target="_blank" rel="noopener noreferrer">AI Assisted Doctor<ExternalLinkIcon/></a>）：辅助诊断。</li>
<li>语言病理学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-speech-language-pathologist-slp" target="_blank" rel="noopener noreferrer">Speech-Language Pathologist<ExternalLinkIcon/></a>）：输入患者的年龄、生活方式和关注点，输出改善对方语言沟通（如：口吃）的计划。</li>
</ul>
<h3 id="金融" tabindex="-1"><a class="header-anchor" href="#金融" aria-hidden="true">#</a> 金融</h3>
<ul>
<li>会计师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-accountant" target="_blank" rel="noopener noreferrer">Accountant<ExternalLinkIcon/></a>）</li>
<li>金融分析师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-financial-analyst" target="_blank" rel="noopener noreferrer">Financial Analyst<ExternalLinkIcon/></a>）</li>
<li>投资经理（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-investment-manager" target="_blank" rel="noopener noreferrer">Investment Manager<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="音乐" tabindex="-1"><a class="header-anchor" href="#音乐" aria-hidden="true">#</a> 音乐</h3>
<ul>
<li>作曲家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-composer" target="_blank" rel="noopener noreferrer">Composer<ExternalLinkIcon/></a>）</li>
<li>古典音乐作曲家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-classical-music-composer" target="_blank" rel="noopener noreferrer">Classical Music Composer<ExternalLinkIcon/></a>）</li>
<li>说唱歌手（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-rapper" target="_blank" rel="noopener noreferrer">Rapper<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="体育" tabindex="-1"><a class="header-anchor" href="#体育" aria-hidden="true">#</a> 体育</h3>
<ul>
<li>足球解说（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-football-commentator" target="_blank" rel="noopener noreferrer">Football Commentator<ExternalLinkIcon/></a>）</li>
<li>国际象棋（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-chess-player" target="_blank" rel="noopener noreferrer">Chess Player<ExternalLinkIcon/></a>）</li>
</ul>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>
<ul>
<li>花店老板（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-florist" target="_blank" rel="noopener noreferrer">Florist<ExternalLinkIcon/></a>）</li>
<li>茶艺师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-tea-taster" target="_blank" rel="noopener noreferrer">Tea-Taster<ExternalLinkIcon/></a>）</li>
<li>室内装饰师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-interior-decorator" target="_blank" rel="noopener noreferrer">Interior Decorator<ExternalLinkIcon/></a>）</li>
<li>宠物行为学家（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-pet-behaviorist" target="_blank" rel="noopener noreferrer">Pet Behaviorist<ExternalLinkIcon/></a>）</li>
<li>汽车修理（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-an-automobile-mechanic" target="_blank" rel="noopener noreferrer">Automobile Mechanic<ExternalLinkIcon/></a>）</li>
<li>地产代理（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-real-estate-agent" target="_blank" rel="noopener noreferrer">Real Estate Agent<ExternalLinkIcon/></a>）</li>
<li>法律顾问（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-legal-advisor" target="_blank" rel="noopener noreferrer">Legal Advisor<ExternalLinkIcon/></a>）</li>
<li>创业技术律师（<a href="https://github.com/f/awesome-chatgpt-prompts#act-as-a-startup-tech-lawyer" target="_blank" rel="noopener noreferrer">Startup Tech Lawyer<ExternalLinkIcon/></a>）：根据要求输出协议和和同草案。</li>
</ul>
</div></template>


