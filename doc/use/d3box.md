# d3box

## Options

![image](https://raw.githubusercontent.com/lilu1814/images-repository/master/d3box.jpg)

## Use

```html
<dragenli-d3box :images="images"></dragenli-d3box>
```

```jacascript
data() {
    return {
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012683761&di=b5a058d2d77b7b68104aeb303da80dfe&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cef70d70409845d688d53f20f7.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1653940556,109092186&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012737345&di=d73b18159226f76a1662ff9c81670e8d&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fsoftbbs%2F1108%2F15%2Fc0%2F8659502_1313415161208_1024x1024soft.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012737344&di=5860c3d36d8273bc6ec4587cd3d915f1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F56937e29d9195.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012737341&di=2fb40e92d978d7bb7f9619d2b62ca86a&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201301%2F13%2F115216inifiii6ommims13.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012855007&di=aa57729f310957cad53fd94f1b693c1c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201206%2F11%2F20120611102540_CmsFM.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012483075&di=c23ca6adea94f0f485343f4e1e9dba98&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F1f178a82b9014a90dd52ab60a8773912b21beefb.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012483073&di=ba06c8cbd2f1ed6f548871f5dccfdf25&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170501%2Fbc3c3b974f464e5eb1ce8e70745adc06_th.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012483073&di=c449b607aa3cee5e991bae83b5a5b80d&imgtype=0&src=http%3A%2F%2Fpic6.58cdn.com.cn%2Fzhuanzh%2Fn_v2ad0a35b4b186468682623acffd008ba5.jpg%3Fw%3D750%26h%3D0",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012483071&di=27c2a1a14b4ee7a22d317ac27dce6ef4&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F48%2F48%2F01300542891816142078487846968.png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558012483070&di=1bea4a7b3b59fd847747a91c3b39bd8b&imgtype=0&src=http%3A%2F%2Fbbs.qn.img-space.com%2F201802%2F3%2Feba466d977ba9a38c1a50dea7dd01afd.jpg%3FimageView2%2F2%2Fw%2F1024%2Fq%2F90%2Fignore-error%2F1%2F",
        "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg"
      ]
    };
```

### Props

| Option | Type  | Description      | Default |
| ------ | ----- | ---------------- | ------- |
| images | Array | url of box image | []      |
