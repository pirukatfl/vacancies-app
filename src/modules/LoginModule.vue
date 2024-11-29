<template>
    <div class="container">
        <div class="box-login">
            <div class="logo">Lupa Vagas</div>
            <InputText placeholder="email" v-model="state.email" />
            <div>
                <Password placeholder="senha" toggleMask :feedback="false" v-model="state.password" />
            </div>
            <Button>Entrar</Button>
            <Button class="mid-button link">Registre-se</Button>
            <Button class="link">Esqueceu sua senha?</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
    email: '',
    password: '',
})
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center
}
.box-login {
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.9);

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(83, 83, 83);
        font-weight: 600;
        font-size: 1.2rem;
        height: 200px;
    }

    div, .mid-button {
        margin: 10px 0;
    }
}
</style>