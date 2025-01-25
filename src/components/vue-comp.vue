<script setup lang="ts">

function onClick(params:type) {
	console.log('vue page');
}
</script>
<template>
	<div class="vue-page" @click="onClick">
		vue page
	</div>
</template>

<style lang="less" scoped>
.vue-page {
	text-align: center;
	font-size: 30px;
	margin: 150px;
}
</style>
