<template>
  <div>
    <navbar/>
    <navside/>
    <main class="container-fluid" :class="{ toggle: !$store.state.aside }">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navside from '@/components/Navside'

export default {
  name: 'App',
  components: {
    Navbar,
    Navside
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .toggle {
    padding-left: 255px;
  }
}
</style>
