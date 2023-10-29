<script setup>
import { onMounted, ref } from 'vue'
import useUserStore from '@/store/modules/user';

const userStore = useUserStore()

const user = ref({})
const sentence = ref('')

onMounted(() => {
    // 调用 pinia 里面的方法操作 state
    userStore.setUserInfo({
        name: '张晓丽',
        age: 33,
        gender: 1
    })

    // 调用 pinia 里面的方法获取 state
    user.value = userStore.getUserInfo();

    // 将 state 中的数据用作展示用
    sentence.value = `我叫${user.value.name}, 我今年${user.value.age}岁, 是一个${user.value.gender ? '女' : '男'}人`
})

</script>

<template>
    <div class="home-container">
        home view
        <div class="sentence">{{ sentence }}</div>
    </div>
</template>

<style scoped lang="scss">
.home-container {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    .sentence {
        font-size: 20px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 20px;
    }
}
</style>
