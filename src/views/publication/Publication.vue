<template>

<h1>TITULO: {{ title }}</h1>
  
</template>

<script>

export default {
  name: 'Publication',

  components: {
  },

  data() {
    return {
      title: this.$route.params.title
    }
  },
};
</script>