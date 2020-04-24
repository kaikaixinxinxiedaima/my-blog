import { Component } from "vue-property-decorator"

import * as tsx from "vue-tsx-support"

@Component
export default class App extends tsx.component<{}> {
  render() {
    return <div>typescript</div>
  }
}
