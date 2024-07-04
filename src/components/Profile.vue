<template>
  <div class="ml-auto px-5 py-3 border-0 font-medium text-white rounded-md mr-4 ">
    <img class='rounded-full w-12 h-12 ' :src="url" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHb3JJcOaeNrq2kM5rZToDgjU1UbKAjRC4w&s'
    }
  }
}
</script>