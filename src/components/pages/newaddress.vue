<template>
  <div class="address_container">
     <div v-if="ifnewflag" class="no_add">
        <div class="no_address_tip">
          <img src="../../images/addressbg.png" alt=".">
        </div>
        <p class="tc">收货地址为空</p>  
        <div class="add_address tc"  @click="addAddressFn(false)">添加收货地址 </div>
     </div>
     <div  class="has_add" v-else>
       <ul class="address_manager">
          <li v-for="(item,index) in addressLists" :key="index">
             <div class="address_info">
               <van-row>
                  <van-col span="12" class="name_left"><span v-text="item.name"></span></van-col>
                  <van-col span="12" class="tel_right tr" ><span v-text="item.tel"></span></van-col>
               </van-row>
               <p v-text="item.address"></p>
             </div> 
             <div class="address_operate">
               <van-row>
                  <van-col span="12" class="name_left">
                    <span class="select_icon d-i-b" :class="active == index?'selectSpan_icon':''"  @click="selectadFn(index)"></span>
                    <span v-text="active == index?'默认地址':'设为默认'"></span></van-col>
                  <van-col span="12" class="tel_right tr" >
                    <span class="ad_edit d-i-b" @click="addAddressFn(true,item)"><i class="d-i-b"></i>编辑</span>
                    <span class="ad_delete d-i-b" @click="deleteaddressFn()"><i class="d-i-b"></i>删除</span>
                  </van-col>
               </van-row>  
             </div>
          </li>
       </ul> 
       <div class="add_address tc"  @click="addAddressFn(true)">添加新地址 </div>  
     </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        active:0, //选择默认地址
        ifnewflag:false,  //是否有地址
        addressLists:[
          {
            name:"张三",
            tel:'13332426729',
            address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
            selectflag:true
          },
          {
            name:"李四",
            tel:'13332426729',
            address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
            selectflag:false
          },
          {
            name:"赵武",
            tel:'13332426729',
            address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
            selectflag:false
          },
          {
            name:"Amy",
            tel:'13332426729',
            address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
            selectflag:false
           },
        ]
      }
    },
    methods:{
    //选择默认地址
     selectadFn(index){
       var this_ = this;
       this_.active = index;
     },
     //添加新地址-跳转到地址编辑页面
     addAddressFn(flag,obj){
      var this_ = this;
      this_.$router.push({  
        path: '/editaddress',
        name: 'EDITADDRESS',  
        params: {   
          flag: flag,
          data:obj
        }, 
      }); 
     },
     //删除地址
     deleteaddressFn(){
       var this_ = this;
       this_.$dialog.confirm({
        title: '',
        message: '删除后不可撤销，确定要删除此地址吗？'
      }).then(() => {
          
      }).catch(() => {
        
      });
     }
    },
    mounted() {
      var this_ = this;
      document.title = "地址管理";
    },    
  }
</script>

<style scoped lang="scss" type="text/css">
.address_container{
  .no_add{
    padding-top: 1.66rem;
    .no_address_tip{
      width: 1.31rem;
      height:1.31rem;
      margin: 0rem auto 0.3rem;
      img {
        width: 100%;
        height: 100%;
      }  
    } 
    p{
      font-size: 0.24rem;
      color: #999;
      margin-bottom:1.8rem;
    } 
    .add_address {
      width: 90vw;
      height: 1rem;
      background: url(../../images/longbtn.png) no-repeat;
      background-size:100% 100%;
      line-height: 0.8rem;
      color: white;
      font-size: 0.28rem;
      margin:0 auto;
    }
  }
  .has_add{
      margin-top: 0.3rem;
      margin-bottom: 1rem;
    .address_manager{
       li{
         background: white;
         margin-bottom:0.2rem;
         border-top: 1px solid #F2F2F2;
         border-bottom: 1px solid #F2F2F2;
         .address_info{
           padding: 0.3rem;
           box-sizing: border-box;
           .name_left,.tel_right{
              span{
                color:#111;
                font-size:0.3rem;
               } 
           }
           .tel_right{
             span{
              font-size:0.24rem;
             }  
           }
           p{
             margin-top:0.2rem;  
             box-sizing: border-box; 
           }
         }
         .address_operate{
           padding:0.3rem;
           border-top: 1px solid #F2F2F2;
           box-sizing: border-box;
           .name_left{
             span{
               font-size:0.28rem;  
             }
             .select_icon,.selectSpan_icon{
               width:0.28rem;
               height:0.28rem;
               background: url(../../images/noadselect.png) no-repeat;
               background-size: 100% 100%;  
               vertical-align: text-top;

             }
             .selectSpan_icon{
               background: url(../../images/adselect.png) no-repeat;
               background-size: 100% 100%;  
             }
           }
           .tel_right{
             span{
               margin-left:0.4rem;
               i{
                 width: 0.28rem;
                 height:0.28rem;
                 vertical-align: sub;
                 margin-right:0.1rem;
               }
             }
             .ad_edit,.ad_delete{
               i{
                background: url(../../images/editad.png) no-repeat;
                background-size:100% 100%;
                }
             }
             .ad_delete{ 
               i{
                background: url(../../images/deletead.png) no-repeat;
                background-size:100% 100%;
               } 
             }
           }
         }
       }
    }
    .add_address {
      position: fixed;
      width: 90vw;
      height: 1rem;
      bottom: 0;
      left: 5vw;
      background: url(../../images/longbtn.png) no-repeat;
      background-size:100% 100%;
      line-height: 0.8rem;
      color: white;
      font-size: 0.28rem;
    }
  }
  
}
</style>