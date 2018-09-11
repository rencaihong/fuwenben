<template>
  <div class="hello">
    <input type="text" name="" v-model="msg">
    <button @click="set">nihao</button>
    <div  id="map" style="width:500px;height:500px;"></div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'',
    }
  },
  mounted(){
    var map = new BMap.Map('map');  
   var point =  new BMap.Point(121.491, 31.233);
      map.centerAndZoom(point, 11);
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var marker = new BMap.Marker(point);        // 创建标注    
      map.addOverlay(marker); // 将标注添加到地图中
      marker.addEventListener("click", function(){    
          alert("您点击了标注");    
      });    
      // marker.disableDragging();    //关闭标注拖拽功能
      // marker.enableDragging();    //开启标注拖拽功能
      // marker.addEventListener("dragend", function(e){    //监听标注拖拽的位置
      //     alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
      // })  
     
                 
  },
  methods:{
    set(){
      var map = new BMap.Map('map');  
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
       var myGeo = new BMap.Geocoder();      
    // 将地址解析结果显示在地图上，并调整地图视野  
      let mag = this.msg;  
      myGeo.getPoint(mag, function(point){      
        if (point) {      
            map.centerAndZoom(point, 11);      
            map.addOverlay(new BMap.Marker(point));      
        }      
       }, 
      mag);   
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
