
function calcular() {
   let xvalor = document.getElementById("valor");
   let xparcela = document.getElementById("parcela");
   let xjuros = document.getElementById("juros");
   let table = document.getElementById("lista");
   
   // Limpa a tabela antes de adicionar novas linhas
   table.innerHTML = '<tr><th>#</th><th>Valor da Parcela</th><th>Juros</th><th>Total</th></tr>';

   let valorPrincipal = Number(xvalor.value);
   let taxaJuros = Number(xjuros.value) / 100;
   let numParcelas = Number(xparcela.value);

   let valorParcela = (valorPrincipal * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -numParcelas));
   let totalPago = valorParcela * numParcelas;

   for (let i = 1; i <= numParcelas; i++) {
       const row = document.createElement("tr");
       row.innerHTML = `
        <td>${i}</td>
        <td>R$ ${valorParcela.toFixed(2)}</td>
        <td>${(taxaJuros * 100).toFixed(2)}%</td>
        <td>R$ ${totalPago.toFixed(2)}</td>
       `;
       table.appendChild(row);

       totalPago -= valorParcela; // Subtrai o valor da parcela já adicionada
   }
}
