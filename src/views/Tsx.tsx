import { VNode, CreateElement } from "vue"
import { Component, Vue } from "vue-property-decorator"
import "@/assets/styles/style.css"

@Component
export default class HelloWorld extends Vue {
  public render(h: CreateElement): VNode {
    const style = {
      fontSize: "64px",
      color: "#3ab981",
    }
    return (
      <h1 style={style}>
        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div class="flex-shrink-0">
            <img
              class="h-12 w-12"
              src={require("../assets/logo.png")}
              alt="ChitChat Logo"
            />
          </div>
          <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p class="text-base text-gray-600 leading-normal">
              You have a new message!
            </p>
          </div>
        </div>
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
