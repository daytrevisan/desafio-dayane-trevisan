class CaixaDaLanchonete {

    constructor() {

      this.cardapio = {

        cafe: { codigo: 'cafe', descricao: 'Café', valor: 3.0 },
        chantily: { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.5 },
        suco: { codigo: 'suco', descricao: 'Suco Natural', valor: 6.2 },
        sanduiche: { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.5 },
        queijo: { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.0 },
        salgado: { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
        combo1: { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.5 },
        combo2: { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.5 },
        
      };
  
      this.metodoDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(metodoDePagamento, itemPedido) {
        
        if (!this.metodoDePagamento) {
            return "Forma de pagamento inválida";
        }
        
        if (itemPedido.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
        
        if (this.itemPedido === 0) {
            return "Quantidade inválida!";
        }
        
        let valorTotal = 0;
        let itensTotal = 0;
        
        for (const itemInfo of itemPedido) {
            const { codigo, quantidade } = itemInfo;
            const item = this.cardapio[codigo];
            
            if (!item) {
                return "Item inválido!";
            }

            const valorItem = this.cardapio.valor * quantidade;

            valorTotal += valorItem;

            itensTotal += item;

            if ((this.cardapio[codigo] === "chantily") && (!itemPedido.find(item => item.codigo === "cafe")) ||
               (this.cardapio[codigo] === "queijo") && (!itemPedido.find(item => item.codigo === "sanduiche"))) {
                return "Item extra não pode ser pedido sem o principal";
            }
        
        if (metodoDePagamento === "dinheiro") {
            valorTotal *= 0.95; // Aplica 5% de desconto
        } else if (metodoDePagamento === "credito") {
            valorTotal *= 1.03; // Aplica 3% de acréscimo
        }

        return valorTotal.toFixed(2);
        }
    }
};

export { CaixaDaLanchonete }