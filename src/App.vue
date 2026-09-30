<script setup>
import LanguageSwitcher from "@/shared/presentation/components/language-switcher.vue";
import Layout from "@/shared/presentation/components/layout.vue";
</script>

<template>
  <language-switcher />
  <p>{{ $t('language')}}</p>
  <layout />
</template>

<style scoped>

</style>
