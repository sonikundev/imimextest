<template>
  <div v-for="field in fields" :key="field.name" class="field">
    <label :for="field.id">{{ field.label }} <span class="req">*</span></label>
    <input :id="field.id" :name="field.name" :type="field.type || 'text'" :autocomplete="field.autocomplete" required />
  </div>
</template>

<script setup>
const props = defineProps({ companyLabel: { type: String, default: 'Empresa' } });
const fields = computed(() => [
  { id: 'f-nombre', name: 'nombre', label: 'Nombre', autocomplete: 'name' },
  { id: 'f-empresa', name: 'empresa', label: props.companyLabel, autocomplete: 'organization' },
  { id: 'f-puesto', name: 'puesto', label: 'Puesto', autocomplete: 'organization-title' },
  { id: 'f-correo', name: 'correo', label: 'Correo corporativo', type: 'email', autocomplete: 'email' },
  { id: 'f-tel', name: 'telefono', label: 'Teléfono', type: 'tel', autocomplete: 'tel' },
  { id: 'f-ciudad', name: 'ciudad', label: 'Ciudad', autocomplete: 'address-level2' },
]);
</script>
