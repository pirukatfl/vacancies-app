<template>
    <header>
        <div class="logo-nav">
            <div class="logo">Lupa Vagas</div>
            <nav>
                <ul>
                    <li><RouterLink to="/home">Perfil</RouterLink></li>
                    <li><RouterLink to="/vagas">Vagas</RouterLink></li>
                </ul>
            </nav>
        </div>
        <div>avatar</div>
    </header>
    <main>
        <RouterView />
    </main>
    <footer>©Furlan Dev Web</footer>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
header {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    // background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.9);
    font-size: 1rem;
    // color: #000000e5!important;
}
.logo-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        ul {
            display: flex;
            height: 100%;
            li {
                list-style: none;
                padding: 10px 8px;
                cursor: pointer;
                a {
                    color: #fff;
                    text-decoration: none;
                }
                &:hover {
                    background-color: rgba(141, 142, 196, 0.089);
                }
            }
        }
    }
}
footer {
    position: absolute;
    // color: #0e0e0ec9;
    // background-color: #fff;
    width: 100%;
    bottom: 0;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: .8rem;
}
</style>