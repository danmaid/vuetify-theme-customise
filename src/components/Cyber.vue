<template>
  <div class="cyber application-wapper">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.cyber {
  text-shadow: 0 0 5px rgba(map-get($cyber, "foreground"), 0.7),
    0 0 10px rgba(map-get($cyber, "foreground"), 0.5);
}
.cyber.application-wapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.cyber button {
  text-shadow: inherit;
}
.cyber header {
  border-bottom: 1px solid rgba(map-get($cyber, "foreground"), 0.5);
  box-shadow: 0px 2px 4px -1px rgba(map-get($cyber, "foreground"), 0.2),
    0px 4px 5px 0px rgba(map-get($cyber, "foreground"), 0.14),
    0px 1px 10px 0px rgba(map-get($cyber, "foreground"), 0.12);
  margin-bottom: 14px;
}
</style>
