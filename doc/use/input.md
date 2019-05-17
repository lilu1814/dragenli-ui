# input

# Use

```html
<dragenli-input v-model="inputtext" inputType="anticlockwise"></dragenli-input>
```

```jacascript
data() {
    return {
      inputtext:'内容'
    }
}
```

### Props

| Option    | Type   | Description                                            | Default |
| --------- | ------ | ------------------------------------------------------ | ------- |
| inputType | String | input 类型（anticlockwise,trace,underline,underline2） | ''      |
