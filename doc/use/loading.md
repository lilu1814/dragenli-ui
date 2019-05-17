# loading

## Loading Use

```javascript
import Vue from 'vue'
import dragenli-ui from 'dragenli-ui'

Vue.use(dragenli-ui)

... methods: {
    showLoading(number) {
      console.log("点击loading");
      this.$loading.show({
        type: "model-" + number,
        text: "测试",
        duration: 3000
      });
    },

  },
```

```html
<dragenli-button buttonType="slide" @click="showLoading(1)" direction="bottom"
  >开启model1-loading</dragenli-button
>
```

### Props

| Option   | Type   | Description                                                                                                                         | Default |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| type     | String | loading 类型（model-1,model-2,model-3,model-4,model-5,model-6,model-7,model-8,model-9,model-10,model-11,model-12,model-13,model-14, | ''      |
| text     | String | loading 文本                                                                                                                        | ''      |
| duration | Number | 加载时间                                                                                                                            | 2000    |
