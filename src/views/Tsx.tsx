import { VNode, CreateElement } from "vue"
import { Component, Vue } from "vue-property-decorator"

@Component
export default class HelloWorld extends Vue {
  public render(h: CreateElement): VNode {
    const style = {
      fontSize: "64px",
      color: "#3ab981",
    }
    return (
      <h1 style={style}>
        <Child>{this.$t("account.type.Admin")}</Child>
        <Child>{this.$t("account.type.Admin")}</Child>
      </h1>
    )
  }
}

@Component
class Child extends Vue {
  public render(h: CreateElement): VNode {
    return (
      <span style={{ fontSize: "24px" }}>
        {(this.$slots?.default ?? [])[0]}
      </span>
    )
  }
}
