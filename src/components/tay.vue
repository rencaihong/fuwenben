<template>
  <div>
    <span @click="spanList">asdasd</span>   
    <textarea id="elm1" rows="15" cols="80" style="width: 60%"></textarea>
  </div>
</template>
<script>
  import tinymce from "tinymce";
  import $ from 'jquery';
  import 'tinymce/themes/modern/theme'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/textcolor'
  export default {
    data(){
      return{
        
      }
    },
    methods:{
      spanList(){
        console.log(tinymce.activeEditor.getContent());
      }
    },
      mounted(){
        tinymce.init({
            selector: 'textarea',
            tinymceHtml: '请输入内容',
            height: 500,
            theme: 'modern',
            powerpaste_allow_local_images: true,
            language_url: '/static/langs/zh_CN.js',
            language: 'zh_CN',
            skin_url: '/static/skins/lightgray',
            toolbar: [
              'undo redo | styleselect | bold italic underline | fontsizeselect | link image alignleft aligncenter alignright forecolor backcolor',
            ],
            plugins: ['image textcolor'],
              // file_picker_types: 'image', 
              // and here's our custom image picker
              // file_picker_callback: function(cb, value, meta) {
              //   var input = document.createElement('input');
              //   input.setAttribute('type', 'file');
              //   input.setAttribute('accept', 'image/*');
              //   input.onchange = function() {
              //     var file = this.files[0];
                  
              //     var reader = new FileReader();
              //     reader.onload = function () {
              //       // Note: Now we need to register the blob in TinyMCEs image blob
              //       // registry. In the next release this part hopefully won't be
              //       // necessary, as we are looking to handle it internally.
              //       var id = 'blobid' + (new Date()).getTime();
              //       var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
              //       var base64 = reader.result.split(',')[1];
              //       var blobInfo = blobCache.create(id, file, base64);
              //       blobCache.add(blobInfo);

              //       // call the callback and populate the Title field with the file name
              //       cb(blobInfo.blobUri(), { title: file.name });
              //     };
              //     reader.readAsDataURL(file);
              //     console.log(reader.readAsDataURL(file),file,0)
              //   };
                
              //   input.click();
              // },
              
              file_browser_callback: function (field_name, url, type, win) {
                if (type == 'media') return false;
                var accept = {
                    image: 'image/png, image/gif, image/jpg, image/jpeg',
                    media: 'audio/mpeg, audio/wav, video/mp4, video/webm, video/ogg'
                };
                var eleFile = $('<input type="file" accept="' + accept[type] + '">');
                   eleFile.click();
                   eleFile.on('change', function () {
                    var file = this.files[0];
                    var name = file.name || 'screenshot.png';
                    var data = new FormData();
                       data.append('file', file, name);
                    $.ajax(process.env.UPLOAD_URL + '/filesUp/photoUpload', {
                        data: data,
                        type: 'POST',
                        processData: false,
                        contentType: false
                    }).done(function (res) {
                        if (res.code == 10000) {
                            let url = 'http://114.55.75.34:85';
                            $('#' + field_name).val(url + res.data);
                            // let img = "<img style='width:100px;height:100px;' src= "+url+ res.data +" />";
                            // tinymce.activeEditor.add(img)
                        } else {
                            alert(0);
                        }
                    }).fail(function (xhr) {
                        if (xhr.responseText) {
                            alert(xhr.responseText,8);
                        }
                    });
                });
            }
         });
 //        if ( ! function_exists( 'wpex_mce_buttons' ) ) {
 // function wpex_mce_buttons( $buttons ) {
 // array_unshift( $buttons, 'fontselect' ); // 添加字体选择
 // array_unshift( $buttons, 'fontsizeselect' ); // 添加字体大小选择
 // return $buttons;
 // }
 // }
 // add_filter( 'mce_buttons_2', 'wpex_mce_buttons' );
      }
  }
</script>