import Vue from "vue";

export default Vue.extend({
  name: "Home",
  render() {
    return (
      <div>You're browsing this site on: { this.os } </div>
    );
  },
  data() {
    return {
      os: ""
    };
  },
  mounted() {
    this.os = this.$ua.os();
  }
});