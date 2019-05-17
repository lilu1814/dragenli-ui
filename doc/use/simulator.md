# simulator

## Options

![image](https://raw.githubusercontent.com/lilu1814/images-repository/master/1557139978333.jpg)

### Props

## Use

```html
<simulator :src="src" :textContent="textContent"></simulator>
```

```jacascript
data() {
    return {
      src:'',
      textContent:'<p>html  片段</p>'
    }
}
```

| Option      | Type   | Description     | Default |
| ----------- | ------ | --------------- | ------- |
| src         | String | url(优先级更高) | ''      |
| textContent | String | 内容 html 片断  | ''      |
