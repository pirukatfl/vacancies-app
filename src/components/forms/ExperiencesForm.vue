<template>
    <div class="container container-forms">
        <Toast />
        <div class="most" v-for="(experience, index) in form" :key="experience.id">
            <div>
                <InputText type="text" placeholder="Nome da empresa" v-model="experience.companyName" />
                <InputText type="text" placeholder="cargo" v-model="experience.position" />
                <DatePicker placeholder="Data de início" v-model="experience.initialDate" showIcon iconDisplay="input" />
                <DatePicker placeholder="Data do desligamento" v-model="experience.endDate" showIcon iconDisplay="input" />
                <div class="label-editor">
                    <label for="">Sobre o curso</label>
                    <Editor v-model="experience.about" editorStyle="height: 100px">
                        <template v-slot:toolbar>
                            <span class="ql-formats">
                                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                                <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                            </span>
                        </template>
                    </Editor>
                </div>
                <div class="finished">
                    <label :for="String(index)"> Atual? </label>
                    <input type="checkbox" :id="String(index)" v-model=experience.finished @change="onlyOne(index)"  />
                </div>
            </div>
            <div class="actions-form remove">
                <Button @click="removeItem(index)" v-if="form.length > 1" severity="danger" class="buttons-form">Excluir item</Button>
            </div>
        </div>
    </div>
    <div class="actions-form">
        <Button
        @click="addItem"
        >+ Novo item</Button>
        <Button class="buttons-form">Salvar</Button>
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useToast } from 'primevue';

interface Item {
    id:  string,
    companyName: string,
    position: string,
    initialDate: null | Date,
    endDate: null | Date,
    about: string,
    finished: boolean
}

let form= reactive<Item[]>([])

const toast = useToast();

function addItem() {
    if(form.length === 5) {
        toast.add({ severity: 'warn', summary: 'Cuidado!', detail: 'o máximo de itens é 5', life: 3000 });
        return
    }
    form.push(
        {
            id: uuidv4(),
            companyName: '',
            position: '',
            initialDate: null,
            endDate: null,
            about: '',
            finished: false
        }
    )
}

function onlyOne(index: number) {
    if (form[index].finished) {
        form.forEach(el => el.finished = false)
        form[index].finished = true
    }
}

function removeItem(index: number) {
    form.splice(index, 1)
}
onMounted(() => {
    if (!form.length) {
        addItem()
    }
})

</script>