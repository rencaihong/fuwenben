<template>
  <div class="hello">
    <h1 @click="getContent">你好</h1>
    <div  id="editor" style="width:500px;height:500px;"></div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ue:'',
    }
  },
  mounted(){
    //实例化编辑器
    this.ue = UE.getEditor('editor',{
      toolbars: [//菜单配置
           ['bold', 'italic', 'underline', 'fontborder','fontfamily',
              'fontsize', 'paragraph','simpleupload', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc','preview',
              'justifyleft', //居左对齐
              'justifyright', //居右对齐
              'justifycenter', //居中对齐
              'justifyjustify',
              'imageleft', //左浮动
              'imageright', //右浮动
              'imagecenter', //居中
              'lineheight'
              ]
      ]
    });
    UE.Editor.prototype.getActionUrl = function(action) {
        if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
            return 'http://114.55.28.5/hunt/app/filesUp/photoUpload';
        } 
    }
  },
  methods:{
    getContent(){
          var html = this.ue.getContent();
          console.log(html,9)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
