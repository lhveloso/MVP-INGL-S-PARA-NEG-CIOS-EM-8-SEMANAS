# 📅 Planejador de Estudos de Inglês Automatizado (8 Semanas)

Este projeto automatiza a criação de um cronograma diário de estudos de inglês para negócios de **8 semanas** (totalizando 40 dias de treinamento) diretamente no seu **Google Agenda** utilizando o **Google Apps Script**.

Cada evento criado na agenda contém um **Prompt de Comando Mestre** adaptado para o tema do dia, projetado para você copiar e colar no ChatGPT/Gemini e começar a praticar conversação imediatamente.

## 🛠️ Como Utilizar no seu Google Workspace

1. Acesse o painel do [Google Apps Script](https://script.google.com/).
2. Crie um **Novo Projeto**.
3. Copie o código do arquivo `codigo.gs` deste repositório e cole no editor do Google.
4. Ajuste a linha `var dataInicio = new Date(ANO, MÊS, DIA);` para a data que você deseja iniciar o seu curso.
   * *Atenção:* No JavaScript, os meses começam em `0` (Janeiro é `0`, Julho é `6`, etc.).
5. Clique no ícone de salvar e depois em **Executar**.
6. Conceda as permissões de segurança solicitadas pelo Google para que o script possa inserir os eventos na sua agenda.

## 📈 Pilares da Metodologia do Cronograma
* **Semanas 1 a 3:** Método de *Chunks* (Blocos de fala automáticos).
* **Semanas 4 a 6:** *Connected Speech* (Fluidez de conexão fonética).
* **Semanas 7 a 8:** Improviso sob pressão (Cenários simulados de negócios).
