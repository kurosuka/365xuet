document.write('<style>.layerConfirm,.layerCommBox,.layerCommBox2{box-sizing:border-box!important;text-align:center;border-radius:8px!important;overflow:hidden}.layerConfirm .layui-layer-content{font-size:16px!important;padding-top:50px!important}.layerCommBox .layui-layer-btn,.layerConfirm .layui-layer-btn,.layerCommBox2 .layui-layer-btn{text-align:center;padding-bottom:30px}.layerConfirm .layui-layer-btn a,.layerCommBox .layui-layer-btn a,.layerCommBox2 .layui-layer-btn a{height:40px;line-height:40px;font-size:16px;border-radius:30px;width:30%}.layerConfirm .layui-layer-btn a.layui-layer-btn0{border:1px solid #ccc;color:#999;background-color:transparent}.layerCommBox2 .layui-layer-btn a.layui-layer-btn0,.layerCommBox .layui-layer-btn a.layui-layer-btn0,.layerConfirm .layui-layer-btn a.layui-layer-btn1{background-color:#fc7859;border:1px solid #fc7859;color:#fff}.layerCommBox,.layerCommBox2{text-align:left}.layerCommBox .layui-layer-btn a.layui-layer-btn0{width:60%}.layerCommBox .layui-layer-title,.layerCommBox2 .layui-layer-title{height:50px;line-height:50px;font-size:16px;font-weight:bold}.addCollectorBox{padding:20px;padding-bottom:0}.addCollectorBox input,.addCollectorBox textarea{resize:none;border:1px solid #eee;border-radius:4px;font-size:14px;width:100%;line-height:38px;box-sizing:border-box!important;padding:0 10px}.addCollectorBox textarea{height:120px;padding:10px;line-height:1.4;margin-top:15px}.myCollectionList{padding:20px 0}.choiceCollectorBox{padding:0 20px}.choiceCollectorBox .myCollectionListUl li{padding:20px 0;line-height:26px;overflow:hidden;text-align:right;border-bottom:1px solid #eee}.myCollectionListUl li strong{font-size:16px;font-weight:500;float:left}.myCollectionListUl li span{background-color:#fcf5ea;color:#fd9711;font-size:12px;border-radius:5px;padding:0 8px;margin-left:10px;float:left}.myCollectionListUl li span i{font-style:normal}.myCollectionListUl li:nth-child(even){background-color:#fff}.myCollectionListUl li a.switchCollector{display:inline-block;line-height:34px;color:#fc7859;border:1px solid #fc7859;width:90px;text-align:center;border-radius:20px;font-size:16px}.myCollectionListUl li a.active{border-color:#f0f0f0;background-color:#f0f0f0;color:#999}.choiceCollectorBox>p{text-align:center;padding:20px 0}.choiceCollectorBox>p a{display:inline-block;line-height:40px;background-color:#fc7859;color:#fff;font-size:16px;padding:0 20px;border-radius:20px}.choiceCollectorBox>p a:before{padding-right:6px}</style>')
/**
 * nodetype弹窗类型
 * obj,传递的数据
 * */

/**
 * 选择收藏夹
 * **/
var choiceCollector = '<div class="choiceCollectorBox">\n' +
    '    <ul class="myCollectionListUl">\n' +
    '        <li class="clearfix">\n' +
    '            <strong class="tit" href="">我的收藏夹名称</strong>\n' +
    '            <span><i>1</i>个内容</span>\n' +
    '            <a href="javascript:;" class="switchCollector">收藏</a>\n' +
    '        </li>\n' +
    '        <li class="clearfix">\n' +
    '            <strong class="tit" href="">我的收藏夹名称</strong>\n' +
    '            <span><i>1</i>个内容</span>\n' +
    '            <a href="javascript:;" class="switchCollector">收藏</a>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '    <p><a href="javascript:;" class="iconfont icon-add1">新建收藏夹</a></p>\n' +
    '</div>'
/**
 * 新建、编辑收藏夹
 * **/
var addCollector = '<div class="addCollectorBox">\n' +
    '    <input type="text" placeholder="请输入标题，最多10个字（必填）">\n' +
    '    <textarea placeholder="添加描述,最多30个字（选填）"></textarea>\n' +
    '</div>'
/**
 * 收藏/取消收藏
 * **/
$(document).on('click','.switchCollector',function () {
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
        $(this).text('取消收藏')
    }else{
        $(this).text('收藏')
    }
})
function get_alert(nodetype, obj) {
    layui.use(['form', 'element', 'layer'], function() {
        var form = layui.form,
            element = layui.element,
            layer = layui.layer;
        if (nodetype == 1) {
            layer.open({
                type: 1,
                title: obj.title,
                skin: 'layerCommBox2',
                area:'530px',
                btn:'保存',
                content:addCollector
            });
        }
        if (nodetype == 2) {
            layer.open({
                type: 1,
                title: obj.title,
                skin: 'layerCommBox2',
                area:'530px',
                content:choiceCollector
            });
        }
        if (nodetype == 3) {
            layer.confirm('收藏夹内所有的内容都会被取消收藏，确定删除吗？', {
                btn: ['取消','确定']
                ,closeBtn: 0
                ,area:'420px'
                ,skin:'layerConfirm'
                ,title:''
            })
        }
    });
}