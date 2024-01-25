<template>
  <h1>Vue js</h1>
  <div v-if="total > 0">total count is : {{total}}</div>
</template>

<script>
import LuigiClient from "@luigi-project/client";


export default {
  name: "home",
  data: () => ({
    total: LuigiClient.getNodeParams().total,
  }), 
  
  created() {
    this.luigiClient = LuigiClient; 

    this.luigiClient.addContextUpdateListener((updatedContext) => {
      this.total =this.luigiClient.getNodeParams().total;
    });

    this.luigiClient.addInitListener((initialContext) => {
      this.total =this.luigiClient.getNodeParams().total;
    });
  },
};

</script>