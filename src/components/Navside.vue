<template>
  <aside class="menu app-sidebar bg-dark" :class="{ hide: $store.state.aside }">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><router-link to="/" exact>Dashboard</router-link></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><router-link to="/brand">Brand</router-link></li>
      <li>
        <a :aria-expanded="expanded1" @click="Expanded(0)">
          Product
          <span class="icon is-angle">
            <i class="fa fa-angle-up"></i>
          </span>
        </a>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
          <ul v-show="expanded1">
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </transition>
      </li>
      <li><router-link to="#">Demo</router-link></li>
      <li>
        <a :aria-expanded="expanded2" @click="Expanded(1)">
          Demo Dropdown
          <span class="icon is-angle">
            <i class="fa fa-angle-up"></i>
          </span>
        </a>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
          <ul v-show="expanded2">
            <li><a>Dropdown 1</a></li>
            <li><a>Dropdown 2</a></li>
            <li><a>Dropdown 3</a></li>
          </ul>
        </transition>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      expanded1: false,
      expanded2: false
    }
  },
  methods: {
    Expanded (num) {
      this.$store.commit('expanded', {
        index: num
      })
      this.expanded1 = this.$store.state.expanded[0]
      this.expanded2 = this.$store.state.expanded[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-sidebar {
  position: fixed;
  top: 52px;
  left: 0;
  bottom: 0;
  padding: 10px 0 0 0;
  width: 240px;
  min-width: 45px;
  min-height: 100vh;
  z-index: 1023;
  overflow-y: hidden;
  overflow-x: hidden;

  .menu-label {
    background: #1a2226;
    padding: .5em .75em;
    margin-bottom: 0;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        border-radius: 2px;
        color: #b8c7ce;
        display: block;
        padding: .5em .75em;
        cursor: pointer;
        text-decoration: none;
        &[aria-expanded="true"] {
          .is-angle {
            transform: rotate(-180deg)
          }
        }

        .icon {
          &.is-angle {
            position: absolute;
            right: 15px;
          }
        }
      }
      a:hover {
        text-decoration: none;
        color: #b8c7ce;
      }
    }
  }
}

.app-sidebar:hover {
  overflow-y: auto;
  overflow-x: hidden;
}

.hide {
  display: none;
}
</style>
