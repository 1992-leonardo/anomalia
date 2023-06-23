// Dados de exemplo para o gráfico
var data = [
    { x: [], y: [], type: 'scatter', mode: 'lines', name: 'Dados de Saúde', line: { color: 'green' } }
  ];
  
  // Configurações do layout do gráfico
  var layout = {
    title: 'Monitoramento de Saúde',
    xaxis: { title: 'Tempo' },
    yaxis: { title: 'Valor' },
    margin: { t: 30 }
  };
  
  // Renderizar o gráfico
  Plotly.newPlot('health-graph', data, layout);
  
  // Função para atualizar o gráfico com novos dados e cores
  function updateGraph(x, y, color) {
    var update = { x: [[x]], y: [[y]], line: { color: color } };
    Plotly.extendTraces('health-graph', update, [0]);
  }
  
  // Função para validar as respostas e determinar as cores
  function validateResponses() {
    var heartbeat = parseInt(document.getElementById('heartbeat').value);
    var sleep = parseInt(document.getElementById('sleep').value);
    var weight = parseInt(document.getElementById('weight').value);
    var pressure = parseInt(document.getElementById('blood-pressure').value);
    var activityLevel = parseInt(document.getElementById('activity-level').value);
    var symptoms = document.getElementById('symptoms').value;
    var diet = document.getElementById('diet').value;
    var medication = document.getElementById('medication').value;
    var familyHistory = document.getElementById('family-history').value;
  
    var heartbeatColor = 'green';
    var sleepColor = 'green';
    var weightColor = 'green';
    var pressureColor = 'green';
    var activityLevelColor = 'green';
    var symptomsColor = 'green';
    var dietColor = 'green';
    var medicationColor = 'green';
    var familyHistoryColor = 'green';
  
    if (heartbeat <= 39) {
      heartbeatColor = 'red';
    } else if (heartbeat <= 50) {
      heartbeatColor = 'yellow';
    }
  
    if (sleep <= 4) {
      sleepColor = 'red';
    } else if (sleep <= 6) {
      sleepColor = 'gren';
    }
  
    if (weight <= 45) {
      weightColor = 'red';
    } else if (weight <= 55) {
      weightColor = 'gren';
    }
  
    if (pressure <= 5) {
      pressureColor = 'red';
    } else if (pressure <= 7) {
      pressureColor = 'gren';
    }
  
    if (activityLevel === 0) {
      activityLevelColor = 'red';
    } else if (activityLevel === 3) {
      activityLevelColor = 'gren';
    }
  
    if (symptoms === 'ruim') {
      symptomsColor = 'red';
    } else if (symptoms === 'estavel') {
      symptomsColor = 'gren';
    }
  
    if (diet === 'ruim') {
      dietColor = 'red';
    } else if (diet === 'medio') {
      dietColor = 'gren';
    }
  
    if (medication === 'sim') {
      medicationColor = 'red';
    } else if (medication === 'asvezes') {
      medicationColor = 'gren';
    }
  
    if (familyHistory === 'doente') {
      familyHistoryColor = 'red';
    } else if (familyHistory === 'alguns') {
      familyHistoryColor = 'gren';
    }
  
    updateGraph(new Date().getTime(), Math.random() * 100, heartbeatColor);
    updateGraph(new Date().getTime(), Math.random() * 100, sleepColor);
    updateGraph(new Date().getTime(), Math.random() * 100, weightColor);
    updateGraph(new Date().getTime(), Math.random() * 100, pressureColor);
    updateGraph(new Date().getTime(), Math.random() * 100, activityLevelColor);
    updateGraph(new Date().getTime(), Math.random() * 100, symptomsColor);
    updateGraph(new Date().getTime(), Math.random() * 100, dietColor);
    updateGraph(new Date().getTime(), Math.random() * 100, medicationColor);
    updateGraph(new Date().getTime(), Math.random() * 100, familyHistoryColor);
  }
  
  // Evento de mudança dos campos para atualizar o gráfico
  document.querySelectorAll('.question input, .question select').forEach(function (element) {
    element.addEventListener('change', function () {
      validateResponses();
    });
  });
  
  // Evento de clique no botão de validação
  document.getElementById('validate-button').addEventListener('click', function () {
    validateResponses();
  });
  