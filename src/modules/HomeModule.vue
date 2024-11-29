<template>
    <div class="container">
        <Tabs value="0">
            <TabList>
                <Tab v-for="(tab, index) in tabs" :value="`${index}`">{{ tab.label }}</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <ProfileForm />
                </TabPanel>
                <TabPanel value="1">
                    <AddressForm />
                </TabPanel>
                <TabPanel value="2">
                    <ExperiencesForm />
                </TabPanel>
                <TabPanel value="3">
                    <SchoolingsForm />
                </TabPanel>
                <TabPanel value="4">
                    <CoursesForm />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>
<script setup lang="ts">
import AddressForm from '../components/forms/AddressForm.vue';
import CoursesForm from '../components/forms/CoursesForm.vue';
import ExperiencesForm from '../components/forms/ExperiencesForm.vue';
import SchoolingsForm from '../components/forms/SchoolingsForm.vue';


const tabs = [
    {
        label: 'Perfil',
        icon: 'dash',
    },
    {
        label: 'Endereço',
        icon: 'dash',
    },
    {
        label: 'Experiências',
        icon: 'dash',
    },
    {
        label: 'Escolaridade',
        icon: 'dash',
    },
    {
        label: 'Cursos',
        icon: 'dash',
    },
]
</script>