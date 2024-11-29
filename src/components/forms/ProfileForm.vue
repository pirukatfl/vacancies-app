<template>
    <div class="container container-forms">
        <InputText type="text" placeholder="Seu nome completo" v-model="form.name" />
        <DatePicker placeholder="Data do seu aniversário" v-model="form.birthday" showIcon iconDisplay="input" />
        <InputMask id="basic" v-model="form.phone" mask="(99)-999999999" placeholder="Seu número whatsapp" />
        <div class="label-editor">
            <label for="">Sobre você</label>
            <Editor v-model="form.about" editorStyle="height: 100px">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
        </div>
        <div class="input-group-chips">
            <div class="favorite-companies">
                <InputGroup>
                    <InputText type="text" placeholder="Insira o nome da empresa" v-model="form.company" />
                    <InputGroupAddon>
                        <Button @click.prevent="addCompany" icon="pi pi-plus" severity="secondary" />
                    </InputGroupAddon>
                </InputGroup>
                <Message size="small" severity="secondary" variant="simple">Adicione as empresas que você tem interesse</Message>
            </div>
            <div class="chips">
                <Chip v-for="company in form.favoriteCompanies" :key="company" :label="company" removable @remove="removeCompany(company)" />
            </div>
        </div>
    </div>
    <div class="actions-form">
        <Button class="buttons-form">Salvar</Button>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useToast } from 'primevue';

const toast = useToast();


interface Profile {
    name: string
    birthday: null | Date
    about: string
    phone: string
    company: string
    favoriteCompanies: string[]
}

const form = reactive<Profile>({
    name: '',
    birthday: null,
    about: '',
    phone: '',
    company: '',
    favoriteCompanies: []
})

function addCompany() {
    if (form.favoriteCompanies.length === 5) {
        toast.add({ severity: 'error', summary: 'Cuidado!', detail: 'o máximo de empresas é 5!', life: 3000 });
        return
    }
    const repeatedCompany = form.favoriteCompanies.some(el => el.toLocaleLowerCase() === form.company.toLocaleLowerCase())
    console.log(repeatedCompany)
    if (repeatedCompany) {
        toast.add({ severity: 'error', summary: 'Cuidado!', detail: 'empresa já está incluida na lista!', life: 3000 });
        return
    }
    if (form.company.length) {
        form.favoriteCompanies.push(form.company)
        form.company = ''
    }
}

function removeCompany(companyName: string) {
    const toRemove = form.favoriteCompanies.findIndex((item) => item.toLowerCase() === companyName.toLowerCase())
    form.favoriteCompanies.splice(toRemove, 1)

}
</script>