<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    icontype: {
      type: String,
      default: 'svg'
    }
  },
  render(h, context) {
    const { icon, title, icontype } = context.props
    const vnodes = []
    if (icontype === 'svg') {
      if (icon) {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }
    if (icontype === 'el') {
      if (icon) {
        vnodes.push(<div class='el-item'><i class={icon}/></div>)
      }
    }
    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
