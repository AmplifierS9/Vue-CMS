<template>
  <aside class="menu app-sidebar bg-dark" :class="{ hide: $store.state.aside }">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><router-link to="#" exact>Dashboard</router-link></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><router-link to="#">Dota 2</router-link></li>
      <li>
        <a :aria-expanded="expanded" @click="Expanded">
          Manage Your Team
          <span class="icon is-angle">
            <i class="fa fa-angle-up"></i>
          </span>
        </a>
        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
          <ul v-show="expanded">
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
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
      expanded: false
    }
  },
  methods: {
    Expanded () {
      this.expanded = !this.expanded
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
