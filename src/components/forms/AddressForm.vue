<template>
    <div class="container container-forms">
        <InputMask type="text" placeholder="CEP" v-model="form.zipcode" mask="99999-999" @value-change="getDataAddress" />
        <Select v-model="form.state" :options="states" placeholder="Selecione o estado" />
        <Select :disabled="!form.state" v-model="form.city" :options="cities" placeholder="Selecione a cidade" />
        <InputText type="text" placeholder="bairro" v-model="form.district" />
        <InputText type="text" placeholder="rua" v-model="form.street" />
        <InputNumber placeholder="número" v-model="form.number" />
        <InputText type="text" placeholder="complemento" v-model="form.complement" />
    </div>
    <div class="actions-form">
        <Button class="buttons-form">Salvar</Button>
    </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
import statesAndCities from '../../utils/statesAndCities';
import { useToast } from 'primevue';

const toast = useToast()

interface Address {
    zipcode: string
    state: string
    city: string
    district: string
    street: string
    number: number | null,
    complement: string
}

const form = reactive<Address>({
    zipcode: '',
    state: '',
    city: '',
    district: '',
    street: '',
    number: null,
    complement: ''
})

const states = statesAndCities.map(item => {
    return item.nome
})

const cities = computed(() => {
    if (!form.state) {
        return []
    }
    const citiesArray = statesAndCities.find(el => el.nome === form.state)
    return citiesArray?.cidades || []
})

async function getDataAddress() {
    const regex = /^\d{5}-\d{3}$/;

    if (regex.test(form.zipcode)) {
        const zipcode = form.zipcode.split('-').join('')
        const resp = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
        const address = await resp.json()
        if (address.erro) {
            toast.add({ severity: 'warn', summary: 'Cuidado!', detail: 'CEP inválido', life: 4000 });
            return
        }
        form.state = address.estado
        form.city = address.localidade
        form.district = address.bairro
        form.street = address.logradouro
    }
}
</script>