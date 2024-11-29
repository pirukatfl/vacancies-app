<template>
    <div class="container">
        <div class="filters">
            <div>filtro A</div>
            <div>filtro B</div>
        </div>
        <div class="jobs">
            <Card style="width: 25rem; overflow: hidden" v-for="job in jobs" :key="job.id">
            <!-- <template #header>
                <p>imagem empresa</p>
                <img alt="user header" src="/images/usercard.png" />
            </template> -->
            <template #title>{{ job.company }}</template>
            <template #subtitle>{{ job.position }}</template>
            <template #content>
                <p>
                    {{ job.description }}
                </p>
            </template>
            <template #footer>
                <Button label="Quero me candidatar" class="w-full" />
            </template>
        </Card>
        </div>
    </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid'
const jobs = [
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Dev Frontend',
        salary: '3500',
        description: 'Responsabilidades: Desenvolvimento de software: Criar e implementar aplicações web, mobile ou sistemas corporativos, atendendo aos requisitos do projeto. Análise de requisitos: Entender as necessidades do cliente e contribuir para a definição de funcionalidades. Codificação e testes: Escrever códigos limpos e eficientes, realizando testes unitários e de integração. Integração de sistemas: Trabalhar com APIs e bancos de dados para garantir a integração e comunicação entre sistemas. Colaboração em equipe: Participar de reuniões, revisões de código e manter um bom relacionamento com as demais equipes. Melhoria contínua: Propor melhorias na arquitetura, desempenho e experiência do usuário. Documentação: Produzir e manter documentação técnica para garantir a compreensão do código e das soluções implementadas.'
    },
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Cargo',
        salary: '3500',
        description: 'uma breve descrição de 250 caracteres'
    },
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Cargo',
        salary: '3500',
        description: 'uma breve descrição de 250 caracteres'
    },
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Cargo',
        salary: '3500',
        description: 'uma breve descrição de 250 caracteres'
    },
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Cargo',
        salary: '3500',
        description: 'uma breve descrição de 250 caracteres'
    },
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Cargo',
        salary: '3500',
        description: 'uma breve descrição de 250 caracteres'
    },
    {
        id: uuidv4(),
        company: 'Nome da empresa',
        position: 'Cargo',
        salary: '3500',
        description: 'uma breve descrição de 250 caracteres'
    },
]
</script>
<style lang="scss" scoped>
.jobs {
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
}

.p-card {
    margin: 10px;
}

p {
    font-size: .9rem;
}

:deep(.p-card-body) {
    padding: 20px;
}

:deep(.p-card-subtitle) {
    font-size: 1rem!important;
}

:deep(.p-card-content) {
    max-height: 200px;
    padding-bottom: 10px;
    padding-right: 5px;
    overflow-y: auto;
}
</style>