const OrcamentosAPI = [
    {
        id: 1,
        Loja: "ABC",
        segmento: "Revestimentos",
        descricao: "Orçamento feito na loja ABC no dia 03/01/2020",
        itens: [
            {
                id: 1,
                item: "Piso Cozinha",
                descricao: "Porcelanato Carrara 120x120cm",
                preco: 1200.00,
                meio_pgto: "parcelado",
                parcelas: 4,
                valor_parcela: 300,
                status: true,
                valor_pago: 600,
                data_pgto: [
                    "10/11/2020",
                    "10/12/2020",
                    "10/01/2020",
                    "10/02/2020",
                ]
            },
            {
                id: 2,
                item: "Pastilha parede",
                descricao: "Pastilha inox placa 30x30cm",
                preco: 980.00,
                meio_pgto: "parcelado",
                parcelas: 4,
                valor_parcela: 245,
                status: true,
                valor_pago: 490,
                data_pgto: [
                    "10/11/2020",
                    "10/12/2020",
                    "10/01/2020",
                    "10/02/2020",
                ]
            },
            {
                id: 3,
                item: "Torneira",
                descricao: "Misturador cozinha gourmet 80cm",
                preco: 3000.00,
                meio_pgto: "parcelado",
                parcelas: 4,
                valor_parcela: 750,
                status: true,
                valor_pago: 1500,
                data_pgto: [
                    "10/11/2020",
                    "10/12/2020",
                    "10/01/2020",
                    "10/02/2020",
                ]
            },
        ]
    },
    {
        id: 2,
        Loja: "Marmores",
        segmento: "Marmoraria",
        descricao: "Orçamento feito na marmoraria Argran no dia 03/01/2020",
        itens: [
            {
                id: 1,
                item: "Bancada Cozinha",
                descricao: "Granito São Gabriel",
                preco: 1200.00,
                meio_pgto: "à vista",
                parcelas: 1,
                valor_parcela: 1200,
                status: true,
                valor_pago: 1200,
                data_pgto: [
                    "02/01/2020",
                ]
            },
            {
                id: 2,
                item: "Bancada Banheiro",
                descricao: "Mármore Branco Nacional",
                preco: 1200.00,
                meio_pgto: "à vista",
                parcelas: 1,
                valor_parcela: 1200,
                status: true,
                valor_pago: 1200,
                data_pgto: [
                    "02/01/2020",
                ]
            }    
        ]
    }
]

export default OrcamentosAPI;