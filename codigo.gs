function criarPlanoOitoSemanas() {
  var agenda = CalendarApp.getDefaultCalendar();
  
  // 📅 AJUSTE AQUI: Coloque o ano, o mês (0 para Janeiro, 6 para Julho, etc.) e o dia de início
  var dataInicio = new Date(2026, 6, 13); // Exemplo: 13 de Julho de 2026 (Segunda-feira)
  
  // Prompt base corrigido com a nova fonética fluida
  var promptBase = "Aja como meu treinador de inglês focado em conversação de negócios e fluidez natural. Vamos realizar o nosso treino diário baseado no meu plano de 8 semanas.\n\n" +
                   "Aqui estão os dados da sessão de hoje:\n" +
                   "- Semana Atual: {SEMANA}\n" +
                   "- Tema do Dia: {TEMA}\n\n" +
                   "Regras estritas para a dinâmica:\n" +
                   "1. Você deve iniciar o diálogo interpretando o personagem da situação (meu cliente, meu parceiro, fornecedor, etc.).\n" +
                   "2. Faça APENAS UMA pergunta ou interação por vez. Nunca mande um texto longo ou um bloco de diálogo completo.\n" +
                   "3. Junto com a sua fala em inglês, coloque SEMPRE a tradução dela entre parênteses para manter a velocidade do treino.\n" +
                   "4. Logo abaixo da sua fala, você deve fornecer a MINHA resposta exata ideal que eu devo ler para treinar.\n" +
                   "5. A minha resposta deve conter obrigatoriamente:\n" +
                   "   - A frase em inglês.\n" +
                   "   - A tradução em português abaixo.\n" +
                   "   - A linha de \"Fonética Guiada\" escrita em blocos de som corridos, SEM hifens separando as sílabas de uma mesma palavra, focando em como os sons se fundem na fala natural (Exemplo: em vez de \"teik-kér-âv\", escreva \"teik keraff\". Em vez de \"did-ju\", escreva \"didju\").\n" +
                   "6. Aguarde eu enviar a mensagem ou dar um \"ok\" repetindo a frase para avançar para a próxima interação.\n\n" +
                   "Comece o cenário de hoje agora mandando a primeira linha!";

  // Lista com a estrutura exata dos 40 dias de treinamento
  var cronograma = [
    // SEMANA 1
    {semana: "Semana 1", dia: "Dia 1", titulo: "Recebendo Parceiro Internacional", tema: "Dia 1 - Recebendo um parceiro comercial internacional no escritório pela primeira vez."},
    {semana: "Semana 1", dia: "Dia 2", titulo: "Small Talk de Elevador", tema: "Dia 2 - Pequena conversa casual de elevador (Small Talk) antes de uma reunião começar."},
    {semana: "Semana 1", dia: "Dia 3", titulo: "Alinhamento com a Equipe", tema: "Dia 3 - Alinhando expectativas e o cronograma de prioridades do dia com a equipe de trabalho."},
    {semana: "Semana 1", dia: "Dia 4", titulo: "Networking no Coffee Break", tema: "Dia 4 - Networking rápido durante o coffee break de uma feira ou evento de negócios regional."},
    {semana: "Semana 1", dia: "Dia 5", titulo: "Fechamento de Semana", tema: "Dia 5 - Encerrando a semana de trabalho no escritório, despedindo-se e desejando bom fim de semana."},
    
    // SEMANA 2
    {semana: "Semana 2", dia: "Dia 6", titulo: "Catálogo e Qualidade", tema: "Dia 6 - Apresentando o catálogo de produtos e enfatizando os rigorosos diferenciais de qualidade técnica da distribuidora."},
    {semana: "Semana 2", dia: "Dia 7", titulo: "Exclusividade Regional", tema: "Dia 7 - Discutindo termos de exclusividade territorial de representação comercial com um fabricante."},
    {semana: "Semana 2", dia: "Dia 8", titulo: "Posicionamento Premium Quiet Luxury", tema: "Dia 8 - Explicando a um investidor a estética e o valor agregado por trás de uma marca com conceito premium e minimalista (Quiet Luxury)."},
    {semana: "Semana 2", dia: "Dia 9", titulo: "Objeções de Durabilidade", tema: "Dia 9 - Respondendo perguntas e objeções técnicas difíceis de um cliente corporativo exigente sobre os materiais usados e a durabilidade dos produtos."},
    {semana: "Semana 2", dia: "Dia 10", titulo: "Proposta com Sócio Investidor", tema: "Dia 10 - Apresentando e alinhando preliminarmente o escopo financeiro de um investimento com um potencial parceiro estratégico da área de saúde."},
    
    // SEMANA 3
    {semana: "Semana 3", dia: "Dia 11", titulo: "Pitch de Automação Hub", tema: "Dia 11 - Explicando a um desenvolvedor ou investidor como um hub de inteligência de mercado e automação pode otimizar a velocidade da empresa."},
    {semana: "Semana 3", dia: "Dia 12", titulo: "Prazos de Edital Público", tema: "Dia 12 - Alinhando o cronograma de entrega e documentos exigidos para o edital de uma licitação de suprimentos."},
    {semana: "Semana 3", dia: "Dia 13", titulo: "Feedback Clean Design", tema: "Dia 13 - Solicitando de forma firme alterações em um logotipo de marca própria para que ele seja limpo, elegante e sem elementos decorativos desnecessários."},
    {semana: "Semana 3", dia: "Dia 14", titulo: "Análise de Concorrentes", tema: "Dia 14 - Discutindo em grupo os resultados de uma recente análise de concorrentes e mapeamento do mercado de equipamentos esportivos."},
    {semana: "Semana 3", dia: "Dia 15", titulo: "Delegando Operação", tema: "Dia 15 - Delegando tarefas operacionais rotineiras do fim de semana para um supervisor de confiança para focar na expansão da marca."},
    
    // SEMANA 4
    {semana: "Semana 4", dia: "Dia 16", titulo: "Confirmação de Carga", tema: "Dia 16 - Ligação telefônica de áudio curta confirmando a entrega de um lote de mercadorias no porto ou galpão."},
    {semana: "Semana 4", dia: "Dia 17", titulo: "Cotação de Frete", tema: "Dia 17 - Alinhando tabelas de frete rodoviário e custos logísticos adicionais com uma transportadora parceira."},
    {semana: "Semana 4", dia: "Dia 18", titulo: "Reunião Standup", tema: "Dia 18 - Participando de uma reunião de alinhamento diária curtíssima (standup meeting) focado em tarefas pendentes."},
    {semana: "Semana 4", dia: "Dia 19", titulo: "Justificativa Polida", tema: "Dia 19 - Explicando o motivo técnico e aceitável de um atraso burocrático na homologação de forma polida para um cliente corporativo."},
    {semana: "Semana 4", dia: "Dia 20", titulo: "Contrato Celebrado", tema: "Dia 20 - Comemorando rapidamente uma meta batida e a assinatura de um contrato de fornecimento com a liderança da empresa."},
    
    // SEMANA 5
    {semana: "Semana 5", dia: "Dia 21", titulo: "Almoço de Negócios", tema: "Dia 21 - Encontro casual ou almoço corporativo de negócios com investidores internacionais."},
    {semana: "Semana 5", dia: "Dia 22", titulo: "Retorno Comercial", tema: "Dia 22 - Recebendo reclamações ou feedbacks sobre especificações técnicas e respondendo comercialmente de forma firme."},
    {semana: "Semana 5", dia: "Dia 23", titulo: "Mudança de Pivotagem", tema: "Dia 23 - Explicando a um consultor de marca o motivo da empresa pivotar e mudar totalmente o nicho focado no posicionamento premium."},
    {semana: "Semana 5", dia: "Dia 24", titulo: "Rotina e Alta Performance", tema: "Dia 24 - Conversando sobre metas físicas, corrida de rua, produtividade e como isso afeta seu rendimento executivo."},
    {semana: "Semana 5", dia: "Dia 25", titulo: "Despedida no Aeroporto", tema: "Dia 25 - Despedindo-se de forma calorosa de um grande cliente antes de seu embarque para o aeroporto."},
    
    // SEMANA 6
    {semana: "Semana 6", dia: "Dia 26", titulo: "Erro em Edital", tema: "Dia 26 - Resolvendo por chamada urgente um erro de digitação de especificação do produto em um edital oficial."},
    {semana: "Semana 6", dia: "Dia 27", titulo: "Falta de Insumo", tema: "Dia 27 - Lidando com o gerente de uma fábrica terceirizada sobre a iminente falta de matéria-prima de couro premium."},
    {semana: "Semana 6", dia: "Dia 28", titulo: "Prorrogação Amigável", tema: "Dia 28 - Negociando por telefone uma prorrogação amigável de cronograma de entrega técnica sem gerar multas contratuais."},
    {semana: "Semana 6", dia: "Dia 29", titulo: "Ambiguidade Contratual", tema: "Dia 29 - Esclarecendo judicialmente ou administrativamente uma cláusula ambígua de um contrato de fornecimento logístico."},
    {semana: "Semana 6", dia: "Dia 30", titulo: "Rescaldo de Crise", tema: "Dia 30 - Fazendo a retrospectiva de gargalos logísticos resolvidos e planejando ações preventivas para a próxima semana."},
    
    // SEMANA 7 (A IA muda o comportamento aqui e remove scripts prontos da dinâmica)
    {semana: "Semana 7", dia: "Dia 31", titulo: "Defesa de Preço Premium", tema: "Dia 31 - Defendendo as margens de preço de sua marca premium contra o argumento de concorrência barata em um distribuidor tradicional. Nota para a IA: Não me dê a resposta pronta, apenas faça a pergunta de improviso."},
    {semana: "Semana 7", dia: "Dia 32", titulo: "Perguntas Surpresa", tema: "Dia 32 - Respondendo a questionamentos surpresa do público em uma conferência local sobre dados de importação. Nota para a IA: Não me dê a resposta pronta."},
    {semana: "Semana 7", dia: "Dia 33", titulo: "Expansão de Território", tema: "Dia 33 - Apresentando planos operacionais arrojados de expansão da marca para o próximo trimestre civil. Nota para a IA: Não me dê a resposta pronta."},
    {semana: "Semana 7", dia: "Dia 34", titulo: "Volume de Atacado", tema: "Dia 34 - Pressionando um fabricante fabril por descontos agressivos na compra de insumos em grande lote de atacado. Nota para a IA: Não me dê a resposta pronta."},
    {semana: "Semana 7", dia: "Dia 35", titulo: "Alinhamento com Contratado", tema: "Dia 35 - Alinhando metas de vendas agressivas e comissionamento de território comercial com um novo executivo de contas. Nota para a IA: Não me dê a resposta pronta."},
    
    // SEMANA 8
    {semana: "Semana 8", dia: "Dia 36", titulo: "Pitch de Elevador do Hub", tema: "Dia 36 - Simulação realista de um Pitch de Elevador agressivo de 2 minutos vendendo a ideia do seu Hub de Dados para investidores. Nota para a IA: Não dê respostas prontas."},
    {semana: "Semana 8", dia: "Dia 37", titulo: "Mesa de Joint Venture", tema: "Dia 37 - Reunião definitiva e estratégica para fechar os percentuais de participação de uma nova Joint Venture empresarial. Nota para a IA: Não dê respostas prontas."},
    {semana: "Semana 8", dia: "Dia 38", titulo: "Painel de Tendências", tema: "Dia 38 - Mesa redonda debatendo o futuro logístico global da importação de calçados e inflação de commodities. Nota para a IA: Não dê respostas prontas."},
    {semana: "Semana 8", dia: "Dia 39", titulo: "Disputa de Perímetro", tema: "Dia 39 - Resolução amigável mas contundente sobre uma quebra de exclusividade geográfica por parte de outro representante da rede. Nota para a IA: Não dê respostas prontas."},
    {semana: "Semana 8", dia: "Dia 40", titulo: "Discurso de Encerramento e Brinde", tema: "Dia 40 - Discurso em jantar corporativo celebrando o sucesso das 8 semanas de projeto, agradecendo e propondo um brinde oficial. Nota para a IA: Não dê respostas prontas."}
  ];

  var dataAtual = new Date(dataInicio.getTime());
  
  for (var i = 0; i < cronograma.length; i++) {
    // Pula os finais de semana (Sábado = 6, Domingo = 0)
    while (dataAtual.getDay() == 0 || dataAtual.getDay() == 6) {
      dataAtual.setDate(dataAtual.getDate() + 1);
    }
    
    var item = cronograma[i];
    
    // Monta o título estruturado
    var tituloEvento = "[Inglês] " + item.dia + " - " + item.titulo;
    
    // Substitui as variáveis no prompt mestre correspondente
    var descricaoEvento = promptBase.replace("{SEMANA}", item.semana)
                                     .replace("{TEMA}", item.tema);
    
    // Define o horário do compromisso (Exemplo: 08:30 às 09:00 da manhã)
    var horaInicio = new Date(dataAtual.getTime());
    horaInicio.setHours(8, 30, 0);
    
    var horaFim = new Date(dataAtual.getTime());
    horaFim.setHours(9, 0, 0);
    
    // Cria o compromisso físico na agenda
    agenda.createEvent(tituloEvento, horaInicio, horaFim, {
      description: descricaoEvento
    });
    
    // Avança 1 dia na contagem do calendário para o próximo item
    dataAtual.setDate(dataAtual.getDate() + 1);
  }
  
  Logger.log("Sucesso! Todos os 40 dias de treinamento em inglês foram adicionados ao seu Google Agenda.");
}
