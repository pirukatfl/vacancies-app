<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Toast />
  <RouterView />
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
/* Estiliza a barra de rolagem */
::-webkit-scrollbar {
  width: 8px;  /* Define a largura da barra de rolagem */
  height: 8px; /* Define a altura da barra de rolagem horizontal */
}

/* Estiliza a parte da barra de rolagem que você pode arrastar (thumb) */
::-webkit-scrollbar-thumb {
  background-color: #333; /* Cor escura para a parte da barra que pode ser arrastada */
  border-radius: 4px;      /* Arredonda as bordas da parte de arrasto */
}

/* Estiliza a parte de fundo da barra de rolagem */
::-webkit-scrollbar-track {
  background-color: #555; /* Cor de fundo da barra de rolagem */
  border-radius: 4px;     /* Arredonda as bordas da parte de fundo */
}

/* Opcional: estiliza a barra de rolagem quando é "hover" (quando você passa o mouse sobre ela) */
::-webkit-scrollbar-thumb:hover {
  background-color: #444; /* Torna o thumb um pouco mais claro quando o mouse passa sobre ele */
}
.finished {
  display: flex;
  align-items: center;
  padding: 15px;
  label {
    font-size: .9rem;
    margin-right: 5px;
    cursor: pointer;
  }
}
.actions-form {
  background-color: --p-primary-color;
  // background-color: #f2f2f2;
  margin: 15px;
  // padding: 15px;

  button {
    margin: 0 15px;
     &:first-child {
      margin-left: 0px;
     }
  }

  &.remove {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
  }
}

.container {
  width: 100%;
  height: 100%;
  padding: 15px;
  position: relative;

  &.container-forms {
    height: calc(100vh - 48px - 76px - 48px - 73px - 50px - 50px);
    overflow-y: auto;
  }
  
  svg.p-icon.p-datepicker-input-icon {
    margin-right: 10px;
  }

  input, .p-editor, .p-select {
    margin: 10px;
  }

  .p-select {
    height: 46px;
    width: 242px;
    font-size: .9rem;
  }
}

.p-select-list {
  font-size: .9rem!important;
}

.link {
  outline: none;
  background-color: transparent!important;
  color: #0e0e0ec9!important;
  font-size: .9rem!important;
  border: none!important;
  font-weight: 600;
  transition: .2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
}

.most {
  display: flex;

  &:nth-child(even) {
    // background-color: #f2f2f2;
  }
}

.label-editor {
  // padding: 15px;
  label {
    font-size: .9rem;
    font-weight: 600;
    margin-left: 15px;
  }
}

.favorite-companies {
  display: flex;
  margin: 15px 10px;
  flex-direction: column;
  .p-inputgroup {
    width: 310px;
  }
}

.input-group-chips {
  display: flex;
  justify-items: center;
  flex-wrap: wrap;

  .p-chip {
    align-self: flex-start;
  }
}

.chips {
  // display: flex;
  padding: 15px;
  width: 100%;
  // align-items: center;
  flex-wrap: wrap;
  .p-chip {
    margin: 5px;
  }
}

.mask {
  // display: flex;
  width: 380px;
}

input[type="checkbox"], .p-checkbox-input {
  cursor: pointer;
  width: 20px;
  height: 18px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  appearance: none; /* Remove o estilo padrão do checkbox */
}

/* Estilo quando o checkbox está marcado */
input[type="checkbox"]:checked, .p-checkbox-input:checked{
  background-color: transparent;
}

/* Adicionando um ícone de marcação dentro do checkbox */
input[type="checkbox"]:checked::before, .p-checkbox-input:checked::before {
  content: "✔";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: .9rem;
}
</style>
