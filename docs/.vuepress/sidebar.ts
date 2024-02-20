import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  // 指定显示页面
  {
    text: "🧰 算法笔记",
    icon: "",
    prefix: "/leetcode/",
    link: "",
    collapsible: true,
    children: [
      {
        text: "基础",
        icon: "check",
        prefix: "a-base/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "排序",
        icon: "check",
        prefix: "sort/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "数组",
        icon: "check",
        prefix: "array/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "链表",
        icon: "check",
        prefix: "list/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "栈与队列",
        icon: "check",
        prefix: "stack/",
        link: "",
        collapsible: true,
        children: "structure",
      },

      {
        text: "字符串",
        icon: "check",
        prefix: "string/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "哈希表",
        icon: "check",
        prefix: "hash/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "位运算",
        icon: "check",
        prefix: "bit/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "图论",
        icon: "check",
        prefix: "graph/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "树",
        icon: "check",
        prefix: "tree/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "并查集",
        icon: "check",
        prefix: "unionfind/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "回溯",
        icon: "check",
        prefix: "backtracking/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "贪心",
        icon: "check",
        prefix: "greedy/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "前缀和与差分",
        icon: "check",
        prefix: "prefix/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "动态规划",
        icon: "check",
        prefix: "dp/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "思维题",
        icon: "check",
        prefix: "thought/",
        link: "",
        collapsible: true,
        children: "structure",
      },
    ],
  },
  {
    text: "🚀 面试笔记",
    icon: "",
    prefix: "/interview/",
    link: "",
    collapsible: true,
    children: [
       {
        text: "计算机基础",
        icon: "ability",
        prefix: "计算机基础/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "Java",
        icon: "ability",
        prefix: "Java/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "MySQL",
        icon: "ability",
        prefix: "MySQL/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "Redis",
        icon: "ability",
        prefix: "Redis/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "消息队列",
        icon: "ability",
        prefix: "MQ/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "框架",
        icon: "ability",
        prefix: "框架/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "数据结构与算法",
        icon: "ability",
        prefix: "数据结构与算法/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "网络",
        icon: "ability",
        prefix: "网络/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "架构",
        icon: "ability",
        prefix: "架构/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "分布式",
        icon: "ability",
        prefix: "分布式/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "运维开发",
        icon: "ability",
        prefix: "DevOps/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "开放设计",
        icon: "ability",
        prefix: "开放设计/",
        link: "",
        collapsible: true,
        children: "structure",
      },
    ],
  },
]);
