(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{409:function(t,i,n){"use strict";n.r(i);var s=n(0),e=n(48),d=n.n(e);n(49);s.a.use(d.a);var o={data:function(){return{show:!1,code:',\n<div class="rm-swiper-con">\n\t<div class="lr">\n\t\t<div class="vui-title">左右方向循环</div>\n\t\t<rm-swiper @on-slide="slide" v-model="index" :loop="true" :auto="false" effect="slide" direction="horizontal" :pagination="true">\n\t\t\t<template slot="misty-slide-list">\n\t\t\t\t<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>\n\t\t\t</template>\n\t\t</rm-swiper>\n\t</div>\n\t<div class="lr">\n\t\t<div class="vui-title">左右方向不循环</div>\n\t\t<rm-swiper @on-slide="slide" v-model="index" :loop="false" :auto="false" effect="slide" direction="horizontal" :pagination="true">\n\t\t\t<template slot="misty-slide-list">\n\t\t\t\t<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>\n\t\t\t</template>\n\t\t</rm-swiper>\n\t</div>\n\t<div class="tb">\n\t\t<div class="vui-title">纵向滚动循环</div>\n\t\t<rm-swiper @on-slide="slide1" v-model="index1" :loop="true" :auto="false" effect="slide" direction="vertical" :pagination="true">\n\t\t\t<template slot="misty-slide-list">\n\t\t\t\t<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>\n\t\t\t</template>\n\t\t</rm-swiper>\n\t</div>\n\t<div class="tb">\n\t\t<div class="vui-title">纵向滚动不循环</div>\n\t\t<rm-swiper @on-slide="slide1" v-model="index1" :loop="false" :auto="false" effect="slide" direction="vertical" :pagination="true">\n\t\t\t<template slot="misty-slide-list">\n\t\t\t\t<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>\n\t\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>\n\t\t\t</template>\n\t\t</rm-swiper>\n\t</div>\n\t<div>\n\t\t<div class="vui-title">手动切换的文字型左右轮播</div>\n\t\t<rm-swiper v-model="index2" @on-slide="slide2" direction="horizontal" :pagination="true">\n\t\t\t<template slot="misty-slide-list">\n\t\t\t\t<div v-for="(i, index) in 7" :key="index">{{ index }}</div>\n\t\t\t</template>\n\t\t</rm-swiper>\n\t\t<div class="vui-button" @click="slideTo(7)">下一页</div>\n\t\t<div class="vui-button" @click="slideTo(7)">当前页{{ index2 }}</div>\n\t</div>\n\n\t<div class="vui-title">渐隐渐显</div>\n\t<rm-swiper @on-slide="slide3" v-model="index3" :loop="true" :auto="false" effect="fade" direction="horizontal" :pagination="true">\n\t\t<template slot="misty-slide-list">\n\t\t\t<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>\n\t\t\t<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>\n\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>\n\t\t\t<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>\n\t\t</template>\n\t</rm-swiper>\n\t<div class="vui-title">异步加载</div>\n\t<rm-swiper v-if="imgList.length" v-model="index4" :loop="true" :auto="false" effect="slide" :pagination="true">\n\t\t<template slot="misty-slide-list">\n\t\t\t<div v-for="(img, i) in imgList" :key="i"><img :src="img" /></div>\n\t\t</template>\n\t</rm-swiper>\n</div>\nexport default {\n\tcomponents: {\n\t\tRmSwiper\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tindex: 0,\n\t\t\tindex1: 0,\n\t\t\tindex2: 5,\n\t\t\tindex3: 1,\n\t\t\tindex4: 0,\n\t\t\timgList: [],\n\t\t}\n\t},\n\twatch: {},\n\tcreated() {\n\t\tconst arr = [\n\t\t\t\'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg\',\n\t\t\t\'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg\',\n\t\t\t\'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg\',\n\t\t\t\'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg\'\n\t\t]\n\t\tsetTimeout(()=>{\n\t\t\tthis.imgList.push(...arr)\n\t\t},2000)\n\t},\n\tmethods: {\n\t\tslide(index) {\n\t\t\tconsole.log(index)\n\t\t},\n\t\tslide1(index) {\n\t\t\tconsole.log(index)\n\t\t},\n\t\tslide2(index) {\n\t\t\tconsole.log(index)\n\t\t},\n\t\tslideTo(length) {\n\t\t\tif (this.index2 < length - 1) {\n\t\t\t\tthis.index2++\n\t\t\t} else {\n\t\t\t\tthis.index2 = 0\n\t\t\t}\n\t\t},\n\t\tslide3(index) {\n\t\t\tconsole.log(index)\n\t\t}\n\t}\n}\n\n.rm-swiper-con {\n\tcolor: #fff;\n\timg {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t}\n\t.misty-container{\n\t\t>div:nth-child(odd){\n\t\t\tbackground:#66c6f2;\n\t\t}\n\t\t>div:nth-child(even){\n\t\t\tbackground:#39a9ed;\n\t\t}\n\t}\n}\n.rm-swiper-con .misty-swiper {\n\theight: 180px;\n\tline-height: 180px;\n\tfont-size: 50px;\n}\n\n'}}},c=n(1),p=Object(c.a)(o,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("layout-card",[n("div",[n("layout-column",{attrs:{title:"代码演示",tips:"查看源代码"},on:{handle:function(i){t.show=!0}}})],1)]),t._v(" "),n("layout-code",{attrs:{title:"搜索"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"vue"},[t._v(t._s(t.code))])])])],1)},[],!1,null,null,null);i.default=p.exports}}]);