<template>
 <div class="book_container">
    <van-row class="book_item"  v-for="item in 4" :key="item">
        <van-col span="10" class="title_left">
          <img src="../../images/yunnan1.jpg" alt="相册">
          <i class="book_ststus d-i-b "></i>
        </van-col>
        <van-col span="14" class="content-right">
          <div class="opearte_container">
            <span class="delete_photo d-i-b"></span>
            <span class="preview_photo d-i-b"></span>
            <span class="edit_photo d-i-b"></span>
          </div>
          <div class="use_photo tc">制作相册</div>
        </van-col>
      </van-row>
 </div>
</template>

<script>
  export default {
    mounted() {
     document.title = "我的书架";
    }    
  }
</script>

<style scoped lang="scss" type="text/css">
.book_container{
   padding: 0.3rem 0rem 0 0.5rem;
   box-sizing: border-box; 
   .book_item{
      margin-bottom:0.6rem;
      border-bottom:1px solid #ccc;
      padding-bottom:0.3rem;
      box-sizing: border-box; 
      .title_left{
        position: relative;
        img{
          width:100%;
          height: 4rem;
        }
        i{
          position: absolute;
          top: 0.1rem;
          right: 0;
          width: 0.84rem;
          height: 0.28rem;
          background: url(../../images/finish.png) no-repeat;
          background-size: 100% 100%;
        }
        i.fail_status{
          background: url(../../images/fail.png) no-repeat;
          background-size: 100% 100%;  
        }
      }
      .content-right{
        .opearte_container{
          display:flex;
          flex-direction: row;
          flex-grow: 3;
          width: 100%;
          padding: 25% 0.2rem 0;
          box-sizing: border-box;
          span{
            width: 1.22rem;
            height:1.20rem;
            background: url(../../images/delete.png) no-repeat;
            background-size: 100% 100%;
          }
          .preview_photo{
            background: url(../../images/bookpreview.png) no-repeat;
            background-size: 100% 100%;
          }
          .edit_photo{
            background: url(../../images/editbook.png) no-repeat;
            background-size: 100% 100%;
          }
        }
        .use_photo{
          width: 3.06rem;
          height: 0.86rem;
          line-height: 0.76rem;
          margin: 0.3rem auto 0;
          background: url(../../images/next.png) no-repeat;
          background-size: 100% 100%;
          color:white;
          font-size:0.3rem;
        }
    }
   }
  
}

</style>