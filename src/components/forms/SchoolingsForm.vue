<template>
    <div class="container container-forms">
        <Toast />
        <div class="most" v-for="(schooling, index) in form" :key="schooling.id">
            <div>
                <InputText type="text" placeholder="Nome da instituição" v-model="schooling.name" />
                <InputText type="text" placeholder="Nome do curso" v-model="schooling.courseName" />
                <DatePicker placeholder="Data de início" v-model="schooling.initialDate" showIcon iconDisplay="input" />
                <DatePicker placeholder="Data de conclusão" v-model="schooling.endDate" showIcon iconDisplay="input" />
                <div class="label-editor">
                    <label for="">Sobre o curso</label>
                    <Editor v-model="schooling.about" editorStyle="height: 100px">
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
                    <label> Concluído? </label>
                    <input type="checkbox" :id="String(index)" v-model=schooling.finished  />
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
    name: string,
    courseName: string,
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
            name: '',
            courseName: '',
            initialDate: null,
            endDate: null,
            about: '',
            finished: false
        }
    )
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