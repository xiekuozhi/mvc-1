import $ from "jquery";
import "./app2.css";
const $tabBar =$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')

$tabBar.on('click',"li",(e)=>{
    const $li=$(e.currentTarget);
    $li
    .addClass('selected')
    .siblings()
    .removeClass("selected")
    const index =$li.index()        //第几个
    console.log(index)
    $tabContent.children()
    .eq(index) .addClass('active')  //eq 等于第几个
    .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click') //默认触发

