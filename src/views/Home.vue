<template>
  <div id="home">

    <!--<h1>👋Hello world🌎</h1>-->
    <div v-uiAuthGuard="['Admin', 'SuperAdmin', 'PrijsAdmin']">
      <h1>Proslo je</h1>
    </div>

  </div>
</template>
