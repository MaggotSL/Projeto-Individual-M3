const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')//coloca id unico

const app = express()
app.use(express.json())
const medicamentos = []
const higienes = []
const belezas = []
//---------------VISUALIZAR----------------
app.get('/medicamentos', (request, response) =>{
    return response.json(medicamentos)
})
app.get('/higienes', (request, response) =>{
    return response.json(higienes)
})
app.get('/belezas', (request, response) =>{
    return response.json(belezas)
})
//-------------INSERIR-----------------------
app.post('/medicamentos', (request, response) => {
    const {nome, valor} = request.body
    const medicamento = {id: uuid(), nome, valor}
    medicamentos.push(medicamento)
    return response.status(201).json(medicamento)
})
app.post('/higienes', (request, response) => {
    const {nome, valor} = request.body
    const higiene = {id: uuid(), nome, valor}
    higienes.push(higiene)
    return response.status(201).json(higiene)
})
app.post('/belezas', (request, response) => {
    const {nome, valor} = request.body
    const beleza = {id: uuid(), nome, valor}
    belezas.push(beleza)
    return response.status(201).json(beleza)
})
//----------------ATUALIZAR--------------------
app.put('/medicamentos/:id', (request, response) => {
    const { id } = request.params
    const { nome, valor } = request.body
    const newMedicamentos = { id, nome, valor }
    const medicamentoindex = medicamentos.findIndex(medicamento => medicamento.id == id)
    medicamentos[medicamentoindex] = newMedicamentos;
    return response.json(newMedicamentos)
})
app.put('/higienes/:id', (request, response) => {
    const { id } = request.params
    const { nome, valor } = request.body
    const newhigienes = { id, nome, valor }
    const higieneindex = higienes.findIndex(higiene => higiene.id == id)
    higienes[higieneindex] = newhigienes;
    return response.json(newhigienes)
})
app.put('/belezas/:id', (request, response) => {
    const { id } = request.params
    const { nome, valor } = request.body
    const newbelezas = { id, nome, valor }
    const belezaindex = belezas.findIndex(beleza => beleza.id == id)
    belezas[belezaindex] = newbelezas;
    return response.json(newbelezas)
})
//-------------------APAGAR-------------------
app.delete('/medicamentos/:id', (request, response) => {
    const { id } = request.params
    const medicamentoindex = medicamentos.findIndex(medicamento => medicamento.id == id)
    medicamentos.splice(medicamentoindex, 1)
    return response.status(204).send()
})
app.delete('/higienes/:id', (request, response) => {
    const { id } = request.params
    const higieneindex = higienes.findIndex(higiene => higiene.id == id)
    higienes.splice(higieneindex, 1)
    return response.status(204).send()
})
app.delete('/belezas/:id', (request, response) => {
    const { id } = request.params
    const belezaindex = belezas.findIndex(beleza => beleza.id == id)
    belezas.splice(belezaindex, 1)
    return response.status(204).send()
})


app.listen(8181, () =>{
    console.log('O servidor foi iniciado!')
})