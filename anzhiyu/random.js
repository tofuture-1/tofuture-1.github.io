var posts=["2025/03/16/综合应用实例/","2025/02/24/相关信源网站汇总/","2025/03/03/网站简单使用指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };