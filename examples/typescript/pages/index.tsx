import Vue from "vue";

export default Vue.extend({
  name: "Home",
  render(h: Vue.CreateElement): Vue.VNode {
    return (
      <div>You're browsing this site on: { this.os }, { this.browser } </div>
    );
  },
  data() {
    return {
      os: "",
      browser: "",
    };
  },
  mounted() {
    this.os = this.$ua.os();
    this.browser = this.$ua.browser()
  }
});
