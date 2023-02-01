export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-8daa1a0e","v-6bbce1f7","v-4cfc448e","v-5ba5e092","v-6f1636b0","v-43231962","v-04afd68b","v-41f7dbaa","v-4bb5cf4c","v-78372a2b","v-659d6601","v-62ff07cd","v-fa1cbdaa","v-221bfac8","v-3c88ad2b","v-d74f668e","v-513499aa","v-018213d9","v-57128fbc","v-47d2d9aa","v-40f5fe4b","v-8dbc9712","v-d53cdd4e","v-1c45489a","v-c719ecb8","v-358f243f","v-6eafd32b","v-4248c02f","v-6725d240"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

