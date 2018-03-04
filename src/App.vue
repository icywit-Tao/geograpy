<template>
  <div class="main-wrap">
      <div id="app">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
/* css 重置 */
html,body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
smscreen, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  outline:none;
}

/* html,body5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
a{
  text-decoration: none;
  -webkit-touch-callout:none;
}
.clearfix:after {	visibility:hidden;	display:block;	font-size:0;	content:" ";	clear:both;	height:0;}
.clearfix {	zoom:1;}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
img{
  width: 100%;
}
// input{
//   -webkit-appearance: none;
// }
*{ outline: 0; -webkit-tap-highlight-color: transparent; }
body {
  font-family:"PingFangSC-Regular",Helvetica,"Microsoft YaHei",Simsun,"Droid Sans Fscreenback",sans-serif;
  width: 100%;
  overflow-x: hidden;
}
html,body{
  height:100%;
}
.main-wrap{
    background: url('./assets/bg.jpeg') no-repeat;
    background-size:cover;
    height:100%;
    overflow: hidden;
}
#app {
  width:100%;
  height:100%;
  position: relative;
}
</style>
