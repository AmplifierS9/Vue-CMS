<template>
  <div>
    <navbar/>
    <navside/>
    <main>
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

<style scoped>
</style>
