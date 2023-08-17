import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js"

const pedido = new CaixaDaLanchonete();

const itens = [
    { codigo: 'cafe', quantidade: 2 },
    { codigo: 'chantily', quantidade: 2 },
    { codigo: 'combo1', quantidade: 1 },
];

const metodoDePagamento = 'dinheiro';

const valorTotal = pedido.calcularValorDaCompra(metodoDePagamento, itens);
console.log(`Itens totais: ${itens} - Valor total da compra: R$ ${valorTotal}`)