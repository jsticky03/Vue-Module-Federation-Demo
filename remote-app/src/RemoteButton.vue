:<template>
  <button class="mybtn" @click="buttonClicked">This is a button defined in remote-app! ({{ clickCount }})</button>
</template>

<script setup>
  import { ref } from 'vue';

  const clickCount = ref(0);
  const buttonClicked = () => {
    clickCount.value += 1;    
  };

</script>

<style scoped>
  .mybtn {
    border: 2px solid green;
    background-color: orange;
    border-radius: 5px;
  }
</style>